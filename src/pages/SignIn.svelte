<script>
    import axios from '../utilities/axios';
    import {onMount} from 'svelte';
    import { auth, notify } from '../store/app';
    import { link, push } from 'svelte-spa-router';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';

    // Varaibles
    let emailRef;
    let email = "";
    let emailErr = false;
    let emailPassed = false;
    let password = "";
    let passwordRef = "";
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Functions
    const togglePassword = (e) => {
        passwordRef.type === 'password' ? passwordRef.type = 'text' : passwordRef.type = 'password';
        e.target.classList.contains('fa-eye-slash') ? e.target.classList.replace("fa-eye-slash", "fa-eye") : e.target.classList.replace("fa-eye", "fa-eye-slash")
    }

    const validateEmail = () => {
        emailPassed = emailRegex.test(email);
        !emailPassed ? emailErr = true: emailErr = false;
    }

    $: login = async() => {
        if(!email || !password || emailPassed !== true){
            notify.update((state)=>{
                state.isIncident = true,
                state.reason = 'provide required fields';
                state.status = 'warning';
                return state;
            })
            return;
        }

        try {
            const response = await axios.post('account/login', {email, password}, {withCredentials: true})

            if(response.status === 200){
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
                // set session data.
                sessionStorage.setItem('user', response.data.accessToken);
                sessionStorage.setItem('profile', JSON.stringify({
                    name: response.data.name,
                    country: response.data.country,
                    email: response.data.email,
                    gender: response.data.gender
                }))
                
                auth.update((state) => {
                    state.isAuth = true,
                    state.user = response.data.accessToken;
                    
                    return state;
                })
                push('/dashboard')
            }
        } catch (err) {
            notify.update((state)=>{
                state.isIncident = true,
                state.reason = 'no internet';
                state.status = 'error';
                return state;
            })
            console.log(err)
        }
    }
    
    onMount(()=>{
        emailRef.focus();
    })
</script>

<section class="auth-wrapper">
    <section class="auth">
        <h2>Sign In</h2>
        
        <form on:submit|preventDefault={login}>
            <div class="input-group">
                <label for="identity">email</label>
                <div class="field">
                    <input type="text" name="identity" id="identity" bind:this={emailRef} bind:value={email} on:input={validateEmail}>
                </div>
                {#if emailErr}
                    <small class="warning">Email not valid yet!</small>
                {/if}
            </div>

            <div class="input-group">
                <label for="password">password</label>
                <div class="field">
                    <input type="password" name="password" id="password" bind:value={password} bind:this={passwordRef}>
                    <i class="fa-solid fa-eye-slash" on:click={togglePassword}></i>
                </div>
            </div>

            <ButtonSubmit>Sign In</ButtonSubmit>
        </form>
        <a href="/register" use:link class="form-foot">Not registered yet? Join</a>
    </section>
</section>

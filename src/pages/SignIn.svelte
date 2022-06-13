<script>
    import axios from 'axios';
    import {onMount} from 'svelte';
    import { auth, user } from '../store/app';
    import { link, push } from 'svelte-spa-router';
    // import { setSessionStorage } from '../utilities/browser';
    // import {link} from 'svelte-routing';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';

    let emailRef;
    let email = "";
    let emailErr = false;
    let emailPassed = false;
    let password = "";
    let passwordRef = "";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    onMount(()=>{
        emailRef.focus();
    })

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
            console.log('provide all fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/account/login', {email, password})
            if(response.status === 200){
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`

                sessionStorage.setItem('user', response.data.accessToken);
                sessionStorage.setItem('profile', JSON.stringify({
                    name: response.data.name,
                    country: response.data.country,
                    email: response.data.email,
                    gender: response.data.gender
                }))

                // user.update((user)=>{user = response.data.accessToken})

                auth.update((state) => {
                    state.isAuth = true,
                    state.user = response.data.accessToken;

                    return state;
                })
                // auth.set({isAuth: true, user: response.data.accessToken})
                push('/dashboard')
            }
        } catch (err) {
            console.log(err)
        }
    }

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

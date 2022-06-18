<script>
    import { auth, notify } from '../store/app';
    import { onMount } from 'svelte';
    import {link, push} from 'svelte-spa-router';
    // import {link} from 'svelte-routing';
    import axios from '../utilities/axios';
    import {} from '../utilities/browser';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';

    // Variables
    let name = "";
    let nameRef;
    let nameErr = false;
    let namePassed = false;
    let password = "";
    let passwordRef;
    let passwordErr = false;
    let passwordPassed = false;
    let cPassword = "";
    let email= "";
    let emailErr = false;
    let emailPassed = false;
    let country = "";
    let gender = "";
    let nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{4,15}$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
    let passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    // Functions
    function togglePassword(e){
        passwordRef.type === 'password' ? passwordRef.type = 'text' : passwordRef.type = 'password';
        e.target.classList.contains('fa-eye-slash') ? e.target.classList.replace("fa-eye-slash", "fa-eye") : e.target.classList.replace("fa-eye", "fa-eye-slash")
    }

    const validateName = () => {
        namePassed = nameRegex.test(name);
        !namePassed ? nameErr = true: nameErr = false;
        if(!name) nameErr = false;
    }

    const validateEmail = () => {
        emailPassed = emailRegex.test(email);
        !emailPassed ? emailErr = true: emailErr = false;
        if(!email) emailErr = false;
    }

    const validatePassword = () => {
        passwordPassed = passwordRegex.test(password);
        !passwordPassed ? passwordErr = true: passwordErr = false;
        if(!password) passwordErr = false;
    }

    $: registerUser = async () =>{
        try {
            if(!name || !email || !country || !password){
                notify.update((state)=>{
                    state.isIncident = true;
                    state.status = "warning";
                    state.reason = 'Please provide required fields'

                    return state;
                })
                return;
            }
            
            if(password !== cPassword){
                notify.update((state)=>{
                    state.isIncident = true;
                    state.status = "error";
                    state.reason = 'Password mis-matched'

                    return state;
                })
                return;
            }

            const response = await axios.post('account/register', {name, email, country, gender, password}, {withCredentials: true});
            
            if(response.status === 200){
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`

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
                state.isIncident = true;
                state.status = "error";
                state.reason = 'grave error';

                return state;
            })
            console.log(err)
        }
    }

    onMount(()=>{
        nameRef.focus();
    })
    
</script>

<section class="auth-wrapper">
    <section class="auth">
        <h2>Join the project</h2>
        <p>Add an adage to the codebase. Get it used by millions of people.</p>
        
        <form on:submit|preventDefault={registerUser} method="post">
            <div class="input-group">
                <label for="name">name <span>*</span></label>
                <div class="field">
                    <input type="text" name="name" id="name" bind:value={name} bind:this={nameRef} on:input={validateName}>
                </div>
                {#if nameErr === true}
                    <small class="warning">Can only contain alphabets, numbers, _ with no space and above 4 characters</small>
                {/if}
            </div>

            <div class="input-group">
                <label for="email">email <span>*</span></label>
                <div class="field">
                    <input type="email" name="email" id="email" bind:value={email} on:input={validateEmail}>
                </div>
                {#if emailErr === true}
                    <small class="warning">Email isn't valid yet!</small>
                {/if}
            </div>

            <div class="flex-inline">
                <div class="input-group">
                    <label for="country">Country <span>*</span></label>
                    <div class="field">
                        <input type="text" name="country" id="country" list="countries" bind:value={country}>
                        <datalist id="countries">
                            <option value="Nigeria"></option>
                            <option value="South Africa"></option>
                        </datalist>
                    </div>
                </div>

                <div class="input-group">
                    <label for="gender">Gender</label>
                    <div class="field">
                        <input type="text" name="gender" id="gender" list="genderlist" bind:value={gender}>
                        <datalist id="genderlist">
                            <option value="Male"></option>
                            <option value="Femaale"></option>
                        </datalist>
                    </div>
                </div>
            </div>

            <div class="input-group">
                <label for="password">password <span>*</span></label>
                <div class="field">
                    <input type="password" name="password" id="password" bind:value={password} bind:this={passwordRef} on:input={validatePassword}>
                    <i class="fa-solid fa-eye-slash" on:click={togglePassword}></i>
                </div>
                {#if passwordErr === true}
                    <small class="warning">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</small>
                {/if}
            </div>

            <div class="input-group">
                <label for="kpassword">confirm password <span>*</span></label>
                <div class="field">
                    <input type="password" name="cPassword" id="cPassword" bind:value={cPassword}>
                </div>
            </div>

            <ButtonSubmit>create new account</ButtonSubmit>
        </form>
        <a href="/login" use:link class="form-foot"> Already registered? Log in</a>
    </section>
</section>

<style>

</style>
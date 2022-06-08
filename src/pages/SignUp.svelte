<script>
    import { onMount } from 'svelte';
    import {link, push} from 'svelte-spa-router';
    import axios from 'axios';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';

    let name = "";
    let nameRef;
    let nameErr = false;
    let password = "";
    let passwordErr = false;
    let cPassword = "";
    let email= "";
    let emailErr = false;
    let country = "";
    let gender = "";
    let nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{4,8}$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
    let passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    onMount(()=>{
        nameRef.focus();
    })

    function togglePassword(e){
        passInput.type === 'password' ? passInput.type = 'text' : passInput.type = 'password';
        e.target.classList.contains('fa-eye-slash') ? e.target.classList.replace("fa-eye-slash", "fa-eye") : e.target.classList.replace("fa-eye", "fa-eye-slash")
    }

    const validateName = () => {
        let namePassed = nameRegex.test(name);
        !namePassed ? nameErr = true: nameErr = false;
        if(!name) nameErr = false;
    }

    const validateEmail = () => {
        let emailPassed = emailRegex.test(email);
        !emailPassed ? emailErr = true: emailErr = false;
        if(!email) emailErr = false;
    }

    const validatePassword = () => {
        let passwordPassed = passwordRegex.test(password);
        !passwordPassed ? passwordErr = true: passwordErr = false;
        if(!password) passwordErr = false;
    }

    $:registerUser = async () =>{
        if(!name || !email || !country || !gender || !password){
            console.log('provide required fields')
            return ;
        }
        
        if(password !== cPassword){
            console.log('password mis-matched')
            return;
        }
        const response = await axios.post('http://localhost:8080/account/register', {name, email, country, gender, password }, {})
        // await push('/dashboard')
    }
    
 
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
                    <label for="country">Country</label>
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
                    <input type="password" name="password" id="password" bind:value={password} on:input={validatePassword}>
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
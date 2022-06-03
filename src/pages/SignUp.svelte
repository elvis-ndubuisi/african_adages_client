<script>
    import {link} from 'svelte-spa-router';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';

    let password = "";
    let passInput = "";
    let cPassword = "";
    let name = ""
    let email= "";
    let country = "";
    let gender = "";

    function togglePassword(e){
        passInput.type === 'password' ? passInput.type = 'text' : passInput.type = 'password';
        e.target.classList.contains('fa-eye-slash') ? e.target.classList.replace("fa-eye-slash", "fa-eye") : e.target.classList.replace("fa-eye", "fa-eye-slash")
    } 
</script>

<section class="auth-wrapper">
    <section class="auth">
        <h2>Join the project</h2>
        <p>Add an adage to the codebase. Get it used by millions of people.</p>
        
        <form>
            <div class="input-group">
                <label for="name">name <span>*</span></label>
                <div class="field">
                    <input type="text" name="name" id="name" bind:value={name}>
                </div>
            </div>

            <div class="input-group">
                <label for="email">email <span>*</span></label>
                <div class="field">
                    <input type="email" name="email" id="email" bind:value={email}>
                </div>
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
                    <input type="password" name="password" id="password" bind:value={password} bind:this={passInput}>
                    <i class="fa-solid fa-eye-slash" on:click={togglePassword}></i>
                </div>
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
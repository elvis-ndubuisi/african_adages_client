<section class="auth-wrapper">
    <section class="auth">
        <span class="brand">
            <AdageIcon/>
        </span>
        <h3>Sign Up</h3>
        
        <form>
            <div class="input-group">
                <label for="name">name</label>
                <div class="field">
                    <input type="text" name="name" id="name">
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>

            <div class="input-group">
                <label for="email">email</label>
                <div class="field">
                    <input type="email" name="email" id="email">
                    <i class="fa-solid fa-at"></i>
                </div>
            </div>

            <div class="flex-inline">
                <div class="input-group">
                    <label for="country">Country</label>
                    <div class="field">
                        <input type="text" name="country" id="country" list="countries">
                        <i class="fa-solid fa-earth-africa"></i>
                        <datalist id="countries">
                            <option value="Nigeria"></option>
                            <option value="South Africa"></option>
                        </datalist>
                    </div>
                </div>

                <div class="input-group">
                    <label for="gender">Gender</label>
                    <div class="field">
                        <input type="text" name="gender" id="gender" list="genderlist">
                        <datalist id="genderlist">
                            <option value="Male"></option>
                            <option value="Femaale"></option>
                        </datalist>
                    </div>
                </div>
            </div>

            <div class="input-group">
                <label for="password">password</label>
                <div class="field">
                    <input type="password" name="password" id="password">
                    <i class="fa-solid fa-eye-slash"></i>
                </div>
            </div>

            <div class="input-group">
                <label for="kpassword">confirm password</label>
                <div class="field">
                    <input type="password" name="kpassword" id="kpassword">
                </div>
            </div>

            <ButtonPrimary type="submit">Submit</ButtonPrimary>
        </form>
        <p class="form-foot">Not registered yet? <a href="/login" use:link>Sign up now</a></p>
    </section>
</section>

<script>
    import {link} from 'svelte-spa-router';
    import AdageIcon from "../components/AdageIcon.svelte";
    import ButtonPrimary from '../components/ButtonPrimary.svelte';
</script>

<style>
    .auth {
        min-width: 300px;   
        max-width: 400px;   
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 0.5rem;
        color: hsl(var(--clr-white));
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .brand {
        fill: hsl(var(--clr-secondary));
        width: 64px;
        height: 64px;
    }
    .flex-inline {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
</style>
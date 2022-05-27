<section class="auth-wrapper">
    <section class="auth">
        <span class="brand">
            <AdageIcon/>
        </span>
        <h3>Sign In</h3>
        
        <form>
            <div class="input-group">
                <label for="identity">username/email</label>
                <div class="field">
                    <input type="text" name="identity" id="identity">
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>

            <div class="input-group">
                <label for="password">password</label>
                <div class="field">
                    <input type="password" name="password" id="password">
                    <i class="fa-solid fa-eye-slash"></i>
                </div>
            </div>

            <ButtonPrimary type="submit">Submit</ButtonPrimary>
        </form>
        <p class="form-foot">Not registered yet? <a href="/join" use:link>Sign up now</a></p>
    </section>
</section>

<script>
    import { link } from 'svelte-spa-router';
    import AdageIcon from "../components/AdageIcon.svelte";
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';
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
</style>
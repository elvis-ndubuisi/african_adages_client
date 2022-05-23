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
        <p class="form-foot">Not registered yet? <a href="#/register">Sign up now</a></p>
    </section>
</section>

<script>
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
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
    }
    .input-group .field {
        background-color: hsl(var(--clr-white));
        padding: 0.45rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        color: hsl(var(--clr-primary));
    }
    .field i{
        cursor: pointer;
        padding: 0 0.3rem;
    }
    .field i:hover, .field i:focus{
        color: hsl(var(--clr-secondary));
    }
</style>
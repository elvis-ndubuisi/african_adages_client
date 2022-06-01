<script>
    import { link } from 'svelte-spa-router';
    import ButtonSubmit from '../components/buttons/ButtonSubmit.svelte';

    let email = "";
    let password = "";
    let passInput = "";

    function togglePassword(e){
        passInput.type === 'password' ? passInput.type = 'text' : passInput.type = 'password';
        e.target.classList.contains('fa-eye-slash') ? e.target.classList.replace("fa-eye-slash", "fa-eye") : e.target.classList.replace("fa-eye", "fa-eye-slash")
    }
</script>

<section class="auth-wrapper">
    <section class="auth">
        <h2>Sign In</h2>
        
        <form>
            <div class="input-group">
                <label for="identity">email</label>
                <div class="field">
                    <input type="text" name="identity" id="identity" bind:value={email}>
                </div>
            </div>

            <div class="input-group">
                <label for="password">password</label>
                <div class="field">
                    <input type="password" name="password" id="password" bind:value={password} bind:this={passInput}>
                    <i class="fa-solid fa-eye-slash" on:click={togglePassword}></i>
                </div>
            </div>

            <ButtonSubmit>Sign In</ButtonSubmit>
        </form>
        <a href="/join" use:link class="form-foot">Not registered yet? Join</a>
    </section>
</section>

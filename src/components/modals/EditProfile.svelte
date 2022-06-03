<script>
    import { createEventDispatcher } from 'svelte';
    import {fade, slide} from 'svelte/transition';
    import ButtonSubmit from '../buttons/ButtonSubmit.svelte';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';

    const dispatch = createEventDispatcher();

</script>

<section class="modal-comp" transition:fade>
    <div class="flex-inline">
        <h2>Edit Profile</h2>
        <ButtonIcon on:click={()=>dispatch('close')}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <form method="post" transition:slide|local>
        <div class="input-group">
            <label for="username">Username</label>
            <div class="field">
                <input type="text" name="usename" id="username">
            </div>
        </div>

        <div class="input-group">
            <label for="email">Email</label>
            <div class="field">
                <input type="email" name="email" id="email" autocomplete="off">
            </div>
        </div>

        <div class="input-group">
            <label for="email">Twitter</label>
            <div class="field">
                <input type="text" name="social" id="social" autocomplete="off">
            </div>
        </div>

        <ButtonSubmit>Update Profile</ButtonSubmit>
    </form>
</section>



<style>
    .flex-inline {
        margin-bottom: 2rem;
    }
    h2 {
        text-align: left;
    }
</style>
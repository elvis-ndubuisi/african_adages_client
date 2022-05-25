<section class="modal-comp">
    <div class="flex-inline">
        <h2>Edit Profile</h2>
        <ButtonIcon on:click={cancelModal}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <img src="" alt="profile">
    <form>
        <div class="input-group">
            <label for="username">Username</label>
            <div class="field">
                <input type="text" name="usename" id="username">
            </div>
        </div>

        <div class="input-group">
            <label for="email">Email</label>
            <div class="field">
                <i class="fa-solid fa-earth-africa"></i>
                <input type="email" name="email" id="email" autocomplete="off">
            </div>
        </div>

        <ButtonPrimary><i class="fa-solid fa-plus"></i> <span>Update Profile</span></ButtonPrimary>
    </form>
</section>

<script>
    import { createEventDispatcher } from 'svelte';
    import ButtonIcon from '../ButtonIcon.svelte';
    import ButtonPrimary from '../ButtonPrimary.svelte';

    const dispatch = createEventDispatcher();

    function cancelModal(){
        dispatch('close-modal')
    }
</script>

<style>
    img {
        max-width: 140px;
        max-height: 140px;
        aspect-ratio: 1;
        overflow: hidden;
        object-fit: contain;
        object-position: center;
        background-color: hsl(var(--clr-primary), 0.2);
    }
    .flex-inline {
        margin-bottom: 2rem;
    }
    h2 {
        text-align: left;
        color: hsl(var(--clr-secondary));
    }
</style>
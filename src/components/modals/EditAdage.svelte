<section class="modal-comp">
    <div class="flex-inline">
        <h2>Update Adage</h2>
        <ButtonIcon on:click={cancelModal}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <form on:submit={handleSubmit} method="post">
        <div class="input-group">
            <label for="adage">Adage</label>
            <div class="field">
                <textarea name="adage" id="adage" cols="14" rows="10"></textarea>
            </div>
        </div>
        <ButtonPrimary><i class="fa-solid fa-plus"></i> <span>Update</span></ButtonPrimary>
    </form>
</section>

<script>
    import { createEventDispatcher } from 'svelte';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonPrimary from '../buttons/ButtonPrimary.svelte';

    const dispatch = createEventDispatcher();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submited');
    }
    function cancelModal(){
        dispatch('close-modal')
    }
</script>

<style>
    .flex-inline{
        margin-bottom: 2rem;
    }
    h2 {
        text-align: left;
        color: hsl(var(--clr-secondary));
    }
</style>
<section class="modal-comp">
    <img src="" alt="profile">
    <form on:submit={handleSubmit} method="post">
        <div class="input-group">
            <label for="adage">Adage</label>
            <div class="field">
                <textarea name="adage" id="adage" cols="14" rows="10"></textarea>
            </div>
        </div>
        <div class="flex-inline">
            <ButtonPrimary><i class="fa-solid fa-plus"></i> <span>Update</span></ButtonPrimary>
            <ButtonPrimary on:click={closeModal}><i class="fa-solid fa-plus"></i> <span>Cancel</span></ButtonPrimary>
        </div>
    </form>
</section>

<script>
    import {adageItemState} from '../../store.js';
    import ButtonPrimary from '../ButtonPrimary.svelte';

    const closeModal = () =>{
        adageItemState.set({isEditing: false})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submited');
    }
</script>

<style>
</style>
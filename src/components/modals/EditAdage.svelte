<script>
    import axios from '../../utilities/axios';
    import { createEventDispatcher } from 'svelte';
    import {fade, slide} from 'svelte/transition';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonSubmit from '../buttons/ButtonSubmit.svelte';
    import { notify, adageModStore, adageStore, modalStore } from '../../store/app';
    const dispatch = createEventDispatcher();

    let adage = $adageModStore.adage;
    let country = $adageModStore.country;


    const handleSubmit = async ()=>{
        const result = await adageStore.editAdage($adageModStore.id, {adage, country}, $adageStore.page);
        if(result.updated === true){
            notify.update((state) => {
                state.isIncident = true;
                state.reason = 'Adage Updated';
                state.status = "Successful";
                return state;
            })
            $modalStore.canClickNext = true;
            $modalStore.shouldDisplay = "";
            await adageModStore.resetAction();
        }else {}
    }
</script>

<section class="modal-comp" transition:fade>
    <div class="flex-inline">
        <h2>Update Adage</h2>
        <ButtonIcon on:click={()=>dispatch('close')}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <form on:submit|preventDefault={handleSubmit} method="post" transition:slide|local>
        <div class="input-group">
            <label for="adage">Adage</label>
            <div class="field">
                <textarea name="adage" id="adage" cols="14" rows="10" bind:value={adage}></textarea>
            </div>
        </div>
        <div class="input-group">
            <label for="country">Country</label>
            <div class="field">
                <input type="text" bind:value={country}>
            </div>
        </div>
        <ButtonSubmit>Update Adage</ButtonSubmit>
    </form>
</section>



<style>
    .flex-inline{
        margin-bottom: 2rem;
    }
    h2 {
        text-align: left;
        color: hsl(var(--clr-secondary));
    }
</style>
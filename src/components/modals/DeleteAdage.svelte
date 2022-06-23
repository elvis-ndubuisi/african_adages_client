<script>
    import { notify, adageStore, adageModStore, modalStore } from '../../store/app';
    import { createEventDispatcher } from 'svelte';
    import {fade} from 'svelte/transition';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonCancel from '../buttons/ButtonSend.svelte';
    import ButtonAccept from '../buttons/ButtonCTA_Dark.svelte';

    
    const dispatch = createEventDispatcher();

    const deleteAdage = async () => {
        const result = await adageStore.deleteAdage($adageModStore.id, $adageStore.page);
        if(result.deleted === true) {
            notify.update((state) => {
                state.isIncident = true;
                state.reason = `${$adageModStore.adage} deleted`;
                state.status = 'Deleted';
                return state;
            })
            await adageModStore.resetAction();
            $modalStore.canClickNext = true;
            $modalStore.shouldDisplay = "";
        }
    }
</script>

<section class="modal-comp" transition:fade>
    <div class="flex-inline">
        <h2>Are you sure?</h2>
        <ButtonIcon on:click={()=>dispatch('close')}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <div class="flex-inline">
        <ButtonCancel on:click={()=>dispatch('close')}>Cancel</ButtonCancel>
        <ButtonAccept on:click={deleteAdage}>Delete</ButtonAccept>
    </div>
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
<script>
    import axios from '../../utilities/axios';
    import { notify } from '../../store/app';
    import { createEventDispatcher } from 'svelte';
    import {fade} from 'svelte/transition';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonCancel from '../buttons/ButtonSend.svelte';
    import ButtonAccept from '../buttons/ButtonCTA_Dark.svelte';
    const dispatch = createEventDispatcher();
    export let id = "";
    const deleteAdage = async () => {
        try {
            const response = await axios.delete('/cnt/profile/adage', {params: {id: id}});
            console.log('delete adage response ' + response);

            if(response.status === 200) {
                notify.update((state)=>{
                    state.isIncident = true;
                    state.reason = 'deleted';
                    state.status = response.status;
                    
                    return state;
                })
            }
        } catch (err) {
            console.log('deleted adage error ' + err)
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
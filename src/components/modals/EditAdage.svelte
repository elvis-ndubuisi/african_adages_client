<script>
    import axios from '../../utilities/axios';
    import { createEventDispatcher } from 'svelte';
    import {fade, slide} from 'svelte/transition';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonSubmit from '../buttons/ButtonSubmit.svelte';
import { notify } from '../../store/app';
    const dispatch = createEventDispatcher();

    export let adage = '';
    export let id = '';
    // export let country = "";
    // export let tags = "";

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.patch('/cnt/profile/adage', { params: {id} })
            console.log('edit adage response ' + response);

            if(response.status === 200) {
                notify.update((state) => {
                    state.isIncident = true;
                    state.status = response.status;
                    state.reason = 'adage edited';

                    return state;
                })
            }
        } catch (err) {
            console.log('edit adage error ' + err)
        }
    }
</script>

<section class="modal-comp" transition:fade>
    <div class="flex-inline">
        <h2>Update Adage</h2>
        <ButtonIcon on:click={()=>dispatch('close')}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <form on:submit={handleSubmit} method="post" transition:slide|local>
        <div class="input-group">
            <label for="adage">Adage</label>
            <div class="field">
                <textarea name="adage" id="adage" cols="14" rows="10" bind:value={adage}></textarea>
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
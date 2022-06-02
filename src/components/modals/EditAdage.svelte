<script>
    import { createEventDispatcher } from 'svelte';
    import {fade, slide} from 'svelte/transition';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonPrimary from '../buttons/ButtonPrimary.svelte';
    import ButtonSubmit from '../buttons/ButtonSubmit.svelte';
    const dispatch = createEventDispatcher();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submited');
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
                <textarea name="adage" id="adage" cols="14" rows="10"></textarea>
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
<section class="modal-comp">
    <div class="flex-inline">
        <h2>Add Adage</h2>
        <ButtonIcon on:click={cancelModal}><i class="fa-solid fa-times"></i></ButtonIcon>
    </div>
    <form>
        <div class="input-group">
            <label for="adage">Adage</label>
            <div class="field">
                <textarea name="adage" id="adage" cols="40" rows="6"></textarea>
            </div>
        </div>

        <div class="input-group">
            <label for="country">Unique to</label>
            <div class="field">
                <i class="fa-solid fa-earth-africa"></i>
                <input type="text" name="country" id="country" list="countries">
                <datalist id="countries">
                    <option value="Nigerian"></option>
                    <option value="Kenyan"></option>
                    <option value="South African"></option>
                    <option value="Nigerian"></option>
                    <option value="Nigerian"></option>
                </datalist>
            </div>
        </div>

        <div class="input-group">
            <label for="tags">Tags</label>
            <div class="field">
                <i class="fa-solid fa-hashtag"></i>
                <input type="email" name="tags" id="tags" placeholder="wisdon, life, joy, ...">
            </div>
        </div>

        <ButtonPrimary><i class="fa-solid fa-plus"></i> <span>Add Adage</span></ButtonPrimary>
    </form>
</section>

<script>
    import { createEventDispatcher } from 'svelte';
    import ButtonIcon from '../buttons/ButtonIcon.svelte';
    import ButtonPrimary from '../buttons/ButtonPrimary.svelte';

    const dispatch = createEventDispatcher();

    function cancelModal(){
        dispatch('close-modal')
    }
</script>

<style>
    .flex-inline {
        margin-bottom: 2rem;
    }
    h2 {
        text-align: left;
        color: hsl(var(--clr-secondary));
    }
</style>
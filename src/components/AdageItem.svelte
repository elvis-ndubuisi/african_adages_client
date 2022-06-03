<script>
    import { createEventDispatcher} from 'svelte';
    import ButtonIcon from "./buttons/ButtonIcon.svelte";

    const dispatch = createEventDispatcher();

    const editAdage = () => {
        dispatch('edit-adage', {ev_editAdage: true})
    }

    const deleteAdage = () => {
        dispatch('delete-adage', {ev_deleteAdage: true})
    }

    export let adage_payload = {};
</script>

<li class="adage-item">
    <p class="adage">{adage_payload.adage}</p>
    <section class="lls">
        <p>{adage_payload.country}</p>
        <p>{adage_payload.tags}</p>
    </section>
    <section class="action">
        <ButtonIcon><i class="fa-solid fa-pen-to-square"></i></ButtonIcon>
        <ButtonIcon><i class="fa-solid fa-trash-can"></i></ButtonIcon>
    </section>
</li>



<style>
    .adage-item {
        list-style: none;
        text-align: left;
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .lls{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 0.5rem;
    }
    .adage {
        font-family: var(--ff-secondary);
        font-weight: var(--fw-500);
        font-size: 1.3rem;
        flex-basis: 100%;
    }
    .action {
        display: flex;
        gap: 1rem;
        background-color: var(--clr-background);
        max-width: auto;
    }
</style>
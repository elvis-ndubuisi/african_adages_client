<script>
    import { createEventDispatcher} from 'svelte';
    import ButtonIcon from "./buttons/ButtonIcon.svelte";

    const dispatch = createEventDispatcher();

    const editAdage = () => {
        dispatch('edit-adage', {adage: adage_payload.adage, country: adage_payload.country, tags: adage_payload.tags})
    }

    const deleteAdage = () => {
        dispatch('delete-adage')
    }

    export let adage_payload = {};
</script>

<li class="adage-item">
    <section class="action">
        <ButtonIcon on:click={editAdage}><i class="fa-solid fa-pen-to-square"></i></ButtonIcon>
        <ButtonIcon on:click={deleteAdage}><i class="fa-solid fa-trash-can"></i></ButtonIcon>
    </section>
    <section>
        <p class="adage">{adage_payload.adage}</p>
        <section class="lls">
            <p>{adage_payload.country}</p>
            <p>{adage_payload.tags}</p>
        </section>
    </section>
</li>



<style>
    .adage-item {
        list-style: none;
        text-align: left;
        min-height: 80px;
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .adage-item > section:last-child {
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: stretch;
    }
    .lls{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 0.5rem;
    }
    .adage {
        font-weight: var(--fw-500);
        font-size: 1.3rem;
        flex-basis: 100%;
    }
    .action {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: var(--clr-secondary);
        padding: 0.5rem;
    }
    @media screen and (max-width: 768px){
        .adage-item > section:last-child {
            padding: 0.4rem;
        }
    }
</style>
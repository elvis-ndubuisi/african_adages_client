<script>
    import { modalStore, adageModStore } from '../store/app';
    import ButtonIcon from "./buttons/ButtonIcon.svelte";

    export let adage_payload = {};

    function editAdage(){
        if($modalStore.canClickNext === true){
            adageModStore.setAction(adage_payload);
            $modalStore.shouldDisplay = 'EDA';
            $modalStore.canClickNext = false;
        }
    }

    function deleteAdage(){
        if($modalStore.canClickNext === true){
            adageModStore.setAction(adage_payload);
            $modalStore.shouldDisplay = 'DEL';
            $modalStore.canClickNext = false;
        }
    }
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
        flex: 1 0 300px;
        list-style: none;
        text-align: left;
        min-height: 80px;
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        border-radius: 0.5rem;
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
        font-weight: var(--fw-200);
        flex-basis: 100%;
        text-transform: lowercase;
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
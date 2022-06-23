<script>
    import { createEventDispatcher} from 'svelte';
    import { adageStore } from '../store/app';
    import AdageItem from './AdageItem.svelte';
</script>

<ul class="adages">
    {#await $adageStore.adages then adages}
        {#each adages as adage}
            <AdageItem adage_payload={adage}/>
        {/each}
    {/await}
    
</ul>


<style>
    .adages {
        width: 100%;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        align-content: center;
        justify-content: left;
    }
    .no-adages {
        width: 100%;
        font-size: 2rem;
        font-family: var(--ff-secondarhy);
        font-weight: var(--fw-900);
        text-align: center;
        text-transform: capitalize;
        opacity: 0.7;
    }
    .loading {
        font-size: 1.5rem;
        opacity: 0.7;
        font-family: var(--ff-secondarhy);
        font-weight: var(--fw-900);
        text-align: center;
        text-transform: capitalize;
    }
</style>
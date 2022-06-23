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
</style>
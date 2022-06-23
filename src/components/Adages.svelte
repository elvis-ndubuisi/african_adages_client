<script>
    import {onMount, createEventDispatcher, onDestroy} from 'svelte';
    import { adageStore, modalStore } from '../store/app';
    import AdageItem from './AdageItem.svelte';
    const dispatch = createEventDispatcher();

    /* Variables */
    function handleEdit(event){
        console.log(event.detail)
    }
</script>

<ul class="adages">
    {#await $adageStore.adages then adages}
        {#each adages as adage}
            <AdageItem adage_payload={adage} on:edit_adage={handleEdit}/>
        {/each}
    {/await}
    
</ul>


<style>
    .adages {
        width: 100%;
        display: inline-flex;
        flex-direction: column;
    }
</style>
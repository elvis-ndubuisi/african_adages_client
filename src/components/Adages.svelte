<script>
    // import axios from '../utilities/axios';
    import fetchAdages from '../utilities/fetchAdages'
    import {onMount, createEventDispatcher, onDestroy} from 'svelte';
    import { modalStore, curPage } from '../store/app';
    import AdageItem from './AdageItem.svelte';

    // Variables
    $: adages = "";
    const dispatch = createEventDispatcher();

    // Functions
    const selectModal = (modalStr) => {
        modalStore.update((state)=>{
            if(state.shouldDisplay === ""){
                state.shouldDisplay = modalStr.toUpperCase();
            }
            return state;
        })
    }

    const handleEdit = (event, id) => {
        selectModal("EDA");
        dispatch('selected_adage', {...event.detail, id})
    }

    const handleDelete = (event, id) => {
        selectModal('DEL')
        dispatch('delete_selected', {...event.detail, id})
    }


    onMount(async ()=>{
        adages = await fetchAdages();
        let cp = adages.page;
        if(cp) {
            curPage.update(n => n = cp);
        }else {
            curPage.update(n => n = 0)
        }
    })

    onDestroy(() => {
    })
</script>

{#if adages.count !== 0}
    <ul class="adages">
        {#await adages}
        <li>
            <p class="loading">...loading adage(s)</p>
        </li>
        {:then val}
            {#if val}
                {#each val.data as item (item.id)}
                    <AdageItem adage_payload={item} on:edit-adage={(event)=>handleEdit(event, item.id)} on:delete-adage={(event)=>handleDelete(event, item.id)}/>
                {/each}
            {/if}
        {:catch error}
            <p style="color: red">Something went wrong...</p>
        {/await}
    </ul>
{:else}
    <section class="no-adages">
        <p>no adages. add you adage</p>
    </section>
{/if}


<style>
    .adages {
        width: 100%;
        display: inline-flex;
        flex-direction: column;
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
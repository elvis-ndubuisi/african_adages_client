<script>
    import axios from '../utilities/axios';
    import {onMount} from 'svelte';
    import AdageItem from './AdageItem.svelte';

    // Variables
    let data;

    // Functions
    const fetchData = async () => {
        try {
            const response = await axios.get('cnt/profile/adages');
            if(response.status = 200) {data = await response.data};
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    onMount(()=>{
        fetchData()
    })
</script>

<ul class="adages">
    <!-- {#each data.daa as item}
        <AdageItem/>
    {/each} -->

    {#if data}
        <p>Adage avaliable</p>
        {:else}
        <h3>No Adages added yet! Add an adage.</h3>
    {/if}
</ul>

<style>
    .adages {
        width: 100%;
        display: inline-flex;
        flex-direction: column;
    }
</style>
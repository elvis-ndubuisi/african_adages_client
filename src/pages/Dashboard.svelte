<section class="dashboard">
    <section class="comp-wrapper">
        <section class="profile-card">
            <img class="img-holder" src={profileImg} alt={profileImg}>
            <h3>Elvis</h3>
            <p>provictor.ie@gmail.com</p>
            <div>
                <ButtonPrimary on:click={()=>{isEditProfile = activateModal(isEditProfile)}}><i class="fa-solid fa-user-pen"></i><span>Edit Profile</span></ButtonPrimary>
                <ButtonTertiary><i class="fa-solid fa-arrow-right-from-bracket"></i> <span>Log out</span></ButtonTertiary>
            </div>
        </section>
        <section class="main">
            <header class="action-bar">
                <ButtonTertiary on:click={()=>{isAddAdage = activateModal(isAddAdage)}}><i class="fa-solid fa-circle-plus"></i> <span>Add adage</span></ButtonTertiary>
                <Searchbar placeholder={'Search Adage...'}/>
            </header>
            <ul>
                <AdageItem />
                <AdageItem />
                <AdageItem />
                <AdageItem />
                <AdageItem />
                <AdageItem />
            </ul>
        </section>
    </section>
</section>

{#if isEditProfile !== false}
    <EditProfile/>
{/if}
{#if isAddAdage !== false}
    <AddAdage/>
{/if}
{#if adageState?.isEditing !== false}
    <EditAdage/>
{/if}

<script>
    import {onDestroy} from 'svelte';
    import { adageItemState } from '../store.js';
    import activateModal from '../helpers/activateModal.js';
    import ButtonPrimary from '../components/ButtonPrimary.svelte';
    import ButtonTertiary from '../components/ButtonTertiary.svelte';
    import Searchbar from '../components/Searchbar.svelte';
    import AdageItem from '../components/AdageItem.svelte';
    import AddAdage from '../components/modals/AddAdage.svelte';
    import EditProfile from '../components/modals/EditProfile.svelte';
    import EditAdage from '../components/modals/EditAdage.svelte';

    $:isAddAdage = false;
    $:isEditProfile = false;

    let adageState;
    const unsubAdageState = adageItemState.subscribe(value=>{adageState = value});

    onDestroy(unsubAdageState)
    let profileImg = '/assets/asteroids.jpg';

</script>

<style>
    .dashboard {
        min-height: calc(100vh - var(--nav-height));
        background-color: hsl(var(--clr-primary), 0.1);
    }
    .comp-wrapper {
        margin-block: 1rem;
        padding: 1.5rem 0;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }
    .profile-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        max-height: auto;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: hsl(var(--clr-white));
    }
    .img-holder {
        min-height: 100px;
        min-width: 100px;
        max-height: 150px;
        max-width: 150px;
        aspect-ratio: 1;
        border-radius: 50%;
        object-fit: cover;
        overflow: hiddem;
    }
    .profile-card div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
    }
    .main {
        flex: 1;
    }
    .action-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .main ul {
        max-height: 80vh;
        overflow-y: scroll;
        width: 100%;
        display: inline-flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 0.5rem 0;
    }
</style>
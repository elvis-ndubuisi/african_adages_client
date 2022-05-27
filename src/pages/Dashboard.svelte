<section class="dashboard">
    <section class="comp-wrapper">
        <section class="profile-card">
            <img class="img-holder" src={profileImg} alt={profileImg}>
            <h3>Elvis</h3>
            <p>provictor.ie@gmail.com</p>
            <div>
                <ButtonPrimary on:click={editProfile}><i class="fa-solid fa-user-pen"></i><span>Edit Profile</span></ButtonPrimary>
                <ButtonTertiary><i class="fa-solid fa-arrow-right-from-bracket"></i> <span>Log out</span></ButtonTertiary>
            </div>
        </section>
        <section class="main">
            <header class="action-bar">
                <ButtonTertiary on:click={addNewAdage}><i class="fa-solid fa-circle-plus"></i> <span>Add adage</span></ButtonTertiary>
                <Searchbar placeholder={'Search Adage...'}/>
            </header>
            <ul>
                <AdageItem on:delete-adage={deleteAdage} on:edit-adage={editAdage} />
                <AdageItem on:delete-adage={deleteAdage} on:edit-adage={editAdage} />
                <AdageItem on:delete-adage={deleteAdage} on:edit-adage={editAdage} />
            </ul>
        </section>
    </section>
</section>

{#if editAdageModal === true && (editProfileModal && addAdageModal) === false}
    <EditAdage on:close-modal={()=>{editAdageModal = false}}/>
    {:else if editProfileModal === true && (editAdageModal && addAdageModal) === false}
    <EditProfile on:close-modal={()=>{editProfileModal = false}}/>
    {:else if addAdageModal === true && (editAdageModal && editProfileModal) === false}
    <AddAdage on:close-modal={()=>{addAdageModal = false}}/>
{/if}

<script>
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';
    import ButtonTertiary from '../components/buttons/ButtonTertiary.svelte';
    import Searchbar from '../components/Searchbar.svelte';
    import AdageItem from '../components/AdageItem.svelte';
    import AddAdage from '../components/modals/AddAdage.svelte';
    import EditProfile from '../components/modals/EditProfile.svelte';
    import EditAdage from '../components/modals/EditAdage.svelte';

    $:editAdageModal = false;
    $:editProfileModal = false;
    $:addAdageModal = false;

    let profileImg = '/assets/asteroids.jpg';


    const addNewAdage = () => {
        addAdageModal = true;
        editAdageModal = false;
        editProfileModal = false;
    }

    function deleteAdage(){
        console.log('adage deleted')
    }

    function editAdage(e){
        addAdageModal = false;
        editAdageModal = true;
        editProfileModal = false;
    }

    function editProfile(){
        addAdageModal = false;
        editAdageModal = false;
        editProfileModal = true;
    }
</script>

<style>
    .dashboard {
        min-height: calc(100vh - var(--nav-height));
        background-color: hsl(var(--clr-primary), 0.1);
    }
    .comp-wrapper {
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
        padding: 0.5rem;
        background-color: hsl(var(--clr-primary), 0.4);
        scrollbar-color: hsl(var(--clr-primary), 0.4) hsl(var(--clr-secondary));
        scrollbar-width: 10px;
        scrollbar-track-color: hsl(var(--clr-primary), 0.4);
    }
    .main ul::-webkit-scrollbar {
        width: 10px;
    }
    .main ul::-webkit-scrollbar-track{
        background-color: hsl(var(--clr-primary), 0.4);
        border-radius: 5px;
    }
    .main ul::-webkit-scrollbar-thumb {
        background-color: hsl(var(--clr-primary));
        border-radius: 5px;
    }
</style>
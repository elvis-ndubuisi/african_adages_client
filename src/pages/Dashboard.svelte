<script>
    import { onDestroy, onMount } from 'svelte';
    import { replace } from 'svelte-spa-router';
    import { auth } from '../store/app';
    import jwtDecode from 'jwt-decode';
    import ButtonDark from '../components/buttons/ButtonDark.svelte';
    import ButtonSimple from '../components/buttons/ButtonSimple.svelte';
    import ButtonSend from '../components/buttons/ButtonSend.svelte';
    import Adages from '../components/Adages.svelte';
    import AddAdage from '../components/modals/AddAdage.svelte';
    import EditProfile from '../components/modals/EditProfile.svelte';
    import EditAdage from '../components/modals/EditAdage.svelte';

    // Variables
    let isAuthenticated;
    let profile;
    let name = "";
    let email = "";
    let gender = "";
    let country = "";
    let id = "";

    let searchValue = '';
    $:whichModal = "";

    const modal = {
        profileModal: "EPR",
        addModal: "AAG",
        editModal: "EAD",
    }
    
    // Functions
    const authSubscribe = auth.subscribe(currentlyAuth => {
        isAuthenticated = currentlyAuth;
    })
    
    onMount(async ()=>{
        // if(isAuthenticated.isAuth !== true && isAuthenticated.user === "") replace('/');

        // if not profile is in session, redirect to login page.
        profile = JSON.parse(sessionStorage.getItem('profile'));
        if(!profile){
            replace('/login');
            return;
        };
        // else aquire profile.
        name = profile.name;
        email = profile.email;
        gender = profile.gender;
        country = profile.country;
        id = await jwtDecode(isAuthenticated.user);
    });

    onDestroy(authSubscribe);
</script>

{#if isAuthenticated.isAuth === true && isAuthenticated.user !== ""}
    <section class="dashboard">
        <main class="comp-wrapper">
            <h2>Welcome back!</h2>
            <header class="header">
                <section>
                    <div>
                        <h3>{name}</h3>
                        <a href="https://google" class="socials">@elvisike</a>
                        <p>{email}</p>
                        <p>{country}</p>
                    </div>
                    <div>
                        <ButtonSimple on:click={()=>whichModal=modal.profileModal}><i class="fa-solid fa-gear"></i> <span>Profile</span></ButtonSimple>
                        <ButtonSimple><i class="fa-solid fa-trash-alt"></i> <span>delete</span></ButtonSimple>
                        <ButtonDark on:click={()=>whichModal=modal.addModal}>add new adage</ButtonDark>
                    </div>
                </section>
                <section>
                    <div class="field">
                        <input type="text" placeholder="search adage" bind:value={searchValue}>
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <ButtonSend>Fetch</ButtonSend>
                    <!-- <div></div> -->
                </section>
            </header>
            <Adages/>
        </main>
    </section>

    {#if whichModal !== "" && whichModal === 'EPR'}
        <EditProfile on:close={()=>whichModal = ""}/>
        {:else if whichModal !== "" && whichModal === 'AAG'}
        <AddAdage on:close={()=>whichModal = ""}/>
        {:else if whichModal !== "" && whichModal === 'EAD'}
        <EditAdage on:close={()=>whichModal = ""}/>
    {/if}
{/if}

<style>
    .dashboard {
        padding-block: 1rem;
        min-height: 80vh;
    }
    h2 {
        font-weight: var(--fw-600);
        font-size: 2.1rem;
        text-transform: capitalize;
    }
    h3 {
        font-weight: var(--fw-600);
        text-transform: capitalize;
        margin-bottom: 0.5rem;
    }
    p {
        font-weight: var(--fr-100);
        text-transform: lowercase;
    }
    .socials {
        font-family: var(--ff-secondary);
        font-weight: var(--fw-500);
    }
    .comp-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .header {
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* min-height: 200px; */
        width: 100%;
    }
    .header > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    .field {
        border-color: var(--clr-background);
        flex: 1;
    }
    /* .img-holder {
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
    } */
</style>
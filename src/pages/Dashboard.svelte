<script>
    import { onDestroy, onMount } from 'svelte';
    import { replace } from 'svelte-spa-router';
    import fetchAdages from '../utilities/fetchAdages';
    import { auth, modalStore, curPage } from '../store/app';
    // import jwtDecode from 'jwt-decode';
    import ButtonDark from '../components/buttons/ButtonDark.svelte';
    import ButtonSimple from '../components/buttons/ButtonSimple.svelte';
    import ButtonSend from '../components/buttons/ButtonSend.svelte';
    import ButtonIcon from '../components/buttons/ButtonIcon.svelte';
    import Adages from '../components/Adages.svelte';
    import AddAdage from '../components/modals/AddAdage.svelte';
    import EditProfile from '../components/modals/EditProfile.svelte';
    import EditAdage from '../components/modals/EditAdage.svelte';
    import ConfDelete from '../components/modals/DeleteAdage.svelte';

    // Variables
    let isAuthenticated;
    let profile;
    let name = "";
    let email = "";
    let gender = "";
    let country = "";
    let id = "";

    $:eAdage = "";
    $:eId = "";

    let searchValue = '';
    $: activeModal = "";
    $: curAdPage = "";

    const modal = {
        profileModal: "EPR",
        addAdageModal: "AAG",
    }
    
    // Functions
    const authSubscribe = auth.subscribe(currentlyAuth => {
        isAuthenticated = currentlyAuth;
    })

    const modalSubscribe = modalStore.subscribe(currentModal => {
        activeModal = currentModal;
    })

    const curPageSubscribe = curPage.subscribe(cp => {curAdPage = cp})

    const selectModal = (modalStr) => {
        modalStore.update((state)=>{
            if(state.shouldDisplay === ""){
                state.shouldDisplay = modalStr.toUpperCase();
            }
            return state;
        })
    }

    const closeM = () => {
        modalStore.set({shouldDisplay: ""})
    }

    const setEditAdage = (event) => {
        eAdage = event.detail.adage;
        eId = event.detail.id;
    }

    const setDeleteAdage = async (event) => {
        eId = event.detail.id;
    }

    const refreshAdageList = () => {}

    const previousPage = () => {
        console.log(curAdPage);
    }

    const nextPage = () => {
        console.log(curAdPage);
    }
    
    onMount(async ()=>{
        // if(isAuthenticated.isAuth !== true && isAuthenticated.user === "") replace('/');

        // if no profile is in session, redirect to login page.
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
        // id = await jwtDecode(isAuthenticated.user);
        // console.log(id)
    });

    onDestroy(()=>{
        authSubscribe();
        modalSubscribe();
        curPageSubscribe();
    });
</script>

{#if isAuthenticated.isAuth === true && isAuthenticated.token !== ""}
    <section class="dashboard">
        <main class="comp-wrapper">
            <h2>Welcome back!</h2>
            <header class="header">
                <section>
                    <div>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <p>{country}</p>
                    </div>
                    <div>
                        <ButtonSimple on:click={()=>{selectModal(modal.profileModal)}}><i class="fa-solid fa-gear"></i> <span>Profile</span></ButtonSimple>
                        <ButtonDark on:click={()=>{selectModal(modal.addAdageModal)}}>add new adage</ButtonDark>
                    </div>
                </section>
                <section>
                    <div class="field">
                        <input type="text" placeholder="search adage" bind:value={searchValue}>
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>

                    <div class='flex-inline' style="flex-wrap: wrap;">
                        <ButtonIcon on:click={previousPage}><i class="fa-solid fa-chevron-left"></i></ButtonIcon>
                        <span>{curAdPage}</span>
                        <ButtonIcon on:click={nextPage}><i class="fa-solid fa-chevron-right"></i></ButtonIcon>
                    </div>
                    <ButtonSend>Fetch</ButtonSend>
                </section>
            </header>
            <Adages on:selected_adage={setEditAdage} on:delete_selected={setDeleteAdage}/>
        </main>
    </section>

    {#if activeModal.shouldDisplay === 'EPR'}
        <EditProfile name={name} email={email} country={country} on:close={closeM}/>
    {:else if activeModal.shouldDisplay === 'AAG'}
        <AddAdage on:close={closeM} on:refreshAdageList={refreshAdageList}/>
    {:else if activeModal.shouldDisplay === 'EDA'}
        <EditAdage adage={eAdage} id={eId} on:close={closeM}/>
    {:else if activeModal.shouldDisplay === 'DEL'}
        <ConfDelete on:close={closeM} id={eId}/>
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
    @media screen and (max-width: 768px){
        .dashboard {
            padding-block: 0.5rem;
        }
        h2 {
            font-size: 1.6rem;
        }
    }
    p {
        font-weight: var(--fr-100);
        text-transform: lowercase;
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
        flex-wrap: wrap;
    }
    .field {
        border-color: var(--clr-background);
        flex: 1;
    }
</style>
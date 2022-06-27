<script>
    import { onDestroy, onMount } from 'svelte';
    import { replace } from 'svelte-spa-router';
    import { notify, modalStore, adageStore, authStore, adageModStore } from '../store/app';
    import ButtonDark from '../components/buttons/ButtonDark.svelte';
    import ButtonSimple from '../components/buttons/ButtonSimple.svelte';
    import ButtonSend from '../components/buttons/ButtonSend.svelte';
    import ButtonIcon from '../components/buttons/ButtonIcon.svelte';
    import Adages from '../components/Adages.svelte';
    import AddAdage from '../components/modals/AddAdage.svelte';
    import EditProfile from '../components/modals/EditProfile.svelte';
    import EditAdage from '../components/modals/EditAdage.svelte';
    import ConfDelete from '../components/modals/DeleteAdage.svelte';
    import jwtDecode from 'jwt-decode';
import axios from 'axios';

    /* Variables */
    // user
    let authState;
    let username;
    let email;
    let gender;
    let country;

    $:eAdage = "";
    $:eId = "";

    let searchString;

    const modal = {
        profileModal: "EPR",
        addAdageModal: "AAG",
    }

    // Functions
    const unSub_AuthStore = authStore.subscribe((store) => {
        authState = store;
    }) 


    const selectModal = (modalStr) => {
        modalStore.update((state)=>{
            if(state.shouldDisplay === ""){
                state.shouldDisplay = modalStr.toUpperCase();
                state.canClickNext = false;
            }
            return state;
        })
    }

    async function logout() {
        const response = await axios.delete('/cnt/profile/logout');
        console.log(response)
    }

    const closeM = () => {
        modalStore.set({shouldDisplay: "", canClickNext: true})
        adageModStore.resetAction();
    }
    adageModStore
    onMount(async ()=>{
        // check client authentication session.
        const token = authState.token;
        if(token === null){
            notify.update((state) => {
                state.isIncident = true;
                state.reason = 'Please authenticate';
                state.status = 'Not authenticated';
                return state;
            })
            replace('/login')
            return;
        }
        const decoded = jwtDecode(token);
        if(!decoded.aud) {
            replace('/login');
            notify.update((state)=>{
                state.isIncident = true;
                state.reason = "Please re-authenticate";
                state.status = "Access blocked";
                return state;
            })
            return;
        }

        // assign auth variables.
        username = authState.username;
        email = authState.email;
        gender = authState.gender;
        country = authState.country;

        // fetch user's adages.
        await adageStore.fetchAdages($adageStore.page);

    });

    onDestroy(()=>{
        unSub_AuthStore();
    });
</script>

{#if (authState.userId && authState.token) !== null}
    <section class="dashboard">
        <main class="comp-wrapper">
            <h2>Welcome back!</h2>
            <header class="header">
                <section>
                    <div>
                        <h3>{username}</h3>
                        <p>{email}</p>
                        <p>{country}</p>
                    </div>
                    <div>
                        <ButtonSimple on:click={()=>{selectModal(modal.profileModal)}}><i class="fa-solid fa-gear"></i> <span>Profile</span></ButtonSimple>
                        <ButtonDark on:click={()=>{selectModal(modal.addAdageModal)}}>add new adage</ButtonDark>
                    </div>
                </section>
                <section>


                    <div class='flex-inline' style="flex-wrap: wrap;">
                        <ButtonIcon on:click={adageStore.prevpage($adageStore.page)}><i class="fa-solid fa-chevron-left"></i></ButtonIcon>
                        <span>{$adageStore.page}</span>
                        <ButtonIcon on:click={adageStore.nextPage($adageStore.page)}><i class="fa-solid fa-chevron-right"></i></ButtonIcon>
                    </div>
                    <ButtonSend on:click={logout}>logout</ButtonSend>
                </section>
            </header>
            <!-- Render adage list if adage array isn't empty -->
            {#if $adageStore.page === 0}
                <section class="no-adages">Add an Adage</section>
            {:else}
                <Adages/>
            {/if}
        </main>
    </section>

    {#if $modalStore.shouldDisplay === 'EPR'}
        <EditProfile name={username} email={email} country={country} on:close={closeM}/>
    {:else if $modalStore.shouldDisplay === 'AAG'}
        <AddAdage on:close={closeM}/>
    {:else if $modalStore.shouldDisplay === 'EDA'}
        <EditAdage on:close={closeM}/>
    {:else if $modalStore.shouldDisplay === 'DEL'}
        <ConfDelete on:close={closeM}/>
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
    .search {
        min-width: 300px;
    }
    .no-adages {
        width: 100%;
        font-size: 2rem;
        font-family: var(--ff-secondarhy);
        font-weight: var(--fw-900);
        text-align: center;
        text-transform: lowercase;
        opacity: 0.7;
    }
</style>
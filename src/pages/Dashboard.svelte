<script>
    import ButtonDark from '../components/buttons/ButtonDark.svelte';
    import ButtonSimple from '../components/buttons/ButtonSimple.svelte';
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

<section class="dashboard">
    <main class="comp-wrapper">
        <h2>Welcome back</h2>
        <header class="header">
            <section>
                <div>
                    <h3>Elvis Ike Ogene</h3>
                    <a href="" class="socials">@elvisike</a>
                    <p>elvisikeog@gmail.com</p>
                    <p>country</p>
                </div>
                <div>
                    <ButtonSimple><i class="fa-solid fa-pen-alt"></i> <span>edit</span></ButtonSimple>
                    <ButtonSimple><i class="fa-solid fa-trash-alt"></i> <span>delete</span></ButtonSimple>
                    <ButtonDark>add new adage</ButtonDark>
                </div>
            </section>
            <section>
                <div class="field">
                    <input type="text" placeholder="search adage">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div></div>
            </section>
        </header>
        <main>

        </main>
    </main>
</section>

<!-- {#if editAdageModal === true && (editProfileModal && addAdageModal) === false}
    <EditAdage on:close-modal={()=>{editAdageModal = false}}/>
    {:else if editProfileModal === true && (editAdageModal && addAdageModal) === false}
    <EditProfile on:close-modal={()=>{editProfileModal = false}}/>
    {:else if addAdageModal === true && (editAdageModal && editProfileModal) === false}
    <AddAdage on:close-modal={()=>{addAdageModal = false}}/>
{/if} -->



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
<script>
    import BackHome from '../components/buttons/ButtonCTA_Dark.svelte'
    import BackDashboard from '../components/buttons/ButtonSend.svelte';
    import {link} from 'svelte-spa-router';
</script>

<section>
    <h2>Ooops.... Page not found</h2>
    <BackHome><a href="/" use:link>Go back home</a></BackHome>
    <BackDashboard><a href="/dashboard" use:link>Dashboard</a></BackDashboard>

</section>

<style>
    section {
        height: calc(80vh - var(--nav-height));
        display: grid;
        place-content: center;
        gap: 1rem;
        text-align: center;
    }
</style>
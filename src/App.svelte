<script>
	import Router from 'svelte-spa-router';
	import routes from './utilities/routes';
	import Navbar from "./components/Navbar.svelte";
	import Footer from './components/Footer.svelte';
	import Toast from './components/modals/Toast.svelte'

	let notify = false;
</script>

<Navbar/>
<main class="app-dynamic">
	  <Router {routes}/>
</main>
<Footer/>
{#if notify === true}
	<Toast/>
{/if}
<!-- <section class="toast"></section> -->

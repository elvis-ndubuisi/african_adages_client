<Navbar/>
<main class="app-dynamic">
	  <Router {routes}/>
</main>
<Footer/>

<script>
	import Router from 'svelte-spa-router';
	import routes from './utilities/routes';
	import Navbar from "./components/Navbar.svelte";
	import Footer from './components/Footer.svelte';
</script>

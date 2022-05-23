<Navbar/>

<main class="comp-container"
	<Router {routes}/>
</main>

<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
</script>
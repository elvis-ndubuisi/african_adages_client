<Navbar/>
<main class="app-dynamic">
	<SignIn/>
</main>
<Footer/>

<script>
	import Router from 'svelte-spa-router';
	import routes from './routes.js';
	import Navbar from "./components/Navbar.svelte";
	import Footer from './components/Footer.svelte';
	import Home from "./pages/Home.svelte";
	import SignIn from './pages/SignIn.svelte';
</script>
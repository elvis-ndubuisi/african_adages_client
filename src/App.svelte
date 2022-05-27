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
	import Home from "./pages/Home.svelte";
	import SignIn from './pages/SignIn.svelte';
	import SignUp from './pages/SignUp.svelte';
	import Dashboard from './pages/Dashboard.svelte';
</script>

<script>
	import Router from 'svelte-spa-router';
	import routes from './utilities/routes';
	import Navbar from "./components/Navbar.svelte";
	import Footer from './components/Footer.svelte';
	import Toast from './components/modals/Toast.svelte'
	// import {Route, Router} from 'svelte-routing';
	// import ProtectedRoute from './ProtectedRoute.svelte';

	import Home from './pages/Home.svelte';
	import Login from './pages/SignIn.svelte';
	import Register from './pages/SignUp.svelte';
	import Dashboard from './pages/Dashboard.svelte';

	let notify = false;
</script>

<Navbar/>
<main class="app-dynamic">
	<!-- <Router>
		<Route path='/' component={Home}/>
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
	</Router> -->
	<Router {routes}/>
</main>
<Footer/>
{#if notify === true}
	<Toast/>
{/if}
<!-- <section class="toast"></section> -->
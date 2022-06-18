<script>
	import {notify} from './store/app';
	import Router from 'svelte-spa-router';
	import routes from './utilities/routes';
	import Navbar from "./components/Navbar.svelte";
	import Footer from './components/Footer.svelte';
	import Toast from './components/modals/Toast.svelte'
	import { onDestroy } from 'svelte';

	let noticeState;

	// Functions
	const noticeSubscriber = notify.subscribe(notice => {
		noticeState = notice;
    })

	const closeToast = () => {
		notify.set((state)=>{
			state.isIncident = false,
			state.reason = "";
			state.status = "";
		})
	}

	const outToast = () => {
		setTimeout(() => {
			noticeState.isIncident = false;
			noticeState.status = "";
			noticeState.reason = "";
		}, 3000);
	}

	onDestroy(noticeSubscriber)
</script>

<Navbar/>
<main class="app-dynamic">
	<Router {routes}/>
</main>
<Footer/>
{#if noticeState.isIncident === true}
	<Toast reason={noticeState.reason} status={noticeState.status} on:closeToast={closeToast}/>
	{outToast()}
{/if}
<script>
	import '../app.css';

	import Navigation from '$lib/layout/Navigation.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import ModalAcknowledgement from '$lib/layout/ModalAcknowledgement.svelte';

	let showModal = false;

	onMount(() => {
		const data = window.localStorage.getItem('ACKNOWLEDGEMENT_MODAL');

		if (data === null) {
			showModal = true;
		}
	});
</script>

<Navigation />

<!-- <nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav> -->

<ModalAcknowledgement bind:showModal />

<div class="container">
	<slot />
</div>

<Footer />

<style>
	.container {
		scroll-snap-type: y mandatory;
	}
</style>

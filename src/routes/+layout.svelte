<script>
	import '../app.css';
	import DotNavigation from '$lib/layout/DotNavigation.svelte';
	import Navigation from '$lib/layout/Navigation.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { killScrollTriggers } from '$lib/utils';
	import { dotNavData } from '../stores';
	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';

	import ModalAcknowledgement from '$lib/layout/ModalAcknowledgement.svelte';

	let showModal = false,
		scrollContainer;

	let triggers = [];

	let smoother;
	let pageData;

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	}
	
	onMount(() => {
		// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


		const smoother = ScrollSmoother.create({
			wrapper: '.scroll-wrapper',
			content: '.smooth-content',
			smooth: 1,
			effects: true
		});

		triggers.push(smoother);

		const data = window.localStorage.getItem('ACKNOWLEDGEMENT_MODAL');

		if (data === null) {
			showModal = true;
		}

		return () => {
			// Cleanup when the component is destroyed
			smoother.kill();
		};
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>


<Navigation />

{#if $dotNavData}
  <DotNavigation links={$dotNavData} />
{/if}

<ModalAcknowledgement bind:showModal />

<div class="smooth-wrapper" bind:this={scrollContainer}>
	<div class="smooth-content">
		<slot />
		<Footer />
	</div>
</div>

<style>
	.smooth-wrapper {
		min-height: 100vh;
		/* overflow: auto; */
	}
</style>

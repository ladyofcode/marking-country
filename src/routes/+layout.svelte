<script>
	import '../app.css';
	import DotNavigation from '$lib/layout/DotNavigation.svelte';
	import Navigation from '$lib/layout/Navigation.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { page } from '$app/stores';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { killScrollTriggers } from '$lib/utils';
	import { dotNavData } from '../stores/dotNavStore';
	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';

	import ModalAcknowledgement from '$lib/layout/ModalAcknowledgement.svelte';

	const smoke = `${base}/stories/woddorda-ngarinyin-intro/video/iStock_smoke_fades.mp4`;

	let showModal = false,
		scrollContainer;

	let triggers = [];

	let smoother;
	let pageData;

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	}

	onMount(() => {
		const smoother = ScrollSmoother.create({
			wrapper: '.scroll-wrapper',
			content: '.smooth-content',
			smooth: 1,
			effects: true,
			normalizeScroll: true
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

{#if $dotNavData && $dotNavData.length > 0}
	<DotNavigation links={$dotNavData} />
{/if}

<ModalAcknowledgement bind:showModal />

{#if $page.url.pathname.startsWith('/woddordda-ngarinyin-intro')}
	<div class="fix-video">
		<video autoPlay loop muted>
			<source src={smoke} type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>
{/if}

<div class="smooth-wrapper" bind:this={scrollContainer}>
	<div class="smooth-content">
		<slot />
		<Footer />
	</div>
</div>

<style>
	.smooth-wrapper {
		min-height: 100vh;
	}

	.fix-video {
		height: 100vh;
		width: 100%;
		position: fixed;
		background-color: #000000;
	}

	.fix-video::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		pointer-events: none;
	}

	.fix-video video {
		width: 1001vw;
		height: 100%;
		object-fit: cover;
	}
</style>

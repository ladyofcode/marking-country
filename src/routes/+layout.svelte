<script>
	import '../app.css';
	import SectionSwitcher from '$lib/layout/SectionSwitcher.svelte';
	import Navigation from '$lib/layout/Navigation.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { page } from '$app/stores';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { killScrollTriggers } from '$lib/utils';
	import { switcher } from '../stores/sectionSwitcherStore';
	import { isScrollPaused, smootherStore } from '../stores/scrollControlStore';
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext } from 'svelte';

	import ModalAcknowledgement from '$lib/layout/ModalAcknowledgement.svelte';

	const smoke = `${base}/stories/woddorda-ngarinyin-intro/video/iStock_smoke_fades.mp4`;

	let showModal = false,
		smoother;

	let wrapper, content;

	let triggers = [];

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	}

	onMount(() => {
		// smoother = ScrollSmoother.create({
		// 	wrapper: wrapper,
		// 	content: content,
		// 	smooth: 1,
		// 	ignoreMobileResize: true,
		// 	effects: true,
		// 	normalizeScroll: true
		// });

		smootherStore.set(smoother);

		// triggers.push(smoother);

		const data = window.localStorage.getItem('ACKNOWLEDGEMENT_MODAL');

		if (data === null) {
			showModal = true;
		}
	});

	// $: if (smoother) {
	// 	smoother.paused($isScrollPaused);
	// }

	onDestroy(() => {
		killScrollTriggers(triggers);
		if (smoother) {
			smoother.kill();
		}
	});
</script>

<ModalAcknowledgement bind:showModal />

<Navigation />

{#if $switcher && $switcher.length > 0}
	<SectionSwitcher links={$switcher} />
{/if}

{#if $page.url.pathname.startsWith('/woddordda-ngarinyin-intro')}
	<div class="fix-video">
		<video autoPlay loop muted>
			<source src={smoke} type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>
{/if}

<div id="smooth-wrapper" bind:this={wrapper}>
	<div id="smooth-content" bind:this={content}>
		<slot />
		<Footer />
	</div>
</div>

<style>
	#smooth-wrapper {
		/* overflow: hidden; */
		height: 100%;
		width: 100%;
	}
	 #smooth-content {
		width: 100%;
		height: 100%;
		/* overflow: visible; */
		/* height: 4000px; */
	}

	.fix-video {
		height: 100vh;
		width: 100vw;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
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

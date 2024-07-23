<script>
	import '../app.css';
	import { switcher } from '../stores/sectionSwitcherStore';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';

	import Footer from '$lib/layout/Footer.svelte';
	import ModalAcknowledgement from '$lib/layout/ModalAcknowledgement.svelte';
	import Navigation from '$lib/layout/Navigation.svelte';
	import SectionSwitcher from '$lib/layout/SectionSwitcher.svelte';

	const smoke = `${base}/stories/woddorda-ngarinyin-intro/video/iStock_smoke_fades.mp4`;

	let smoother;

	let showModal = false;

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, DrawSVGPlugin);
	}

	onMount(() => {
		const data = window.localStorage.getItem('ACKNOWLEDGEMENT_MODAL');
		if (data === null) {
			showModal = true;
		}

		ScrollTrigger.refresh();
	});

	onDestroy(() => {
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

<div id="smooth-wrapper">
	<div id="smooth-content">
		<slot />
		<Footer />
	</div>
</div>

<style>
	#smooth-wrapper {
		overflow: hidden;
		width: 100%;
	}
	#smooth-content {
		width: 100%;
		height: 100%;
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

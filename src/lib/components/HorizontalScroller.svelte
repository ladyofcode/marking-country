<script>
	export let slides;

	import { onMount } from 'svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		let sections = gsap.utils.toArray('.panelz');

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.containerz',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.
				end: '+=3500'
			}
		});
	});
</script>

<div class="containerz">
	<section class="panelz red">ONE</section>
	<section class="panelz orange">TWO</section>
	<section class="panelz purple">THREE</section>
	<section class="panelz green">FOUR</section>
	<section class="panelz gray">FIVE</section>
</div>

<style>
	.container {
		width: 600%;
		height: 100%;
		display: flex;
		flex-wrap: no-wrap;
	}

	.panelz {
		will-change: transform;
	}
</style>

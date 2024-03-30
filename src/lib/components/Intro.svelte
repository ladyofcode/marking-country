<script>
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { killScrollTriggers } from '$lib/utils';

	let content, line, wrapper;
	let triggers = [];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scrollDownTo = gsap.to(wrapper, {
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 60%',
				end: 'bottom bottom',
				// onEnter: () => {
				// 	gsap.to(window, {
				// 		scrollTo: { y: wrapper, offsetY: 50 },
				// 		duration: 1.5
				// 	});
				// }
			}
		});

		const lineAnimation = gsap.from(
			line,
			{
				width: 0,
				duration: 4,
				scrollTrigger: {
					trigger: wrapper,
					start: '-80 top',
					once: true
				}
			},
			'>'
		);

		const fadeIn = gsap.from(
			content,
			{
				opacity: 0,
				y: 20,
				duration: 1,
				scrollTrigger: {
					trigger: '.wrapper',
					start: 'top top',
					once: true
				}
			},
			'>'
		);

		triggers.push(scrollDownTo, lineAnimation, fadeIn);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div class="container">
		<div bind:this={line} class="line" aria-hidden="true" />
		<div bind:this={content} class="content">
			<slot />
		</div>
	</div>
</div>

<style>
	.wrapper {
		min-height: 110vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		height: 100%;
	}

	.container {
		position: relative;
		margin: 6.4rem auto;
		padding: 2.4rem;
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		padding-top: 20vh;
	}

	.line {
		width: 100%;
		height: 3px;
		border-radius: 4px;
		background-color: var(--clr-terracotta);
		margin-bottom: 4rem;
	}

	@media (min-width: 900px) {
		.wrapper > div:first-of-type {
			padding: 20vh 0 0 0;
			margin: 8rem auto;
		}
	}
</style>

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

		const lineAnimation = gsap.from(
			line,
			{
				width: 0,
				ease: "bounce.out",
				duration: 4,
				scrollTrigger: {
					trigger: wrapper,
					start: 'top top',
					end: 'top 40',
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
					trigger: wrapper,
					start: 'top top',
					once: true
				}
			},
			'>'
		);

		triggers.push(lineAnimation, fadeIn);
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
		height: 100%;
		min-height: 110vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: var(--width-site);
		margin: 0 auto;
		padding: var(--space-xxxxl) var(--space-lg);
	}

	.container {
		position: relative;
		width: 100%;
		max-width: var(--width-content);
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		margin: 0 auto;
	}

	.line {
		width: 100%;
		max-width: 64%;
		height: 3px;
		border-radius: var(--radius-corner);
		background-color: var(--clr-terracotta);
		margin-bottom: var(--space-xxxl);
	}

	@media (min-width: 900px) {

		.wrapper {
			padding: var(--space-xxxxl) 0;
		}
		.wrapper > .container {
			margin: var(--space-xxxl) auto;
		}
	}
</style>

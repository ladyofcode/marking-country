<script>
	export let intro;

	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	let content, line, wrapper;
	let triggers = [];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scrollDownTo = gsap.to(wrapper, {
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 60%',
				end: 'bottom bottom',
				scrub: true,
				snap: {
					snapTo: 1, // snaps to the end (100% scroll position)
					duration: { min: 0.2, max: 0.3 },
					delay: 0.2,
					ease: 'power1.inOut'
				}
			}
		});

		const lineAnimation = gsap.from(
			line,
			{
				width: 0,
				duration: 4,
				scrollTrigger: {
					trigger: wrapper,
					start: '-1% top',
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
					start: '-1% top',
					once: true
				}
			},
			'>'
		);

		triggers.push(scrollDownTo, lineAnimation, fadeIn);
	});

	onDestroy(() => {
		triggers.forEach((trigger) => {
			if (trigger.scrollTrigger) {
				trigger.scrollTrigger.kill();
			}
			trigger.kill();
		});
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
		min-height: 100vh;
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
	}

	.line {
		width: 100%;
		height: 3px;
		border-radius: 4px;
		background-color: var(--clr-terracotta-dark);
		position: absolute;
		left: 0;
		top: -4rem;
	}

	@media (min-width: 900px) {
		.wrapper > div:first-of-type {
			padding: 0;
			margin: 8rem auto;
		}
	}
</style>

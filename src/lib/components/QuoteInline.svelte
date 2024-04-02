<script>
	export let credit = '';

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';

	gsap.registerPlugin(ScrollTrigger);

	let triggers = [];
	let blockquote, top, bottom, wrapper;

	onMount(() => {
		let mainTl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: 'top center',
				end: 'top 20%',
				toggleActions: 'play none none reverse',
			}
		});

		mainTl.from(blockquote, {
			opacity: 0,
			y: 20,
			duration: 0.8
		});

		mainTl.to(
			blockquote,
			{
				duration: 0.6,
				ease: 'power1.inOut',
				'--rotation': '180deg',
				'--transform-origin': 'top center',
				'--text-indent': '-4px'
			},
			'<'
		);

		mainTl.fromTo(
				[top, bottom],
				{ scaleX: 0 },
				{ scaleX: 1, duration: 0.5, ease: 'power1.inOut' }
			);

		triggers.push(mainTl);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<figure bind:this={wrapper}>
	<div class="border-simulate top" bind:this={top} aria-hidden="true" />
	<blockquote bind:this={blockquote}><slot /></blockquote>
	{#if credit}
		<figcaption>~ {@html credit}</figcaption>
	{/if}
	<div class="border-simulate bottom" bind:this={bottom} aria-hidden="true" />
</figure>

<style>
	figure {
		padding: var(--space-xxl) 0;
		height: 100%;
	}

	figure :global(blockquote > p) {
		color: var(--clr-clay) !important;
	}

	figure > figcaption {
		font-size: 1.2rem;
		text-align: right !important;
		line-height: 1.8em;
		width: 100%;
		font-size: var(--font-size-text);
		margin-top: 0;
		margin-bottom: var(--space-lg);
	}

	figure {
		margin-bottom: 1.6rem;
	}

	blockquote {
		--rotation: 0deg;
		--transform-origin: center;
		--text-indent: -8px;
		padding: 0.8rem 0;
		margin: 1.6rem 0;
		margin-bottom: 0;
		width: 100%;
		height: 100%;
		border-left: none;
		font-family: Georgia, Times, 'Times New Roman', serif;
		line-height: 2rem;
		position: relative;
		width: 100%;
	}

	.border-simulate {
		position: relative;
		height: 2px;
		background-color: var(--clr-terracotta);
		transform-origin: center;
		transform: scaleX(0);
		width: 100%;
	}

	.top {
		top: 24px;
	}

	.bottom {
		bottom: 0;
	}

	.top,
	.bottom {
		border-radius: var(--radius-corner);
	}

	blockquote:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 4px;
		background-color: var(--clr-bg-main);
		width: 4rem;
		margin-top: -4px;
		margin-left: -1.5rem;
	}

	blockquote:after {
		content: '“';
		position: absolute;
		top: 0;
		left: 50%;
		color: var(--clr-terracotta);
		font-style: normal;
		font-size: var(--font-size-large-hero);
		text-align: center;
		width: 1rem;
		text-indent: var(--text-indent);
		transform: rotate(var(--rotation));
		transform-origin: var(--transform-origin);
	}

	@media (min-width: 900px) {
		/* figure {
			position: relative;
		}
		blockquote {
			border: 0;
			font-size: 1.1em;
			margin: 1.1em -4em 0em 0rem;
			padding: 1.6rem 0rem 1.6rem 2.4rem;
		} */

		/* blockquote:before {
			left: 0px;
			top: 50%;
			height: 4rem;
			margin: 0;
			margin-top: -2rem;
			width: 5px;
		}

		blockquote:after {
			line-height: 1rem;
			font-size: 4rem;
			left: -0.5rem;
			top: 50%;
			margin: 0;
			margin-top: -0.5rem;
		} */

		/* .top {
			position: absolute;
			height: 80%;
			left: 0;
			top: 10%;
			bottom: 0;
			width: 2px; 
			background-color: var(--clr-terracotta); 
		} */

	}
</style>

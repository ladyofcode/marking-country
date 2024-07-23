<script>
	export let credit = '';

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let triggers = [];
	let blockquote, top, bottom, wrapper;

	onMount(() => {
		let mainTl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 72%',
				end: 'top 20%',
				toggleActions: 'play none none reverse'
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

		mainTl.fromTo([top, bottom], { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power1.inOut' });

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
</style>

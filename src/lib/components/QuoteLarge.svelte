<script>
	export let credit;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let triggers = [];
	let blockquote, line, wrapper;

	onMount(() => {
		let mainTl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: 'top center',
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

		mainTl.from(line, { scaleY: 0, duration: 0.5, ease: 'power1.inOut' }, '<');
		// mainTl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power1.inOut' });
		triggers.push(mainTl);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="quote-fullscreen-container" bind:this={wrapper}>
	<figure>
		<div class="line" bind:this={line} aria-hidden="true" />
		<blockquote bind:this={blockquote}><slot /></blockquote>
		{#if credit}
			<figcaption>~ {credit}</figcaption>
		{/if}
	</figure>
</div>

<style>
	.quote-fullscreen-container {
		background-color: var(--clr-dark-contrast);
		min-height: 64vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: var(--space-xxxxl) 0;
	}

	figure {
		position: relative;
		max-width: 80vw;
		padding: 2.4rem;
	}

	blockquote {
		--rotation: 0deg;
		--transform-origin: center;
		--text-indent: -8px;
		font-family: Georgia, Times, 'Times New Roman', serif;
		position: relative;
		transition: 0.2s border ease-in-out;
		width: 100%;
		font-size: 2rem;
		line-height: 2.4rem;
		padding: 1.6rem;
	}

	.line {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 2px;
		margin: var(--space-xxxl) 0;
		background-color: var(--clr-clay);
		transform-origin: center;
		border-radius: var(--radius-corner);
	}

	.quote-fullscreen-container :global(p) {
		color: var(--clr-clay);
		font-size: 1.6rem;
		margin-top: 1rem;
	}

	blockquote:before {
		content: '';
		position: absolute;
		left: -50px;
		top: 50%;
		height: var(--space-xxxl);
		margin: 0;
		margin-top: -1rem;
		width: 2rem;
		background-color: var(--clr-dark-contrast);
	}

	blockquote:after {
		content: '“';
		position: absolute;
		color: var(--clr-clay);
		font-style: normal;
		font-size: 4rem;
		text-align: center;
		text-indent: -8px;
		width: 1rem;
		transition:
			0.2s all ease-in-out,
			0.4s transform ease-in-out;
		line-height: 1rem;
		left: -3rem;
		top: 50%;
		margin: 0;
		margin-top: 0.5rem;
		transform: rotate(var(--rotation));
		transform-origin: var(--transform-origin);
	}

	figcaption {
		font-size: 1.2rem;
		text-align: right !important;
		line-height: 1.8em;
		width: 100%;
		color: var(--clr-text);
	}

	@media (min-width: 900px) {
		figure {
			padding: 0;
		}

		blockquote {
			font-size: 1.1em;
			margin: 1.1em -4em 0em 0rem;
			padding: 1rem 0rem 1rem 2rem;
		}

		blockquote:before {
			left: -15px;
		}

		blockquote:after {
			left: -0.5rem;
		}

		.line {
			height: 100%;
			margin: 0;
		}

		.quote-fullscreen-container :global(p) {
			margin-left: 2rem;
		}
	}
</style>

<script>
	export let credit;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
		background-color: #21201f;
		min-height: 64vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
        width: 2px; /* Width of the line */
        height: 100%; /* Full height of the parent */
        background-color: var(--clr-terracotta);
        transform-origin: center;
	}

	.quote-fullscreen-container :global(p) {
		color: var(--clr-terracotta);
		font-size: 1.6rem;
		margin-top: 1rem;
	}

	blockquote:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 4px;
		margin-top: -3px;
		margin-left: -1em;
		width: 4rem;
		background-color: #21201f;
	} 

	blockquote:after {
		content: '“';
		position: absolute;
		color: var(--clr-terracotta);
		font-style: normal;
		font-size: 4rem;
		text-align: center;
		text-indent: -8px;
		width: 1rem;
		transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
		line-height: 1rem;
		left: -0.5rem;
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
		color: #ffffff;
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
			left: -4px;
			top: 50%;
			height: 2rem;
			margin: 0;
			margin-top: -1em;
			width: 2rem;
		}
		blockquote:after {
			line-height: 1rem;
			font-size: 4rem;
			left: -0.5rem;
			top: 50%;
			margin: 0;
			margin-top: 0.5rem;
		}

		.quote-fullscreen-container :global(p) {
			margin-left: 2rem;
		}
	}
</style>

<script>
	export let media;

	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';
	gsap.registerPlugin(ScrollTrigger);

	let container;
	let box = [];
	let triggers = [];

	function adjustAnimation(matches) {

			const columns = matches ? 3 : 2;
			
			const animation = gsap.to(box, {
				scrollTrigger: {
					trigger: container,
					start: 'top center',
				},
				y: 100,
				opacity: 1,
				stagger: {
					each: 0.2,
					grid: ["auto", columns],
					from: 'start'
				},
				duration: 2
			});
			
			triggers.push(animation);
	}

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 600px)');
		adjustAnimation(mediaQuery.matches);

		// Listen for changes
		mediaQuery.onchange = (e) => adjustAnimation(e.matches);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="container" bind:this={container}>
	{#each media as { type, url }, i}
		<figure bind:this={box[i]}>
			{#if type === 'image'}
				<img src={url} alt="" />
			{/if}

			{#if type === 'video'}
				<video>
					<track kind="captions" />
				</video>
			{/if}
		</figure>
	{/each}
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		max-width: var(--width-site);
		margin: 0 auto 0 auto;
		display: grid;
		gap: 12px 12px;
		grid-template-columns: repeat(2, 1fr);
	}

	figure {
		height: 100%;
		width: 100%;
		opacity: 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* @media (min-width: 600px) {
		.container {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}
	} */

	@media (min-width: 900px) {
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

<script>
	export let media,
		galleryId = '';

	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
	import 'photoswipe/style.css';
	import '../../../node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
	gsap.registerPlugin(ScrollTrigger);

	let container;
	let box = [],
		links = [];
	let triggers = [];

	function adjustAnimation(matches) {
		const columns = matches ? 3 : 2;

		const animation = gsap.fromTo(
			box,
			{
				y: -100,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 2,
				stagger: {
					each: 0.2,
					grid: ['auto', columns],
					from: 'start'
				},
				scrollTrigger: {
					trigger: container,
					start: 'top center',
					toggleActions: 'play none none reverse'
				}
			}
		);

		triggers.push(animation);
	}

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 600px)');
		adjustAnimation(mediaQuery.matches);

		// Listen for changes
		mediaQuery.onchange = (e) => adjustAnimation(e.matches);

		const options = {
			gallery: '#' + galleryId,
			children: links,
			pswpModule: () => import('photoswipe')
		};
		const lightbox = new PhotoSwipeLightbox(options);

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			// Plugins options, for example:
			type: 'auto'
		});

		lightbox.init();
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper">
<div
	class="container pswp-gallery pswp-gallery--single-column"
	bind:this={container}
	id={galleryId}
>
	{#each media as { type, url, caption, width, height, alt = '' }, i}
		<figure class="pswp-gallery__item" bind:this={box[i]}>
			<a
				href={url}
				data-pswp-width={width}
				data-pswp-height={height}
				target="_blank"
				rel="noreferrer"
				bind:this={links[i]}
			>
				{#if type === 'image'}
					<img src={url} {alt} />
				{/if}

				{#if type === 'video'}
					<video>
						<track kind="captions" />
					</video>
				{/if}
			</a>
			<figcaption class="pswp-caption-content">
				{@html caption}
			</figcaption>
		</figure>
	{/each}
</div>
</div>


<style>
	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.container {
		height: 100%;
		width: 100%;
		max-width: var(--width-site);
		padding: var(--space-lg);
		margin: var(--space-xxxl) 0;
		display: grid;
		gap: 12px 12px;
		grid-template-columns: repeat(2, 1fr);
		align-items: start;
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
		border-radius: var(--radius-corner);
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
			padding: var(--space-lg) 0;
		}
	}
</style>

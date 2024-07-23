<script>
	export let media,
		galleryId = '';

	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
	import 'photoswipe/style.css';
	import '../../../node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

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
			pswpModule: () => import('photoswipe'),
			items: media
		};

		const lightbox = new PhotoSwipeLightbox(options);

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			// Plugins options, for example:
			captionAttribute: 'data-caption', // Ensure this is the attribute used for captions
			type: 'auto',
			captionContent: (slide) => {
				return slide.data.element.querySelector('img').getAttribute('data-caption');
			}
		});

		// Extend item data to include video attributes
		lightbox.addFilter('itemData', (itemData, index) => {
			const type = itemData.element.dataset.pswpType;
			if (type === 'video') {
				itemData.type = type; // Mark item as video
				itemData.videoSrc = itemData.element.dataset.videoSrc; // Video source URL
				itemData.videoPoster = itemData.element.dataset.videoPoster; // Video poster URL
			}
			return itemData;
		});

		lightbox.on('contentLoad', (e) => {
			const { content } = e;

			if (content.data.type === 'video') {
				e.preventDefault(); // Stop default content loading

				content.element = document.createElement('video');
				content.element.setAttribute('controls', '');
				content.element.style.width = '100%';
				content.element.style.height = '100%';

				if (content.data.videoPoster) {
					content.element.setAttribute('poster', content.data.videoPoster);
				}

				const source = document.createElement('source');
				source.setAttribute('src', content.data.videoSrc);
				source.setAttribute('type', 'video/mp4');
				content.element.appendChild(source);

				content.state = 'loaded'; // Mark content as loaded
			}
		});

		lightbox.on('contentAppend', (e) => {
			const { content } = e;
			if (content.data.type === 'video' && !content.element.parentNode) {
				e.preventDefault();
				content.slide.container.appendChild(content.element);
				content.element.load();
			}
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
		{#each media as { type, url, caption, width, height, poster, alt = '' }, i}
			<figure class="pswp-gallery__item" bind:this={box[i]}>
				{#if type === 'image'}
					<a
						href={url}
						data-pswp-type={type}
						data-pswp-width={width}
						data-pswp-height={height}
						target="_blank"
						rel="noreferrer"
						bind:this={links[i]}
					>
						<img src={url} {alt} data-caption={caption} title={caption} />
					</a>
				{/if}
				{#if type === 'video'}
					<a
						href="#"
						data-pswp-type={type}
						data-video-src={url}
						data-video-poster={poster}
						data-pswp-width={width}
						data-pswp-height={height}
						target="_blank"
						rel="noreferrer"
						bind:this={links[i]}
					>
						<img src={poster} alt={caption} data-caption={caption} />
					</a>
				{/if}
				<figcaption class="pswp-caption-content">
					{@html caption}
				</figcaption>
			</figure>
		{/each}
	</div>
</div>

<style>
	:global(.custom-caption) {
		position: absolute;
		top: 0;
		height: 400px;
		width: 400px;
		background-color: purple;
	}
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

	video,
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-corner);
	}

	@media (min-width: 900px) {
		.container {
			grid-template-columns: repeat(3, 1fr);
			padding: var(--space-lg) 0;
		}
	}
</style>

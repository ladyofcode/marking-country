<script>
	import { onMount } from 'svelte';
	export let image = '',
		video = '',
		poster = '',
		alt = '',
		caption = '',
		autoplay = '',
		youTubeId = '',
		vimeoId = '',
		galleryId = 'default',
		width = '',
		height = '';

	import { Vimeo, YouTube } from 'sveltekit-embed';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
	import 'photoswipe/style.css';
	import '../../../node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

	let item = [];

	onMount(() => {
		const options = {
			gallery: '#' + galleryId,
			children: item,
			pswpModule: () => import('photoswipe')
		};
		const lightbox = new PhotoSwipeLightbox(options);

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			// Plugins options, for example:
			type: 'auto'
		});

		lightbox.init();
	});
</script>

<div class="wrapper">
	{#if image}
		<div class="pswp-gallery pswp-gallery--single-column" id={galleryId}>
			<figure class="pswp-gallery__item" bind:this={item[0]}>
				<a
					href={image}
					data-pswp-width={width}
					data-pswp-height={height}
					target="_blank"
					rel="noreferrer"
				>
					<img src={image} {alt} />
				</a>
				<figcaption class="pswp-caption-content">
					{@html caption}
				</figcaption>
			</figure>
		</div>
	{:else}
		<figure>
			{#if (video || youTubeId) && autoplay}
				<video autoPlay preload="none" muted>
					<source src={video} />
				</video>
			{/if}
			{#if video && !autoplay}
				<video controls preload="none" {poster}>
					<source src={video} />
				</video>
			{/if}
			{#if youTubeId}
				<YouTube {youTubeId} />
			{/if}

			{#if vimeoId}
				<Vimeo {vimeoId} />
			{/if}

			{#if caption && !image}
				<figcaption>{caption}</figcaption>
			{/if}
		</figure>
	{/if}
</div>

<style>
	:global(iframe) {
		height: 100%;
		max-height: calc(var(--height-viewable) - 10vh);
	}

	.wrapper {
		height: 100%;
		max-width: calc(var(--width-site) + 40vh);
		margin: var(--space-xxxl) auto;
	}

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	video {
		max-height: 100vh;
	}

	figcaption {
		max-width: var(--width-content);
		margin: var(--space-md) auto;
	}

	a {
		height: 100%;
		width: 100%;
		display: block;
		overflow: hidden;
	}
	.pswp-caption-content {
		display: block;
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxxl) auto;
		}

		a {
			height: calc(var(--height-viewable) - 20vh);
		}

		img,
		video {
			object-fit: cover;
		}
		figure {
			height: 100%;
		}
	}
</style>

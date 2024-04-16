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
		height = '',
		contain = false;

	import { Vimeo } from 'sveltekit-embed';
	import { EmbedYouTube } from '$lib';
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
					<img class={contain ? 'contain' : ''} src={image} {alt} />
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
				<EmbedYouTube videoId={youTubeId} />
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
		border-radius: var(--radius-corner);
	}

	.wrapper {
		height: 100%;
		max-width: calc(var(--width-site) + 40vh);
		margin: var(--space-xxxl) auto;
	}
	
	img,
	video {
		height: 100%;
		object-fit: contain;
		object-position: center;
		border-radius: var(--radius-corner);
	}
	
	
	video {
		max-height: 100vh;
		margin: 0 auto;
	}
	
	figcaption {
		max-width: var(--width-content);
		margin: var(--space-md) auto;
	}
	
	a {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: var(--radius-corner);
	}
	.pswp-caption-content {
		display: block;
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxl) auto;
			padding: 0;
		}

		a {
			height: calc(var(--height-viewable) - 20vh);
		}

		img,
		video {
			object-fit: cover;
		}

		img.contain{
			object-fit: contain;
		}
		figure {
			height: 100%;
		}
	}
</style>

<script>
	export let caption,
		source,
		height,
		width,
		alt = '';
	export let galleryId;

	import { onMount } from 'svelte';
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

<div class="pswp-gallery pswp-gallery--single-column" id={galleryId}>
	<figure class="pswp-gallery__item" bind:this={item[0]}>
		<a
			href={source}
			data-pswp-width={width}
			data-pswp-height={height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={source} {alt} />
		</a>
		{#if caption}
			<figcaption class="pswp-caption-content">
				{@html caption}
			</figcaption>
		{/if}
	</figure>
</div>

<style>
	div {
		background: #110e0e;
		height: 100%;
	}
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	figure a {
		height: 100%;
		width: 100%;
	}
	img {
		height: 100%;
		width: 100%;
		border-radius: 24px;
		object-fit: contain;
	}
	.pswp-caption-content {
		display: block;
	}

	@media (min-width: 600px) {
		.div {

		}
	}
</style>

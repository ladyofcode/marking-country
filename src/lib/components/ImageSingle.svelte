<script>
	export let caption='',
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
	<figure class="pswp-gallery__item" bind:this={item[0]} >
		<a
			href={source}
			data-pswp-width={width}
			data-pswp-height={height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={source} {alt} />
		</a>
		<figcaption class="pswp-caption-content">
			{@html caption}
		</figcaption>
	</figure>
</div>

<style>
	
	div {
		background: #110e0e;
		box-shadow: inset 8px 8px 16px #070606, inset -8px -8px 16px #1b1616;		
		border-radius: 24px;
		padding: 2.4rem;
		margin: 2.4rem 0;
	}
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	img {
		max-height: 80vh;
		max-width: 100%;
		border-radius: 24px;
	}
	.pswp-caption-content {
		display: block;
	}

</style>

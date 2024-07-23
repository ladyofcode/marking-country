<script>
	export let caption = '',
		source,
		height,
		width,
		alt = '',
		removeTopMargin = false,
		scroller = false,
		shadow = false;
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

<div
	class="pswp-gallery pswp-gallery--single-column"
	class:top-margin-remove={removeTopMargin || scroller}
	id={galleryId}
>
	<figure class="pswp-gallery__item" bind:this={item[0]} class:scroller class:shadow>
		<a
			href={source}
			data-pswp-width={width}
			data-pswp-height={height}
			target="_blank"
			rel="noreferrer"
			class:scroller
		>
			<img src={source} {alt} class:scroller />
		</a>
		<figcaption class="pswp-caption-content">
			{@html caption}
		</figcaption>
	</figure>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	figure.shadow {
		background: var(--clr-bg-main);
		box-shadow: var(--box-shadow);
		border-radius: var(--radius-corner);
		padding: var(--space-md);
	}
	div.top-margin-remove {
		margin-top: 0;
	}
	figure {
		display: inline-block;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0 auto;
		border-radius: var(--radius-corner);
	}
	figure.scroller {
		max-width: 100%;
		margin: auto;
		height: 100%;
	}
	figcaption {
		max-width: var(--width-content);
		margin: 0 auto;
		margin-top: var(--space-lg);
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		max-height: calc(var(--height-viewable) - 20vh);
		border-radius: var(--radius-corner);
	}
	img {
		height: auto;
		width: 100%;
		object-fit: contain;
		border-radius: var(--radius-corner);
	}
	a.scroller,
	img.scroller {
		max-width: 100%;
		max-height: 34vw;
		height: auto;
	}
	img.scroller {
		object-position: center;
	}
	.pswp-caption-content {
		display: block;
	}

	.top-margin-remove {
		margin-top: 0;
		margin-bottom: 0;
	}

	@media (min-width: 600px) {
		div {
			width: auto;
		}
		figure {
			width: auto;
		}
		img {
			width: 100%;
			height: 100%;
			max-height: calc(var(--height-viewable) - 20vh);
		}
	}

	@media (min-width: 900px) {
		div {
			padding: var(--space-lg);
		}
	}
</style>

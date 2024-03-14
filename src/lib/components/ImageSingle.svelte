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

	onMount(() => {
		// let lightbox = new PhotoSwipeLightbox({
		// 	gallery: '#' + galleryId,
		// 	children: 'a',
		// 	pswpModule: () => import('photoswipe')
		// });
		// lightbox.init();
		const options = {
			gallery: '#' + galleryId,
			children: '.pswp-gallery__item',
			pswpModule: () => import('photoswipe')
		};
		const lightbox = new PhotoSwipeLightbox(options);

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			// Plugins options, for example:
			type: 'auto'
		});

		// lightbox.on('uiRegister', function () {
		// 	lightbox.pswp.ui.registerElement({
		// 		name: 'custom-caption',
		// 		order: 9,
		// 		isButton: false,
		// 		appendTo: 'root',
		// 		html: 'Caption text',
		// 		onInit: (el, pswp) => {
		// 			lightbox.pswp.on('change', () => {
		// 				const currSlideElement = lightbox.pswp.currSlide.data.element;
		// 				let captionHTML = '';
		// 				if (currSlideElement) {
		// 					const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
		// 					if (hiddenCaption) {
		// 						// get caption from element with class hidden-caption-content
		// 						captionHTML = hiddenCaption.innerHTML;
		// 					} else {
		// 						// get caption from alt attribute
		// 						captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
		// 					}
		// 				}
		// 				el.innerHTML = captionHTML || '';
		// 			});
		// 		}
		// 	});
		// });
		lightbox.init();
	});
</script>

<div class="pswp-gallery pswp-gallery--single-column" id={galleryId}>
	<figure class="pswp-gallery__item">
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
	/* div {
		width: 100%;
	} */
	figure {
		width: fit-content;
		margin: 0 auto;
	}
	img {
		max-height: 80vh;
	}
	.pswp-caption-content {
		display: block;
	}

</style>

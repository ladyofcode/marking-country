<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryId;
	export let images;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryId,
			children: 'a',
			initialZoomLevel: 'fit',
			secondaryZoomLevel: 6,
			// maxZoomLevel: 6,
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/3.1.0/screenfull.min.js"></script>
</svelte:head>

<div class="pswp-gallery" id={galleryId}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt={image.alt} />
		</a>
	{/each}
</div>

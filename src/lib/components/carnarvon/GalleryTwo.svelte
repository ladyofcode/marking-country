<script>
	import { onMount, onDestroy } from 'svelte';
	import { generateSingleMedia } from '$lib/imagePaths';
	import { ImageSingle } from '$lib';
	import NewModal from '$lib/layout/NewModal.svelte';

	const singleImageFilenames = [
		'_ANU7132_1_childhands.jpg',
		'_ANU7132_2_childhands.jpg',
		'_ANU7132_femaleanatomy.jpg',
		'_ANU7132_graffiti02.jpg',
		'_ANU7132_maleanatomy.jpg',
		'_ANU7163_wornrock.jpg',
		'galleryTwo.jpg'
	];

	const folderPath = `/stories/carnarvon/images/gallery/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);

	const text1 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_femaleanatomy,
				alt: 'Female genitalia, with kneecaps either side.',
				width: '',
				height: '',
				galleryId: 'ANU7132_femaleanatomy'
			}
		},
		{
			markup: `<h3>Female genitalia, with kneecaps either side.</h3>`
		}
	];

	const text2 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_maleanatomy,
				alt: 'Male genitalia',
				width: '',
				height: '',
				galleryId: 'ANU7132_maleanatomy'
			}
		},
		{
			markup: `<h3>Male genitalia</h3>`
		}
	];

	const text3a = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_1_childhands,
				alt: "Children's handprints",
				width: '',
				height: '',
				galleryId: 'ANU7132_1_childhands'
			}
		},
		{
			markup: `<h3>Children's handprints</h3>`
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_2_childhands,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7132_2_childhands'
			}
		}
	];

	const text3b = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_2_childhands,
				alt: "Children's handprints",
				width: '',
				height: '',
				galleryId: 'ANU7132_2_childhands'
			}
		},
		{
			markup: `<h3>Children's handprints</h3>`
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_1_childhands,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7132_1_childhands'
			}
		}
	];

	const text4 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7132_graffiti02,
				alt: 'Graffiti',
				width: '',
				height: '',
				galleryId: 'ANU7132_graffiti02'
			}
		},
		{
			markup: `<h3>Graffiti</h3>`
		},
		{
			markup: `<p>Many sections of this sacred place have been damaged and defaced by graffiti.</p>`
		}
	];

	const text5 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7163_wornrock,
				alt: 'Visitor damage',
				width: '',
				height: '',
				galleryId: 'ANU7163_wornrock'
			}
		},
		{
			markup: `<h3>Visitor damage</h3>`
		},
		{
			markup: `<p>Before the establishment of protective barriers, visitors often sat on top of this archive wall to pose for photos, wearing away the rock and destroying its images.</p>`
		}
	];

	let showModal = false;
	let modalText;

	const handleClick = (text) => {
		showModal = true;
		modalText = text;
	};

	import svgPanZoom from 'svg-pan-zoom';

	let panZoomInstance;
	let svgElement;
	let resizeTimeout;

	function debouncedResizeHandler() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			handleMediaChange();
		}, 250);
	}

	function handleMediaChange() {
		panZoomInstance.resize();
		panZoomInstance.fit();
		panZoomInstance.center();
	}

	onMount(() => {
		window.addEventListener('resize', debouncedResizeHandler);
		panZoomInstance = svgPanZoom(svgElement, {
			zoomEnabled: true,
			controlIconsEnabled: true,
			fit: true
		});

		panZoomInstance.disableZoom();
	});

	onDestroy(() => {
		window.removeEventListener('resize', debouncedResizeHandler);
		clearTimeout(resizeTimeout);
		if (panZoomInstance) {
			panZoomInstance.destroy();
		}
	});
</script>

<NewModal bind:showModal content={modalText} thinImage={true} />

<svg
	bind:this={svgElement}
	version="1.1"
	id="Layer_1"
	class="gallery-two"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 2000 1333"
	enableBackground="new 0 0 2000 1333"
	xml:space="preserve"
>
	<image overflow="visible" width="2000" height="1333" xlink:href={singleImages.galleryTwo} />
	<circle
		id="5"
		fill="#FFFFFF"
		cx="1235"
		cy="200"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text5)}
		on:keydown={() => handleClick(text5)}
	/>
	<circle
		id="4"
		fill="#FFFFFF"
		cx="665"
		cy="320"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text4)}
		on:keydown={() => handleClick(text4)}
	/>
	<circle
		id="3b"
		fill="#FFFFFF"
		cx="1383"
		cy="734"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text3b)}
		on:keydown={() => handleClick(text3b)}
	/>
	<circle
		id="3a"
		fill="#FFFFFF"
		cx="901"
		cy="468"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text3a)}
		on:keydown={() => handleClick(text3a)}
	/>
	<circle
		id="2"
		fill="#FFFFFF"
		cx="1085"
		cy="840"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text2)}
		on:keydown={() => handleClick(text2)}
	/>
	<circle
		id="1"
		fill="#FFFFFF"
		cx="1287"
		cy="619"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text1)}
		on:keydown={() => handleClick(text1)}
	/>
</svg>

<style>
	.gallery-two {
		margin: 4rem 0;
		width: 100%;
		height: var(--height-viewable);
	}
	.gallery-two circle {
		fill: #fff 21;
		stroke-width: 6px;
		stroke: #fff c2;
	}
	.gallery-two circle:hover {
		fill: #fff 8c;
		stroke-width: 12px;
		stroke: #fff;
		cursor: pointer;
	}
	:global(.cap-image-size img) {
		max-height: 50vh;
	}
	svg {
		width: 100%;
		height: auto;
	}
	circle {
		fill: #ffffff21;
		stroke-width: 6px;
		stroke: #ffffffc2;
	}
	circle:hover {
		fill: #ffffff8c;
		stroke-width: 12px;
		stroke: #ffffff;
		cursor: pointer;
	}
	image {
		clip-path: inset(0% round 1%);
	}
</style>

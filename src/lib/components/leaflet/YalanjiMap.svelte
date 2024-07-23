<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapPin = `${base}/stories/yalanji/images/map-pin-icon.png`;
	let slide_gallery_1 = `${base}/stories/yalanji/images/magnificent_gallery_slideshow/Magnificent01.jpg`;

	export let bounds;
	export let view = [-15.8564, 144.24];
	export let zoom = 6;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	let pin = L.icon({
		iconUrl: mapPin,
		className: `pin`,
		html: `<img src=${mapPin}></img>`,
		iconSize: [45, 60]
	});

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement, {
			scrollWheelZoom: false
		}).on('zoom', (e) => dispatch('zoom', e));

		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: `Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community`
			}
		).addTo(map);

		L.marker([-15.8564, 144.24], { icon: pin })
			.addTo(map)
			.bindPopup(
				`<img src=${slide_gallery_1} alt="" />
            Magnificent Gallery`
			);
	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<div class="container" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.container {
		min-height: 400px;
		border-radius: var(--radius-corner);
	}

	.pin {
		height: 100%;
		width: 100%;
	}
</style>

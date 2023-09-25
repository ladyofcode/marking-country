<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L, { imageOverlay } from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapImage = `${base}/mapping/images/AIATSIS_map_2021-map only.jpg`;

	const bounds = [
		[0, 0],
		[800, 1000]
	];
	export let view;
	export let zoom;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		// map = L.map('map', {
		// 	crs: L.CRS.Simple,
		// 	minZoom: -3
		// });

		map = L.map(mapElement, {
			crs: L.CRS.Simple,
			minZoom: -1,
			maxZoom: 13
		})
			// example to expose map events to parent components:
			.on('zoom', (e) => dispatch('zoom', e));

		// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
		// 	attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
		// }).addTo(map);
		let imageOverlay = L.imageOverlay(mapImage, bounds).addTo(map);
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
	}
</style>

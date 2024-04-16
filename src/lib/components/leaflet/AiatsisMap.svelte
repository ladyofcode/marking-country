<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L, { imageOverlay } from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapImage = `${base}/mapping/images/AIATSIS_map_2021-map only.jpg`;

	const width = 1311;
	const height= 1083;

	const bounds = [
		[0, 0],
		[height, width]
	];

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	function calculateInitialZoom() {
		if (window.innerWidth < 768) {
			return -2;
		}
		return -1;
	}

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		const initialZoom = calculateInitialZoom();

		map = L.map(mapElement, {
			crs: L.CRS.Simple,
			minZoom: initialZoom,
			maxZoom: 13,
			scrollWheelZoom: false
		}).on('zoom', (e) => dispatch('zoom', e));

		L.imageOverlay(mapImage, bounds).addTo(map);
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
		height: 72vh;
	}
</style>

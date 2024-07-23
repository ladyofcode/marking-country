<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let bounds;
	export let view = [-18.0712, 122.2834];
	export let zoom = 11;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement, {
			scrollWheelZoom: false,
			zoomControl: false
		}).on('zoom', (e) => dispatch('zoom', e));

		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: `Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community`
			}
		).addTo(map);
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

<div class="coast-container" bind:this={mapElement} />

<style>
	.coast-container {
		position: relative;
		min-height: 100vh;
		height: 100vh;
		width: 100%;
	}
</style>

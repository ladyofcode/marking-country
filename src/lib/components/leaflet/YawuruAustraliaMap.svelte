<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapPin = `${base}/stories/yawuru/images/map-pin-icon.png`;

	export let bounds;
	export let view = [-25, 130];
	export let zoom = 4;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	let pin = L.icon({
		iconUrl: mapPin,
		className: `pin`,
		html: `<img src=${mapPin}></img>`,
		iconSize: [60, 60]
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

		L.marker([-17.963082751552502, 122.2323673044223], { icon: pin })
			.addTo(map)
			.bindPopup(`<h3>Yawuru</h3>`);
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

<div class="australia-container" bind:this={mapElement} />

<style>
	.australia-container {
		position: relative;
		min-height: 400px;
		height: 80vh;
		width: 100%;
	}

</style>

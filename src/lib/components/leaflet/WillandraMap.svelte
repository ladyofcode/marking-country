<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L, { imageOverlay } from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import '../../../../node_modules/leaflet.fullscreen/Control.FullScreen.css';
	import '../../../../node_modules/leaflet.fullscreen/Control.FullScreen';

	let baseMap1 = `${base}/stories/willandra/map/base_map.svg`;
	let johnsonJohnstonBrodyMap = `${base}/stories/willandra/map/johnson_johnston_brody.svg`;
	let kellyMap = `${base}/stories/willandra/map/kelly.svg`;
	let kellyPearcePappinCharlesMap = `${base}/stories/willandra/map/kelly_pearce_pappin_charles.svg`;
	let kennedyMap = `${base}/stories/willandra/map/kennedy.svg`;
	let mitchellLawsonJohnsonMap = `${base}/stories/willandra/map/mitchell_lawson_johnson.svg`;
	let taylorKingMap = `${base}/stories/willandra/map/taylor_king.svg`;

	console.log(baseMap1);

	const bounds = [
		[0, 0],
		[1388, 1344]
	];
	export let view = [
		[0, 0],
		[0, 0]
	];
	export let zoom = 3;

	const dispatch = createEventDispatcher();

	let map;
	let overlayMaps;

	let mapElement;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement, {
			crs: L.CRS.Simple,
			minZoom: -1,
			maxZoom: 4,
			fullscreenControl: true
		}).on('zoom', (e) => dispatch('zoom', e));

		let kennedy = L.imageOverlay(kennedyMap, bounds);
		let taylor_king = L.imageOverlay(taylorKingMap, bounds);
		let kelly_pearce_pappin_charles = L.imageOverlay(kellyPearcePappinCharlesMap, bounds);
		let johnson_johnston_brody = L.imageOverlay(johnsonJohnstonBrodyMap, bounds);
		let mitchell_lawson_johnson = L.imageOverlay(mitchellLawsonJohnsonMap, bounds);
		let kelly = L.imageOverlay(kellyMap, bounds);

		overlayMaps = {
			Kennedy: kennedy,
			'Taylor, King': taylor_king,
			'Kelly, Pearce, Pappin, Charles': kelly_pearce_pappin_charles,
			'Johnson, Johnston, Brody': johnson_johnston_brody,
			'Mitchell, Lawson, Johnson': mitchell_lawson_johnson,
			Kelly: kelly
		};

		L.imageOverlay(baseMap1, bounds).addTo(map);
		L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);
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

<div class="willandra-map-container" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.willandra-map-container {
		min-height: 600px;
		background-color: #f7f2e6;
	}

	.willandra-map-container :global(.leaflet-control-layers-overlays label) {
		color: black;
	}
</style>

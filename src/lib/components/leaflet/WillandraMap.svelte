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
	let isLoading = false;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement, {
			crs: L.CRS.Simple,
			minZoom: -1,
			maxZoom: 4,
			fullscreenControl: true,
			scrollWheelZoom: false
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

		map.on('overlayadd', () => {
			isLoading = true;
			updateSpinnerVisibility();
		});

		map.on('overlayremove', () => {
			isLoading = false;
			updateSpinnerVisibility();
		});

		Object.values(overlayMaps).forEach((overlay) => {
			overlay.on('load', () => {
				isLoading = false;
				updateSpinnerVisibility();
			});
		});
	});

	function updateSpinnerVisibility() {
		const spinner = document.getElementById('loading-spinner');
		const overlay = document.getElementById('loading-overlay');

		if (isLoading) {
			spinner.style.display = 'block';
			overlay.style.display = 'block';
			overlay.style.opacity = '0.5';
		} else {
			spinner.style.display = 'none';
			overlay.style.opacity = '0';
			setTimeout(() => {
				overlay.style.display = 'none';
			}, 300);
		}
	}

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
	<div id="loading-overlay" class="loading-overlay"></div>
	<div id="loading-spinner" class="spinner"></div>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.willandra-map-container {
		min-height: 600px;
		background-color: #f7f2e6;
		position: relative;
	}

	.willandra-map-container :global(.leaflet-control-layers-overlays label) {
		color: black;
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		z-index: 999;
		transition: opacity 0.3s ease;
	}

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 16px solid var(--clr-bg-main);
		border-radius: 50%;
		border-top: 16px solid var(--clr-font-heading);
		width: 120px;
		height: 120px;
		animation: spin 2s linear infinite;
		display: none;
		z-index: 1000;
	}

	@keyframes spin {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
</style>

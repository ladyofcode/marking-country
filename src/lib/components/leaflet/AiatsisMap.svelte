<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L, { imageOverlay } from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapImage = `${base}/mapping/images/AIATSIS_map_2021-map only.jpg`;

	const width = 1311;
	const height = 1083;

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

<figure>
	<div class="container" bind:this={mapElement}>
		{#if map}
			<slot />
		{/if}
	</div>
	<figcaption>
		This map attempts to represent the language, social or nation groups of Aboriginal Australia. It
		shows only the general locations of larger groupings of people which may include clans, dialects
		or individual languages in a group. It used published resources from the eighteenth century-1994
		and is not intended to be exact, nor the boundaries fixed. It is not suitable for native title
		or other land claims. David R Horton (creator), © AIATSIS, 1996. No reproduction without
		permission. To purchase a print version visit: <a href="https://shop.aiatsis.gov.au/"
			>https://shop.aiatsis.gov.au/</a
		>
	</figcaption>
</figure>

<style>
	.container {
		height: 72vh;
	}

	figcaption {
		width: 100%;
		max-width: var(--width-site);
		margin: 0 auto;
		padding: var(--space-lg) var(--space-xl) 0 var(--space-xl);
	}

	@media (min-width: 1200px) {
		figcaption {
			padding: 0;
		}
	}
</style>

<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let image_green_pin = `${base}/stories/yawuru/images/green_pin.png`;
	let image_red_pin = `${base}/stories/yawuru/images/red_pin.png`;

	export let bounds;
	export let view = [-18.2012, 122.2834];
	export let zoom = 11;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	const greenPin = L.icon({
		iconUrl: image_green_pin,
		className: `pin`,
		html: `<img src=${image_green_pin}></img>`,
		iconSize: [32, 32]
	});
	const redPin = L.icon({
		iconUrl: image_red_pin,
		className: `pin`,
		html: `<img src=${image_red_pin}></img>`,
		iconSize: [32, 32]
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

		L.marker([-18.32709134868065, 122.06498032635169], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Miriny Gujarra</h3>
            <p>Also known as Cape Villaret.</p>`);

		L.marker([-18.33394233689029, 122.08305126836822], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Yardugarra</h3>
            <p>A jila (spring) near Miriny.</p>`);

		L.marker([-18.30169124141934, 122.16115007391532], { icon: greenPin })
			.addTo(map)
			.bindPopup(`<h3>Darrbanga ngaba</h3>`);

		L.marker([-18.27390841077351, 122.19351679343153], { icon: greenPin })
			.addTo(map)
			.bindPopup(`<h3>Jirrnur (Jila)</h3>`);

		L.marker([-18.249821946882044, 122.26720657464666], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Langurru</h3>
            <p>Europeans named this place Goldwyer Spring.</p>`);

		L.marker([-18.198233867422932, 122.27751267672016], { icon: greenPin })
			.addTo(map)
			.bindPopup(`<h3>Yalanbarnan Dune and Jila</h3>`);

		L.marker([-18.187827693322863, 122.293766746531], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Mararr</h3>
            <p>Marlu inyja mararr buru. (Restricted, no access. Law place.)</p>`);

		L.marker([-18.16738104246481, 122.32388437963549], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Urlugurranan</h3>
            <p>Site of the old jetty on Thangoo Station.</p>`);

		L.marker([-18.178926175751208, 122.35792613487804], { icon: redPin }).addTo(map)
			.bindPopup(`<h3>Thangoo Station Homestead</h3>
            <p>This is the present location of the Thangoo Station homestead. It sits within a large area known as Jangu, running from Miriny Gujarra in the south west to Burrany in the north east.</p>
            <p>Jangu is a significant place of dreaming, songlines, and ceremony.</p>`);

		L.marker([-18.162108887000944, 122.37123746265513], { icon: greenPin })
			.addTo(map)
			.bindPopup(`<h3>Janyjagurdiny</h3>`);

		L.marker([-18.137737443561186, 122.39688124179271], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Barlgarramaya</h3>
            <p>Waterhole.</p>`);

		L.marker([-18.113458031497036, 122.4221670435466], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Balmagun Jila</h3>
            <p>Also known as Vincent Springs.</p>`);

		L.marker([-18.094521037181853, 122.4833090944918], { icon: greenPin }).addTo(map)
			.bindPopup(`<h3>Lanbinan Jila</h3>
            <p>Also known as Carr Well.</p>`);

		L.marker([-18.103215215061827, 122.51225839608286], { icon: greenPin })
			.addTo(map)
			.bindPopup(`<h3>Burrany</h3>`);
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

<div class="broome-container" bind:this={mapElement} />

<style>
	.broome-container {
		position: relative;
		min-height: 600px;
		height: var(--height-viewable);
		width: 100%;
	}
</style>

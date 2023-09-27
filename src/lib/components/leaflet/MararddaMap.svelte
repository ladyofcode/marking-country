<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	let mapPin = `${base}/stories/yalanji/images/map-pin-icon.png`;
	let slide_gallery_1 = `${base}/stories/yalanji/images/magnificent_gallery_slideshow/Magnificent01.jpg`;

	let dalandi = `${base}/stories/ngarinyin/audio/Dalandi.mp3`;
	let philip = `${base}/stories/ngarinyin/audio/Dalandi_Phillip-Duckhole_SOUND_edit.mp3`;
	let durduNgardi = `${base}/stories/ngarinyin/audio/DurduNgardi.mp3`;
	let durduNgardi_Matthew = `${base}/stories/ngarinyin/audio/Durdu-ngardi_Matthew-SOUND.mp3`;
	let walarda = `${base}/stories/ngarinyin/audio/WalardaMindi.mp3`;

	let jebb = `${base}/stories/ngarinyin/images/20220606_Mt-Hart-Walarra-Mindi_jebb_2.jpg`;
	let catfish = `${base}/stories/ngarinyin/images/Catfish_noBackground_circle.png`;
	let dingo = `${base}/stories/ngarinyin/images/Dingo_noBackground.png`;
	let hawke = `${base}/stories/ngarinyin/images/Hawke_cleaned_noBackground.png`;
	let matthew = `${base}/stories/ngarinyin/images/Matthew-Martin-stockwork.jpg`;
	let mowanjum = `${base}/stories/ngarinyin/images/Mowanjum-festival-dancers-2017.jpg`;

	const catfishText = `
    <h3>Durdu-ngardi</h3>

    <figure>
      <audio key="durduNgardi" controls>
        <source src=${durduNgardi} />
      </audio>
    </figure>

    <figure>
    	<img src=${catfish} alt="" />
    </figure>

    <figure class="quote">
      <blockquote>
        <p>
          Durdu-ngardi is a Wunggudd water. Durdu-ngardi is at the end of the
          ranges (Ingliss Gap Range) the range starts there at Durdu-ngardi.
          Durdu-ngardi came from Prince Regent, start there. He's part of the
          whole thing, starts Prince Regent goes right through following
          Walungarddi across the desert and back to the sea, all along that
          Country. The song is from the first generation, from all the birds and
          animals and they turned it into a song.
        </p>
      </blockquote>
      <figcaption>~ Matthew Dembal Martin, 2022.</figcaption>
    </figure>

    <p>'No it's not a dreaming, it's a live story.'</p>

    <p><strong>Listen to</strong> Matthew Dembal Martin talk more about Durdu-ngardi.</p>

    <figure>
      <audio controls>
        <source src=${durduNgardi_Matthew} />
      </audio>
    </figure>

    <details>
      <summary>Audio Transcript</summary>
      <p>
        No it’s not a dreaming, it’s a live story. When long time when this
        earth was under water, you know the sea covered this land and he left
        some fish maybe in that spot now. But that Wandjina is the boss for that
        one spot told that catfish to stay one place. So he stay there, he can’t
        go anywhere. That’s a Durdu-ngardi now where we go that Durdu-ngardi.
        Durdu-ngardi mean catfish go round and round one place. He don’t go
        moving anywhere. That’s where he stay there forever. How many flood he
        don’t take him away - just stay there. That’s a Wunggudd thing. It’s
        like the Wunggudd it’s keep them one place.
      </p>
    </details>

    <figure>
      <img src=${mowanjum} alt="" />
      <figcaption>Mowanjum Festival Dancers, 2017.</figcaption>
    </figure>

    <figure>
      <blockquote class="quote">
        <p>
          When we dance Walungarddi at the Mowanjum Festival, we go round and
          round, first clockwise, then anti-clockwise. The dancers’ bodies are
          connected like the catfish, tail and mouth, tail and mouth. That’s why
          we hold the person in front and behind.
        </p>
        <figcaption>~ Chloe Nulgit 2022.</figcaption>
      </blockquote>
    </figure>

    <p><a href="#durdu-ngardi-film">Watch the short film about the catfish story</a></p>
`;

	const defaultText = `<div class="default-text">
    <hr />
    <h3>Interactive map</h3>
    <p>Click an icon to learn more</p>
    <hr />
  </div>
`;

	export let bounds;
	export let view = [-17.1, 124.44];
	export let zoom = 6;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	// let pin = L.icon({
	// 	iconUrl: mapPin,
	// 	className: `pin`,
	// 	html: `<img src=${mapPin}></img>`,
	// 	iconSize: [45, 60]
	// });

	const catfishIcon = new L.divIcon({
		className: `fish`,
		html: `<img src=${catfish}></img>`,
		iconSize: [140, 140]
	});

	const outerContainer = document.querySelector('map-container');
	const largeScreen = window.matchMedia('(min-width: 900px)');
	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		if (outerContainer.offsetWidth > 900) {
			map.setView([-17.1, 124.44], 9);
		} else {
			map.setView([-17.1, 125], 8);
		}

		largeScreen.addListener((e) => {
			if (e.matches) {
				map.setView([-17.1, 124.44], 9);
				setZoom(9);
			} else {
				map.setView([-17.1, 125], 8);
				setZoom(8);
			}
		});

		map = L.map(mapElement)
			// example to expose map events to parent components:
			.on('zoom', (e) => dispatch('zoom', e));

		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: `Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community`
			}
		).addTo(map);

		L.marker([-17.27, 124.719], { icon: catfishIcon }).addTo(map);
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

<div id="map-container" class="container" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.container {
		min-height: 400px;
	}

	:global(.fish),
	:global(.dingo),
	:global(.hawke) {
		height: 100%;
		width: 100%;
		transform: scale(0.5, 0.5);
	}

	@media (min-width: 900px) {
		:global(.fish),
		:global(.dingo),
		:global(.hawke) {
			transform: scale(1, 1);
		}

		:global(.fish img),
		:global(.dingo img),
		:global(.hawke img) {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>

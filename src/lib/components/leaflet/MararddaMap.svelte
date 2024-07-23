<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import { AudioBlock, QuoteInline, ImageSingle } from '$lib';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

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

	const catfishText = [
		{ markup: `<h3>Durdu-ngardi</h3>` },
		{
			component: AudioBlock,
			props: {
				key: 'durduNgardi',
				controls: true,
				source: durduNgardi,
				summary: 'Audio transcript',
				children: `No it’s not a dreaming, it’s a live story. When long time when this earth was under water, you know the sea covered this land and he left some fish maybe in that spot now. But that Wandjina is the boss for that one spot told that catfish to stay one place. So he stay there, he can’t go anywhere. That’s a Durdu-ngardi now where we go that Durdu-ngardi. Durdu-ngardi mean catfish go round and round one place. He don’t go moving anywhere. That’s where he stay there forever. How many flood he don’t take him away - just stay there. That’s a Wunggudd thing. It’s like the Wunggudd it’s keep them one place.`
			}
		},
		{
			component: ImageSingle,
			props: {
				source: catfish,
				alt: '',
				galleryId: 'catfish'
			}
		},
		{
			component: QuoteInline,
			props: {
				text: `Durdu-ngardi is a Wunggudd water. Durdu-ngardi is at the end of the ranges (Ingliss Gap Range) the range starts there at Durdu-ngardi. Durdu-ngardi came from Prince Regent, start there. He's part of the whole thing, starts Prince Regent goes right through following Walungarddi across the desert and back to the sea, all along that Country. The song is from the first generation, from all the birds and animals and they turned it into a song.`,
				credit: 'Matthew Dembal Martin, 2022.'
			}
		},
		{ markup: `<p>'No it's not a dreaming, it's a live story.'</p>` },
		{
			markup: `<p><strong>Listen to</strong> Matthew Dembal Martin talk more about Durdu-ngardi.</p>`
		},
		{
			component: AudioBlock,
			props: {
				controls: true,
				source: durduNgardi_Matthew
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mowanjum,
				alt: '',
				caption: 'Mowanjum Festival Dancers, 2017.'
			}
		},
		{
			component: QuoteInline,
			props: {
				text: `When we dance Walungarddi at the Mowanjum Festival, we go round and round, first clockwise, then anti-clockwise. The dancers’ bodies are connected like the catfish, tail and mouth, tail and mouth. That’s why we hold the person in front and behind.`,
				credit: 'Chloe Nulgit 2022.'
			}
		},
		{
			markup: `<p><a href="#durdu-ngardi-film">Watch the short film about the catfish story</a></p>`
		}
	];

	const hawkeText = [
		{ markup: `<h3>Dalandi</h3>` },
		{
			component: AudioBlock,
			props: {
				key: 'dalandi',
				controls: true,
				source: dalandi
			}
		},
		{
			component: ImageSingle,
			props: {
				source: hawke,
				alt: '',
				galleryId: 'hawke'
			}
		},
		{ markup: `<p>When Europeans came to the area they called Dalandi ‘Silent Grove’.</p>` },
		{
			component: QuoteInline,
			props: {
				text: `We don’t own the Country but the Country owns us. That’s our Law.`,
				credit: 'Philip Cracker Duckhole 2022.'
			}
		},
		{
			markup: `<p>Phillip (Cracker) Duckhole is Traditional Owner for the Walarda (Mount Hart) and Dalandi (Silent Grove) area. His Wunggud, special spirit place, is near Dalandi. Phillip created the hawk which represents and symbolises the area and his daughter (deceased) whose spirit lives in the hawk.</p>`
		},
		{
			markup: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/HSrNTwZ7-68?rel=0&amp;modestbranding=1?rel=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>`
		},
		{
			markup: `<p>Dalandi and Marardda contain many galleries of Wandjina paintings. Phillip Duckhole's sons and nephews are rangers who walk the area often. He will show them how to paint the Wandjinas properly, to use the right ochres and hands not brushes. He describes how it feels to refresh and repaint a Wandjina and how the Country responds to human care.</p>`
		},
		{
			component: AudioBlock,
			props: {
				controls: true,
				source: philip,
				summary: 'Audio transcript',
				children: `You make it happy repainting, make it fresh, really good. And when you smoke and walk away, you can hear the sound Ummm like that from the cave, feel it that's he happy for redoing it, repainting it, you know, yeah.`
			}
		}
	];

	const dingoText = [
		{ markup: `<h3>Walarda Mindi (Mount Hart Station)</h3>` },
		{
			component: AudioBlock,
			props: {
				key: 'walarda',
				controls: true,
				source: walarda
			}
		},
		{
			markup: `<p>The dingo dreaming is the main creation story for the Walarda area. He is considered a boss.</p>`
		},
		{
			component: ImageSingle,
			props: {
				source: dingo,
				alt: '',
				galleryId: 'dingo'
			}
		},
		{
			markup: `<p>Matthew Dembal Martin learned from birth how to walk his Country by following the pathways laid down by Wandjinas and his ancestors in song, story and physical markings or signposts. He was born on Walarda (Mount Hart station) where his mother worked as a stock woman.</p>`
		},
		{
			markup: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/0rSdmx_U-nE?rel=0&amp;modestbranding=1?rel=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>`
		},
		{
			markup: `<p>His Wunggud is also on Mount Hart. He is a senior songman and cultural custodian who has travelled this area since childhood. His songs and stories give meaning to the land. His European name is taken from the European name for Dawungumen Mindi - near Mount Matthew.</p>`
		},
		{
			markup: `<p>As a boy he walked with his mother and father from Walarda Mindi north to Wunambal and Uunggu Country (Kalumburu Mission area) learning about the Country and how to live on it. He returned to live and work as a stockman near his land at Dodnun (Mount Elizabeth station) and Ngallagunda (Gibb River station).</p>`
		},
		{
			component: QuoteInline,
			props: {
				text: `Those days there was no road up there, driving cars up nothing. The road was just lately. We went to Silent Grove, Beverley Springs, Mount House, back here, holiday. Second time we went Beverley Springs to Mount Barnett, then to Gibb River. Went to Mount Elizabeth, drop my grandmother over there leave her at Mount Elizabeth, old Mount Elizabeth. Mum and Dad decided to take me to Kalumburu, walk. … No road to Kalumburu that time, nothing, it was just bush land. Anyway we walk, walk follow the river down that King Edward River getting fish and kangaroo, that’s all. That’s all we can eat.`,
				credit: `Matthew Dembal Martin 2022`
			}
		},
		{
			component: ImageSingle,
			props: {
				source: matthew,
				alt: '',
				credit: `Keith Tattaya, Duliwan Gordon Smith and Matthew Martin working at Pantijan cattle station, 1977. Photo: Kerin O’Dea. Courtesy Mowanjum Aboriginal Art & Culture Centre.`,
				galleryId: 'matthew'
			}
		},
		{
			markup: `<p>Nulgit (Pansy) shared a story about the places she walked and camped when her family came from Munja to Walarda hill and began working for Gardia (white men). The family camped at a place called Dalgumen near Walarda Mindi (Mount Hart station) the same location she and her family and the recording team camped in 2022.</p>`
		},
		{
			markup: `<p>The family had not worked for white men before and they were ‘nervous’. Nulgit started work as a child after her big sister, Matthew Dembal Martin’s mother, came to their camp and explained they would get food and Nulgit would take care of the goats and pigs, and learn to ride horses. It is a story of places and relationships not dates or forced entry into the pastoral workforce.</p>`
		},
		{
			markup: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/Vhxt3dhzoxU?rel=0&amp;modestbranding=1?rel=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>`
		},
		{
			component: AudioBlock,
			props: {
				controls: true,
				source: walarda,
				summary: 'Video transcript',
				children: `This place, we came from Munja, all the way, that big hill we been climb over, when I was small, you know, good size. We been walking from Munja camp to camp all along, all along we been camping. Then one place we made a camp. And my father been go hunting for kangaroo, and he been look, find this place, straight over from this hill, you know Walarda Hill. He seen all the houses there, “We have to go.” Go see if he got some boys there. So we came down night time to that person what been there, chuckem rock. And that boy reckon, “Hey somebody been chuckem rock. Who You?” “No me fella from Munja we been come.”`
			}
		},
		{
			component: ImageSingle,
			props: {
				source: jebb,
				alt: '',
				credit: `Waterhole near Walarda Mindi (Mount Hart station) where Nulgit camped when she started work for the station and where Matthew Dembal Martin was born. Photo: Mary Anne Jebb, 2022.`,
				galleryId: 'jebb'
			}
		}
	];

	export let bounds;
	export let view = [-17.1, 124.44];
	export let zoom = 8;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;
	let infoBox;

	const catfishIcon = new L.divIcon({
		className: `fish`,
		html: `<img src=${catfish}></img>`,
		iconSize: [140, 140]
	});

	const dingoIcon = new L.divIcon({
		className: `dingo`,
		html: `<img src=${dingo}></img>`,
		iconSize: [140, 100]
	});

	const hawkeIcon = new L.divIcon({
		className: `hawke`,
		html: `<img src=${hawke}></img>`,
		iconSize: [140, 100]
	});

	const catfishIconSmall = new L.divIcon({
		className: `fish`,
		html: `<img src=${catfish}></img>`,
		iconSize: [100, 90]
	});

	const dingoIconSmall = new L.divIcon({
		className: `dingo`,
		html: `<img src=${dingo}></img>`,
		iconSize: [90, 90]
	});

	const hawkeIconSmall = new L.divIcon({
		className: `hawke`,
		html: `<img src=${hawke}></img>`,
		iconSize: [90, 90]
	});

	const largeScreen = window.matchMedia('(min-width: 900px)');

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

		if (zoom <= 8) {
			L.marker([-17.4, 124.6], { icon: catfishIconSmall })
				.addTo(map)
				.on('click', () => handleClick(catfishText));

			L.marker([-17.4, 125.252], { icon: hawkeIconSmall })
				.addTo(map)
				.on('click', () => handleClick(hawkeText));

			L.marker([-16.827, 124.915], { icon: dingoIconSmall })
				.addTo(map)
				.on('click', () => handleClick(dingoText));
		} else {
			L.marker([-17.27, 124.719], { icon: catfishIcon })
				.addTo(map)
				.on('click', () => handleClick(catfishText));

			L.marker([-17.4, 125.252], { icon: hawkeIcon })
				.addTo(map)
				.on('click', () => handleClick(hawkeText));

			L.marker([-16.827, 124.915], { icon: dingoIcon })
				.addTo(map)
				.on('click', () => handleClick(dingoText));
		}
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
			// map.setView(view, zoom);
			if (mapElement.offsetWidth > 900) {
				map.setView([-17.1, 124.44], 9);
			} else {
				map.setView([-17.1, 125], 8);
			}
		}
	}

	largeScreen.addListener((e) => {
		if (e.matches) {
			map.setView([-17.1, 124.44], 9);
			// map.setZoom(9);
		} else {
			map.setView([-17.1, 125], 8);
			// setZoom(8);
		}
	});

	import NewModal from '$lib/layout/NewModal.svelte';
	let showModal = false;
	let heading = '';
	let modalContent = '';

	function handleClick(text) {
		showModal = true;
		modalContent = text;
		infoBox.scrollTop = 0;
	}
</script>

<div id="map-container" class="container">
	<NewModal bind:showModal bind:this={infoBox} content={modalContent} />
	<div class="map-container" bind:this={mapElement} />
</div>

<style>
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.map-container {
		min-height: 400px;
		height: 400px;
		width: 100%;
	}

	:global(.leaflet-pane) {
		position: static;
	}

	:global(.fish),
	:global(.dingo),
	:global(.hawke) {
		height: 100%;
		width: 100%;
		transform: scale(0.5, 0.5);
	}

	:global(.fish img),
	:global(.dingo img),
	:global(.hawke img) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	:global(.fish img) {
		animation: rotate 60s linear infinite;
	}

	:global(.dingo img) {
		animation: wiggle 10s infinite;
	}

	:global(.hawke img) {
		animation: wiggle 16s infinite;
		animation-delay: 0.4;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(-360deg);
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(8deg);
		}

		25% {
			transform: rotate(-4deg);
		}

		50% {
			transform: rotate(10deg);
		}

		75% {
			transform: rotate(-2deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

	@media (min-width: 900px) {
		.map-container {
			display: block;
			height: 600px;
		}

		:global(.fish),
		:global(.dingo),
		:global(.hawke) {
			transform: scale(1, 1);
		}
	}
</style>

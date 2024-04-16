<script>
	import { onMount, onDestroy } from 'svelte';
	import { generateSingleMedia } from '$lib/imagePaths';
	import { ImageSingle } from '$lib';

	const singleImageFilenames = [
		'_ANU7122.jpg',
		'_ANU7126.jpg',
		'_ANU7128_bloodyfootprint.jpg',
		'_ANU7128_goanna.jpg',
		'_ANU7154.jpg',
		'_ANU7155_RSerpent01.jpg',
		'_ANU7155_RSerpent02.jpg',
		'_ANU7155_RSerpent03.jpg',
		'_ANU7155_graffiti01.jpg',
		'_ANU7156_emufeet.jpg',
		'_ANU7156_redcrosshatch.jpg',
		'_ANU7156_shields.jpg',
		'_ANU7157_boomerangs.jpg',
		'_ANU7157_elderhand.jpg',
		'_ANU7158.jpg',
		'_ANU7159_hands.jpg',
		'_ANU7163_crocus.jpg',
		'_ANU7163_meetingplace.jpg',
		'_ANU7166_whitecrosshatch.jpg',
		'galleryOne.jpg'
	];

	const folderPath = `/stories/carnarvon/images/gallery/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);

	const text1 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7157_elderhand,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7157_elderhand'
			}
		},
		{
			markup: `<h3>Elder handprint</h3>`
		},
		{
			markup: `<p>At the beginning of the gallery, an Elder uses an enormous stencilled handprint to mark his authority over this place. Next to the Elder's right handprint are the left and right handprints of his wife. The gallery tells the story of their family.</p>`
		}
	];

	const text2 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7157_boomerangs,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7157_boomerangs'
			}
		},
		{
			markup: `<h3>Boomerangs</h3>`
		},
		{
			markup: `<p>The Bidjara used two types of boomerangs to hunt animals. The longer, half-moon shaped boomerang was used to bring animals down; the peaked boomerang to deliver a killing blow.</p>`
		}
	];

	const text3 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7122,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7122'
			}
		},
		{
			markup: `<h3>Axes</h3>`
		},
		{
			markup: `<p>Bidjara people also used hand axes as hunting tools</p>`
		}
	];

	const text4 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7159_hands,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7159_hands'
			}
		},
		{
			markup: `<h3>Hand stencils</h3>`
		},
		{
			markup: `<p>General hand stencilling, with the left and right hand together, has been interpreted as a greeting and farewell, 'Hello, Goodbye'.</p>`
		}
	];

	const text5a = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7166_whitecrosshatch,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7166_whitecrosshatch'
			}
		},
		{
			markup: `<h3>White and red cross hatching</h3>`
		},
		{
			markup: `<p>White and red cross hatching These free-hand painted cross-hatches represent burials. Some Bidjara people were buried at this place, or in its rock crevices. Hollow trees, stumps and logs were other common burial places. The cross-hatches can also represent nets used to catch fish or trap emus, the Bidjara's totem. The Bidjara never killed or ate emus, but collected their feathers.</p>`
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7166_whitecrosshatch,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7166_whitecrosshatch2'
			}
		}
	];

	const text5b = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7156_redcrosshatch,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7156_redcrosshatch'
			}
		},
		{
			markup: `<h3>White and red cross hatching</h3>`
		},
		{
			markup: `<p>White and red cross hatching These free-hand painted cross-hatches represent burials. Some Bidjara people were buried at this place, or in its rock crevices. Hollow trees, stumps and logs were other common burial places. The cross-hatches can also represent nets used to catch fish or trap emus, the Bidjara's totem. The Bidjara never killed or ate emus, but collected their feathers.</p>`
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7166_whitecrosshatch,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7166_whitecrosshatch_repeated'
			}
		}
	];

	const text6 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7158,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7158'
			}
		},
		{
			markup: `<h3>Child's feet</h3>`
		},
		{
			markup: `<p>Underneath a white burial cross-hatch is the faded stencil of a child's feet. To produce such a high, steady stencil, Uncle believes this child had died—was 'mummified'-and was held up with their feet flat against the rock.</p>`
		}
	];

	const text7 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7128_goanna,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7128_goanna'
			}
		},
		{
			markup: `<h3>Goanna</h3>`
		},
		{
			markup: `<p>The gallery depicts four free-painted white goannas, a common Bidjara food source.</p>`
		}
	];

	const text8 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7156_shields,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7156_shields'
			}
		},
		{
			markup: `<h3>Coolamon</h3>`
		},
		{
			markup: `<p>These stencils show two coolamons or shields.</p>`
		}
	];

	const text9 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7154,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7154'
			}
		},
		{
			markup: `<h3>Hand with pinkie missing</h3>`
		},
		{
			markup: `<p>This stencilled handprint belongs to the wife of the Elder, whose large handprint opens the gallery. Handprints were sometimes used as family trees: five fingers to show mother, father, and three children. The lowered pinkie finger indicates this woman has lost her youngest child.</p>`
		}
	];

	const text10 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7156_emufeet,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7156_emufeet'
			}
		},
		{
			markup: `<h3>Emu tracks</h3>`
		},
		{
			markup: `<p>The emu is the totem of the Bidjara. These emu tracks were created by the artist placing the end of two boomerangs over the top of each other. Ochre mixed with water is placed into the mouth and then blown over the boomerangs like spray-paint.</p>`
		}
	];

	const text11 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7163_crocus,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7163_crocus'
			}
		},
		{
			markup: `<h3>Crocus shells</h3>`
		},
		{
			markup: `<p>The Bidjara used crocus or pipi shells to initiate young boys into 'manhood' through ceremonial circumcision and body scarring. Crocus shells came from saltwater, and would have been traded to the Bidjara from the coast. Freshwater mussel shells or rock flakes could also be used.</p>`
		}
	];

	const text12 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7163_meetingplace,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7163_meetingplace'
			}
		},
		{
			markup: `<h3>Meeting Place</h3>`
		},
		{
			markup: `<p>These four outstretched hands represent the meeting place of Carnarvon Gorge, where the four surrounding Aboriginal groups came together. Like the points of a compass, it shows the Kara Kara to the north, Karingbal to the east, Nguri to the south, and Bidjara to the west.</p>`
		}
	];

	const text13 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7126,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7126'
			}
		},
		{
			markup: `<h3>Spiritual guardian</h3>`
		},
		{
			markup: `<p>This is a spiritual guardian who watches over Bidjara burials. The burial is shown by the red cross-hatches. The spiritual guardian's shoulder emerges from the top-left corner of the cross hatches, with a large circular head and two clear eyes painted above. The spiritual guardian faces north-west. Uncle Fred explains that across the continent, all Aboriginal people have a north-west facing burial site to capture sun in the morning and the afternoon.</p>`
		}
	];

	const text14 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7128_bloodyfootprint,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7128_bloodyfootprint'
			}
		},
		{
			markup: `<h3>Bloody footprint</h3>`
		},
		{
			markup: `<p>Instead of a stencil, this child's footprint has been created by dipping the foot in ochre or blood.</p>`
		}
	];

	const text15 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7155_graffiti01,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7155_graffiti01'
			}
		},
		{
			markup: `<h3>Graffiti</h3>`
		},
		{
			markup: `<p>Visitors have defaced the Art Gallery by making their own carvings on the wall. Many sections of this sacred place have been damaged by graffiti.</p>`
		}
	];

	const text16 = [
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7155_RSerpent01,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7155_RSerpent01'
			}
		},
		{
			markup: `<h3>Rainbow serpent</h3>`
		},
		{
			markup: `<p>These lines represent the tracks of the Rainbow Serpent, the Aboriginal Creation Ancestor who awoke during the Dreamtime and used her body to shape the earth into rivers, gorges, lakes, and mountains.</p>`
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7155_RSerpent02,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7155_RSerpent02'
			}
		},
		{
			component: ImageSingle,
			props: {
				source: singleImages._ANU7155_RSerpent03,
				alt: '',
				width: '',
				height: '',
				galleryId: 'ANU7155_RSerpent03'
			}
		}
	];

	let showModal = false;
	let modalText;

	const handleClick = (text) => {
		showModal = true;
		modalText = text;
	};

	import svgPanZoom from 'svg-pan-zoom';
	import NewModal from '$lib/layout/NewModal.svelte';

	let panZoomInstance;
	let svgElement;
	let resizeTimeout;

	function debouncedResizeHandler() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			handleMediaChange();
		}, 250);
	}

	function handleMediaChange() {
		panZoomInstance.resize();
		panZoomInstance.fit();
		panZoomInstance.center();
	}

	onMount(() => {
		window.addEventListener('resize', debouncedResizeHandler);
		panZoomInstance = svgPanZoom(svgElement, {
			zoomEnabled: true,
			controlIconsEnabled: true,
			fit: true
		});

		panZoomInstance.disableZoom();
	});

	onDestroy(() => {
		window.removeEventListener('resize', debouncedResizeHandler);
		clearTimeout(resizeTimeout);
		if (panZoomInstance) {
			panZoomInstance.destroy();
		}
	});
</script>

<NewModal bind:showModal content={modalText} thinImage={true} />

<svg
	bind:this={svgElement}
	class="gallery-one"
	version="1.1"
	id="gallery-one"
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 3200 1564"
	enableBackground="new 0 0 3200 1564"
	xml:space="preserve"
>
	<image overflow="visible" width="3200" height="1564" xlink:href={singleImages.galleryOne} />
	<circle
		id="16c"
		fill="#FFFFFF"
		stroke="ffffff"
		strokeWidth="10"
		cx="1097"
		cy="1277"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text16)}
		on:keydown={() => handleClick(text16)}
	/>
	<circle
		id="16b"
		fill="#FFFFFF"
		cx="1267"
		cy="1147"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text16)}
		on:keydown={() => handleClick(text16)}
	/>
	<circle
		id="16a"
		fill="#FFFFFF"
		cx="1347"
		cy="767"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text16)}
		on:keydown={() => handleClick(text16)}
	/>
	<circle
		id="15"
		fill="#FFFFFF"
		cx="1735"
		cy="867"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text15)}
		on:keydown={() => handleClick(text15)}
	/>
	<circle
		id="14"
		fill="#FFFFFF"
		cx="1845"
		cy="1010"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text14)}
		on:keydown={() => handleClick(text14)}
	/>
	<circle
		id="13"
		fill="#FFFFFF"
		cx="3033"
		cy="803"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text13)}
		on:keydown={() => handleClick(text13)}
	/>
	<circle
		id="12"
		fill="#FFFFFF"
		cx="2493"
		cy="449"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text12)}
		on:keydown={() => handleClick(text12)}
	/>
	<circle
		id="10"
		fill="#FFFFFF"
		cx="2131"
		cy="611"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text10)}
		on:keydown={() => handleClick(text10)}
	/>
	<circle
		id="11"
		fill="#FFFFFF"
		cx="2337"
		cy="363"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text11)}
		on:keydown={() => handleClick(text11)}
	/>
	<circle
		id="8"
		fill="#FFFFFF"
		cx="1641.08"
		cy="682.92"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text8)}
		on:keydown={() => handleClick(text8)}
	/>
	<circle
		id="9"
		fill="#FFFFFF"
		cx="1567.92"
		cy="1109"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text9)}
		on:keydown={() => handleClick(text9)}
	/>
	<circle
		id="7"
		fill="#FFFFFF"
		cx="1743"
		cy="1143"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text7)}
		on:keydown={() => handleClick(text7)}
	/>
	<circle
		id="5b"
		fill="#FFFFFF"
		cx="2761"
		cy="572.77"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text5a)}
		on:keydown={() => handleClick(text5a)}
	/>
	<circle
		id="5a"
		fill="#FFFFFF"
		cx="1299"
		cy="898.08"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text5b)}
		on:keydown={() => handleClick(text5b)}
	/>
	<circle
		id="4"
		fill="#FFFFFF"
		cx="997"
		cy="782"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text4)}
		on:keydown={() => handleClick(text4)}
	/>
	<circle
		id="6"
		fill="#FFFFFF"
		cx="653"
		cy="1041.92"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text6)}
		on:keydown={() => handleClick(text6)}
	/>
	<circle
		id="2"
		fill="#FFFFFF"
		cx="505"
		cy="721.16"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text2)}
		on:keydown={() => handleClick(text2)}
	/>
	<circle
		id="3"
		fill="#FFFFFF"
		cx="359"
		cy="787.92"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text3)}
		on:keydown={() => handleClick(text3)}
	/>
	<circle
		id="1"
		fill="#FFFFFF"
		cx="97"
		cy="765"
		r="55.08"
		tabindex="0"
		role="button"
		on:click={() => handleClick(text1)}
		on:keydown={() => handleClick(text1)}
	/>
</svg>


<style>
	:global(#svg-pan-zoom-controls) {
		transform: translate(20px, 100px);
	}
	.gallery-one {
		margin: 4rem 0;
		width: 100%;
		height: var(--height-viewable);
	}
	.gallery-one circle {
		fill: #fff 21;
		stroke-width: 6px;
		stroke: #fff c2;
	}
	.gallery-one circle:hover {
		fill: #fff 8c;
		stroke-width: 12px;
		stroke: #fff;
		cursor: pointer;
	}
	:global(.cap-image-size img) {
		max-height: 50vh;
	}
	svg {
		width: 100%;
		height: auto;
	}
	circle {
		fill: #ffffff21;
		stroke-width: 6px;
		stroke: #ffffffc2;
	}
	circle:hover {
		fill: #ffffff8c;
		stroke-width: 12px;
		stroke: #ffffff;
		cursor: pointer;
	}
</style>

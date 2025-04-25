<script>
	import { page } from '$app/stores';
	import { generateSingleMedia, generateSubfolderMedia } from '$lib/imagePaths';

	import {
		Header,
		GenericContent,
		Citations,
		Credits,
		ImageSingle,
		ImageFull,
		TwoColumns,
		QuoteInline,
		AudioBlock,
		MediaFullWidth,
		Intro,
		SlideshowScroller,
		ImageGrid,
		YawuruAustraliaMap,
		YawuruBroomeMap,
		YawuruThangooMap,
		YawuruCoastMap
	} from '$lib';

	const singleImageFilenames = [
		'Header_MG_0337.jpg',
		'elsie_edgar.jpg',
		'YawuruSeasonalCalendar.png',
		'Gate_cropped.jpg',
		'JackEdgarThangoo.jpg',
		'Lloyd_Unda.jpg',
		'MarjadeeFather_cropped.jpg',
		'NativesDisputeWestAustralian_cropped.jpg',
		'TommyDorisCanberra1969.jpg',
		'TommyEdgar.jpg',
		'Unda.jpg',
		'YawuruCountry.jpg'
	];

	const slideMapsFilenames = [
		'01_1864-exploration-of-Robeuck-Bay-3423-012_detail.jpg',
		'02_1903-Figure-6-505395-4898_6K7-1903.jpg',
		'03_1945-nla.jpg',
		'04_1955-Figure-10-503215-Cons_4567_Item_127-4-1955.jpg'
	];

	const slideKennedyFilenames = ['01_KennedyHill.jpg', '02_ANUA590-141-023.jpg'];

	const slideMakingFilenames = [
		'01_IMG_7775.jpg',
		'02_IMG_7613.jpg',
		'03_IMG_1043.jpg',
		'04_20210601_0041.jpg',
		'05_20210601_0046.jpg',
		'06_IMG_2149.jpg',
		'07_ArrivingThangoo.mp4',
		'08_MG_0361_processed.jpg',
		'09_MG_0357_copy.jpg',
		'10_MG_0365_processed.jpg',
		'11_IMG_2178.jpg',
		'12_MG_0367_copy.jpg',
		'13_IMG_7995.jpg',
		'14_IMG_0811.jpg',
		'15_IMG_0814.jpg',
		'16_IMG_3011.jpg',
		'17_IMG_2983.jpg',
		'18_Storm.mp4',
		'arriving_poster.jpg',
		'storm_poster.jpg'
	];

	const slideStationFilenames = [
		'01_Thangoo_verandah.jpg',
		'02_FrankPilotEdgar_AnnieEdgarChildren.jpg',
		'03_JackEdgar.jpg'
	];

	const slideThangooFilenames = ['01_slwa_b3388392_1_master.jpg', '02_31327713.jpg'];

	const singleAudioFilenames = [
		'DiscussingSeasons_UndaDi.mp3',
		'DianneAppleby_ThangooCulturalIntelligence.mp3',
		'ApplebyEdgar_2022.mp3',
		'DianneAppleby_2021.mp3',
		'DianneAppleby_2022.mp3',
		'JanetCox1_01.mp3',
		'JimmyEdgar2_01_amplified.mp3',
		'Lloyd_goingtoJangu.mp3',
		'SusanEdgar_Karnin.mp3'
	];

	const folderPathAudio = `/stories/yawuru/audio/`;
	const folderPathImages = `/stories/yawuru/images/`;
	const singleAudio = generateSingleMedia(`${folderPathAudio}`, singleAudioFilenames);
	const singleImages = generateSingleMedia(`${folderPathImages}`, singleImageFilenames);
	const mapsImages = generateSubfolderMedia(
		`${folderPathImages}historic_ maps_slideshow`,
		slideMapsFilenames
	);
	const kennedyImages = generateSubfolderMedia(
		`${folderPathImages}huts_on_kennedy_hill`,
		slideKennedyFilenames
	);
	const makingImages = generateSubfolderMedia(
		`${folderPathImages}making_of_slideshow`,
		slideMakingFilenames
	);
	const stationImages = generateSubfolderMedia(
		`${folderPathImages}station_life_slideshow`,
		slideStationFilenames
	);
	const thangooImages = generateSubfolderMedia(
		`${folderPathImages}thangoo_wells_slideshow`,
		slideThangooFilenames
	);

	const slider = [
		{
			type: 'image',
			url: makingImages[0],
			width: '2400',
			height: '1800',
			caption:
				'Naomi Appleby, Susan Yu, Ann McGrath and Shirleen Robinson out the front of NBY Ltd.',
			alt: 'Naomi Appleby, Susan Yu, Ann McGrath and Shirleen Robinson out the front of NBY Ltd.'
		},
		{
			type: 'image',
			url: makingImages[1],
			width: '2400',
			height: '1800',
			caption: 'Jimmy Edgar and Ben Silverstein sitting inside at NBY Ltd.',
			alt: 'Jimmy Edgar and Ben Silverstein sitting at a table inside at NBY. There is a recording device on the table between them, and Ben has his computer open and is looking at some printed text on paper.'
		},
		{
			type: 'image',
			url: makingImages[2],
			width: '2400',
			height: '1800',
			caption: 'Lloyd Pigram, Susan Edgar, Chad Sloan and Mike Jones.',
			alt: 'Lloyd Pigram, Susan Edgar, Chad Sloan and Mike Jones, sitting at an outdoor table at the Magrove Hotel.'
		},
		{
			type: 'image',
			url: makingImages[3],
			width: '2400',
			height: '1600',
			caption: 'Lloyd Pigram and Ben Silverstein at the Roebuck Bay Lookout.',
			alt: 'Lloyd Pigram and Ben Silverstein at the Roebuck Bay Lookout.'
		},
		{
			type: 'image',
			url: makingImages[4],
			width: '2400',
			height: '1600',
			caption: 'Thomas Edgar on Didirrgun, Kennedy Hill.',
			alt: 'Thomas Edgar on Didirrgun, Kennedy Hill.'
		},
		{
			type: 'image',
			url: makingImages[5],
			width: '2400',
			height: '1800',
			caption: 'Thomas is holding the gate open as a white Toyota 4WD drives through.',
			alt: 'Thomas is holding the gate open as a white Toyota 4WD drives through.'
		},
		{
			type: 'video',
			url: makingImages[6],
			width: '960',
			height: '540',
			poster: makingImages[18],
			caption: 'Video taken from inside the car of driving into Thangoo Station.',
			alt: 'It shows a group of brown Brahman cattle standing in the shade of some trees. At the end of the trees is a wide, freen plain. Another car can be seen driving slowly along the track in front.'
		},
		{
			type: 'image',
			url: makingImages[7],
			width: '2400',
			height: '1600',
			caption: 'Sarah Yu, Thomas Edgar, Ben Silverstein and Dianne Appleby at Janyagurdiny.',
			alt: 'They are all standing next to a white Toyota 4WD. Sarah is writing something in a notebook. Dianne is pointing towards something and Ben and Thomas are looking at. Ben is holding a voice recorder. It has a face mask over the microphone. Diane, Ben and Sarah are wearing facemasks.'
		},
		{
			type: 'image',
			url: makingImages[8],
			width: '2400',
			height: '1600',
			caption: 'A jalangardu (goanna) watching us share stories at Janyjagurdiny.',
			alt: 'A goanna in the shade undernearth a green bush.'
		},
		{
			type: 'image',
			url: makingImages[9],
			width: '2400',
			height: '1600',
			caption: 'Ben Silverstein, Dianne Appleby, and Thomas Edgar.',
			alt: "Ben, Dianne and Thomas are standing together talking. There's an electric fence in the background with trees behind it. Dianne is gesturing. Thomas is looking at Ben. Ben is looking at Diane. Ben holds a sound recording with a facemask over the microphone."
		},
		{
			type: 'image',
			url: makingImages[10],
			width: '2400',
			height: '1800',
			caption: 'Thomas Edgar, Mike Hones abnd Diane Appleby',
			alt: 'Thomas, Mike, and Diane standing the shade of a tree. Thomas has his hands on his hips and is looking at Diane, Diane is speaking, and Mike is holding a sound recorder that has a face mask over the microphone.'
		},
		{
			type: 'image',
			url: makingImages[11],
			width: '2400',
			height: '1600',
			caption: 'Thomas Edgar.',
			alt: 'Close up photo of Thomas Edgar.'
		},
		{
			type: 'image',
			url: makingImages[12],
			width: '2400',
			height: '1800',
			caption:
				'Thomas Edgar, Mike Jones, Diane Appleby and Ben Silverstein at the entrace to Thangoo Station.',
			alt: "Thomas, Diane, Mike and Ben stand on in front of the white metal gate across the road into Thangoo station. The track is red sand and there are trees insude the gate. Thomas has his elbow resting on the top of the gate and Mike is holding a camera that is on a strap around his neck. On the right side of the gate, there are two signs on the fence. The biggest sign is at the top of the gate and reads: 'PRIVATE ROAD: STATION BUSINESS ONLY.' The second sign is smaller and reads 'NO ACCESS TO COAST THANGOO PTY LTD.'"
		},
		{
			type: 'image',
			url: makingImages[13],
			width: '2400',
			height: '1800',
			caption: 'Mike Jones, Lloyd Pigram, and Susan Edgar working on Jangu yirr Janyjadurdiny.',
			alt: "Lloyd is pointing to a document projected onto a screen with the title 'Jangu yirr Janyjadurdingy: murra mala nyurdany, Holding Yawuru cultural knowledge on Country at Thangoo Station- WHY?'"
		},
		{
			type: 'image',
			url: makingImages[14],
			width: '2400',
			height: '1800',
			caption:
				'Janet Cox, Jimmy edgar, Andy James Jr., Thomas Edgar and Ben Silverstein at NBY Ltd.',
			alt: 'Janet Cox, Jimmy edgar, Andy James Jr., Thomas Edgar and Ben Silverstein are sitting around a square table, all looking in the same direction. There are some drinks and food on the table, as well as a voice recorder. Ben has a notepad and pen in his lap.'
		},
		{
			type: 'image',
			url: makingImages[15],
			width: '2400',
			height: '1800',
			caption: 'Mike Jones, Lloyd Pigram and Susan Edgar working on Jangu yirr Janyjadurdiny.',
			alt: 'Mike Jones, Lloyd Pigram and Susan Edgar sit in chars arounbd an outdoor table. Mike is typing on his laptop, and Susan is writing on some paper. Llyod smiles at the camera. On the table are some food and drinks, documents,sunglasses, a packet of cigarettes and some old photographs in a frame.'
		},
		{
			type: 'image',
			url: makingImages[16],
			width: '2400',
			height: '1800',
			caption: 'Thomas Edgar and Leo Dehm at NBY Ltd.',
			alt: 'Thomas and Leo are sitting on a concrete bench outside in the shade. They are looking at each other.'
		},
		{
			type: 'video',
			url: makingImages[17],
			width: '1280',
			height: '720',
			poster: makingImages[19],
			caption: 'Short clip of the bay',
			alt: 'This short clip shows a storm rolling across the bay, with red sand and green mangrove trees in the foreground and the blue water of the bay, followed by grey storm clouds and a lightening bolt.'
		}
	];

	const mapsImagesSlides = [
		{
			markup: [
				`<h3>North West Australia—Chart showing explorations about Roebuck Bay, &c. up to 1864. [detail]</h3>`,
				`<p>Some of the detail for this map was provided by Frederick Panter and James Martin. It described low grassy plains, mangroves and lines of paperbark trees—in Yawuru language Murrga yirr Ganburr. The map shows lines of paperbark stretching inland, along the edges of the saline grasslands of the southern part of Roebuck bay, as they do today.</p>`,
				`<p>Several sites are marked 'Native well'. Other notes include: 'Well grassed', 'Kangaroos numerous', 'Game abundant', and 'Native tracks everywhere'.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: mapsImages[0],
					width: '1794',
					height: '879',
					alt: 'Section of map of Yawuru Country from 1864.',
					galleryId: 'maps1'
				}
			}
		},
		{
			markup: [
				`<h3>Kimberley [Tally No. 505395], cons4898 06K/7, State Records of Western Australia, produced 1901 and cancelled 1903.</h3>`,
				`<p>In one of the obituaries after his death in 1924, George Roe was referred to as a ‘pioneer’ of the north, and that he ‘squatted’ on land near Roebuck Bay. According to later government records, Roe established Thangoo station in 1891. Later, John Edgar went into partnership with pearler Frank Biddles, and this map produced in 1901 shows their leases from Cape Gourdon to the mangrove shores just north of Langurru (Goldwyer Well). Edgar and Biddles’ station on Yawuru country was initially called Yardogarra, spelled various ways on different maps, and was named after the jila Yardugarra, just inland from the shore.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: mapsImages[1],
					width: '1920',
					height: '1412',
					alt: 'Public Plan of land near Roebuck Bay from 1901.',
					galleryId: 'maps2'
				}
			}
		},
		{
			markup: [
				`<h3>Australia. Department of the Interior. Property and Survey Branch & Australia. Royal Australian Air Force & Australia. Army. A.H.Q. Cartographic Company (1945). Australian aeronautical map: Broome (Sheet E4). [detail]</h3>`,
				`<p>This detail from a large aeronautical map of the area shows numerous 'native wells', including 'Than-gool-ngun-jal' (an attempt to transcribe Thangoo or Jangu Ngunjal, where Ngunjal means place) and 'Thangoo or Cowan Well'. Also labelled are places such as the sand hills (Mararr, a restricted area), Racecourse Plains (a massacre site), and Yardogarra Well.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: mapsImages[2],
					width: '704',
					height: '361',
					alt: 'Section of aeronautical map produced by the Royal Australian Air Force and Australian Army from 1945.',
					galleryId: 'maps3'
				}
			}
		},
		{
			markup: [
				`<h3>300 Chain Plan [Tally No. 503215], cons4567 127/4, map produced 1924 and cancelled 1955, State Records of Western Australia.</h3>`,
				`<p>The Thangoo leases were sold in 1939. Among the advertised attractions of the leases at the time were 'numerous native watering places', and the 20 wells that had been built on what were originally Yawuru water sources. Despite the fact that the resources of this part of Yawuru Country were included in the attractions of the property, Yawuru people had no say in the sale of the leases and gained no material benefit when the Edgars sold them.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: mapsImages[3],
					width: '2400',
					height: '1725',
					alt: 'Map from 1924 showing the stick route along the coast, and information about leases.',
					galleryId: 'maps4'
				}
			}
		}
	];

	const stationImagesSlides = [
		{
			markup: [
				`<h3>Photograph on the Thangoo homestead verandah (1932).</h3>`,
				`<p>The people pictured standing in front of the two women on the verandah are, in the back row: Jalgana/Ellen Edgar on far left; Gubajarra/Jack Edgar next to Jalgana; Mangkala/Flossie Edgar/Flossie Larry; Jagura/Thelma Sadler nee Edgar on far right. In the front row are Susan Edgar’s mum’s brothers and sisters.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: stationImages[0],
					width: '719',
					height: '425',
					alt: "An old black and white photograph of nine people on the Thanhoo homestead verandah in 1932.  There is a group of seven Aboriginal children: Jagana/ Ellen Edar; Gubjarra/ Jack Edgar; Mangkala/Flossie Edgar/Flossie Larry; Jagura/Thelma Sadler; Susand Edgar's mum's brothers and sisters. Two white women stand behind them on the verandah.",
					galleryId: 'station1'
				}
			}
		},
		{
			markup: [
				`<h3>Frank 'Pilot' Edgar and Annie Edgar's children, at Janyjagurdiny (Thangoo Station) (date unknown). Photo provided by Susan Edgar.</h3>`
			],
			image: {
				component: ImageFull,
				props: {
					source: stationImages[1],
					width: '2400',
					height: '1609',
					alt: "An old black and white photograph of thirteen people at Janyjagurdiny (Thangoo Station). Date unknown. The photo shows a group of children and three adults: the children  are Frank 'Pilot' Edgar and Annie Edgar's children. The  woman holds the tail of a hunted kangaroo lying in front of her.  There is one white woman in the photo holding a small dog.",
					galleryId: 'station2'
				}
			}
		},
		{
			markup: [
				`<h3>Jack Edgar on Thangoo Station (date unknown). Photo provided by Susan Edgar.</h3>`
			],
			image: {
				component: ImageFull,
				props: {
					source: stationImages[2],
					width: '1030',
					height: '778',
					alt: 'Old black and white photograph of Jack Edgar on Thangoo Station. He is wearing work clothes and an Akubra-style hat and standing in front of tractor parked near a fence, with a windmill in the left hand side of the photo and gum trees on the right.',
					galleryId: 'station3'
				}
			}
		}
	];

	const thangooImagesSlides = [
		{
			markup: [
				`<h3>Well on Thangoo Station, 1935, photographer John K Ewers, State Library of Western Australia: BA1658/203.</h3>`,
				`<p>Sourced from the collections of the State Library of Western Australia and reproduced with the permission of the Library Board of Western Australia.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: thangooImages[0],
					width: '',
					height: '',
					alt: 'Old black and white photograph of a Well on Thangoo Station from 1935.It shows a windmill and tank, surrounded by a post and rail fence and a concrete cattle trough with four cattle drinking. The cattle are emaciated. There are three cattle carcasses in the sand near the trough, and some cattle in the bakcground of the photograph close to the scrub.',
					galleryId: 'maps4'
				}
			}
		},
		{
			markup: [
				`<h3>Thangoo Station – cattle at windmill, August 1943, photographer F Dale and G Gale, National Archives of Australia: K1131, W827 2/15.</h3>`
			],
			image: {
				component: ImageFull,
				props: {
					source: thangooImages[1],
					width: '',
					height: '',
					alt: 'Old black and white photograph of Thangoo Station, August 1943. It shows a windmill, post and rail dence and a herd of cattle. There is some grass in the foreground and scrub in the background.',
					galleryId: 'maps4'
				}
			}
		}
	];

	const kennedyImagesSlides = [
		{
			markup: [`<h3>Huts on Didirrgun (Kennedy Hill) (c.1958?).</h3>`],
			image: {
				component: ImageFull,
				props: {
					source: kennedyImages[0],
					width: '',
					height: '',
					alt: 'Black and white photograph of group of houses located on top of a sandy hill. Some are made from corrugated iron. There is some scrub on the hill, the surrounding plains are flat.',
					galleryId: 'maps4'
				}
			}
		},
		{
			markup: [
				`<h3>Huts on Dirridigun (Kennedy Hill).</h3>`,
				`<p>Buildings and landscape, Broome. From the papers of D'Arcy James Ryan, ANU Archives (ANUA 590-141-23). Reproduced with permission from ANU Archives.</p>`,
				`<p>Dianne Appleby recalls growing up in the home on the left of this image.</p>`
			],
			image: {
				component: ImageFull,
				props: {
					source: kennedyImages[1],
					width: '',
					height: '',
					alt: 'A colour photograph of two huts, with small verandahs at the front and louvered windows. The huts have a small chimney and seem to be made from galvanised steel (monoclad rather than corrugated). One hut has a galvanised drum and a pram at the side. There is black cloth spread over three bushes close by, and half a corrugated iron water tank in the foreground. It is sandy ground and there is a small sand hill in the backgroun with a large rank on top of it, and a gum tree to the right of the image.',
					galleryId: 'maps4'
				}
			}
		}
	];

	const pageTitle = `Jangu yirr Janyjagurdiny: murra mala nyurdany`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header
	image={singleImages.Header_MG_0337}
	name="yawuru"
	alt="An expansive flat of red soil, covered with some green shrubs and grass. There is flat horizon and a light blue sky with some light clouds."
	heading="Jangu yirr Janyjagurdiny: murra mala nyurdany"
	subheading="Holding Yawuru history on Country at Thangoo Station"
	gradientColor="#1b191a"
/>

<Intro>
	<p>Co-created by Yawuru storytellers and the Research Centre for Deep History</p>

	<p>
		This is a digital story about the history of Yawuru Country around the area known as Jangu and
		Janyjagurdiny (later referred to by European pastoralists as Thangoo Station), told mainly
		through the voices of Yawuru people. Starting with Bugarrigarra, it explores seasonal time,
		people's continuing connection to place, and the need to hold and respect Country, law, culture,
		and history now and into the future.
	</p>

	<p>
		<strong>WARNING</strong>: Aboriginal and Torres Strait Islander peoples are warned that the
		following digital story may contain images and voices of deceased persons.
	</p>
</Intro>

<GenericContent>
	<h2>Bugarrigarra nyurdany</h2>

	<QuoteInline credit="Susan Edgar, 2022">
		<p>Bugarrigarra is a Yawuru thing, dreamtime, dreamtime stories.</p>
	</QuoteInline>

	<QuoteInline credit="Jimmy Edgar, 2022">
		<p>It's not 'dreamtime' in the sense of going to sleep and dreaming.</p>
	</QuoteInline>

	<QuoteInline credit="Janet Cox, 2022">
		<p>We're talking about our history.</p>
	</QuoteInline>

	<QuoteInline credit="Dianne Appleby, 2022">
		<p>Bugarrigarra is real, it's still living.</p>
	</QuoteInline>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022">
		<p>Bugarrigarra is life. A living story. It's Yawuru existence.</p>
	</QuoteInline>

	<p>
		There are many Bugarrigarra stories in and of this landscape. One is Marrimarrigun, which Thomas
		'Unda' Edgar describes as "a Jangu story."
	</p>

	<p>
		During the incoming tide, two young boys find themselves stranded on a sandbar, lost to their
		people forever. Marrimarrigun, the giant spirit, returns them to their people as men.
	</p>
</GenericContent>

<MediaFullWidth
	youTubeId="GczGhPs3rzQ"
	caption="Marrimarrigun (2017), 13mins. Director: Kimberley West. Writers: Dot (Dorothy) West, Dianne Appleby. Producer: Jodie Bell. Reproduced with permission."
	max={true}
/>

<GenericContent>
	<p>
		Like all Bugarrigarra stories, Marrimarrigun has many meanings. It is about law and culture,
		remembering and acknowledging the spirituality of Country, the need to be aware of the tides and
		surrounding environment, and liyan (inner spirit, wellbeing, and connection with people,
		community, and Country). Marrimarrigun also contains lessons about the dangers of greed, and is
		a reminder to respect Elders and buru (Country).
	</p>

	<p>
		Marrimarrigun relates to a culturally sensitive area, and the storyline runs through Jangu. It
		is vital that people care for and hold this place so that its strength endures today and
		continues into the future
	</p>
</GenericContent>

<GenericContent>
	<h2>Buru</h2>
	<QuoteInline credit="Jimmy Edgar, 2022"><p>Buru is Country.</p></QuoteInline>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022"
		><p>Bugarrigarra created buru, Law, and culture.</p></QuoteInline
	>

	<QuoteInline credit="Joseph Nipper Roe Ngulibardu (Yawuru Cultural Management Plan)"
		><p>
			The people, the land, and the Law are three aspects of the same thing. We have a duty to look
			after them all, and looking after one of them means looking after the other two as well.
		</p></QuoteInline
	>

	<p>
		The Yawuru people are the traditional owners of Birragun and Nagulagun buru (land and sea
		Country), including the town of Broome, in the Kimberley region of northern Western Australia.
	</p>
</GenericContent>

<YawuruAustraliaMap />

<GenericContent>
	<p>
		Yawuru Country is a landscape of plains, mudflats, mangroves, foreshore, sandbars, and sea. On
		the south coast of the bay is an area called Jangu, and a place called Janyjagurdiny—an area of
		Country that European pastoralists named Thangoo Station.
	</p>

	<p>
		The following map shows just some of the key cultural sites on this landscape, including jila
		(springs or waterholes).
	</p>
</GenericContent>

<YawuruBroomeMap />

<GenericContent>
	<p>
		The rhythms of life on Country are about time as well as place. For generations Yawuru people
		have lived seasonally on these lands, fishing for salmon, catfish, stingray, and sharks, hunting
		turtles, dugong, and goanna, and collecting bushfoods.
	</p>

	<QuoteInline credit="Susan Edgar, Laja (October) 2022">
		<p>
			Yes, wanggaja [mud crab] always fat one time. Wanggaja, crab you know like birndany it’s a
			different season, it’s a different nagula for birndany, for stingrays and stuff. Birndany,
			balarri (shovel shark), jurrwayi (eating shark). Fish come into that season now. Now all the
			reef fish is fat.
		</p>
	</QuoteInline>

	<p>
		There are many seasonal indicators, from flowers and weather patterns to animal behaviour. On a
		visit to Thangoo Station in April 2022, Thomas 'Unda' Edgar and Dianne Appleby talked to Ben
		Silverstein about some of these signs, and the sustainability of seasonal living.
	</p>

	<AudioBlock
		source={singleAudio.DiscussingSeasons_UndaDi}
		credit="Thomas Edgar and Dianne Appleby on Thangoo Station discussing seasons with Ben Silverstein, Marrul (April) 2022."
	/>

	<p>
		Yawuru people live by six seasons: Man-gala, Marrul, Wirralburu, Barrgana, Wirlburu, and Laja.
	</p>

	<ImageSingle
		width="817"
		height="817"
		source={singleImages.YawuruSeasonalCalendar}
		alt="Graphic depiction of the Yawuru six seasons."
		caption="Yawuru Seasonal Calendar."
		galleryId="YawuruSeasonalCalendar"
	/>

	<QuoteInline credit="Janet Cox, 2022"><p>This is sort of a map.</p></QuoteInline>
	<QuoteInline credit="Thomas 'Unda' Edgar, 2022"
		><p>This is Bugarrigarra. We believe in this seasonal map.</p></QuoteInline
	>

	<p>
		Janyjagurdiny and the areas around it are rich in food and other cultural resources. As people
		grow up, they learn about the connections between buru, seasons, culture, and law.
	</p>

	<QuoteInline credit="Susan Edgar, 2022">
		<p>
			We were told to do what we can do, and told not to do what we can't do, and places not to go
			and places you can go, things you can eat, things you can't eat and all these like sea snakes
			and all that, they got banaga, burungu, barrjarri, garimba, but they got skin groups and I
			know them.
		</p></QuoteInline
	>

	<QuoteInline credit="Jimmy Edgar, 2022"
		><p>All these places are cultural; not just jila, all places are cultural.</p></QuoteInline
	>

	<p>
		When outsiders came to this Country, they used its resources without showing respect for
		culture.
	</p>

	<p>
		In early 1864, Frederick Panter and James Martin arrived at Miriny Gujarra (which Nicholas
		Baudin had named Cape Villaret) looking for land suitable for pastoral ventures. Taking fresh
		water from the Yardugarra jila, they moved up the coast over the land that would become Thangoo
		Station, using what they called 'native wells' and 'native paths' to travel inland.
	</p>

	<QuoteInline credit="Thomas 'Unda' Edgar"
		><p>
			Then the cattle came and the sheep there and you know what happened after that, with all the
			messiness and everything.
		</p></QuoteInline
	>

	<p>
		The invasion of European pastoralism and the pearling trade carved up Yawuru Country,
		appropriating names (including Jangu, for Thangoo Station), using jila, fencing off areas where
		people hunted for meat and collected bushfoods and medicines, and demanding labour from Yawuru
		and neighbouring peoples.
	</p>

	<p>
		The following slideshow features a series of maps showing how the knowledge of peoples,
		including Yawuru, was taken and used by European pastoralists in the area.
	</p>
</GenericContent>

<SlideshowScroller content={mapsImagesSlides} />

<GenericContent>
	<p>
		Despite the pastoral invasion, the Country referred to as Thangoo Station remained an integral
		part of Yawuru law and culture. As Dianne Appleby explains, the area is like a 'cultural
		intelligence office' that captured and looked after language and tradition, a place where people
		continue to practice their culture today, and carry it into the future.
	</p>

	<AudioBlock
		source={singleAudio.DianneAppleby_ThangooCulturalIntelligence}
		credit="Dianne Appleby, 2021, speaking about the continuing cultural significance of Thangoo."
	/>
</GenericContent>

<GenericContent>
	<h2>Ngarrangu and life on the station</h2>

	<p>
		Yawuru Country surrounds Thangoo Station to the north and south. For millennia Yawuru ngarrangu
		(people) have lived along this coastline.
	</p>

	<ImageSingle
		width="1400"
		height="1142"
		source={singleImages.YawuruCountry}
		alt="A map from the Yawuru Cultural Management Plan."
		caption="Yawuru Country, as shown in the Yawuru Cultural Management Plan."
		galleryId="YawuruCountry"
	/>

	<p>
		In the twentieth century, Janyjagurdiny was home not just to Yawuru but also to Karajarri,
		Nyigina, Mangala, and Nyangumarta people. These peoples were connected through story and trade,
		and most importantly through their cultural identity.
	</p>

	<p>
		There are four different but related cultural identities among Yawuru (and Karajarri)
		people—Banaga, Burungu, Barrjarri, and Garimba—which structure and set rules for proper
		relationships.
	</p>

	<QuoteInline credit="Dianne Appleby, 2022"
		><p>
			Our cultural identity is to do with our roles and responsibilities, and who we are ... Who we
			can marry and who we can’t marry, who we can talk to and who we can laugh with, who we can
			growl, and those sorts of things.
		</p></QuoteInline
	>

	<p>
		With all these different peoples there, Janyjagurdiny was a vibrant place of cultural exchange
		between people of different languages. People would engage in trade, and perform and share their
		different cultural practices including nurlu (songs), ceremonies, corroborees, hunting, and
		fishing.
	</p>

	<p>
		Jimmy Edgar talks about station life, and being taken out bush as a child, where he could learn
		about Country.
	</p>

	<AudioBlock source={singleAudio.JimmyEdgar2_01_amplified} credit="Jimmy Edgar, 2021." />

	<p>
		Susan Edgar speaks about the foods and medicines found on Country, including at Janyjagurdiny,
		that helped to keep people healthy.
	</p>

	<QuoteInline credit="Susan Edgar, 2022"
		><p>
			The yaminyarri should be starting soon. Yaminyarri is gubinge tree. You know, they hold a lot
			of Vitamin C, more than orange and they are cleansing too for sores ... we never used to get
			sores. The only sores we get is when we scratched walking barefoot there or whatever, but no
			sores because we used to always have our food sources, our natural food sources to eat, we
			would clean our blood system out you know.
		</p></QuoteInline
	>

	<p>
		This food would be shared, given without expectation in a culture of respect. And this sharing
		meant many people could gather, sometimes for ceremony. These gatherings took place across
		Yawuru Country and connected Yawuru with their neighbours. In different seasons, people would
		meet to share resources and nurlu at Janyjagurdiny, further north at the law grounds at Karnin
		just outside Broome, or south on Karajarri Country at Bidyadanga.
	</p>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022"
		><p>
			We get the sea there, right there. Everything in there, like all the big turtles and
			everything. Everything here, because that’s the time of the year now! [Mangala season is the]
			wet time of the year. Plenty abundance. They had it every year. Or in Karnin then. They’d
			shift place, every time then. Same law, but they shift right back to Karnin. Everybody go
			there. Everybody go here, and everybody go Bidyadanga.
		</p></QuoteInline
	>

	<QuoteInline credit="Janet Cox, 2022"
		><p>
			It was good, it was a good life … Everybody was happy, children was happy. We were all happy
			there playing around … And there’d be ceremonies there. They, oh, it was beautiful. Every
			night, when there was a lot of people there living, they had lovely ceremonies. Like dancing
			and singing and, and everybody was happy and laughing and it was good. Because I was only
			little myself and watching it, you know … And they came from different places … But they all
			mixed together and they were very happy … And the people in those days were very good.
		</p></QuoteInline
	>

	<QuoteInline credit="Jimmy Edgar, 2022"
		><p>
			Every night there was corroboree … My goodness, there was singing every night … People
			practiced corroboree and danced every day. And I used to get sick of it, because I wanted to
			play guitar and play basketball.
		</p></QuoteInline
	>

	<p>
		Alongside responsibilities to Country and community, while living on the station Yawuru and
		others performed all the domestic and stock work on the station.
	</p>
</GenericContent>

<SlideshowScroller content={stationImagesSlides} />

<GenericContent>
	<p>
		Women, like Ngalyjan, did all the domestic work, including washing, cleaning, and cooking.
		Gurndiga was a senior cultural law boss, initiated into Yawuru law. He was a man of great
		stature with status across the region, from Yawuru to Karrajarri and down south through the
		Pilbara, and east through the desert to Bunuba. When Gurndiga and Ngalyjan were married, the
		registrar demanded English names for his forms: Tommy and Doris Edgar took their surname from
		the name of the Thangoo station-owner.
	</p>

	<ImageSingle
		width="600"
		height="658"
		source={singleImages.TommyEdgar}
		caption="Gurndiga/Tommy Edgar"
		alt="An old lack and white portrait photograph of Gurndiga/Tommy Edgar. He is wearing a white suit, a tie and jacket."
		galleryId="TommyEdgar"
	/>
	<ImageSingle
		width="234"
		height="555"
		source={singleImages.TommyDorisCanberra1969}
		alt="An old  colour photograph of Ngalyjan/Doris Edgar and Gurndiga/Tommy Edgar. They are both standing: Doris is wearing a dress, white cardigan and white sandals, Tommy is wearing a black suit, tie and shoes and a white shirt."
		caption="Gurndiga/Tommy Edgar and Ngalyjan/Doris Edgar."
		galleryId="TommyDorisCanberra1969"
	/>

	<p>
		Tommy Edgar was one of the first Aboriginal people in the region to get a driver's licence, and
		drove cattle trucks around the area. He was a water diviner, and a skilled windmill repairer.
		Tommy became known as the 'Windmill Man.'
	</p>

	<QuoteInline credit="Janet Cox, 2022">
		<p>
			He travelled the whole station, fixing up windmills. Because there would be about 12
			windmills. And he’d go to fix up that windmill and all them other windmills, you know, going
			with the big trucks and, I mean, the station trucks, and see that everything was running.
		</p>
	</QuoteInline>
</GenericContent>

<SlideshowScroller content={thangooImagesSlides} />

<GenericContent>
	<p>
		Conditions were hard at Thangoo, and people who lived on the station experienced disrespect and
		the constant threat of violence.
	</p>
	<QuoteInline credit="Jimmy Edgar, 2021">
		<p>
			They were the bosses, they had the guns … You know, you know if, if you said anything wrong
			they’d put, they’d, they’d have a gun in front of you, that sort of things. … everybody had to
			abide by the station managers where, because of the rifle … what I saw was not the station
			manager, but it was the gun.
		</p>
	</QuoteInline>

	<QuoteInline credit="Jimmy Edgar, 2022">
		<p>
			They hurt me too as well. Like, I used to play with the calves and that, and the stockmen used
			to kick us up the bum and that … So, you know, yeah, definitely that kind of things that would
			happen … Because I often see them chase of all my, all my aunties and sisters, all the
			stockmens, yeah?
		</p>
	</QuoteInline>

	<QuoteInline credit="Janet Cox, 2022">
		<p>
			I think something was happening there but I, I, I don't, I'm too small to know, understand …
			And if, when the girls came back from doing things, you'd hear them screaming, come running,
			running back into the camp. Might be that's why they ran away from there.
		</p>
	</QuoteInline>

	<p>Dianne Appleby remembers her mother describing their treatment as slaves.</p>

	<AudioBlock source={singleAudio.DianneAppleby_2022} credit="Dianne Appleby, 2022." />

	<p>
		From the 1930s onwards, some kids moved into Broome for schooling, and continued to move back
		and forth.
	</p>

	<ImageSingle
		width="384"
		height="226"
		source={singleImages.elsie_edgar}
		alt="An old black and white photograph of a car with a group of four adults and two children standing next to it."
		caption="Elsie Edgar arriving at the Common Gate, where people crossed the municipal boundary into
	Broome."
		galleryId="elsie_edgar"
	/>

	<p>Janet Cox talks about living in Broome and having a home on Thangoo.</p>

	<AudioBlock source={singleAudio.JanetCox1_01} credit="Janet Cox, 2022." />
</GenericContent>

<TwoColumns>
	<div slot="column1">
		<p>After the war, things changed.</p>

		<p>
			In 1946 Aboriginal pastoral workers across the Pilbara went on strike. Tommy Edgar, who drove
			road trains around the state, learnt about the strike in Port Hedland and, from there, he was
			involved with the strike mob.
		</p>

		<p>
			But word also spread through other connections, and soon those in Thangoo knew what was
			happening.
		</p>

		<p>Some walked off the station in 1946, moving to Broome.</p>

		<p>
			In February 1951 the remaining Aboriginal workers on Thangoo walked off and, when they
			returned, they demanded wages and better conditions.
		</p>

		<p>
			The station managers refused, and the Broome office of the Native Affairs department was
			directed to suspend issuing employment permits, meaning that station workers who had left were
			unable to obtain legal employment in Broome.
		</p>

		<p>
			Some moved to the settlement on Didirrgun (Kennedy Hill), which was declared as a reserve in
			the 1950s. From here people had easy access to the mangroves and the sea, waterholes,
			corroborree sites, bushfoods, and more, with Thangoo in clear line of sight across the bay.
		</p>
	</div>

	<div slot="column2">
		<ImageSingle
			source={singleImages.NativesDisputeWestAustralian_cropped}
			alt="Newspaper article from 1946 from the West Australian. The title is 'Natives' Dispute: Higher Wages Wanted.'"
			width="254"
			height="901"
			galleryId="NativesDisputeWestAustralian_cropped"
			shadow={true}
		/>
	</div>
</TwoColumns>

<SlideshowScroller content={kennedyImagesSlides} />

<GenericContent>
	<QuoteInline credit="Thomas 'Unda' Edgar">
		<p>
			This was my growing up place, and the happiest time of my life. We had everything, we had the
			fish, we had the crab just straight down there, the creek, everything.
		</p>
	</QuoteInline>

	<QuoteInline credit="Janet Edgar, 2022">
		<p>It was like a tin shack, but it doesn't matter because we were all there together.</p>
	</QuoteInline>

	<p>
		Others moved to Karnin, where they supported themselves by selling oysters, crab, and other
		cultural resources. Hear Susan Edgar talking about life during this period.
	</p>

	<AudioBlock
		source={singleAudio.SusanEdgar_Karnin}
		credit="Susan Edgar discussing life at Karnin with Ben Silverstein and Mike Jones, drawn from two separate interview sessions in 2021 and 2022."
	/>
</GenericContent>

<MediaFullWidth
	image={singleImages.MarjadeeFather_cropped}
	caption="Susan Edgar's father, carrying fish, at Karnin. Photo provided by Susan Edgar."
	alt="An old black and white photograph showing four people next to a flat-bed truck underneath a tree at Karnin. The photograph is sepia coloured and has some creases. The main focus of the phorograph is Susan Edgar's farther, he is holding two large catches of fish. He is lookingat the camera. The other men are standing around the back of the truck. "
	contain={true}
/>

<GenericContent>
	<h2>Mabu liyan ngayini ngan-ga</h2>

	<p>
		Through the station times, Yawuru people maintained their law, language, and culture at
		Janyjagurdiny.
	</p>

	<QuoteInline credit="Susan Edgar, 2022">
		<p>
			They never take that away from the old, old people in Janyjagurdiny. They were strong and they
			kept it going. They couldn't take it off them, because they already, their minds [were] set.
			That's their law and they have to keep it.
		</p>
	</QuoteInline>

	<p>
		The use of language and practice of law continues. Yawuru people remain connected to Country and
		learn cultural knowledge through their connection to Janyjagurdiny. It is still home for so many
		Yawuru people.
	</p>

	<QuoteInline credit="Dianne Appleby, 2022">
		<p>
			Well we’d be there every weekend. After school, you know, like the holiday time. They actually
			never left, basically. All they wanted to do was spend time back on Country.
		</p>
	</QuoteInline>

	<QuoteInline credit="Janet Cox, 2022">
		<p>
			It’s what the place means to you. When you go there, what does Thangoo mean to all of us? It
			means home. It’s everything that we’ve got there. And so we want to go back and see that
			place, and know our feeling for that place. It might be hot and sticky and whatever it is, but
			that’s our home. It’s like when you go back to your home, what you feel for it. And that’s
			just what we feel for Thangoo. That’s where we grew up, that’s where we know: where we can
			hunt, and where to go, not to damage the place but just go there. We can go fishing, we can
			get our crabs, we can get our goanna, whatever. Honey from the tree, it’s there! And our
			feeling there, our liyan, is there. Because that’s where we’re from. And we tell that to our
			grandchildren, what happened to us when we were there, what our feelings towards Thangoo are.
			Our place is there. And there’s sacred places.
		</p>
	</QuoteInline>

	<QuoteInline credit="Dianne Appleby, 2022">
		<p>When our cup is empty, we return to refill the cup, to make it full.</p>
	</QuoteInline>

	<p>
		Though it wasn’t always easy, returning, in the right tide and the right season, allowed Yawuru
		people to continue to learn about Country. Some would walk, others drive, and, from the 1980s
		onwards, many would take the shorter route (and a route less visible to the station owners) and
		travel across the Bay by boat.
	</p>

	<ImageSingle
		width="1400"
		height="1145"
		source={singleImages.Gate_cropped}
		alt="The fence next to the gate to Thangoo Station has two hand-painted signs attached to it. The biggest sign is at the top of the gate and reads: 'PRIVATE ROAD: STATION BUSINESS ONLY.' The second sign is smaller and reads 'NO ACCESS TO COAST THANGOO PTY LTD.'"
		caption="The entrance to Thangoo Station in 2022. Photo: Ben Silverstein."
		galleryId="Gate_cropped"
	/>

	<p>
		Dianne Appleby and Thomas 'Unda' Edgar talk about opening the gate and returning to Thangoo.
	</p>

	<AudioBlock
		source={singleAudio.ApplebyEdgar_2022}
		credit="Dianne Appleby and Thomas 'Unda' Edgar, 2022."
	/>

	<p>
		Returning from Broome to Janyjagurdiny is a way of mapping Country. From Broome, looking over
		Roebuck Bay, you can see the tamarind tree near the Thangoo homestead.
	</p>
</GenericContent>

<YawuruThangooMap />

<GenericContent>
	<p>
		In what now looks like a small clearing just above the younger tree in the image above, there
		used to stand an older tamarind tree, later knocked down in a cyclone. A long time ago, when
		welfare came to take children away, some (like Doris Edgar's father, Tommy Roe) managed to
		escape by climbing up that tamarind tree and hiding behind its branches. Later, others, like
		Doris herself, eluded welfare by painting themselves with guba (charcoal) from the jarridany
		balu (tree).
	</p>

	<p>
		As an adult, Guminy/Tommy Roe was to become birrga-man for Jangu, the most senior cultural law
		boss responsible for Yawuru Country. A Garimba man, he was promised a high profile wife,
		Bajingga/Monica, a Barrjari Naja Karajarri woman from Miriny Gujarra (Eco Beach), who was the
		daughter of a survivor of the LaGrange Massacre in 1865.
	</p>

	<p>
		Later, Tommy Roe passed his birrga role and and responsibility on to Tommy Edgar, who had been
		promised to and married Tommy Roe’s eldest daughter Doris. In his later years, Tommy Roe
		established a community at Kennedy Hill and lived at other places around Broome, outside the
		common fence.
	</p>

	<p>
		Looking from Broome at the younger tamarind tree today, Yawuru people recall the years they
		lived there and maintain their connection; spiritually, they are still at Janyjagurdiny and
		Jangu.
	</p>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022">
		<p>We always return.</p>
	</QuoteInline>

	<QuoteInline credit="Dianne Appleby, 2021">
		<p>We never disconnect. Although we live here, we’re always back there.</p>
	</QuoteInline>

	<p>
		Yawuru people regularly return to Jangu and Janyjagurdiny, sometimes by car and often by boat.
		There they can share knowledge, access resources, and bring them back to share fish and other
		nagulagun and birragun warli mayi (sea and bush food) from Country with community in Broome and
		surrounds. These visits maintain cultural connection and liyan—Yawuru wellbeing.
	</p>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022">
		<p>
			This knowledge comes from our old people who told us how to protect Country; this is their
			story of what they’ve been doing all their life.
		</p>
	</QuoteInline>

	<QuoteInline credit="Dianne Appleby, 2022">
		<p>
			Liyan is the thing driving us back, drawing us back there. When we get back there now, Unda
			mob go and get birndany, for example. When we light that jungku from gundurung, that smell
			starts to create a story. We sit down there with mum and dad. We get birndany, we get crab,
			and all the memories come back. It’s so refreshing. Suddenly our spirit is lifted up because
			we’re in a place where we’re not interrupted or being interfered with our thoughts, because
			the liyan is free. The freedom of what Marrimarrigun brings, that’s freedom too, that spirit
			from that Country. That liyan is so beautiful there.
		</p>
	</QuoteInline>

	<p>Listen to Dianne Appleby speak more about an ongoing connection to Jangu.</p>

	<AudioBlock source={singleAudio.DianneAppleby_2021} credit="Dianne Appleby, 2021" />

	<ImageSingle
		width="1400"
		height="1839"
		source={singleImages.JackEdgarThangoo}
		alt="Bulan/Jack Edgar back home at Jangu. This is a colour still (taped onto a piece of cardboard) of Jack Edgar sitting down and playing cards. There are other people sitting close by but their faces are not in frame."
		caption="Bulan/Jack Edgar back home at Jangu (date unknown). Photo provided by Susan Edgar."
		galleryId="JackEdgarThangoo"
	/>
</GenericContent>

<GenericContent>
	<h2>Wirriya liyan buru</h2>

	<p>
		Over time, generations of Yawuru people have continued to learn and hold cultural knowledge from
		Janyjagurdiny. People like Lloyd Pigram, who has visited Jangu regularly in recent years along
		with Dianne Appleby and Thomas 'Unda' Edgar. By taking younger Yawuru people to Jangu, Dianne
		and Unda have increased cultural knowledge sharing on Country.
	</p>

	<ImageSingle
		width="800"
		height="600"
		source={singleImages.Lloyd_Unda}
		alt="Llyod is wearing sunglasses, shorts and thongs and holding a water bottle, Thomas is weating shorts and a t-shirt. It is sunny and looks hot. There are some bags in front of them on the sandy ground and mangroves behind them. "
		caption="Lloyd Pigram and Thomas 'Unda' Edgar at Urlugurranan (the old jetty at Thangoo Station)."
		galleryId="Lloyd_Unda"
	/>
	<ImageSingle
		width="480"
		height="640"
		source={singleImages.Unda}
		alt="There is a bed of black coals and some read coals beside it, in the shade of  a tree. Thomas is moving the black colas with a long stick. "
		caption="Thomas 'Unda' Edgar cooking fish. Photos: Dianne Appleby, 2018."
		galleryId="Unda"
	/>

	<p>Lloyd Pigram talks about the feeling of travelling over from Broome to Jangu.</p>

	<AudioBlock source={singleAudio.Lloyd_goingtoJangu} credit="Lloyd Pigram, 2022." />

	<p>
		On return to Broome, it is customary for Yawuru and other Aboriginal people who access Jangu
		nagulagun to share warli (food) with families from that area. This sharing renews the connection
		between people and Country: even when families are physically unable to visit Country
		themselves, they can still enjoy its resources. The process of sharing also expresses the
		relationships between Yawuru people, as younger community members visit relations and kin to
		distribute the catch and are reminded of the meaning of their connections.
	</p>

	<p>
		This sharing is also a part of the ceremonial practices associated with funerals and sorry time.
		And it represents an ongoing cultural exchange, maintaining and regenerating trade relationships
		with other Aboriginal people who have long-lasting and enduring connections with Yawuru.
	</p>

	<QuoteInline credit="Lloyd Pigram, 2022">
		<p>
			The dropping off part was the perfect, was the best part … that liyan you know, because you're
			like oh everybody coming and everybody getting a feed … that's the cultural way.
		</p>
	</QuoteInline>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022">
		<p>It’s the law.</p>
	</QuoteInline>

	<p>Looking after Bugarrigarra, buru, people, and culture remains a vital part of Yawuru life.</p>

	<QuoteInline credit="Susan Edgar, 2022">
		<p>
			The main thing is connecting with the Country to know your people, where they come from, you
			know, what group they’re in. Wirriya liyan buru is your liyan, your feelings of the Country.
			It means you are back in your Country. That’s where your roots, your birr, your roots start.
			This is very important education, Yawuru education from Janyjagurdiny. This education is very
			important and they have to carry it on. It’s vital information this because with the birr, the
			roots, that is where it starts from, Janyjagurdiny, the roots of songs, the roots of food
			sources, the history. How they struggled to live to this day and age now, you know, to this
			2022. Every day to them would be just another day, but they kept all that information to pass
			onto us so we could pass onto our mimi, our grandchildren and our jalbi mob, our great great
			grandchildren.
		</p>
	</QuoteInline>

	<QuoteInline credit="Thomas 'Unda' Edgar, 2022">
		<p>
			This is what the buru, the land gives us. We’ve got to respect that land, respect the buru.
			Water comes out from underneath the land. That brings the animals, and that’s the life of the
			buru where we live. Respect the buru.
		</p>
	</QuoteInline>
</GenericContent>

<YawuruCoastMap />

<GenericContent>
	<h2>Making Jangu yirr Janyjagurdiny</h2>

	<p>
		<em>Jangu yirr Janyjagurdiny</em>, a collaboration between Yawuru storytellers and researchers
		at the Research Centre for Deep History, is one outcome of a longer partnership.
	</p>

	<p>
		In 2018 and 2019, Ann McGrath and Ben Silverstein visited Broome and met with staff at Nyamba
		Buru Yawuru Limited (NBY), including members of the Mangara heritage unit Sarah Yu, Lloyd
		Pigram, and Naomi Appleby. On the latter visit, accompanied by Shirleene Robinson from the
		National Library of Australia, they recorded a series of deep time oral histories and life
		histories with a number of Yawuru community members. After Naomi Appleby and Sarah Yu visited
		Canberra in 2019, the ANU and NBY agreed on a Memorandum of Understanding in 2020.
	</p>

	<p>
		Researchers had studied the history of Thangoo Station before, but little of the material they
		gathered or produced was either accessible to or controlled by those responsible for that
		Country. In response to this problem, Mike Jones and Ben Silverstein were invited to work on a
		project that would both repatriate these histories and, along with Yawuru people from Jangu and
		Janyjagurdiny, narrate a history of Yawuru presence and connection.
	</p>

	<p>
		The story shared above was crafted over three ANU trips to Broome, including a visit to Jangu,
		in 2021 and 2022. These were complemented by countless meetings and interviews over phone calls
		and Zoom. The Yawuru storytellers involved—Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne
		Appleby, Susan ‘Marjadee’ Edgar, and Nyangumarta storyteller Susan Gilbert—have generously
		shared their knowledge, their ideas, and their stories.
	</p>
</GenericContent>

<ImageGrid media={slider} galleryId="sliderGallery" />

<Credits
	credits={[
		{
			title: 'Yawuru knowledge holders',
			names: "Janet Cox, Jimmy Edgar, Thomas 'Unda' Edgar, Dianne Appleby, and Susan Edgar"
		},
		{ title: 'Cultural Engagement Consultant', names: 'Lloyd Pigram' },
		{ title: 'Text, interviews, and additional research', names: 'Mike Jones, Ben Silverstein' },
		{ title: 'Research assistance and additional text', names: 'Fiona Skyring' },
		{ title: 'Story design and implementation', names: 'Mike Jones' },
		{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' }
	]}
	><p>
		Thank you to Janet Cox, Jimmy Edgar, Thomas 'Unda' Edgar, Dianne Appleby, and Susan Edgar; Susan
		Gilbert; and to Lloyd Pigram, Sarah Yu, Naomi Appleby, Chad Sloan, and Andy James, Jr.
	</p>

	<p>
		This project has been prepared with the support and assistance of Nyamba Buru Yawuru Limited,
		the Beyond Reconciliation ANU Grand Challenge Scheme, the Research Centre for Deep History, and
		the Australian Research Council: 'Rediscovering the deep human past: global networks, future
		opportunities' (FL170100121).
	</p>
</Credits>

<Citations
	citations={[
		{
			insert: 'this page',
			authors:
				'Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		},
		{
			insert: 'Janet Cox',
			authors:
				'Janet Cox cited in Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		},
		{
			insert: 'Jimmy Edgar',
			authors:
				'Jimmy Edgar cited in Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		},
		{
			insert: 'Thomas ‘Unda’ Edgar',
			authors:
				'Thomas ‘Unda’ Edgar cited in Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		},
		{
			insert: 'Dianne Appleby',
			authors:
				'Dianne Appleby cited in Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		},
		{
			insert: 'Susan ‘Marjadee’ Edgar',
			authors:
				'Susan ‘Marjadee’ Edgar cited in Janet Cox, Jimmy Edgar, Thomas ‘Unda’ Edgar, Dianne Appleby, Susan ‘Marjadee’ Edgar, Susan Gilbert, Lloyd Pigram, Mike Jones and Ben Silverstein (2022)'
		}
	]}
	location={$page.url.href}
	page={pageTitle}
/>

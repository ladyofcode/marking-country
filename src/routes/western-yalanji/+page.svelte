<script>
	import { page } from '$app/stores';
	import { generateSingleMedia, generateSubfolderMedia } from '$lib/imagePaths';
	import { switcher } from '../../stores/sectionSwitcherStore';
	import { onMount } from 'svelte';

	const switcherLinks = [
		{ title: 'Top', ref: '#header' },
		{ title: 'Magnificent Gallery', ref: '#magnificent' },
		{ title: 'Quinkan Rock Art', ref: '#rockart' }
	];

	import {
		Header,
		Collapsible,
		GenericContent,
		ImageGrid,
		EmbedYouTube,
		ImageSingle,
		QuoteInline,
		Intro,
		MediaFullWidth,
		Citations,
		Credits,
		SideScroller,
		TwoColumns,
		YalanjiMap
	} from '$lib';

	const singleImageFilenames = [
		'sahul_animated.gif',
		'AboriginalProtectionOpiumAct.jpg',
		'BannerImage.jpg',
		'NativePoliceLaura.jpg',
		'Ochre.jpg',
		'quinkan_country_boundary_map.jpg',
		'Quinkans.jpg',
		'TurramulliThumbnail.jpg',
		'GeologicalTimeScale4.png'
	];

	const slideGalleryFilenames = [
		'Magnificent01.jpg',
		'Magnificent02.jpg',
		'Magnificent03.jpg',
		'Magnificent04.jpg',
		'Magnificent05.jpg',
		'Magnificent06.jpg',
		'Magnificent07.jpg',
		'Magnificent08.jpg',
		'Magnificent09.jpg'
	];

	const slideRockArtFilenames = [
		'IMG_7641.jpg',
		'IMG_7651.jpg',
		'IMG_7677.jpg',
		'IMG_7861.jpg',
		'IMG_7874.jpg',
		'IMG_7876.jpg',
		'IMG_7880.jpg',
		'IMG_7891.jpg',
		'IMG_7944.jpg'
	];

	const folderPath = `/stories/yalanji/images/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);
	const slide_gallery = generateSubfolderMedia(
		`${folderPath}magnificent_gallery_slideshow`,
		slideGalleryFilenames
	);
	const slide_rockart = generateSubfolderMedia(
		`${folderPath}general_rockart_gallery`,
		slideRockArtFilenames
	);

	const pageTitle = 'Western Yalanji';

	const slidesMagnificentGallery = [
		{ url: slide_gallery[0], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[1], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[2], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[3], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[4], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[5], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[6], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[7], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' },
		{ url: slide_gallery[8], caption: 'Mike Jones', type: 'image', width: '2400', height: '1800' }
	];

	const imageGrid = [
		{ url: slide_rockart[0], type: 'image' },
		{ url: slide_rockart[1], type: 'image' },
		{ url: slide_rockart[2], type: 'image' },
		{ url: slide_rockart[3], type: 'image' },
		{ url: slide_rockart[4], type: 'image' },
		{ url: slide_rockart[5], type: 'image' },
		{ url: slide_rockart[6], type: 'image' },
		{ url: slide_rockart[7], type: 'image' },
		{ url: slide_rockart[8], type: 'image' }
	];

	const sideScrollerOne = [
		{
			markup: [
				`<h2>Quinkan Country</h2>

<p>
	<a href="https://www.dcceew.gov.au/parks-heritage/heritage/places/national/quinkan-country"
		>Quinkan Country</a
	> is home to groups known as the Kuku-Thypan, Kuku Yalanji, Gugu-Yimithirr, Gugu-Warra, Gugu-Ballanji,
	Gugu-Minni, or Olkola, as well as other names.
</p>

<p>
	The Kuku Yalanji describe rock paintings as Stories. Storytime, a regional term similar to
	Dreaming or Dreamtime, was Creation time, when Country and everything that dwelt here was made.
</p>
`,
				{
					component: QuoteInline,
					children: `<p>
			The epic narratives of the Storytime tell of the origins of the dramatic Cape York landscape
			of rocky ridges, escarpments, plateaus, steep cliffs, rock falls, river gullies and valleys.
		</p>`
				}
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.quinkan_country_boundary_map,
					alt: 'A cartographical map showing the boundaries of Quinkan Country.',
					width: '2400',
					height: '1967',
					caption: '',
					galleryId: 'quinkan_country_boundary_map',
					scroller: true
				}
			}
		},
		{
			markup: [
				`<p>
		Different groups have their own special versions of Stories and interpretations, and key elders
		hold cherished elements of the story - some can be told to the wider public, others are
		restricted. Charlie Lee Cheu and Danny Lee Cheu talk about some of these Stories from Quinkan
		Country.
	</p> <p>
		Many stories tell of a time when the Country was flat, without mountains. A summary of one
		account is that Goorialla, the Great Rainbow Serpent, travelled across this unformed land. He
		stopped and did his droppings, which were transformed into the mountain Ngarrabullgan (which
		Europeans called Mt Mulligan, after an Irish prospector whose party found gold). On its summit,
		Goorialla created a beautiful water lily lagoon, and made a campfire which left behind a mammoth
		coal seam.
	</p>

	<p>
		Later Goorialla came to where people were camping. Young brothers with nowhere else to stay were
		seeking shelter, and Goorialla opened his giant mouth very wide so that they could retreat
		there. But it was a trick and he swallowed them. When men reached the sleeping serpent, they
		sliced him open to free the boys. When Goorialla woke, he was hungry and in a great rage. In his
		fury, he broke the mountain into bits, and hurled it around the Country, which explains the many
		rocky outcrops, boulders and eroded shelters that can be seen in the region today.
	</p>

	<p>One notable character appearing in the local rock shelters are the Quinkans.</p>`,
				{
					component: QuoteInline,
					props: {
						credit: 'Charlie Lee Cheu, Western Yalanji'
					},
					children: `<p>Down Laura there, you know, you see them mob Quinkan walking on the stone.</p>`
				}
			],
			youtube: {
				component: EmbedYouTube,
				props: {
					youTubeId: 'Rqa8qxFxwDE',
					caption:
						'Charlie Lee Cheu and Danny Lee Cheu. Courtesy of Western Yalanji Aboriginal Corporation.'
				}
			}
		},
		{
			markup: [
				`<p>
				Quinkans could take many forms, including Imjin (Anurra) and Timara, and could deceive men
				by transforming themselves into beautiful women or other creatures.
			</p>

			<p>
				Artists painted certain Quinkans as huge male figures with strangely shaped heads, large
				donkey-like ears, distended, stick-like bodies and enlarged genitals. The females had
				rounded bodies, exaggerated and long pendulous breasts, often a high head adornment, and
				often hands with a peculiar number of fingers.
			</p>

			<p>
				This Quinkan style is a relatively recent art development, introduced about 4,000 years ago.
				Unlike the famous early paintings of Lascaux and other sites in France and Europe, which
				featured animals, Aboriginal people painted human figures for millennia; it was a favoured
				subject. And these visualizations have astonishing longevity. They have endured far beyond
				the 100s of years of the great European oil paintings by artists such Leonardo da Vinci.
			</p>

			<p>This long, long history contrasts dramatically to that of the Europeans in Australia.</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.Quinkans,
					alt: "Two 'Quinkan' figures paintings on a rock wall.",
					width: '1400',
					height: '1867',
					caption: 'Quinkans. Photo: Mike Jones, 2021.',
					galleryId: 'Quinkans',
					scroller: true
				}
			}
		}
	];

	onMount(() => {
		switcher.set(switcherLinks);
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header
	image={singleImages.BannerImage}
	name="yalanji"
	alt="An organse rock wall covered with art, mostly painted in dark red and white, inclduing animals and human-like figures."
	heading="Lands of the Western Yalanji"
	subheading="Quinkan Country"
	gradientColor="#937863"
/>

<Intro>
	<p>
		In Cape York, the Western Yalanji preside over a region featuring an astonishing array of
		paintings and engravings that tell the Stories of Quinkan Country, named for the distinctive
		spirit creatures depicted on the rock walls and shelters that have been used over millennia.
	</p>
</Intro>

<SideScroller content={sideScrollerOne} />

<GenericContent>
	<h2>Cape York Peninsula</h2>

	<p>
		Aboriginal people occupied this region at least 37,000 years ago. Western scientists date the
		Cape York landscape, its sandstone and river valley formations, as being formed on the cusp of
		the Cretaceous and Jurassic epochs.
	</p>
</GenericContent>

<MediaFullWidth
	image={singleImages.GeologicalTimeScale4}
	alt="Table showing geological time scales."
	caption={`The geological time scale. Image by Jonathan R. Hendricks. <a
href="https://creativecommons.org/licenses/by-sa/4.0/"
>This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International
License</a
>.`}
	width="1262"
	height="1054"
	contain={true}
	galleryId="GeologicalTimeScale4"
/>

<GenericContent>
	<p>
		Its rock shelters provided cool and welcoming campsites that eventually became outstandingly
		rich in art. The paintings that can be seen today were made from around 27,000 years before the
		present, possibly longer.
	</p>

	<QuoteInline>
		<p>
			With its solid rock medium, this art has endured across tens of thousands of years—and across
			the continent’s climatic epochs.
		</p>
	</QuoteInline>

	<p>
		The rock art of Quinkan Country was created long before the invention of writing in the northern
		hemisphere, which is understood to be about 5,500 years ago. The paints, which were made from
		differently shaded ochres and plant dyes mixed with various liquids, including local orchid sap,
		became an indelible part of the rock face, merging with the rock's chemistry.
	</p>

	<p>
		The Stories and the paintings provide clues to this region's Aboriginal history, lived out by
		people who witnessed great ruptures and changes in the landscape, such as rising oceans and huge
		floods. Despite such ordeals, they successfully sustained their societies and their home
		environment for tens of thousands of years.
	</p>
</GenericContent>
<MediaFullWidth
	image={singleImages.sahul_animated}
	width="1200"
	height="1028"
	contain={true}
	alt="Animated map showing the changing coastline of Sahul from today to 21,000 years ago."
	,
	caption={`Changing coastlines of Sahul. Created by Mike Jones, based on data provided by CartoGIS
		Services, Australian National University.`}
/>

<GenericContent>
	<p>
		On the walls of many Cape York rock shelters, successive generations of Aboriginal artists
		painted layer upon layer of the Stories that connected ancestral characters with the present
		times. Over thousands of years, artists devised paintings in particular styles that represented
		the human or transformative animal and Spirit people. Many were overpainted with new images.
	</p>

	<p>
		While artists gathered materials, designed and painted these images, family members sat nearby,
		preparing meals and listening to music, singing, talking, preparing for travels, meetings with
		other groups, dances and ceremonies. Children would have been captivated as stories and
		characters started to take shape on the walls in their large formats, vivid colours and
		patterns.
	</p>

	<p>
		Epic stories provided explanations about how animals and landscapes came to be in their current
		forms. Some levels of Story information, such as the full details of initiation ceremonies, were
		only available at certain life stages, when a child or young adult had earnt the right to gain
		knowledge of them. Some sites and stories were exclusive to girls or boys, men or women.
	</p>
</GenericContent>
<MediaFullWidth
	youTubeId="FjTcA4Ldato"
	caption="Aileen Meldrum and Betty Knowles. Courtesy Western Yalanji Aboriginal Corporation.
	"
	max={true}
/>

<GenericContent>
	<p>
		For hundreds of generations people have marked the places where they lived, gathered, ate,
		played, and loved. Though countless paintings and carvings have been lost, taken, or destroyed,
		thousands of striking images remain in rock shelters and caves across the continent. The Western
		Yalanji custodians care for these sites today, including through a Ranger program.
	</p>

	<p>
		Rock paintings are not a portable or tradable commodity, and are not simply illustrations. They
		are a useful element in a functional knowledge system. Some take the form of maps and diagrams.
		Others tell epic stories about the origin of landscapes, and the principles of everyday life.
	</p>

	<QuoteInline>
		<p>
			The ancestors of yesterday used carvings and paintings on rock to depict people, spirits,
			animals and plants, and the dual and transforming creatures in between.
		</p>
	</QuoteInline>

	<p>
		These paintings are not just art for art’s sake. In a tangible way, paintings on rock were and
		are the Stories, culture, and history of people who have lived on these lands since time
		immemorial. Through their continuing presence, the Stories enacted, made and remade the
		occupants of these places. In so doing, they constantly reinforced wide worlds of connection—the
		complex entanglement of people, Country, and the natural world; of history, culture, science,
		and morality; of the animate and inanimate, human and non-human; and of the present and the deep
		past.
	</p>
</GenericContent>

<TwoColumns id="magnificent">
	<div slot="column1">
		<h2>Magnificent Gallery</h2>
		<p>
			The Magnificent Gallery presents a panoramic history of the Kuku Yulanji people, revealing a
			rich local knowledge of their Country through deep time.
		</p>
	</div>
	<div slot="column2">
		<YalanjiMap />
	</div>
</TwoColumns>

<ImageGrid media={slidesMagnificentGallery} galleryId="magnificentGallery" />

<GenericContent>
	<p>Aboriginal family and clan groups visited this big Story Place over millennia.</p>

	<p>
		The local custodians told their cherished Stories through paintings and carvings on rock-faces.
		The Kuku Yulanji and other local peoples told their epic Stories through yarning, music,
		singing, dancing and re-enactments. Expert storytellers in their melodic languages and in
		English, many continue to share accounts of their deep pasts today.
	</p>

	<p>
		Today this place might remind people of a modern art studio and gallery, but it served many
		functions. The families and clans who stayed here used it for shelter, as a base camp for
		hunting expeditions of small and larger animals, and as a location for preparing yams and
		fruits. While the young children played and watched, adults spent time caring for babies and
		cooking. It was a place to enjoy everyday activities with families. On some occasions, in order
		to conduct activities of a more secret or sacred nature, the audiences were more exclusive.
	</p>

	<p>
		This shelter was a stopping place along longer journeys—part of a constellation of smaller sites
		packed with related, often linked, imagery. Travelling through Country required detailed
		knowledge, much of it contained in vivid story-telling traditions of the beginning times that
		local custodians call Storytime.
	</p>

	<QuoteInline>
		<p>
			In vivid, carefully crafted images and symbols, the colourful walls of the Magnificent Gallery
			speak of a people’s enduring connection to a deeply storied past.
		</p>
	</QuoteInline>

	<p>
		As though mirroring the continuity of past and present, known also as 'Everywhen', artists of
		the day painted over more ancient images. Through layers of painting upon painting, today's
		visitors can recognize the artistic agility and imaginations of people of the more distant past.
		Plants, humans, animals, spirit ancestors were among the many subjects.
	</p>

	<p>
		On its walls, generation after generation of individuals and family groups went about creating
		an enduring spectacle of Story, colour, shape and pattern. Consequently, at this shelter,
		several periods of time can be glimpsed at once on the same rock wall - itself testifying to
		layers of geological time. The opportunity to witness visible signs of successive generations of
		use over a vast time-scale contrasts with much archaeological research, where research into deep
		time requires digging beneath the earth's surface.
	</p>

	<p>
		This place speaks of an interconnected time-zone: an ever-present moment in place-time.
		Indigenous custodians of this place thought about time differently from most of us today, with
		our digital clocks and calendars. They practiced a close study of the sights, sounds, smells and
		seasons of the natural world in which they were, and still are, intimately entwined.
	</p>
</GenericContent>

<MediaFullWidth
	youTubeId="BIoSyyNXhTA"
	caption="Danny O'Shane. Courtesy Western Yalanji Aboriginal Corporation."
	max={true}
/>

<GenericContent>
	<p>
		Artists made some of these paintings 15,000 years ago, during the the Upper Pleistocene, the
		later epoch of the Ice Age. Other art at Magnificent Gallery was created 120 years ago—or even
		more recently.
	</p>

	<QuoteInline>
		<p>
			The hundreds of images that they made expressed their people’s ways of thinking about their
			origins, their history and their present times. When they visited, this cultural site
			reinforced a sense of belonging and a set of principles and values to live by.
		</p>
	</QuoteInline>

	<p>
		With an astonishing variety of motifs, styles and shapes, the Magnificent Gallery says much
		about the creative imaginations and deep knowledge of the Kuku Yulanji ancestors. Over
		centuries, this steadily accumulating collection of imagery must have inspired awe and pride. It
		also demanded respect and wariness, as not all the figures depicted were benign. Many were
		associated with terrifying or grisly Stories.
	</p>
</GenericContent>

<GenericContent id="rockart">
	<h2>Quinkan rock art</h2>

	<p>
		The Magnificent Gallery is one of many. As noted in the <a
			href="https://environment.gov.au/cgi-bin/ahdb/search.pl?mode=place_detail;place_id=106262"
			>Australian Heritage Database</a
		>: "Quinkan Country is distinguished from other regions by the richness, size and density of its
		figurative art and the diversity of Aboriginal paintings and engravings located in its numerous
		shelters, overhangs and on rock surfaces." The area contains some of the largest groups of
		Pleistocene and Holocene art anywhere in the world across a great variety of sites.
	</p>
</GenericContent>

<ImageGrid media={imageGrid} galleryId="rockArtGallery" />

<TwoColumns>
	<div slot="column1">
		<h2>Materials</h2>
		<p>
			Local Aboriginal people favoured ochres such as haematite as pigments, which later became
			preserved by natural processes under a layer of white vitreous silica. When these pigments
			were scientifically tested using carbon dating techniques, the researchers found dead
			micro-organisms trapped on the surfaces, perhaps due to the brushes used.
		</p>

		<p>
			Aboriginal artists around Australia used brushes made from bark or twigs: stringy bark, tree
			orchid, pandanus, palm leaf, and the chewed stems of moghania parviflora and grewia
			retusifolia. Local elder George Musgrave (1921-2006) explained that his people favoured the
			native kapok bush, wallaby grass tied into bundles, and lawyer vine, which was traded around
			the region.
		</p>
	</div>
	<div slot="column2">
		<ImageSingle
			source={singleImages.Ochre}
			width="2400"
			height="2401"
			alt="A flat, dish-shaped rock with a smaller stone that looks to have been used to grind red ochre."
			caption="Ochre at the Magnificent Gallery. Photo: Mike Jones (2021)."
			galleryId="ochre"
			shadow={true}
		/>
	</div>
</TwoColumns>

<GenericContent>
	<p>
		This was verified when scientists found twisted strands of kapok tree and local orchids on the
		surfaces of paintings: the exact same fibres that George had said local artists used for their
		paint brushes. While stencilled hand images revealed no such plant remnants, this is hardly
		surprising. The pigments were sprayed by mouth and to achieve a fine, sprayable consistency,
		they required dilution, not added texture.
	</p>

	<p>
		Colour preference, motifs and styles developed and altered over hundreds of years. To prepare
		most of their paints, artists of this region sourced ochres of various hues, particularly
		haematite and kaolinite along with dyes, fixatives and binders from sappy or resinous plants.
		They ground the ochres with stone utensils, mixing them in rock crevices or on soft sheets of
		paperbark.
	</p>

	<p>
		Local people used the same kinds of materials for body paint, with particular colours and
		designs appropriate for specific clans or individual totemic associations. The meaning and
		significance of designs—colours, cross hatchings and outlines—changed over time. Artists often
		applied rich red-browns and pale yellows. White (kaolinite) ochres were particularly popular for
		the more recent style of paintings.
	</p>
</GenericContent>

<GenericContent>
	<h2>Quinkan Country since European arrival</h2>
	<p>
		The deep history of people living on Cape York Peninsula contrasts dramatically with the more
		recent history of the Europeans in Australia. During the Ice Age or the Pleistocene era,
		northern Australia was joined to New Guinea and the south-east Asian islands were only a short
		boat journey away.
	</p>

	<p>
		In 1606, the Dutch navigator William Janszoon landed on the western side of Cape York Peninsula,
		mapping some hundreds of miles of the coast. The hand-coloured map below, from c.1641, is one of
		the first to show the Australian coastline. The Dutch thought Cape York was still connected to
		New Guinea as part of a single land. We now know that it was joined during the Ice Age. It is
		remarkable how little Europeans knew about Australia as a land mass, or about its people.
	</p>
</GenericContent>

<MediaFullWidth
	image={singleImages.NativePoliceLaura}
	caption="Native Police troopers at Laura River Native Police camp. 1881. PM3691. Queensland Police Museum. Creative Commons Attribution-NonCommercial-ShareAlike."
	alt="This old  black and white photograph shows thirteen people: there are eight adults and one child sitting down, and four peple are standing behind them. There are three bark slab huts behind them, and an open shelter, with trees and scrub in the background."
/>

<GenericContent>
	<p>
		The surviving Aboriginal people passed on the terrible stories of massacres they witnessed to
		future generations. In 1889, under Sub-Inspector Urquart, police detachments and numerous
		volunteers, working in parties of 40 or more, carried out murderous attacks. Advanced rifle
		technologies made these even more devastating than the colonising violence of south-eastern
		Australia. For example, after Aboriginal men killed a pastoralist called Mackenzie—likely in an
		enforcement of their own Law—Aboriginal people were hunted down. Not uncommonly, white
		pastoralists spoke of "exterminating Aborigines." A warlike situation ensued for many years.
	</p>

	<p>
		Elder Willy Long recalled how his parents barely managed to survived an attack on his family,
		the Olkola people. During an attack Harry Mole was captured as a child. He was later deployed as
		a police tracker. Caesar Lee Cheu's family was constantly hunted by police until they agreed to
		'come in' to work on a pastoral station.
	</p>

	<QuoteInline>
		<p>
			As with many themes from their history, such subjects are depicted in the rock art. As part of
			resistance efforts to avenge or weaken their police attackers, Aboriginal artists created
			paintings of police across the region.
		</p>
	</QuoteInline>

	<p>
		They painted them in a traditional style, with stylized variations to suggest police clothing or
		uniforms. They were usually depicted upside down or lying prone as if dying, and often with
		weapons nearby. Archaeologist Noelene Cole describes the art depicting native police in her
		article '<a
			href="https://archaeologyonthefrontierdotcom.files.wordpress.com/2016/04/cole-2010-painting-the-police.pdf"
			>Painting the Police</a
		>'.
	</p>
</GenericContent>

<TwoColumns>
	<div slot="column1">
		<p>
			The terrible suffering of Aboriginal people, especially the extent of the violence, attracted
			attention from humanitarians in Britain and around Australia.
		</p>

		<p>
			Consequently, the Queensland government introduced new legislation in 1897, the Aboriginals
			Protection and Restriction of the Sale of Opium Act. Ostensibly introduced to 'protect' people
			from extreme violence, labour and sexual exploitation, drug addiction and disease, it actually
			served as a powerful means of controlling and removing Aboriginal people from their Country.
			This further disrupted their autonomy, language and culture.
		</p>

		<p>
			Many Aboriginal people were moved to distant government or mission-run reserves, where they
			were placed under surveillance and control, and prohibited from returning to their own
			Country.
		</p>

		<p>
			Government policy prevented them from using their own languages and conducting ceremonies.
			Aspects of tribal authority and Law were broken down.
		</p>

		<p>
			Other Aboriginal people maintained links with their Country through working in a range of
			jobs. Ranger Danny Lee Cheu reflects on his life story and travels as a Ringer and working in
			the cattle industry, mining and crocodile shooting through his Country.
		</p>
	</div>

	<div slot="column2">
		<ImageSingle
			source={singleImages.AboriginalProtectionOpiumAct}
			width="484"
			height="822"
			alt="A scan of the Aboriginals Protection and Restriction of the Sale of Opium Act 1897. The paper is slightly yellowed, and has a red wax seal and is bound with a green ribbon."
			caption={`Aboriginals Protection and Restriction of the Sale of Opium Act 1897 (Qld). <a
					href="https://www.foundingdocs.gov.au/item-sdid-54.html"
					>https://www.foundingdocs.gov.au/item-sdid-54.html</a
				>`}
			galleryId="AboriginalProtectionOpiumAct"
		/>
	</div>
</TwoColumns>

<MediaFullWidth youTubeId="-uSSUNeida8" max={true} />

<Collapsible name="percyWesternYalanji" label="Percy Tresize and Dick Roughsey">
	<p>
		Given the trauma of frontier violence, continuing oppression, and threats of punishment, it is
		hardly surprising that they were initially wary when approached by artist, pilot, and explorer
		Percy Trezise. They were still subject to many restrictions on their human rights, having to
		live under the Queensland Aborigines Act. However, Lardil man Dick Roughsey, also an artist and
		collaborator of Trezise, spent time negotiating with the local custodians, and he gradually won
		their trust.
	</p>

	<p>
		Some elders agreed to share their knowledge and to revisit rock shelter sites in Country with
		Roughsey and Trezise. A collection of the resulting recordings is held in the <a
			href="https://iats.ent.sirsidynix.net.au/client/en_AU/external/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:268461/ada?qu=TREZISE_P06"
			>Australian Institute of Aboriginal and Torres Strait Islander Studies</a
		> in Canberra.
	</p>

	<p>
		Against all odds, these Aboriginal knowledge holders had managed to stay in touch with their
		former bush lifestyles and to retain their languages.
	</p>

	<p>
		The novelist Xavier Herbert, whose works highlighted racist and gendered violence against
		Aboriginal people, also accompanied them on numerous trips.
	</p>

	<p>
		Unfortunately, the white Australian recorders, being male themselves, were only entitled to gain
		stories from male knowledge holders, leaving women's stories unrecorded. But the senior
		Aboriginal men who agreed to record their knowledge knew the vital importance of teaching
		children about their culture and their Country through Stories.
	</p>

	<TwoColumns>
		<div>
			<p>
				Roughsey and Trezise gathered legends from elders and, during their frequent stays at
				Jowalbinna, they painted their own interpretations. Their work conveyed the motifs,
				stylistic aspects and general ideas of the rock art of Quinkan Country to new audiences.
				Best known for their jointly authored children's books of Aboriginal legends, they also held
				art exhibitions at a number of western-style galleries, including in Cairns. Roughsey was
				later awarded an OBE (Order of the British Empire). Adapting what they learnt from local
				elders, their children's books featured Story figures such as the frightening giant,
				Turramulli, who is associated with dark thunder clouds.
			</p>
		</div>
		<div>
			<figure>
				<img src={singleImages.TurramulliThumbnail} alt="" />
				<figcaption>
					Aboriginals Protection and Restriction of the Sale of Opium Act 1897 (Qld). <a
						href="https://www.foundingdocs.gov.au/item-sdid-54.html"
						>https://www.foundingdocs.gov.au/item-sdid-54.html</a
					>
				</figcaption>
			</figure>
		</div>
	</TwoColumns>
</Collapsible>

<GenericContent>
	<p>
		Quinkan Country has been listed on the National Heritage Register. Today, the Western Yalanji
		Aboriginal Corporation plays a crucial role in keeping the Stories alive and the Country strong,
		including through the use of digital technologies. Glenis Grogan talks about the prospects of
		digital platforms and their relevance for the future of the Yalanji people and knowledge of
		Country.
	</p>
</GenericContent>

<MediaFullWidth
	youTubeId="E9EhS-1RfQQ"
	caption="Glenis Grogan. Courtesy Western Yalanji Aboriginal Corporation."
	max={true}
/>

<Collapsible name="referencesQuinkan" label="References and further reading">
	<ul>
		<li>
			Beaglehole, J.C., ed. (1968). <em
				>The Journals of Captain James Cook on His Voyages of Discovery, vol. I:The Voyage of the
				Endeavour 1768-1771</em
			>. Cambridge: Cambridge University Press.
		</li>

		<li>
			David, Bruno, and Harry Lourandos. “37,000 Years and More in Tropical Australia: Investigating
			Long-Term Archaeological Trends in Cape York Peninsula.” <em
				>Proceedings of the Prehistoric Society 63</em
			> (ed 1997): 1-23. https://doi.org/10.1017/S0079497X00002358.
		</li>

		<li>
			Forsyth, J.W., 1984. “Janssen, Willem (?-?)”, In <em>Australian Dictionary of Biography</em>.
			Canberra: National Centre of Biography, Australian National University. Accessed 10 November
			2021. https://adb.anu.edu.au/biography/janssen-willem-2270/text2911.
		</li>

		<li>
			George, Tommy, and Tom Popp. Quinkan Rock Art: <em>Images on Rock from the Laura Area</em>.
			Laura, Qld: Ang-Gnarra Aboriginal Corporation, 1996.
		</li>

		<li>
			Kirkman, Noreen. 1984. “The Palmer Goldfield, 1873-1883”, Honours Thesis, James Cook
			University of North Queensland. Accessed November 7 2021.
			https://researchonline.jcu.edu.au/57117/.
		</li>

		<li>
			Memmott, Paul. 2012. “Roughsey, Dick (Goobalathaldin) (1920-1985).” In <em
				>Australian Dictionary of Biography</em
			>. Canberra: National Centre of Biography, Australian National University. Accessed November
			7, 2021. https://adb.anu.edu.au/biography/roughsey-dick-goobalathaldin-14193.
		</li>

		<li>
			Morwood, M. J., and D. R. Hobbs, eds. 1995. <em
				>Quinkan Prehistory: The Archaeology of Aboriginal Art in S.E. Cape York Peninsula</em
			>, Australia. Tempus / St. Lucia, Qld, v. 3. St. Lucia, Qld: Anthropology Museum, University
			of Queensland.
		</li>

		<li>
			“National Heritage List - Quinkan Country,” 2018. Accessed 7 November 2021.
			https://environment.gov.au/cgi-bin/ahdb/search.pl?mode=place_detail;place_id=106262.
		</li>

		<li>
			Queensland Art Gallery, ed. <em
				>Story Place: Indigenous Art of Cape York and the Rainforest</em
			>. South Brisbane, Qld: Queensland Art Gallery, 2003.
		</li>

		<li>
			Trezise, Percy. 1969. <em
				>Quinkan Country: Adventures in Search of Aboriginal Cave Paintings</em
			> in Cape York. Sydney: Reed.
		</li>

		<li>Trezise, Percy and Dick Roughsey. 1978. The Quinkins. Sydney: Collins.</li>
	</ul>
</Collapsible>

<Credits
	credits={[
		{ title: 'Cultural Adviser and Permissions', names: 'Brad Grogan' },
		{
			title: 'Knowledge Holders',
			names:
				"Charlie Lee Cheu, Danny Lee Cheu, Aileen Meldrum, Betty Knowles, Danny O'Shane, Glenis Grogan"
		},
		{ title: 'Written by', names: 'Ann McGrath' },
		{ title: 'Digital story created by', names: 'Mike Jones' },
		{ title: 'Research Assistant', names: 'Bethany Phillips-Peddlesden' }
	]}
>
	<p>Thank you to Brad Grogan and the Western Yalanji Aboriginal Corporation.</p>
</Credits>
<Citations
	citations={[
		{ insert: 'this page', authors: 'Ann McGrath and Mike Jones (2023)' },
		{
			insert: 'Charlie Lee Cheu',
			authors: 'Charlie Lee Cheu in Ann McGrath and Mike Jones (2023)'
		},
		{ insert: 'Danny Lee Cheu', authors: 'Danny Lee Cheu in Ann McGrath and Mike Jones (2023)' },
		{ insert: "Danny O'Shane", authors: "Danny O'Shane in Ann McGrath and Mike Jones (2023)" },
		{ insert: 'Glenis Grogan', authors: 'Glenis Grogan in Ann McGrath and Mike Jones (2023)' },
		{ insert: 'Aileen Meldrum', authors: 'Aileen Meldrum in Ann McGrath and Mike Jones (2023)' },
		{ insert: 'Betty Knowles', authors: 'Betty Knowles in Ann McGrath and Mike Jones (2023)' }
	]}
	location={$page.url.href}
	page={pageTitle}
/>

<style>
</style>

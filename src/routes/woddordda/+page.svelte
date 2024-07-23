<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { generateSingleMedia, generateSubfolderMedia } from '$lib/imagePaths';
	import { switcher } from '../../stores/sectionSwitcherStore';
	import { onMount } from 'svelte';

	const switcherLinks = [
		{ title: 'Top', ref: '#header' },
		{ title: 'Woddordda Country', ref: '#country' },
		{ title: 'Short films', ref: '#films' }
	];

	import {
		AudioBlock,
		Bios,
		Header,
		GenericContent,
		Citations,
		Credits,
		Collapsible,
		ImageGrid,
		ImageSingle,
		QuoteLarge,
		QuoteInline,
		MediaFullWidth,
		Intro,
		SideScroller,
		Warning,
		WoddorddaMap
	} from '$lib';

	const singleImageFilenames = [
		'Yorna_Woolagoodja_repaints_Namardarlee_2002.jpg',
		'Janet__Oobagooma_B_W_Kevin_Shaw.jpg',
		'Leah_Umbagai_Wudoo_Tim_Mummery_10072022.jpg',
		'Mudmap_01.jpg',
		'Namarali_Olympics02.jpg',
		'RaftPoint_s_lachman.jpg',
		'Yorna_post_painting_Namarali_2002.jpg',
		'langgi_S_Lachman.jpg',
		'namarali_langgi.jpg',
		'woddordda_poster.jpg',
		'woddordda_header.jpg'
	];

	const makingOfSlideshowFilenames = [
		'01MakingOf_woddordda.jpg',
		'02MakingOf_woddordda.jpg',
		'03MakingOf_woddordda.jpg',
		'04MakingOf_woddordda.jpg',
		'05MakingOf_woddordda.jpg',
		'06MakingOf_woddordda.jpg',
		'07MakingOf_woddordda.jpg'
	];

	const pageTitle = 'Woddordda: Ngamardalee and Wudoo';

	const leahIntro = `${base}/stories/woddordda/audio/Leah-Umbagai-intro-clan-tribe-mowanjum-edit.mp3`;
	const leahSymbols = `${base}/stories/woddordda/audio/Leah-Umbagai-map-language-symbols.mp3`;
	const leahFlood = `${base}/stories/woddordda/audio/Leah-Umbagai_Flood_sound-edit.mp3`;
	const background = `${base}/stories/woddordda/videos/Woddordda_titleBackground.mp4`;

	const folderPath = `/stories/woddordda/images/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);
	const makingImages = generateSubfolderMedia(
		`${folderPath}making_of_slideshow`,
		makingOfSlideshowFilenames
	);

	const slideshowOne = [
		{
			type: 'image',
			url: makingImages[0],
			width: '2016',
			height: '1612',
			caption:
				'Cecilia Umbagai with baby Avashay Stewart, Yorna Woolagoodja and Kallem Mungulu. Photo: Sahyma Lachman 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[1],
			width: '1280',
			height: '770',
			caption:
				'Shontae Charles, Yorna Woolagoodja holding baby Martena and Kallem Mungulu at Mangajaddaa performing Wudoo. Photo: Sahyma Lachman 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[2],
			width: '4032',
			height: '3024',
			caption:
				'Janet Oobagooma performing Wudoo for baby Jai with his father Derek Oobagooma, at Manggajaddaa. Photo: Ann McGrath 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[3],
			width: '2016',
			height: '1512',
			caption:
				'Woddordda Wudoo recording camp, catering and camp organiser Peter Croll with children. Photo: Sahyma Lachman 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[4],
			width: '4032',
			height: '2268',
			caption:
				'Training workshop in July 2022 to curate the Wudoo/Wurdu website. Shontae Charles (seated with back to camera), Sherika Duckhole, Maitland Ngerdu, Leah Umbagai, Brentisha Macale (standing), Mike Jones (ANU). Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[5],
			width: '4032',
			height: '2268',
			caption:
				'Training workshop in July 2022 to curate the Wudoo/Wurdu website. Cecilia Umbagai (seated facing camera), Shontae Charles, Lotte Waters (General Manager, Mowanjum Art Centre), Sherika Nulgit, Maitland Ngerdu, Leah Umbagai (face obscured), Brentisha Macale (standing), Kirsty Burgu, Mike Jones (ANU). Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			type: 'image',
			url: makingImages[6],
			width: '2048',
			height: '1526',
			caption:
				'Yorna Woolagoodja reviewing the website draft, with Mike Jones (left) and Mary Anne Jebb. Photo: Sahyma Lachman 2022.',
			link: ''
		}
	];

	const bios = [
		{
			heading:
				'Yorna Donny Woolagoodja, Woddordda, author, artist and senior custodian of Ngamardalee',
			image: {
				source: singleImages.Yorna_post_painting_Namarali_2002,
				caption:
					'Yorna Woolagoodja after painting Ngamardalee at Kandirrim. Photo: Tim Mummery, 2022.',
				alt: 'Yorna Donny Wooldagoodja: he is smiling, he has red ochre in his hair, and there are some flecks of white paint on his face and shoulders.'
			}
		},
		{
			heading: 'Eewaambood Janet Oobagooma, Woddordda elder, language and cultural adviser',
			image: {
				source: singleImages.Janet__Oobagooma_B_W_Kevin_Shaw,
				caption: 'Photo: Kevin Shaw.',
				alt: 'Eewaambood Janet Oobagooma. Janet is smiling, and looking away from the camera.'
			}
		},
		{
			heading: 'Leah Umbagai, Woddordda woman, artist, community researcher and language adviser',
			image: {
				source: singleImages.Leah_Umbagai_Wudoo_Tim_Mummery_10072022,
				caption: 'Photo: Tim Mummery, 2022.',
				alt: 'Leah Umbagai in front of a large tree trunk; she is smiling.'
			}
		}
	];

	const sideScrollerOne = [
		{
			markup: [
				`<p>
		Wandjina paintings at caves and rock shelters are living expressions of the ongoing process of
		creation and regeneration for Wandjina Wunggudd peoples of the west Kimberley. Woddordda
		language people are part of the Wandjina Wunggudd cultural community. Their stories recount and
		manifest the creation of sea, land, rivers and islands on the west Kimberley coast. Cave
		paintings, rock formations, hills, rivers and mountains are evidence of the powerful actions of
		Wandjina spirit ancestors who worked with the Wunggudd snake spirit during Lailai, or the
		creation era, to make everything.
	</p>

	<p>
		The landscape is a culture-scape inhabited by people who keep their Wandjina ancestors fresh,
		carry out their laws, sing their songs, speak and listen to them, visit and repaint them. In
		return, life is good and the Country plentiful.
	</p>

	<p>
		People's relationships with Wandjina ancestors continue to resonate in contemporary life. For
		example, Yorna Woolagoodja gave his permission for a giant Ngamardalee to emerge from the ground
		as the Awakening Spirit for the 2000 Sydney Olympics. This 35 metre high Ngamardalee is now part
		of the National Museum of Australia's collection in Canberra.
	</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.Namarali_Olympics02,
					width: '1147',
					height: '838',
					caption:
						'Ngamardalee at the Sydney Olympics, 2002. Photo: supplied by Tim Mummery/Yorna Woolagoodja.',
					alt: "Ngarmadalee at the Sydney Olympics in 2002. It is a large structure of Ngarmadalee's white face, with two large dark eyes and headdress. In the background are a group of people holding lights.",
					galleryId: 'namarali'
				}
			}
		},
		{
			markup: [
				`	<p>Yorna attended the Olympics and later commented:</p>`,
				{
					component: QuoteInline,
					props: {
						credit: 'Yorna Woolagoodja 2005.'
					},
					children: `<p>
			When he came up in the opening ceremony it made that emotion come out, like when you lose your own relation… His spirit came to me in the opening ceremony …That's why I decided to go back and paint him, because I'd showed him to the world. He drew me back to the cave.</p>`
				},
				`<p>
		Ngamardalee is a powerful Wandjina, the source of significant laws and customs for Woddordda
		people. When Elders warm their hands with smoke and fire, and touch and talk to babies during
		the Wudoo smoking ceremony, they are transmitting Ngamardalee's words, laws and purpose.</p>`,
				{
					component: QuoteInline,
					props: {
						credit: 'Yorna Woolagoodja 2020.'
					},
					children: `<p>
			It's not about dates: it started from Lailai. When there was no beginning of time, it was when
			the world started. Our evidence is all these images. … One sacred man would be given a dream
			about what happened and they would tell future generations about how to live. … The images
			teach us what the land provides us: it's our histories.</p>`
				}
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.Yorna_Woolagoodja_repaints_Namardarlee_2002,
					width: '1400',
					height: '2100',
					caption: 'Yorna Woolagoodja refreshing Ngamardarlee in 2002. Photo: Sahyma Lachman.',
					alt: "Yorna Woolagoodja is using his hands and paint to reach up and 'refresh' a rock painting of Ngarmadalee on an overhanging rock shelter.",
					galleryId: 'repaints'
				}
			}
		}
	];

	const sideScrollerTwo = [
		{
			markup: [
				`<p>
	Stories of major land forming events continue to be told by Wandjina Wunggudd peoples and those
	stories are carried by new generations. The contemporary actions, songs and events of Wandjina
	people and their Country confirm and re-enact the events of Lalai when the land was soft and
	taking the shape we experience today. The history of landscape formation and of the environment
	resides in people who are responsible for their Country.
</p>

<p>
	Doombee and the Flood is a multifaceted story of epic proportions describing the actions of
	Wandjinas creating Country, laws and customs. At Wanaliddi, a rock art site in central north
	Kimberley (Ngarinyin language Country), powerful Wandjinas punished humans for being cruel and
	disrespecting the owl Doombee. The brolga danced and softened the ground, the Barramundi used
	its forehead to push from underneath and also softened the ground. Turtles, lizards and other
	animals joined in to teach the people a lesson. The Wandjinas brought a flood of such
	proportions that whole populations were relocated to different parts of the Kimberley, founding
	the landscapes and languages of today.
</p>

<p>
	Ngamardalee journeyed from Ngarinyin Country during the time of the flood to the coast and
	eventually battled with other Wandjinas there for dominance.
</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.langgi_S_Lachman,
					width: '1400',
					height: '933',
					caption:
						'Langgee, the rocks that are evidence of the Wandjina battle that killed Ngamardalee. Photo: Sahyma Lachman.',
					alt: 'Dark vertical rocks of different shapes and sizes, standing upright in sand along a beach. In the background is a small reddish cliff with a rise covered in trees on the top, and on the other side of the rise is another sandy beach, more rocks and more trees.',
					galleryId: 'langii'
				}
			}
		},
		{
			markup: [
				`	<p>
		Ngamardalee was killed, but was transformed in his burial into the rock art painting on the
		ceiling of the rock shelter Kandirrim.
	</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.namarali_langgi,
					width: '533',
					height: '426',
					caption:
						'Ngamardalee on the ceiling of Kandirrim, his rock shelter on the Kimberley coast. Photo: Mowanjum Aborginal Art & Culture Centre, courtesy WA Museum, Ian Crawford Collection.',
					alt: 'Ngarmadalee on the ceiling of his rock shelter. It shows his whole figure, from his feet to his headress around his head, that is painted white and is adorned with red dots and lines.',
					galleryId: 'namaraliLangii'
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

<Warning>
	<p>
		Janet Oobagooma and Yorna Woolagoodja have passed away since the making of this website and the
		short films it includes. Their images, voices and names are reproduced here in recognition of
		their tireless efforts to share their knowledge for future generations.
	</p>
</Warning>

<Header
	image={singleImages.woddordda_header}
	name="woddordda"
	alt="The coastline taken as seen from the sea; the water is calm and a depp blue, and the rocky coast line dotted with green trees. "
	heading="Woddordda"
	subheading="Ngamardalee and Wudoo"
	id="header"
	gradientColor="#406467"
/>

<Intro>
	<h2>Community co-curators</h2>

	<p>
		This is a digital story about Woddordda people and their Country, the Wandjina ancestor
		Ngamardalee, and the important Wudoo smoking ceremony for babies. It includes a handpainted map
		by Leah Umbagai showing key places along the coast where Woddordda people come from, and two
		short films about Wudoo.
	</p>
</Intro>

<Bios content={bios} />

<MediaFullWidth video={background} poster={singleImages.woddordda_poster} alt="" />

<QuoteLarge credit="Yorna Woolagoodja, 2022">
	<p>We live the stories from the rock shelter paintings every day.</p>
</QuoteLarge>

<SideScroller content={sideScrollerOne} />

<GenericContent>
	<h2>When the sea rose</h2>

	<p>
		<strong>Listen to</strong> Leah Umbagai, a Woddordda person from the northwest Kimberley region of
		Western Australia:
	</p>

	<AudioBlock source={leahIntro} summary="Audio transcript">
		<p>
			My name is Leah Umbagai. I'm a Woddordda person from the northwest Kimberley region of Western
			Australia. My bush name is Rinjeewalla I'm part of Dewai, Ardbalanggi, Larinyum. They are the
			three areas that I have relations from my clans and my totem through the Woddordda tribe. … I
			live in Mowanjum which is in Nyikina Country and Warwar area which is near Derby. Mowanjum is
			a place where the three tribes got together. They brought them in from the outside, from our
			Country. So we got Wandjina Wunggudd people. We got Woddordda, Ngarinyin and Wunambal people.
			And I am from the Woddordda tribe.
		</p>
	</AudioBlock>

	<p>
		She has painted a map of the coast where Woddordda people come from, using different symbols to
		identify places of significance. The pale blue area along the coastline indicates an area that
		was land before the sea rose.
	</p>

	<p>
		<strong>Listen to</strong> Leah Umbagai explain more about her map of Woddordda Country, including
		her use of animals and Woddordda placenames.
	</p>

	<AudioBlock source={leahSymbols} summary="Audio transcript">
		<p>
			This painting that I've done is part of a Wudoo project that we've done through the three
			tribes. From the Woddordda side I've drawn a map of the coast on which we come from. And this
			is the whole area of Dambeemangardee Country. So Woddordda area. As you can see, that's
			Ngamardalee, the totem Wandjina for Woddordda. I've used different symbols to identify places
			of significance now. But there's a whole lot more that this story comes from and the Wandjina
			belong to. The only reason why I have painted it in this particular way I thought the
			importance of the animals that's associated with the areas. But I didn't want to show the
			English names on there because we have our own language names that's associated with the area.
			And we would like to encourage and use it more often in any mapping that we do now. I think
			it's important that we use our own language in the areas of our Country.
		</p>
	</AudioBlock>

	<ImageSingle
		source={singleImages.Mudmap_01}
		width="1400"
		height="1402"
		alt="Map showing the changes to the coastline of Woddordda Country, and includes symbols painted by Leah Umbagai, such as fireplace with red flames and a hand outstretched over the fire; the head and face of a baby; as well as animals, including a brolga, a kangaroo, a quoll, a snake."
		caption="Map of Woddordda Country by Leah Umbagai."
		galleryId="Mudmap_01"
	/>

	<p><a href="#interactive-map">» View the interactive map </a></p>
</GenericContent>

<SideScroller content={sideScrollerTwo} />

<GenericContent>
	<h2>The woman who poked the eye of the sea</h2>

	<p>
		At a place on the coast there is a painting that tells of the story of the woman who poked the
		eye of the sea and the water rose up and took a lot of people from the islands. The woman had
		taken revenge on people who took her son hunting and did not return him. Leah Umbagai explained
		that this story could describe a tsunami event but it is also a living story that explains the
		actions of the Wandjinas.
	</p>

	<p>
		It is a history told by generations that is carried by the new generations who inherit the place
		names and the responsibility to remember the associated stories of creation.
	</p>

	<Collapsible
		name="collapsibleJanet"
		label="Read Janet Oobagooma recounting the story of Ngumbree"
	>
		<p>
			There was a Wunambal Woman who was waiting for when the tide will come; she wanted to go back
			home. She waited and waited, and she said, "Oh well, I will make it come." So she got that
			'island' [Raft Point].
		</p>
		<p>
			It was the stick, that sharp stick — jaddee jaddee — she used it to poke the eye of the sea.
			And she poked it and it grew up, up, up. It was there at that round hill Jimiddijd [Steep
			Island] where she poked it. And the water spread all over the country. You see the lines on
			cliffs [the folds in strata called anticlines by geologists that are seen throughout the
			coastal landscape]. That is how high it went and it ended up in the desert with those sand
			dunes.
		</p>
		<p>
			They are proof of the flood from this Wandjina Woman when she made the tide come. Her name was
			Ngumbree, that Woman. That is why the hill is called Ngumbree.
		</p>
		<p>
			Janet Oobagooma, in
			<em>
				Barddabardda Wodjenangorddee: we're telling all of you: the creation, history and people of
				Dambeemangaddee country
			</em>
			, Dambimangari Aboriginal Corporation, 2017 (
			<a href="https://nla.gov.au/nla.cat-vn7330253)"> https://nla.gov.au/nla.cat-vn7330253 </a>
			).
		</p>
	</Collapsible>

	<ImageSingle
		source={singleImages.RaftPoint_s_lachman}
		width="1400"
		height="673"
		alt="Rock art painted on a vertical rock wall and on a horizontal, overhanging rock shelter. The figures include fish and two figures with human-like faces. The outlines of the paintings are in a dark red colour."
		caption="Raft Point Rock Art. A gallery of rock art on the coast that is associated with the story of
	the woman who poked the eye of the sea. Photo: Sahyma Lachman."
		galleryId="RaftPoint_s_lachman"
	/>

	<p>
		The story of the woman who poked the eye of the sea relates to a painting at Ngumbree, which is
		also a person’s name. These special names come from the Country, and the Wandjinas that made the
		Country. With its name, the child spirit comes to the parent. They are not given by parents or
		separate from the land and its history.
	</p>
</GenericContent>

<QuoteLarge credit="Leah Umbagai 2022.">
	<p>
		That's why it is important to tell the story to children especially when they're growing up. And
		when they're older you can trace back generation to generation by that one particular person and
		the name. So you carry an old person's name you got a lot of history comes with it.
	</p>
</QuoteLarge>

<GenericContent>
	<p><strong>Listen to</strong> Leah Umbagai speak about the significance of the flood.</p>

	<AudioBlock source={leahFlood} summary="Audio transcript">
		<p>
			How we live now we believe it's associated with the flood. Every year now when we have
			festival we sing the Wanaliddi Wanaliddi wah yamul yamul. As they sing they stamping the
			ground but they telling them, it's like they stamp to bring the spirit up explaining that the
			story is about the flood and how it began. And the flood it goes everywhere. It goes to every
			island. So we as Woddordda people we use the woman that poked the eye of the sea—as the water
			that risen … a lot of the stories are continuation of how you treat Country and the practices
			of the practices we do as people of the areas. It has to be always happening. It can't stop.
			And it is the same Law, it's the same custom, we can't change anything. Only the Wandjina is
			the one who can change it.
		</p>
	</AudioBlock>
</GenericContent>

<GenericContent id="country">
	<h2>Woddordda Country</h2>
	<p>
		In addition to named places, each location has a symbol. Wandjina spirit ancestors who burst out
		of the Country during Lailai went back into the earth and left their shadows on the walls of
		caves and rock shelters throughout the north Kimberley. Animals active during this era of
		creation are also on rock walls and their activities are apparent in the Country in springs,
		rock formations, trees and water holes.
	</p>
</GenericContent>

<QuoteLarge credit="Leah Umbagai, 2022.">
	<p>I think it's important that we use our own language in the areas of our Country.</p>
</QuoteLarge>

<GenericContent>
	<p>
		On the map they symbolize and represent creation figures that are fundamentally linked to the
		creation and to people today.
	</p>

	<p>
		People who belong to the Country speak of the animals and plants presented by Leah Umbagai as
		'family.' The symbols also represent smaller family groupings of traditional owners of Dambeem,
		or clan lands.
	</p>
</GenericContent>

<div id="interactive-map" class="container">
	<WoddorddaMap />
</div>

<GenericContent>
	<h2 id="films">Watch short films</h2>

	<h3>Woddordda Wudoo (8 mins)</h3>

	<p>
		This short film records the Wudoo baby smoking ceremony conducted by the late Yorna Woolagoodja
		and the late Janet Oobagooma in 2022. This intimate and significant ceremony is performed by
		senior men and women for all babies to carry them into the future by following the words of
		their Wandjina creation ancestors. Leah Umbagai explains the deeper meaning of Wudoo as well as
		the English translation of the process as it is spoken by Janet Oobagooma in Woddordda language.
		The film provides an audio-visual record of the ceremony and shares the process and meaning with
		everyone.
	</p>
</GenericContent>

<MediaFullWidth youTubeId="4ssgk3TxATI" max={true} />

<GenericContent id="films">
	<h3>Ngamardalee Wudoo (5 mins, 40 sec)</h3>

	<p>
		This film shows Yorna Woolagoodja’s father Sam Woolagoodja at the Wandjina ancestor rock art
		site Ngamardarlee (Namarali). Sam explains to his son Stanley that the Wudoo smoking ceremony
		for babies was created by Ngamardarlee for all his people to follow his Laws. Yorna Woolagoodja
		explains the story of Ngamardalee and his acts and adventures of creation that are evident in
		places on the coast.
	</p>
</GenericContent>

<MediaFullWidth vimeoId="770334576?h=47a0921e90&amp" />

<Collapsible name="collapsibleMaking" label="Making Woddordda Wudoo">
	<p>
		Woddordda Wudoo was developed over 18 months as a collaboration between Mowanjum Aboriginal Art
		& Culture Centre and the Research Centre for Deep History (Australian National University), led
		by Professor Ann McGrath.
	</p>
	<p>
		The collaboration began in 2021 after Yorna Woolagoodja told Mary Anne Jebb that the Mowanjum
		Art Centre permanent exhibitions lacked a story about the important Wudoo ceremony for babies.
		Ann McGrath suggested that the Wudoo recording and repatriation project might become part of the
		ANU project. The aim was to create recordings and a website with the dual purpose of making
		something for the community to archive, for the Centre to display and for the website hosted by
		the ANU.
	</p>
	<p>
		The first visits to Derby and meetings were undertaken by the Mowanjum project lead researcher,
		historian Mary Anne Jebb to introduce the project aims and possibilities for collaboration and
		identify who would be involved. Critical roles were identified: Community Researcher and
		Language Adviser and Elders.
	</p>
	<p>
		Key elements of the collaborative relationship were that the community would record their
		cultural knowledge and histories, own their recordings and produce something of high quality
		that was co-curated by their Community Researcher, reviewed by Elders, and shared with their
		permission. Added benefits were the University project budget supporting recording on Country,
		fees for participants, a professional cameraperson, IT resources for website development and a
		training workshop to co-curate the website. The focus story for recording was the Wudoo smoking
		ceremony for babies and its connection to the Wandjina creation figure Ngamardarlee. Yorna
		Woolagoodja also wanted to utilise film materials made in the early 1970s by Michael Edols, with
		Yorna's father Sam Woolagoodja. The raw materials were archived at AIATSIS and Yorna had been
		trying to access copies for use in the community since 2004. He wanted to recreate the Wudoo
		stories in the film Lailai dreaming with a new generation of children, undertaking their
		ceremony and making a record that could be used in the future to encourage continuing pride in
		culture and language, as well as acknowledging the importance of Wudoo. Yorna mentioned to Mary
		Anne Jebb that he wanted to film on the same locations as his father on the coastal Woddordda
		Country to strengthen connections to Country by revisiting the recording locations and to
		reclaim the film footage for the community.
	</p>
	<p>
		Yorna's granddaughter Leah Umbagai took on the role of Woddordda Community Researcher and
		Language Adviser. She provided advice on a wide range of elements of recording and creating the
		films and the website content, as well as the website structure. She was also the artist who
		created a map of places and associated symbols as well as Woddordda names for places. Like her
		grandfather, she takes every opportunity to create educational resources for her own community's
		use and to share with a broader community. She also works to reclaim control of the
		representation of Woddordda language and culture. As language adviser she also provided the
		spelling of Woddordda words. The spelling system she created includes letters intended to help
		young people and English speakers to say the Woddordda words properly. 'For example the spelling
		Wororra, commonly used, does not lead people to pronounce the 'rd' sound that is integral to
		Woddordda, while Ngamardalee has often been written as Namarali - again missing the 'rd' and the
		'ng' beginning sound.
	</p>
	<p>
		Due to Yorna Woolagoodja's deteriorating health, it was considered too risky to record on
		Country, given the need to use helicopters and boats, so the Woddordda Wudoo ceremony was
		conducted near Derby at Manggajaddaa a place where Woddordda ancestors had also performed and
		shared their culture. Film and sound from the 1970s and from a recent film by Tim Mummery with
		Yorna Woolagoodja, 'Namarali', provided Woddordda Country scenes, and sound from Yorna spoken in
		2002 while he was on Country.
	</p>
	<p>
		High quality film and sound recording was made with individuals, an edited film of the Wudoo
		ceremony and one using historical footage for the Ngamardalee story. Copies of films, sound and
		photographs were returned to the community. Individuals directed where their material would be
		archived. In addition, the project facilitated the return to Yorna Woolagoodja of copies of the
		Michael Edols' film and sound collection and the Michael Silverstein 1974 sound collection held
		at AIATSIS.
	</p>
	<p>
		The following people participated: Allison Burgu, Kirsty Burgu, Shontae Charles and baby
		Martena, Christina Greene, Kallem Mungulu and baby Celeste, Karla Mungulu, Mildred Mungulu,
		Lydia Ningamarra, Eewaambood Janet Oobagooma, Derek Tiddles Oobagooma and baby Jai, Dakota
		Stewart, Cecilia Umbagai and baby Avashay Stewart, Ashleah Umbagai, Cheyne Umbagai, Elkin
		Umbagai, Leah Umbagai, Zani Umbagai, Yorna Donny Woolagoodja.
	</p>
	<ImageGrid media={slideshowOne} galleryId="slides" />
</Collapsible>

<Collapsible name="referencesWoddorda" label="References and further reading">
	<ul>
		<li>
			Blundell, V. and D. Woolagoodja. 2005.
			<em> Keeping the Wanjinas Fresh: Sam Woolagoodja and the enduring power of Lalai </em>
			. Fremantle: Fremantle Arts Centre Press.
		</li>

		<li>
			Crawford, I.M. 1968.
			<em> The Art of the Wandjina: Aboriginal Cave Paintings in Kimberley, Western Australia </em>
			. Melbourne: Oxford University Press.
		</li>

		<li>
			Edols, Michael, with Sam Woolagoodja. 1975.
			<em>Lailai Dreamtime</em>. North Sydney: Aboriginal Arts Board and the Australia Council.
		</li>

		<li>
			Jebb, Mary Anne, ed. 2008.
			<em>Mowanjum: 50 Years Community History</em>. Derby: Mowanjum Aboriginal Community and
			Mowanjum Artists Spirit of the Wandjina Aboriginal Corporation.
		</li>

		<li>
			Lalbanda, Patsy and Daisy Utemorrah. 2000.
			<em> Wanjurna: The Wandjina and other stories from Worrorra folklore </em>
			. Halls Creek: Kimberley Language Resource Centre.
		</li>

		<li>
			Lalbanda, Patsy, Amy Peters and Daisy Utemorrah. 2000.
			<em> Ngarlelwana Karnmanya: I was born at Kunmunya and other Worrorra stories </em>
			. Halls Creek: Kimberley Language Resource Centre.
		</li>

		<li>
			Love, J.R.B. 1936.
			<em>
				Stone-age Bushmen of To-day: Life and Adventure among A Tribe of Savages in North-Western
				Australia
			</em>
			. London and Glascow: Blackie & Son Limited.
		</li>

		<li>
			Mangolamara, Sylvesta and Lily Karadada, Janet Oobagooma, Donny Woolagoodja, Jack Karadada.
			2018. <em>We Are Coming To See You</em>. Derby: Dambimangari Aboriginal Corporation and
			Wunambal Gaambera Aboriginal Corporation.
		</li>

		<li>
			Utemorrah, Daisy. 1990. <em>Do Not Go Around the Edges</em>. Broome: Magabala Books.
		</li>

		<li>
			Utemorrah, Daisy and Susan Wyatt (illustrator). 1993.
			<em>Moonglue</em>. Broome: Magabala Books.
		</li>

		<li>
			Utemorrah, Daisy, Elkin Umbagai, Buruwola Algarra, Jean Wungunyet and David Mowaljarlai. 1980.
			<em>Visions of Mowanjum. Aboriginal Writings from the Kimberley</em>
			. Adelaide: Rigby.
		</li>

		<li>
			Utemorrah, Daisy. 2004. <em>Dunbi the Owl</em>. Sydney: Scholastic Press.
		</li>

		<li>
			Woolagoodja, Donny. 2007. ‘Rock Art as Inspiration for Contemporary Aboriginal Painting,’ in <em
				>Rock Art of the Kimberley</em
			>, edited by Mike Donaldson and Kevin Kenneally, 25-38. Perth: Kimberley Society.
		</li>
	</ul>
</Collapsible>

<Collapsible name="collapsibleSpelling" label="Note on spelling">
	<p>
		The spelling used in the Woddordda Wudoo and Ngarinyin Wurdu projects follows the directions of
		the Language advisers Leah Umbagai and Sherika Duckhole. Some words appear with different
		spellings where they have been published in previous films or documents. For example:
		Ngamardalee, Namarali, Namaaraalee; Wuduu, Wudoo, Wurdu; Wororra, Woddordda; Ngarinyin,
		Ungarinyin.
	</p>
</Collapsible>

<Credits
	credits={[
		{
			title: 'Senior cultural advisers',
			names: 'Yorna Donny Woolagoodja, Mildred Mungulu, Eewaambood Janet Oobagooma'
		},
		{ title: 'Community researcher & language adviser', names: 'Leah Umbagai' },
		{ title: 'Written by', names: 'Mary Anne Jebb' },
		{ title: 'Story developed by', names: 'Mary Anne Jebb, Mike Jones' },
		{ title: 'Marking Country Project Manager', names: 'Mike Jones' },
		{ title: 'Developer', names: 'Tabassum Fakier' },
		{ title: 'Camera and editing', names: 'Tim Mummery' },
		{ title: 'Short films directed by', names: 'Mary Anne Jebb, Ann McGrath' },
		{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' }
	]}
>
	<p>
		This digital story was developed in collaboration with Yorna Woolagoodja, Janet Oobagooma, and
		Leah Umbagai. Thank you to Woddordda community members, and to Mowanjum Aboriginal Art & Culture
		Centre for providing facilities and support.
	</p>
	<p>Header landscape still by Tim Mummery.</p>
</Credits>

<Citations
	citations={[
		{
			insert: 'this page',
			authors:
				'Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		},
		{
			insert: 'Yorna Woolagoodja',
			authors:
				'Yorna Woolagoodja cited in Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		},
		{
			insert: 'Eewaambood Janet Oobagooma',
			authors:
				'Eewaambood Janet Oobagooma cited in Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		},
		{
			insert: 'Leah Umbagai',
			authors:
				'Leah Umbagai cited in Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		},
		{
			insert: 'Sam Woolagoodja',
			authors:
				'Sam Woolagoodja cited in Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		},
		{
			insert: '‘Woddordda Wudoo’',
			authors:
				'‘Woddordda Wudoo’ in Yorna Donny Woolagoodja, Eewaambood Janet Oobagooma, Leah Umbagai, Mary Anne Jebb and Ann McGrath (2022)'
		}
	]}
	location={$page.url.href}
	page={pageTitle}
/>

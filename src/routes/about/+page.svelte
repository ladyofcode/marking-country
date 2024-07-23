<script>
	import { onMount, setContext } from 'svelte';
	import { base } from '$app/paths';
	import { generateSubfolderMedia, generateSingleMedia } from '$lib/imagePaths';
	import { switcher } from '../../stores/sectionSwitcherStore';

	import {
		Credits,
		Collapsible,
		FileDownload,
		GenericContent,
		Header,
		HorizontalScroller,
		ImageSingle,
		Intro,
		LearnMoreBox,
		QuoteInline,
		SideScroller
	} from '$lib';
	import TwoColumns from '$lib/layout/TwoColumns.svelte';

	const switcherLinks = [];

	const singleImageFilenames = [
		'dualMap.jpg',
		'collage.jpg',
		'School_Exploration_Map.jpg',
		'sahul_animated.gif',
		'David_Unaipon.jpg',
		'FitzroyIsland.jpg',
		'DurerMap.jpg',
		'map_australia.jpg'
	];

	const slideshowFilenames = [
		'SlideshowOne01.jpg',
		'SlideshowOne02.jpg',
		'SlideshowOne03.jpg',
		'SlideshowOne04.jpg',
		'SlideshowOne05.jpg'
	];

	const folderPath = `/about/images/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);
	const slideshow = generateSubfolderMedia(`${folderPath}slideshow_one`, slideshowFilenames);
	const file = `${base}/about/08_ekkel.pdf`;

	const slideshowOne = [
		{
			url: slideshow[0],
			caption:
				'<em>Map of Australia</em>, 1876. Gordon and Gotch. Shows routes of explorers, lighthouses and the route of steamers along the coast of Australia.',
			source: 'National Library of Australia, Canberra',
			link: 'https://catalogue.nla.gov.au/Record/1017669'
		},
		{
			url: slideshow[1],
			caption: '<em>Exploration map of Australia</em>, 1890. Map by John G Bartholomew.',
			source: 'National Library of Australia, Canberra',
			link: 'https://catalogue.nla.gov.au/catalog/3989570'
		},
		{
			url: slideshow[2],
			caption:
				'<em>Australia</em>, 1890. Map by George Philip & Son. Shows routes of explorers, railways, and submarine cables.',
			source: 'National Library of Australia, Canberra',
			link: 'https://catalogue.nla.gov.au/Record/6856866'
		},
		{
			url: slideshow[3],
			caption:
				"<em>Sketch map of Captain Sturt's tracks & discoveries on his various expeditions into south eastern central Australia</em>, 1849. Map by John Arrowsmith.",
			source: 'National Library of Australia, Canberra',
			link: 'https://catalogue.nla.gov.au/Record/412739'
		},
		{
			url: slideshow[4],
			caption:
				'<em>TAA map of the Commonwealth of Australia</em>, 1948. Trans Australia Airlines and Commonwealth Surveyor General. Shows air routes, principal explorers routes, railways, primary industries, state boundaries, cities, towns, minor settlements and homesteads',
			source: 'National Library of Australia, Canberra',
			link: 'https://catalogue.nla.gov.au/Record/6451646'
		}
	];

	const sectionOneContent = [
		{
			markup: [
				`<h2>Deep History's changing coasts</h2>
				<p>
					Aboriginal people lived through a time when the coastlines were much further out than they are
					today.
				</p>

				<p>
					Western scientists now estimate the Aboriginal occupation of Australia goes back at least
					65,000 years; it may be longer.
				</p>

				<p>
					Aboriginal people also lived alongside lake systems that were drying out, such as the rich
				lake system now known as Lake Mungo and Willandra Lakes. Their descendants shared the stories
				of their Country to create the <a href="${base}/willandra-lakes">Mungo Map</a>.
				</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.sahul_animated,
					width: '1107',
					height: '949',
					caption:
						'Sahul animation by Mike Jones. Shapefiles provided by CartoGIS Services, Australian National University.',
					alt: 'Animated map showing the changing coastline of Sahul from today to 21,000 years ago.',
					galleryId: 'coastlines'
				}
			}
		},
		{
			markup: [
				`<p>
				They observed rivers form and change course. They witnessed bays changing shape. Local
				Aboriginal people tell stories of how their Country, including places that we know today as
				islands, such as Koba or Fitzroy Island off Cairns, had once been joined to the mainland. Some
				important ancestral sagas still told today took place in areas that are now underwater, so
				descendants take special care when in the waters nearby.
			</p>
			<p>
				In preliminary dives off the coast, archaeologists in Western Australia have found stone tools
				indicating evidence of intense human settlement.
			</p>

			<p>
				Such Indigenous knowledge correlates with scientific knowledge of a larger continent in the
				Pleistocene or Ice Ages now known as Sahul.
			</p>

			<p>
				Australia was joined to Papua New Guinea and was much closer to the Indonesian islands. After
				the Pleistocene the warmer period of the Holocene followed. Around 18,000 years before the
				present, the ice melted; the sea started to inundate the land and the coastline moved inland.
				This created an Australia of a different shape and scale.
			</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.FitzroyIsland,
					width: '2048',
					height: '2200',
					caption: `<em>Fitzroy Island</em>, 1943. Commonwealth of Australia. (<a href='https://nla.gov.au/nla.obj-234023015/view'>National Library of Australia</a>).`,
					alt: 'Black and white aerial photograph of Fitzroy Island.',
					galleryId: 'fitzeroy'
				}
			}
		},
		{
			markup: [
				`<p>
				David Ngunaitponi, the genius inventor and scientist known as David Unaipon, gave numerous
				lectures around Australia about the beliefs of his people. He pointed out his people's
				knowledge of the compass points, and he described their words for the various wind (NOTE: The
				importance of winds is also evident in this European map of 1515. Here the winds come out of
				the mouths of humans of various moods and personalities).
			</p>
			<p>He spoke of a continent linked to other lands in the north.</p>`,
				{
					component: QuoteInline,
					children: `<p>
					The traditions say that the Aborigines came out of the north-west, the Loo loo poon cold.
					'Too loo' means a break, a severance. 'Poon cold' means a connection. The tradition implies
					that we arrived in Australia from another land in the north-west. The way of our coming was
					probably over an isthmus that has long since been sunk under the seas.
				</p>`,
					props: {
						credit:
							'David Unaipon, <em>Legendary tales of the Australian Aborigines</em>, 1924-1925.'
					}
				}
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.David_Unaipon,
					alt: 'Black and white photograph of David Ngunaitoponi, in the style of a formal portrait, taken in 1924.',
					width: '400',
					height: '504',
					caption:
						'Portrait of David Ngunaitponi (Unaipon), 1924. Public domain, via Wikimedia Commons.',
					galleryId: 'david'
				}
			}
		},
		{
			markup: [
				`<p>
				Different Aboriginal groups have distinctive arrival, origin and creation stories. Many
				Indigenous nations have lived on the changing continent since 'time immemorial'. In a dramatic
				contrast to the history of Europe, they have sustained societies through deep time.
			</p>

			<p>
				<em>Marking Country</em> presents a series of interactive digital stories, histories, and maps.
				These have been shared by a range of Indigenous communities in collaboration with the Research
				Centre for Deep History (RCDH) at the Australian National University.
			</p>

			<p>
				These living narratives have been recorded on Country. For millennia, stories of deep time
				have been told, sung, danced, performed in ritual, and marked in the landscape.
			</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.DurerMap,
					alt: "Woodcut black and white map of the world from 1515. Around the margins of the globe are pictures of human-style heads blowing 'winds'.",
					width: '2200',
					height: '1750',
					caption:
						'World map, 1515. Print made by Albrecht Dürer from woodcut. (British Museum, London).',
					galleryId: 'durerMap'
				}
			}
		}
	];

	const sectionTwoContent = [
		{
			markup: [
				`<h2>Why?</h2>
		<h3>Mapping Australia: visualizing British sovereignty</h3>
			<p>Maps are a powerful tool for representing national histories.</p>

			<p>
				In memorable images, maps make authoritative statements about nation, empire, and about the
				past and present.
			</p>

			<p>
				<em>Marking Country</em> aims to speak back to the dominant ways that Australia has been
				visualised. <em>Marking Country</em>
				demonstrates how the continent of Australia has long been documented in vivid detail, uniting layers
				of storied time and the people of deep history.
			</p>

			<p>
				Yet, for much of the twentieth century and beyond, in the nation's classrooms, on walls and in
				text-books, maps of Australia glorified British expansion, colonial domination and the
				achievements of white Australia. Featuring the one-off journeys of European ocean navigators
				and cross-country explorers, these maps reinforced a European discovery story.
			</p>

			<p>
				They ignored Aboriginal knowledge of land, deep history narratives of ancestral journeys and
				songlines. Rather, they naturalized British imperial sovereignty, and reinforced the European
				ideas of discovery and terra nullius used to justify entitlement to the lands of Indigenous
				nations. These maps superimposed European and colonial stories on an already intricately
				storied land.
			</p>
		`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.School_Exploration_Map,
					alt: 'Map of the Australian continent featuring the routes taken by the so-called explorers and discoverers of Australia. It was created by Charles Long, around 1912, and was intended to be used as an educational resource.',
					width: '500',
					height: '373',
					caption: `<em>Exploration map of the Commonwealth of Australia</em>, 1913. Map by Charles R Long. (<a
					href='https://catalogue.nla.gov.au/catalog/1973344'
					>National Library of Australia, Canberra</a
				>).`,
					galleryId: 'schoolMap'
				}
			}
		}
	];

	const sectionThreeContent = [
		{
			markup: [
				`<h2>Co-creating with communities</h2>

	<p>
		Co-curating deep histories with communities is at the core of
		<em>Marking Country</em>.
	</p>

	<p>
		We thank the participating local individuals and communities who graciously shared their
		stories with our team and with the wider viewing public.
	</p>

	<ul class="body-list">
		<li>
			<a href="{base}/carnarvon-gorge">Carnarvon Gorge, Queensland</a>
		</li>
		<li>
			<a href="{base}/woddordda-ngarinyin-intro"
				>Woddordda and Ngarinyin—West Kimberley, Western Australia</a
			>
		</li>
		<li>
			<a href="{base}/yawuru">
				Yawuru—Jangu and Janyjagurdiny (Thangoo Station), Western Australia
			</a>
		</li>
		<li>
			<a href="{base}/willandra-lakes">
				Mutthi Mutthi, Ngyaampa and Barkintji—Willandra Lakes and region, New South Wales
			</a>
		</li>
	</ul>

	<p>
		The RCDH team continues to work with various communities around Australia, and plans to bring
		more stories online in the coming months.
	</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: singleImages.collage,
					alt: 'Collage of numerous participants and researchers in the Marking Country project.',
					width: '1024',
					height: '700',
					caption: 'Photos: Amy Way.',
					galleryId: 'collage'
				}
			}
		}
	];

	onMount(() => {
		switcher.set(switcherLinks);
	});
</script>

<Header
	id="header"
	image={singleImages.map_australia}
	name="about"
	alt="A satellite image map of australia taken from Esri map tiles"
	heading="About <em>Marking Country</em>"
	gradientColor="#012a40"
/>

<Intro>
	<p>
		<em>Marking Country</em> visualises Australia's deep history.
	</p>

	<p>
		This is a history that extends far beyond the two and a half centuries since the arrival of
		British ships from the northern hemisphere.
	</p>

	<p>
		Indigenous ways of knowing Country have been practiced for millennia—by some estimates at least
		65,000 years. This everywhen is alive and lived today.
	</p>
</Intro>

<SideScroller id="scroller" content={sectionOneContent} />

<GenericContent>
	<p>
		<em>Marking Country</em> offers a way of thinking about and sharing these stories with a broader
		public, while speaking back to dominant traditions of mapping and mapmaking.
	</p>

	<LearnMoreBox>
		<img src={singleImages.dualMap} alt="" />
		<div>
			<h3><a href="{base}/mapping"> » Learn more about the history of mapping </a></h3>
		</div>
	</LearnMoreBox>

	<p>
		The communities included here represent just some of the diverse and dynamic peoples of the
		Australian continent. There are no claims to being comprehensive, or representative. We see this
		as making a start—a pilot project which we hope will be added to into the future.
	</p>

	<FileDownload
		{file}
		fileTitle="MappingDeepHistories.pdf"
		title="Marking Country: Mapping
	Deep Histories"
	/>

	<p>
		Read more about the aims, thinking and learnings of key team members who developed this website <a
			href="https://press.anu.edu.au/publications/journals/anu-historical-journal/anu-historical-journal-ii-number-4"
			>here</a
		>.
	</p>
</GenericContent>

<SideScroller content={sectionTwoContent} />

<HorizontalScroller slides={slideshowOne} />

<GenericContent>
	<h2>Research Centre for Deep History</h2>

	<p>
		The Research Centre for Deep History is on the unceded lands of the Ngunnawal and Ngambri
		peoples, in the School of History, Australian National University. It builds on the Australian
		Research Council-funded Laureate program
		<strong>
			'Rediscovering the Deep Human Past: Global Networks, Future Opportunities' (FL170100121)
		</strong>
		.
	</p>

	<p>
		Our research aims to expand history's time scale and scope. That is, history as understood by
		the Australian nation, and history as it is understood in schools and universities.
	</p>

	<p>
		The Centre consists of a team of senior and early career researchers, postgraduate students,
		project team members, collaborating scholars, collaborating partner institutions, both
		international and national, and a large network of interested people from Indigenous and
		non-Indigenous backgrounds.
	</p>

	<p>
		We are guided by two
		<a href="https://re.anu.edu.au/advisory-committees"> advisory committees </a>
		, an Indigenous Advisory Committee and a General Advisory Committee, and by the Elders, cultural
		advisers, and community members we work with.
	</p>

	<p>
		The Research Centre for Deep History aims to expand understandings of the practice of history
		and how it is seen and experienced. We are guided by the principles and research protocols
		developed by Indigenous Intellectual Property lawyer Terri Janke.
	</p>
</GenericContent>

<TwoColumns>
	<div slot="column1">
		<h2>Co-creating with communities</h2>

		<p>
			Co-curating deep histories with communities is at the core of
			<em>Marking Country</em>.
		</p>

		<p>
			We thank the participating local individuals and communities who graciously shared their
			stories with our team and with the wider viewing public.
		</p>

		<ul class="body-list">
			<li>
				<a href="{base}/carnarvon-gorge">Carnarvon Gorge, Queensland</a>
			</li>
			<li>
				<a href="{base}/woddordda-ngarinyin-intro"
					>Woddordda and Ngarinyin—West Kimberley, Western Australia</a
				>
			</li>
			<li>
				<a href="{base}/yawuru">
					Yawuru—Jangu and Janyjagurdiny (Thangoo Station), Western Australia
				</a>
			</li>
			<li>
				<a href="{base}/willandra-lakes">
					Mutthi Mutthi, Ngyaampa and Barkintji—Willandra Lakes and region, New South Wales
				</a>
			</li>
		</ul>

		<p>
			The RCDH team continues to work with various communities around Australia, and plans to bring
			more stories online in the coming months.
		</p>
	</div>
	<div slot="column2">
		<ImageSingle
			source={singleImages.collage}
			alt="Collage of numerous participants and researchers in the Marking Country project."
			width="1024"
			height="700"
			caption="Photos: Amy Way."
			galleryId="collage"
			shadow={true}
		/>
	</div>
</TwoColumns>

<Collapsible name="collapsibleApproach" label="Learn more about our approach" checked readOnly>
	<p>
		Indigenous performances of stories, song, dance and artistic practices—of marking Country—extend
		over an exceptionally long span of time and with a depth of understanding that we refer to as
		<em>deep history</em>.
	</p>
	<p>
		Our team is committed to working alongside and learning from Indigenous practitioners of
		history. We are inspired by Indigenous ways of thinking about time, and by people’s kinship with
		Country.
	</p>
	<p>
		In doing so, we commit to community-collaborative research which includes the following
		guidelines and aims:
	</p>
	<p>
		<strong>Rediscover</strong> - as researchers, we are not seeing anything for the first time; we are
		not 'discovering' something as such. Rather, we are revisiting pasts that were lived and that remain
		alive in Country today.
	</p>
	<p>
		<strong>Return</strong> - we return archival knowledge to communities and reciprocate in ways that
		have real value to Indigenous communities.
	</p>
	<p>
		<strong>Repatriate</strong> - we repatriate knowledge back to Indigenous communities to ensure they
		retain ownership of their stories.
	</p>
</Collapsible>

<Credits
	credits={[
		{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' },
		{ title: 'Marking Country Project Manager', names: 'Mike Jones' },
		{ title: 'Senior Advisor', names: 'Jackie Huggins' },
		{
			title: 'Marking Country Researchers',
			names: 'Ann McGrath, Mike Jones, Laura Rademaker, Ben Silverstein, Amy Way'
		},
		{ title: 'Consultant Researchers', names: ' Mary Anne Jebb, Kim Mahood' },
		{ title: 'Developer', names: 'Tabassum Fakier' },
		{ title: 'Project Managers', names: 'Jennifer Bird, Julie Rickwood, Alycia Nevalainen' },
		{
			title: 'Research Assistants',
			names: 'Bethany Phillips-Peddlesden, Jessica Urwin, Jennifer Bird, Alycia Nevalainen'
		},
		{ title: 'Media and Events', names: 'Emma Batchelor' },
		{ title: 'Sahul animation', names: 'Mike Jones' },
		{
			title: 'Shape files for Sahul animation',
			names: 'CartoGIS Services, Australian National University'
		},
		{
			title: 'Educational resources',
			names: 'Beth Marsden'
		}
	]}
>
	<p>
		We thank present and past members of the Indigenous Advisory Committee and General Advisory
		Committee of the Research Centre for Deep History for their advice and guidance.
	</p>

	<p>
		<strong>Indigenous Advisory Committee</strong>: Jakelin Troy (Chair), Lorina L. Barker (Deputy
		Chair), Lynette Russell, Asmi Wood, Peter Yu
	</p>

	<p>
		<strong>General Advisory Committee</strong>: Jakelin Troy (Chair), Lynette Russell (Deputy
		Chair), Malcolm Allbrook, Lorina L. Barker, Alison Bashford, Emma Kowal, Jane Lydon, Julian
		Thomas, Asmi Wood, Peter Yu
	</p>
</Credits>

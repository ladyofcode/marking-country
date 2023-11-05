<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import GenericContent from '$lib/layout/GenericContent.svelte';
	import Collapsible from '$lib/components/Collapsible.svelte';
	import InlineQuote from '$lib/components/InlineQuote.svelte';
	import LearnMoreBox from '$lib/components/LearnMoreBox.svelte';
	// import HorizontalScroller from '$lib/components/HorizontalScroller.svelte';
	import ImageSliderFullscreen from '$lib/components/ImageSliderFullscreen.svelte';
	import Credits from '$lib/components/Credits.svelte';

	let dualMaps = `${base}/about/images/dualMap.jpg`;
	let collage = `${base}/about/images/collage.jpg`;
	let schoolMap = `${base}/about/images/1913_School_Exploration_Map.jpg`;
	let coastlines = `${base}/about/images/sahul_animated.gif`;
	let david = `${base}/about/images/David_Unaipon.jpg`;
	let fitzeroy = `${base}/about/images/FitzroyIsland.jpg`;
	let durerMap = `${base}/about/images/DurerMap.jpg`;
	let slideshowOne1 = `${base}/about/images/slideshow_one/SlideshowOne01.jpg`;
	let slideshowOne2 = `${base}/about/images/slideshow_one/SlideshowOne02.jpg`;
	let slideshowOne3 = `${base}/about/images/slideshow_one/SlideshowOne03.jpg`;
	let slideshowOne4 = `${base}/about/images/slideshow_one/SlideshowOne04.jpg`;
	let slideshowOne5 = `${base}/about/images/slideshow_one/SlideshowOne05.jpg`;

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	const slideshowOne = [
		{
			url: slideshowOne1,
			caption:
				'Map of Australia, Author: Gordon and Gotch, shows routes of explorers, lighthouses and the route of steamers along the coast of Australia, Date: 1876.',
			source: 'National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/1017669'
		},
		{
			url: slideshowOne2,
			caption: 'Exploration map of Australia 1890, Author: John George Bartholomew, Date: 1890.',
			source: 'National Library of Australia.',
			link: "'https://catalogue.nla.gov.au/Record/3989570"
		},
		{
			url: slideshowOne3,
			caption:
				"Australia, Other title: Philips' authentic map of Australia, Author: George Philip & Son, cartographer, shows routes of explorers, railways and submarine cables, Date: 1890.",
			source: 'National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/6856866'
		},
		{
			url: slideshowOne4,
			caption:
				"Sketch map of Captain Sturt's tracks & discoveries on his various expeditions into south eastern central Australia, Author: John Arrowsmith, Date: 1849.",
			source: 'National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/412739'
		},
		{
			url: slideshowOne5,
			caption:
				'TAA map of the Commonwealth of Australia: showing air routes, industries, & routes of explorers, Author: Trans Australia Airlines and Commonwealth Surveyor General, shows TAA routes and internal and external routes of other airlines, and principal explorers routes, railways, primary industries, state boundaries, cities, towns, minor settlements and homesteads, Date: 1948.',
			source: 'National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/6451646'
		}
	];

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// let panels = gsap.utils.toArray('.panel');
		// let tops = panels.map((panel) => ScrollTrigger.create({ trigger: panel, start: 'top top' }));
		// panels.forEach((panel, i) => {
		// 	ScrollTrigger.create({
		// 		trigger: panel,
		// 		start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
		// 		pin: true,
		// 		pinSpacing: false
		// 	});
		// });
		// ScrollTrigger.create({
		// 	snap: {
		// 		snapTo: (progress, self) => {
		// 			let panelStarts = tops.map((st) => st.start),
		// 				snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
		// 			return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
		// 		},
		// 		duration: 0.5
		// 	}
		// });
	});
</script>

<main class="regular-page">
	<section>
		<GenericContent>
			<h1>About <em>Marking Country</em></h1>

			<p>
				<em>Marking Country</em> visualizes Australia's deep history.
			</p>

			<p>
				This is a history that extends far beyond the two and a half centuries since the arrival of
				British ships from the northern hemisphere.
			</p>

			<p>
				Indigenous ways of knowing Country have been practiced for millennia—by some estimates at
				least 65,000 years. This everywhen is alive and lived today.
			</p>
		</GenericContent>
	</section>
	<section class="">
		<GenericContent>
			<h2>Deep History's changing coasts</h2>

			<figure>
				<img src={coastlines} alt="Animated map showing the changing coastline of Sahul from today to 21,000 years ago." />
				<figcaption>
					Sahul animation by Mike Jones. Shapefiles provided by CartoGIS Services, Australian
					National University.
				</figcaption>
			</figure>

			<p>
				Aboriginal people lived through a time when the coastlines were much further out than they
				are today.
			</p>

			<p>
				Western scientists now estimate the Aboriginal occupation of Australia goes back at least
				65,000 years; it may be longer.
			</p>

			<p>
				Aboriginal people also lived alongside lake systems that were drying out, such as the rich
				lake system now known as Lake Mungo and Willandra Lakes. Their descendants shared the
				stories of their Country to create the <a href="${base}/willandra-lakes">Mungo Map</a>.
			</p>

			<p>
				They observed rivers form and change course. They witnessed bays changing shape. Local
				Aboriginal people tell stories of how their Country, including places that we know today as
				Islands, such as Koba or Fitzroy Island off Cairns, had once been joined to the mainland.
				Some important ancestral sagas still told today took place in areas that are now underwater,
				so descendants take special care when in the waters nearby.
			</p>

			<figure>
				<img src={fitzeroy} alt="Black and white aerial photograph of Fitzroy Island." />
				<figcaption>
					Fitzroy Island. Commonwealth of Australia, 1943. Australian aerial photographs; E 55 2 52.
					. <a href="https://nla.gov.au/nla.cat-vn4602881">National Library of Australia</a>.
				</figcaption>
			</figure>

			<p>
				In preliminary dives off the coast, archaeologists in Western Australia have found stone
				tools indicating evidence of intense human settlement.
			</p>

			<p>
				Such Indigenous knowledge correlates with scientific knowledge of a larger continent in the
				Pleistocene or Ice Ages now known as Sahul.
			</p>

			<p>
				Australia was joined to Papua New Guinea and was much closer to the Indonesian Islands.
				After the Pleistocene the warmer period of the Holocene followed. Around 18,000 years before
				the present, the ice melted; the sea started to inundate the land and the coastline moved
				inland. This created an Australia of a different shape and scale.
			</p>

			<figure>
				<img src={david} alt="Black and white photograph of David Ngunaitoponi, in the sytle of a formal portrait, taken in 1924." />
				<figcaption>
					Portrait of David Ngunaitponi (Unaipon), 1924. Public domain, via Wikimedia Commons.
				</figcaption>
			</figure>

			<p>
				David Ngunaitponi, the genius inventor and scientist known as David Unaipon, gave numerous
				lectures around Australia about the beliefs of his people. He pointed out his people's
				knowledge of the compass points, and he described their words for the various wind (NOTE:
				The importance of winds is also evident in this European map of 1515. Here the winds come
				out of the mouths of humans of various moods and personalities.) He spoke of a continent
				linked to other lands in the north.
			</p>

			<figure>
				<img src={durerMap} alt="Woodcut black and white map of the world from 1515. Around the margins of the globe are pictures of human-style heads blowing 'winds'." />
				<figcaption>
					World Map 1515, Author: Albrecht Dürer, woodcut, Date: 1515. British Museum. 
					<a href="https://www.britishmuseum.org/collection/object/P_1848-1111-7-8">
						See resource
					</a>
					.
				</figcaption>
			</figure>

			<InlineQuote credit="David Unaipon, Legendary tales of the Australian Aborigines, 2001.">
				<p>
					The traditions say that the Aborigines came out of the north-west, the Loo loo poon cold.
					'Too loo' means a break, a severance. 'Poon cold' means a connection. The tradition
					implies that we arrived in Australia from another land in the north-west. The way of our
					coming was probably over an isthmus that has long since been sunk under the seas.
				</p>
			</InlineQuote>

			<p>
				Different Aboriginal groups have distinctive arrival, origin and creation stories. Many
				Indigenous nations have lived on the changing continent since 'time immemorial'. In a
				dramatic contrast to the history of Europe, they have sustained societies through deep time.
			</p>

			<p>
				<em>Marking Country</em> presents a series of interactive digital stories, histories, and maps.
				These have been shared by a range of Indigenous communities in collaboration with the Research
				Centre for Deep History (RCDH) at the Australian National University.
			</p>

			<p>
				These living narratives have been recorded on Country. For millennia, stories of deep time
				have been told, sung, danced, performed in ritual, and marked in the landscape.
			</p>

			<p>
				<em>Marking Country</em> offers a way of thinking about and sharing these stories with a broader
				public, while speaking back to dominant traditions of mapping and mapmaking.
			</p>

			<LearnMoreBox>
				<img src={dualMaps} alt="" />
				<a href="{base}/mapping"> » Learn more about the history of mapping </a>
			</LearnMoreBox>

			<p>
				The communities included here represent just some of the diverse and dynamic peoples of the
				Australian continent. There are no claims to being comprehensive, or representative. We see
				this as making a start—a pilot project which we hope will be added to into the future.
			</p>
		</GenericContent>
	</section>

	<section class="">
		<GenericContent>
			<h2>Why?</h2>

			<figure>
				<img src={schoolMap} alt="Map of the Australian continent featuring the routes taken by the so-called explorers and discoverers of Australia. It was created by Charles Long, around 1912, and was intended to be used as an educational resource." />
				<figcaption>
					Exploration map of the Commonwealth of Australia: compiled by C.R. Long, M.A., Inspector
					of Schools, Education Department, Victoria, for use with 'Stories of Australian
					exploration'; S. Yandasynde, del., Melbourne. National Library of Australia digitised
					item. MAP G8961.S12 [1606-1879] (Copy 1).
				</figcaption>
			</figure>

			<h3>Mapping Australia: visualizing British sovereignty</h3>
			<p>Maps are a powerful tool for representing national histories.</p>

			<p>
				In memorable images, maps make authoritative statements about nation, empire, and about the
				past and present.
			</p>

			<p>
				<em>Marking Country</em> aims to speak back to the dominant ways that Australia has been
				visualized. <em>Marking Country</em> 
				demonstrates how the continent of Australia has long been documented in vivid detail, uniting
				layers of storied time and the people of deep history.
			</p>

			<p>
				Yet, for much of the twentieth century and beyond, in the nation's classrooms, on walls and
				in text-books, maps of Australia glorified British expansion, colonial domination and the
				achievements of white Australia. Featuring the one-off journeys of European ocean navigators
				and cross-country explorers, these maps reinforced a European discovery story.
			</p>

			<p>
				They ignored Aboriginal knowledge of land, deep history narratives of ancestral journeys and
				songlines. Rather, they naturalized British imperial sovereignty, and reinforced the
				European ideas of discovery and terra nullius used to justify entitlement to the lands of
				Indigenous nations. These maps superimposed European and colonial stories on an already
				intricately storied land.
			</p>
		</GenericContent>
	</section>

	<section>
		<!-- <HorizontalScroller /> -->
		<ImageSliderFullscreen slides={slideshowOne} />
	</section>

	<section class="">
		<GenericContent>
			<!-- <ImageSliderFullscreen slides={slideshowOne} /> -->

			<h2>Research Centre for Deep History</h2>

			<p>
				The Research Centre for Deep History is on the unceded lands of the Ngunnawal and Ngambri
				peoples, in the School of History, Australian National University. It builds on the
				Australian Research Council-funded Laureate program 
				<strong>
					'Rediscovering the Deep Human Past: Global Networks, Future Opportunities' (FL170100121)
				</strong>
				.
			</p>

			<p>
				Our research aims to expand history's time scale and scope. That is, history as understood
				by the Australian nation, and history as it is understood in schools and universities.
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
				The Research Centre for Deep History aims to expand understandings of the practice of
				history and how it is seen and experienced. We are guided by the principles and research
				protocols developed by Indigenous Intellectual Property lawyer Terri Janke.
			</p>
		</GenericContent>
	</section>

	<section class="">
		<GenericContent>
			<h2>Co-creating with communities</h2>
			<figure>
				<img src={collage} alt="Collage of numerous participants and researchers in the Marking Country project." />
				<figcaption>Photos: Amy Way.</figcaption>
			</figure>

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
				The RCDH team continues to work with various communities around Australia, and plans to
				bring more stories online in the coming months.
			</p>

			<Collapsible
				name="collapsibleApproach"
        label="Learn more about our approach"
        checked={true}
        readOnly
		>
        <p>
			Indigenous performances of stories, song, dance and artistic
			practices—of marking Country—extend over an exceptionally long
			span of time and with a depth of understanding that we refer to as 
			<em>deep history</em>.
        </p>
        <p>
			Our team is committed to working alongside and learning from
			Indigenous practitioners of history. We are inspired by Indigenous
			ways of thinking about time, and by people’s kinship with Country.
        </p>
        <p>
			In doing so, we commit to community-collaborative research which
			includes the following guidelines and aims:
        </p>
        <p>
			<strong>Rediscover</strong> - as researchers, we are not seeing
			anything for the first time; we are not 'discovering' something as
			such. Rather, we are revisiting pasts that were lived and that
			remain alive in Country today.
        </p>
        <p>
			<strong>Return</strong> - we return archival knowledge to
			communities and reciprocate in ways that have real value to
			Indigenous communities.
        </p>
        <p>
			<strong>Repatriate</strong> - we repatriate knowledge back to
			Indigenous communities to ensure they retain ownership of their
			stories.
        </p>
	</Collapsible>
		</GenericContent>
	</section>

	<section class="">
		<GenericContent>
			<h2>Credits</h2>

			<p>
				We thank present and past members of the Indigenous Advisory Committee and General Advisory
				Committee of the Research Centre for Deep History for their advice and guidance.
			</p>

			<p>
				Indigenous Advisory Committee: Jakelin Troy (Chair), Lorina L. Barker (Deputy Chair), Bruce
				Gorring, Lynette Russell, Asmi Wood, Peter Yu
			</p>

			<p>
				General Advisory Committee: Jakelin Troy (Chair), Lynette Russell (Deputy Chair), Malcolm
				Allbrook, Lorina L. Barker, Alison Bashford, Bruce Gorring, Emma Kowal, Jane Lydon, Julian
				Thomas, Asmi Wood, Peter Yu
			</p>

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
					}
				]}
			/>
		</GenericContent>
	</section>
</main>

<style>
	.panel {
		background-color: var(--color-dark-charcoal);
		padding-top: 2.4rem;
	}
</style>

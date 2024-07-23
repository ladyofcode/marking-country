<script>
	import { page } from '$app/stores';
	import { generateSingleMedia } from '$lib/imagePaths';
	import {
		Header,
		Intro,
		Credits,
		Citations,
		GenericContent,
		Collapsible,
		WillandraMap,
		MediaFullWidth,
		LearnMoreBox,
		ImageSingle,
		TwoColumns
	} from '$lib';
	import { switcher } from '../../stores/sectionSwitcherStore';
	import { onMount } from 'svelte';

	const switcherLinks = [
		{ title: 'Top', ref: '#header' },
		{ title: 'Mungo Project', ref: '#project' },
		{ title: 'Mungo Map', ref: '#map' }
	];

	const singleImageFilenames = [
		'MaryPappin.png',
		'dvd.jpg',
		'MungoReturn_cropped.jpg',
		'NLAVisit.jpg',
		'VisitingANU_3000px.jpg',
		'WillandraLakes_4000px.jpg',
		'dune_tree.jpg',
		'willandra_header.jpg'
	];

	const folderPath = `/stories/willandra/images/`;
	const singleImages = generateSingleMedia(`${folderPath}`, singleImageFilenames);

	const pageTitle = 'Willandra Lakes';

	onMount(() => {
		switcher.set(switcherLinks);
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header
	id="header"
	image={singleImages.willandra_header}
	name="willandra"
	alt="Sand and rock formations at Willandra Lakes."
	heading="Willandra Lakes map"
	subheading="Ancestral stories"
	gradientColor="#816b5e"
/>

<Intro>
	<p>
		The Willandra Lakes Map depicts some of the many family stories from Mutthi Mutthi, Barkintji,
		and Nyaampa people that criss-cross the landscape around Lake Mungo and the Willandra Lakes.
	</p>

	<p>
		In its physical form, the map was created by mapping consultant Kim Mahood, who worked with
		community members over several years. It is painted on 12oz cotton duck canvas, using acrylic
		paints and a combination of permanent and non-permanent markers. The map is over 2.5 metres tall
		(including the smaller additional section at the bottom), and nearly as wide.
	</p>

	<p>Click on the map to zoom in.</p>

	<ImageSingle
		source={singleImages.WillandraLakes_4000px}
		width="3804"
		height="4000"
		caption="Willandra Lakes Map. Created by Kim Mahood in consultation with Indigenous collaborators on
			behalf of ANU projects Deepening Histories of Place and Rediscovering the Deep Human Past.
			Digitisation: National Library of Australia."
		galleryId="willandra-image"
		shadow={true}
	/>
</Intro>

<GenericContent>
	<p>
		The creation of a map provided a way of telling history that was necessarily connected to place.
		It escaped the academic, European-derived pattern of presenting history either as text removed
		from place, or as something numerical—a time-line with 'key dates' and often with an assumption
		of a march towards modernity or progress. It was something that local people could help shape.
		They would be co-curators mapping their family and tribal histories.
	</p>

	<p>
		This different kind of map would not be like the ones they saw on the walls of their school
		class-rooms. It would not glorify Captain Cook's so-called 'discoveries' of their lands, or of
		other white explorers like Major Mitchell.
	</p>

	<p>
		Rather, it would tell their own stories of family connection; it would be a way of honouring
		ancestors. It would show how they practiced traditions, working on railways and roads, on sheep
		stations and in stock-camps. It would also tell of how government authorities removed them from
		their homes, forcing them to live on government-run reserves. And how they were taken away from
		family and forced to live as orphans in government-run institutions. Yet amidst all this, it
		would also show how the different family groups maintained their connection to their special
		tracts of land, their traditional tribal estates.
	</p>

	<p>
		Bernadette Pappin, a Mutthi Mutthi woman, says the stories on the cultural map come from "the
		mouths of Indigenous people and not non-Indigenous people. We are telling our story; everybody's
		got a story, got a connection to this land here that we are talking about."
	</p>
</GenericContent>
<Collapsible type="wide" name="collapsibleProcess" label="Learn more about the mapping process">
	<p>
		Indigenous representatives involved in the Willandra Lakes World heritage region had helped us
		understand the 'deep histories' of the Pleistocene Lakes, but they pointed out that there was a
		continuous history - a full history.
	</p>

	<p>
		In order to create such a map, Ann McGrath and Kim Mahood made several field trips to meet with
		local Indigenous people from the wider region around Willandra Lakes between October 2017 and
		March 2021, and consulted with families and individuals from various language groups. Of the
		people interviewed, the descendants of senior Mutthi Mutthi woman Alice Kelly—an outspoken
		advocate for the contemporary Indigenous story of Lake Mungo—live predominantly around
		Balranald. Ivanhoe is the hub of stories for the Kennedy clan and its patriarch, the drover
		'King' Kennedy, descended from Ngiyampa people. Pooncarie on the Darling River holds strong
		associations for Barkintji and Parinji families, while people with Murora heritage are largely
		connected to Mildura.
	</p>

	<p>
		Kim Mahood started working with community representatives using a topographical map, documenting
		people's memories - the fine details of places where important life events took place -
		including births, deaths and marriages. With an eye for detail and accuracy and outstanding
		listening skills, Kim then transformed this detailed map into a colourful painted map featuring
		all the stories that people had provided about their family histories—oral traditions handed
		down across the generations.
	</p>

	<p>
		The people who participated knew the precise locations of sites where events took place. A bend
		in the river, an intersecting waterway, a railway junction, a bore—all were associated with
		special family events, and sometimes with ancient stories too.
	</p>

	<p>
		Compiling a visual record via a map usefully tells personal and family histories on Country
		across generations - from the present day, to more recent decades, including the ever-present
		presence of deep ancestral histories. Such a map could document key life events, including the
		pain of state removals, relocation to reserves, repeated separations from Country, stolen
		children, the hard work on railways, sheep stations and elsewhere, and the thriving families
		that they created.
	</p>

	<ImageSingle
		source={singleImages.MaryPappin}
		width="1284"
		height="2778"
		alt="Mary Pappin standing in front of the map."
		caption="Mary Pappin with the Willandra Lakes Map, March 2021. Photo: Ann McGrath."
		galleryId="maryPappin"
	/>

	<p>
		The first field trip, in October and November 2017, included visits to Balranald, Yanga National
		Park, Wentworth, Dareton, Mildura, Pooncarie, Buronga and Hay. Kim made a second round of
		consultations in March and April 2018, interviewing most of the same people a second time,
		filling in gaps and clarifying locations, place names and the movements of people.
	</p>

	<p>
		In October 2020 Kim visited Ivanhoe and Balranald. She set up the painted map (still a
		work-in-progress at this point) in the woolshed at the Buronga Botanic Gardens to avoid the
		complications of state border crossings during the Covid restrictions. During this visit she was
		able to interview members of the Mitchell clan and several other people who had not been
		available on the earlier field trips.
	</p>

	<p>
		Ann McGrath, who had joined Kim on the initial field trip in 2017, also accompanied her on the
		final field trip in March of 2021. On this trip all those who had participated in the previous
		consultations were asked to check their stories and each detail on the painted map. People made
		corrections and they agreed that their information could be digitised and shared with a wider
		public.
	</p>

	<p>
		The Buronga woolshed provided an ideal venue for most of these consultations. Other sessions
		took place on front lawns and, in Balranald, a broad stretch of tree-shaded footpath. Ann and
		Kim also visited Barry Pierce on his property of Culpra on the Murray River.
	</p>

	<p>
		Kim had a number of meetings with members of the Kelly/Pappin family, most of whom are based in
		Balranald. Their stories revealed a strong connection to Melbourne, and an origin story from
		Moonaculla Mission, which necessitated an extension to the original map. While most of the
		people interviewed had travelled extensively and lived for periods of time in other places,
		Balranald remains the hub to which they return.
	</p>

	<p>
		While some Kennedy family members now live in Balranald and Hay, their story originates in
		Ngiyampa country around Ivanhoe. Joan Slade nee Kennedy, daughter of drover King Kennedy, still
		lives in Ivanhoe, not far from the town common where her father kept his stock and her mother
		raised seventeen children.
	</p>

	<p>
		The different trajectories of the descendants of Nellie Johnson, a Barkintji/Parinji woman who
		lived near Pooncarie and paddled a bark canoe up and down the Darling, reveal how some people
		managed to avoid government intervention in their lives, whilst others were swept up in the
		Missions and government settlements.
	</p>

	<p>
		The Mitchell clan is interwoven with the Johnson, Johnston and Brodie families and the Pooncarie
		connection, but they also claim links to the Murora people west of the river.
	</p>

	<p>
		Mick Kelly's family shares a common ancestor with the Balranald Kellys, most likely an uncle of
		Alf Kelly the first, who was born on Willandra Creek and taken as a baby to Moonaculla Mission.
		Mick's branch of the family went north and west, towards Menindee and Broken Hill.
	</p>

	<p>
		The people who participated in this mapping project provided a rich and generous narrative of
		resilience, resourcefulness, family solidarity and enduring connections to their places of
		origin.
	</p>

	<p>
		Note: There are several different spellings of Moonaculla, including Moonacullah and
		Moonahcullah.
	</p>
</Collapsible>

<TwoColumns>
	<div slot="column1">
		<p>
			In August 2021, the Research Centre worked with the National Library of Australia's Trove
			Collaborative Services to digitise the Willandra Map.
		</p>

		<p>
			Following this, and an initial image-capture process conducted by an external consultant, Mike
			Jones developed a layered digital version of the map, working with Kim Mahood to check the
			text and layers.
		</p>
	</div>
	<div slot="column2">
		<ImageSingle
			source={singleImages.NLAVisit}
			galleryId="NLAvisit"
			width="1400"
			height="1050"
			alt="Six people standing the Willandra Map on the table at ANU."
			caption="National Library of Australia staff visiting the Research Centre for Deep History at the
		Australian National University to see the Willandra Lakes Map, June 2021. Photo: Mike Jones."
			removeTopMargin={true}
			shadow={true}
		/>
	</div>
</TwoColumns>

<GenericContent>
	<p>
		This digital map allows people to explore individual families, and helps them navigate the many
		complex stories that mark this Country.
	</p>
</GenericContent>

<WillandraMap />

<GenericContent>
	<p>
		The Research Centre for Deep History is continuing to work with families in the region to
		develop the interactive map, including the potential to incorporate digital archival materials
		to enrich the stories of the families represented.
	</p>

	<p>
		In doing so, they continue to build on relationships between historians from the Australian
		National University and the Mutthi Mutthi, Barkintji, and Nyaampa people that date back nearly
		20 years.
	</p>
</GenericContent>

<MediaFullWidth youTubeId="iWfvzgN5jIU" max={true} />

<GenericContent id="project">
	<h2>The Mungo Project</h2>

	<p>
		Although archaeologists had worked there since 1969, the historical scholars saw the history of
		Lake Mungo, a place where living individuals resided in deep time, as particularly relevant. The
		individuals who had once lived there - now known as Mungo Lady and Mungo Man, amongst others,
		helped to overturn the idea that 'Australian history' started in 1770 or 1788, with European
		invaders and convict arrivals. After all, they lived at least 40,000 years before the present
		time.
	</p>

	<p>
		The team of university historians led by Professor McGrath wanted to learn more about the
		history that took place on the continent before European colonisers.
	</p>

	<p>
		Local elders soon led the education; they taught the team how their views of history are far
		more complex than the dates and time-lines that divide conventional histories. Indigenous people
		view the past and present as multi-layered; it may be as recent as 'yesterday'—the land's
		inspirited aspects and that of their ancestors and their knowledge continues ever-present in
		Country. It is Everywhen.
	</p>

	<p>
		Their Country story was about relationships with kin and Country today; their ancestral spirits
		were active and formative; they made the present - an animated landscape. People living today
		had a duty to them.
	</p>
	<LearnMoreBox>
		<img
			src={singleImages.dvd}
			alt="Front cover of the DVD of the documentary 'Message from Mungo.'"
		/>
		<div>
			<h3>Message from Mungo documentary</h3>
			<ul>
				<li>
					<a href="https://www.roninfilms.com.au/feature/9901/message-from-mungo.html">
						» Buy the Ronin Films DVD
					</a>
				</li>
				<li>
					<a href="https://www.sbs.com.au/ondemand/movie/message-from-mungo/498456643653">
						» Watch on SBS On Demand
					</a>
				</li>
			</ul>
		</div>
	</LearnMoreBox>
</GenericContent>

<MediaFullWidth
	image={singleImages.dune_tree}
	width="1400"
	height="614"
	galleryId="dune_tree"
	alt="A typical Willandra Lakes scene, with a sandy dune, some scrubs and a small tree, and a vast blue sky in the background."
	caption="Willandra Lakes—a Pleistocene Dry Lake Landscape. Photo: Ann
        McGrath, 2018."
/>

<GenericContent>
	<p>
		The Willandra Lakes traditional custodians or tribal groups felt this powerfully; they held
		strong to their ancestors going back into deep time.
	</p>

	<p>
		Lady Mungo and Mungo Man surfaced in the late 1960s, in the lifetimes of local elders. In that
		decade, scientists thought that Aboriginal people had been on the continent for up to 20,000
		years—already a big advance of the previous dates of around 10,000 years. But these human
		remains doubled this span of Aboriginal history to at least 40,000 years before the present.
	</p>

	<p>
		While the dates of Aboriginal people in the north of the continent are now estimated at 65,000
		years, the Mungo burials represent the earliest known individual people—as well as the earliest
		known cremation and earliest known full burial on the continent.
	</p>

	<p>
		To the local tribes, their ancestors were not simply 'evidence.' They are not objects for
		scientific research or museum repositories. They are family who must be honoured; they are
		agents creating their futures. Local Aboriginal people do not necessarily see a big gap between
		deep time and the present. Rather, they have an intimate connection with people who had lived at
		least 40,000 years ago.
	</p>

	<p>
		Lady Mungo is a revered relative. It was as if she is a close aunty who only died yesterday. The
		deep past continues ever-present. Lady Mungo is an agent in people's lives and in the
		landscape—a powerful creative force that affects the everyday—from the weather to the happiness
		or unhappiness of people who venture on their ground.
	</p>
</GenericContent>

<Collapsible name="collapsible" label="Read more about the Mungo project">
	<p>
		Historians Ann McGrath and Malcolm Allbrook, and film historian, producer and director Andrew
		Pike worked on the research and film side of this project. They filmed numerous interviews about
		the local people's experience of deep history, and about important historical figures. People
		from the three main custodial groups or tribes, plus scientists undertaking geological and
		archaeological research and local pastoralists, all participated in this work.
	</p>

	<p>
		Aboriginal people struggled to gain control over ancestral human remains and have the final say
		in any other research that would take place in their Country. With the support of Isabel McBryde
		and sympathetic supporters, a carefully negotiated joint management plan followed—with
		Indigenous custodians, scientists and pastoralists in collaboration with National Parks NSW and
		World Heritage Australia.
	</p>

	<p>
		Conflicts continue over management and representation. Elders were deeply concerned about the
		fact that, without their permission, scientists took their ancestral remains far away to
		Canberra, to the Australian National University in Canberra. In special ceremonies, which
		included formal apologies to the Indigenous custodians, all remains have now been returned to
		Country.
	</p>

	<p>But their rightful place and role continues to be a point of controversy.</p>

	<ImageSingle
		source={singleImages.MungoReturn_cropped}
		width="1400"
		height="775"
		alt="The return of Mungo Man's remains to Lake Mungo in 2017 in a 1970s blarge black hearse  with an Aboriginal flag on the door. A group of people are standing and sitting on chairs nearby."
		caption="Return and reburial of Mungo Man's remains, 17 November 2017, Lake Mungo. Photo: Ann McGrath."
		galleryId="mungoReturn"
	/>
</Collapsible>

<GenericContent id="map">
	<h2>Creating the Mungo Map</h2>

	<p>
		In 2013, the Deepening Histories project held a symposium called Deepening Histories of Place at
		the Australian National University. Members of the Mungo community made vital contributions.
	</p>

	<p>
		The Willandra custodians had already demonstrated a sustained interest in learning from
		scientists, and to ensure that their voices, sharing their powerful ancestral knowledge, were
		heard in relevant forums. Now they showed their interest in hearing what scholars, especially
		the academic historians, had to say.
	</p>

	<p>
		The representatives travelled together from their home towns around Lake Mungo and Willandra
		Lakes, where they took up the opportunity to inspect the ancestral remains still held at the
		Australian National University. They allowed some research to proceed before their return. The
		remains were then carefully prepared for their return to Country.
	</p>
</GenericContent>

<MediaFullWidth
	image={singleImages.VisitingANU_3000px}
	width="1400"
	height="933"
	galleryId="visiting_anu"
	alt="Participants from the Willandra Lakes map project standing in front of a min-bus at ANU."
	caption="Visitors and friends from the Willandra Lakes World Heritage region
            at The Australian National University in June 2013. From left to
            right: Ann McGrath, Darryl Pappin, Leanne Mitchell, Tanya Charles,
            Joan Slade, Dawn Smith, Robyn Bancroft, Beryl and Roy Kennedy, Eric
            and Maureen Taylor, Warwick Clark (at rear), Sam Wickman (at rear),
            Marie Mitchell, Lottie Mitchell, Ricky Mitchell, Richard Mintern,
            Warren Clark. Photo: Monica Conaghan 2013."
/>

<GenericContent>
	<p>
		At the symposium, members of a community panel pointed out that researchers were overly
		interested in the deep past. What about their own life stories? And those of their grandmothers
		and fathers? These included traumatic stories of forced removal from one reserve to the next,
		and forced removal from their families. It was a rare exception for any family to escape these
		horrendous government policies.
	</p>

	<p>
		The community spokespeople identified a role for historians: to record their personal stories,
		and that of their grandparents and great-grandparents.
	</p>

	<p>
		People had expressed an interest in telling the story through cultural mapping techniques - but
		this would be a different kind of 'history map': a visual depiction of their lives as
		historically experienced in their beloved lands, their ancestral Country.
	</p>

	<p>
		A visual method that they could co-create was appealing. Kim Mahood, an expert in the practice
		of cultural mapping with Aboriginal communities—and also an accomplished artist and
		writer—agreed to work with the various language and family groups in the Willandra Lakes region.
		She would produce a giant history map.
	</p>

	<p>Many have likened the result to a treasure map.</p>
</GenericContent>

<Collapsible name="referencesWillandra" label="References and further reading">
	<ul>
		<li>
			Allbrook, M. and McGrath, A., "Collaborative Histories of the Willandra Lakes". In
			<em>Long history, deep time: deepening histories of place</em>, edited by McGrath, A. and
			Jebb, M, 241-252. Canberra: ANU Press, 2015.
		</li>

		<li>
			Barrows, Timothy T., Kathryn E. Fitzsimmons, Stephanie C. Mills, Jacqui Tumney, Daryl Pappin,
			and Nicola Stern. 2020. “Late Pleistocene Lake Level History of Lake Mungo, Australia.”
			<em>Quaternary Science Reviews</em> 238 (June): 106338.
			<a href="https://doi.org/10.1016/j.quascirev.2020.106338">
				https://doi.org/10.1016/j.quascirev.2020.106338
			</a>
			.
		</li>

		<li>
			Bowler, J. M., Rhys Jones, Harry Allen, and A. G. Thorne. 1970. "Pleistocene Human Remains
			from Australia: A Living Site and Human Cremation from Lake Mungo, Western New South Wales."
			<em>World Archaeology</em> 2 (1): 39-60.
		</li>

		<li>
			McGrath, Ann. 2018. "Lady Mungo and the New and Old Discovery Narrative.” In
			<em>
				Unmasking Ideology in Imperial and Colonial Archeology: Vocabulary, Symbols, and Legacy
			</em>
			, edited by B. Effros and L. Guolong, 227-56. Los Angeles: The Cotsen Institute of Archaeology
			Press.
		</li>

		<li>
			McGrath, Ann, Laura Rademaker, and Jakelin Troy, eds. 2023.
			<em>Everywhen: Australia and the Language of Deep History</em>. Lincoln: University of
			Nebraska Press. Sydney: UNSW Press.
		</li>

		<li>
			Pike, Andrew, and Ann McGrath. 2014. <em>Message from Mungo</em>. Canberra: Ronin Films.
		</li>
	</ul>
</Collapsible>

<Credits
	credits={[
		{
			title: 'Mutthi Mutthi',
			names:
				'Mary Pappin Senior, Patsy Winch, Tanya Charles, Bernadette Pappin, Danny Kelly, Maureen Reyland, Mary Pappin Junior, Kia Charles, Barry Pierce'
		},
		{
			title: 'Barkintji/Parinji',
			names:
				'Patricia Johnson, Michael Young, Eunice Hudson, Priscilla Biggs, Lottie Williams, Brenda Brodie'
		},
		{
			title: 'Ngiyaampa',
			names:
				'Roy Kennedy, Joan Kennedy/Slade, Coral Ellis, Mark (Doc) Slade, Dawn Smith, Maureen Taylor, Mick Kelly'
		},
		{
			title: 'Barkintji/Murora',
			names:
				'Philip Lawson, Ivan Johnston, Ernest (Narkie) Mitchell 3rd, Junette Mitchell, Doreen Mitchell, Lynne Mitchell'
		},
		{ title: 'Written by', names: 'Ann McGrath, Kim Mahood' },
		{ title: 'Marking Country Project Manager', names: 'Mike Jones' },
		{ title: 'Interactive digital map', names: 'Mike Jones, Tabassum Fakier' },
		{ title: 'Developer', names: 'Tabassum Fakier' },
		{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' }
	]}
>
	<p>
		Work in the Willandra Lakes region has been supported by funding from the Australian Research
		Council, including the Discovery grant 'Australia's Ancient and Modern Pasts: A History of Lake
		Mungo' (DP110103193), the Linkage grant 'Deepening Histories of Place: Exploring Indigenous
		Landscapes of National and International Significance' (LP100100427), and the Laureate Program
		'Rediscovering the Deep Human Past: Global Networks, Future Opportunities' (F170100121).
	</p>

	<p>
		The map was digitised by the National Library of Australia through its Trove Collaborative
		Services team. Thank you to National Library staff and representatives who engaged with the
		project throughout, including Catherine Aldersey, Rochelle Armstrong, Rebecca Bateman, Lisa
		Jong-Reuss, Nicola Mackay-Sim, Craig Mackenzie, Elizabeth MacKenzie, Sue McFadden, Aleara
		Pearce, Shirleene Robinson, and Kathryn Ross.
	</p>
</Credits>

<Citations
	citations={[
		{ insert: 'this page', authors: 'Ann McGrath and Kim Mahood (2022)' },
		{
			insert: 'Bernadette Pappin',
			authors: 'Bernadette Pappin cited in Ann McGrath and Kim Mahood (2022)'
		},
		{ insert: 'the Willandra Lakes Map', authors: 'Research Centre for Deep History, (2022)' }
	]}
	location={$page.url.href}
	page={pageTitle}
/>

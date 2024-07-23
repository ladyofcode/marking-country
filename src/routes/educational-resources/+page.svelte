<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { generateSubfolderMedia } from '$lib/imagePaths';
	import { switcher } from '../../stores/sectionSwitcherStore';

	const switcherLinks = [];

	import { GenericContent, Header, ImageSingle, SideScroller, FileDownload } from '$lib';

	const uncleFredFilenames = [
		'IMG_2552.jpg',
		'IMG_2553.jpg',
		'IMG_2554.jpg',
		'IMG_2557.jpg',
		'IMG_2559.jpg',
		'IMG_2560.jpg'
	];

	const willandraFilenames = [
		'IMG_0372.jpg',
		'IMG_0381.jpg',
		'IMG_0400.jpg',
		'IMG_0406.jpg',
		'IMG_0411.jpg'
	];

	const folderPath = `/education/images/`;
	const image_education_header = `${base}${folderPath}book.jpg`;
	const uncleFredSlides = generateSubfolderMedia(
		`${folderPath}uncle_fred_slideshow`,
		uncleFredFilenames
	);
	const willandraSlides = generateSubfolderMedia(
		`${folderPath}willandra_slideshow`,
		willandraFilenames
	);
	const file = `${base}/education/informit.476271710767168.pdf`;

	const sectionOneContent = [
		{
			markup: [
				`
	
							<h3>What is 'deep history'?</h3>
							<h4>Ann McGrath, Australian National University</h4>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: willandraSlides[0],
					alt: '',
					width: '3456',
					height: '2304',
					caption: 'Willandra Lakes. Photo by Ann McGrath, 2018.',
					galleryId: 'willandra1'
				}
			}
		},
		{
			markup: [
				`
				<p>
					Deep history aims to address the long time-span of human history that extends beyond the
					modern, the pre-modern, the mediaeval and the ancient - or at least that which is usually
					defined as such. This makes deep history especially important for any study of Australian
					history, a story that cannot be fully told without expanding our thinking about history's
					periodization. This new 'historical turn' reflects an effort to shift the discipline's
			framings.
		</p>
			`
			],
			image: {
				component: ImageSingle,
				props: {
					source: willandraSlides[1],
					alt: '',
					width: '3456',
					height: '2304',
					caption: 'Willandra Lakes. Photo by Ann McGrath, 2018.',
					galleryId: 'willandra2'
				}
			}
		},
		{
			markup: [
				`<p>
			Deep history encompasses a kind of history that is more inclusive of epochs of time, of
			places, people and perspectives. As an evolving field, historians are exploring ways to engage
			with new kinds of historical evidence, and above all, with multiple perspectives on what
			history is, and what it might be. At least this is how we practice deep history in our Centre
			for Deep History at the Australian National University. In the Australian context, we see it
			as an essentially collaborative practice with Indigenous scholars and knowledge holders.One of
			the key questions that deep history addresses is the question of why Indigenous people have so
			long been perceived as history's outsiders, as not being players in global history, and as
			somehow not having a history of their own.
		</p>
			`
			],
			image: {
				component: ImageSingle,
				props: {
					source: willandraSlides[2],
					alt: '',
					width: '3456',
					height: '2304',
					caption: 'Willandra Lakes. Photo by Ann McGrath, 2018.',
					galleryId: 'willandra3'
				}
			}
		},
		{
			markup: [
				`
			<p>
			In the late 1960s, prominent Australian archaeologist John Mulvaney tried to do something
			about this, entitling his book The Prehistory of Australia. He intended the term 'prehistory'
			to gesture towards inclusion - for Indigenous Australians to be thought of as having
			'history', but over a span of human time prior to the advent of writing. Unfortunately, the
			term only reinforced the notion of the 'pre', as if implying that history proper had not yet
			begun. An alternative term was required.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: willandraSlides[3],
					alt: '',
					width: '3456',
					height: '2304',
					caption: 'Willandra Lakes. Photo by Ann McGrath, 2018.',
					galleryId: 'willandra4'
				}
			}
		},
		{
			markup: [
				`<p>
			The concept of 'deep history' can actively deconstruct the framing of history as one that
			essentially took place only after European arrival. The exact dates for Indigenous occupation
			of North America or Australia may not be known, but they predated European arrivals by many
			thousands of years.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: willandraSlides[4],
					alt: '',
					width: '3456',
					height: '2304',
					caption: 'Willandra Lakes. Photo by Ann McGrath, 2018.',
					galleryId: 'willandra5'
				}
			}
		},
		{
			markup: [
				`
		<p>
			Various fields of study have specialised in the study deep time. Archaeologists meticulously
			unearth ancient occupation sites, developing expertise in the analysis of various kinds of
			material evidence. They frequently work in collaborative teams with geological, genomic,
			chemical and other scientists to determine dates, theories of origin, migration patterns, diet
			and more. Around the world, Indigenous peoples now play key roles in this research process,
			although their perspectives are not necessarily included in published outcomes. Studies by
			climate scientists, geographers, geomorphologists, astrophysicists, and other scientists also
			provide significant insights into vast climatic and ecological change and astronomical events
			that affected human history. So, one might ask, why is this any different to what historians
			of deep history might do? The main difference is that much of the work of these scholars
			remains inside the realm of 'science', appearing in specialist journals which deploy technical
			language and tabulate results with parameters that, in the name of 'data objectivity', often
			exclude cross-cultural perspectives. These journals certainly publish crucial findings of
			important factual information, but theirs is a different enterprise to that of the historian -
			their aim is not necessarily to narrate stories of living, breathing people.
		</p>
				`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[0],
					alt: '',
					width: '3024',
					height: '4032',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide1'
				}
			}
		},
		{
			markup: [
				`<p>
			Historian Dipesh Chakrabarty argued that the discipline of history should develop an expanded
			framework that takes geological time into account—a shift he saw as necessary to understanding
			the Anthropocene era of human-induced climate change. Environmental historians and others now
			promote an analysis that widens the sphere of historical agency; they consider animals,
			plants, and things as 'actants' of history, thereby challenging the centrality of human
			action.
		</p>

		<p>
			In their book Deep Histories: The architecture of the past and present, medievalist Daniel
			Smail and anthropologist Andrew Shyrock argued that scholars and teachers need to work closely
			with biological and other scientists to understand the long history of hominids, which
			includes our genus of humans homo sapiens, but is not exclusive to them. This is a brilliant
			book, but it did not seek to take Indigenous or multiple cultural perspectives into account,
			and it did not pause to consider the unique history that took place on the Australian
			continent throughout the Holocene and the Pleistocene.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[1],
					alt: '',
					width: '4032',
					height: '3024',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide2'
				}
			}
		},
		{
			markup: [
				`	<p>
			Nonetheless theirs was a radical move, for the great span of human history beyond about 4,000
			years has rarely been included in historical accounts, being considered the realm of
			evolutionary scientists and archaeologists. Sure, life was certainly different than today, but
			people shared many of the same kinds of experiences.
		</p>

		<p>
			People who lived long ago still had bodies like ours, and this necessitated living their lives
			being experienced along similar pathways of people of today. Let's think about this: they
			enjoyed food, got hungry and thirsty, they made things, they shared knowledge, they drank, had
			sex, loved, gave birth to children, nurtured and taught them, enjoyed companionship,
			interacted with their environment, with animals and plants, and practiced art, song, dance and
			storytelling. Their lives were lived through history; they invented things, they created
			knowledge and arts; they made history too. And they were interested in how things came to be
			as they are. This shared humanity, in my view, is one of the most telling arguments for the
			study of deep history.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[2],
					alt: '',
					width: '4032',
					height: '3024',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide3'
				}
			}
		},
		{
			markup: [
				`	<p>
			Yet, in the Australian case, even after the great surge in Aboriginal history writing since
			the 1980s, the key dates of history still feature 1770 and 1788. Even studies of 'Aboriginal
			history' only commenced their accounts after the arrival of European colonizers. It was as if
			Europeans had to be on the scene, on the continent of Australia, before Aboriginal Australians
			could be 'in History'.
		</p>

		<p>
			This pattern has to do with evolution of the history discipline itself, which tends to rely
			upon the recording of events in written form. Academic history has been a text-based
			discipline which has its roots in German, British and other European universities. Its early
			scholars practiced philology, or the study of texts and scripts. Although visual and other
			kinds of historical evidence are increasingly recognized as valuable, historians continue to
			be trained primarily as experts in critiquing various kinds of text-based documents.
			Consequently, historical accounts have focussed on people who practice writing, people with
			literacy embodied in their cultural traditions. With necessary exceptions, of course. Scholars
			of what has traditionally called ancient history had less text-based evidence available, so
			they learnt to analyse not only symbolic forms of written expression but also a wider variety
			of material culture including art and sculpture.
		</p>

		<p>
			In the case of writing Australian history, historians had easy access to the logbooks of
			Captain Cook, and to the journals of the First Fleet writers (albeit readers should note that
			they were not necessarily the 'first fleet' to the continent). Their accounts were rapidly
			published, and via the official archives, historians could later access the letters by
			governors, early colonial elites, and convict surveillance records.
		</p>

		<p>
			Another factor that led to the exclusion of global Indigenous peoples from history was the
			naivety of European race assumptions. Their civilizations were under-estimated, as if they
			awaited the coming of Europeans before they could 'make history' and approach modernity.
		</p>
			`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[3],
					alt: '',
					width: '4032',
					height: '3024',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide4'
				}
			}
		},
		{
			markup: [
				`
			<p>
			The concept of 'deep time' attempts to actively deconstruct the framing of history as 'before
			or after European arrival.' We may not know exact dates for Indigenous occupation in North
			America or Australia, but we know that they predate European occupation by many thousands of
			years. How could their lives be lived entirely 'outside History'?
		</p>

		<p>
			Additionally, due to the locale of many key centres of western learning, the whole southern
			hemisphere has been somewhat neglected in the writing of world history. Global histories have
			emphasized the northern hemisphere/European perspectives, with 'ancient history' assumed to
			have taken place primarily in Egypt, Greece and Rome - some sites being associated with
			defining moments in the evolving history of so-called 'western civilization'. Where the 'west'
			begins and ends is an issue in itself, as Greece, for example, might have viewed itself as
			culturally and geographically 'eastern'. Scholars today speak of the 'global south' as the
			less wealthy countries. Yet here we are, Australia, a nation that happens to be located in the
			southern hemisphere but that is one of the wealthiest in the world.
		</p>

		<p>
			We need to escape history's northern hemisphere lens. Which includes the thinking that
			'Australia', and its peoples, were not 'discovered' until Europeans arrived. We need to
			overturn the whole concept of 'discovery' - whether in ocean navigation or science - as
			exclusively European.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[4],
					alt: '',
					width: '3024',
					height: '4032',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide5'
				}
			}
		},
		{
			markup: [
				`
			<p>
			The Australian continent has long been the land of hundreds of Indigenous nations. At Lake
			Mungo in south western New South Wales, communities of people lived and died alongside a large
			lake system. The Mutthi Mutthi, Nyaampa and Barkintji peoples are custodians of these sites.
			Here there is verifiable scientific evidence from human remains - the most famous of these
			being arguably the world's earliest known cremation. Today known as Lady Mungo, she lived
			40,000 years ago. Around the same time, people undertook a ritual burial of Mungo Man, which
			included the application of red ochre on his remains. At Madjebebe in the Northern Territory,
			people camped and met there, a story that goes back at least 60,000 years ago. And some people
			still visit there today, continuing this astonishing connection to Country. Footprints of
			people who chased kangaroos and of children perambulating around a drying lake provide
			evocative clues to everyday life In the Willandra Lakes of the Pleistocene era, around 18,000
			years ago, people left footprints as they squelched in the mud. Adults were chasing a
			kangaroo, children were perambulating, a one-legged man was running at speed with the aid of a
			stick, and one mother carrying a baby moved it from one hip to the other. Given the usual span
			of 'ancient history' going back to the Pyramids or as far back as far less than 10,000 years,
			these Australian dates are remarkable. Remarkable humanizing 'evidence' creates a sense of
			immediacy, almost making dates seem irrelevant.
		</p>

		<p>
			Deep history prompts us to think of the nature and meanings of the term 'evidence'. There are
			many other examples of history in our midst. There is rock art, painted and engraved. There
			are living histories, ancient memory narratives and art traditions that tell the story of
			Country forming, epic narratives with parallel evocative power to that of the Greek myths.
			Aboriginal elders often describe 'Country' itself as an archive or as a history book. Works by
			the Gay'Wu group of women and Yornadaiyn Woolagoodja of Broome and many others provide first
			person insights.
		</p>`
			],
			image: {
				component: ImageSingle,
				props: {
					source: uncleFredSlides[5],
					alt: '',
					width: '4032',
					height: '3024',
					caption: 'Uncle Fred Conway, Carnarvon Gorge. Photo by Ann McGrath, 2022.',
					galleryId: 'uncleFredSlide6'
				}
			}
		}
	];

	const pageTitle = `Educational resources`;

	onMount(() => {
		switcher.set(switcherLinks);
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header
	id="intro"
	image={image_education_header}
	name="ngarinyin"
	alt="A water hold, seen through paper bark trees, with a bright blue sky in the background."
	heading="Educational resources"
	gradientColor="#364840"
/>

<GenericContent>
	<h2>Resources for teachers</h2>

	<p>
		<strong
			>Please note: A Teacher's Guide, which addresses the aims of the National Curriculum is
			currently being prepared and will be posted in the coming months.</strong
		>
	</p>
	<FileDownload {file} fileTitle="informit.476271710767168.pdf" title="What is 'Deep history?'" />
</GenericContent>

<SideScroller content={sectionOneContent} />

<GenericContent>
	<p>
		Deep history must engage with different kinds of history tellings, and consider distinctive ways
		of thinking about time or temporality. Many Indigenous cultures do not give primacy to notions
		of linear time. We should be aware that counting the years as we do today has its own history.
		Our '2022' is based upon the Gregorian calendar after Pope Gregory, with this way of measuring
		time itself borrowed from Roman societies via the Julian calendar. 'Time' as we measure it today
		only became uniform in recent centuries. In contrast, Aboriginal Australians have often thought
		about time as a multi-layered present, a kind of non-linear 'everywhen' with things happening on
		Country. The challenge of deep history is to develop methodologies that use different kinds of
		clues and different approaches to historical evidence and its periodizations.
	</p>

	<p>
		Deep history can extend 'the time of history', but it might also challenge the emphasis of one
		of the history discipline's defining features - western notions of time and chronological
		thinking in historical storytelling. Deep history offers potential globally, to be more
		inclusive of all the peoples and the places in the world.
	</p>

	<strong>Tips for approaching and writing about deep history:</strong>
	<ul>
		<li>
			<em>Respect different historical and narrative traditions</em>. These require consideration in
			their own right; they may reveal something of what happened in the past, but are especially
			valuable in revealing how people think about the past. How does the past explain the present?
			And has the past really passed at all?
		</li>

		<li>
			<em
				>Listen to diverse Indigenous voices, through their earlier records, their recent writings</em
			>. History doesn't have to be a story told only through the eyes of European discoverers or
			researchers.
		</li>

		<li>
			<em>Explore a wide array of evidence</em>. Rock art, song cycles, ancient narratives,
			multi-sensory performances of historical stories. Reflect upon how many Indigenous people may
			not see their Country as holding 'evidence' but rather as offering revelations: the past can
			'break through' into the present, carefully showing itself to its current-day people.
		</li>

		<li>
			<em>The significance of stories of continuity and the everyday</em>. Dates, dating and the
			practice of history as a study of change and turning points may be important, but students
			also need to understand how people also lived their everyday lives in patterns of continuity.
		</li>

		<li>
			<em>Avoid passive voice and passive depictions</em>. In sites where deep history took place,
			you will often hear of how something was 'discovered', dated or chemically analysed. Think
			about the people who wielded the brushes in rock art. Think about the people who did things,
			of actors and agency.
		</li>

		<li>
			<em>Think about gender</em>. Due to the longevity of stone tools and the historical nature of
			the academy, hunting economies are often assumed to be male domains - sites of 'man the
			hunter'. Think beyond these assumptions to consider how people negotiated gender roles and
			identities to create sustainable, flexible societies.
		</li>
	</ul>
</GenericContent>

<GenericContent>
	<h2>Additional Reading - works by author and team</h2>

	<p>
		McGrath, A., Rademaker, L. and Troy, J. (eds). Everywhen: Australia and the Language of Deep
		History. Lincoln: University of Nebraska, 2022 and New South, 2022.
	</p>

	<p>
		McGrath, A., Rademaker, L., Silverstein, B. 'Deep history and deep listening: Indigenous
		knowledges and the narration of deep pasts' in Rethinking History, 2021 DOI:
		10.1080/13642529.2021.1966201
	</p>

	<p>
		McGrath, A. 'People of the Footprints: Rediscovery, Indigenous Historicities and the Science of
		Deep Time', Interventions, 2021, DOI: 10.1080/1369801X.2021.1972822
	</p>

	<p>
		McGrath, A. and Russell, L. eds., The Routledge Companion to Global Indigenous History. London:
		Routledge, 2021.ISBN 978-1-138-74310-6
	</p>

	<p>
		McGrath, A. and Jebb, M. (eds). Long history, deep time: deepening histories of place. Canb:
		ANU, 2015.
	</p>

	<p>
		NOTE: This article was commissioned by and published in Teaching History, the Journal of the
		History Teachers' Association of NSW, March 2022. Permission to Republish is greatly
		appreciated.
	</p>
</GenericContent>

<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	// import { YouTube } from 'sveltekit-embed';

	import { generateSingleMedia, generateSubfolderMedia } from '$lib/imagePaths';
	import { onMount } from 'svelte';
	import { switcher } from '../../stores/sectionSwitcherStore';

	const switcherLinks = [
		{ title: 'Walk to archive', ref: '#rock-walk' },
		{ title: 'Rock archive', ref: '#rock-archive' },
		{ title: 'Protecting sacred sites', ref: '#sacred-sites' },
		{ title: 'Bidjara history', ref: '#bidjara-history' },
		{ title: 'Creek stories', ref: '#creek-stories' }
	];

	import {
		AudioBlock,
		Header,
		GenericContent,
		CaptionScroller,
		Citations,
		Credits,
		Collapsible,
		EmbedYouTube,
		MediaFullWidth,
		Intro,
		ImageSingle,
		QuoteInline,
		QuoteLarge,
		FullScreenStop,
		ScrollStop,
		TwoColumns,
		GalleryOne,
		GalleryTwo,
		WalkOne,
		WalkTwo,
		VideoScrubber
	} from '$lib';

	const singleImageFilenames = [
		'AuntyRita01.jpg',
		'C0008.jpg',
		'C0009.jpg',
		'C0010.jpg',
		'_ANU7346.jpg',
		'Still_C0027.jpg',
		'Walk1.jpg',
		'Walk2.jpg',
		'_ANU6915.jpg',
		'_ANU6921.jpg',
		'_ANU6976.jpg',
		'_ANU7106.jpg',
		'_ANU7118_cropped.jpg',
		'_ANU7135.jpg',
		'_ANU7181.jpg',
		'_ANU7350.jpg',
		'_ANU7376.jpg',
		'_ANU7606.jpg',
		'carnarvon_poster.jpg',
		'jackie_portrait.jpg',
		'reunion.jpg',
		'still_02.jpg',
		'uncle_fred_portrait.jpg',
		'C0001.jpg',
		'C0006.jpg',
		'C0016.jpg',
		'image_poster_C0025.jpg',
		'image_poster_C0027.jpg',
		'image_poster_C0028.jpg'
	];

	const slideshowOneFilenames = [
		'_ANU7560.jpg',
		'_ANU7566.jpg',
		'_ANU7567.jpg',
		'_ANU7581.jpg',
		'_ANU7588.jpg',
		'_ANU7591.jpg'
	];

	const singleVideosFilenames = [
		'C0001.mp4',
		'C0008.mp4',
		'C0009.mp4',
		'C0010.mp4',
		'C0006.mp4',
		'C0016.mp4',
		'C0025.mp4',
		'C0027.mp4',
		'C0028.mp4',
		'carnarvonDrone.mp4',
		'UncleFredArrival.mp4',
		'map1.mp4',
		'map2.mp4'
	];

	const filePathImages = `/stories/carnarvon/images/`;
	const filePathVideo = `/stories/carnarvon/video/`;
	const audio_C0041_AudioOnly2 = `${base}/stories/carnarvon/audio/C0041_AudioOnly2.mp3`;
	const singleImages = generateSingleMedia(`${filePathImages}`, singleImageFilenames);
	const slideshow = generateSubfolderMedia(`${filePathImages}slider`, slideshowOneFilenames);
	const singleVideos = generateSingleMedia(`${filePathVideo}`, singleVideosFilenames);

	const pageTitle = `Walking deep history: Carnarvon Gorge`;

	const sectionOneVideos = [
		{
			markup: [`<p>Walking Carnarvon Gorge takes you down into shaded rainforests...</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0025,
				poster: singleImages.image_poster_C0025,
				autoplay: true
			}
		},
		{
			markup: [`<p>... over creek crossings...</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0027,
				poster: singleImages.image_poster_C0027,
				autoplay: true
			}
		},
		{
			markup: [`<p>... and right alongside the base of the ancient rock shelter.</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0028,
				poster: singleImages.image_poster_C0028,
				autoplay: true
			}
		}
	];

	const sectionTwoVideos = [
		{
			markup: [`<p>Even when the creek is dry, there is a coolness to this Country</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0008,
				poster: singleImages.image_poster_C0008,
				autoplay: true
			}
		},
		{
			markup: [`<p>A valley of palms, ferns, and grasses...</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0009,
				poster: singleImages.image_poster_C0009,
				autoplay: true
			}
		},
		{
			markup: [`<p>...whose path is nestled underneath the rock.</p>`],
			media: {
				type: 'video',
				videoType: 'webm',
				source: singleVideos.C0010,
				poster: singleImages.image_poster_C0010,
				autoplay: true
			}
		}
	];
	const burntGallery = [
		{
			markup: [
				`<p>It takes time to walk the debris-covered track to the site. The destruction is obvious as soon as we arrive.</p>`
			],
			media: {
				type: 'image',
				source: slideshow[0],
				alt: 'An overhanging rock outcrop, blackened and damaged by fire.'
			}
		},
		{
			markup: [
				`<p>The entire rock overhang has been burnt and its painted underside demolished.</p>`
			],
			media: {
				type: 'image',
				source: slideshow[1],
				alt: 'Broken rock on the ground that has fallen from the overhanging rock outcrop.',
				orientation: 'portrait'
			}
		},
		{
			markup: [
				`<p>The destructive power of the fire was fuelled by a plastic walkway and viewing platform that had been built, against community wishes, in 2014.</p>`
			],
			media: {
				type: 'image',
				source: slideshow[2],
				alt: 'The overhanging rock outcrop, showing some remaining pieces of art that have not fallen down.'
			}
		},
		{
			markup: [
				`<p>The supposedly fire-retardant material ignited to create a fire so hot it shattered the rock, reducing enormous slabs of painted walls into piles of rubble.</p>`
			],
			media: {
				type: 'image',
				source: slideshow[3],
				alt: 'The overhanging rock outcrop, showing some remaining pieces of art that have not fallen down.'
			}
		},
		{
			markup: [
				`<p>Plastic fibres remain mixed with the soil and rock. Very few images from the ancient archive survived.</p>`
			],
			media: {
				type: 'image',
				source: slideshow[4],
				alt: 'Piles of broken rock.'
			}
		},
		{
			markup: [`<p>Site photos. Carnarvon Gorge, QLD, 23 March 2022. Photos: Amy Way</p>`],
			media: {
				type: 'image',
				source: slideshow[5],
				alt: 'Pieces of twisted, melted plastic from the boardwalk.'
			}
		},
		{
			markup: [
				`<p>It's like the blueprint has been desecrated, and we cannot rebuild something that was here for thousands and thousands and thousands of years before white man colonisation.</p>`
			],
			media: {
				type: 'image',
				source: singleImages._ANU7606,
				alt: 'Jackie standing with one hand on a walking stick the other hand resting on her hip, surrounded by trees.',
				credit:
					'Professor Jackie Huggins discusses fire damage in Carnarvon Gorge, Queensland, 24 March 2022. Photo: Amy Way.'
			}
		}
	];

	const fireDamage = [
		{
			markup: `<p>"Listen, consult, and action everything that we say."</p> <a class="youtube-button" href="https://www.youtube.com/watch?v=LXrYauhb3Po">
		Watch full interview on YouTube (04:55)
	</a>`,
			media: {
				type: 'image',
				source: singleImages.Still_C0027,
				credit:
					'Professor Jackie Huggins discusses fire damage in Carnarvon Gorge Queensland, 24 March 2022. Photo: Amy Way.',
				alt: 'Close of up Jackie. '
			}
		}
	];

	const endGroupPhoto = [
		{
			markup: `<p>
		Coming back, every time I ask Uncle to come with me and to guide us, to steer us in the right
		direction. And I'm so glad he came for us. - Professor Jackie Huggins
	</p>

	<p>
		Yesterday was a great challenge for both myself and my niece. I'm so proud of going up to the
		Art Gallery yesterday and explaining some of the significancy to the camera. - Uncle Fred
	</p>

	<p>
		Photo: Jackie Huggins refers to Uncle Fred as her 'teacher' and eminent Bidjara knowledge
		holder. Mickey's Creek, Carnarvon Gorge, QLD, 23 March 2022. Photo by Amy Way
	</p>`,
			media: {
				type: 'image',
				source: singleImages._ANU7346,
				alt: 'Jackie and Uncle Fred sitting on some rocks in the Gorge; Jackie is smiling, Uncle Fred is holding his walking stick in one and and pointing to something with the other hand.'
			}
		}
	];

	const map1Text = [
		`<p>
		The National Park is surrounded by government and private property; state forests, cattle
		stations and pastoral leases whose origins date back to the area's violent colonial history.
	</p>`,

		`<p>
		In 1897, after decades of brutal guerrilla warfare between settlers, police, and Aboriginal
		nations, the Queensland colonial government ordered the forced removal of Aboriginal people from
		their Country.
	</p>`,

		`<p>
		Jackie's mother, Rita Huggins, was born in a cave at Carnarvon Gorge in 1922. Not long after,
		Rita and her entire family were forcibly taken from Bidjara Country to Barambah reserve
		(Cherbourg).
	</p>`,
		`<p>The gorge became part of the Carnarvon National Park in 1932.</p>`
	];

	onMount(() => {
		switcher.set(switcherLinks);
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header
	poster={singleImages.carnarvon_poster}
	video={singleVideos.carnarvonDrone}
	type="video/webm"
	name="carnarvon"
	alt=""
	heading="Walking
      deep history"
	subheading="Carnarvon
      Gorge"
	gradientColor="#15150b"
/>

<Intro>
	<p>
		<strong>
			Led by Bidjara elders Uncle Fred 'Cotto' Conway OAM and Professor Jackie Huggins AM.
		</strong>
		<br />
		With Professor Ann McGrath and Dr Amy Way, from the Australian National University.
	</p>

	<p>
		Professor Jackie Huggins and Uncle Fred 'Cotto' Conway share two types of history: deep
		histories and colonial histories.
	</p>

	<p>
		<em>Deep histories</em> don't have a beginning and end date. For millennia, Aboriginal people taught
		their stories, value systems, and encyclopaedic knowledge of the landscape, to be passed on to the
		next generation.
	</p>

	<p>
		Over thousands of years, Aboriginal people have left records of their history through making
		marks on their Country. What many now call rock art sites are a deep history archive, a library
		of knowledge, and a learning space in the past and present.
	</p>

	<p>
		Jackie and Fred show how they practice deep history today. By walking on Country, by listening
		and learning from ancestors, they reinvigorate a long history of connection.
	</p>

	<p>
		<em>Colonial histories</em> are told through European written records and Aboriginal oral accounts.
		Throughout Queensland, colonizers stole Aboriginal land, massacred Aboriginal peoples and ruptured
		families.
	</p>

	<p>
		Jackie and Fred's maternal grandmothers were sisters, both born at the top end of the gorge.
		From 1897, state authorities sought to remove and disconnect Aboriginal survivors from their
		Country, separating them from kin and forcing them to live on government-run Reserves.
	</p>

	<p>
		<strong>Jackie's</strong> mother, Rita, was forcibly taken from Carnarvon Gorge in the back of a
		cattle truck, and sent to Barambah Reserve (later renamed Cherbourg). Rita eventually escaped Cherbourg
		to raise and educate her family in Brisbane. Jackie's research has pioneered the Truth Telling process.
		She gained qualifications in History from the University of Queensland, has written several books,
		many articles, and served on crucial national and state Committees.
	</p>

	<p>
		<strong>Uncle Fred</strong> escaped Woorabinda Reserve to live a travelling life, working in many
		rural occupations. He later went back to his Country, sharing knowledge he learnt from elders with
		anyone who wanted to learn. For over thirty-three and a half years he has shared his bush skills
		with tourists, visitors, and thousands of school children at Carnarvon Gorge.
	</p>
</Intro>

<MediaFullWidth
	image={singleImages._ANU7350}
	alt="Jackie Huggins and Uncle Red ssitting next to one another on some rocks in the gorge. Jackie is smiling; Uncle Fred is gesturing towards the camera."
	caption="Jackie learns from Uncle Fred as he shares Bidjara culture, Mickey's
    Creek, Carnavon Gorge, Queensland, 23 March 2022. Photo: Amy Way."
/>

<MediaFullWidth youTubeId="v0tiqh1Ml04" max={true} />

<WalkOne id="rock-walk" />

<CaptionScroller content={sectionOneVideos} />

<GenericContent>
	<p>
		The path to the gallery leads to a tunnel-like entrance, with high rock walls. As Uncle Fred
		climbs up through it, he starts to speak in language; announcing his arrival and seeking
		permission from his ancestors to bring newcomers to this place. He apologises for how long he
		has been away, and thanks the ancestors for everything they did for him during his cancer
		treatment in Rockhampton.
	</p>
</GenericContent>

<FullScreenStop id="rock-archive">
	<p id="rock-archive">The reunion is intimate.</p>
	<p>
		It is the first time Uncle has been back in almost three years— since his battle with cancer.
	</p>
	<p>Uncle was not sure he would ever be able to return.</p>
	<p>But he was determined to walk that track again.</p>
</FullScreenStop>

<ScrollStop video={singleVideos.UncleFredArrival} alt="" poster={singleImages.reunion} />

<TwoColumns center={true}>
	<div slot="column1">
		<ImageSingle
			width=""
			height=""
			source={singleImages._ANU7118_cropped}
			caption="Uncle Fred explains the significance of the Art Gallery in
		Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way."
			alt="Uncle Fred standing on the boardwalk near the gallery, resting his hands on the railing."
			galleryId="_ANU7118_cropped"
		/>
	</div>

	<div slot="column2">
		<AudioBlock source={audio_C0041_AudioOnly2} />

		<p>"I'm happy to be home. That's why I said <em>yumbagurri</em>. I'm coming home."</p>
	</div>
</TwoColumns>

<GenericContent>
	<p>
		The National Parks calls this place the Art Gallery, but it's more of an archive. Fred uses it
		as a library or repository to tell the deep history of the Bidjara people. Learning to read its
		inscriptions, its markings, reveals how the Bidjara lived, what they believed, and the ways they
		shared that knowledge with others.
	</p>

	<p>
		As Uncle Fred points out, several different Aboriginal groups recorded their deep histories
		here. They nurtured Country in this place. Uncle Fred makes it clear that his explanations
		represent Bidjara knowledge passed down to him from his uncle, Adrian Conway, who worked
		throughout the gorge as an expert Tracker, and other close relatives.
	</p>
</GenericContent>

<GenericContent>
	<ImageSingle
		height="2100"
		width="1400"
		source={singleImages._ANU7106}
		caption="Uncle Fred explaining Bidjara deep history at the Art Gallery in Carnarvon Gorge, QLD, 22
	March 2022. Photo: Amy Way."
		alt="Uncle Fred sitting on the railing, with the rock art gallery behind him; gesturing with his hands."
		galleryId="_ANU7106"
		shadow={true}
	/>
</GenericContent>

<GalleryOne />

<GenericContent>
	<p>
		Uncle Fred describes how these marks have been left on Country, engraved into the rock, painted
		free-hand or stencilled with ochre blown from the mouth. The people who made these marks were
		experts.
	</p>

	<QuoteInline>
		<p>You got to be very, very skilful to do that.</p>
	</QuoteInline>
</GenericContent>

<GenericContent>
	<p>
		One section of the archive has a specific educational purpose for the Bidjara. On a smaller
		piece of rock, standing in front of the main face, are engravings used for sex education.
	</p>
</GenericContent>

<GalleryTwo />

<GenericContent>
	<QuoteInline credit="Uncle Fred Conway">
		<p>Little children like to ask inquisitively, "where do babies come from, mummy and daddy?"</p>
		<p>There it is.</p>
	</QuoteInline>

	<p>
		Images of children's hands and feet cover the rock, alongside innumerable depictions of female
		genitalia.
	</p>

	<QuoteInline credit="Uncle Fred Conway">
		<p>
			Sex education has been around for thousands and thousands of years. Well, put it this way,
			[here] for two and a half thousand according to the archaeologists.
		</p>
	</QuoteInline>

	<p>
		The engravings extend around the curve of the rock face and appear with various animal tracks
		and stencilled handprints. This is a women's place, so Uncle Fred won't venture there or talk
		about this section.
	</p>
</GenericContent>

<MediaFullWidth
	image={singleImages._ANU7135}
	alt="The woman's place in the Art Gallery."
	caption="A woman's place, Art Gallery, Carnarvon Gorge, QLD 22 March 2022.
    Photo: Amy Way."
/>

<GenericContent>
	<p>
		As Uncle Fred explains the meaning of the ochred paintings and stencils, more people arrive at
		the rock site to listen, including two young Rangers who are thrilled to see Uncle has made it
		back to this special place on his Country. Uncle Fred knows every detail of the markings on the
		rock face and is committed to sharing his knowledge of them with everyone.
	</p>

	<p>
		Concerned that his health might prevent him making the trek to the Gallery, the night before our
		walk, Uncle Fred recalled and described every detail of the engravings, paintings and stencils
		on its walls. He visualised each one, carefully explaining their meaning and significance.
	</p>

	<p>
		Bidjara deep history is embodied, shared, and ongoing. It is maintained by connection, and
		reconnection, to Country, and by passing on knowledge and embedding relationships with people.
	</p>
</GenericContent>

<GenericContent>
	<ImageSingle
		width=""
		height=""
		source={singleImages._ANU7181}
		caption="Graffiti at the Art Gallery in Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way."
		alt="Graffiti on the Art Gallery rock wall."
		galleryId="_ANU7181"
	/>
</GenericContent>

<GenericContent>
	<p>
		Uncle Fred, Jackie, and the Rangers work to protect these deep stories from threats which come
		from inside and outside the boundaries of the National Park.
	</p>
</GenericContent>

<VideoScrubber videoUrl={singleVideos.map1} text={map1Text} />

<FullScreenStop>
	<p id="sacred-sites">
		In 2018, an ancient Bidjara rock archive within the park was destroyed by fire.
	</p>
	<p>
		The fire started nearby due to neglect, and burned up and over the hill to desecrate the sacred
		cave structure.
	</p>
	<p>
		At Uncle Fred's request, the site has been closed to the public, its track left by the Rangers
		to be consumed by regrowth.
	</p>
	<p>
		Jackie wants to show us the site. <br />
		She greets her ancestors as we approach, introducing us and seeking their permission to visit.
	</p>
</FullScreenStop>

<ScrollStop id="sacred-sites" youTubeId="uwCshjO59-o"></ScrollStop>

<CaptionScroller content={burntGallery} />

<GenericContent>
	<p>
		The destruction has been devastating for the Bidjara community. This was a sacred place, where
		people gathered, ate together—a women's place, too, where they buried the placentas of their
		babies.
	</p>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>Our babies still live here. Their spirits still linger.</p>
	</QuoteInline>

	<p>
		Jackie and Uncle Fred want this place to rest in peace, but they believe confronting the damage
		will help protect other sites within the park.
	</p>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>People need to acknowledge these beautiful places.</p>

		<p>
			Make sure they're kept in perpetuity, not only for us—we would love that forever, and our
			spirits live on in here—but for white people as well.
		</p>
	</QuoteInline>

	<p>How should they be protected?</p>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>Pure and simple, listen to what the old people are telling you.</p>
	</QuoteInline>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>
			Never think that scientific evidence is the best way to go, because it's the knowledge of our
			people that will stop these places being ruined.
		</p>
	</QuoteInline>

	<p>All quotes above are by Professor Jackie Huggins.</p>
</GenericContent>

<CaptionScroller content={fireDamage} />

<VideoScrubber videoUrl={singleVideos.map2} />

<MediaFullWidth video={singleVideos.C0001} poster={singleImages.C0001} alt="" />

<WalkTwo id="bidjara-history" />

<CaptionScroller content={sectionTwoVideos} />

<TwoColumns center={true}>
	<div slot="column1">
		<ImageSingle
			width=""
			height=""
			source={singleImages.AuntyRita01}
			alt="Rita Huggins, sitting underneath an rock wall covered with red and white tock art. "
			galleryId="AuntyRita01"
		/>
	</div>

	<div slot="column2">
		<p>
			In our land are waterfalls, waterholes and creeks where we swam and where the older people
			fished. Our mob always seemed cool, even on the hottest days, because the country was like an
			oasis.
		</p>
		<p>
			There were huge king ferns. ...They have been described as living fossils because their form
			has not changed for thousands of years.
		</p>

		<p>- Rita Huggins in 'Auntie Rita'</p>

		<p>Image: Rita Huggins, Jackie's mother, in Carnarvon Gorge, QLD. Jane M. Jacobs.</p>
	</div>
</TwoColumns>

<GenericContent id="creek-stories">
	<p>
		Being on Country has such special significance for Jackie and Uncle Fred. After the Covid-19
		pandemic and personal health challenges kept them both away, physically reconnecting with
		Carnarvon Gorge is restorative.
	</p>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>
			I really do feel the ancestors with me. They're guiding me and just nourishing my very soul
			and nurturing me. I think about them as I walk. It's a kind of meditation, I suppose.
		</p>
	</QuoteInline>

	<p>
		Physically being on Country is just as important as being able to maintain relationships and
		share knowledge with others—something the Bidjara have been doing since time began.
	</p>

	<QuoteInline credit="Professor Jackie Huggins">
		<p>
			We all went for walks like this. We sat around, we shared meals, you know? Round the campfire.
			We all cared and protected one another. It's very different from the school textbooks and the
			academic nature of study, because you can't beat this. You're right in the heart of it. You're
			just right in the soul—the vortex of this very beautiful, spiritual Country.
		</p>
	</QuoteInline>

	<p>
		Bidjara deep histories are experienced through being on Country and through story. They are
		stored in personal, familial and community memories—in the physical and spiritual archives of
		rocks, trees, Country and kin.
	</p>
</GenericContent>

<CaptionScroller content={endGroupPhoto} right={true} />

<GenericContent>
	<p>
		Jackie and Uncle Fred use diverse skills to teach their deep histories. For Jackie, studying at
		university and becoming a Professor of history helped her expose the lies of existing colonial
		narratives and gave her the tools to mark Country with words, publications and truth-telling,
		including in the many organisations and Committees she has served - always working for
		historical recognition and justice.
	</p>
	<TwoColumns>
		<div slot="column1">
			<ImageSingle
				width=""
				height=""
				source={singleImages.jackie_portrait}
				alt="Jackie sitting on rocks, smiling at the camera, her hands together in front of her."
				galleryId="jackie_portrait"
			/>
			<a class="youtube-button" href="https://youtu.be/mzZDd21hfug">
				Watch Jackie's full story on YouTube (22:17)
			</a>
		</div>
		<div slot="column2">
			<QuoteInline credit="Professor Jackie Huggins">
				<p>
					We're all about truth telling in our Country now. Where do we start? Well, we start at the
					basic premise, and that is Aboriginal history. The history that needs to be told and needs
					to be shared. I've loved doing that for many years now, in terms of my own research and
					writing—believing that this is an act of love but it's also an act of great consciousness
					and nation building for the whole nation, for Australia. So yeah,that's why I studied
					history, to really bring out those truths that were not there for me and were denied all
					that time ago.
				</p>
			</QuoteInline>
		</div>
	</TwoColumns>

	<p>
		For Uncle Fred, escaping Woorabinda and working throughout Queensland showed him the depth of
		suffering and discrimination inflicted on Aboriginal peoples. Yet it also made him even prouder
		of his culture and more determined to educate others by sharing it.
	</p>

	<TwoColumns>
		<div slot="column1">
			<ImageSingle
				width=""
				height=""
				source={singleImages.uncle_fred_portrait}
				alt="Uncle Fred sitting on rocks, resting his chi on his hands that are folded over the top of his walking stick. "
				galleryId="uncle_fred_portrait"
			/>
			<a class="youtube-button" href="https://youtu.be/NqytF0jltm4">
				Watch Uncle Fred's full story on YouTube (21:48)
			</a>
		</div>
		<div slot="column2">
			<QuoteInline credit="Uncle Fred Conway">
				<p>
					I don't think any Indigenous people on this continent will ever forget how we've been
					treated. That's going to stay with each and every one through their whole life until this
					Earth is finished. That's why I've said throughout my interviews, I've said it to a lot of
					people, I'm a proud Black man. I come here because I am Black. I come here because my
					culture is here.
				</p>
			</QuoteInline>
		</div>
	</TwoColumns>
</GenericContent>

<QuoteLarge credit="Uncle Fred Conway, 2022">
	<p>
		Anybody comes here and asks me questions about my culture, when I talk to them and tell them
		"I'm a happy man, I'm a happy man," that's keeping my culture alive.
	</p>
	<p>And that's what I love talking about, what I am.</p>
</QuoteLarge>

<MediaFullWidth
	video={singleVideos.C0016}
	poster={singleImages.C0016}
	alt=""
	autoplay={true}
	scrollControl={true}
/>

<Collapsible name="referencesCarnarvon" label="References and further reading">
	<ul>
		<li>
			Raymond Evans, Kay Saunders and Kathryn Cronin,
			<em>
				Race relations in colonial Queensland: a history of exclusion, exploitation and
				extermination
			</em>
			(St. Lucia: University of Queensland Press, 1993)
		</li>

		<li>
			Natalie R. Franklin, 'Visitor books in the management of rock art sites: An evaluation using
			Carnarvon Gorge as a test case,'
			<em>Rock Art Research</em> 28:2 (2011): 251-264.
		</li>

		<li>
			Marisa Giorgi and Paul S. C. Taçon, 'Carnarvon Gorge: Safekeeping a place and Indigenous
			agency within rock art research and management,' <em>Australian Archaeology</em> 85:2 (2019): 184-195.
		</li>

		<li>
			Jackie Huggins, 'White Aprons, Black Hands: Aboriginal Women Domestic Servants in Queensland,' <em
				>Labour History</em
			> 69 (1995): 188-195
		</li>

		<li>
			Jackie Huggins,
			<em> Sister Girl: Reflections on Tiddaism, Identity and Reconciliation </em>
			(St Lucia: University of Queensland Press, 2022)
		</li>

		<li>
			Jackie Huggins and Ngaire Jarro, <em>Jack of Hearts: QX11594</em>
			(Broome: Magabala Books, 2022)
		</li>

		<li>
			Jackie Huggins, Rita Huggins and Jane M. Jacobs, 'Korramindanjie: Place and the Postcolonial,' <em
				>History Workshop Journal</em
			> 39 (1995): 164-181.
		</li>

		<li>
			Rita Huggins and Jackie Huggins, <em>Auntie Rita</em> (Canberra: Aboriginal Studies Press, 1996)
		</li>

		<li>
			Erin Semmler, 'Queensland cancer battler Fred Conway wants to close the healthcare gap,' <em
				>ABC News</em
			>, February 9, 2022
		</li>

		<li>
			Erin Semmler, 'Indigenous rangers at Carnarvon Gorge in Queensland stoked to be working on
			country,' <em>ABC News/ABC Capricornia</em>, October 14, 2021
		</li>
	</ul>
</Collapsible>

<Credits
	credits={[
		{
			title: 'Collaborating scholars',
			names: "Bidjara elders: Uncle Fred 'Cotto' Conway, Jackie Huggins"
		},
		{ title: 'Words', names: 'Amy Way, Ann McGrath' },
		{ title: 'Photography, video, and story design', names: 'Amy Way' },
		{
			title: 'Appearing',
			names: 'Former National Park Rangers: Bernice Sigley, Kristine Sloman'
		},
		{ title: 'Marking Country Project Manager', names: 'Mike Jones' },
		{ title: 'Developer', names: 'Tabassum Fakier' },
		{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' }
	]}
>
	<p>
		Produced for Marking Country as part of the Australian Research Council Kathleen Fitzpatrick
		Laureate Project.
	</p>
	<p>
		<em>Rediscovering the deep human past: global networks, future opportunities (FL170100121) </em>
		at the Australian National University, Canberra.
	</p>
</Credits>

<Citations
	citations={[
		{
			insert: 'this page',
			authors: 'Uncle Fred Conway, Jackie Huggins, Amy Way and Ann McGrath (2022)'
		},
		{
			insert: 'Uncle Fred Conway',
			authors:
				'Uncle Fred Conway cited in Uncle Fred Conway, Jackie Huggins, Amy Way and Ann McGrath (2022)'
		},
		{
			insert: 'Jackie Huggins',
			authors:
				'Jackie Huggins cited in Uncle Fred Conway, Jackie Huggins, Amy Way and Ann McGrath (2022)'
		}
	]}
	location={$page.url.href}
	page={pageTitle}
/>

<style>
	.youtube-button {
		text-align: center;
		display: block;
		width: 100%;
		border-radius: 4px;
		color: #ffffff;
		background-color: var(--clr-clay);
		padding: 0.8rem 1.2rem;
		margin-top: 1.6rem;
	}

	.youtube-button:hover {
		background-color: #97554f;
	}
</style>

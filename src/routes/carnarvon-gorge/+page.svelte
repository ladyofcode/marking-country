<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { YouTube } from 'sveltekit-embed';

	import Header from '$lib/components/Header.svelte';
	import GenericContent from '$lib/layout/GenericContent.svelte';
	import Citations from '$lib/components/Citations.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import Collapsible from '$lib/components/Collapsible.svelte';
	import TwoColumnContent from '$lib/layout/TwoColumnContent.svelte';
	import MediaFullWidth from '$lib/components/MediaFullWidth.svelte';
	import ImageSliderFullscreen from '$lib/components/ImageSliderFullscreen.svelte';
	import AudioFullWidth from '$lib/components/AudioFullWidth.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import InlineQuote from '$lib/components/InlineQuote.svelte';
	import LargeQuote from '$lib/components/LargeQuote.svelte';
	import ScrollingCaption from '$lib/components/ScrollingCaption.svelte';
	import FullScreenStop from '$lib/components/FullScreenStop.svelte';
	import ScrollStop from '$lib/components/ScrollStop.svelte';

	import GalleryOne from '$lib/components/carnarvon/GalleryOne.svelte';
	import GalleryTwo from '$lib/components/carnarvon/GalleryTwo.svelte';
	import WalkOne from '$lib/components/carnarvon/WalkOne.svelte';
	import WalkTwo from '$lib/components/carnarvon/WalkTwo.svelte';

	let audio_C0041_AudioOnly2 = `${base}/stories/carnarvon/audio/C0041_AudioOnly2.mp3`;

	let image_aunty_rita = `${base}/stories/carnarvon/images/AuntyRita01.jpg`;
	let image_C0008 = `${base}/stories/carnarvon/images/C0008.jpg`;
	let image_C0009 = `${base}/stories/carnarvon/images/C0009.jpg`;
	let image_C0010 = `${base}/stories/carnarvon/images/C0010.jpg`;
	let image_groupPhoto = `${base}/stories/carnarvon/images/_ANU7346.jpg`;
	let image_still_C0027 = `${base}/stories/carnarvon/images/Still_C0027.jpg`;
	let image_walk1 = `${base}/stories/carnarvon/images/Walk1.jpg`;
	let image_walk2 = `${base}/stories/carnarvon/images/Walk2.jpg`;
	let image_ANU6915 = `${base}/stories/carnarvon/images/_ANU6915.jpg`;
	let image_ANU6921 = `${base}/stories/carnarvon/images/_ANU6921.jpg`;
	let image_ANU6976 = `${base}/stories/carnarvon/images/_ANU6976.jpg`;
	let image_ANU7106 = `${base}/stories/carnarvon/images/_ANU7106.jpg`;
	let image_ANU7118_cropped = `${base}/stories/carnarvon/images/_ANU7118_cropped.jpg`;
	let image_ANU7135 = `${base}/stories/carnarvon/images/_ANU7135.jpg`;
	let image_ANU7181 = `${base}/stories/carnarvon/images/_ANU7181.jpg`;
	let image_ANU7350 = `${base}/stories/carnarvon/images/_ANU7350.jpg`;
	let image_ANU7376 = `${base}/stories/carnarvon/images/_ANU7376.jpg`;
	let image_ANU7606 = `${base}/stories/carnarvon/images/_ANU7606.jpg`;
	let image_poster_carnarvon = `${base}/stories/carnarvon/images/carnarvon_poster.jpg`;
	let image_jackie_portrait = `${base}/stories/carnarvon/images/jackie_portrait.jpg`;
	let image_poster_reunion = `${base}/stories/carnarvon/images/reunion.jpg`;
	let image_still_02 = `${base}/stories/carnarvon/images/still_02.jpg`;
	let image_uncle_fred_portrait = `${base}/stories/carnarvon/images/uncle_fred_portrait.jpg`;

	let slideshowOne1 = `${base}/stories/carnarvon/images/slider/_ANU7560.jpg`;
	let slideshowOne2 = `${base}/stories/carnarvon/images/slider/_ANU7566.jpg`;
	let slideshowOne3 = `${base}/stories/carnarvon/images/slider/_ANU7567.jpg`;
	let slideshowOne4 = `${base}/stories/carnarvon/images/slider/_ANU7581.jpg`;
	let slideshowOne5 = `${base}/stories/carnarvon/images/slider/_ANU7588.jpg`;
	let slideshowOne6 = `${base}/stories/carnarvon/images/slider/_ANU7591.jpg`;

	let image_poster_drone = `${base}/stories/carnarvon/images/carnarvon_poster.jpg`;
	let image_C0001_poster = `${base}/stories/carnarvon/videos/C0001.jpg`;
	let image_C0006_poster = `${base}/stories/carnarvon/videos/C0006.jpg`;
	let image_poster_C0016 = `${base}/stories/carnarvon/videos/C0016.jpg`;
	let image_poster_C0025 = `${base}/stories/carnarvon/images/image_poster_C0025.jpg`;
	let image_poster_C0027 = `${base}/stories/carnarvon/images/image_poster_C0027.jpg`;
	let image_poster_C0028 = `${base}/stories/carnarvon/images/image_poster_C0028.jpg`;
	let image_poster_C0009 = `${base}/stories/carnarvon/images/image_poster_C0028.jpg`;
	let image_poster_C0008 = `${base}/stories/carnarvon/images/image_poster_C0028.jpg`;
	let image_poster_C0010 = `${base}/stories/carnarvon/images/image_poster_C0028.jpg`;

	let video_C0001 = `${base}/stories/carnarvon/videos/C0001.webm`;
	let video_C0008 = `${base}/stories/carnarvon/videos/C0008.webm`;
	let video_C0009 = `${base}/stories/carnarvon/videos/C0009.webm`;
	let video_C0010 = `${base}/stories/carnarvon/videos/C0010.webm`;
	let video_C0006 = `${base}/stories/carnarvon/videos/C0006.webm`;
	let video_C0016 = `${base}/stories/carnarvon/videos/C0016.webm`;
	let video_C0025 = `${base}/stories/carnarvon/videos/C0025.webm`;
	let video_C0027 = `${base}/stories/carnarvon/videos/C0027.webm`;
	let video_C0028 = `${base}/stories/carnarvon/videos/C0028.webm`;
	let video_carnarvon_drone = `${base}/stories/carnarvon/videos/carnarvonDrone.webm`;
	let video_UncleFredArrival = `${base}/stories/carnarvon/videos/UncleFredArrival.webm`;

	const slideshowOne = [
		{
			url: slideshowOne1,
			caption: '',
			link: ''
		},
		{
			url: slideshowOne2,
			caption: '',
			link: ''
		},
		{
			url: slideshowOne3,
			caption: '',
			link: ''
		},
		{
			url: slideshowOne4,
			caption: '',
			link: ''
		},
		{
			url: slideshowOne5,
			caption: '',
			link: ''
		},
		{
			url: slideshowOne6,
			caption: '',
			link: ''
		}
	];

	const pageTitle = `Walking deep history: Carnarvon Gorge`;
</script>

<Header
	poster={image_poster_carnarvon}
	video={video_carnarvon_drone}
	type="video/webm"
	name="carnarvon"
	alt=""
	heading="Walking
      deep history"
	subheading="Carnarvon
      Gorge"
	  gradientColor="#15150b"
/>

<Intro intro="carnarvon">
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
		<em>Deep histories</em> don't have a beginning and end date. For millennia, Aboriginal people
		taught their stories, value systems, and encyclopaedic knowledge of the landscape, to be passed
		on to the next generation.
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
		<em>Colonial histories</em> are told through European written records and Aboriginal oral
		accounts. Throughout Queensland, colonizers stole Aboriginal land, massacred Aboriginal peoples
		and ruptured families. 
	</p>

	<p>
		Jackie and Fred's maternal grandmothers were sisters, both born at the top end of the gorge.
		From 1897, state authorities sought to remove and disconnect Aboriginal survivors from their
		Country, separating them from kin and forcing them to live on government-run Reserves. 
	</p>

	<p>
		<strong>Jackie's</strong> mother, Rita, was forcibly taken from Carnarvon Gorge in the back of a
		cattle truck, and sent to Barambah Reserve (later renamed Cherbourg). Rita eventually escaped
		Cherbourg to raise and educate her family in Brisbane. Jackie's research has pioneered the Truth
		Telling process. She gained qualifications in History from the University of Queensland, has
		written several books, many articles, and served on crucial national and state Committees. 
	</p>

	<p>
		<strong>Uncle Fred</strong> escaped Woorabinda Reserve to live a travelling life, working in many
		rural occupations. He later went back to his Country, sharing knowledge he learnt from elders with
		anyone who wanted to learn. For over thirty-three and a half years he has shared his bush skills
		with tourists, visitors, and thousands of school children at Carnarvon Gorge.
	</p>
</Intro>

<MediaFullWidth
	image={image_ANU7350}
	alt="Jackie Huggins and Uncle Red ssitting next to one another on some rocks in the gorge. Jackie is smiling; Uncle Fred is gesturing towards the camera."
	caption="Jackie learns from Uncle Fred as he shares Bidjara culture, Mickey's
    Creek, Carnavon Gorge, Queensland, 23 March 2022. Photo: Amy Way."
/>

<!-- <GenericContent>
	<div className={`${styles.quickLinks}`}>
		<h2>Quick links</h2>
		<ul className={styles.quickLinks}>
			<li>
				<a href="#rock-walk">Walk with Uncle to the rock archive</a>
			</li>
			<li>
				<a href="#rock-archive">Skip to the rock archive</a>
			</li>
			<li>
				<a href="#sacred-sites"> Protecting sacred sites</a>
			</li>
			<li>
				<a href="#bidjara-history"> Learn Bidjara history along Mickey's Creek </a>
			</li>
			<li>
				<a href="#creek-stories">Skip to Creek stories</a>
			</li>
		</ul>

		<br />
		<p>Scroll to take the full journey</p>
		<svg width="24" height="auto" viewBox="0 0 512.02 319.26">
			<path
				fill="#C26F67"
				d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"
			/>
		</svg>
	</div>
</GenericContent> -->

<MediaFullWidth youTubeId="v0tiqh1Ml04" />

<!-- <VideoEmbedFullWidth>
      <iframe
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/v0tiqh1Ml04?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </VideoEmbedFullWidth> -->

<WalkOne />

<ScrollingCaption
	id="trio1"
	video={video_C0025}
	type="video/webm"
	caption="left"
	alt=""
	poster={image_poster_C0025}
	autoplay={true}
>
	<p>Walking Carnarvon Gorge takes you down into shaded rainforests...</p>
</ScrollingCaption>

<ScrollingCaption
	id="trio2"
	video={video_C0027}
	type="video/webm"
	caption="left"
	alt=""
	poster={image_poster_C0027}
	autoplay={true}
>
	<p>... over creek crossings...</p>
</ScrollingCaption>

<ScrollingCaption
	id="trio3"
	video={video_C0028}
	caption="left"
	type="video/webm"
	alt=""
	poster={image_poster_C0028}
	autoplay={true}
>
	<p>... and right alongside the base of the ancient rock shelter.</p>
</ScrollingCaption>

<GenericContent>
	<p>
		The path to the gallery leads to a tunnel-like entrance, with high rock walls. As Uncle Fred
		climbs up through it, he starts to speak in language; announcing his arrival and seeking
		permission from his ancestors to bring newcomers to this place. He apologises for how long he
		has been away, and thanks the ancestors for everything they did for him during his cancer
		treatment in Rockhampton.
	</p>
</GenericContent>

<FullScreenStop>
      <p id="rock-archive">The reunion is intimate.</p>
      <p>
        It is the first time Uncle has been back in almost three years— since
        his battle with cancer.
      </p>
      <p>Uncle was not sure he would ever be able to return.</p>
      <p>But he was determined to walk that track again.</p>
    </FullScreenStop>

<ScrollStop
      video={video_UncleFredArrival}
      alt=""
      poster={image_poster_reunion}
    />

<ScrollingCaption
	image={image_ANU7118_cropped}
	caption="right"
	credit="Uncle Fred explains the significance of the Art Gallery in
    Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way."
	orientation="portrait"
	alt="Uncle Fred standing on the boardwalk near the gallery, resting his hands on the railing."
>
	<audio src={audio_C0041_AudioOnly2} controls />

	<p>"I'm happy to be home. That's why I said <em>yumbagurri</em>. I'm coming home."</p>
</ScrollingCaption>

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
	<figure>
		<img src={image_ANU7106} alt="Uncle Fred sitting on the railing, with the rock art gallery behind him; gesturing with his hands." />
		<figcaption>
			Uncle Fred explaining Bidjara deep history at the Art Gallery in Carnarvon Gorge, QLD, 22
			March 2022. Photo: Amy Way.
		</figcaption>
	</figure>
</GenericContent>

<GalleryOne />

<GenericContent>
	<p>
		Uncle Fred describes how these marks have been left on Country, engraved into the rock, painted
		free-hand or stencilled with ochre blown from the mouth. The people who made these marks were
		experts.
	</p>

	<InlineQuote>
		<p>You got to be very, very skilful to do that.</p>
	</InlineQuote>
</GenericContent>

<GenericContent>
	<p>
		One section of the archive has a specific educational purpose for the Bidjara. On a smaller
		piece of rock, standing in front of the main face, are engravings used for sex education.
	</p>
</GenericContent>

<GalleryTwo />

<GenericContent>
	<InlineQuote credit="Uncle Fred Conway">
		<p>Little children like to ask inquisitively, "where do babies come from, mummy and daddy?"</p>
		<p>There it is.</p>
	</InlineQuote>

	<p>
		Images of children's hands and feet cover the rock, alongside innumerable depictions of female
		genitalia.
	</p>

	<InlineQuote credit="Uncle Fred Conway">
		<p>
			Sex education has been around for thousands and thousands of years. Well, put it this way,
			[here] for two and a half thousand according to the archaeologists.
		</p>
	</InlineQuote>

	<p>
		The engravings extend around the curve of the rock face and appear with various animal tracks
		and stencilled handprints. This is a women's place, so Uncle Fred won't venture there or talk
		about this section.
	</p>
</GenericContent>

<MediaFullWidth
	image={image_ANU7135}
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
	<figure>
		<img src={image_ANU7181} alt="Graffiti on the Art Gallery rock wall." />
		<figcaption>
			Graffiti at the Art Gallery in Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way.
		</figcaption>
	</figure>
</GenericContent>

<GenericContent>
	<p>
		Uncle Fred, Jackie, and the Rangers work to protect these deep stories from threats which come
		from inside and outside the boundaries of the National Park.
	</p>
</GenericContent>

<GenericContent>
	<p>
		The National Park is surrounded by government and private property; state forests, cattle
		stations and pastoral leases whose origins date back to the area's violent colonial history.
	</p>

	<p>
		In 1897, after decades of brutal guerrilla warfare between settlers, police, and Aboriginal
		nations, the Queensland colonial government ordered the forced removal of Aboriginal people from
		their Country.
	</p>

	<p>
		Jackie's mother, Rita Huggins, was born in a cave at Carnarvon Gorge in 1922. Not long after,
		Rita and her entire family were forcibly taken from Bidjara Country to Barambah reserve
		(Cherbourg).
	</p>
	<p>The gorge became part of the Carnarvon National Park in 1932.</p>
</GenericContent>

<FullScreenStop>
      <p id="sacred-sites">
        In 2018, an ancient Bidjara rock archive within the park was destroyed
        by fire.
      </p>
      <p>
        The fire started nearby due to neglect, and burned up and over the
        hill to desecrate the sacred cave structure.
      </p>
      <p>
        At Uncle Fred's request, the site has been closed to the public, its
        track left by the Rangers to be consumed by regrowth.
      </p>
      <p>
        Jackie wants to show us the site. <br />
        She greets her ancestors as we approach, introducing us and seeking
        their permission to visit.
      </p>
    </FullScreenStop>

<ScrollStop>
	<YouTube youTubeId="/uwCshjO59-o" />
      <!-- <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/uwCshjO59-o?rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> -->
    </ScrollStop>

<ScrollingCaption image={slideshowOne1} alt="An overhanging rock outcrop, blackened and damaged by fire. " caption="left">
	<p>
		It takes time to walk the debris-covered track to the site. The destruction is obvious as soon
		as we arrive.
	</p>
</ScrollingCaption>

<ScrollingCaption image={slideshowOne2} alt="Broken rock on the ground that has fallen from the overhanging rock outcrop." caption="left" orientation="portrait">
	<p>The entire rock overhang has been burnt and its painted underside demolished.</p>
</ScrollingCaption>

<ScrollingCaption image={slideshowOne3} alt="The overhanging rock outcrop, showing some remaining pieces of art that have not fallen down." caption="left">
	<p>
		The destructive power of the fire was fuelled by a plastic walkway and viewing platform that had
		been built, against community wishes, in 2014.
	</p>
</ScrollingCaption>

<ScrollingCaption image={slideshowOne4} alt="The overhanging rock outcrop, showing some remaining pieces of art that have not fallen down." caption="left">
	<p>
		The supposedly fire-retardant material ignited to create a fire so hot it shattered the rock,
		reducing enormous slabs of painted walls into piles of rubble.
	</p>
</ScrollingCaption>

<ScrollingCaption image={slideshowOne5} alt="Piles of broken rock." caption="left">
	<p>
		Plastic fibres remain mixed with the soil and rock. Very few images from the ancient archive
		survived.
	</p>
</ScrollingCaption>
<ScrollingCaption image={slideshowOne6} alt="Pieces of twisted, melted plastic from the boardwalk." caption="left">
	<p>Site photos. Carnarvon Gorge, QLD, 23 March 2022. Photos: Amy Way</p>
</ScrollingCaption>

<ScrollingCaption
	image={image_ANU7606}
	alt="Jackie standing with one hand on a walking stick the other hand resting on her hip, surrounded by trees. "
	credit="Professor Jackie Huggins discusses fire damage in Carnarvon Gorge,
      Queensland, 24 March 2022. Photo: Amy Way."
	align="right"
	caption="left"
>
	<p>
		It's like the blueprint has been desecrated, and we cannot rebuild something that was here for
		thousands and thousands and thousands of years before white man colonisation.
	</p>
</ScrollingCaption>

<GenericContent>
	<p>
		The destruction has been devastating for the Bidjara community. This was a sacred place, where
		people gathered, ate together—a women's place, too, where they buried the placentas of their
		babies.
	</p>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>Our babies still live here. Their spirits still linger.</p>
	</InlineQuote>

	<p>
		Jackie and Uncle Fred want this place to rest in peace, but they believe confronting the damage
		will help protect other sites within the park.
	</p>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>People need to acknowledge these beautiful places.</p>

		<p>
			Make sure they're kept in perpetuity, not only for us—we would love that forever, and our
			spirits live on in here—but for white people as well.
		</p>
	</InlineQuote>

	<p>How should they be protected?</p>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>Pure and simple, listen to what the old people are telling you.</p>
	</InlineQuote>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>
			Never think that scientific evidence is the best way to go, because it's the knowledge of our
			people that will stop these places being ruined.
		</p>
	</InlineQuote>

	<p>All quotes above are by Professor Jackie Huggins.</p>
</GenericContent>

<ScrollingCaption
	image={image_still_C0027}
	credit="Professor Jackie Huggins discusses fire damage in Carnarvon Gorge,
    Queensland, 24 March 2022. Photo: Amy Way."
	alt="Close of up Jackie. "
	caption="left"
>
	<p>"Listen, consult, and action everything that we say."</p>

	<a class="youtube-button" href="https://www.youtube.com/watch?v=LXrYauhb3Po">
		Watch full interview on YouTube (04:55)
	</a>
</ScrollingCaption>

<MediaFullWidth video={video_C0001} poster={image_C0001_poster} alt="" />

<WalkTwo />

<ScrollingCaption video={video_C0008} alt="" poster={image_poster_C0008} caption="left" autoplay={true}>
	<p>Even when the creek is dry, there is a coolness to this Country</p>
</ScrollingCaption>

<ScrollingCaption video={video_C0009} alt="" poster={image_poster_C0009} caption="left" autoplay={true}>
	<p>A valley of palms, ferns, and grasses...</p>
</ScrollingCaption>

<ScrollingCaption video={video_C0010} alt="" poster={image_poster_C0010} caption="left" autoplay={true}>
	<p>...whose path is nestled underneath the rock.</p>
</ScrollingCaption>


<!-- caption="Rita Huggins, Jackie's mother, in Carnarvon Gorge, QLD. Photo:
Jane M. Jacobs" -->
    <ScrollingCaption
      image={image_aunty_rita}
      orientation="portrait"
	caption="right"
	alt="Rita Huggins, sitting underneath an rock wall covered with red and white tock art. "
    >

      <p>
        In our land are waterfalls, waterholes and creeks where we swam
        and where the older people fished. Our mob always seemed cool,
        even on the hottest days, because the country was like an oasis.
      </p>
      <p>
        There were huge king ferns. ...They have been described as
        living fossils because their form has not changed for thousands
        of years.
      </p>

      <p>- Rita Huggins in 'Auntie Rita'</p>

	  <p>Image: Rita Huggins, Jackie's mother, in Carnarvon Gorge, QLD. Jane M. Jacobs.</p>

    </ScrollingCaption>

<GenericContent>
	<p id="creek-stories">
		Being on Country has such special significance for Jackie and Uncle Fred. After the Covid-19
		pandemic and personal health challenges kept them both away, physically reconnecting with
		Carnarvon Gorge is restorative.
	</p>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>
			I really do feel the ancestors with me. They're guiding me and just nourishing my very soul
			and nurturing me. I think about them as I walk. It's a kind of meditation, I suppose.
		</p>
	</InlineQuote>

	<p>
		Physically being on Country is just as important as being able to maintain relationships and
		share knowledge with others—something the Bidjara have been doing since time began.
	</p>

	<InlineQuote credit="Professor Jackie Huggins">
		<p>
			We all went for walks like this. We sat around, we shared meals, you know? Round the campfire.
			We all cared and protected one another. It's very different from the school textbooks and the
			academic nature of study, because you can't beat this. You're right in the heart of it. You're
			just right in the soul—the vortex of this very beautiful, spiritual Country.
		</p>
	</InlineQuote>

	<p>
		Bidjara deep histories are experienced through being on Country and through story. They are
		stored in personal, familial and community memories—in the physical and spiritual archives of
		rocks, trees, Country and kin.
	</p>
</GenericContent>


    <ScrollingCaption align="left" id="groupPhoto" image={image_groupPhoto} caption="right" alt="Jakcie and Uncle Fred sitting on some rocks in the Gorge; Jackie is smiling, Uncle Fred is holding his walking stick in one and and pointing to something with the other hand."
    >
      <p>Coming back, every time I ask Uncle to come with me
        and to guide us, to steer us in the right direction.
        And I'm so glad he came for us. - Professor Jackie Huggins</p>

      <p>Yesterday was a great challenge for both myself
        and my niece. I'm so proud of going up to the Art Gallery
        yesterday and explaining some of the significancy to the camera. - Uncle Fred</p>

      <p>Photo: Jackie Huggins refers to Uncle Fred as her 'teacher' and eminent Bidjara knowledge holder. Mickey's Creek, Carnarvon Gorge, QLD, 23 March 2022. Photo by Amy Way</p>
    </ScrollingCaption>

<GenericContent>
	<p>
		Jackie and Uncle Fred use diverse skills to teach their deep histories. For Jackie, studying at
		university and becoming a Professor of history helped her expose the lies of existing colonial
		narratives and gave her the tools to mark Country with words, publications and truth-telling,
		including in the many organisations and Committees she has served - always working for
		historical recognition and justice.
	</p>
	<TwoColumnContent>
		<div>
			<figure>
				<img src={image_jackie_portrait} alt="Jackie sitting on rocks, smiling at the camera, her hands together in front of her." />
			</figure>
			<a class="youtube-button" href="https://youtu.be/mzZDd21hfug">
				Watch Jackie's full story on YouTube (22:17)
			</a>
		</div>
		<div>
			<InlineQuote credit="Professor Jackie Huggins">
				<p>
					We're all about truth telling in our Country now. Where do we start? Well, we start at the
					basic premise, and that is Aboriginal history. The history that needs to be told and needs
					to be shared. I've loved doing that for many years now, in terms of my own research and
					writing—believing that this is an act of love but it's also an act of great consciousness
					and nation building for the whole nation, for Australia. So yeah,that's why I studied
					history, to really bring out those truths that were not there for me and were denied all
					that time ago.
				</p>
			</InlineQuote>
		</div>
	</TwoColumnContent>

	<p>
		For Uncle Fred, escaping Woorabinda and working throughout Queensland showed him the depth of
		suffering and discrimination inflicted on Aboriginal peoples. Yet it also made him even prouder
		of his culture and more determined to educate others by sharing it. 
	</p>

	<TwoColumnContent>
		<div>
			<figure>
				<img src={image_uncle_fred_portrait} alt="Uncle Fred sitting on rocks, resting his chi on his hands that are folded over the top of his walking stick. " />
			</figure>
			<a class="youtube-button" href="https://youtu.be/NqytF0jltm4">
				Watch Uncle Fred's full story on YouTube (21:48)
			</a>
		</div>
		<div>
			<InlineQuote credit="Uncle Fred Conway">
				<p>
					I don't think any Indigenous people on this continent will ever forget how we've been
					treated. That's going to stay with each and every one through their whole life until this
					Earth is finished. That's why I've said throughout my interviews, I've said it to a lot of
					people, I'm a proud Black man. I come here because I am Black. I come here because my
					culture is here.
				</p>
			</InlineQuote>
		</div>
	</TwoColumnContent>
</GenericContent>

<LargeQuote credit="Uncle Fred Conway, 2022">
	<p>
		Anybody comes here and asks me questions about my culture, when I talk to them and tell them
		"I'm a happy man, I'm a happy man," that's keeping my culture alive.
	</p>
	<p>And that's what I love talking about, what I am.</p>
</LargeQuote>

<MediaFullWidth video={video_C0016} poster={image_poster_C0016} alt="" autoplay={true} />

<GenericContent>
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
				agency within rock art research and management,' <em>Australian Archaeology</em> 85:2 (2019):
				184-195.
			</li>

			<li>
				Jackie Huggins, 'White Aprons, Black Hands: Aboriginal Women Domestic Servants in
				Queensland,' <em>Labour History</em> 69 (1995): 188-195
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
				Jackie Huggins, Rita Huggins and Jane M. Jacobs, 'Korramindanjie: Place and the
				Postcolonial,' <em>History Workshop Journal</em> 39 (1995): 164-181.
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
</GenericContent>

<GenericContent>
	<h2>Credits</h2>

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
	/>

	<p>
		Produced for Marking Country as part of the Australian Research Council Kathleen Fitzpatrick
		Laureate Project.
	</p>
	<p>
		<em>Rediscovering the deep human past: global networks, future opportunities (FL170100121) </em>
		at the Australian National University, Canberra.
	</p>
</GenericContent>

<GenericContent>
	<h2>Citations</h2>

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
</GenericContent>

<style>
	.youtube-button {
		text-align: center;
		display: block;
		width: 100%;
		border-radius: 4px;
		color: #ffffff;
		background-color: var(--color-terracotta);
		padding: 0.8rem 1.2rem;
		margin-top: 1.6rem;
	}

	.youtube-button:hover {
		background-color: #97554f;
	}
</style>

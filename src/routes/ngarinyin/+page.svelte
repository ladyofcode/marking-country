<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Vimeo } from 'sveltekit-embed';

	import {
		GenericContent,
		InlineQuote,
		Citations,
		Credits,
		Header,
		Intro,
		Collapsible,
		TwoColumnContent,
		ImageSliderFullscreen,
		Warning,
		MararddaMap
	} from '$lib';

	let davidMowaljarlai = `${base}/stories/ngarinyin/audio/David-Mowaljarlai-when-earth-soft-Edols-1974.mp3`;
	let chloe = `${base}/stories/ngarinyin/images/Chloe-Nulgit_Collecting algae 02-Mummery-06062022.jpg`;
	let jalala = `${base}/stories/ngarinyin/images/Jalala_MtHartMarkingStones07.jpg`;
	let matthew = `${base}/stories/ngarinyin/images/Matthew-Dembal-Martin_sings-06062022_RCDH.jpg`;
	let pansy = `${base}/stories/ngarinyin/images/Pansy-Nulgit_06062022_Tim-Mummery_RCDH3.jpg`;
	let phillip = `${base}/stories/ngarinyin/images/Phillip-Cracker-Duckhole_ at creek_RCDH.jpg`;
	let sherika = `${base}/stories/ngarinyin/images/Sherika-Duckhole-Tim-Mummery_2022.jpg`;
	let makingSlideshow1 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf01.jpg`;
	let makingSlideshow2 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf02.jpg`;
	let makingSlideshow3 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf03.jpg`;
	let makingSlideshow4 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf04.jpg`;
	let makingSlideshow5 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf05.jpg`;
	let makingSlideshow6 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf06.jpg`;
	let makingSlideshow7 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf07.jpg`;
	let makingSlideshow8 = `${base}/stories/ngarinyin/images/making_of_slideshow/MakingOf08.jpg`;
	let image_poster_ngarinyin = `${base}/stories/ngarinyin/images/ngarinyin_poster.jpg`;
	let image_ngarinyin_header = `${base}/stories/ngarinyin/images/ngarinyin_header.jpg`;
	let wurduSlideshow1 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow01.jpg`;
	let wurduSlideshow2 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow02.jpg`;
	let wurduSlideshow3 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow03.jpg`;
	let wurduSlideshow4 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow04.jpg`;
	let wurduSlideshow5 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow05.jpg`;
	let wurduSlideshow6 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow06.jpg`;
	let wurduSlideshow7 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow07.jpg`;
	let wurduSlideshow8 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow08.jpg`;
	let wurduSlideshow9 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow09.jpg`;
	let wurduSlideshow10 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow10.jpg`;
	let wurduSlideshow11 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow11.jpg`;
	let wurduSlideshow12 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow12.jpg`;
	let wurduSlideshow13 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow13.jpg`;
	let wurduSlideshow14 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow14.jpg`;
	let wurduSlideshow15 = `${base}/stories/ngarinyin/images/wurdu_slideshow/WurduSlideshow15.jpg`;
	let video_NgarinyinOpening = `${base}/stories/ngarinyin/videos/NgarinyinOpening.webm`;

	const pageTitle = `Marardda: Stories from Ngarinyin Country`;

	const slideshowOne = [
		{
			url: wurduSlideshow1,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow2,
			caption: 'Collecting Jalagu (algae) for Wurdu. Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow3,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow4,
			caption: 'Burning Jalagu to make smoke. Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow5,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow6,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow7,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow8,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow9,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow10,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow11,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow12,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow13,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow14,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		},
		{
			url: wurduSlideshow15,
			caption: 'Photo: Tim Mummery 2022.',
			link: ''
		}
	];

	const slideShowTwo = [
		{
			url: makingSlideshow1,
			caption:
				'Nulgit (Pansy) recording at Durdu-ngardi, Barker Pool. Camera person Tim Mummery, Ann McGrath sitting, Mary Anne Jebb standing. Photo: Lotte Waters 2022.',
			link: ''
		},
		{
			url: makingSlideshow2,
			caption:
				'Ann McGrath interviews Matthew Dembal Martin (seated). Camera Tim Mummery. Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			url: makingSlideshow3,
			caption:
				'Smoking people when they visit Country, led by Nulgit (Pansy). Photo: Ann McGrath 2022.',
			link: ''
		},
		{
			url: makingSlideshow4,
			caption:
				'Tim Mummery mentoring Lexann Oobagooma on filming, at Durdu-ngardi, Barker Pool. Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			url: makingSlideshow5,
			caption:
				'Emelio Nulgit cooks Banardd (turkey) at the recording camp. Seated Phillip (Cracker) Duckhole, Chloe Nulgit and Matthew Dembal Martin. Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			url: makingSlideshow6,
			caption:
				'Training workshop in July 2022 to curate the Wurdu website. Seated with back to camera Shontae Charles, Sherika Nulgit, Maitland Ngerdu, Leah Umbagai, Brentisha Macale (standing), Mike Jones (Research Centre for Deep History). Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			url: makingSlideshow7,
			caption:
				'Sherika Duckhole at the meeting with key Ngarinyin Elders to review and discuss the draft website. Photo: Mary Anne Jebb 2022.',
			link: ''
		},
		{
			url: makingSlideshow8,
			caption:
				'Chloe Nulgit and Matthew Dembal Martin, with Mike Jones (ANU) at the meeting at Mowanjum Aboriginal Art & Culture Centre reviewing and discussing the draft website. Photo: Mary Anne Jebb 2022.',
			link: ''
		}
	];
</script>

<Warning>
	<p>
		Phillip Duckhole has passed away since the making of this website and the short films it
		includes. Their image, voice, and name are reproduced here in recognition of their tireless
		efforts to share their knowledge for future generations.
	</p>
</Warning>

<Header
	id="intro"
	image={image_ngarinyin_header}
	name="ngarinyin"
	alt="A water hold, seen through paper bark trees, with a bright blue sky in the background."
	heading="Marardda"
	subheading="Stories from Ngarinyin Country"
	gradientColor="#362e2b"
/>

<Intro intro="ngarinyin">
	<h2>Community co-curators</h2>

	<p>
		This is a digital story from Marardda about travelling on Ngarinyin Country, the signs and
		pathways put down by Wandjina, key sites in the area including Walarda Mindi (Mount Hart
		Station), and the important Wurdu smoking ceremony for babies. It includes an interactive map, a
		short film about Wurdu, and a short film about Durdu-ngardi—the place where the catfish go round
		and round.
	</p>

	<TwoColumnContent>
		<figure>
			<div>
				<img
					src={pansy}
					alt="Pansy Nulgit, wiht trees, grass and scrub in the background. Pansy is gesturing with her right hand."
				/>
			</div>
			<div>
				<h3>
					Pansy Nulgit, Ngarinyin, Manambardanyin, senior cultural elder, knowledge keeper, and
					teacher.
				</h3>
				<figcaption>Photo: Tim Mummery 2022.</figcaption>
			</div>
		</figure>
	</TwoColumnContent>

	<TwoColumnContent>
		<figure>
			<div>
				<img
					src={matthew}
					alt="Matthew Dembal Martin. He is sitting on a chair, holding clap sticks and there are a group of women sitting close by on the ground."
				/>
			</div>
			<div>
				<h3>
					Matthew Dembal Martin, Ngarinyin, Manambarda, knowledge keeper, cultural singer, and
					language teacher.
				</h3>
				<figcaption>Photo: Tim Mummery 2022.</figcaption>
			</div>
		</figure>
	</TwoColumnContent>

	<TwoColumnContent>
		<figure>
			<div>
				<img
					src={chloe}
					alt="Chloe Nulgit, sitting in a water hole. The water reaches the top of her arms and  her hands are floating on top of the water. She is in the water to collect Jalagu (algae) for Wurdu."
				/>
			</div>
			<div>
				<h3>
					Chloe Nulgit, Ngarinyin Ngarangarddi woman, cultural adviser. Collecting jalagu for Wurdu.
				</h3>
				<figcaption>Photo: Tim Mummery 2022.</figcaption>
			</div>
		</figure>
	</TwoColumnContent>

	<TwoColumnContent>
		<figure>
			<div>
				<img src={phillip} alt="Philip Duckhole, with a track and scrub in the background." />
			</div>
			<div>
				<h3>
					Phillip (Cracker) Duckhole, Ngarinyin Bremaradda, custodian of Walarda Mindi (Mount Hart),
					teacher of cultural arts and crafts.
				</h3>
				<figcaption>Photo: Tim Mummery 2022.</figcaption>
			</div>
		</figure>
	</TwoColumnContent>

	<TwoColumnContent>
		<figure>
			<div>
				<img src={sherika} alt="Sherika Duckhole." />
			</div>
			<div>
				<h3>
					Sherika Duckhole, Ngarinyin Bremaradda woman, singer, community researcher and cultural
					language adviser.
				</h3>
				<figcaption>Photo: Tim Mummery 2022.</figcaption>
			</div>
		</figure>
	</TwoColumnContent>
</Intro>

<GenericContent>
	<p>
		Stories from Marardda are spoken, shared and enacted by Ngarinyin Traditional Owners Phillip
		Duckhole, Matthew Dembal Martin, Chloe Nulgit and Pansy Nulgit. Marardda is a Dambun or clan
		homeland. It is one of over 60 Dambuns belonging to Ngarinyin speaking people, who belong to
		Wandjina Wunggudd culture in the Kimberley. Every person belongs to a Dambun and each person has
		their Wunggudd place in their Country where their spirit was created and where they will return
		when they die.
	</p>

	<figure>
		<video
			src={video_NgarinyinOpening}
			poster={image_poster_ngarinyin}
			type="video/webm"
			name="ngarinyin"
			alt=""
			controls
		/>
	</figure>

	<p>
		The Country is inland, and is made up of vast ranges and rivers dotted with permanent
		waterholes. Marardda also includes the areas where saltwater turns to freshwater and major
		rivers flow to the coast into Walcott Inlet. Every aspect of Country is connected to Wandjina
		creation.
	</p>

	<p>
		Ngarinyin Elder David Mowaljarlai spoke in 1974 about the human and creative histories evidenced
		in geological marks on Country, and on the notion of long long time "when the land was soft."
		His words reflect the ever-present connectedness and lack of distancing in time between the
		formation of the earth and human activity in shaping the Wandjina Wunggudd landscape.
	</p>

	<p><strong>Listen to</strong> David Mowaljarlai:</p>

	<figure class="fullwidth-audio">
		<audio controls>
			<source src={davidMowaljarlai} />
		</audio>
	</figure>

	<details>
		<summary>Audio transcript</summary>
		<p>
			They're all kneeling down like that see. All their handprints are there on that rock, all
			their knee and their foot. I think when the land was soft, I think, long long time, when it
			was soft. These stones were soft before they get hard, that's the time. (David Mowaljarlai
			1974, recorded by Michael Edols)
		</p>
	</details>

	<p>
		Travelling on Country, Jalala put there by the Wandjina are a sign there is something
		significant in the area.
	</p>

	<InlineQuote credit="Matthew Dembal Martin, 2022.">
		<p>
			Jalala is a sign. You see a rock standing, shaped like a sign. Any sign you see. See the sign
			of rock standing up on the edge. You know there's something there. It's about Wunggudd sign,
			Wandjina sign. It's a sign for something in that area. So you walk there, you'll find that
			thing you're looking for. Wandjina you'll find them in a cave. You look for Wunggudd you'll
			find a water. That's a Jalala. It's like a signpost saying "It's there."
		</p>
	</InlineQuote>

	<figure>
		<img
			src={jalala}
			alt="A Jalala standing upright as a marker among a collection of rocks surrounded by grass."
		/>
		<figcaption>Jalala—Mt. Hart Marking Stones. Photo: Tim Mummery, 2022.</figcaption>
	</figure>

	<p>
		Most Ngarinyin people live in communities along the Gibb River Road on or near their Country, or
		at Mowanjum Community outside Derby. Ngarinyin men, women and children became the skilled and
		hard-working backbone of every post colonisation enterprise in their area, especially on the
		pastoral leases.
	</p>

	<p>
		They have rarely been separated from their Country and those people living in towns travel
		constantly to communities on Country. Their successful Native Title claim in 2004 gave them
		exclusive possession over 65,000 square kilometres of land and waters. Whether at Mowanjum,
		Derby or the communities on Country, Ngarinyin language and culture continue to be practiced.
	</p>

	<p>
		Sherika Duckhole, Wurdu project community researcher and language adviser, was brought up on her
		Country surrounded by family. After discussion with her parents Chloe Nulgit and Phillip
		Duckhole, her grandmother Pansy Nulgit, and cultural leader Matthew Dembal Martin, Sherika
		suggested that community members and the research and recording team travel to Marardda, her
		family's Dambun, to Wurdu their babies.
	</p>
</GenericContent>

<GenericContent>
	<h2 id="map">Marardda</h2>
</GenericContent>

<MararddaMap />

<GenericContent>
	<h2>Wurdu</h2>

	<p>Wurdu also comes from the Wandjina. Sherika Duckhole describes Wurdu:</p>

	<InlineQuote credit="Sherika Duckhole.">
		<p>
			Wurdu makes them remember the rules and commands that they have to take during their life …
			It's giving them that knowledge in life that they have to go through and what they have to do
			when they're older.
		</p>
		<p>
			Wurdu has been passed down to generations about how we, baby and children growing up be
			respected and respect each other, and how to share and give what we can, when we can … Wurdu
			is sort of like the Ten Commandments. It's sort of a blessing the Wandjina gave us.
		</p>
		<p>
			Wurdu is a smoking ceremony. There's two or three stages; when you are a baby when you're
			about six months old, then about a year, and about three or four years. You smoke with special
			wood, special grass, and also Jalagu (algae). And as they're growing older they just Wurdu
			with the Guru (cypress pine) or the Gunjurla (Conkaberry tree). Our grandparents or great
			grandparents, great aunt or great uncle, will be the ones doing the Wurdu for the family.
		</p>
	</InlineQuote>
</GenericContent>

<ImageSliderFullscreen slides={slideshowOne} />

<GenericContent>
	<h2 id="films">Watch short films</h2>
	<h3>Ngarinyin Wurdu (2 mins, 45 sec)</h3>

	<p>
		This film shows Matthew Dembal Martin and Chloe Nulgit, senior Ngarinyin men and women doing a
		Wurdu ceremony. They gently touch and speak to the child and instruct him to follow the main
		laws to be a strong, respectful and a responsible member of Ngarinyin culture. Matthew adds that
		when he grows up he will run like an emu. They finish by tapping gently and rythmically on his
		forehead, instructing him to always remember Wurdu.
	</p>

	<Vimeo vimeoId="770337914?h=0afe3ac12f&amp" />

	<h3 id="durdu-ngardi-film">Durdu-ngardi (4 mins, 17 sec)</h3>

	<p>
		A short film spoken by senior Ngarinyin traditional owners about the journey to Durdu-ngardi,
		the catfish story place, edited from recordings made at Marardda (Mount Hart Station). Made by
		Ngarinyin people in their own Country, the film tells the story of the Wandjinas' placement of a
		catfish only in this one place; he never leaves, he just goes round and round. Matthew Dembal
		Martin and Pansy Nulgit lead us to the site and point out the Jalala signs on Country that show
		where the stories live. Senior songman Matthew Dembal Martin sings the Durdu-ngardi song.
	</p>

	<Vimeo vimeoId="770337852?h=46cd174977&amp" />
</GenericContent>

<Collapsible name="collapsibleMaking" label="Making Stories from Marardda">
	<p>
		Stories from Marardda was developed over 18 months as a collaboration between Mowanjum
		Aboriginal Art & Culture Centre and the Research Centre for Deep History (Australian National
		University), led by Professor Ann McGrath. The Mowanjum project contributes to the Centre's
		Marking Country initiative, which is creating a national website of Indigenous stories that lead
		to a better understanding of deep histories of Australia and challenge the idea that Australian
		history started in 1788.
	</p>
	<p>
		There were four visits by researchers to the community in Derby in 2021 and 2022. The COVID
		pandemic and restrictions on entry to Western Australia created delays. The first two visits
		were undertaken by the Mowanjum project lead researcher, historian Mary Anne Jebb, who has long
		association with Mowanjum Art Centre and many Ngarinyin families. These visits introduced the
		project aims and possibilities for collaboration and identified who would be involved. Critical
		roles were identified: Community Researcher and Language Adviser and Elders.
	</p>
	<p>
		Key elements of the collaborative relationship were that the community would record their
		cultural knowledge and histories, own their recordings, and produce something of high quality
		that was co-curated by their Community Researcher, reviewed by Elders, and shared with their
		permission. In return the Research Centre for Deep History and the Australian Research Council's
		Kathleen Fitzpatrick Laureate provided funding to support recording on Country, fees for
		participants, a professional cameraperson, IT resources for website development, and a training
		workshop to co-curate the website.
	</p>
	<p>
		The focus for recording was the Wurdu smoking ceremony for babies. This followed previous
		discussions with Yorna Woolagoodja (Woddordda) who had told Mary Anne Jebb that the community
		exhibition space at Mowanjum Art Centre was missing a crucial element for future generations:
		Wudoo (Woddordda, or Wurdu in Ngarinyin). Ngarinyin Community Researcher and Language Adviser
		Sherika Duckhole is a Mowanjum Museum arts worker and has experience curating exhibitions and
		creating content for exhibitions. She provided advice on where to record, who might participate,
		and on language. She also co-curated this digital story.
	</p>
	<p>
		The three-day recording camp on Country at Walarda Mindi (Mount Hart Station) involved about
		twenty people. Rangers from the Willinggin Aboriginal Corporation also attended the recording
		camp to assist the Traditional Owners who wished to record at Durdu-ngardi (catfish) waterhole,
		Barker Pool. High quality film and sound recordings were made with six individuals and two
		smoking ceremonies, and of the telling of the Durdu-ngardi story. Two edited films of these
		events, along with three additional edited films containing interviews with individuals, and
		collected sound recordings and photographs, were created, with copies returned to the community.
		Individuals directed where their material would be archived.
	</p>
	<p>
		The following people participated: Clintisha Bangmorro, Rona Charles, Phillip Duckhole, Sherika
		Duckhole, Roseanna Mungulu, Maitland Ngerdu, Chloe Nulgit, Emilio Nulgit, Matthew Dembal Martin,
		Cassita Ngerdu, Lexann Oobagooma, Pansy Nulgit Tahlia Taylor, Heather Wungundin.
	</p>

	<ImageSliderFullscreen slides={slideShowTwo} />
</Collapsible>

<GenericContent>
	<Collapsible name="referencesNgarinyin" label="References and further reading">
		<ul>
			<li>
				Blundell, Valda, Kim Doohan, Daniel Vachon, Malcolm Allbrook, Mary Anne Jebb and Joh
				Bornman. 2017.
				<em>
					Barddabardda Wodjenangorddee: We're Telling All of You, The Creation, History and People
					of Dambeemangaddee Country
				</em>
				. Derby: Dambimangari Aboriginal Corporation.
			</li>
			<li>
				Crawford, I.M. 1968.
				<em>
					The Art of the Wandjina: Aboriginal Cave Paintings in Kimberley, Western Australia
				</em>
				. Melbourne: Oxford University Press.
			</li>
			<li>
				Doring, Jeff. ed. 2000
				<em>
					Gwion Gwion: Secret and Sacred Pathways of the Ngarinyin Aboriginal People of Australia
				</em>
				, Koln: Germany.
			</li>
			<li>
				Jebb, Mary Anne. ed. 1996.
				<em>
					Emerarra: A Man of Merarra: Morndi Munro talks with Daisy Angajit, Weeda Nyanulla,
					Campbell Allenbar and Banjo Woorunmurra
				</em>
				. Broome: Magabala Books.
			</li>
			<li>
				Jebb, Mary Anne. 2002.
				<em>
					Blood, Sweat and Welfare: A History of White Bosses and Aboriginal Pastoral Workers
				</em>
				. Nedlands: University of Western Australia Press.
			</li>
			<li>
				Jebb, Mary Anne. ed. 2008.
				<em>Mowanjum: 50 Years Community History</em>. Derby: Mowanjum Aboriginal Community and
				Mowanjum Artists Spirit of the Wandjina Aboriginal Corporation.
			</li>
			<li>
				Love, J.R.B. 1936.
				<em>
					Stone-age Bushmen of To-day: Life and Adventure among A Tribe of Savages in North-Western
					Australia
				</em>
				. London and Glasgow: Blackie & Son Limited.
			</li>
			<li>
				McGrath, Ann. 1987.
				<em>Born in the Cattle: Aborigines in Cattle Country</em>. Sydney: Allen & Unwin.
			</li>
			<li>
				Mowaljarlai, David and Jutta Malnic. 1993.
				<em> Yorro Yorro: Everything Standing Up Alive: Spirit of the Kimberley </em>
				. Broome: Magabala Books.
			</li>
		</ul>
	</Collapsible>
</GenericContent>

<Collapsible name="collapsibleSpelling" label="Note on spelling">
	<p>
		The spelling used in the Woddordda Wudoo and Ngarinyin Wurdu projects follows the directions of
		the Language advisers Leah Umbagai and Sherika Duckhole. Some words appear with different
		spellings where they have been published in previous films or documents. For example:
		Ngamardalee, Namarali, Namaaraalee; Wuduu, Wudoo, Wurdu; Wororra, Woddordda; Ngarinyin,
		Ungarinyin.
	</p>
</Collapsible> -

<GenericContent>
	<h2>Credits</h2>

	<p>
		This digital story was developed in collaboration with Pansy Nulgit, Matthew Dembal Martin,
		Chloe Nulgit, Phillip (Cracker) Duckhole, and Sherika Duckhole. Thank you to Ngarinyin community
		members, and to Mowanjum Aboriginal Art & Culture Centre for providing facilities and support.
	</p>

	<Credits
		credits={[
			{
				title: 'Senior cultural advisers',
				names: 'Pansy Nulgit, Matthew Dembal Martin, Chloe Nulgit, Phillip (Cracker) Duckhole'
			},
			{ title: 'Community researcher & language adviser', names: 'Sherika Duckhole' },
			{ title: 'Artworks', names: 'Chloe Nulgit, Phillip (Cracker) Duckhole' },
			{ title: 'Written by', names: 'Mary Anne Jebb' },
			{ title: 'Story developed by', names: 'Mary Anne Jebb, Mike Jones' },
			{ title: 'Marking Country Project Manager', names: 'Mike Jones' },
			{ title: 'Developer', names: 'Tabassum Fakier' },
			{ title: 'Camera and editing', names: 'Tim Mummery' },
			{ title: 'Short films directed by', names: 'Mary Anne Jebb' },
			{ title: 'Director of Research Centre for Deep History', names: 'Ann McGrath' }
		]}
	/>

	<p>Header landscape image by Ann McGrath, 2022.</p>
</GenericContent>

<GenericContent>
	<h2>Citations</h2>

	<Citations
		citations={[
			{
				insert: 'this page',
				authors:
					'Pansy Nulgit, Matthew Dembal Martin, Chloe Nulgit, Phillip ‘Cracker’ Duckhole, Sherika Duckhole, Mary Anne Jebb and Ann McGrath (2022)'
			},
			{
				insert: '‘Durdu-ngardi’',
				authors:
					'Matthew Dembal Martin and Pansy Nulgit, ‘Durdu-ngardi’ in Pansy Nulgit, Matthew Dembal Martin, Chloe Nulgit, Phillip ‘Cracker’ Duckhole, Sherika Duckhole, Mary Anne Jebb and Ann McGrath (2022)'
			},
			{
				insert: 'Sherika Duckhole',
				authors:
					'Sherika Duckhole cited in Pansy Nulgit, Matthew Dembal Martin, Chloe Nulgit, Phillip ‘Cracker’ Duckhole, Sherika Duckhole, Mary Anne Jebb and Ann McGrath (2022)'
			},
			{
				insert: 'David Mowaljarli',
				authors:
					'David Mowaljarli cited in Pansy Nulgit, Matthew Dembal Martin, Chloe Nulgit, Phillip ‘Cracker’ Duckhole, Sherika Duckhole, Mary Anne Jebb and Ann McGrath (2022)'
			}
		]}
		location={$page.url.href}
		page={pageTitle}
	/>
</GenericContent>

<style>
	.main-container {
		min-height: 100vh;
	}
	.main-container header {
		position: relative;
	}
	.main-container .title,
	.main-container .full-section {
		position: relative;
		z-index: 50;
	}
	.full-section {
		min-height: 100vh;
	}
	.full-sectionp {
		font-size: 1.2rem;
		margin-bottom: 3.2rem;
		text-align: center;
	}
	.pane {
		padding: 1rem;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		z-index: 50;
		max-width: 800px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.fullwidth-audio {
		color: var(--text-light);

		margin-bottom: 0;
	}

	.fullwidth-audio audio {
		width: 100%;
	}

	.warning-buttons {
		display: flex;
		flex-direction: column;
	}

	.warning-buttons button:first-child {
		background-color: transparent;
		margin-right: 2rem;
	}
	.warning-buttons button:last-child {
		background-color: #fff 1c;
		color: #fff;
	}
	.warning-buttons button:last-child:hover a {
		color: #fff;
	}
	.warning-buttons button {
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		width: 100%;
		border: 2px solid #fff;
		border-radius: 4px;
		margin: 1rem 0;
		padding: 1rem 2rem;
		font-size: 1rem;
	}
	.warning-buttons button a {
		color: #fff;
	}

	.warning-buttons button:hover {
		border: 2px solid var(--color-fg-dark);
		background-color: var(--color-fg-dark);
		color: #fff !important;
		cursor: pointer;
	}

	@media (min-width: 900px) {
		.warning-buttons {
			flex-direction: row;
			justify-content: flex-start;
		}

		.warning-buttons button {
			margin: 2rem 0;
		}

		.pane {
			max-height: 400px;
			padding: 0;
		}
	}
</style>

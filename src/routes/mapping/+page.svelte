<script>
	import { base } from '$app/paths';

    import AiatsisMap from '$lib/components/leaflet/AiatsisMap.svelte';
    import Credits from '$lib/components/Credits.svelte';
	import GenericContent from '$lib/layout/GenericContent.svelte';
	import ImageSliderFullscreen from '$lib/components/ImageSliderFullscreen.svelte';
    import TwoColumnContent from '$lib/layout/TwoColumnContent.svelte';

	let matthewMartinMessage = `${base}/mapping/audio/Matthew-Martin-message-sticks.mp3`;
	let worldMap1500 = `${base}/mapping/images/1500_map_of_world.jpg`;
	let magnificentGallery1 = `${base}/mapping/images/MagnificentGallery1.jpg`;
	let magnificentGallery2 = `${base}/mapping/images/MagnificentGallery2.jpg`;
	let tindaleMap = `${base}/mapping/images/TindaleMap.jpg`;
	let everywhen_cover = `${base}/mapping/images/everywhen_cover.jpg`;
	let slideshowFour1 = `${base}/mapping/images/slideshow_four/SlideshowFour01.jpg`;
	let slideshowFour2 = `${base}/mapping/images/slideshow_four/SlideshowFour02.jpg`;
	let slideshowFour3 = `${base}/mapping/images/slideshow_four/SlideshowFour03.jpg`;
	let slideshowOne1 = `${base}/mapping/images/slideshow_one/SlideshowOne01.jpg`;
	let slideshowOne2 = `${base}/mapping/images/slideshow_one/SlideshowOne02.jpg`;
	let slideshowOne3 = `${base}/mapping/images/slideshow_one/SlideshowOne03.jpg`;
	let slideshowOne4 = `${base}/mapping/images/slideshow_one/SlideshowOne04.jpg`;
	let slideshowOne5 = `${base}/mapping/images/slideshow_one/SlideshowOne05.jpg`;
	let slideshowThree1 = `${base}/mapping/images/slideshow_three/SlideshowThree01.jpg`;
	let slideshowThree2 = `${base}/mapping/images/slideshow_three/SlideshowThree02.jpg`;
	let slideshowThree3 = `${base}/mapping/images/slideshow_three/SlideshowThree03.jpg`;
	let slideshowTwo1 = `${base}/mapping/images/slideshow_two/SlideshowTwo01.jpg`;
	let slideshowTwo2 = `${base}/mapping/images/slideshow_two/SlideshowTwo02.jpg`;
	let slideshowTwo3 = `${base}/mapping/images/slideshow_two/SlideshowTwo03.jpg`;
	let slideshowTwo4 = `${base}/mapping/images/slideshow_two/SlideshowTwo04.jpg`;
	let matthew = `${base}/stories/ngarinyin/images/Matthew-Dembal-Martin_sings-06062022_RCDH.jpg`;
	let mudMap = `${base}/stories/woddordda/images/Mudmap_01.jpg`;

	const slideshowOne = [
		{
			url: slideshowOne1,
			caption:
				'Map of Australia, Author: Gordon and Gotch, shows routes of explorers, lighthouses and the route of steamers along the coast of Australia, Date: 1876. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/1017669'
		},
		{
			url: slideshowOne2,
			caption:
				'Exploration map of Australia 1890, Author: John George Bartholomew, Date: 1890. National Library of Australia.',
			link: "'https://catalogue.nla.gov.au/Record/3989570"
		},
		{
			url: slideshowOne3,
			caption:
				"Australia, Other title: Philips' authentic map of Australia, Author: George Philip & Son, cartographer, shows routes of explorers, railways and submarine cables, Date: 1890. National Library of Australia.",
			link: 'https://catalogue.nla.gov.au/Record/6856866'
		},
		{
			url: slideshowOne4,
			caption:
				"Sketch map of Captain Sturt's tracks & discoveries on his various expeditions into south eastern central Australia, Author: John Arrowsmith, Date: 1849. National Library of Australia.",
			link: 'https://catalogue.nla.gov.au/Record/412739'
		},
		{
			url: slideshowOne5,
			caption:
				'TAA map of the Commonwealth of Australia: showing air routes, industries, & routes of explorers, Author: Trans Australia Airlines and Commonwealth Surveyor General, shows TAA routes and internal and external routes of other airlines, and principal explorers routes, railways, primary industries, state boundaries, cities, towns, minor settlements and homesteads, Date: 1948. National Library of Australia',
			link: 'https://catalogue.nla.gov.au/Record/6451646'
		}
	];

	const slideshowTwo = [
		{
			url: slideshowTwo1,
			caption:
				'Ulm Ptolemy world map, Author: Ptolemy, active 2nd century cartographer, facsimile reproduction by Johann Schnitzer, engraver, Date: 1482. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/6729808'
		},
		{
			url: slideshowTwo2,
			caption:
				'World Map 1515, Author: Albrecht Dürer, woodcut, Date: 1515. British Museum. CC BY-NC-SA.',
			link: 'https://www.britishmuseum.org/collection/object/P_1848-1111-7-8'
		},
		{
			url: slideshowTwo3,
			caption:
				'World Map, 1566, Author: Nicolas Desliens, cartographer, Date: 1566. Library of Congress.',
			link: 'https://www.loc.gov/item/2021668638'
		},
		{
			url: slideshowTwo4,
			caption:
				'Nova totivs terrarvm orbis geographica ac hydrographica tabvla, Author: Jodocus Hondius, cartographer, Jan Jansson, Date: 1641. Library of Congress.',
			link: 'https://www.loc.gov/item/2017585792'
		}
	];

	const slideshowThree = [
		{
			url: slideshowThree1,
			caption:
				'Kaart van de reizen van Abel Jansz. Tasman gedaan in 1642 en 1644, Author: Abel Janszoon Tasman, facsimile by Jacob Swart, Date: 1860. State Library of New South Wales.',
			link: 'https://collection.sl.nsw.gov.au/record/74Vvz7JygQXM'
		},
		{
			url: slideshowThree2,
			caption:
				'Oost Indien, Author: Pieter Goos, Johannes van Keulen, Date: 1690. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/2661562'
		},
		{
			url: slideshowThree3,
			caption:
				'Carte reduite des terres Australes, Author: Jacques Nicolas Bellin, Jacobus van der Schley, Date: 1753. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/1694959'
		}
	];

	const slideshowFour = [
		{
			url: slideshowFour1,
			caption:
				'Chart of part of the South Sea shewing the tracts & discoveries made by His Majestys ships Dolphin, Author: William Whitchurch,  John Hawkesworth, Date: 1773. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/2825618'
		},
		{
			url: slideshowFour2,
			caption:
				"A new map of the world, with Captain Cook's tracks, his discoveries and those of the other circumnavigators, Author: William Palmer, Date: 1812. National Library of Australia.",
			link: 'https://catalogue.nla.gov.au/Record/3259928'
		},
		{
			url: slideshowFour3,
			caption:
				'General chart of Terra Australis or Australia: showing the parts explored between 1798 and 1803 by M. Flinders Commr. of H.M.S. Investigator, Author: Matthew Flinders, Date: 1814. National Library of Australia.',
			link: 'https://catalogue.nla.gov.au/Record/588521'
		}
	];
</script>

<section>
	<GenericContent>
		<h1>Mapping Country, marking Country</h1>

		<h2>
			<em>Marking Country</em> as Deep History Mapping
		</h2>

		<p>
			Marking Country demonstrates how the continent of Australia has long been documented in vivid
			detail, uniting layers of storied time and the people of deep history.
		</p>

		<p>
			Using different digital ways to map the Country, Indigenous community members have mapped
			local and continent-wide Deep Histories for the Marking Country project. Indigenous places are
			places of the heart—homes and sites of physical and spiritual sustenance and transgenerational
			knowledge.{' '}
		</p>
	</GenericContent>
</section>

<section>
    <GenericContent>
        
        <h2>Mapping Australia: visualizing Indigenous sovereignties</h2>
        
        <figure>
                <AiatsisMap />
            <figcaption>
            This map attempts to represent the language, social or nation groups of Aboriginal Australia.
			It shows only the general locations of larger groupings of people which may include clans,
			dialects or individual languages in a group. It used published resources from the eighteenth
			century-1994 and is not intended to be exact, nor the boundaries fixed. It is not suitable for
			native title or other land claims. David R Horton (creator), © AIATSIS, 1996. No reproduction
			without permission. To purchase a print version visit: <a href="https://shop.aiatsis.gov.au/"
            >https://shop.aiatsis.gov.au/</a
            >
        </figcaption>
    </figure>
    
    <p><strong>Marking Country through art is a way of Mapping Country.</strong></p>
    
	<p>
        Aboriginal Australians have intricate systems for mapping and depicting Country—everything in
		their nation's lands, waterways and skies. Techniques and mediums vary across the vast continent
		and islands. Carvings on rocks, trees and wood, drawings on sand and bodies, and paintings on
		rock surfaces. Ochres, plant fibres and glues have long been obtained in local regions, and
		traded from afar. Ochres were exchanged across New South Wales, and pearl-shell made the vast
		journey from the west to the east coast of Australia.
	</p>
    
	<p>
        Over millennia, Aboriginal elders and children have created a variety of images and diagrams.
		Art remains a platform for education, knowledge-sharing and story-telling. Indigenous creation
		stories include the epic journey and actions of ancestral figures, their role in moulding
		landscapes, animals, plants, and human society.
	</p>
    
	<p>
        For example, this photograph shows a section of the Magnificent Gallery, in Quinkan Country on
		the Cape York Peninsula. You can observe their complex overlays, retold and repainted over
		generations.
	</p>
    
	<figure>
        <img src={magnificentGallery1} alt="Colour photograph of rock art, showing layers of images painted over the top of each other." />
		<figcaption>Magnificent Gallery. Photo: Brad Grogan, Western Yalanji Corporation.</figcaption>
	</figure>
    
	<p>
        Associated with the custodianship of sites, hand stencils and prints became akin to signatures,
		a record of visits, and a memorialization of key events in a person's life cycle.
	</p>

	<p>
		Marking sites on Country reflect values, law and protocols for life. What are today often
		described as art galleries were, and remain, sites of cultural and spiritual richness and
		education for future generations. Aboriginal families camped and sheltered there, had feasts,
		sang, danced, told stories, and enacted special rituals such as birthing and coming of age
		initiation ceremonies.
	</p>
    
	<p>
        Across the continent, Indigenous storytellers have produced an enduring archive—a vast library
		of Indigenous knowledge that mapped every inch of the country. Pitjantjarra historian Dr Gordon
		Briscoe referred to rock art as "the closest thing we have to an archive." Others refer to these
		markings as a library, a repository of knowledge. Some images are representational and easy to
		identify; others are symbolic and diagrammatic. Different ways of mapping the country—through
		stories associated with animals, plants, waterways, and kin - were practiced, and many
		traditions continue today. Stable rock surfaces created a direct, map-like orientation with the
		geographical sites associated with key stories or histories.
	</p>
    
	<p>
        Around Australia, Aboriginal custodians continue to refresh these images and create new images
		on different surfaces. Today, Indigenous parks rangers and other Indigenous tourism enterprises
		introduce visitors to the deep history of these sites. Academic rock art researchers also work
		closely with Indigenous knowledge holders to record and interpret art sites, and new dating
		techniques reveal more information about their age. Dates range from at least 13,000 years
		ago—possibly up to 17,000—to 2,000 years, to 200 years ago, right up to the present.
	</p>
    
	<p>
        While some Aboriginal artists and knowledge holders refer to rock art galleries as their
		libraries, the time range of these curated knowledge collections far exceeds the first European
		libraries, for example the Malatestiana Library in Cesena, Italy has been dated at 1452. The
		first library in the world is said to be that of the Assyrian King, Ashurbanipal, created from
		around 700 Before Common Period.
	</p>
    
	<p>
        Marking country through epic stories, often featuring humans and animals with superpowers, and
		spirit creatures that created the world, have mapped every detail of the land, sea and sky.
	</p>
    
	<figure>
        <img src={mudMap} alt="Hand-painted map by Leah Umbagai, showing the changes to the coastline of Woddordda Country, and includes symbols like a fireplace with red flames and a hand outstretched over the fire; the head and face of a baby; as well as animals, including a brolga, a kangaroo, a quoll, a snake." />
		<figcaption>Woddordda Country. Leah Umbagai, 2022.</figcaption>
	</figure>
</GenericContent>
</section>

<section>
    <GenericContent>
        <h2>Blanks on the Map of the World: What Europeans did not know about Australia</h2>
        
		<figure>
            <img src={worldMap1500} alt="Map from c. 1500, demonstrating what Europeans knew about the world." />
			<figcaption>
                [Map of the World ca. 1500], photo-lithographed at the NSW Govt. Printing Office [between
				1880 and 1899], Date: 1500.
			</figcaption>
		</figure>

		<p>
			Only centuries ago, Europeans knew of five continents. The Australian land mass was missing
			from maps of the world.
		</p>

		<p>
			Stories of a Great Southern Land emerged, but it remained an unknown place of the imagination.
		</p>

		<p>
			<strong
				>Here you can see some of the early maps of the so-called 'known world' - that is, the world
				known to Europeans, dating from 1482.</strong
			>
		</p>

		<ImageSliderFullscreen slides={slideshowTwo} />
	</GenericContent>
</section>

<section>
	<GenericContent>
		<h2>Europeans gradually include the southern continent on the world map</h2>

		<p>
			Due to improvements in maritime technologies, the Portuguese, Dutch, British and other nations
			gained knowledge of another continent.{' '}
		</p>

		<p>European navigators mapped the western side of Australia before the east.</p>

		<ImageSliderFullscreen slides={slideshowThree} />

		<p>
			The British were keen on mapping coastlines for maritime trade, profiting from valuable
			resources around the world.
		</p>

		<p>
			The Europeans invented various new technologies for measuring where they were. Latitude and
			longitude was calculated with greater accuracy. In order to refine their instruments, in 1770,
			European scientists aimed to measure the Transit of Venus at various stations around the
			world. The navigator James Cook's expedition was also entrusted to do so. In the late
			eighteenth century, the Royal Society, based in London, offered incentives for developing a
			more accurate chronometer to serve ocean navigation. The Royal Society's President during much
			of the early nineteenth century, Joseph Banks, received extensive correspondence on this
			matter from competing inventors.
		</p>

		<p>
			James Cook became internationally renowned for mapping the Pacific, particularly the East
			Coast of Australia and Aotearoa (New Zealand). His Pacific trips were assisted by the expert
			Polynesian navigator Tupaia and arioi (a priest) from Ra'iatia, whose astrological,
			geographical knowledge and linguistic skills were vital. For Indigenous Australians, both Cook
			and Banks have become figures symbolizing the attempted erasure of their long-held sovereignty
			over their lands.
		</p>

		<ImageSliderFullscreen slides={slideshowFour} />
	</GenericContent>
</section>

<section>
	<GenericContent>
		<h2>A European depiction of Aboriginal nations of Australia</h2>

		<p>
			Many Aboriginal people are proud to declare that their people have always been in Australia,
			that they have lived there since time immemorial. Hundreds of nations of Aboriginal people
			lived, and still live on the southern continent, occupying tracts of land for which they had
			special stories and responsibilities. Each group was linked by songlines or storylines that
			connected people across thousands of kilometres. Different clans met up regularly for
			meetings, to arrange marriages, to carry out rituals, to exchange songs and stories from
			creation time to the everywhen/now. People had a complex kinship system that connected
			everyone and everything in their worlds; they were kin with every element of nature—animate
			and inanimate. Although severely impacted by coloniser invasion and state policies, many
			Aboriginal groups continued these practices and beliefs, and others are reviving them today.
		</p>

		<p>
			In the 1930s, the anthropologist and linguist Norman Tindale gathered information from
			Aboriginal people all over Australia, compiling a map of Aboriginal languages and nations.
			This became the basis of AIATSIS's well-known map of Aboriginal Australia, compiled by David
			Horton. This map is an important teaching tool—a guide to the hundreds of Aboriginal
			languages, nations and identities that constitute Aboriginal Australia and that reflect the
			deep, enduring history of its peoples.{' '}
		</p>

		<figure>
			<img src={tindaleMap} alt="A black and white print map created by Norman Tindale in 1940, showing his view of the distribution of Aboriginal groups in Australia." />
			<figcaption>
				Map showing the distribution of the Aboriginal tribes of Australia, Author: Norman B.
				Tindale, Date: 1940. National Library of Australia.{' '}
				<a href="https://catalogue.nla.gov.au/Record/3698417"> See resource </a>
				.
			</figcaption>
		</figure>
	</GenericContent>
</section>

<section>
	<GenericContent>
		<h2>Mapping Country</h2>

		<p>
			Indigenous peoples had the knowledge to map their Country through powerful stories in which
			ancestral figures travelled across the land and sea. As you will observe in some of our
			Marking Country sites, through a system of symbols on rock walls, Aboriginal artists mapped
			Country in memorable ways. In these permanent markings, they left visual information that
			showed people visiting these sites where to find waterholes, the path of rivers, where to find
			foods and sites of special significance. This was their equivalent to mapping, and similar to
			today's GPS, they had a defined orientation.
		</p>

		<p>
			Diagrams of Country and kin appeared in ochred paintings, carvings and stencils, accompanying
			lessons delivered in stories, song and dance. Every inch of Country had a story.
		</p>

		<p>
			For example, this photograph below shows sections of the Magnificent Gallery, in Quinkan
			Country on the Cape York Peninsula. You can observe their complex overlays, retold and
			repainted over generations.
		</p>

		<figure>
			<img src={magnificentGallery2} alt="The Magnificent Gallery, showing paintings of animal and human-like figures." />
			<figcaption>Magnificent Gallery. Photo: Brad Grogan, Western Yalanji Corporation.</figcaption>
		</figure>

		<p>
			Marking Country was a way of mapping ownership and custodianship. For example, hand stencils
			and personal totems inscribed belonging and authorship; these indicated the children and adult
			holders of Country.
		</p>

		<p>
			Each time people returned, in these special places, they would see their hands as body
			signatures. Children could measure how their hands changed over the years. As they grew, their
			mental maps of Country became more sophisticated. They increased their knowledge of how to be
			sustained by it—to survive physically, culturally and spiritually. These places and the
			ancestral figures represented there were more than diagrams; they had a creative power of
			their own.
		</p>

		<p>
			Another way of marking and mapping country was through message sticks. These were mobile maps,
			carved and embossed as a navigation guide. Message sticks were designed to assist neighbouring
			groups who were, for example, required to travel in unfamiliar Country to attend a gathering.
			They contained information not only about the event and its location, but also about their
			necessary journey. Message sticks could map the water, sustenance and key sites along the way.
		</p>

		<TwoColumnContent>
			<figure>
				<div>
					<img src={matthew} alt="Matthew Demnal Martin, sitting on a chair, holding clapsticks. A group of women are sitting  in a circle facing one another on the ground nearby." />
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

		<p>
			<strong>Listen to</strong> Ngarinyin man Matthew Martin discussing message sticks with Mary Anne
			Jebb.
		</p>

		<figure class="fullwidth-audio fullwidth-audio-padding">
			<audio controls>
				<source src={matthewMartinMessage} type="audio/mp3" />
			</audio>
			<figcaption>Matthew Martin and Mary Anne Jebb, 2022.</figcaption>
		</figure>

		<p>
			Many recent paintings by Aboriginal artists depict their custodial lands. Through colour,
			symbols and lines, they tell a story of Country as Kin.
		</p>

		<figure>
			<img src={everywhen_cover} alt="Cover of Everywhen (book)." />
			<figcaption>
				The Ngarigo artist Gail Neuss painted the image that we selected for the cover of our
				project's publication Everywhen. Entitled Nura Nganymitung (Grandmother's Country), like
				much Indigenous art, it demonstrates intimate links with kin and land, and evokes the
				significance of Indigenous people's deep history.
			</figcaption>
		</figure>

		<p>
			This mapping of Country embodies personal and ancestral biographies—conception dreaming sites,
			birthplaces, totems, and larger stories past and present—indeed all that happens and happened
			in those places.
		</p>

		<p>
			As the brilliant artist and Anmatyerre elder Emily Kngwarreye explained, she painted her own
			Country—each element carefully stored in her mental map. Over her eight-year, late-life
			painting career, she stated that her paintings were the "The Whole Lot" - that is, they mapped
			all her stories, her Country. As custodian of Alhalkere, the Women's Dreaming Site, she
			depicted the essence of her being, her creative power, genius and knowledge.
		</p>

		<p>
			In contrast, many Indigenous artists use western-style maps of Australia and text-book images
			to critique the nationalistic narratives of white Australian history. In some parts of
			Australia, Aboriginal people still mark new images and stories onto rock faces. Many more
			artists, however, use portable mediums: bark, canvas, board and other surfaces, acrylic paints
			and a range of techniques and styles. This art reveals a close, almost encyclopaedic knowledge
			of Country. It records and tells stories of the recent past, such as the arrival of Macassan
			praus, European ships and animals.
		</p>

		<p>
			Other Indigenous artists critique nationalistic colonial mythologies, debunking the myth of
			Captain Cook as hero-discoverer, or the myth of a non-violent frontier. Often using images
			from maps, works by Gordon Bennett, Daniel Boyd, Judy Watson and various others highlight the
			piracy and pillage associated with British invasion and land takeover. Cook is portrayed as a
			violent usurper of Indigenous sovereignty - a thief, a pirate, whose so-called discoveries and
			acts of possession led to the tragic story of colonialism that followed.
		</p>

		<p>
			Such targeted Indigenous reconfigurings of Australian history overturn the familiar white
			nationalistic legends of Captain Cook and the European explorers. They become powerful
			remappings of Australian history. With many more to come.
		</p>
	</GenericContent>
</section>

<section>
	<GenericContent>
		<h2>Credits</h2>

		<Credits
			credits={[
				{ title: 'Text', names: 'Ann McGrath' },
				{
					title: 'Research Assistants',
					names: 'Jennifer Bird, Bethany Phillips-Peddlesden, Emma Batchelor'
				}
			]}
		/>
	</GenericContent>
</section>

<style>
	.fullwidth-audio {
		color: var(--text-light);

		margin-bottom: 0;
	}

	.fullwidth-audio audio {
		width: 100%;
	}

	.fullwidth-audio-padding {
		margin-bottom: 4rem;
	}
</style>

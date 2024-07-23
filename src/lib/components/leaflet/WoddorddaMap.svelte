<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import { AudioBlock, ImageSingle, QuoteInline } from '$lib';

	const audioBooroola = `${base}/stories/woddordda/audio/Booroola.mp3`;
	const audioIlerdda = `${base}/stories/woddordda/audio/Ilerdda.mp3`;
	const audioKoolan_Island = `${base}/stories/woddordda/audio/Koolan_Island.mp3`;
	const audioKunmunya = `${base}/stories/woddordda/audio/Kunmunya.mp3`;
	const audioManggajaddaa = `${base}/stories/woddordda/audio/Manggajaddaa.mp3`;
	const audioMarmbulbardda = `${base}/stories/woddordda/audio/Marmbulbardda.mp3`;
	const audioMowanjum = `${base}/stories/woddordda/audio/Mowanjum.mp3`;
	const audioMunja = `${base}/stories/woddordda/audio/Munja.mp3`;
	const audioNgamardalee = `${base}/stories/woddordda/audio/Ngamardalee.mp3`;
	const audioPantijan = `${base}/stories/woddordda/audio/Pantijan.mp3`;
	const audioWijeengarddee = `${base}/stories/woddordda/audio/Wijeengarddee.mp3`;
	const audioWotjulum = `${base}/stories/woddordda/audio/Wotjulum.mp3`;
	const audioYaloon = `${base}/stories/woddordda/audio/Yaloon.mp3`;

	const kunmuyaImage = `${base}/stories/woddordda/images/Kunmunya-pic_341362PD.jpg`;
	const kunmunyaField = `${base}/stories/woddordda/images/Kunmunya-working-field-pic_341322PD.jpg`;
	const church = `${base}/stories/woddordda/images/Mowanjum-Wandjinas-on-church-wall-1960sCol_02.jpg`;
	const signToCommunity = `${base}/stories/woddordda/images/Mowanjum-sign-to-communityCol_07.jpg`;
	const artCentre = `${base}/stories/woddordda/images/Mowanjum_community_20by20cm_300dpi.jpg`;
	const munja9006 = `${base}/stories/woddordda/images/Munja-9006_01.jpg`;
	const peanuts = `${base}/stories/woddordda/images/Munja-women-peanut-sorting-REID90~4.jpg`;
	const wotjulumSam = `${base}/stories/woddordda/images/Wotjulum_Sam-Woolagoodja-boat-Fconstcher fl-1.jpg`;
	const wudooWalcott2 = `${base}/stories/woddordda/images/Wudoo-Namaralee-coast2_Tim-Mummery.png`;
	const wudooTim = `${base}/stories/woddordda/images/Wudoo-Namaralee-coast3_Tim-Mummery.png`;
	const wudooWalcott = `${base}/stories/woddordda/images/Wudoo-Namaralee-coast4-Walcott_Tim-Mummery.jpg`;
	const wudooShontae = `${base}/stories/woddordda/images/Wudoo-Shontae_Yorna_Kallum-SLachman-3-6-22.jpg`;
	const mapBackground = `${base}/stories/woddordda/images/interactive-map/background.jpg`;

	const mapMun = `${base}/stories/woddordda/images/interactive-map/munja.png`;
	const mapKoo = `${base}/stories/woddordda/images/interactive-map/koolan.png`;
	const mapIle = `${base}/stories/woddordda/images/interactive-map/ilerdda.png`;
	const mapMungg = `${base}/stories/woddordda/images/interactive-map/munggajaddaa.png`;
	const mapWot = `${base}/stories/woddordda/images/interactive-map/wotjulum.png`;
	const mapYal = `${base}/stories/woddordda/images/interactive-map/yaloon.png`;
	const mapMow = `${base}/stories/woddordda/images/interactive-map/mowanjum.png`;
	const mapDer = `${base}/stories/woddordda/images/interactive-map/derby.png`;
	const mapNgmardalee = `${base}/stories/woddordda/images/interactive-map/ngamardalee.png`;
	const mapKunmunya = `${base}/stories/woddordda/images/interactive-map/kunmunya.png`;
	const mapPan = `${base}/stories/woddordda/images/interactive-map/pantijan.png`;
	const mapMambulbardda = `${base}/stories/woddordda/images/interactive-map/marmbulbardda.png`;
	const mapWje = `${base}/stories/woddordda/images/interactive-map/wjeengarddee.png`;
	const mapWudoo = `${base}/stories/woddordda/images/interactive-map/wudoo.png`;

	const manggajaddaaText = [
		{
			markup: `<h3>Manggajaddaa</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioManggajaddaa
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapMungg,
				alt: '',
				width: '',
				height: '',
				galleryId: 'iconManggajaddaa'
			}
		},
		{
			markup: `<p>
        The Ibis at Derby wetlands. This area is where many Mowanjum people
        collected food held ceremonies and shared their culture with each other.
        It was a gathering place. Because Yorna Woolagoodja was too ill to travel
        to the Ngamardalee rock art site or to Wijeengarddee the Wudoo ceremony
        was performed at Manggajadda.
    </p>`
		}
	];

	const mowanjumText = [
		{
			markup: `<h3>Mowanjum</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioMowanjum
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapMow,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconMowanjum'
			}
		},
		{
			markup: `<p>
            In 1956 the government refused to provide further funds for housing or
            food supplies for the community unless they moved to the mainland near a
            township where education, hospitals and supplies were available. After
            strong arguments against the move, the leadership decided they would move
            to a church administered community outside Derby where they would be
            relatively independent from the town. They were promised their own houses,
            school, shop, church and employment on an adjacent pastoral lease.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: signToCommunity,
				width: '',
				height: '',
				alt: '',
				galleryId: 'signToCommunity',
				caption: 'The entrance to old Mowanjum community occupied from 1956 to 1977.'
			}
		},
		{
			component: ImageSingle,
			props: {
				source: church,
				width: '',
				height: '',
				alt: '',
				galleryId: 'church',
				caption:
					'Wandjinas representing the three main language groups, Woddordda, Ngarinyin and Wunambal were painted on the wall of the Church, a continuing spiritual presence.'
			}
		},
		{
			markup: `<p>
            In 1977 Mowanjum community was moved again, to its current site along the
            Gibb River road. The government wanted the land at Old Mowanjum to extend
            Derby airport, and the water had become salty.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: artCentre,
				width: '',
				height: '',
				alt: '',
				galleryId: 'artCentre',
				caption:
					'TMowanjum Community with the Wandjina shaped Art and Culture Centre, built in 2006.'
			}
		}
	];

	const booroolaText = [
		{
			markup: `<h3>Booroola (boab tree) and Derby</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioBooroola
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapDer,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconDerby'
			}
		},
		{
			markup: `<p>
            Derby is in Nyikina and Warwar peoples’ area. After being moved from
            Kunmunya, Munja and again from Wotjulum in 1956, many members of
            Woddordda, Ngarinyin and Wunambal people came to reside on a community
            they called Mowanjum ten kilometres outside the township of Derby.
        </p>`
		}
	];

	const yaloonText = [
		{
			markup: `<h3>Yaloon</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioYaloon
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapYal,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconYaloon'
			}
		},
		{
			markup: `<p>
            When Europeans came to this Country they called this place Cone Bay. We
            call it Yaloon. The honeybee is the symbol and representative for Country
            in the area. The Umbagai, Mungulu and Woolagoodja extended families have
            built a community there and are gradually establishing the resources to
            move back to their Country permanently.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: wudooTim,
				width: '',
				height: '',
				alt: '',
				galleryId: 'wudooTim',
				caption: 'Ngamardalee Coast. Photo: Tim Mummery'
			}
		}
	];

	const wotjulumText = [
		{
			markup: `<h3>Wotjulum</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioWotjulum
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapWot,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconWotjulum'
			}
		},
		{
			markup: `<p>
            Spears and woomera symbolise the place where members of all three
            languages, Ngarinyin and Woddordda and Wunambal, lived together at
            Wotjulum Mission, run by the Presbyterian church. In 1950 Kunmunya and
            Munja were dismantled. Staff had been evacuated during World War 2 and
            buildings were run down. Residents were told to move to the coast and
            build a new combined community.
        </p>
        <p>
            Albert Barunga remembered the ‘tears that came to our eyes’ when his
            people left Kunmunya and their Wandjina caves: ‘We were the proud
            Woddordda tribe living on our own soil!’ At Wotjulum everyone worked hard
            to build the new community. They also continued to hunt and travel along
            the coast and islands. The mission failed. There were few staff, and a
            lack of fresh water, and the government’s welfare officers threatened to
            enforce assimilation policies to separate children from families to go to
            school in a township. Faced with the breakup of the community they moved
            again, this time outside their Country to Derby.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: wotjulumSam,
				width: '',
				height: '',
				alt: '',
				galleryId: 'wotjulumSam',
				caption: `Operating the mission lugger at Wotjulum in about 1951. Jimmy
                Montgomery, Sam Woolagoodja (looking to the camera) and Andy Marlum.
                Photo: Fconstcher collection, Mowanjum.`
			}
		}
	];

	const goolanooText = [
		{
			markup: `<h3>Goolanoo: Koolan and Cockatoo Islands</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioKoolan_Island
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapKoo,
				width: '1150',
				height: '1101',
				alt: '',
				galleryId: 'iconKoolan_Island'
			}
		},
		{
			markup: `<p>
			Goolanoo is represented by four Wandjinas. Cockatoo Island is called
			Umbagai.
		</p>`
		}
	];

	const iilerddaText = [
		{
			markup: `<h3>Ilerdda</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioIlerdda
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapIle,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconIlerdda'
			}
		},
		{
			markup: `<p>
            When Europeans came to this Country they called this place Walcott Inconst.
            We call it Ilerdda. It is the place for the Barramundi which is associated
            with the creation of the Walcott river. In Barddabardda Wodjenangorddee
            (2017), Janet Oobagooma explained that ‘after the Woongudd Snake carved
            out the river by ‘splitting the country’, the Barramundi ‘marked it’, thus
            creating its distinctive features.’
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: wudooWalcott,
				width: '',
				height: '',
				alt: '',
				galleryId: 'wudooWalcott',
				caption: 'Ngamardalee Coast, Walcott Inconst. Photo: Tim Mummery.'
			}
		}
	];

	const munjaText = [
		{
			markup: `<h3>Munja</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioMunja
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapMun,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconMunja'
			}
		},
		{
			markup: `<p>
            Munja is symbolised by a kangaroo as it is a significant and important
            place for Ngarinyin people to meet. Munja is situated at the mouth of the
            Charnley River. It became a government ration station 1926, closing in
            1949.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: munja9006,
				width: '',
				height: '',
				alt: '',
				galleryId: 'munja9006',
				caption:
					'People coming in to Munja in about 1934, for their tobacco ration. Courtesy the WA Museum, Harold Reid collection, Mowanjum Archive.'
			}
		},
		{
			markup: `<p>
            Throughout its operation, Munja was a place of ceremonies and large
            gatherings. There was no Christian religious education and very little
            schooling. After it closed, many of the Ngarinyin traditional owners
            joined Woddordda and Wunambal people at Wotjulum, while others moved to
            pastoral stations in nearby Country to work.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: peanuts,
				width: '',
				height: '',
				alt: '',
				galleryId: 'peanuts',
				caption:
					'Polly Dangarin, Mangaworla and Bella shelling peanuts at Munja, about 1934. Courtesy the WA Museum, Harold Reid collection, Mowanjum Archive.'
			}
		}
	];

	const bandeejanText = [
		{
			markup: `<h3>Bandeejan (Pantijan)</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioPantijan
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapPan,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconPantijan'
			}
		},
		{
			markup: `<p>
            Bandeejan (also referred to as Pantijan) is represented by a turkey,
            Banardd. This place is significant for Mowanjum people. It is near Munja
            where Ngarinyin people in particular came into contact with a government
            institution. It is a pastoral lease that was handed back to Mowanjum
            people in 1975.
        </p>`
		}
	];

	const wijeengarddeeText = [
		{
			markup: `<h3>Wijeengarddee Bard Bard</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioWijeengarddee
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapWje,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconWijeengarddee'
			}
		},
		{
			markup: `<p>
            When Europeans came to this Country they called this place Freshwater
            Cove. We call it Wijeengardee. Wijeengardee, the spotted quoll, is a
            central character in creating the freshwater spring at this site. He was
            released to his Country after his death by his widow the black headed
            python. Their actions have created widow and mourning laws that are
            practiced today.
        </p>`
		}
	];

	const kunmunyaText = [
		{
			markup: `<h3>Kunmunya</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioKunmunya
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapKunmunya,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconKunmunya'
			}
		},
		{
			markup: `<p>
            It is the site of the first Presbyterian mission Port George IV
            (1912-1950). From 1920 to 1940 Kunmunya Mission was run by Reverend John
            Love who worked with Aboriginal leaders like Wundunmoi, Ernie Nyimandum
            and Albert Barunga, to translate some of the Bible into Woddordda, and to
            create a system of council decision making sensitive to the existing
            culture and politics of the people.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: kunmuyaImage,
				width: '',
				height: '',
				alt: '',
				galleryId: 'kunmuyaImage',
				caption:
					'Kunmunya Mission buildings in Woddordda Country, about 1925. Photographer unknown. Pudja Barunga Collection, Port George IV Album, Mowanjum.'
			}
		},
		{
			markup: `<p>
            Love encouraged the continued use of Woddordda language. Woddordda leaders
            like Sam Woolagoodja, Elkin Umbagai, Albert Barunga and Daisy Utemorrah
            grew up at the mission deeply connected to their saltwater culture and
            languages. They operated the mission lugger, visited their Wandjina sites
            and islands, and worked to build the mission houses, church and gardens.
            Kunmunya closed in 1948 and many of the people moved to Wotjulum Mission
            further south.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: kunmunyaField,
				width: '',
				height: '',
				alt: '',
				galleryId: 'kunmunyaField',
				caption:
					'Working in Kunmunya gardens about 1925. Photographer unknown. Photographer unknown. Pudja Barunga Collection, Port George IV Album, Mowanjum.'
			}
		}
	];

	const marmbulbarddaText = [
		{
			markup: `<h3>Marmbulbardda</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioMarmbulbardda
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapMambulbardda,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconMarmbulbardda'
			}
		},
		{
			markup: `<p>
            When Europeans came to this Country they called this place King’s Cascade.
            We call it Marmbulbardda. Represented by Djirlbun the bowerbird, in the
            Country belonging to the Morlumbun group.
        </p>`
		},
		{
			component: ImageSingle,
			props: {
				source: wudooWalcott2,
				width: '',
				height: '',
				alt: '',
				galleryId: 'wudooWalcott2',
				caption: 'Wudoo Ngamardalee Coast. Photo: Tim Mummery.'
			}
		}
	];

	const ngamardaleeText = [
		{
			markup: `<h3>Ngamardalee</h3>`
		},
		{
			component: AudioBlock,
			props: {
				source: audioNgamardalee
			}
		},
		{
			component: ImageSingle,
			props: {
				source: mapNgmardalee,
				width: '',
				height: '',
				alt: '',
				galleryId: 'iconNgamardalee'
			}
		},
		{
			markup: `<p>
            Ngamardalee is a powerful Wandjina, the source of significant laws and
            customs for Woddordda people. When Elders warm their hands with smoke and
            fire, and touch and talk to babies during the Wudoo smoking ceremony, they
            are transmitting Ngamardalee's words, laws and purpose.
        </p>`
		},
		{
			markup: `<iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/kXm6zGmjN2U?rel=0&amp;modestbranding=1?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
        ></iframe>`
		}
	];

	const wudooText = [
		{
			markup: `<h3>Wudoo</h3>`
		},
		{
			component: QuoteInline,
			props: {
				caption: '~ Leah Umbagai, 2022.',
				text: `This is when the Law of the Country starts because a child is
                    important from the beginning.`
			}
		},
		{
			component: ImageSingle,
			props: {
				source: wudooShontae,
				width: '',
				height: '',
				alt: '',
				galleryId: 'wudooShontae',
				caption:
					'Shontae Charles, Yorna Woolagoodja with baby Marlena and Kallem Mungulu at Manggajadda during the Wudoo ceremony, 2022. Photo: Sahyma Lachman.'
			}
		},
		{
			markup: `<p>
            The Wudoo project is about ceremonies to bless children, to nurture them
            and make them strong. Elders put their hands on the smoke and then toward
            the child and touch certain areas of the child. As they touch they explain
            what each area means and what is the Law around it. All three groups,
            Woddordda, Ngarinyin and Wunambal are associated with the Wudoo ceremony.
            It has to be performed every time a baby is born.
        </p>`
		},
		{
			markup: `<iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/6iUxZzuPrEs?rel=0&amp;modestbranding=1?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
        ></iframe>`
		}
	];

	let infoBox;

	import NewModal from '$lib/layout/NewModal.svelte';
	let showModal = false;
	let heading = '';
	let modalContent = '';

	function handleClick(text) {
		showModal = true;
		modalContent = text;
		infoBox.scrollTop = 0;
	}
</script>

<div class="mudmap-layout">
	<NewModal bind:showModal bind:this={infoBox} content={modalContent}></NewModal>
	<div>
		<svg
			version="1.1"
			x="0px"
			y="0px"
			viewBox="0 0 1022 1024"
			enableBackground="new 0 0 1022 1024"
			xml:space="preserve"
		>
			<image
				overflow="visible"
				width="4263"
				height="4269"
				xlink:href={mapBackground}
				transform="matrix(0.24 0 0 0.24 -0.72 -0.32)"
			/>

			<g
				id="Munggajaddaa"
				class="munggajaddaa"
				on:click={() => handleClick(manggajaddaaText, (heading = 'Manggajaddaa'))}
			>
				<image
					overflow="visible"
					width="862"
					height="858"
					id="Munggajaddaa_00000008130982814060519720000008421704387133622153_"
					xlink:href={mapMungg}
					transform="matrix(0.1162 0 0 0.1162 197.6 845.2037)"
				/>
			</g>
			<g id="Mowanjum" class="mowanjum" on:click={() => handleClick(mowanjumText)}>
				<image
					overflow="visible"
					width="570"
					height="488"
					id="Mowanjum_00000060709960437109048830000016139057146048995742_"
					xlink:href={mapMow}
					transform="matrix(0.1815 0 0 0.1815 308.0199 835.9385)"
				/>
			</g>
			<g id="Derby" class="derby" on:click={() => handleClick(booroolaText)}>
				<image
					overflow="visible"
					width="604"
					height="653"
					id="Derby_00000157295831292668155940000005386665361583623055_"
					xlink:href={mapDer}
					transform="matrix(0.1386 0 0 0.1149 261.8001 750.6428)"
				/>
			</g>
			<g id="Yaloon" class="yaloon" on:click={() => handleClick(yaloonText)}>
				<image
					overflow="visible"
					width="1217"
					height="809"
					id="Yaloon_00000174590051560570846580000000280508241703814071_"
					xlink:href={mapYal}
					transform="matrix(0.1154 -0.0357 0.0357 0.1154 187.544 672.6284)"
				/>
			</g>
			<g id="Wotjulum" class="wotjulum" on:click={() => handleClick(wotjulumText)}>
				<image
					overflow="visible"
					width="1299"
					height="741"
					id="Wotjulum_00000080175092431849092080000018201243814188612256_"
					xlink:href={mapWot}
					transform="matrix(0.105 0 0 0.105 219.7412 549.1)"
				/>
			</g>
			<g id="Koolan" class="koolan" on:click={() => handleClick(goolanooText)}>
				<image
					overflow="visible"
					width="977"
					height="1043"
					id="Koolan_x5F_Island_00000170252361944981772570000007015852095989628838_"
					xlink:href={mapKoo}
					transform="matrix(0.1288 0 0 0.1288 249.2916 399.6004)"
				/>
			</g>
			<g id="Ilerdda" class="ilerdda" on:click={() => handleClick(iilerddaText)}>
				<image
					overflow="visible"
					width="1277"
					height="649"
					id="Ilerdda_00000122696505963625064050000015788060616980038319_"
					xlink:href={mapIle}
					transform="matrix(0.1291 0 0 0.1291 382.2034 541.4)"
				/>
			</g>
			<g id="Munja" class="munja" on:click={() => handleClick(munjaText)}>
				<image
					overflow="visible"
					width="748"
					height="1774"
					id="Munja_00000179632920267780063200000017356352604254431378_"
					xlink:href={mapMun}
					transform="matrix(0.1076 0 0 0.1076 559.1 580.5589)"
				/>
			</g>
			<g id="Pantijan" class="pantijan" on:click={() => handleClick(bandeejanText)}>
				<image
					overflow="visible"
					width="370"
					height="1739"
					id="Pantijan_00000129884200214325394030000016444216160059327143_"
					xlink:href={mapPan}
					transform="matrix(0.0979 0 0 0.0979 659.8524 415.2002)"
				/>
			</g>
			<g id="Wijeengarddee" class="wijeengarddee" on:click={() => handleClick(wijeengarddeeText)}>
				<image
					overflow="visible"
					width="656"
					height="1019"
					id="Wijeengarddee_00000012458121876090373820000006119967341747282055_"
					xlink:href={mapWje}
					transform="matrix(0.1107 0 0 0.1107 439.0032 419.1323)"
				/>
			</g>
			<g id="Kunmunya" class="kunmunya" on:click={() => handleClick(kunmunyaText)}>
				<image
					overflow="visible"
					width="641"
					height="817"
					id="Kunmunya_00000099655549082098021320000003050652242426535848_"
					xlink:href={mapKunmunya}
					transform="matrix(0.1449 -0.0494 0.0494 0.1449 454.5667 287.6782)"
				/>
			</g>
			<g id="Marmbulbardda" class="marmbulbardda" on:click={() => handleClick(marmbulbarddaText)}>
				<image
					overflow="visible"
					width="899"
					height="700"
					id="Marmbulbardda_00000176016263293911469500000012729180882352574623_"
					xlink:href={mapMambulbardda}
					transform="matrix(0.1187 0 0 0.1187 590.0001 304.9472)"
				/>
			</g>
			<g id="Ngamardalee" class="ngamardalee" on:click={() => handleClick(ngamardaleeText)}>
				<image
					overflow="visible"
					width="2645"
					height="2234"
					id="Ngamardalee_00000172417358507902510930000009937972053159159219_"
					xlink:href={mapNgmardalee}
					transform="matrix(0.1128 0 0 0.1128 703.1622 167.7979)"
				/>
			</g>
			<g id="Wudoo" class="wudoo" on:click={() => handleClick(wudooText)}>
				<image
					overflow="visible"
					width="944"
					height="967"
					id="Wudoo_00000137098634236913541600000006235078344554715574_"
					xlink:href={mapWudoo}
					transform="matrix(0.24 0 0 0.24 643.3497 709.6404)"
				/>
			</g>
		</svg>
	</div>
</div>

<style>
	.mudmap-layout {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}

	.mudmap-layout > div {
		width: 100%;
		max-width: 600px;
	}

	svg {
		border-radius: var(--radius-corner);
		height: 100%;
	}
	svg g image:hover {
		cursor: pointer;
	}

	.munggajaddaa,
	.mowanjum,
	.derby,
	.yaloon,
	.wotjulum,
	.koolan,
	.ilerdda,
	.munja,
	.pantijan,
	.wijeengarddee,
	.kunmunya,
	.marmbulbardda,
	.ngamardalee,
	.wudoo {
		animation: wiggle 2s infinite;
	}

	.munggajaddaa {
		transform-origin: 25% 88%;
		animation-delay: 0.2s;
	}

	.mowanjum {
		transform-origin: 36% 85%;
		animation-delay: 0.5s;
	}

	.derby {
		transform-origin: 30% 78%;
		animation-delay: 0.7s;
	}

	.yaloon {
		transform-origin: 28% 66%;
		animation-delay: 0.2s;
	}

	.wotjulum {
		transform-origin: 28% 60%;
		animation-delay: 0.3s;
	}

	.koolan {
		transform-origin: 31% 50%;
	}

	.ilerdda {
		transform-origin: 50% 60%;
		animation-delay: 0.5s;
	}

	.munja {
		transform-origin: 62% 65%;
	}

	.pantijan {
		transform-origin: 68% 55%;
		animation-delay: 0.2s;
	}

	.wijeengarddee {
		transform-origin: 48% 48%;
	}

	.kunmunya {
		transform-origin: 50% 35%;
		animation-delay: 0.5s;
	}

	.marmbulbardda {
		transform-origin: 62% 32%;
	}

	.ngamardalee {
		transform-origin: 80% 32%;
		animation-delay: 0.3s;
	}

	.wudoo {
		transform-origin: 72% 75%;
		animation-delay: 0.2s;
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}

		25% {
			transform: rotate(5deg);
		}

		50% {
			transform: rotate(0deg);
		}

		75% {
			transform: rotate(-5deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

	.info {
		z-index: 800;
		font-family: var(--font-family-body);
		min-height: 280px;
		max-height: 360px;
		max-width: 600px;
		background: var(--clr-dark-charcoal);
		padding: 1.6rem;
		border-radius: 5px;
		overflow-y: scroll;
		margin-top: 0.8rem;
	}

	.info :global(figure) {
		max-height: 80%;
	}

	.info :global(figure > img) {
		padding: 0.8rem;
		max-height: 360px;
		margin: 0 auto;
		background-color: #ffffff;
	}

	.default-text {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.default-text > p {
		padding: 1rem;
		font-size: 1.2rem;
		border-top: 1px solid #a8a8a8;
		border-bottom: 1px solid #a8a8a8;
		text-align: center;
	}

	.mudmap-layout :global(.quote blockquote) {
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		font-style: italic;
	}

	.mudmap-layout :global(.quote figcaption) {
		text-align: right;
	}

	@media (min-width: 900px) {
		.mudmap-layout {
			flex-direction: row;
			max-height: 600px;
		}

		svg {
			max-height: 600px;
		}

		.info {
			margin-top: 0;
			margin-right: 1.6rem;
			padding: 2.4rem;
			max-height: 560px;
		}

		.default-text > p {
			font-size: 2rem;
		}
	}
</style>

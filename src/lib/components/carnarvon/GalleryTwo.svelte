<script>
	import { base } from '$app/paths';
	import ModalCarnarvon from './ModalCarnarvon.svelte';

	let ANU7132_1_childhands = `${base}/stories/carnarvon/images/gallery/_ANU7132_1_childhands.jpg`;
	let ANU7132_2_childhands = `${base}/stories/carnarvon/images/gallery/_ANU7132_2_childhands.jpg`;
	let ANU7132_femaleanatomy = `${base}/stories/carnarvon/images/gallery/_ANU7132_femaleanatomy.jpg`;
	let ANU7132_graffiti02 = `${base}/stories/carnarvon/images/gallery/_ANU7132_graffiti02.jpg`;
	let ANU7132_maleanatomy = `${base}/stories/carnarvon/images/gallery/_ANU7132_maleanatomy.jpg`;
	let ANU7163_wornrock = `${base}/stories/carnarvon/images/gallery/_ANU7163_wornrock.jpg`;
	let galleryTwo = `${base}/stories/carnarvon/images/galleryTwo.jpg`;

	const text1 =
  `
    <figure>
      <img src=${ANU7132_femaleanatomy} alt="" />
    </figure>
    <h3>Female genitalia, with kneecaps either side.</h3>
  `


const text2 =
  `
    <figure>
      <img src=${ANU7132_maleanatomy} alt="" />
    </figure>
    <h3>Male genitalia</h3>
  `


const text3a =
  `
    <figure>
      <img src=${ANU7132_1_childhands} alt="" />
    </figure>
    <h3>Children's handprints</h3>
    <figure>
      <img src=${ANU7132_2_childhands} alt="" />
    </figure>
  `


const text3b =
  `
    <figure>
      <img src=${ANU7132_2_childhands} alt="" />
    </figure>
    <h3>Children's handprints</h3>
    <figure>
      <img src=${ANU7132_1_childhands} alt="" />
    </figure>
  `


const text4 =
  `
    <figure>
      <img src=${ANU7132_graffiti02} alt="" />
    </figure>
    <h3>Graffiti</h3>
    <p>
      Many sections of this sacred place have been damaged and defaced by
      graffiti.
    </p>
  `


const text5 =
  `
    <figure>
      <img src=${ANU7163_wornrock} alt="" />
    </figure>
    <h3>Visitor damage</h3>
    <p>
      Before the establishment of protective barriers, visitors often sat on top
      of this archive wall to pose for photos, wearing away the rock and
      destroying its images.
    </p>
  `


	let showModal = false;
	let modalText;

	const handleClick = (text) => {
		showModal = true;
		modalText = text;
	};
</script>

<svg
        version="1.1"
        id="Layer_1"
        class="gallery-image"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 2000 1333"
        enableBackground="new 0 0 2000 1333"
        xml:space="preserve"
      >
        <image
          overflow="visible"
          width="2000"
          height="1333"
          xlink:href={galleryTwo}
        ></image>
        <circle
          id="5"
          fill="#FFFFFF"
          cx="1235"
          cy="200"
          r="55.08"
          on:click={() => handleClick(text5)}
        />
        <circle
          id="4"
          fill="#FFFFFF"
          cx="665"
          cy="320"
          r="55.08"
          on:click={() => handleClick(text4)}
        />
        <circle
          id="3b"
          fill="#FFFFFF"
          cx="1383"
          cy="734"
          r="55.08"
          on:click={() => handleClick(text3b)}
        />
        <circle
          id="3a"
          fill="#FFFFFF"
          cx="901"
          cy="468"
          r="55.08"
          on:click={() => handleClick(text3a)}
        />
        <circle
          id="2"
          fill="#FFFFFF"
          cx="1085"
          cy="840"
          r="55.08"
          on:click={() => handleClick(text2)}
        />
        <circle
          id="1"
          fill="#FFFFFF"
          cx="1287"
          cy="619"
          r="55.08"
          on:click={() => handleClick(text1)}
        />
      </svg>

<ModalCarnarvon bind:showModal>
	{@html modalText}
</ModalCarnarvon>

<style>
	.gallery-image {
		margin: 4rem 0;
		width: 100%;
	}
	.gallery-image circle {
		fill: #fff 21;
		stroke-width: 6px;
		stroke: #fff c2;
	}
	.gallery-image circle:hover {
		fill: #fff 8c;
		stroke-width: 12px;
		stroke: #fff;
		cursor: pointer;
	}
	:global(.cap-image-size img) {
		max-height: 50vh;
	}
	circle {
		fill: #ffffff21;
		stroke-width: 6px;
		stroke: #ffffffc2;
	}
	circle:hover {
		fill: #ffffff8c;
		stroke-width: 12px;
		stroke: #ffffff;
		cursor: pointer;
	}
</style>

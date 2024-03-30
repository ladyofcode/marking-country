<script>
	import { base } from '$app/paths';
	import { YouTube } from 'sveltekit-embed';

	import InlineQuote from '../InlineQuote.svelte';

	let image_still_02 = `${base}/stories/carnarvon/images/still_02.jpg`;
	let image_C0006_poster = `${base}/stories/carnarvon/images/C0006.jpg`;
	let video_C0006 = `${base}/stories/carnarvon/video/C0006.webm`;
	let image_ANU7376 = `${base}/stories/carnarvon/images/_ANU7376.jpg`;
	let image_walk2 = `${base}/stories/carnarvon/images/Walk2.jpg`;
</script>

<div class="map-section">
	<h2 id="bidjara-history">Learn Bijdara History along Mickey's Creek</h2>

	<div class="container-left">
		<p>
			The next day, Uncle Fred and Jackie lead our team and two former Rangers, Bernice Sigley and
			Kristine Sloman, along Mickey’s Creek. As on our previous journey, Uncle stops every few
			metres to point out a plant, a bird, or a rock formation. He reveals great pride in what his
			Country has to offer, and high regard for his ancestors, who knew how to benefit and honour
			Country.
		</p>
		
		<figure>
			<img src={image_still_02} alt="Uncle Fred's hands in which he is holding white myrtle leaves." />
			<figcaption>
				Uncle Fred makes soap from white myrtle leaves, Carnarvon Gorge, QLD, 23 March 2022. Photo:
				Amy Way.
			</figcaption>
		</figure>


		<p>
			The white myrtle tree has a number of uses for the Bidjara, primarily as a source of soap.
			Crushing the leaves in your hands with water produces a cleansing white paste. It can also be
			used to heal sores or boils on the skin, or placed in the still waters of a creek to stun
			fish.
		</p>

		<figure class="bush-video">
			<YouTube youTubeId="bJsmRVXDbTc" />

			<figcaption>
				Uncle Fred explains the use of plant anaesthetic, Carnarvon Gorge, QLD, 23 March 2022.
				Photo: Amy Way.
			</figcaption>
		</figure>

		<p>
			Another plant was used as an anaesthetic during initiation ceremonies. Young boys chewed the
			leaves to numb their mouth before having a tooth knocked out. Only boys who had learned
			hunting skills from their elders were initiated in this way, showing they were ready to be
			married.
		</p>

		<figure class="bush-video">
			<video controls preload="none" poster={image_C0006_poster}>
				<source src={video_C0006} />
			</video>
			<figcaption>
				Uncle Fred picks sweet purple berries, Carnarvon Gorge, QLD, 23 March 2022. Photo: Amy Way.
			</figcaption>
		</figure>

		<p>
			The Country is full of bush tucker. While Bidjara men hunted animals, Bidjara women gathered
			plant food, including sweet berries and honey. The bark of the Livistona australis palm made
			an ideal folded pouch. By washing the bark to tighten it, Bidjara women could store honey
			collected from native bee hives to eat on the go or to take back to their humpies.
		</p>

		<figure>
			<img src={image_ANU7376} alt="A folded pouch of palm bark on the ground." />
			<figcaption>
				A folded pouch of palm bark, Carnarvon Gorge, QLD, 23 March 2022. Photo: Amy Way.
			</figcaption>
		</figure>
	</div>

	<div id="rock-archive-inner-container" class="image-container">
		<div id="scrolling-image-container" class="scrolling-image-container">
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 400 691.85"
				enableBackground="new 0 0 400 691.85"
				xml:space="preserve"
				preserveAspectRatio="xMidYMax meet"
			>
				<g id="Topographic_image">
					<image
						overflow="visible"
						width="1512"
						height="2615"
						id="background-map"
						xlink:href={image_walk2}
						transform="matrix(0.2646 0 0 0.2646 0 0)"
					/>
				</g>
				<!-- <g id="Path">
            <polyline id="path-2" fill="none" stroke="#740000" strokeWidth="8" strokeMiterlimit="10" points="336.16,57.42 241.18,166.18 
      241.18,288.74 	"/>

            <line ref={(ref) => this.path = ref} id="path-1" fill="none" stroke="#740000" strokeWidth="8" strokeMiterlimit="10" x1="278.75" y1="339.16" x2="94.12" y2="618.1" />
          </g>  -->
			</svg>
		</div>
		<!--  <div id="end" class={styles.end}></div> -->
	</div>
</div>

<style>
	.map-section {
		max-width: 800px;
		margin: 6.4rem auto;
		padding: 0 1.6rem;
		min-height: 100vh;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		height: 100%;
	}
	h2 {
		flex: 0 0 100%;
	}
	figure {
		margin-bottom: 1.6rem;
	}
	figure img {
		border-radius: var(--radius-corner);
	}
	.container-left {
		height: 100%;
		flex: 1 0 50%;
		background-color: var(--clr-dark-charcoal);
		z-index: 200;
	}
	.container-left figure:first-child {
		margin-top: 2rem;
	}
	.image-container {
		flex: 1 0 50%;
		width: 100%;
	}
	.scrolling-image-container {
		border-radius: 2px;
		padding-top: 2rem;
		padding-bottom: 4rem;
		position: sticky;
		top: -1px;
		z-index: 10;
	}
	.scrolling-image-container svg {
		margin: 0 auto;
		width: 100%;
		margin-left: 0.8rem;
	}

	@media (min-width: 600px) {
		.map-section {
			padding: 0;
			display: flex;
			flex-direction: row;
			flex-flow: row wrap;
		}
		.image-container {
			display: inline;
			padding-left: 1rem;
		}
		.scrolling-image-container {
			max-width: 400px;
			margin-left: auto;
		}
		svg {
			max-height: 200px;
			transform: rotate(-180deg);
			max-height: 100%;
		}
	}
</style>

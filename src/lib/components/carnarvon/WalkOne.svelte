<script>
	import { base } from '$app/paths';
	import { YouTube } from 'sveltekit-embed';

	import QuoteInline from '../QuoteInline.svelte';

	let image_walk1 = `${base}/stories/carnarvon/images/Walk1_old.jpg`;
	let image_ANU6915 = `${base}/stories/carnarvon/images/_ANU6915.jpg`;
	let image_ANU6921 = `${base}/stories/carnarvon/images/_ANU6921.jpg`;
	let image_ANU6976 = `${base}/stories/carnarvon/images/_ANU6976.jpg`;
</script>

<div class="map-section">
	<h2 id="rock-walk">Walking to the rock archive</h2>

	<div class="container-left">
		<figure>
			<img src={image_ANU6915} alt="Uncle Fred leaning on his walking stick, surrounded by the lush greenery of the gorge." />
			<figcaption>
				Uncle Fred Conway resting and talking, Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way.
			</figcaption>
		</figure>

		<p>
			On the first day, Uncle Fred and Jackie lead us through the 10km journey that Uncle had walked
			for so many years, including as a Park Ranger. Uncle stops frequently to point out a plant, a
			bird, or to share a joke—such as the tricky one he used to tell tourists about a 'water tree.'
			Deep histories are interwoven with personal memories of Uncle's colleagues, family and
			friends.
		</p>

		<QuoteInline credit="Uncle Fred Conway">
			<p>
				Now our women folk… had <strong>boiling technique</strong>. They said "Aboriginal people
				never had any saucepans, billy cans, pan." But we had all these things before white man was
				put into Australia.
			</p>
		</QuoteInline>

		<p>
			By cutting into the side of a tree, lighting a fire and crafting a spit, Bidjara people could
			slow-cook their food in a smouldering burl of charcoal, like a blacksmith's forge.
		</p>

		<QuoteInline credit="Uncle Fred Conway">
			<p>
				We weren't in a hurry to go anywhere.
				<br />
				We had all the patience and time in the world.
			</p>
		</QuoteInline>

		<figure>
			<img src={image_ANU6921} alt="Uncle Fred with his hand outstretched reaching on the trunk of a tree." />
			<figcaption>
				Uncle Fred Conway talking about Bijara boiling techniques. Carnarvon Gorge, QLD 22 March
				2022. Photo: Amy Way.
			</figcaption>
		</figure>

		<figure>
			<YouTube youTubeId="ukLpVOI6pys" />
			<figcaption>
				Uncle Fred Conway describes the six uses of grass trees, Carnarvon Gorge, QLD 22 March 2022.
			</figcaption>
		</figure>

		<p>
			Bidjara people used many of the gorge plants in their everyday life. Some, like the grass
			tree, had multiple uses across its life cycle. Bidjara women used its fronds to make 
			<strong>dilly bags</strong>. Burning the base of the plant produced a resin as strong as
			<strong>super glue</strong>. When the leaves at the base are green and flexible, the tree
			flowers and produces <strong>sweet honey</strong>. When the plant has finished flowering, the
			top dries out and the seeds could be used to make bread. The entire tree stem can be broken
			off to make a spear, or halved to make a <strong>fire stick</strong>.
		</p>

		<QuoteInline credit="Uncle Fred Conway">
			<p>
				Our people were the greatest scientists on this earth.
				<br />
				They had no rush to do—nobody to say "You do it this bloody way" or "Listen here you stupid so-and-so".
				They didn't do that. They sat and they talked. And they got from there to where it is handed
				down today.
			</p>
		</QuoteInline>

		<p>
			Uncle Fred's deep history will in time be taught to his nephews, who can pass it down to their
			family, to <em>all the other family.</em>
		</p>

		<figure>
			<img src={image_ANU6976} alt="Uncle Fred standing on the track, looking at the rocks and grass and gesturing with his hand." />
			<figcaption>
				Uncle Fred Conway 'rock talking' in Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way.
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
						xlink:href={image_walk1}
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

	@media (min-width: 900px) {
	}
</style>

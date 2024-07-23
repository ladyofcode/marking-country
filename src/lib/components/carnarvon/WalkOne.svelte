<script>
	import { afterUpdate, onDestroy, onMount, tick } from 'svelte';
	import { base } from '$app/paths';
	import { EmbedYouTube, ImageSingle, QuoteInline } from '$lib';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
	import { killScrollTriggers } from '$lib/utils';

	let image_walk1 = `${base}/stories/carnarvon/images/Walk1.jpg`;
	let image_ANU6915 = `${base}/stories/carnarvon/images/_ANU6915.jpg`;
	let image_ANU6921 = `${base}/stories/carnarvon/images/_ANU6921.jpg`;
	let image_ANU6976 = `${base}/stories/carnarvon/images/_ANU6976.jpg`;

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
	}

	let left, svgPin, path, wrapper;
	let triggers = [];

	onMount(async () => {
		await tick();

		gsap.set(path, { drawSVG: '0%' });

		const anim = ScrollTrigger.create({
			trigger: left,
			start: 'top top',
			end: () => `+=${left.offsetHeight - svgPin.offsetHeight}`,
			scrub: true,
			pinSpacing: false,
			pin: svgPin,
			onUpdate: (self) => {
				const progress = self.progress;
				gsap.to(path, {
					drawSVG: `${progress * 100}%`
				});
			}
		});

		triggers.push(anim);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<h2 id="rock-walk">Walking to the rock archive</h2>

	<div class="left" bind:this={left}>
		<ImageSingle
			source={image_ANU6915}
			alt="Uncle Fred leaning on his walking stick, surrounded by the lush greenery of the gorge."
			caption="Uncle Fred Conway resting and talking, Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way."
			width="2200"
			height="1467"
			galleryId="image_ANU6915"
		/>

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

		<ImageSingle
			source={image_ANU6921}
			alt="Uncle Fred with his hand outstretched reaching on the trunk of a tree."
			galleryId="image_ANU6921"
			caption="Uncle Fred Conway talking about Bijara boiling techniques. Carnarvon Gorge, QLD 22 March
		2022. Photo: Amy Way."
			width=""
			height=""
		/>

		<EmbedYouTube
			youTubeId="ukLpVOI6pys"
			caption="Uncle Fred Conway describes the six uses of grass trees, Carnarvon Gorge, QLD 22 March 2022."
		/>

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

		<ImageSingle
			source={image_ANU6976}
			alt="Uncle Fred standing on the track, looking at the rocks and grass and gesturing with his hand."
			caption="Uncle Fred Conway 'rock talking' in Carnarvon Gorge, QLD, 22 March 2022. Photo: Amy Way."
			width=""
			height=""
			galleryId="image_ANU6976"
		/>
	</div>

	<div id="rock-archive-inner-container" class="right">
		<div bind:this={svgPin}>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 1511.2 2613.8"
				enable-background="new 0 0 1511.2 2613.8"
				xml:space="preserve"
			>
				<g id="topographic_x5F_image">
					<image
						overflow="visible"
						width="1512"
						height="2615"
						id="bg"
						xlink:href={image_walk1}
						transform="matrix(1 0 0 1 0 -0.666)"
					/>
				</g>
				<g id="location_x5F_markers">
					<circle
						id="end"
						stroke-linecap="round"
						stroke-miterlimit="10"
						cx="1198.9"
						cy="356.1"
						r="80"
					/>

					<circle
						id="start"
						stroke-linecap="round"
						stroke-miterlimit="10"
						cx="487.3"
						cy="2420.3"
						r="80"
					/>
				</g>
				<g id="route">
					<g>
						<path
							id="path"
							bind:this={path}
							fill="none"
							stroke-linecap="round"
							stroke-width="40px"
							stroke-miterlimit="1.5"
							d="M1198,358.7c-12.4,52.1-13.2,106.9-2.3,159.3l0.4-0.9c5.7,45.9,11.4,92.3,5.8,138.2
			c-5.7,45.9-24,91.9-59.1,122c-31.7,27.2-73.3,38.8-111.2,56.2c-37.9,17.5-75.7,45.7-83.5,86.7c-7.7,40.7,16.2,85.1-0.7,122.9
			c-16.9,37.8-70.2,56.6-72.1,98l-2.8,4.5c6.5,63.8-11.9,129.8-50.3,181.2c-5.7,7.6-11.8,14.9-16.5,23.1
			c-6.6,11.4-10.4,24.3-12.6,37.2c-7.6,43.8,2.6,90.8,29.3,126.3c26.7,35.6,69.7,58.8,114.2,59.6l-1.3-0.9
			c-17.1,4.7-35.1-0.7-52.7-3c-17.6-2.3-38.4,0.1-48.3,14.8c-6.4,9.5-6.7,21.9-12.5,31.7c-4.6,7.7-12.2,13-19.5,18.1
			c-54.6,37.8-109.2,75.5-163.8,113.3c-11.2,7.8-22.5,15.6-32.2,25.2c-7.6,7.5-14,16.1-19.8,25.1c-15.1,23.6-27,52.4-52.7,63.6
			c-25.8,11.2-57,0.5-83.1,10.9c-26,10.4-40,38.8-46.3,66.1c-6.4,27.3-7.7,56.1-19.5,81.5c-11.5,24.8-33,44.8-58.6,54.5l0.2,0.6
			c26.2,4.9,54.8-5.5,71.7-26.2c2.7-3.3,6.4-7.4,10.5-6.1c1.5,0.5,2.7,1.6,3.9,2.7c10.7,10.1,21.4,20.2,30.1,32
			c7.2,9.9,13.2,21.3,23.5,28.1c8.2,5.4,18.3,7.2,26.8,12.2c26.2,15.4,29.7,56,57,69.4c3.7,1.8,7.7,3,10.9,5.6
			c7,5.6,8.1,15.8,7.3,24.8c-2.3,25.2-16.1,49.1-36.7,63.8c-2.6,1.8-5.3,3.6-6.8,6.4c-3.1,5.9,1.1,12.8,2.7,19.2
			c3,12.1-3.3,24.2-6.8,36.2c-10.9,36.4,3.2,75,17.1,110.3c-14.1-11.1-29.7-20.4-46.3-27.4"
						/>
					</g>
				</g>
			</svg>
		</div>
	</div>
</div>

<style>
	.wrapper {
		max-width: var(--width-site);
		margin: 0 auto;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		flex-flow: row wrap;
		gap: var(--space-sm);
		position: relative;
		margin-bottom: var(--space-xxxxl);
	}
	h2 {
		flex: 0 0 100%;
	}
	.left,
	.right {
		flex: 1;
		box-sizing: border-box;
	}
	.left {
		padding-left: var(--space-sm);
		height: 100%;
	}
	.right {
		position: relative;
	}
	#path {
		stroke: var(--clr-dark-red);
	}
	circle {
		fill: #ffffffa6;
		stroke: var(--clr-dark-red);
		stroke-width: 4px;
	}
	image {
		clip-path: inset(0% round 1%);
	}

	svg {
		height: 100%;
		max-height: calc(var(--height-viewable) - 20vh);
		position: relative;
	}

	@media (min-width: 400px) {
		.wrapper {
			gap: var(--space-lg);
		}
		.left {
			padding-left: var(--space-lg);
		}
	}

	@media (min-width: 900px) {
		.wrapper {
			gap: var(--space-lg);
		}
		.left {
			padding-left: 0;
		}
	}
</style>

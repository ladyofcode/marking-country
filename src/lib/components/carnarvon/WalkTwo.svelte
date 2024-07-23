<script>
	import { onMount, onDestroy, tick } from 'svelte';
	import { base } from '$app/paths';
	import { EmbedYouTube, ImageSingle, QuoteInline } from '$lib';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
	import { killScrollTriggers } from '$lib/utils';

	let image_still_02 = `${base}/stories/carnarvon/images/still_02.jpg`;
	let image_C0006_poster = `${base}/stories/carnarvon/images/C0006.jpg`;
	let video_C0006 = `${base}/stories/carnarvon/video/C0006.webm`;
	let image_ANU7376 = `${base}/stories/carnarvon/images/_ANU7376.jpg`;
	let image_walk2 = `${base}/stories/carnarvon/images/Walk2.jpg`;

	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	let left, svgPin, path;
	let triggers = [];

	onMount(async () => {
		await tick();
		ScrollTrigger.refresh();
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

<div class="wrapper">
	<h2 id="bidjara-history">Learn Bijdara History along Mickey's Creek</h2>

	<div class="left" bind:this={left}>
		<p>
			The next day, Uncle Fred and Jackie lead our team and two former Rangers, Bernice Sigley and
			Kristine Sloman, along Mickey’s Creek. As on our previous journey, Uncle stops every few
			metres to point out a plant, a bird, or a rock formation. He reveals great pride in what his
			Country has to offer, and high regard for his ancestors, who knew how to benefit and honour
			Country.
		</p>

		<ImageSingle
			source={image_still_02}
			alt="Uncle Fred's hands in which he is holding white myrtle leaves."
			caption="Uncle Fred makes soap from white myrtle leaves, Carnarvon Gorge, QLD, 23 March 2022. Photo:
Amy Way."
			width=""
			height=""
			galleryId="image_still_02"
		/>

		<p>
			The white myrtle tree has a number of uses for the Bidjara, primarily as a source of soap.
			Crushing the leaves in your hands with water produces a cleansing white paste. It can also be
			used to heal sores or boils on the skin, or placed in the still waters of a creek to stun
			fish.
		</p>

		<EmbedYouTube
			youTubeId="bJsmRVXDbTc"
			caption="Uncle Fred explains the use of plant anaesthetic, Carnarvon Gorge, QLD, 23 March 2022.
		Photo: Amy Way."
		/>

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

		<ImageSingle
			width=""
			height=""
			source={image_ANU7376}
			alt="A folded pouch of palm bark on the ground."
			caption="A folded pouch of palm bark, Carnarvon Gorge, QLD, 23 March 2022. Photo: Amy Way."
			galleryId="image_ANU7376"
		/>
	</div>

	<div id="rock-archive-inner-container" class="right">
		<svg
			bind:this={svgPin}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 472 945"
			enable-background="new 0 0 472 945"
			xml:space="preserve"
		>
			<g id="image">
				<image overflow="visible" width="472" height="945" id="bg" xlink:href={image_walk2} />
			</g>
			<g id="Location_markers">
				<circle
					id="end"
					fill="#E6E6E7"
					stroke="#272525"
					stroke-linecap="round"
					stroke-miterlimit="10"
					cx="390"
					cy="789"
					r="30"
				/>

				<circle
					id="purple_x5F_berries"
					fill="#E6E6E7"
					stroke="#272525"
					stroke-linecap="round"
					stroke-miterlimit="10"
					cx="322"
					cy="651"
					r="30"
				/>

				<circle
					id="anaesthetic"
					fill="#E6E6E7"
					stroke="#272525"
					stroke-linecap="round"
					stroke-miterlimit="10"
					cx="337.3"
					cy="491"
					r="30"
				/>

				<circle
					id="white_x5F_myrtle"
					fill="#E6E6E7"
					stroke="#272525"
					stroke-linecap="round"
					stroke-miterlimit="10"
					cx="289.3"
					cy="352"
					r="30"
				/>
				<circle
					id="start"
					fill="#E6E6E7"
					stroke="#272525"
					stroke-linecap="round"
					stroke-miterlimit="10"
					cx="228.5"
					cy="225.5"
					r="30"
				/>
			</g>
			<g id="route">
				<g id="path">
					<path
						id="path"
						bind:this={path}
						fill="none"
						stroke-linecap="round"
						stroke-width="18px"
						stroke-miterlimit="1.5"
						d="M229.5,227.5c17,32.2,32.1,60.8,45.7,86.5c4.5,8.4,4,20,11.2,26.2c6.9,5.9,2.2,13.3,5.5,19
			c2.5,4.2,6.3,7.5,8.6,11.8c3.4,6.3,3.3,13.9,6.3,20.4c4.8,10.6,16.4,16.1,23.9,25c16.1,19.1,14.5,50.9,6.6,74.6
			c-10.9,32.7-28,64.3-20.1,97.8c1.4,5.8,3.3,11.5,4.3,17.4c3,17.9-0.2,36.2,0.6,54.4c0.9,21.5,13.3,40.1,31.2,47
			c15.3,5.8,24.5,4.3,30.8,13.4c11.1,16,5.1,46.5,6,66"
					/>
				</g>
			</g>
		</svg>
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

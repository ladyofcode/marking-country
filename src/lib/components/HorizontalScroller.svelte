<script>
	export let slides;

	import { onDestroy, onMount, getContext } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

	import { killScrollTriggers } from '$lib/utils';
	import { smootherStore } from '../../stores/scrollControlStore';
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	let wrapper, smoother;
	let containers = [],
		triggers = [];

	onMount(() => {
		let sections = gsap.utils.toArray(containers);
		const animation = gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 72px',
				pin: true,
				scrub: true,
				snap: 1 / (sections.length - 1),
				end: '+=3500'
				// pinSpacing: true
			}
		});
		triggers.push(animation)
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	{#each slides as item, i}
		<!-- {#if item.url.includes('mp4')} -->
		<!-- <video controls type="video/mp4" src={item.url} />
		{:else} -->
		<div class="panel" bind:this={containers[i]}>
			<figure>
				<img src={item.url} alt={item.caption} />

				<figcaption>
					{@html slides[i].caption}
					{#if slides[i].link}
						(<a href={slides[i].link}
							>{slides[i].source}<svg
								version="1.1"
								id="Layer_1"
								x="0px"
								y="0px"
								width="16px"
								viewBox="0 0 122.6 122.88"
								xmlSpace="preserve"
								><g
									><path
										fill="#d85245"
										d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
									/></g
								></svg
							></a
						>).
					{/if}
				</figcaption>
			</figure>
		</div>
		<!-- {/if} -->
	{/each}
</div>

<!-- <div class="pane" /> -->
<!-- <div class="container" bind:this={wrapper}>
	<div class="description panel blue" bind:this={containers[0]}>
		<div>
			<h1>Horizontal snapping sections (simple)</h1>
			<p>
				Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the
				sections in an organic way based on the velocity. The snapping occurs based on the natural
				ending position after momentum is applied, not a simplistic "wherever it is when the user
				stops".
			</p>
			<div class="scroll-down">
				Scroll down
				<div class="arrow" />
			</div>
		</div>
	</div>

	<section class="panel red" bind:this={containers[1]}>ONE</section>
	<section class="panel orange" bind:this={containers[2]}>TWO</section>
	<section class="panel purple" bind:this={containers[3]}>THREE</section>
	<section class="panel green" bind:this={containers[4]}>FOUR</section>
	<section class="panel gray" bind:this={containers[5]}>FIVE</section>
</div> -->

<!-- <div class="pane" /> -->

<style>
	/* .pane {
		height: 100vh;
		width: 100vw;
		background-color: purple;
	}
	.container {
		overscroll-behavior: none;
		width: 600%;
		height: 100%;
		display: flex;
		flex-wrap: nowrap;
	} */

	.panel {
		height: 100vh !important;
	}

	.wrapper {
		overscroll-behavior: none;
		overflow-x: hidden;
		width: 500%;
		height: var(--viewable-height);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
	}

	.panel {
		width: 100%;
		height: 100vh;
		background: rgb(62, 62, 62);
		background: radial-gradient(circle, rgba(62, 62, 62, 1) 40%, rgba(0, 0, 0, 1) 100%);
	}

	img {
		max-width: 100%;
		height: 100%;
		max-height: var(--height-viewable);
		object-fit: contain;
	}

	figure {
		width: 100%;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	figcaption {
		max-width: var(--width-content);
		position: absolute;
		bottom: 4rem;
		z-index: 2;
		background: var(--glass-clr-bg);
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--glass-border-radius);
		border: var(--glass-outline);
	}

	a svg {
		display: inline;
		margin-left: 0.4rem;
		margin-bottom: -4px;
	}

	.gray {
		background-color: #777;
		background-image: radial-gradient(
				circle at 47% 14%,
				rgba(205, 205, 205, 0.04) 0%,
				rgba(205, 205, 205, 0.04) 43%,
				transparent 43%,
				transparent 100%
			),
			radial-gradient(
				circle at 35% 12%,
				rgba(215, 215, 215, 0.04) 0%,
				rgba(215, 215, 215, 0.04) 4%,
				transparent 4%,
				transparent 100%
			),
			radial-gradient(
				circle at 1% 35%,
				rgba(24, 24, 24, 0.04) 0%,
				rgba(24, 24, 24, 0.04) 37%,
				transparent 37%,
				transparent 100%
			),
			radial-gradient(
				circle at 21% 1%,
				rgba(0, 0, 0, 0.04) 0%,
				rgba(0, 0, 0, 0.04) 26%,
				transparent 26%,
				transparent 100%
			),
			radial-gradient(
				circle at 23% 82%,
				rgba(249, 249, 249, 0.04) 0%,
				rgba(249, 249, 249, 0.04) 60%,
				transparent 60%,
				transparent 100%
			),
			radial-gradient(
				circle at 11% 54%,
				rgba(251, 251, 251, 0.04) 0%,
				rgba(251, 251, 251, 0.04) 23%,
				transparent 23%,
				transparent 100%
			),
			radial-gradient(
				circle at 69% 68%,
				rgba(234, 234, 234, 0.04) 0%,
				rgba(234, 234, 234, 0.04) 10%,
				transparent 10%,
				transparent 100%
			),
			linear-gradient(90deg, #777, #606060);
	}
	.blue {
		background-color: #2c7ad2;
		background-image: radial-gradient(
				circle at 47% 14%,
				rgba(205, 205, 205, 0.04) 0%,
				rgba(205, 205, 205, 0.04) 43%,
				transparent 43%,
				transparent 100%
			),
			radial-gradient(
				circle at 35% 12%,
				rgba(215, 215, 215, 0.04) 0%,
				rgba(215, 215, 215, 0.04) 4%,
				transparent 4%,
				transparent 100%
			),
			radial-gradient(
				circle at 1% 35%,
				rgba(24, 24, 24, 0.04) 0%,
				rgba(24, 24, 24, 0.04) 37%,
				transparent 37%,
				transparent 100%
			),
			radial-gradient(
				circle at 21% 1%,
				rgba(0, 0, 0, 0.04) 0%,
				rgba(0, 0, 0, 0.04) 26%,
				transparent 26%,
				transparent 100%
			),
			radial-gradient(
				circle at 23% 82%,
				rgba(249, 249, 249, 0.04) 0%,
				rgba(249, 249, 249, 0.04) 60%,
				transparent 60%,
				transparent 100%
			),
			radial-gradient(
				circle at 11% 54%,
				rgba(251, 251, 251, 0.04) 0%,
				rgba(251, 251, 251, 0.04) 23%,
				transparent 23%,
				transparent 100%
			),
			radial-gradient(
				circle at 69% 68%,
				rgba(234, 234, 234, 0.04) 0%,
				rgba(234, 234, 234, 0.04) 10%,
				transparent 10%,
				transparent 100%
			),
			linear-gradient(90deg, #2c7ad2, #1568c6);
	}
	.orange {
		background-color: #e77614;
		background-image: radial-gradient(
				circle at 46% 40%,
				rgba(228, 228, 228, 0.06) 0%,
				rgba(228, 228, 228, 0.06) 13%,
				transparent 13%,
				transparent 100%
			),
			radial-gradient(
				circle at 11% 41%,
				rgba(198, 198, 198, 0.06) 0%,
				rgba(198, 198, 198, 0.06) 19%,
				transparent 19%,
				transparent 100%
			),
			radial-gradient(
				circle at 52% 23%,
				rgba(14, 14, 14, 0.06) 0%,
				rgba(14, 14, 14, 0.06) 69%,
				transparent 69%,
				transparent 100%
			),
			radial-gradient(
				circle at 13% 85%,
				rgba(148, 148, 148, 0.06) 0%,
				rgba(148, 148, 148, 0.06) 44%,
				transparent 44%,
				transparent 100%
			),
			radial-gradient(
				circle at 57% 74%,
				rgba(232, 232, 232, 0.06) 0%,
				rgba(232, 232, 232, 0.06) 21%,
				transparent 21%,
				transparent 100%
			),
			radial-gradient(
				circle at 59% 54%,
				rgba(39, 39, 39, 0.06) 0%,
				rgba(39, 39, 39, 0.06) 49%,
				transparent 49%,
				transparent 100%
			),
			radial-gradient(
				circle at 98% 38%,
				rgba(157, 157, 157, 0.06) 0%,
				rgba(157, 157, 157, 0.06) 24%,
				transparent 24%,
				transparent 100%
			),
			radial-gradient(
				circle at 8% 6%,
				rgba(60, 60, 60, 0.06) 0%,
				rgba(60, 60, 60, 0.06) 12%,
				transparent 12%,
				transparent 100%
			),
			linear-gradient(90deg, #ff7600, #ff7600);
	}

	.red {
		background-color: #c82736;
		background-image: radial-gradient(
				circle at 19% 90%,
				rgba(190, 190, 190, 0.04) 0%,
				rgba(190, 190, 190, 0.04) 17%,
				transparent 17%,
				transparent 100%
			),
			radial-gradient(
				circle at 73% 2%,
				rgba(78, 78, 78, 0.04) 0%,
				rgba(78, 78, 78, 0.04) 94%,
				transparent 94%,
				transparent 100%
			),
			radial-gradient(
				circle at 45% 2%,
				rgba(18, 18, 18, 0.04) 0%,
				rgba(18, 18, 18, 0.04) 55%,
				transparent 55%,
				transparent 100%
			),
			radial-gradient(
				circle at 76% 60%,
				rgba(110, 110, 110, 0.04) 0%,
				rgba(110, 110, 110, 0.04) 34%,
				transparent 34%,
				transparent 100%
			),
			radial-gradient(
				circle at 68% 56%,
				rgba(246, 246, 246, 0.04) 0%,
				rgba(246, 246, 246, 0.04) 16%,
				transparent 16%,
				transparent 100%
			),
			radial-gradient(
				circle at 71% 42%,
				rgba(156, 156, 156, 0.04) 0%,
				rgba(156, 156, 156, 0.04) 47%,
				transparent 47%,
				transparent 100%
			),
			radial-gradient(
				circle at 46% 82%,
				rgba(247, 247, 247, 0.04) 0%,
				rgba(247, 247, 247, 0.04) 39%,
				transparent 39%,
				transparent 100%
			),
			radial-gradient(
				circle at 50% 47%,
				rgba(209, 209, 209, 0.04) 0%,
				rgba(209, 209, 209, 0.04) 45%,
				transparent 45%,
				transparent 100%
			),
			linear-gradient(90deg, #e53949, #cc2232);
	}

	.purple {
		background-color: #8d3dae;
		background-image: radial-gradient(
				circle at 47% 14%,
				rgba(205, 205, 205, 0.04) 0%,
				rgba(205, 205, 205, 0.04) 43%,
				transparent 43%,
				transparent 100%
			),
			radial-gradient(
				circle at 35% 12%,
				rgba(215, 215, 215, 0.04) 0%,
				rgba(215, 215, 215, 0.04) 4%,
				transparent 4%,
				transparent 100%
			),
			radial-gradient(
				circle at 1% 35%,
				rgba(24, 24, 24, 0.04) 0%,
				rgba(24, 24, 24, 0.04) 37%,
				transparent 37%,
				transparent 100%
			),
			radial-gradient(
				circle at 21% 1%,
				rgba(0, 0, 0, 0.04) 0%,
				rgba(0, 0, 0, 0.04) 26%,
				transparent 26%,
				transparent 100%
			),
			radial-gradient(
				circle at 23% 82%,
				rgba(249, 249, 249, 0.04) 0%,
				rgba(249, 249, 249, 0.04) 60%,
				transparent 60%,
				transparent 100%
			),
			radial-gradient(
				circle at 11% 54%,
				rgba(251, 251, 251, 0.04) 0%,
				rgba(251, 251, 251, 0.04) 23%,
				transparent 23%,
				transparent 100%
			),
			radial-gradient(
				circle at 69% 68%,
				rgba(234, 234, 234, 0.04) 0%,
				rgba(234, 234, 234, 0.04) 10%,
				transparent 10%,
				transparent 100%
			),
			linear-gradient(90deg, #8d3dae, #8d3dae);
	}
	.green {
		background-color: #28a92b;
		background-image: radial-gradient(
				circle at 46% 40%,
				rgba(228, 228, 228, 0.06) 0%,
				rgba(228, 228, 228, 0.06) 13%,
				transparent 13%,
				transparent 100%
			),
			radial-gradient(
				circle at 11% 41%,
				rgba(198, 198, 198, 0.06) 0%,
				rgba(198, 198, 198, 0.06) 19%,
				transparent 19%,
				transparent 100%
			),
			radial-gradient(
				circle at 52% 23%,
				rgba(14, 14, 14, 0.06) 0%,
				rgba(14, 14, 14, 0.06) 69%,
				transparent 69%,
				transparent 100%
			),
			radial-gradient(
				circle at 13% 85%,
				rgba(148, 148, 148, 0.06) 0%,
				rgba(148, 148, 148, 0.06) 44%,
				transparent 44%,
				transparent 100%
			),
			radial-gradient(
				circle at 57% 74%,
				rgba(232, 232, 232, 0.06) 0%,
				rgba(232, 232, 232, 0.06) 21%,
				transparent 21%,
				transparent 100%
			),
			radial-gradient(
				circle at 59% 54%,
				rgba(39, 39, 39, 0.06) 0%,
				rgba(39, 39, 39, 0.06) 49%,
				transparent 49%,
				transparent 100%
			),
			radial-gradient(
				circle at 98% 38%,
				rgba(157, 157, 157, 0.06) 0%,
				rgba(157, 157, 157, 0.06) 24%,
				transparent 24%,
				transparent 100%
			),
			radial-gradient(
				circle at 8% 6%,
				rgba(60, 60, 60, 0.06) 0%,
				rgba(60, 60, 60, 0.06) 12%,
				transparent 12%,
				transparent 100%
			),
			linear-gradient(90deg, #28a92b, #10a614);
	}

	/* .panel {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		font-size: 1.5em;
		text-align: center;
		color: white;
		position: relative;
		box-sizing: border-box;
		padding: 10px;
	} */
</style>

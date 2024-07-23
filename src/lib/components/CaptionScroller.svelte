<script>
	import { onDestroy, onMount, tick } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	export let content = [];
	export let right = false;

	let media = [],
		bgs = [],
		captions = [],
		triggers = [];

	onMount(async () => {
		await tick();
		content.forEach((section, index) => {
			const largeTL = gsap.timeline({
				scrollTrigger: {
					trigger: media[index],
					start: 'top top',
					pin: bgs[index],
					pinSpacing: false,
					endTrigger: captions[captions.length - 1],
					end: 'bottom bottom'
				}
			});
			triggers.push(largeTL);
		});
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

{#each content as { markup, media }, index}
	<div bind:this={media[index]} class="scroller-video-container">
		<div class="bg" bind:this={bgs[index]}>
			{#if media.type === 'video'}
				<video
					src={media.source}
					poster={media.poster}
					autoplay={media.autoplay}
					loop
					muted
					playsinline
					class="fullscreen-video"
				/>
			{/if}

			{#if media.type === 'image'}
				<img class="fullscreen-image" src={media.source} alt={media.alt} />
			{/if}
		</div>

		<div class="caption-container" />

		<div class="caption-container" bind:this={captions[index]}>
			<div class="caption" class:right>
				{@html markup}
			</div>
		</div>
	</div>
{/each}

<style>
	.scroller-video-container {
		position: relative;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.fullscreen-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
		top: 0;
		left: 0;
	}
	.fullscreen-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		position: relative;
		top: 0;
		left: 0;
		background-color: var(--clr-bg-main);
	}
	.caption-container {
		z-index: 150;
		position: relative;
		overflow: hidden;
		height: 100vh;
		width: 100%;
		color: white;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.caption {
		position: absolute;
		top: var(--space-xxxl);
		padding: var(--space-lg);
		background: var(--glass-clr-bg);
		box-shadow: var(--glass-box-shadow);
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--radius-corner);
	}

	.scroller-video-container .caption :global(p:first-of-type) {
		border-top: 2px solid var(--clr-terracotta);
		padding-top: var(--space-lg);
	}

	@media (min-width: 800px) {
		.caption {
			left: var(--space-xxxxl);
			max-width: 400px;
		}
		.caption.right {
			left: auto;
			right: var(--space-xxxxl);
		}
	}
</style>

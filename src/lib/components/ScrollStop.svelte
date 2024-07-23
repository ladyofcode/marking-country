<script>
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';
	import { EmbedYouTube } from '$lib';

	export let video = '',
		poster = '',
		youTubeId = '';

	let wrapper, videoItem;
	let triggers = [];

	onMount(() => {
		const scroller = gsap.to(wrapper, {
			scrollTrigger: {
				trigger: wrapper,
				scrub: true,
				pin: true,
				start: 'center center',
				end: 'bottom -100%',
				toggleClass: 'active',
				ease: 'power2'
			}
		});

		const animation = gsap.to(videoItem.firstChild, {
			scrollTrigger: {
				trigger: wrapper,
				scrub: 0.5,
				start: 'top bottom',
				end: 'bottom -300%',
				ease: 'power2'
			},
			y: '-30%'
		});
		triggers.push(scroller, animation);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div class="container">
		<div class="container-inner" bind:this={videoItem}>
			{#if video}
				<video controls preload="none" muted {poster} loop>
					<source src={video} />
				</video>
			{/if}
			{#if youTubeId}
				<EmbedYouTube {youTubeId} />
			{/if}
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
		background-color: var(--clr-bg-main);
	}

	.container {
		display: flex;
		position: relative;
		width: 100vw;
		max-height: 100vh;
		overflow: hidden;
	}

	.container::before {
		content: '';
		display: block;
		padding-bottom: calc(100% / (16 / 9));
	}

	.container-inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 180%;
		-o-object-fit: cover;
		object-fit: cover;
	}

	video {
		width: 100vw;
	}

	@media (min-width: 900px) {
		.wrapper {
			padding-top: var(--height-menu);
		}
	}
</style>

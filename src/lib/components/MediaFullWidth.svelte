<script>
	import { onDestroy, onMount } from 'svelte';
	export let image = '',
		video = '',
		poster = '',
		alt = '',
		caption = '',
		autoplay = false,
		youTubeId = '',
		vimeoId = '',
		galleryId = 'default',
		width = '',
		height = '',
		contain = false,
		max = false,
		scrollControl = false;

	import { Vimeo } from 'sveltekit-embed';
	import { EmbedYouTube } from '$lib';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
	import 'photoswipe/style.css';
	import '../../../node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
	import { killScrollTriggers } from '$lib/utils';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let item = [],
		triggers = [];
	let scrolledVideo;

	onMount(() => {
		const options = {
			gallery: '#' + galleryId,
			children: item,
			pswpModule: () => import('photoswipe')
		};
		const lightbox = new PhotoSwipeLightbox(options);

		const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
			type: 'auto'
		});

		lightbox.init();

		if (scrolledVideo) {
			const animation = ScrollTrigger.create({
				trigger: scrolledVideo,
				start: 'top 50%',
				end: '50% top',
				onEnter: () => scrolledVideo.play(),
				onLeave: () => scrolledVideo.pause(),
				onLeaveBack: () => scrolledVideo.pause(),
				onEnterBack: () => scrolledVideo.play()
			});
			triggers.push(animation);
		}
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" class:max>
	{#if image}
		<div class="pswp-gallery pswp-gallery--single-column" id={galleryId}>
			<figure class="pswp-gallery__item" bind:this={item[0]}>
				<a
					href={image}
					data-pswp-width={width}
					data-pswp-height={height}
					target="_blank"
					rel="noreferrer"
					class={contain ? 'contain' : ''}
				>
					<img src={image} {alt} />
				</a>
				<figcaption class="pswp-caption-content">
					{@html caption}
				</figcaption>
			</figure>
		</div>
	{:else}
		<figure>
			{#if (video || youTubeId) && autoplay && scrollControl}
				<video playsinline preload="auto" muted loop {poster} bind:this={scrolledVideo}>
					<source src={video} />
				</video>
			{/if}
			{#if video && !autoplay}
				<video controls preload="none" {poster}>
					<source src={video} />
				</video>
			{/if}
			{#if youTubeId}
				<div class="youtube">
					<EmbedYouTube videoId={youTubeId} />
				</div>
			{/if}

			{#if vimeoId}
				<Vimeo {vimeoId} />
			{/if}

			{#if caption && !image}
				<figcaption>{caption}</figcaption>
			{/if}
		</figure>
	{/if}
</div>

<style>
	:global(iframe) {
		height: 100%;
		min-height: 420px;
		max-height: calc(var(--height-viewable) - 10vh);
	}

	.wrapper {
		height: 100%;
		max-width: calc(var(--width-site) + 40vh);
		margin: var(--space-xxxl) var(--space-xl);
	}

	figure {
		max-height: calc(var(--height-viewable) - 10vh);
	}

	.youtube {
		height: 100%;
	}

	img,
	video {
		height: 100%;
		width: 100%;
		object-fit: contain;
		object-position: center;
		border-radius: var(--radius-corner);
	}

	video {
		max-height: 100vh;
		margin: 0 auto;
	}

	figcaption {
		max-width: var(--width-content);
		margin: var(--space-md) auto;
	}

	a {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: var(--radius-corner);
	}
	.pswp-caption-content {
		display: block;
	}

	.contain {
		width: fit-content;
		margin: 0 auto;
		border-radius: var(--radius-corner);
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxl) auto;
			padding: 0;
		}
		.wrapper.max {
			height: var(--height-viewable);
		}

		a {
			height: calc(var(--height-viewable) - 20vh);
		}

		img,
		video {
			object-fit: cover;
			width: 100%;
		}

		a.contain > img {
			object-fit: contain;
		}
		figure {
			height: 100%;
		}
	}
</style>

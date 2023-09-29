<script>
	export let image, video, poster, alt, caption, autoplay, youTubeId;

	import { YouTube } from "sveltekit-embed";
</script>

<figure>
	{#if (video || youTubeId) && autoplay}
		<video autoPlay preload="none" muted>
			<source src={video} />
		</video>
	{/if}
	{#if video && !autoplay}
		<video controls preload="none" {poster}>
			<source src={video} />
		</video>
	{/if}
	{#if youTubeId}
	  <YouTube youTubeId={youTubeId} />
	{/if}

	{#if image}
		<img src={image} {alt} />
	{/if}

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	figure {
		height: 100%;
	}

	img,
	video {
		width: 100%;
		height: 100%;
		max-height: 80vh;
		object-fit: scale-down;
	}

	video {
		max-height: 100vh;
	}

	figcaption {
		padding: 0 1.6rem;
	}

	@media (min-width: 900px) {
		figure {
			max-height: 100vh;
		}

		img,
		video {
			object-fit: cover;
			max-height: 80vh;
		}
	}
</style>

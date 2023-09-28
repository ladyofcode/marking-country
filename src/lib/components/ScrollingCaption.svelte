<script>
	export let image, video, poster, alt, caption, autoplay;
</script>

<div>
	{#if video && autoplay}
		<video autoPlay preload="none" muted {poster}>
			<source src={video} />
		</video>
	{/if}
	{#if video && !autoplay}
		<video controls preload="none" {poster}>
			<source src={video} />
		</video>
	{/if}
	{#if image}
		<img src={image} {alt} />
	{/if}
</div>
<div>
	<slot />
</div>

<!-- <figure>

	{#if image}
		<img src={image} {alt} />
	{/if}

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure> -->

<style>
	img, video {
		height: 100vh;
		width: 100%;
	}
</style>

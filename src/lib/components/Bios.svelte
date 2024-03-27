<script>
	export let content = '';
</script>

<div class="container">
	{#each content as { heading, image }}
		<h3>{heading}</h3>
		<figure>
			<img src={image.source} alt={image.alt}>
			<figcaption>{image.caption}</figcaption>
		</figure>
	{/each}
</div>

<style>
	img {
		max-width: 500px;
	}
</style>
<script>
	export let images;
</script>

<div class="container">
	{#each images as image}
		<figure>
			<img src={image.url} alt="" />
		</figure>
	{/each}
</div>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 12px 12px;
	}

    figure {
        height: 100%;
        width: 100%;

    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
	@media (min-width: 600px) {
		.container {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.container {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}
</style>

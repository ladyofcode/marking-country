<script>
	export let image, alt, caption;
</script>

<div class="background">
	{#if image}
		<img src={image} {alt} />
	{/if}
	<div class="pane {caption}">
		<slot />
	</div>
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
	img {
		height: 100%;
		width: 100%;
		/* margin-bottom: 40px; */

		/* object-fit: contain; */
	}

	.background {
		display: flex;
		flex-direction: column;
		min-height: 10vh;
		height: 100%;
		/* padding-bottom: 40px; */
		margin-bottom: 4rem;
	}

	.pane {
		position: relative;
		top: -40px;
		padding: 24px 40px;
		width: 100%;
		max-width: 80vw;
		margin: 0 auto;
		background: rgba(29, 29, 29, 0.494);
		box-shadow: 0 8px 32px 0 rgba(79, 79, 85, 0.618);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 10px;
	}

	.pane :global(p:first-of-type) {
		border-top: 2px solid var(--clr-terracotta);
		padding-top: 1.2rem;
	}


	
	/* @media (min-width: 800px) {
		.background {
			padding-bottom: 100px;;
		}
	} */
</style>

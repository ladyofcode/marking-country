<script>
	export let image='', video='', poster='', alt='', caption='', autoplay='', orientation='';
</script>

<div class="background {orientation}">
	{#if video && autoplay}
		<video autoPlay preload="none" muted {poster} loop>
			<source src={video} />
		</video>
	{/if}
	{#if video && !autoplay}
		<video controls preload="none" {poster} loop>
			<source src={video} />
		</video>
	{/if}
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
	img,
	video {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.background {
		position: relative;
		min-height: 10vh;
		height: 100%;
		padding-bottom: 40px;
	}

	.pane {
		position: relative;
		top: -40px;
		padding: 24px 40px;
		width: 100%;
		max-width: 400px;
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

	.portrait > img {
		max-height: 80vh;
	}

	.portrait > .pane {
		max-width: 80vw !important;
	}

	
	@media (min-width: 800px) {
		.background{
			padding-bottom: 0;
			height: 100vh;
		}

		img, video {
			height: 100%;
			width: auto;
			object-fit: cover;
		}

		.pane {
			position: absolute;
			top: 20%;
		}

		.left {
			left: 10%;
		}

		.right {
			right: 10%;
		}

		.portrait {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.portrait img{
			width: 50%;
			object-fit: contain;
		}

		.portrait .pane {
			position: static;
			width: 50%;
			margin-right: 2.4rem;
		}
	}
</style>

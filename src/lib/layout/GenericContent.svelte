<div class="generic-container">
	<slot />
</div>

<style>
	.generic-container {
		max-width: 800px;
		margin: 6.4rem auto;
		background-color: var(--clr-bg-main);
		padding: 0 1.6rem;
	}

	.generic-container :global(figure > img) {
		max-height: 80vh;
		margin: 0 auto;
	}

	.generic-container :global(img),
	.generic-container :global(video),
	.generic-container :global(iframe) {
		max-width: 100%;
	}

	.generic-container :global(iframe) {
		width: 100%;
		height: 480px;
	}

	@media (min-width: 600px) {
		.generic-container :global(figure) {
			max-height: 96vh;
		}
	}

	@media (min-width: 900px) {
		.generic-container {
			padding: 0;
			margin: 8rem auto;
		}
	}
</style>

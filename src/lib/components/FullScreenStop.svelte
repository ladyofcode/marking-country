<div class="container">
	<div>
		<slot />
	</div>
</div>

<style>
	.container {
		background-color: var(--clr-dark-contrast);
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container > div {
		max-width: 800px;
		padding: 2.4rem;
	}

	@media (min-width: 900px) {
		.container > div {
			padding: 0;
		}
	}
</style>

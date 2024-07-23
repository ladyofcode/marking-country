<div class="wrapper">
	<div class="learn-more-box">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		padding: var(--space-xxl) var(--space-md);
	}

	.learn-more-box {
		border-radius: var(--radius-corner);
		background-color: var(--clr-light-contrast);
		display: flex;
		flex-direction: column;
		padding: var(--space-xxl) var(--space-lg);
		border-radius: var(--radius-corner);
	}

	.learn-more-box :global(img) {
		border-radius: var(--radius-corner);
	}

	.learn-more-box :global(h3) {
		font-weight: 200;
	}

	.learn-more-box :global(h3 > a) {
		font-family: var(--font-serif);
	}

	.learn-more-box :global(ul) {
		list-style: none;
		padding: 0;
	}

	.learn-more-box :global(a) {
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-family: var(--font-sans);
	}

	@media (min-width: 600px) {
		.wrapper {
			padding: var(--space-xxl) 0;
		}
		.learn-more-box {
			flex-direction: row;
			align-items: start;
			justify-content: start;
			max-width: var(--width-content);
			margin: 0 auto;
			padding: var(--space-lg);
		}

		.learn-more-box :global(img) {
			margin-right: var(--space-xxl);
			max-width: 50%;
		}
	}
</style>

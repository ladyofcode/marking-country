<div class="learn-more-box">
	<slot />
</div>

<style>
	.learn-more-box {
		background-color: hsla(37, 10%, 36%, 0.041);
		display: flex;
		flex-direction: column;
		margin-top: 24px;
		margin-bottom: 24px;
		padding: 1.4rem 2.4rem;
		border-radius: var(--radius-corner);
	}

	.learn-more-box :global(div) {
		padding-left: 3.2rem;
	}

	.learn-more-box :global(h3) {
		margin-top: 0;
	}

	.learn-more-box :global(ul) {
		list-style: none;
		padding: 0;
	}

	.learn-more-box :global(li a) {
		padding: 0;
		margin: 0;
	}

	.learn-more-box :global(a) {
		font-family: var(--font-headings);
		font-size: 1.2em;
		padding: 0 0 1rem 0;
	}

	@media (min-width: 600px) {
		.learn-more-box {
			max-height: 160px;
			flex-direction: row;
			align-items: center;
			justify-content: start;
		}

		.learn-more-box :global(img) {
			max-width: 240px;
		}

		.learn-more-box :global(a) {
			padding: 0 0 0 1rem;
		}
	}
</style>

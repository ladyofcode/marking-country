<div class="two-column-container"><slot /></div>

<style>
	.two-column-container {
		max-width: 800px;
		margin: 2.4rem auto;
		display: flex;
		flex-direction: column;
		margin-bottom: 4rem;
	}

	.two-column-container :global(img) {
		border-radius: var(--corner-radius);
	}

	.two-column-container :global(figcaption) {
		text-align: left;
	}

    @media (min-width: 900px) {
        .two-column-container {
            margin-bottom: 2.4rem;
        flex-direction: row;
        }

        .two-column-container :global(>figure) {
            display: flex;
            flex-direction: row;
        }

        .two-column-container :global(div:first-child),
        .two-column-container :global(figure>div:first-child) {
            max-width: 50%;
            margin-right: 1.2rem;
        }

        .two-column-container :global(div:last-child),
        .two-column-container :global(figure>div:last-child) {
            max-width: 50%;
            margin-left: 1.2rem;
        }
    }
</style>

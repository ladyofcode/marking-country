<script>
	export let credit;
</script>

<div class="quote-fullscreen-container">
	<figure>
		<blockquote><slot /></blockquote>
		{#if credit}
			<figcaption>~ {credit}</figcaption>
		{/if}
	</figure>
</div>

<style>
	.quote-fullscreen-container {
		background-color: #21201f;
		min-height: 64vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	figure {
		max-width: 80vw;
		padding: 2.4rem 1.6rem;
	}

	blockquote {
		border-top: 2px solid var(--clr-terracotta);
		border-bottom: 2px solid var(--clr-terracotta);
		border-left: none;
		font-family: Georgia, Times, 'Times New Roman', serif;
		position: relative;
		transition: 0.2s border ease-in-out;
		width: 100%;
		font-size: 2rem;
		line-height: 2.4rem;
		padding: 1.6rem 0;
	}

	.quote-fullscreen-container :global(p) {
		color: var(--clr-terracotta);
		font-size: 1.6rem;
		margin-top: 1rem;
	}

	blockquote:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 4px;
		margin-top: -3px;
		margin-left: -1em;
		width: 4rem;
		background-color: #21201f;
	}

	blockquote:after {
		content: '“';
		position: absolute;
		top: 0;
		left: 50%;
		color: var(--clr-terracotta);
		font-style: normal;
		font-size: 4rem;
		text-align: center;
		text-indent: -8px;
		width: 1rem;
		margin-left: -0.1em;
		transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
		margin-top: -0.5rem;
	}

	figcaption {
		font-size: 1.2rem;
		text-align: right !important;
		line-height: 1.8em;
		width: 100%;
		color: #ffffff;
	}

	@media (min-width: 900px) {
		figure {
			max-width: 800px;
			padding: 0;
		}

		blockquote {
			border: 0 ;
			border-left: 3px solid var(--clr-terracotta);
			font-size: 1.1em;
			margin: 1.1em -4em 0em 0rem;
			padding: 1rem 0rem 1rem 2rem;
		}

		blockquote:before {
			left: -4px;
			top: 50%;
			height: 2rem;
			margin: 0;
			margin-top: -1em;
			width: 2rem;
		}
		blockquote:after {
			line-height: 1rem;
                font-size: 4rem;
                left: -0.5rem;
                top: 50%;
                margin: 0;
                margin-top: 0.5rem;
		}

		.quote-fullscreen-container :global(p) {
		margin-left: 2rem;
	}
	}
</style>

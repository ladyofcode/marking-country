<script>
	export let credit;
</script>

<figure class="quote quote-inline">
	<blockquote><slot /></blockquote>
	{#if credit}
	<figcaption>~ {credit}</figcaption>
	{/if}
</figure>

<style>
	blockquote {
		border-top: 2px solid var(--color-terracotta);
		border-bottom: 2px solid var(--color-terracotta);
		border-left: none;
		font-family: Georgia, Times, 'Times New Roman', serif;
		line-height: 2rem;
		position: relative;
		transition: 0.2s border ease-in-out;
		width: 100%;
	}

	.quote :global(blockquote > p) {
		color: var(--color-terracotta) !important;
	}

	blockquote:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 4px;
		background-color: var(--color-dark-charcoal);
		width: 2rem;
		margin-top: -3px;
		margin-left: -1em;
	}

	blockquote:after {
		content: '“';
		position: absolute;
		top: 0;
		left: 50%;
		color: var(--color-terracotta);
		font-style: normal;
		font-size: 4rem;
		text-align: center;
		text-indent: -8px;
		width: 1rem;
		margin-top: 0.1rem;
		margin-left: -0.1em;
		transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
	}

	.quote > figcaption {
		font-size: 1.2rem;
		text-align: right !important;
		line-height: 1.8em;
		width: 100%;
	}

	.quote-inline {
		margin-bottom: 1.6rem;
	}

	.quote-inline > blockquote {
		padding: 0.8rem 0;
		margin: 1.6rem 0;
	}

	::slotted(p) {
		font-size: 1.2rem;
	}

	@media (min-width: 900px) {
		blockquote {
			border: 0;
			border-left: 3px solid var(--color-terracotta);
			font-size: 1.1em;
			margin: 1.1em -4em 0em 0rem;
		}

		blockquote:before {
			left: -4px;
			top: 50%;
			height: 2rem;
			margin: 0;
			margin-top: -1em;
			width: 5px;
		}

		blockquote:after {
			line-height: 1rem;
			font-size: 4rem;
			left: -0.5rem;
			top: 50%;
			margin: 0;
			margin-top: 0.5rem;
		}

		.quote-inline blockquote {
			padding: 1.6rem 0rem 1.6rem 2.4rem;
		}
	}
</style>

<script>
	export let credits;
</script>

<div class="container">
	{#each credits as credit}
		<p><strong>{credit.title}</strong></p>
		<p>{credit.names}</p>
	{/each}
</div>

<style>
	.container {
		margin: 0 auto;
		margin-top: 1.2rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	p:nth-child(odd) {
		margin: 0;
	}

	p:nth-child(even) {
		margin: 0;
	}

	p {
		display: block;
		grid-column: auto;
		grid-row: auto;
	}

	@media (min-width: 900px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas: 'a a';
			grid-auto-rows: auto;
			grid-column-gap: 16px;
			grid-row-gap: 0px;
		}

		p:nth-child(odd) {
			text-align: right;
		}
	}
</style>

<script>
	export let audio;
	export let credit;
</script>

<figure>
	<audio controls>
		<source src={audio} />
	</audio>
	{#if credit}
		<figcaption>{credit}</figcaption>
	{/if}
</figure>

<style>
	figure {
		color: var(--clr-text);
		margin-bottom: 0;
	}

	audio {
		width: 100%;
	}
</style>

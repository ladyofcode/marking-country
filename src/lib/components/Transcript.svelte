<script>
    export let summary='';
</script>

<details>
    <summary>{summary}</summary>
    <slot />
</details>

<style>
	details {
		border: 1px solid var(--clr-light-contrast);
		border-radius: var(--radius-corner);
		padding: var(--space-sm) var(--space-lg);
		margin-bottom: var(--space-xxxl);
	}

	details[open] {
		padding: var(--space-lg);
	}

	summary {
		color: var(--clr-text);
		font-family: var(--font-sans);
		text-transform: uppercase;
	}
</style>
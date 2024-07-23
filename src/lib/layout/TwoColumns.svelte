<script>
	export let id = '';
	export let center = false;
</script>

<div {id} class="wrapper">
	<div class="container" class:center>
		<div class="column1">
			<slot name="column1" />
		</div>
		<div class="column2">
			<slot name="column2" />
		</div>
	</div>
</div>

<style>
	.wrapper {
		padding: var(--space-xl);
		margin: 0 auto;
	}
	.container {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 900px) {
		.wrapper {
			padding: var(--space-xxxxl) var(--space-xl);
			max-width: var(--width-site);
		}
		.container {
			flex-direction: row;
		}
		.center {
			align-items: center;
		}
		.column1 {
			max-width: 40%;
			margin-right: var(--space-xl);
		}
		.column2 {
			width: 100%;
			max-width: 50%;
		}
	}

	@media (min-width: 1200px) {
		.wrapper {
			padding: var(--space-xxxxl) 0;
		}
	}
</style>

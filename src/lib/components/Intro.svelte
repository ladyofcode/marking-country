<script>
	export let intro;
</script>

<div class="container {intro}">
	<div>
		<slot />
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
    
	.container > div {
		margin: 6.4rem auto;
		padding: 0 1.6rem;
		max-width: 800px;
		height: 100%;
	}

	.carnarvon {
		background-color: rgb(21, 21, 11);
	}

	.willandra {
		background: rgb(129, 107, 94);
	}

	.woddordda {
		background-color: rgb(64, 100, 103);
	}

	.ngarinyin {
		background-color: rgb(54, 46, 43);
	}

	.yawuru {
		background-color: rgb(27, 25, 26);
	}

	.yalanji {
		background-color: rgb(147, 120, 99);
	}

	@media (min-width: 900px) {
		.container > div {
			padding: 0;
			margin: 8rem auto;
		}
	}
</style>

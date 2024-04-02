<div class="wrapper">
	<div>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		height: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 20;
	}

	.wrapper div {
		width: 100%;
		max-width: var(--width-content);
		text-align: center;
		padding: 0 var(--space-xl);
		animation: fadeIn 1.5s ease-out forwards;
	}

	.wrapper div :global(p) {
		font-family: var(--font-serif);
		font-size: var(--font-size-heading);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 900px) {
		.wrapper div {
			padding: 0;
		}
	}
</style>

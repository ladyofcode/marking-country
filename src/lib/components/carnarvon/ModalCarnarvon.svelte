<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<div class="top-bar">
            <!-- svelte-ignore a11y-autofocus -->
			<span autofocus on:click={() => dialog.close()} class="close"> &times; </span>
		</div>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		top: 40px;
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin: 0 auto;
		background-color: var(--clr-dark-charcoal);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.6);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.top-bar {
		padding: 0 1rem;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		height: 80px;
		background-color: var(--clr-terracotta);
	}
	.close {
		color: #ffffff;
		float: right;
		font-size: 3.2rem;
		font-weight: bold;
	}
	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>

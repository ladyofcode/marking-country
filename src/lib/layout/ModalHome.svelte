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
	<div class="wrapper" on:click|stopPropagation>
		<div class="top-bar">
			<!-- svelte-ignore a11y-autofocus -->
			<span autofocus on:click={() => dialog.close()} class="close"> &times; </span>
		</div>
		<div class="content">
			<slot name="header" />
		</div>
		<!-- <hr /> -->
		<!-- <div class="content">
			<slot />
		</div> -->
	</div>
</dialog>

<style>
	dialog {
		/* max-width: 32em; */
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin: 0 auto;
		width: 100%;
		height: fit-content;
		background-color: var(--clr-dark-charcoal);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.585);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.wrapper {
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
	.wrapper > .content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-bar {
		padding: 0 1rem;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		height: 80px;
		background-color: var(--clr-terracotta);
		margin-bottom: 20px;
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

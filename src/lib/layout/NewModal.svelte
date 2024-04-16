<script>
	import { onMount, onDestroy } from 'svelte';

	export let showModal; // boolean
	export let heading = 'Information';
	export let content = '';
	export let thinImage = false;

	let dialog; // HTMLDialogElement

	// Function to disable scrolling
	function disableScroll() {
		document.body.classList.add('no-scroll');
	}

	// Function to enable scrolling
	function enableScroll() {
		document.body.classList.remove('no-scroll');
	}

	// Reactively open/close the dialog and toggle scroll
	$: if (dialog && showModal) {
		dialog.showModal();
		disableScroll();
	} else {
		enableScroll();
	}

	// Cleanup: Make sure scrolling is enabled when the component is destroyed
	onDestroy(() => {
		enableScroll();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class:thin={thinImage}
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="header">
		<h2>{heading}</h2>
		<button class="btn-close" autofocus on:click={() => dialog.close()}
			><span class="icon-cross" />
			<span class="visually-hidden">Close</span>
		</button>
	</div>
	<div class="content" on:click|stopPropagation>
		{#each content as item}
			{#if item.markup}
				<div>{@html item.markup}</div>
			{:else if item.component}
				<svelte:component this={item.component} {...item.props}>
					<!-- Rendering children as raw HTML; adjust if `children` should be used differently -->
					{@html item.children ? item.children : ''}
				</svelte:component>
			{/if}
		{/each}
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
	dialog {
		width: 100%;
		height: 100%;
		max-width: var(--width-content);
		margin: 0 auto;
		max-height: calc(var(--height-viewable) - 10vh);
		margin-top: calc(var(--height-menu) + 2vh);
		border-radius: 0.2em;
		border: none;
		padding: 0;
		overflow-y: auto;
		background-color: var(--clr-light-contrast);
		border-radius: var(--radius-corner);
	}
	:global(dialog.thin img) {
		max-width: 400px;
	}
	h2 {
		margin: 0;
	}
	.header {
		background-color: var(--clr-bg-main);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
	}
	dialog > div {
		padding: var(--space-lg) var(--space-lg);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
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
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	button {
		display: block;
	}
	.btn-close {
		margin: 0;
		border: 0;
		padding: 0;
		background: var(--clr-bg-main);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 150ms;
	}
	.btn-close .icon-cross {
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		position: relative;
		width: 32px;
		height: 32px;
	}
	.btn-close .icon-cross:before,
	.btn-close .icon-cross:after {
		content: '';
		position: absolute;
		top: 15px;
		left: 0;
		right: 0;
		height: 4px;
		background: var(--clr-clay);
		border-radius: 4px;
	}
	.btn-close .icon-cross:before {
		transform: rotate(45deg);
	}
	.btn-close .icon-cross:after {
		transform: rotate(-45deg);
	}
	.btn-close .icon-cross span {
		display: block;
	}
	/* .btn-close:hover,
	.btn-close:focus {
		transform: rotateZ(90deg);
		background: var(--clr-clay);
	} */
	/* .btn-close:hover .icon-cross:before,
	.btn-close:hover .icon-cross:after {
        background: var(--clr-grey);

    } */
	.visually-hidden {
		position: absolute !important;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0 !important;
		border: 0 !important;
		height: 1px !important;
		width: 1px !important;
		overflow: hidden;
	}
</style>

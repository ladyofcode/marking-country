<script>
	export let showModal; // boolean

	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';

	let dialog; // HTMLDialogElement

	$: if (dialog) {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}

	let background = `${base}/images/acknowledgement_background.png`;
	let handleClick;

	// Reactively open/close the dialog and toggle scroll
	$: if (dialog && showModal) {
		dialog.showModal();
		disableScroll();
	} else {
		enableScroll();
	}

	onMount(() => {
		const acknowledgementSeen = JSON.parse(window.localStorage.getItem('ACKNOWLEDGEMENT_MODAL'));
		if (acknowledgementSeen) {
			showModal = false; // Don't show the modal if it's already been acknowledged.
		} else {
			showModal = true; // This will trigger the modal to open if not acknowledged.
		}

		handleClick = () => {
			dialog.close();
			showModal = false; // Ensure showModal is updated to prevent reopening.
			window.localStorage.setItem('ACKNOWLEDGEMENT_MODAL', JSON.stringify(true)); // Store that modal was acknowledged.
		};
	});

	// Function to disable scrolling
	function disableScroll() {
		if (typeof window !== 'undefined') {
			document.body.classList.add('no-scroll');
		}
	}

	// Function to enable scrolling
	function enableScroll() {
		if (typeof window !== 'undefined') {
			document.body.classList.remove('no-scroll');
		}
	}

	// Cleanup: Make sure scrolling is enabled when the component is destroyed
	onDestroy(() => {
		enableScroll();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = false)}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="wrapper" on:click|stopPropagation>
		<div class="content">
			<p>
				Aboriginal and Torres Strait Islander people are advised that this website may contain
				images, voices, and videos of deceased persons.
			</p>
			<p>
				The Research Centre for Deep History acknowledges the Traditional Owners and Custodians of
				Country throughout the continent of Australia and its adjacent islands.
			</p>
			<p>
				We recognise their continuing connection to land, waters and community, and pay respects to
				Elders past and present.
			</p>
			<!-- svelte-ignore a11y-autofocus -->
			<button autofocus on:click={() => handleClick()}>Continue</button>
		</div>
	</div>
	<img src={background} alt="" />
</dialog>

<style>
	dialog {
		display: none;
		overflow: hidden;
		border: none;
		padding: 0;
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		background-color: var(--clr-bg-main);
	}
	dialog::backdrop {
		position: relative;
		z-index: 4;
	}
	dialog[open] {
		display: block;
	}
	.wrapper {
		overflow: hidden;
		height: 100vh;
		width: 100vw;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content {
		max-width: var(--width-content);
		background-color: rgba(50, 50, 50, 0.711);
		padding: var(--space-lg);
		text-align: center;
		border-radius: var(--radius-corner);
	}
	button {
		display: block;
		border: none;
		border-radius: 2px;
		background-color: #935550;
		font-size: var(--font-size-body);
		color: #ffffff;
		padding: var(--space-md) var(--space-xl);
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		font-weight: 400;
		margin: 0 auto;
		margin-top: var(--space-lg);
	}

	button:hover {
		background-color: #462826;
		cursor: pointer;
	}

	img {
		height: 100%;
		width: 100%;
		margin: 0 auto;
		object-fit: contain;
		position: fixed;
		z-index: -2;
		top: 0;
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

	@media (min-width: 900px) {
		.content {
			padding: var(--space-xxxl);
			font-size: var(--font-size-body);
		}
		button {
			margin-top: var(--space-xxl);
		}
	}
</style>

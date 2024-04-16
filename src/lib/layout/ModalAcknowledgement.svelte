<script>
	export let showModal; // boolean

	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let dialog; // HTMLDialogElement

	$: if (dialog) {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}

	let background = `${base}/images/acknowledgement_background.jpg`;
	let handleClick;

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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = false)}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<img src={background} alt="" />
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
</dialog>

<style>
	dialog {
		/* max-width: 32em; */
		/* border-radius: 0.2em; */
		display: none;
		overflow: hidden;
		border: none;
		padding: 0;
		margin: 0 auto;
		margin-top: 20px;
		width: 100%;
		height: 100%;
		background-color: black;
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.585);
	}
	/* dialog > div {
		padding: 1em;
	} */
	dialog[open] {
		display: block;
	}
	.wrapper {
		overflow: hidden;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content {
		max-width: 800px;
		background-color: rgba(50, 50, 50, 0.711);
		padding: 2em;
		text-align: center;
	}
	button {
		display: block;
		border: none;
		border-radius: 2px;
		background-color: #935550;
		font-size: 1rem;
		color: #ffffff;
		padding: 1rem 2rem;
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		font-weight: 400;
		margin: 0 auto;
		margin-top: 1.2rem;
	}

	button:hover {
		background-color: #462826;
		cursor: pointer;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: fixed;
		z-index: -2;
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
			padding: 4em;
			font-size: 1.6rem;
		}
		button {
			margin-top: 4rem;
		}
	}
</style>

<script>
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import Map from '$lib/components/Map.svelte';
	import NewModal from '$lib/layout/NewModal.svelte';
	import { switcher } from '../stores/sectionSwitcherStore';
	import { onMount } from 'svelte';

	const switcherLinks = [];

	const video = `${base}/videos/Introduction.mp4`;

	let showModal = false;

	const pageTitle = 'Home';

	onMount(() => {
		switcher.set(switcherLinks);
	});

	const modalContent = [
		{
			markup: `<video controls>
					<source src=${video} />
				</video>`
		}
	];
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="header">
	<h1>Marking Country</h1>
	<h2>Mapping deep histories</h2>
	<div class="map">
		<Map />
	</div>
</section>

<section class="content marking-country">
	<p>
		Every part of Australia has its deep history stories. This is a place where you can experience
		some of them, told from the perspectives and in the voices of the land's sovereign peoples, its
		Indigenous custodians. These are living histories that continue to be enacted, revived,
		performed and depicted on the lands and waterways of Australia today.
	</p>

	<div class="home-buttons">
		<button on:click={() => (showModal = true)}>Watch introduction</button>
		<button
			on:click={() => {
				goto(`${base}/about/`);
			}}>About Marking Country</button
		>

		<NewModal bind:showModal heading="Introduction" content={modalContent}></NewModal>
	</div>
</section>

<style>
	.header {
		max-width: var(--width-site);
		margin: 0 auto;
		margin-bottom: 12px;
		padding: var(--space-lg);
	}

	h1 {
		font-size: var(--font-size-heading);
		margin-top: var(--space-lg);
		margin-bottom: 0;
	}

	h2 {
		font-size: var(--font-size-subheading);
		line-height: var(--font-size-subheading);
		margin-top: 0;
	}

	.map {
		margin: 0 auto;
	}

	.marking-country {
		padding: var(--space-lg);
		width: 100%;
		max-width: var(--width-content);
		margin: 0 auto;
	}

	.home-buttons {
		display: flex;
		flex-direction: column;
	}

	.home-buttons button:first-of-type {
		background-color: var(--clr-clay);
		margin-right: 2rem;
		color: #ffffff;
	}

	.home-buttons button:last-of-type {
		background-color: transparent;
		color: var(--clr-clay);
	}

	button {
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		width: 100%;
		border: 2px solid var(--clr-clay);
		border-radius: var(--radius-corner);
		margin: var(--space-md) 0;
		padding: var(--space-md) var(--space-lg);
		font-size: 1rem;
	}

	button:hover {
		border: 2px solid var(--clr-clay);
		background-color: var(--clr-charcoal) !important;
		color: #ffffff !important;
		cursor: pointer;
	}

	@media (min-width: 600px) {
		.map {
			margin-top: 0;
		}
	}

	@media (min-width: 900px) {
		.header {
			padding: 0;
			padding-top: calc(var(--space-xxxl) + var(--space-lg));
		}

		h1,
		h2 {
			padding-left: var(--space-lg);
		}

		h1 {
			font-size: var(--font-size-hero);
			line-height: var(--font-size-hero-large);
			margin-bottom: 0;
		}

		h2 {
			font-size: var(--font-size-heading);
			line-height: var(--font-size-heading);
			margin-bottom: -80px;
		}

		.marking-country {
			padding: var(--space-xxxxl) 0;
		}

		.home-buttons {
			flex-direction: row;
			justify-content: flex-start;
		}

		button {
			margin: var(--space-xl) 0;
		}
	}
</style>

<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	// import { isScrollPaused } from '../../stores/scrollControlStore';
	import { openSwitcher } from '../../stores/sectionSwitcherStore';
	import ThemeToggle from './ThemeToggle.svelte';
	// import { bodyOverflow } from '../../stores/scrollControlStore';

	let menuChecked = false;
	let isLargeScreen = false;
	let ariaHidden = false;
	let handleSubNav;
	let currentOpenSubnav = null;
	const largeScreen = window.matchMedia('(min-width: 900px)');

	$: $page.path, closeNav();

	// $: if (menuChecked && isLargeScreen === false) {
	// 	bodyOverflow.set('hidden');
	// } else {
	// 	bodyOverflow.set('');
	// }

	function closeNav(event) {
		if (event && event.target.getAttribute('href') !== '#') {
			menuChecked = false;
			currentOpenSubnav = null;
		}
	}

	let menuItems = [
		{
			title: 'Marking Country',
			url: `/`
		},
		{
			title: 'About',
			url: `${base}#`,
			subnavId: 'subnav1',
			subItems: [
				{ title: 'Marking Country', url: `${base}/about` },
				{ title: 'Educational resources', url: `${base}/educational-resources` }
			]
		},
		{ title: 'Mapping', url: `${base}/mapping` },
		{
			title: 'Deep Histories',
			url: `${base}#`,
			subnavId: 'subnav2',
			subItems: [
				{ title: 'Carnarvon', url: `${base}/carnarvon-gorge` },
				{ title: 'Western Yalanji', url: `${base}/western-yalanji` },
				{ title: 'Willandra', url: `${base}/willandra-lakes` },
				{ title: 'Woddordda & Ngarinyin', url: `${base}/woddordda-ngarinyin-intro` },
				{ title: 'Yawuru', url: `${base}/yawuru` }
			]
		}
	];

	let handleMatchMedia = (event = largeScreen) => {
		if (event.matches) {
			isLargeScreen = true;
			menuChecked = true;
			ariaHidden = true;
		} else {
			isLargeScreen = false;
			menuChecked = false;
			ariaHidden = false;
		}
	};

	onMount(() => {
		handleMatchMedia();
		largeScreen.onchange = (event) => {
			handleMatchMedia(event);
		};

		handleSubNav = (nav, event) => {
			if (nav.length > 0) {
				event.preventDefault();
			}
			currentOpenSubnav = currentOpenSubnav === nav ? null : nav;
		};
	});

	onDestroy(() => {});
</script>

<div class="wrapper" class:open={menuChecked && !isLargeScreen}>
	<div class="top-bar" class:open={menuChecked} aria-hidden={ariaHidden}>
		<input
			type="checkbox"
			class="menu-button"
			id="menu-button"
			bind:checked={menuChecked}
			on:click={() => {
				menuChecked = !menuChecked;
				// isScrollPaused.set(menuChecked);
				openSwitcher.update((value) => !value);
			}}
		/>
		<label for="menu-button">
			<div class="hamburger">
				<span class="line line1" />
				<span class="line line2" />
				<span class="line line3" />
			</div>
		</label>
		<div class="top-bar-underlay" class:open={menuChecked} aria-hidden={ariaHidden} />
	</div>
	<nav class:open={menuChecked} aria-label="Main Navigation Menu">
		<ul>
			{#each menuItems as { title, url, subnavId, subItems }}
				<li>
					<a
						href={url}
						on:click={(event) => {
							handleSubNav(subnavId ?? '', event);
							closeNav(event);
						}}
						class:highlight={currentOpenSubnav === subnavId}
					>
						{title}

						{#if url.includes('#')}
							<div
								class="arrow {currentOpenSubnav === subnavId ? 'down' : ''}"
								aria-hidden="true"
							/>
						{/if}
					</a>
					{#if subItems}
						<ul
							class="subnav-content"
							class:open={currentOpenSubnav === subnavId}
							aria-label={`Submenu ${title}`}
						>
							{#each subItems as { title, url }}
								<li>
									<a href={url} on:click={(event) => closeNav(event)}>
										{title}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
			<li class="toggle"><ThemeToggle /></li>
		</ul>
	</nav>
</div>
<div
	class="overlay"
	class:open={menuChecked && !isLargeScreen}
	on:click={() => {
		menuChecked = false;
		// isScrollPaused.set(menuChecked);
		openSwitcher.update((value) => !value);
	}}
	aria-hidden="true"
/>

<style>
	.wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		right: 0;
		height: 0;
		z-index: 2000;
		box-shadow: 0 2px 2px -3px rgba(0, 0, 0, 0.2);
	}
	.wrapper.open {
		pointer-events: auto;
		height: 100vh;
	}

	.toggle {
		display: block;
		padding: 1.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.overlay {
		width: 100%;
		height: 200vh;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1800;
		background-color: rgba(0, 0, 0, 0.7);
		visibility: hidden;
		opacity: 0;
		cursor: pointer;
		pointer-events: none;
		transition:
			opacity 0.4s ease-in-out,
			visibility 0.4s ease-in-out;
	}

	.overlay.open {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}

	.top-bar {
		height: 70px;
		width: 0;
	}

	nav,
	.top-bar-underlay,
	label {
		background-color: var(--clr-bg-block-dark);
	}

	.top-bar-underlay {
		display: block;
		height: 70px;
		width: 280px;
		transform: translateX(100%);
		transition:
			transform 0.3s ease-in-out,
			width 0.3s ease-in-out;
	}
	.top-bar.open,
	.top-bar-underlay.open {
		width: 280px;
	}

	nav.open {
		transform: translateX(0);
	}

	.top-bar-underlay.open {
		transform: translateX(0);
	}

	nav {
		flex: 1;
		height: 100%;
		max-height: calc(100vh + var(--height-menu));
		box-sizing: border-box;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		transform: translateX(100%);
		width: 280px;
		transition:
			transform 0.3s ease-in-out,
			width 0.3s ease-in-out;
	}
	nav.open {
		width: 280px;
		transform: translateX(0);
	}

	nav > ul > li:last-of-type {
		justify-content: flex-start;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li a {
		display: block;
		padding: 1.6rem;
		text-decoration: none;
	}

	nav > ul > li:first-of-type > a {
		font-family: var(--font-serif);
		font-size: var(--font-size-subheading);
		font-weight: bold;
	}

	li a:hover,
	a.highlight {
		background-color: var(--clr-clay);
		color: var(--clr-text);
	}

	.subnav-content {
		background-color: var(--clr-dark-contrast);
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.5s ease-out,
			opacity 0.5s ease;
		opacity: 0;
		border-bottom: 1px solid var(--clr-clay);
	}

	.subnav-content.open {
		max-height: 600px; /* Based on content */
		opacity: 1;
	}

	.arrow {
		display: block;
		float: right;
		border: solid var(--clr-terracotta);
		border-width: 0 3px 3px 0;
		padding: 3px;
		margin-top: 10px;
		transform: rotate(135deg);
		transition: transform 0.3s ease-in-out;
	}

	.arrow.down {
		transform: rotate(45deg);
	}

	.menu-button {
		display: none;
	}

	label {
		display: initial;
		position: fixed;
		top: 16px;
		right: 16px;
		border: 2px solid var(--clr-clay);
		padding: 8px;
		z-index: 1200;
		transition: background-color 0.2s ease-in-out;
	}

	.hamburger {
		cursor: pointer;
		width: 28px !important;
		height: 24px;
		right: 16px;
		top: 16px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.hamburger:hover {
		cursor: pointer;
	}

	.line {
		display: block;
		border-radius: 10px;
		height: 3px;
		width: 100%;
		transition: 0.5s;
		background-color: var(--clr-clay);
	}

	.menu-button:checked ~ label .hamburger .line1 {
		transform: translateY(9px) rotate(45deg);
		background-color: var(--clr-clay);
	}
	.menu-button:checked ~ label .hamburger .line2 {
		opacity: 0;
		background-color: var(--clr-clay);
	}
	.menu-button:checked ~ label .hamburger .line3 {
		transform: translateY(-12px) rotate(-45deg);
		background-color: var(--clr-clay);
	}

	.menu-button:checked ~ label {
		background-color: transparent;
	}

	@media (min-width: 900px) {
		.wrapper {
			min-height: 0;
			height: fit-content;
			width: 100%;
			flex-direction: row;
			justify-content: center;
			overflow: visible;
		}

		.overlay {
			display: none;
		}

		.top-bar,
		.top-bar.open,
		.subnav-content {
			background-color: var(--clr-bg-block-dark);
		}

		.top-bar,
		.top-bar.open {
			width: 100%;
			position: fixed;
		}

		input,
		label,
		.top-bar-underlay {
			display: none;
		}

		nav {
			height: fit-content;
			flex-direction: row;
			width: 100%;
			max-width: var(--width-site);
			overflow: visible;
			background-color: transparent;
			transform: translateX(0%);
		}

		nav > ul {
			height: fit-content;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
		}

		nav > ul > li:first-of-type {
			margin-right: auto;
		}

		nav > ul > li:first-of-type > a {
			margin-top: -4px;
		}

		ul > li > ul {
			border-bottom-left-radius: var(--radius-corner);
			border-bottom-right-radius: var(--radius-corner);
		}

		li {
			height: fit-content;
		}

		li a {
			padding: var(--space-lg);
		}

		.subnav-content {
			position: absolute;
			top: 70px;
			z-index: 1400;
		}

		.arrow {
			margin-left: 20px;
		}

		li:hover .arrow {
			transform: rotate(45deg);
			border: solid var(--clr-text);
			border-width: 0 3px 3px 0;
		}

		nav > ul > li:hover > .subnav-content {
			display: block; /* Show submenu */
			max-height: none; /* Ensure fully visible */
			opacity: 1;
		}

		/* Rotate arrow when parent li is hovered and submenu open */
		nav > ul > li:hover > a.highlight > .arrow,
		nav > ul > li > a.highlight:hover > .arrow {
			transform: rotate(-135deg); /* Adjust rotation angle as needed */
			transition: transform 0.3s ease-in-out;
		}

		nav > ul > li:hover .subnav-content,
		nav > ul > li .subnav-content:hover {
			display: block;
			max-height: 600px; /* or whatever maximum height */
			opacity: 1;
		}
	}
</style>

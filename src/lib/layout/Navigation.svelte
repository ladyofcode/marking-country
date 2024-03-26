<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';

	let menuChecked = false;
	let isLargeScreen = false;
	let ariaHidden = false;
	let hasInteracted = false;
	let handleSubNav;
	let currentOpenSubnav = null;
	const largeScreen = window.matchMedia('(min-width: 900px)');

	function closeNav(event) {
		if (event && event.target.getAttribute('href') !== '#') {
			menuChecked = false;
			currentOpenSubnav = null;
		}
	}

	$: $page.path, closeNav();

	$: {
		if (menuChecked && isLargeScreen=== false) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	let menuItems = [
		{ title: 'Home', url: `${base}/` },
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

	// Initial check
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
		// Add listener for changes
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
</script>

<div class="wrapper">
	<div class="top-bar" aria-hidden={ariaHidden}>
		<input
			type="checkbox"
			class="menu-button"
			id="menu-button"
			bind:checked={menuChecked}
			on:click={() => (menuChecked = !menuChecked)}
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
		</ul>
	</nav>
</div>
<div
	class="overlay"
	class:open={menuChecked && !isLargeScreen}
	on:click={() => (menuChecked = false)}
	aria-hidden="true"
/>

<style>
	.wrapper {
		position: fixed;
		right: 0;
		height: 100%;
		min-height: 100vh;
		z-index: 200;
	}

	.overlay {
		width: 100%;
		height: 200vh;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.39);
		visibility: hidden;
		opacity: 0;
		cursor: pointer;
		pointer-events: none;
	}

	.overlay.open {
		opacity: 1;
		visibility: visible;
		transition: opacity 1s ease-in-out;
		pointer-events: auto;
	}

	.top-bar {
		height: 70px;
	}

	.top-bar-underlay {
		display: block;
		height: 70px;
		width: 280px;
		background-color: var(--clr-dark-charcoal);
		transition: transform 0.3s ease-in-out;
		transform: translateX(100%);
	}

	nav.open {
		transform: translateX(0);
	}
	.top-bar-underlay.open {
		transform: translateX(0);
	}

	nav {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		background-color: var(--clr-dark-charcoal);
		transition: transform 0.3s ease-in-out;
		transform: translateX(100%);
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

	li a:hover {
		background-color: grey;
	}

	.subnav-content {
		display: none;
	}

	.subnav-content.open {
		display: block;
	}

	.arrow {
		display: block;
		float: right;
		border: solid var(--clr-terracotta-dark);
		border-width: 0 3px 3px 0;
		padding: 3px;
		margin-top: 10px;
		transform: rotate(45deg);
	}

	.arrow.down {
		transform: rotate(135deg);
		transition: transform 0.3s ease-in-out;
	}

	.menu-button {
		display: none;
	}

	label {
		display: initial;
		position: fixed;
		top: 16px;
		right: 16px;
		background: black;
		padding: 8px;
		z-index: 200;
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
		background-color: #fff;
	}

	.menu-button:checked ~ label .hamburger .line1 {
		transform: translateY(9px) rotate(45deg);
		background-color: #fff;
	}
	.menu-button:checked ~ label .hamburger .line2 {
		opacity: 0;
		background-color: #fff;
	}
	.menu-button:checked ~ label .hamburger .line3 {
		transform: translateY(-12px) rotate(-45deg);
		background-color: #fff;
	}

	.menu-button:checked ~ label {
		background-color: transparent;
	}

	@media (min-width: 900px) {
		.wrapper {
			min-height: 0;
			height: fit-content;
			width: 100%;
			display: flex;
			justify-content: center;
			overflow:visible;
		}

		.overlay {
			display: none;
		}

		.top-bar {
			background-color: var(--clr-dark-charcoal);
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
			max-width: 1024px;
			overflow:visible;
			background-color: transparent;
			transform: translateX(0%);
		}
		
		/* .wrapper:hover, nav:hover {
			height: 100%;
		} */

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

		li {
			height: fit-content;
		}

		li a {
			padding: 1.4rem;
		}

		.subnav-content {
			background-color: var(--clr-dark-charcoal);
			position: absolute;
			top: 70px;
			z-index: 400;
		}

		.arrow {
			margin-left: 20px;
		}

		li:hover .arrow {
			transform: rotate(135deg);
			transition: transform 0.3s ease-in-out;
		}

		nav > ul > li > a:hover ~ .subnav-content,
		.subnav-content:hover {
			display: block;
		}

		.subnav-content.close {
			display: none;
		}
	}
</style>

<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let current = '';

	onMount(() => {
		handleMenuToggle = () => {
			if (input != null) {
        current = '';
				input.checked = false;
			}
		};
	});
</script>

<header>
	<div class="wrapper">
		<a href="{base}/" class="logo"
    on:click={() => handleMenuToggle()}
    >
			Home
		</a>

		<input type="checkbox" class="menu-button" id="menuButton" />
		<label htmlFor="menuButton" class="menu-label">
			<div class="hamburger">
				<div class="hamburger">
					<span class="line line1" />
					<span class="line line2" />
					<span class="line line3" />
				</div>
			</div>
		</label>
		<nav>
			<ul class="menu">
				<li class="subnav">
					<a href="{base}#"> About </a>
					<ul class="subnav-content">
						<li>
							<a
								href="{base}/about"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Marking Country
							</a>
						</li>
						<li>
							<a
								href="{base}/educational-resources"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Educational resources
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a
						href="{base}/mapping"
						class:active={current === ''}
						on:click={() => handleMenuToggle()}
					>
						Mapping
					</a>
				</li>
				<li class="subnav">
					<a href="{base}#"> Deep Histories </a>
					<ul class="subnav-content">
						<li>
							<a
								href="{base}/carnarvon-gorge"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Carnarvon
							</a>
						</li>
						<li>
							<a
								href="{base}/western-yalanji"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Western Yalanji</a
							>
						</li>
						<li>
							<a
								href="{base}/willandra-lakes"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Willandra
							</a>
						</li>
						<li>
							<a
								href="{base}/woddordda-ngarinyin-intro"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Woddordda & Ngarinyin
							</a>
						</li>
						<li>
							<a
								href="{base}/yawuru"
								class:active={current === ''}
								on:click={() => handleMenuToggle()}
							>
								Yawuru
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background-color: black;
		position: fixed;
		height: 64px;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1020;
	}

	.wrapper {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.wrapper a {
		text-decoration: none;
		display: block;
		padding: 1.2rem 1.6rem;
		width: 100%;
	}

	.wrapper a:hover {
		background-color: #2a2a2a;
		font-weight: bold;
	}
	.wrapper ul {
		list-style-type: none;
		padding: 0;
	}
 .logo {
		z-index: 300;
	}

	nav {
		position: absolute;
		height: 64px;
		margin: 0 auto;
		top: 100%;
		left: 0;
		right: 0;
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease-out;
	}

	nav a:first-of-type {
		float: left;
	}

	.menu {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: black;
	}

	nav ul li {
		width: 100%;
		position: relative;
	}
	nav ul li:focus-within > ul,
	.wrapper nav ul li:hover > ul {
		display: initial;
	}

	nav ul li ul {
		position: relative;
		left: 0;
		width: 200px;
		background-color: black;
		display: none;
	}

	nav ul li ul li a {
		width: 100%;
	}

	.menu-button {
		display: none;
	}
	.menu-label {
		display: initial;
	}

	.hamburger {
		height: 52px;
		width: 40px;
		margin-right: 12px;
		margin-left: auto;
		padding: 8px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger:hover {
		cursor: pointer;
	}

	.line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background-color: #fff;
	}

	.line1 {
		transform-origin: 0% 0%;
		transition: transform 0.4s ease-in-out;
	}
	.line2 {
		transition: transform 0.2s ease-in-out;
	}
	.line3 {
		transform-origin: 0% 100%;
		transition: transform 0.4s ease-in-out;
	}

	/* .active {
		text-decoration: underline !important;
		font-weight: bold;
		text-decoration-color: #e96f24 !important;
		text-decoration-thickness: 4px !important;
	} */

	.menu-button:checked ~ nav {
		max-height: 100%;
		overflow: visible;
	}
	.menu-button:checked ~ .menu-label .hamburger .line1 {
		transform: rotate(45deg);
		background-color: #fff;
	}
	.menu-button:checked ~ .menu-label .hamburger .line2 {
		transform: scaleY(0);
		background-color: #fff;
	}
	.menu-button:checked ~ .menu-label .hamburger .line3 {
		transform: rotate(-45deg);
		background-color: #fff;
	}

	@media (min-width: 900px) {
		.wrapper a {
			width: fit-content;
		}

		nav {
			top: 0;
			overflow: visible;
		}

		.menu {
			flex-direction: row;
			justify-content: flex-end;
		}

		nav ul li ul {
			position: absolute;
			top: 64px;
		}
		nav ul li {
			width: fit-content;
		}

		nav ul li ul li {
			width: 100%;
		}

		.hamburger {
			display: none;
		}
	}
</style>

<script>
	export let links = '';
	export let smoother;
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { openSwitcher } from '../../stores/sectionSwitcherStore';

	let labelRef, ulRef;
	let menuChecked = false;

	function handleClick(ref) {
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: ref,
				offsetY: 0
			},
			ease: 'power2.inOut'
		});
		menuChecked = false;
	}


	onMount(() => {
		ScrollTrigger.normalizeScroll(true);

		// Close menu on scroll
		const handleScroll = () => {
			menuChecked = false;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="wrapper {menuChecked ? 'open' : ''}" class:lower-z={$openSwitcher}>
	<input
		type="checkbox"
		class="menu-button"
		id="dot-nav"
		bind:checked={menuChecked}
		on:click={() => (menuChecked = !menuChecked)}
	/>
	<label for="dot-nav" bind:this={labelRef} class:open={menuChecked}>
		<div class="arrow--l-r" class:left={menuChecked}>
			<span />
			<span />
			<span />
			<span />
			<span />
		</div>
	</label>
	<ul class:open={menuChecked} bind:this={ulRef}>
		{#each links as { title, ref }}
			<li>
				<a href={ref} on:click|preventDefault={() => handleClick(ref)}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.wrapper {
		position: fixed;
		display: flex;
		flex-direction: row;
		z-index: 2000;
		top: 80px;
		width: 0;
		right: 0;
		opacity: 1;
		transition:
			width 0.5s ease-in-out,
			opacity 0.5s ease-in-out,
			z-index 0s linear 0.5s;
	}
	.wrapper.open {
		width: 320px;
	}

	.wrapper.lower-z {
		transition: opacity 0.5s ease-in-out;
		opacity: 0;
		z-index: 1800;
	}

	input {
		display: none;
	}

	label {
		display: initial;
		position: absolute;
		width: 67px;
		height: 40px;
		background: var(--clr-dark-charcoal);
		border: 2px solid var(--clr-charcoal);
		border-right: 0;
		border-radius: var(--space-sm) 0 0 var(--space-sm);
		padding: 8px;
		right: -2px;
		z-index: 1200;
		transform: translateX(0);
		transition:
			background-color 0.2s ease-in-out,
			transform 0.3s ease-in-out;
	}
	label.open {
		transform: translateX(-320px);
	}

	ul {
		padding: 2rem 4rem;
		list-style: none;
		background: var(--clr-dark-charcoal);
		transform: translateX(100%);
		transition: transform 0.3s ease-in-out;
		width: 320px;
		border: 2px solid var(--clr-charcoal);
		border-bottom-left-radius: var(--space-sm);
	}
	ul.open {
		transform: translateX(0);
		width: 320px;
	}

	a {
		text-decoration: none;
	}

	.arrow--l-r {
		width: 1.25rem;
		height: 1.25rem;
		display: inline-block;
		position: relative;
		margin: 0 0.2rem;
	}
	.arrow--l-r span:nth-child(4) {
		visibility: visible;
		transform: rotate(-45deg);
	}
	.arrow--l-r span:nth-child(5) {
		visibility: visible;
		transform: rotate(45deg);
	}
	.arrow--l-r.left span:nth-child(4) {
		visibility: hidden;
		transform: rotate(-45deg);
	}
	.arrow--l-r.left span:nth-child(5) {
		visibility: hidden;
		transform: rotate(45deg);
	}
	.arrow--l-r.left span:nth-child(1) {
		visibility: visible;
		transform: rotate(-45deg);
	}
	.arrow--l-r.left span:nth-child(2) {
		visibility: visible;
		transform: rotate(45deg);
	}

	.arrow--l-r span {
		position: absolute;
		height: 0.1rem;
		background-color: #efefef;
		transition: transform 0.2s ease;
	}
	.arrow--l-r span:nth-child(1),
	.arrow--l-r span:nth-child(2),
	.arrow--l-r span:nth-child(4),
	.arrow--l-r span:nth-child(5) {
		width: 0.625rem;
		top: 0.625rem;
	}
	.arrow--l-r span:nth-child(1) {
		right: 0;
		transform-origin: bottom right;
	}
	.arrow--l-r span:nth-child(2) {
		right: 0;
		transform-origin: top right;
	}
	.arrow--l-r span:nth-child(3) {
		width: 1.25rem;
		top: 0.625rem;
	}
	.arrow--l-r span:nth-child(4) {
		left: 0;
		transform-origin: bottom left;
	}
	.arrow--l-r span:nth-child(5) {
		left: 0;
		transform-origin: top left;
	}
</style>

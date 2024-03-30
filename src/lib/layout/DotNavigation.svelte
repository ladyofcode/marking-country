<script>
	export let links = '';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';

	let smoother;
	let menuChecked = false;

	function handleClick(ref) {
		smoother.scrollTo(ref, true, 'top top');
	}

	onMount(() => {
		ScrollTrigger.normalizeScroll(true);

		smoother = ScrollSmoother.create({
			content: '.smooth-content',
			smooth: 2,
			effects: true,
			normalize: true
		});
	});
</script>

<nav class="wrapper">
	<input
		type="checkbox"
		class="menu-button"
		id="dot-nav"
		bind:checked={menuChecked}
		on:click={() => (menuChecked = !menuChecked)}
	/>
	<label for="dot-nav" class:open={menuChecked}>
		<div class="arrow--l-r" class:left={menuChecked}>
			<span />
            <span />
            <span />
            <span />
            <span />
		</div>
	</label>
	<!-- <div class="top-bar-underlay" class:open={menuChecked} aria-hidden={ariaHidden} /> -->
	<ul class:open={menuChecked}>
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
		z-index: 990;
		top: 80px;
		right: 0;
	}

	input {
		display: none;
	}

	label {
		display: initial;
		/* top: 80px; */
		position: absolute;
		width: 40px;
		height: 40px;
		background: rgb(153, 10, 10);
		padding: 8px;
		right: 0;
		z-index: 200;
		transform: translateX(0);
		transition: background-color 0.2s ease-in-out, transform 0.3s ease-in-out;
	}
	label.open {
		/* right: translateX(-200px); */
		transform: translateX(-200px);
	}

	ul {
		padding: 2rem 4rem;
		list-style: none;
		background: rgb(0, 0, 0);
		transform: translateX(100%);
		transition: transform 0.3s ease-in-out;
		width: 0;
	}
	ul.open {
		transform: translateX(0);
		width: 200px;
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

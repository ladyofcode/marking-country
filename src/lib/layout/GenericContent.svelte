<script>
	export let id = '';
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let wrapper, container;
	let triggers = [];

	onMount(() => {
		const fadeIn = gsap.from(container, {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: wrapper,
				start: 'top bottom',
				toggleActions: 'play none none none'
			}
		});

		triggers.push(fadeIn);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div {id} class="wrapper" bind:this={wrapper}>
	<div class="container" bind:this={container}>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		max-width: var(--width-site);
		padding: var(--space-xxxl) var(--space-lg);
		background-color: var(--clr-bg-main);
	}

	.wrapper :global(iframe) {
		max-width: 100%;
	}

	.wrapper :global(iframe) {
		width: 100%;
		height: 480px;
	}

	.container {
		width: 100%;
		max-width: var(--width-content);
		margin: 0 auto;
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxl) auto;
			padding: var(--space-xxxl) 0;
		}
	}
</style>

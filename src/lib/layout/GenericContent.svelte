<script>
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let wrapper, container;
	let triggers = [];

	onMount(() => {
		// const scrollDownTo = gsap.to(wrapper, {
		// 	scrollTrigger: {
		// 		trigger: wrapper,
		// 		start: '-4% 60%',
		// 		end: 'top top',
		// 		scrub: true,
		// 		snap: {
		// 			snapTo: 1, // snaps to the end (100% scroll position)
		// 			duration: { min: 0.2, max: 0.3 },
		// 			delay: 0.2,
		// 			ease: 'power1.inOut'
		// 		},
		// 		toggleActions: 'play none none none'
		// 	}
		// });

		const fadeIn = gsap.from(container, {
			y: 50, // Start from 50 pixels below its starting position
			opacity: 0, // Start fully transparent
			duration: 1, // Animation duration of 1 second
			ease: 'power1.out', // Smooth easing for the animation
			scrollTrigger: {
				trigger: wrapper, // Use the .wrapper as the trigger
				start: 'top bottom', // Start the animation when the top of the wrapper hits the bottom of the viewport
				toggleActions: 'play none none none' // Play the animation once when the trigger condition is met
			}
		});

		triggers.push(fadeIn);
	});

	onDestroy(() => {
		triggers.forEach((trigger) => {
			if (trigger.scrollTrigger) {
				trigger.scrollTrigger.kill();
			}
			trigger.kill();
		});
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div class="container" bind:this={container}>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		max-width: 800px;
		padding: 8rem 2.4rem;
		height: 100%;
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
		max-width: 800px;
		margin: 0 auto;
	}

	@media (min-width: 600px) {
		.wrapper :global(figure) {
			max-height: 96vh;
		}
		.wrapper {
			padding: 8rem 4rem;
		}
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: 8rem auto;
		}
	}
</style>

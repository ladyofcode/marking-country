<script>
	export let credits;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let titles = [],
		names = [],
		triggers = [];

	let wrapper, container, text;

	onMount(() => {
		gsap.utils.toArray(titles).forEach((title, i) => {
			let animation = gsap.from(title, {
				duration: 0.5,
				x: -100,
				opacity: 0,
				delay: i * 0.2,
				scrollTrigger: {
					trigger: container,
					start: 'top 60%',
					once: true
				}
			});

			triggers.push(animation);
		});

		gsap.utils.toArray(names).forEach((name, i) => {
			let animation = gsap.from(name, {
				duration: 0.5,
				x: 100,
				opacity: 0,
				delay: i * 0.2,
				scrollTrigger: {
					trigger: container,
					start: 'top 60%',
					once: true
				}
			});

			triggers.push(animation);
		});

		const fadeIn = gsap.from(text, {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: text,
				start: 'top bottom',
				toggleActions: 'play none none reverse'
			}
		});

		triggers.push(fadeIn);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div class="container" bind:this={container}>
		<h2>Credits</h2>
		<div bind:this={text}>
			<slot />
		</div>
		<div class="credits">
			{#each credits as credit, i}
				<p bind:this={titles[i]}><strong>{credit.title}</strong></p>
				<p bind:this={names[i]}>{credit.names}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.wrapper {
		max-width: var(--width-site);
		margin: var(--space-lg) auto;
		padding: var(--space-md) var(--space-lg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container {
		max-width: var(--width-content);
	}
	.credits {
		margin: var(--space-lg) auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	p:nth-child(odd) {
		margin: 0;
	}

	p:nth-child(even) {
		margin: 0;
	}

	p {
		display: block;
		grid-column: auto;
		grid-row: auto;
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxl) auto;
			padding: 0;
		}
		.container {
			margin: 0 auto;
		}
		.credits {
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas: 'a a';
			grid-auto-rows: auto;
			grid-column-gap: 16px;
			grid-row-gap: 0px;
		}

		p:nth-child(odd) {
			text-align: right;
		}
	}
</style>

<script>
	export let credits;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let titles = [],
		names = [],
		triggers = [];

	let container;

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

<div class="container" bind:this={container}>
	{#each credits as credit, i}
		<p bind:this={titles[i]}><strong>{credit.title}</strong></p>
		<p bind:this={names[i]}>{credit.names}</p>
	{/each}
</div>

<style>
	.container {
		margin: 0 auto;
		margin-top: 1.2rem;
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
		.container {
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

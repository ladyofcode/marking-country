<script>
	export let content = '';
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { killScrollTriggers } from '$lib/utils';

	// Your content array
	let items = [],
		triggers = [];

	onMount(() => {
		let mm = gsap.matchMedia();

		ScrollTrigger.saveStyles('.image-container, .content-box');

		mm.add('(max-width: 899px)', () => {
			let anims = [];
			items.forEach((item, i) => {
				if (item) {
					anims[i] = gsap.from(item, {
						scrollTrigger: {
							trigger: item,
							start: 'top 80%',
							toggleActions: 'play none none reverse'
						},
						y: 50,
						opacity: 0,
						duration: 0.8
					});
					triggers.push(anims[i]);
				}
			});

			return () => {
				anims.forEach((anim) => {
					anim.revert();
				});
			};
		});

		mm.add('(min-width:900px)', () => {
			let anims = [];
			let anim1, anim2;
			items.forEach((item) => {
				// Animate the text container
				if (item) {
					anim1 = gsap.from(item.children[0], {
						scrollTrigger: {
							trigger: item.children[0],
							start: 'top 80%',
							toggleActions: 'play none none reverse',
						},
						x: -100,
						opacity: 0,
						duration: 0.8
					});
					// Animate the image container
					anim2 = gsap.from(item.querySelector('.image-container'), {
						scrollTrigger: {
							trigger: item.querySelector('.image-container'),
							start: 'top 80%',
							toggleActions: 'play none none reverse'
						},
						x: -200,
						opacity: 0,
						duration: 1
					});
					triggers.push(anim1, anim2);
					anims.push(anim1, anim2);
				}
			});

			return () => {
				anims.forEach((anim) => {
					anim.revert();
				});
			};
		});
		let resizeTimer;
		window.addEventListener('resize', () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				// Properly manage existing ScrollTrigger instances before refreshing
				ScrollTrigger.refresh();
			}, 200);
		});
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper">
	{#each content as { heading, image }, i}
		<div class="content-box" bind:this={items[i]}>
			<div>
				<h3>{heading}</h3>
				<p>{image.caption}</p>
			</div>
			<div class="image-container">
				<img src={image.source} alt={image.alt} />
			</div>
		</div>
	{/each}
</div>

<style>
	.content-box {
		width: 100%;
		height: 100%;
		max-width: var(--width-content);
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		margin-bottom: var(--space-xxxl);
		padding: 0 var(--space-lg);
	}
	.content-box div {
		flex: 1;
		max-width: 400px;
	}
	.image-container {
		width: 100%;
		height: auto;
		max-height: 240px;
		border: 4px solid var(--clr-clay);
		border-radius: var(--radius-corner);
		overflow: hidden;
	}
	img {
		height: auto;
		width: 100%;
		object-fit: cover;
		vertical-align: bottom;
	}

	@media (min-width: 900px) {
		.content-box {
			flex-direction: row-reverse;
		}

		.image-container {
			margin-right: var(--space-lg);
			width: 480px;
			max-height: 280px;
		}
	}
</style>

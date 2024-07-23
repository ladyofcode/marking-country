<script>
	export let slides;

	import { onDestroy, onMount, tick } from 'svelte';
	import { gsap } from 'gsap';

	import { killScrollTriggers } from '$lib/utils';
	let wrapper;
	let containers = [],
		triggers = [];

	$: width = `${slides.length * 100}px`;

	onMount(async () => {
		await tick();
		const sections = gsap.utils.toArray(containers);

		const animation = gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 72px',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				end: () => `+=${wrapper.offsetWidth * (sections.length - 1)}`
			}
		});
		triggers.push(animation);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper} style="width: {width};">
	{#each slides as item, i}
		<div class="panel" bind:this={containers[i]}>
			<figure>
				<img src={item.url} alt={item.caption} />

				<figcaption>
					{@html slides[i].caption}
					{#if slides[i].link}
						(<a href={slides[i].link}>
							{#if slides[i].source !== ''}{`${slides[i].source} `}{/if}<svg
								version="1.1"
								id="Layer_1"
								x="0px"
								y="0px"
								width="16px"
								viewBox="0 0 122.6 122.88"
								xmlSpace="preserve"
								><g
									><path
										fill="#d85245"
										d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
									/></g
								></svg
							></a
						>).
					{/if}
				</figcaption>
			</figure>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		overscroll-behavior: none;
		height: var(--height-viewable);
		display: flex;
		flex-wrap: nowrap;
	}

	.panel {
		padding: var(--space-lg) 0;
		height: var(--height-viewable);
		background: rgb(62, 62, 62);
		background: radial-gradient(circle, rgba(62, 62, 62, 1) 40%, rgba(0, 0, 0, 1) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		height: 100%;
		width: 100vw;
		object-fit: contain;
		padding: var(--space-lg);
	}

	figure {
		height: 100%;
		max-height: var(--height-viewable);
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: var(--space-lg);
	}

	figcaption {
		max-width: var(--width-content);
		position: absolute;
		bottom: var(--space-xxxl);
		z-index: 2;
		background: var(--glass-clr-bg);
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--glass-border-radius);
		border: var(--glass-outline);
		padding: var(--space-sm);
	}

	a svg {
		display: inline;
		margin-bottom: -4px;
	}

	@media (min-width: 900px) {
		figure {
			height: 100%;
			padding: 0;
		}

		img {
			width: auto;
			padding: 0;
		}
	}
</style>

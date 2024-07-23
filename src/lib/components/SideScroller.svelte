<script>
	export let content,
		id = '';
	import { onDestroy, onMount, tick } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';
	gsap.registerPlugin(ScrollTrigger);

	let markupContent = [],
		desktopContent = [],
		desktopPhotos = [],
		triggers = [];

	let gallery,
		isMobile = false,
		isDesktop = false,
		right,
		wrapper;

	function adjustLayout(mediaQuery) {
		isDesktop = mediaQuery.matches ? true : false;
		isMobile = !isDesktop;
	}

	onMount(async () => {
		await tick();
		ScrollTrigger.refresh();
		const mediaQuery = window.matchMedia('(min-width: 600px)');
		adjustLayout(mediaQuery);
		// Listen for changes
		mediaQuery.onchange = (e) => adjustLayout(mediaQuery);

		const photos = gsap.utils.toArray(desktopPhotos.slice(1));
		const details = gsap.utils.toArray(markupContent.slice(1));

		gsap.set(photos, { yPercent: 101 });

		const allPhotos = gsap.utils.toArray(desktopPhotos);

		let mm = gsap.matchMedia();

		mm.add('(min-width: 600px)', () => {
			// this setup code only runs when viewport is at least 600px wide

			const rightScroll = ScrollTrigger.create({
				trigger: gallery,
				start: 'top top',
				end: 'bottom bottom',
				preventOverlaps: true,
				pin: right
			});

			//create scrolltrigger for each details section
			//trigger photo animation when headline of each details section
			//reaches 80% of window height
			details.forEach((detail, index) => {
				let headline = desktopContent[index + 1];
				const animation = gsap
					.timeline()
					.to(photos[index], { yPercent: 0 })
					.set(allPhotos[index], { autoAlpha: 0 });
				ScrollTrigger.create({
					trigger: headline,
					start: 'top 50%',
					end: 'top 50%',
					animation: animation,
					preventOverlaps: true,
					scrub: true
				});
				triggers.push(animation);
			});

			triggers.push(rightScroll);

			return () => {
				rightScroll.kill();
				// optional
				// custom cleanup code here (runs when it STOPS matching)
			};
		});
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div {id} class="side-scroller" bind:this={gallery}>
		<div class="left" class:show={isDesktop}>
			<div class="desktopContent">
				{#each content as { markup }, i}
					<div bind:this={markupContent[i]} class="desktopContentSection">
						<div class="content" bind:this={desktopContent[i]} />
						{#each markup as item}
							{#if typeof item === 'string'}
								{@html item}
							{:else}
								<svelte:component this={item.component} {...item.props}>
									{@html item.children}
								</svelte:component>
							{/if}
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<div class="right" bind:this={right}>
			<!-- mobile content -->

			<div class="mobileContent" class:show={isMobile}>
				{#each content as { markup, image, youtube }, i}
					<div class="mobilePhoto">
						{#if image}
							<svelte:component this={image.component} {...image.props} />
						{/if}

						{#if youtube}
							<svelte:component this={youtube.component} {...youtube.props} />
						{/if}
					</div>
					<div class="mobileContentSection">
						{#each markup as item}
							{#if typeof item === 'string'}
								{@html item}
							{:else}
								<svelte:component this={item.component} {...item.props}>
									{@html item.children}
								</svelte:component>
							{/if}
						{/each}
					</div>
				{/each}
			</div>

			<!-- desktop content -->
			<div class="desktopPhotos" class:show={isDesktop}>
				{#each content as { image, youtube }, i}
					<div class="desktopPhoto" bind:this={desktopPhotos[i]}>
						{#if image}
							<svelte:component this={image.component} {...image.props} />
						{/if}
						<div class="video">
							{#if youtube}
								<svelte:component this={youtube.component} {...youtube.props} />
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		max-width: var(--width-max);
		margin: 0 auto;
	}
	.side-scroller {
		display: flex;
	}

	.left {
		display: none;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		height: auto;
	}

	.desktopContent {
		margin: auto;
		width: 80%;
	}

	.desktopContentSection {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.desktopPhotos {
		display: none;
		width: 40vw;
		height: 40vw;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
	}

	.desktopPhoto {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.mobilePhoto {
		margin-top: 5rem;
		border-radius: var(--radius-corner);
	}

	.mobileContent {
		display: none;
		padding: 0 var(--space-lg);
	}

	.mobileContentSection {
		margin: var(--space-xxl) auto;
		flex-grow: 1;
	}

	.left.show,
	.mobileContent.show,
	.desktopPhotos.show {
		display: block;
	}

	.video {
		position: absolute;
		width: 100%;
		height: fit-content;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
	}

	@media screen and (min-width: 600px) {
		.left {
			width: 50%;
		}

		.right {
			height: 100vh;
			width: 50%;
			flex-direction: column;
			justify-content: center;
		}

		.desktopPhotos :global(img) {
			max-height: 40vh;
		}
	}
</style>

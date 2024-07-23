<script>
	export let content;
	import { onDestroy, onMount, tick } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';
	gsap.registerPlugin(ScrollTrigger);

	import ImageFull from './ImageFull.svelte';
	import QuoteInline from './QuoteInline.svelte';
	import LearnMoreBox from './LearnMoreBox.svelte';

	let markupContent = [],
		desktopContent = [],
		desktopPhotos = [],
		triggers = [],
		mobileContentSection = [];

	let gallery, mobilePhotoContainer, right;

	onMount(async () => {
		await tick();
		const photos = gsap.utils.toArray(desktopPhotos.slice(1));

		const details = gsap.utils.toArray(markupContent.slice(1));

		gsap.set(photos, { yPercent: 101 });

		const allPhotos = gsap.utils.toArray(desktopPhotos);

		let mm = gsap.matchMedia();

		mm.add('(max-width: 599px)', () => {
			gsap.set(mobilePhotoContainer.children, { opacity: 0 });

			mobileContentSection.forEach((section, index) => {
				triggers.push(
					ScrollTrigger.create({
						trigger: section,
						start: 'top center',
						end: 'bottom center',
						preventOverlaps: true,
						onEnter: () => updateImage(index),
						onEnterBack: () => updateImage(index)
					})
				);
			});

			mobileContentSection.forEach((section, index) => {
				triggers.push(
					ScrollTrigger.create({
						trigger: section,
						start: 'top 100%',
						end: 'bottom center',
						preventOverlaps: true,
						onLeaveBack: () => {
							gsap.to(mobilePhotoContainer.children[index], { opacity: 0, duration: 0.5 });
						},
						onLeave: () => {
							if (index == mobileContentSection.length - 1) {
								gsap.set(mobilePhotoContainer.children, { opacity: 0 });
								ScrollTrigger.refresh();
							}
						}
					})
				);
			});

			function updateImage(index) {
				// Immediately hide all images to ensure only one is visible at a time
				gsap.set(mobilePhotoContainer.children, { opacity: 0 });

				// Fade in the relevant image
				gsap.to(mobilePhotoContainer.children[index], { opacity: 1, duration: 0.5 });
			}

			return () => {
				// Clean up
				triggers.forEach((trigger) => trigger.kill());
			};
		});

		mm.add('(min-width: 600px)', () => {
			// this setup code only runs when viewport is at least 600px wide

			const rightScroll = ScrollTrigger.create({
				trigger: gallery,
				start: 'top 72px',
				end: 'bottom bottom',
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
					scrub: true
				});
				triggers.push(animation);
			});

			triggers.push(rightScroll);

			return () => {
				rightScroll.kill();
				killScrollTriggers(triggers);
				// custom cleanup code here (runs when it STOPS matching)
			};
		});
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="gallery" bind:this={gallery}>
	<div class="left">
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
		<div class="mobileContent">
			<div class="mobilePhoto" bind:this={mobilePhotoContainer}>
				{#each content as { markup, image, youtube }, i}
					<div class="media-wrapper">
						{#if image}
							<svelte:component this={image.component} {...image.props} />
						{/if}

						{#if youtube}
							<svelte:component this={youtube.component} {...youtube.props} />
						{/if}
					</div>
				{/each}
			</div>

			{#each content as { markup, image, youtube }, i}
				<div class="mobileContentSection" bind:this={mobileContentSection[i]}>
					<div class="mobileMarkupWrapper">
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
				</div>
			{/each}
		</div>

		<!-- desktop content -->

		<div class="desktopPhotos">
			{#each content as { image, youtube }, i}
				<div class="desktopPhoto" bind:this={desktopPhotos[i]}>
					{#if image}
						<svelte:component this={image.component} {...image.props} />
					{/if}

					{#if youtube}
						<svelte:component this={youtube.component} {...youtube.props} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.gallery {
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
		border-radius: 20px;
		position: relative;
		overflow: hidden;
	}

	.desktopPhoto {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.mobilePhoto {
		position: fixed;
		width: 80vw;
		border-radius: 6vw;
		overflow: visible;
		top: 0;
	}

	.mobilePhoto > div {
		position: absolute;
		margin-top: 0;
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		background-color: var(--clr-bg-main);
	}

	.mobileContent {
		display: block;
	}

	.mobileContentSection {
		max-width: 80vw;
	}

	.mobileMarkupWrapper {
		min-height: 100vh;
		margin: 16rem 0;
	}

	@media screen and (min-width: 600px) {
		.left {
			display: block;
			width: 100%;
			max-width: 30vw;
		}

		.right {
			height: var(--height-viewable);
			width: 50;
			width: 100%;
			flex-direction: column;
			justify-content: center;
			padding-left: 100px;
		}

		.desktopContent {
			display: inline-block;
			width: 100%;
			margin-left: var(--space-xxl);
			padding-right: var(--space-xxl);
		}

		.desktopPhotos {
			display: block;
			width: 100%;
			height: 100%;
		}

		.desktopPhoto {
			margin: 0 auto;
		}

		.mobileContent {
			display: none;
		}
	}
</style>

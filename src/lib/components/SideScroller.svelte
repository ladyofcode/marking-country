<script>
	export let content, id;
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';
	gsap.registerPlugin(ScrollTrigger);

	import ImageSingle from './ImageSingle.svelte';
	import InlineQuote from './InlineQuote.svelte';
	import LearnMoreBox from './LearnMoreBox.svelte';
	import { YouTube } from 'sveltekit-embed';

	let markupContent = [],
		desktopContent = [],
		desktopPhotos = [],
		triggers = [];

	let gallery;

	onMount(() => {
		const photos = gsap.utils.toArray(desktopPhotos.slice(1));

		const details = gsap.utils.toArray(markupContent.slice(1));

		gsap.set(photos, { yPercent: 101 });

		const allPhotos = gsap.utils.toArray(desktopPhotos);

		let mm = gsap.matchMedia();

		// add a media query. When it matches, the associated function will run
		mm.add('(min-width: 600px)', () => {
			// this setup code only runs when viewport is at least 600px wide
			console.log('desktop');

			const rightScroll = ScrollTrigger.create({
				trigger: gallery,
				start: 'top top',
				end: 'bottom bottom',
				pin: '.right'
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
					scrub: true,
					
				});
				triggers.push(animation);
			});

			triggers.push(rightScroll);

			return () => {
				rightScroll.kill();
				// optional
				// custom cleanup code here (runs when it STOPS matching)
				console.log('mobile');
			};
		});
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div {id} class="gallery" bind:this={gallery}>
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

	<div class="right">
		<!-- mobile content -->

		<div class="mobileContent">
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
		/* outline:1px solid green; */
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
		width: 80vw;
		margin-top: 5em;
		border-radius: 6vw;
	}

	.mobileContent {
		display: block;
		/* height: 100%; */
		/* margin: 0 auto; */
		/* margin-top: 50px; */
	}

	.mobileContentSection {
		max-width: 80vw;
		flex-grow: 1;
	}

	/* defines styles for screens up to 599px wide */
	@media screen and (min-width: 600px) {
		.left {
			display: block;
			width: 50%;
		}

		.right {
			height: 100vh;
			/* outline:1px solid purple; */
			width: 50%;
			flex-direction: column;
			justify-content: center;
		}

		.desktopPhotos {
			display: block;
		}

		.mobileContent {
			display: none;
		}
	}
</style>

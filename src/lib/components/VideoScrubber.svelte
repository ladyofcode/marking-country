<script>
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';

	export let videoUrl,
		text = '';
	let videoElement, overlay, wrapper, textContainer;
	let triggers = [];

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		preloadVideo();
	});

	async function preloadVideo() {
		try {
			const response = await fetch(videoUrl);
			const blob = await response.blob();
			const blobUrl = URL.createObjectURL(blob);
			videoElement.src = blobUrl;

			videoElement.addEventListener(
				'loadedmetadata',
				() => {
					setupAnimations();
				},
				{ once: true }
			);
		} catch (error) {
			console.error('Error loading video:', error);
		}
	}

	function setupAnimations() {
		let overlayHeight = overlay ? overlay.scrollHeight : 0; // Ensure this value accurately reflects any dynamic content.
		let textScrollHeight = textContainer ? textContainer.scrollHeight : 0; // Make sure this is calculated after the text is fully loaded/rendered.
		let totalScrollHeight = videoElement.scrollHeight + overlayHeight + textScrollHeight;

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: 'top top',
				end: () => `+=${videoElement.scrollHeight}`,
				scrub: true,
				pin: true,
				onUpdate: (self) => {
					if (
						self.progress * (videoElement.scrollHeight + overlayHeight + textScrollHeight) <=
						videoElement.scrollHeight
					) {
						const progress =
							(self.progress * (videoElement.scrollHeight + overlayHeight + textScrollHeight)) /
							videoElement.scrollHeight;
						const newTime = progress * videoElement.duration;
						if (isFinite(newTime)) {
							videoElement.currentTime = newTime;
						}
						if (videoElement.currentTime >= videoElement.duration - 0.1) {
							videoElement.pause();
						}
					}
				}
			}
		});

		const overlayAnimation = gsap
			.timeline({
				scrollTrigger: {
					trigger: overlay,
					start: 'top top',
					end: () => `+=${overlayHeight}`,
					scrub: true,
					pin: overlay
				}
			})
			.fromTo(overlay, { y: '100%' }, { y: '-100%' });

		triggers.push(tl, overlayAnimation);
	}

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<video bind:this={videoElement} preload="auto" playsinline muted>
		Your browser does not support the video tag.
	</video>
	{#if text}
		<div class="overlay" bind:this={overlay}>
			<div class="container" />
			<div class="text-container" bind:this={textContainer}>
				{#each text as item}
					<div class="textbox">
						{@html item}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
a

<style>
	.wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
	}
	video,
	.overlay {
		width: 100%;
		height: 100%;
	}
	video {
		object-fit: cover;
		position: relative;
		z-index: 1;
	}

	.overlay {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: fit-content;
	}
	.container {
		min-height: 80vh;
		width: 100%;
	}
	.text-container {
		color: white;
		height: 100%;
		min-height: 100vh;
		width: 100%;
		max-width: var(--width-site);
		margin: var(--space-md) auto;
		text-align: center;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		gap: var(--space-lg);
		padding: 0 var(--space-lg);
	}

	.textbox {
		height: 100%;
		border-radius: var(--radius-corner);
		padding: var(--space-lg);
		background-color: rgba(0, 0, 0, 0.5);
	}

	@media (min-width: 900px) {
		.text-container {
			padding: 0;
		}
		.textbox {
			padding: var(--space-xxl);
		}
	}
</style>

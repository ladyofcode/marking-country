<script>
	import { onDestroy, onMount, tick } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { killScrollTriggers } from '$lib/utils';

	export let videoUrl,
		text = '';
	let videoScroll, overlay, wrapper;
	let triggers = [];

	onMount(async () => {
		await tick();

		let frameNumber = 0,
			src = videoScroll.currentSrc || videoScroll.src;

		const videoScrollTL = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				pin: true,
				start: 'top top',
				end: `+=100%`,
				scrub: 0.5,
				anticipatePin: 1,
				fastScrollEnd: true,
				onUpdate: (self) => {
					const progress = Math.min(Math.max(self.progress, 0), 1);
					const frameNumber = (progress * (videoScroll.duration - 0.1));
					
					if (Math.abs(videoScroll.currentTime - frameNumber) > 0.1) {
						videoScroll.currentTime = frameNumber;
					}
				}
			}
		});

		videoScrollTL
			.fromTo(videoScroll.current, { currentTime: 0 }, { currentTime: videoScroll.duration - 0.1 })
			.to(videoScroll, { opacity: 0, duration: 0.5, delay: 6 })
			.fromTo(
				overlay,
				{ y: '400%', opacity: 0 },
				{
					y: '-100%',
					opacity: 1,
					scrollTrigger: {
						trigger: wrapper,
						start: 'top top',
						end: '+=200%',
						scrub: true,
						pin: overlay
					}
				}
			);

		ScrollTrigger.refresh();

		triggers.push(videoScrollTL);

		// Ensure video 'activated' on iOS
		function once(el, event, fn, opts) {
			let onceFn = function (e) {
				el.removeEventListener(event, onceFn);
				fn.apply(this, arguments);
			};
			el.addEventListener(event, onceFn, opts);
			return onceFn;
		}

		once(document.documentElement, 'touchstart', function (e) {
			videoScroll.play();
			videoScroll.pause();
		});

		// Enure video loaded
		once(videoScroll, 'loadedmetadata', function () {
			videoScrollTL.fromTo(
				videoScroll,
				{ currentTime: 0 },
				{ currentTime: videoScroll.duration - 0.1 }
			);
		});

		setTimeout(function () {
			if (window['fetch']) {
				fetch(src)
					.then(function (response) {
						return response.blob();
					})
					.then(function (response) {
						var blobURL = URL.createObjectURL(response);
						var t = videoScroll.currentTime;
						once(document.documentElement, 'touchstart', function (e) {
							videoScroll.setAttribute('src', blobURL);
							videoScroll.currentTime = t + 0.01;
						});
					});
			}
		}, 0);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<video src={videoUrl} bind:this={videoScroll} muted>
		Your browser does not support the video tag.
	</video>
	{#if text}
		<div class="overlay" bind:this={overlay}>
			<div class="text-container">
				{#each text as item}
					<div class="textbox">
						{@html item}
					</div>
				{/each}
				<div class="spacer" />
			</div>
		</div>
	{/if}
	<div class="spacer" />
</div>

<style>
	.wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		min-height: 100vh;
		padding-bottom: var(--space-xl);
		overflow: hidden;
	}
	video,
	.overlay {
		width: 100%;
		height: 100%;
	}
	video {
		position: absolute;
		left: 0;
		top: 0;
		border-radius: var(--radius-corner);
		object-fit: contain;
		z-index: 1;
	}

	.overlay {
		position: absolute;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: fit-content;
	}
	.spacer {
		position: relative;
		min-height: 100vh;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		border-radius: var(--radius-corner);
		padding: var(--space-lg);
		background-color: var(--glass-clr-bg);
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

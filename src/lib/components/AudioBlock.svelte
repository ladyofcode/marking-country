<script>
	export let source,
		summary = '';
	export let credit = '';
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { Transcript } from '$lib';

	let audio;
	let isPlaying = false;
	let isMuted = false;
	let seekValue = 0;
	let currentTimeFormatted = '00:00';
	let remainingTimeFormatted = '00:00';

	function togglePlay() {
		if (audio.paused) {
			audio.play();
			isPlaying = true;
		} else {
			audio.pause();
			isPlaying = false;
		}
	}

	function toggleMute() {
		isMuted = !isMuted;
		audio.muted = isMuted; // Mute or unmute the audio element

		if (isMuted) {
			// Show and animate the line
			gsap.set('#mute-line', { display: 'block' });
			gsap.fromTo(
				'#mute-line',
				{ scaleX: 0, transformOrigin: 'left' },
				{ scaleX: 1, duration: 0.5 }
			);
		} else {
			// Animate and hide the line
			gsap.to('#mute-line', {
				scaleX: 0,
				duration: 0.5,
				onComplete: () => gsap.set('#mute-line', { display: 'none' })
			});
		}
	}

	function formatTime(timeInSeconds) {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = Math.floor(timeInSeconds % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	function updateSeek() {
		seekValue = (audio.currentTime / audio.duration) * 100;
		currentTimeFormatted = formatTime(audio.currentTime);
		remainingTimeFormatted = formatTime(audio.duration - audio.currentTime);
	}

	function changeSeek() {
		const seekTo = (seekValue / 100) * audio.duration;
		audio.currentTime = seekTo;
	}

	onMount(() => {
		audio.addEventListener('timeupdate', updateSeek);
		audio.addEventListener('loadedmetadata', updateSeek); // Update times once metadata is loaded
	});

	onDestroy(() => {
		audio.removeEventListener('timeupdate', updateSeek);
		audio.removeEventListener('loadedmetadata', updateSeek);
	});

	$: {
		const playedPercentage = `${seekValue}%`;
		document.documentElement.style.setProperty('--seek-before-width', playedPercentage);
	}
</script>

<figure>
	<div class="audio-player">
		<audio bind:this={audio} src={source} />
		<button on:click={togglePlay}>
			{#if isPlaying}
				<svg id="pause" viewBox="0 0 69 77">
					<g>
						<rect
							x=".5"
							y=".5"
							width="25"
							height="76"
							rx="6.24"
							ry="6.24"
							fill=""
							stroke-width="0"
						/>
						<path
							d="M19.26,1c3.17,0,5.74,2.58,5.74,5.74v63.51c0,3.17-2.58,5.74-5.74,5.74H6.74c-3.17,0-5.74-2.58-5.74-5.74V6.74C1,3.58,3.58,1,6.74,1h12.51M19.26,0H6.74C3.04,0,0,3.04,0,6.74v63.51c0,3.71,3.04,6.74,6.74,6.74h12.51c3.71,0,6.74-3.04,6.74-6.74V6.74c0-3.71-3.04-6.74-6.74-6.74h0Z"
							fill=""
							stroke-width="0"
						/>
					</g>
					<g>
						<rect
							x="43.5"
							y=".5"
							width="25"
							height="76"
							rx="6.24"
							ry="6.24"
							fill=""
							stroke-width="0"
						/>
						<path
							d="M62.26,1c3.17,0,5.74,2.58,5.74,5.74v63.51c0,3.17-2.58,5.74-5.74,5.74h-12.51c-3.17,0-5.74-2.58-5.74-5.74V6.74c0-3.17,2.58-5.74,5.74-5.74h12.51M62.26,0h-12.51c-3.71,0-6.74,3.04-6.74,6.74v63.51c0,3.71,3.04,6.74,6.74,6.74h12.51c3.71,0,6.74-3.04,6.74-6.74V6.74c0-3.71-3.04-6.74-6.74-6.74h0Z"
							fill=""
							stroke-width="0"
						/>
					</g>
				</svg>
			{:else}
				<svg id="play-button" viewBox="0 0 70.85 79.31">
					<path
						d="M8.16,78.81c-4.23,0-7.66-3.44-7.66-7.66V8.16C.5,3.94,3.94.5,8.16.5c1.34,0,2.62.35,3.81,1.04l54.55,31.49c2.4,1.38,3.83,3.86,3.83,6.63s-1.43,5.24-3.83,6.63l-54.55,31.49c-1.19.69-2.47,1.04-3.81,1.04h0Z"
						fill=""
						fill-opacity="0"
						stroke-width="0"
					/>
				</svg>
			{/if}
		</button>
		<span>{currentTimeFormatted} / {remainingTimeFormatted}</span>
		<input
			type="range"
			class="audio-seekbar"
			bind:value={seekValue}
			min="0"
			max="100"
			step="1"
			on:input={changeSeek}
		/>
		<button on:click={toggleMute}>
			<svg viewBox="0 0 24 24" fill="none">
				<path
					d="M16 8.99998C16.5 9.49999 17 10.5 17 12C17 13.5 16.5 14.5 16 15M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z"
					stroke="#ffffff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<line
					x1="0"
					y1="0"
					x2="22"
					y2="22"
					stroke="#ffffff"
					stroke-width="2"
					id="mute-line"
					style="display: none;"
				/>
			</svg>
		</button>
	</div>

	{#if credit}
		<figcaption>{credit}</figcaption>
	{/if}
</figure>

{#if summary}
	<Transcript {summary}>
		<slot />
	</Transcript>
{/if}

<style>
	figure {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin-bottom: var(--space-xl);
	}

	figcaption {
		margin-top: 0;
		font-size: var(--font-size-caption);
	}

	div {
		padding: var(--space-md) var(--space-lg);
		background-color: var(--clr-bg-main);
		border-radius: var(--radius-corner);
	}

	button {
		background-color: transparent;
		border: none;
		border-radius: 4px;
	}
	button:first-of-type {
		height: 48px;
		width: 48px;
		padding: var(--space-xs);
	}

	button:not(:last-of-type) svg path,
	rect {
		stroke: var(--clr-text);
		stroke-width: 6px;
	}
	button:last-of-type svg path {
		stroke: var(--clr-text);
	}
	button:last-of-type {
		height: 56px;
		width: 64px;
		padding: var(--space-xs);
	}

	button:hover {
		background-color: #ffffff71;
	}

	input {
		flex-grow: 1;
	}

	span {
		white-space: nowrap;
		font-family: var(--font-sans);
		font-size: var(--font-size-caption);
		color: var(--clr-text);
	}

	.audio-player {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-sm);
	}

	.audio-seekbar {
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		width: 100%;
		height: 8px;
		background: var(--clr-clay);
		outline: none;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	:root {
		--track-height: 10px;
	}

	.audio-seekbar::-webkit-slider-runnable-track {
		border-radius: 4px;
		background: linear-gradient(
			to right,
			var(--played-color, var(--clr-terracotta)) 0%,
			var(--played-color, var(--clr-terracotta)) var(--seek-before-width, 0%),
			var(--unplayed-color, var(--clr-clay)) var(--seek-before-width, 0%),
			var(--unplayed-color, var(--clr-clay)) 100%
		);
		height: var(--track-height);
	}

	.audio-seekbar::-moz-range-track {
		border-radius: 4px;
		background: var(--unplayed-color, var(--clr-clay));
		height: var(--track-height);
	}

	.audio-seekbar::-moz-range-progress {
		border-radius: 4px;
		background: var(--played-color, var(--clr-terracotta));
		height: var(--track-height);
	}

	.audio-seekbar::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border: 2px solid #ffffff;
		background: var(--clr-terracotta);
		cursor: pointer;
		margin-top: calc((var(--track-height) - 20px) / 2);
	}

	.audio-seekbar::-moz-range-thumb {
		border: 2px solid #ffffff;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: var(--clr-terracotta);
		cursor: pointer;
	}

	@media (min-width: 900px) {
		.audio-player {
			gap: var(--space-md);
		}
		button:first-of-type {
			height: 64px;
			width: 64px;
			padding: var(--space-md);
		}

		button:last-of-type {
			height: 56px;
			width: 64px;
			padding: var(--space-sm);
		}

		span {
			font-size: var(--font-size-text);
		}
	}
</style>

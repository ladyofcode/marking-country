<script>
	import { fade } from 'svelte/transition';

	export let slides;

	let currentSlide = 0;

	const nextImage = () => {
		currentSlide = (currentSlide + 1) % slides.length;
	};

	const prevImage = () => {
		if (currentSlide != 0) {
			currentSlide = (currentSlide - 1) % slides.length;
		} else {
			currentSlide = slides.length - 1;
		}
	};
</script>

<div class="image-slider-container">
	<div class="image-container">
		{#each [slides[currentSlide]] as item}
			{#if item.url.includes('mp4')}
				<video controls type="video/mp4" src={item.url} />
			{:else}
				<img  src={item.url} alt={item.caption} />
			{/if}
		{/each}
	</div>
	<button class="left" on:click={() => prevImage()}>
		<svg width="16" height="16" viewBox="0 0 346 512.73">
			<path
				fill="#864640"
				d="M315.38 3.95 7.71 241.08a19.186 19.186 0 0 0-3.76 3.67c-6.39 8.29-4.87 20.21 3.42 26.6L314.21 507.8c3.37 3.06 7.85 4.93 12.76 4.93 10.51 0 19.03-8.52 19.03-19.03V18.96h-.06c0-4.05-1.29-8.14-3.96-11.59-6.4-8.29-18.31-9.81-26.6-3.42z"
			/>
		</svg>
	</button>
	<button class="right" on:click={() => nextImage()}>
		<svg width="16" height="16" viewBox="0 0 346.02 512.76">
			<path
				fill="#864640"
				d="M338.31 241.09 30.62 3.95c-8.29-6.39-20.2-4.87-26.6 3.42A18.905 18.905 0 0 0 .06 18.96H0v474.77c0 10.51 8.52 19.03 19.03 19.03 4.91 0 9.39-1.87 12.77-4.93l306.85-236.46c8.29-6.4 9.81-18.32 3.41-26.6-1.1-1.43-2.36-2.66-3.75-3.68z"
			/>
		</svg>
	</button>
	{#each [slides[currentSlide]] as item (currentSlide)}
		<p>
			{@html slides[currentSlide].caption}
			{#if slides[currentSlide].link}
				(<a href={slides[currentSlide].link}
					>{slides[currentSlide].source}<svg
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
					></a>).
			{/if}
		</p>
	{/each}
	<!-- {(slides[currentIndex].link !== '' && slides[currentIndex].link != null) && (
		)} -->
</div>

<!-- <div class="image-slider-container">
		
		
	  <p>
		{slides[currentIndex].caption !== '' && `${slides[currentIndex].caption} `}
		{(slides[currentIndex].link !== '' && slides[currentIndex].link != null) && (
		  <a href={`${slides[currentIndex].link}`}>{slides[currentIndex].source}
			<svg version="1.1" id="Layer_1" x="0px" y="0px" width="16px" viewBox="0 0 122.6 122.88" xmlSpace="preserve"><g><path fill="#d85245" d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" /></g></svg>
		  </a>
		)}
	  </p>
  </div> -->

<style>
	.image-slider-container {
		height: 88vh;
		width: 100%;
		position: relative;
		background-color: var(--clr-dark-charcoal);
		padding-top: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.image-container {
		height: 100%;
		min-height: 40vh;
		width: 100%;
		background-color: #242424;
	}

	img, video {
		height: 100%;
		width: auto;
		margin: 0 auto;
		object-fit: contain;
		position: relative;
		top: 0;
		left: 0;
	}

	p {
		height: 100%;
		width: 100%;
		margin-top: 80px;
		padding: 1.2rem;
		color: var(--clr-text);
		background: rgba(29, 29, 29, 0.494);
		/* box-shadow: 0 8px 32px 0 rgba(79, 79, 85, 0.618); */
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 10px;
	}

	a {
		flex-direction: row;
	}

	a svg {
		display: inline;
		margin-left: 0.4rem;
		margin-bottom: -4px;
	}

	button {
		position: absolute;
		z-index: 10;
		color: #864640;
		border: 1px solid #867a5653;
		background-color: var(--clr-dark-charcoal);
		padding: 16px;
	}

	button svg {
		margin: 0 auto;
	}

	button:hover {
		background-color: #867a5653;
	}

	button.left {
		top: 50%;
		left: 20px;
	}

	button.right {
		top: 50%;
		right: 20px;
	}

	@media (min-width: 900px) {
		.image-slider-container {
			display: block;
		}

		.image-container {
			height: 100%;
			max-height: 72vh;
			margin: 0 auto;
		}

		p {
			height: fit-content;
			position: absolute;
			bottom: 1.2rem;
			max-width: 88vw;
			margin-left: auto;
			margin-right: auto;
			margin-top: 1.6rem;
			right: 0;
			left: 0;
		}
	}
</style>

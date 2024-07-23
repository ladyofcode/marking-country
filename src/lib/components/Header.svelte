<script>
	export let heading,
		gradientColor = '#ffffff',
		subheading = '',
		alt = '',
		id = '',
		image = '',
		video = '',
		poster = '',
		type = '';

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let triggers = [];

	let title, pane, header, gradient;

	onMount(() => {
		document.documentElement.style.setProperty('--clr-dynamic', gradientColor);

		const paneAnimation = gsap.from(pane, { y: 20, opacity: 0, duration: 0.4 });
		const titleAnimation = gsap.from(title, {
			y: 20,
			duration: 1,
			opacity: 0,
			ease: 'power1.out',
			delay: 0.4
		});
		const gradientAnimation = gsap.to(
			gradient,
			{
				scrollTrigger: {
					trigger: header,
					start: 'top top',
					end: '+=100%',
					scrub: true,
					onEnter: () => gsap.to(gradient, { opacity: 0 }),
					onLeaveBack: () => gsap.to(gradient, { opacity: 1 })
				}
			},
			0
		);

		triggers.push(paneAnimation, titleAnimation, gradientAnimation);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<header {id} {...$$restProps} bind:this={header}>
	<div class="gradient" bind:this={gradient} />
	<div class="heading" bind:this={pane}>
		<h1 bind:this={title}>{@html heading}</h1>
		{#if subheading}
			<h2>{subheading}</h2>
		{/if}
	</div>

	{#if image}
		<img src={image} {alt} />
	{/if}

	{#if video}
		<video autoPlay muted loop {poster}>
			<source src={video} {type} />
			Your browser does not support the video tag.
		</video>
	{/if}
</header>

<style>
	header {
		width: 100%;
		height: 100%;
		overflow-y: hidden;
		position: relative;
		margin-bottom: var(--space-xxxl);
		padding-bottom: var(--space-xxxl);
	}

	img,
	video {
		opacity: 0;
		animation: fadeInAnimation ease 2s;
		animation-fill-mode: forwards;
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	img,
	video {
		display: block;
		margin: 0 auto;
		margin-top: 100px;
		height: 80vh;
		width: 96vw;
		border-radius: 1.6rem;
		position: relative;
		z-index: 2;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 32px;
	}

	.heading {
		position: absolute;
		bottom: var(--space-lg);
		left: var(--space-lg);
		right: var(--space-lg);
		padding: var(--space-xxl) var(--space-xl);
		z-index: 4;
		background: var(--glass-clr-bg);
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--glass-border-radius);
		border: var(--glass-outline);
	}

	h1,
	h2 {
		color: var(--clr-lightGrey);
	}

	h1 {
		font-size: var(--font-size-hero);
		margin-bottom: 0;
		text-shadow: 0px 3px 6px rgba(40, 40, 40, 0.8);
	}

	h2 {
		color: var(--clr-text);
		font-weight: 400;
		margin-top: 0.8rem;
		font-size: 1.6rem;
	}

	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 1;
		background-image: linear-gradient(180deg, var(--clr-dynamic) 72%, var(--clr-bg-main) 100%);
	}

	@media (min-width: 600px) {
		h1 {
			font-size: var(--font-size-large-hero);
		}

		.heading {
			max-width: fit-content;
		}
	}

	@media (min-width: 800px) {
		.heading {
			left: var(--space-xxl);
		}
		h2 {
			font-size: var(--font-size-large-heading);
		}
	}

	@media (min-width: 900px) {
		img {
			max-width: 1400px;
			max-height: 700px;
		}
	}

	@media (min-width: 1400px) {
		.heading {
			left: var(--space-xxxxl);
		}
	}
</style>

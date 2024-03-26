<script>
	export let heading,
		gradientColor = '#ffffff',
		subheading = '',
		alt = '',
		id,
		image = '',
		video = '',
		poster = '',
		type = '',
		name;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	let triggers = [];

	let title, pane, header;

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
			'.gradient',
			{
				scrollTrigger: {
					trigger: '.header',
					start: 'top top',
					end: '+=100%',
					scrub: true,
					onEnter: () => gsap.to('.gradient', { opacity: 0 }),
					onLeaveBack: () => gsap.to('.gradient', { opacity: 1 })
				}
			},
			0
		);

		const scrollUpTrigger = ScrollTrigger.create({
			trigger: header,
			start: 'top top',
			end: 'bottom 10%',
			onEnterBack: () => {
				gsap.to(window, { duration: 0.5, scrollTo: { y: header.offsetTop, autoKill: false } });
			}
		});

		triggers.push(paneAnimation, titleAnimation, gradientAnimation, scrollUpTrigger);
	});

	onDestroy(() => {
		triggers.forEach((trigger) => {
			if (trigger.scrollTrigger) {
				trigger.scrollTrigger.kill();
			}
			trigger.kill();
		});
	});
</script>

<header {id} class="header {name}" {...$$restProps} bind:this={header}>
	<div class="gradient" />
	<div class="heading" bind:this={pane}>
		<h1 bind:this={title}>{@html heading}</h1>
		{#if subheading}
			<h2>{subheading}</h2>
		{/if}

		<label>
			<span class="label">Reduced motion</span>
			<input id="id-switch-1" type="checkbox" role="switch" />
			<span class="state">
				<span class="container">
					<span class="position" />
				</span>
			</span>
		</label>
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
	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 1;
		background-image: linear-gradient(180deg, var(--clr-dynamic) 72%, var(--clr-bg-main) 100%);
		/* background-image: linear-gradient(to bottom, var(--clr-dynamic), var(--clr-bg-main)); */
	}

	label {
		display: block;
		/* margin: 0.5rem auto; */
		margin-top: 2.4rem;
		padding: 4px 4px 6px 6px;
		border: 0 solid #005a9c;
		border-radius: 5px;
		width: 16rem;
	}

	label .label {
		display: inline-block;
		width: 9em;
		user-select: none;
	}

	label input[role='switch'] {
		opacity: 0;
	}

	label .container {
		background-color: white;
	}

	label input[role='switch'] ~ .state {
		display: inline-block;
		user-select: none;
	}

	label input[role='switch'] ~ .state > .container {
		position: relative;
		top: 2px;
		display: inline-block;
		border: 2px solid black;
		width: 40px;
		/* height: 20px; */
		border-radius: 11px;
	}

	label input[role='switch'] ~ .state > .container > .position {
		position: relative;
		top: 1px;
		left: 2px;
		display: inline-block;
		border: 2px solid black;
		border-radius: 9px;
		width: 14px;
		height: 14px;
		background: white;
		opacity: 0.6;
	}

	label input[role='switch']:checked ~ .state > .container > .position {
		left: 20px;
		border-color: green;
		background: green;
		opacity: 1;
	}

	/* label:focus,
	label:hover {
		padding: 2px 2px 4px 4px;
		border-width: 2px;
		outline: none;
		background-color: #def;
		cursor: pointer;
	}

	label:focus span.container,
	label:hover span.container {
		background-color: white;
	} */

	.header {
		width: 100%;
		height: 100%;
		/* overflow: hidden; */
		overflow-y: scroll;
		position: relative;
	}

	.header img,
	.header video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.header img {
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
		bottom: 1.6rem;
		margin-left: 4rem;
		padding: 2.4rem;
		z-index: 4;
		background: var(--glass-clr-bg);
		/* box-shadow: var(--glass-box-shadow); */
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--glass-border-radius);
		border: var(--glass-outline);
	}

	.heading h1,
	.heading h2 {
		color: var(--clr-font-heading);
	}

	.heading h1 {
		margin-bottom: 0;
		text-shadow: 0px 3px 6px rgba(40, 40, 40, 0.8);
	}

	.heading h2 {
		margin-top: 0.8rem;
		font-size: 1.6rem;
	}

	@media (min-width: 600px) {
		.heading {
			max-width: 64%;
		}
	}

	@media (min-width: 900px) {
		.heading h2 {
			font-size: 2.4rem;
		}
	}
</style>

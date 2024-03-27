<script>
	export let content;
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	import ImageSingle from './ImageSingle.svelte';
	import InlineQuote from './InlineQuote.svelte';
	import LearnMoreBox from './LearnMoreBox.svelte';
	import { YouTube } from 'sveltekit-embed';

	let markupContent = [],
		imageContent = [];
	let gallery;


	onMount(() => {
		const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)');

		// const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)');
		const details = gsap.utils.toArray(markupContent.slice(1));
		// console.log("details2", details2)
		// const photos = gsap.utils.toArray(imageContent.slice(1));

		gsap.set(photos, { yPercent: 101 });

		const allPhotos = gsap.utils.toArray('.desktopPhoto');

		// create
		let mm = gsap.matchMedia();

		// add a media query. When it matches, the associated function will run
		mm.add('(min-width: 600px)', () => {
			// this setup code only runs when viewport is at least 600px wide
			console.log('desktop');

			ScrollTrigger.create({
				trigger: gallery,
				start: 'top top',
				end: 'bottom bottom',
				pin: '.right'
			});

			//create scrolltrigger for each details section
			//trigger photo animation when headline of each details section
			//reaches 80% of window height
			details.forEach((detail, index) => {
				let headline = detail.querySelector('.content');
				// let headline2 = markupContent[index];
				// console.log("detail2", headline2);
				let animation = gsap
					.timeline()
					.to(photos[index], { yPercent: 0 })
					.set(allPhotos[index], { autoAlpha: 0 });
				ScrollTrigger.create({
					trigger: headline,
					start: 'top 80%',
					end: 'top 50%',
					animation: animation,
					scrub: true,
					markers: false
				});
			});

			return () => {
				// optional
				// custom cleanup code here (runs when it STOPS matching)
				console.log('mobile');
			};
		});
	});

	onDestroy(() => {});
</script>

<div class="gallery" bind:this={gallery}>
	<!-- <div class="left">
		<div class="desktopContent">
			<div bind:this={markupContent[0]} class="desktopContentSection">
				<h1>Red</h1>
				<p>
					Red is a color often associated with strong emotions such as passion, love, and anger.
					It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth,
					and energy.
				</p>
			</div>
			<div  bind:this={markupContent[1]} class="desktopContentSection">
				<h1>Green</h1>
				<p>
					Green is a color that is often associated with nature, growth, and harmony. It is a
					calming and relaxing color that can evoke feelings of balance, stability, and freshness.
					In color psychology, green is said to represent balance and stability, making it a popular
					choice for branding and marketing in the health and wellness industry.
				</p>
			</div>
		</div>
	</div> -->

	<div class="left">
		<div class="desktopContent">
			{#each content as { markup }, i}
				<div bind:this={markupContent[i]} class="desktopContentSection">
					<div class="content" />
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
			<div class="mobilePhoto red" />
			<h1>Red</h1>
			<p>
				Red is a color often associated with strong emotions such as passion, love, and anger. It's
				a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and
				energy.
			</p>

			<div class="mobilePhoto green" />
			<h1>Green</h1>
			<p>
				Green is a color that is often associated with nature, growth, and harmony. It is a calming
				and relaxing color that can evoke feelings of balance, stability, and freshness. In color
				psychology, green is said to represent balance and stability, making it a popular choice for
				branding and marketing in the health and wellness industry.
			</p>

			<div class="mobilePhoto pink" />
			<h1>Pink</h1>
			<p>
				Pink is a color that is often associated with femininity, romance, and sweetness. It is a
				softer and more delicate shade of red that can evoke feelings of warmth, love, and
				nurturing. In the world of branding and marketing, pink is often used to target a female
				audience or to promote products that are associated with beauty, love, or romance.
			</p>

			<div class="mobilePhoto blue" />
			<h1>Blue</h1>
			<p>
				Blue is a color that is often associated with calmness, trust, and reliability. It is a
				peaceful and serene color that can evoke feelings of stability, security, and
				professionalism. In color psychology, blue is said to represent loyalty and trust, making it
				a popular choice for branding and marketing in the finance and technology industries.
			</p>
		</div>

		<!-- desktop content -->

		<div class="desktopPhotos">
			{#each content as { image, youtube }, i}
				<div class="desktopPhoto" bind:this={imageContent[i]}>
					<!-- {#if i == 0}
						<div class="desktopPhoto red" />
					{:else}
						<div class="desktopPhoto green" />
					{/if} -->
					{#if image}
						<svelte:component this={image.component} {...image.props} />
					{/if}

					{#if youtube}
						<svelte:component this={youtube.component} {...youtube.props} />
					{/if}
				</div>
			{/each}
			<!-- <div class="desktopPhoto red" />
			<div class="desktopPhoto green" /> -->
		</div>
	</div>
</div>

<style>
	.gallery {
		display: flex;
		/* outline:1px solid red; */
	}

	.left {
		width: 50%;
	}

	.right {
		height: 100vh;
		/* outline:1px solid purple; */
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
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

	.red {
		background: crimson;
	}

	.green {
		background: MediumSeaGreen;
	}

	.blue {
		background: dodgerblue;
	}

	.pink {
		background: deepPink;
	}

	/* small screen / mobile layout */
	.mobileContent {
		display: none;
		width: 80vw;
	}

	.mobilePhoto {
		width: 80vw;
		height: 80vw;
		margin-top: 5em;
		border-radius: 6vw;
	}

	/* defines styles for screens up to 599px wide */
	@media screen and (max-width: 599px) {
		.left {
			display: none;
		}

		.right {
			height: auto;
			width: 100%;
			align-items: center;
		}

		.desktopPhotos {
			display: none;
		}

		.mobileContent {
			display: block;
		}
	}
</style>

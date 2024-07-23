<script>
	import { base } from '$app/paths';
	import { onDestroy, onMount } from 'svelte';
	import { killScrollTriggers } from '$lib/utils';
	import { gsap } from 'gsap/dist/gsap';
	import { AudioBlock, EmbedYouTube, Warning } from '$lib';
	import { switcher } from '../../stores/sectionSwitcherStore';
	const switcherLinks = [];

	const sound = `${base}/stories/woddorda-ngarinyin-intro/audio/sound-intro-wudoo_final.mp3`;
	const marardda = `${base}/stories/woddorda-ngarinyin-intro/images/marardda_navTile.jpg`;
	const ngamardalee = `${base}/stories/woddorda-ngarinyin-intro/images/ngamardalee_navTile.jpg`;

	let triggers = [],
		containers = [];
	let wrapper;

	onMount(() => {
		if (wrapper) {
			const children = Array.from(wrapper.children);
			children.forEach((child) => {
				if (child) {
					gsap.from(child, {
						y: 30,
						opacity: 0,
						stagger: 0.5,
						scrollTrigger: {
							trigger: child,
							start: 'top 40%',
							end: 'top 50%',
							toggleActions: 'play none none reverse'
						}
					});
				}
			});
		}

		switcher.set(switcherLinks);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});

	const pageTitle = `Wurdu/Wudoo: Smoke ceremony for babies`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="wrapper" bind:this={wrapper}>
	<Warning>
		<p>
			Phillip Duckhole, Janet Oobagooma, and Yorna Woolagoodja have passed away since the making of
			this website and the short films it includes. Their images, voices and names are reproduced
			here in recognition of their tireless efforts to share their knowledge for future generations.
		</p>
	</Warning>

	<div class="container">
		<div class="panel">
			<div>
				<h1>Wurdu/Wudoo</h1>
				<h2>Smoke ceremony for babies</h2>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="panel">
			<p>
				Warm hands, smoke and words from Elders encircle babies in the Wurdu/Wudoo ceremony,
				embodying the Laws and guidelines for generations of people from west Kimberley Wandjina
				Wunggudd culture.
			</p>

			<p>
				<em>The words are put there that the Wandjinas gave us.</em>
				<br />
				<strong>Sam Woolagoodja 1972</strong>
			</p>

			<p>
				<em>
					It is the Law. Only our people can carry the Law for Wudoo. It needs to be done properly.
				</em>
				<br />
				<strong>Yorna Woolagoodja 2022</strong>
			</p>
		</div>
		<AudioBlock source={sound} />
	</div>

	<div class="container">
		<div class="panel">
			<p>
				Wudoo (Woddordda) or Wurdu (Ngarinyin) is a blessing. Certain adults warm their hands by the
				fire and the smoke, and touch the children on different parts of the body.  Different parts
				of the body are associated with different behaviours.
			</p>

			<p>
				Listen to Sherika Duckhole (in Ngarinyin) and Leah Umbagai (in Woddordda) give the names and
				meanings of some of the places on the baby’s body in a Wurdu/Wudoo smoking ceremony.
			</p>
		</div>

		<EmbedYouTube youTubeId="HkKLuybg2p8?rel=0" />
	</div>

	<div class="container links">
		<a href="{base}/woddordda/">
			<img
				src={ngamardalee}
				alt="Map showing the changes to the coastline of Woddordda Country, and includes symbols painted by Leah Umbagai, such as fireplace with red flames and a hand outstretched over the fire; the head and face of a baby; as well as animals, including a brolga, a kangaroo, a quoll, and a snake."
			/>
			Woddordda »
		</a>

		<a href="{base}/ngarinyin">
			<img
				src={marardda}
				alt="Satellite photograph of Ngainyin Country with hand painted images of three catfish, a dingo and an eagle."
			/>
			Ngarinyin »
		</a>
	</div>
</div>

<style>
	h1 {
		font-size: var(--font-size-hero);
	}

	h1,
	h2 {
		color: var(--clr-text);
	}

	h2 {
		margin-bottom: 0;
	}

	p {
		font-size: var(--font-size-text);
		margin-bottom: var(--space-xl);
	}

	a {
		text-decoration: none;
	}

	.container :global(iframe) {
		border-radius: var(--radius-corner);
		height: 100%;
	}

	.container :global(div) {
		height: 100%;
		width: 100%;
	}

	a:hover {
		text-decoration: underline;
	}

	.panel {
		padding: var(--space-xl) var(--space-md);
		background: var(--glass-clr-bg);
		backdrop-filter: var(--glass-backdrop-filter);
		-webkit-backdrop-filter: var(--glass-webkit-backdrop-filter);
		border-radius: var(--glass-border-radius);
		border: var(--glass-outline);
	}

	.container {
		padding: var(--space-xxl) var(--space-lg);
		width: 100%;
		height: 100%;
		min-height: 100vh;
		max-width: var(--width-content);
		margin: 0 auto;
		text-align: center;
		color: var(--clr-text);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.links a {
		text-align: center;
		font-size: var(--font-size-heading);
		max-width: 340px;
		padding: var(--space-lg);
		background-color: var(--clr-dark-contrast);
		border-radius: var(--radius-corner);
		margin-bottom: var(--space-xxxl);
	}
	.links a :hover {
		background-color: #1e1e1e;
	}

	.links img {
		border-radius: var(--radius-corner);
		margin: 0 auto;
		margin-bottom: var(--space-sm);
		width: 100%;
	}

	@media (min-width: 900px) {
		h1 {
			font-size: var(--font-size-large-hero);
		}

		p {
			font-size: var(--font-size-subheading);
		}

		.container {
			padding: 0;
		}

		.links {
			flex-direction: row;
			justify-content: space-between;
			gap: var(--space-xxxl);
		}

		.links a {
			margin-bottom: 0;
		}
	}
</style>

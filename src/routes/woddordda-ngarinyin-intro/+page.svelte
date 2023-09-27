<script>
	import { base } from '$app/paths';
    import { goto } from '$app/navigation';
	import { YouTube } from 'sveltekit-embed';

	import Warning from '$lib/components/Warning.svelte';

	let sound = `${base}/stories/woddorda-ngarinyin-intro/audio/sound-intro-wudoo_final.mp3`;
	let marardda = `${base}/stories/woddorda-ngarinyin-intro/images/marardda_navTile.png`;
	let ngamardalee = `${base}/stories/woddorda-ngarinyin-intro/images/ngamardalee_navTile.png`;
	let smoke = `${base}/stories/woddorda-ngarinyin-intro/video/iStock_smoke_fades.mp4`;
</script>

<div class="main-container">
	<div class="fix-video">
		<video autoPlay loop muted>
			<source src={smoke} type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>

	
	<Warning>
		<p>
				Phillip Duckhole, Janet Oobagooma, and Yorna Woolagoodja have passed away since the making
				of this website and the short films it includes. Their images, voices and names are
				reproduced here in recognition of their tireless efforts to share their knowledge for future
				generations.
			</p>
	</Warning>

	<div id="intro" class="title">
		<div>
			<h1>Wurdu/Wudoo</h1>
			<h2>Smoke ceremony for babies</h2>
		</div>
	</div>

	<div class="full-section pane">
		<div class="text">
			<p>
				Warm hands, smoke and words from Elders encircle babies in the Wurdu/Wudoo ceremony,
				embodying the Laws and guidelines for generations of people from west Kimberley Wandjina
				Wunggudd culture.
			</p>

			<p>
				<em>The words are put there that the Wandjinas gave us.</em>
				<br />
				Sam Woolagoodja 1972
			</p>

			<p>
				<em>
					It is the Law. Only our people can carry the Law for Wudoo. It needs to be done properly.
				</em>
				<br />
				Yorna Woolagoodja 2022
			</p>
		</div>
		<audio controls>
			<source src={sound} type="audio/mp3" />
		</audio>
	</div>

	<div class="container full-section centre-section">
		<div class="container second-section">
			<p>
				Wudoo (Woddordda) or Wurdu (Ngarinyin) is a blessing. Certain adults warm their hands by the
				fire and the smoke, and touch the children on different parts of the body.  Different parts
				of the body are associated with different behaviours.
			</p>

			<p>
				Listen to Sherika Duckhole (in Ngarinyin) and Leah Umbagai (in Woddordda) give the names and
				meanings of some of the places on the baby’s body in a Wurdu/Wudoo smoking ceremony.
			</p>

			<YouTube youTubeId="HkKLuybg2p8" />

		</div>
	</div>

	<div class="container full-section centre-section">
		<div class="content links">
			<a href="{base}/woddordda/">
				<img src={ngamardalee} alt="" />
				Woddordda »
			</a>

			<a href="{base}/ngarinyin">
				<img src={marardda} alt="" />
				Ngarinyin »
			</a>
		</div>
	</div>
</div>

<style>
	.content {
        height: fit-content;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	.main-container {
		min-height: 100vh;
	}
	.main-container header {
		position: relative;
	}
	.main-container .title,
	.main-container .full-section {
		position: relative;
		z-index: 50;
	}
	.fix-video {
		position: fixed !important;
		z-index: 10;
		height: 100vh;
	}
	.fix-video video {
		width: 1001vw;
		height: 100%;
		object-fit: cover;
	}
	.full-section {
		min-height: 100vh;
	}
	.full-section p {
		font-size: 1.2rem;
		margin-bottom: 3.2rem;
		text-align: center;
	}
	.title {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title div h1,
	.title div h2 {
		text-align: center;
		color: var(--text-light);
	}
	.pane {
		padding: 1rem;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		z-index: 50;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.pane audio {
		width: 100%;
	}
	.text {
		text-align: center;
	}
	.text p {
		font-size: 1.2rem;
		margin-bottom: 3.2rem;
	}

	.text {
		opacity: 1;
		animation: fadeIn 5s linear;
		animation-fill-mode: backwards;
	}
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.second-section {
		margin: 0 auto;
		text-align: center;
		max-width: 800px;
	}
	.second-section p {
		font-size: 1.2rem;
	}

	/* .second-section iframe {
		width: 100%;
		margin-top: 2.4rem;
	} */

	.centre-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.links {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.links a {
		text-align: center;
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		font-size: 1.6rem;
		max-width: 340px;
		padding: 1.6rem;
		background-color: var(--color-dark-charcoal);
		border-radius: var(--corner-radius);
		margin-bottom: 6.4rem;
	}
	.links a :hover {
		background-color: #1e1e1e;
	}

	.links img {
		border-radius: var(--corner-radius);
		margin: 0 auto;
		margin-bottom: 1rem;
		width: 100%;
		max-width: 340px;
	}

	.warning-buttons {
		display: flex;
		flex-direction: column;
	}

	.warning-buttons button:first-child {
		background-color: transparent;
		margin-right: 2rem;
	}
	.warning-buttons button:last-child {
		background-color: #fff 1c;
		color: #fff;
	}
	.warning-buttons button:last-child:hover a {
		color: #fff;
	}
	.warning-buttons button {
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		width: 100%;
		border: 2px solid #fff;
		border-radius: 4px;
		margin: 1rem 0;
		padding: 1rem 2rem;
		font-size: 1rem;
	}
	.warning-buttons button a {
		color: #fff;
	}

	.warning-buttons button:hover {
		border: 2px solid var(--color-fg-dark);
		background-color: var(--color-fg-dark);
		color: #fff !important;
		cursor: pointer;
	}

	@media (min-width: 900px) {
		.pane {
			max-height: 400px;
			padding: 0;
		}

		.text p {
			font-size: 1.6rem;
		}

		.second-section p {
			font-size: 1.6rem;
		}

		.links {
			align-items: stretch;
			flex-direction: row;
			justify-content: space-between;
			gap: 12px;
		}

		.links a {
			margin-bottom: 0;
		}

		.warning-buttons {
			flex-direction: row;
			justify-content: flex-start;
		}

		.warning-buttons button {
			margin: 2rem 0;
		}
	}
</style>

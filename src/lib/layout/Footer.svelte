<script>
import { base } from "$app/paths";

let anuLogo = `${base}/images/anu_horizontal.png`;
let arcLogo = `${base}/images/arc-logo-white.png`;

</script>

<footer>
	<h2>Research Centre for Deep History</h2>
	<!-- <div class="menu"> -->
		<!-- <div class={footerStyles.social}>
          <a href="https://www.facebook.com/ReDeepHistory/">
            <img alt="facebook logo" src={fbLogo} />
          </a>
          <a href="https://twitter.com/ReDeepHistory">
            <img alt="twitter logo" src={twitterLogo} />
          </a>
          <a href="https://www.youtube.com/channel/UCqehUPTgWdtAZmfwAi0RMkg/featured">
            <img alt="youtube logo" src={youtubeLogo} />
          </a>
          <a href="mailto:#">
            <img alt="mail icon" src={mailLogo} />
          </a>
        </div> -->
	<!-- </div> -->
	<!-- <hr /> -->
	<div class="logos">
		<img alt="anu logo" src={anuLogo} />
		<img alt="anu logo" src={arcLogo} />
	</div>
	<div>
		<p>
			All rights reserved ® Research Centre for Deep History, 2022 | The School of History, The ANU
			| Built by <a href="https://ladyofcode.com">Tabs</a>
		</p>
	</div>

	<!-- <div id="social" class={footerStyles.social}>
          <a href="https://www.facebook.com/ReDeepHistory/"><img alt="facebook logo" src={fbLogo} /></a>
          <a href="https://twitter.com/ReDeepHistory"><img alt="twitter logo" src={twitterLogo} /></a>
          <a href="https://www.youtube.com/channel/UCqehUPTgWdtAZmfwAi0RMkg/featured"><img alt="youtube logo" src={youtubeLogo} /></a>
          <a href="mailto:julie.rickwood@anu.edu.au"><img alt="mail icon" src={mailLogo} /></a>
        </div>  -->
</footer>

<style>
	footer {
		background-color: #231f20;
		padding: 2rem;
		margin-top: 8rem;
	}

	h2,
	h3,
	p {
		color: #ffffff;
	}

	p {
		text-align: center;
	}

	h2 {
		max-width: 1024px;
		margin: 0 auto;
		padding: 8px;
		margin-top: 2rem;
		box-sizing: border-box;
	}

	h3 {
		text-transform: uppercase;
		padding: 8px;
	}

	hr {
		width: 100%;
		max-width: 1024px;
		margin: 2rem auto;
		background-color: #ffffff23;
	}

	.menu {
		display: flex;
		flex-direction: column;
		max-width: 1024px;
		margin: 0 auto;
		margin-bottom: 2rem;
	}

	.logos {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logos img {
		height: 100px;
		width: auto;
		margin: 2rem;
	}

	@media (min-width: 600px) {
		.menu {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media (min-width: 900px) {
		.logos {
			flex-direction: row;
		}
		.logos img {
			height: 72px;
		}
	}
</style>

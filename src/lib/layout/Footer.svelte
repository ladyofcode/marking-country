<script>
	import { base } from '$app/paths';

	let anuLogo = `${base}/images/anu_horizontal.png`;
	let arcLogo = `${base}/images/arc-logo-white.png`;
	let reLogo = `${base}/images/Menu_Logo_White.png`;
</script>

<footer>
	<div class="container">
		<h2>Research Centre for Deep History</h2>
		<p>
			<a href="https://re.anu.edu.au/">The Research Centre for Deep History</a> is in the School of History
			at The Australian National University.
		</p>
		<div class="logos">
			<img alt="" src={reLogo} />
			<img alt="" src={anuLogo} />
			<img alt="" src={arcLogo} />
		</div>
		<hr />
		<p>
			All rights reserved ® Research Centre for Deep History, The ANU | Built by <a
				href="https://ladyofcode.com">Tabs</a
			>
		</p>
	</div>
</footer>

<style>
	footer {
		position: relative;
		background-color: var(--clr-bg-block-dark);
		border-top: 2px solid var(--clr-bg-block-dark);
		padding: var(--space-xxxl) var(--space-lg);
		margin-top: var(--space-xxxxl);
	}

	.container {
		width: 100%;
		margin: 0 auto;
		max-width: var(--width-content);
	}

	h2,
	p {
		color: var(--clr-text);
	}

	p {
		text-align: left;
		font-size: var(--font-size-body);
	}

	h2 {
		font-size: var(--font-size-heading);
		margin: 0 auto;
	}

	hr {
		border: 0.5px solid var(--clr-light-contrast);
		margin-bottom: var(--space-xl);
	}

	.logos {
		width: 100%;
		margin: var(--space-xxl) auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--space-lg);
	}

	.logos img {
		height: 64px;
		width: auto;
		filter: var(--clr-images);
	}

	@media (min-width: 900px) {
		.logos {
			flex-direction: row;
			justify-content: flex-start;
			gap: var(--space-xxl);
		}
	}
</style>

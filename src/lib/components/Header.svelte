<script>
	export let heading, subheading, alt, id, image, video, poster, type, name;
</script>

<header {id} class="header {name}">
	<div class="heading">
		<h1>{heading}</h1>
		<h2>{subheading}</h2>
	</div>

	{#if image}
		<img src={image} {alt} />
	{/if}

	{#if video}
		<video autoPlay muted loop alt="" {poster}>
			<source src={video} {type} />
			Your browser does not support the video tag.
		</video>
	{/if}
</header>

<style>
	.header {
		height: 100vh;
		width: auto;
		position: relative;
	}

	.header img,
	.header video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.heading {
		position: absolute;
		bottom: 1.6rem;
		margin-left: 1.6rem;
	}

	.heading h1,
	.heading h2 {
		color: var(--text-light);
	}

	.heading h1 {
		margin-bottom: 0;
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

	.header::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
	}

	.carnarvon {
		background-color: rgb(21, 21, 11);
	}

	.carnarvon::before {
		background: rgb(21, 21, 11);
		background: linear-gradient(180deg, rgba(21, 21, 11, 0) 40%, rgba(21, 21, 11, 1) 80%);
	}

	.willandra {
		background: rgb(129, 107, 94);
	}

	.willandra::before {
		background: rgb(129, 107, 94);
		background: linear-gradient(180deg, rgba(129, 107, 94, 0) 40%, rgba(129, 107, 94, 1) 80%);
	}

	.woddordda {
		background-color: rgb(64, 100, 103);
	}

	.woddordda::before {
		background: rgb(64, 100, 103);
		background: linear-gradient(180deg, rgba(64, 100, 103, 0) 40%, rgba(64, 100, 103, 1) 80%);
	}

	.ngarinyin {
		background-color: rgb(54, 46, 43);
	}

	.ngarinyin::before {
		background: rgb(54, 46, 43);
		background: linear-gradient(180deg, rgba(54, 46, 43, 0) 40%, rgba(54, 46, 43, 1) 80%);
	}

	.yawuru {
		background-color: rgb(27, 25, 26);
	}

	.yawuru::before {
		background: rgb(27, 25, 26);
		background: linear-gradient(180deg, rgba(27, 25, 26, 0) 40%, rgba(27, 25, 26, 1) 80%);
	}

	.yalanji {
		background-color: rgb(147, 120, 99);
	}

	.yalanji::before {
		background: rgb(147, 120, 99);
		background: linear-gradient(180deg, rgba(147, 120, 99, 0) 40%, rgba(147, 120, 99, 1) 80%);
	}
</style>

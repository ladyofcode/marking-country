<script>
	export let videoId;
	export let youTubeId;
	export let width = '100%'; // Default width
	export let height = '100%'; // Default height

	let iframe;

	// Construct the src URL dynamically based on the passed videoId
	$: src = `https://www.youtube-nocookie.com/embed/${youTubeId || videoId}?rel=0`;
</script>

<iframe
	bind:this={iframe}
	{src}
	{width}
	{height}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
>
</iframe>

<style>
	iframe {
		height: 100%;
		width: 100%;
		border-radius: var(--radius-corner);
	}
</style>

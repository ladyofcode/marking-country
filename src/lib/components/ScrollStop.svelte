<script>
    export let video, poster, autoplay;
</script>

<div class="container">

    
    {#if video && autoplay}
	<video autoPlay preload="none" muted {poster} loop>
		<source src={video} />
	</video>
    {/if}
    {#if video && !autoplay}
	<video controls preload="none" {poster} loop>
		<source src={video} />
	</video>
    {/if}
</div>

<style>
    .container {
        height: 100vh;
    }

    video {
        width: 100%;
    }

    @media (min-width: 900px) {
    }
</style>

<script>
	import '../app.css'

	import Navigation from '$lib/layout/Navigation.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import { base } from '$app/paths';
  </script>

  <Navigation />

<!-- <nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav> -->

<div class="container">
	<slot></slot>
</div>

<Footer />

<style>
	.container {
		scroll-snap-type: y mandatory;
	}
</style>
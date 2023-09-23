<script>
	import '../app.css'

	import { base } from '$app/paths';
  </script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav>

<div class="container">
	<slot></slot>
</div>

<style>
	.container {
		scroll-snap-type: y mandatory;
	}
</style>
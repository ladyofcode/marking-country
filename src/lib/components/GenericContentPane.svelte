<script>
	import { onMount, onDestroy } from 'svelte';
    import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let element, animation;

	// onMount(() => {
	// 	animation = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: "#container",
	// 			pin: true,
	// 			start: "top top",
	// 			pinSpacing:false,
	// 			// end: "+=100%",
	// 			markers: true,
	// 		}
	// 	});
	// });

	// onDestroy(() => {
	// 	animation.scrollTrigger.kill(true);
	// 	animation.kill();
	// });
</script>

<section id="container">
	<slot name="first"  />
	<slot />
</section>
<style>

</style>

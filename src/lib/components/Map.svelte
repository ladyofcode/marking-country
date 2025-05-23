<script>
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { gsap } from 'gsap/dist/gsap';
	import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
	import { killScrollTriggers } from '$lib/utils';
	gsap.registerPlugin(MotionPathPlugin);

	const homeOcean = `${base}/images/home_ocean.png`;
	const homeContinent = `${base}/images/home_continent.png`;

	let icons = [],
		triggers = [],
		markers = [];

	let ocean;

	const rectHeight = 240,
		rectCorner = 24,
		rectColor = 'black';

	onMount(() => {
		icons.forEach((icon) => {
			const markerAnimation = gsap.timeline({ repeat: -1, yoyo: true });

			markerAnimation.to(
				markers,
				{
					stroke: 'rgba(214, 90, 90, 0.31)',
					strokeWidth: 60,
					strokeOpacity: 0.9,
					duration: 1,
					ease: 'ease-in'
				},
				0
			);

			markerAnimation.to(
				icon,
				{
					y: -40,
					scale: 1.02,
					duration: 1,
					ease: 'circ.in'
				},
				0
			);
			triggers.push(markerAnimation);
		});

		const oceanAnimation = gsap.to(ocean, {
			transformOrigin: 'center',
			ease: 'none',
			repeat: -1,
			keyframes: [
				{
					opacity: 0.2,
					scaleX: 1.06,
					scaleY: 1.12,
					ease: 'sine.inOut',
					'stroke-width': 100,
					duration: 2.5
				},
				{ opacity: 1, scaleX: 1, scaleY: 1, ease: 'none', 'stroke-width': 1, duration: 2.5 }
			]
		});

		triggers.push(oceanAnimation);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<svg viewBox="0 0 4328.09 4170.88">
	<defs>
		<filter id="glass" x="0" y="0" width="100%" height="100%">
			<feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blurred" />
			<feComponentTransfer in="blurred" result="brightness">
				<feFuncA type="linear" slope="0.4" />
			</feComponentTransfer>
			<feComposite in="SourceGraphic" in2="brightness" operator="in" result="composite" />
		</filter>
	</defs>
	<g id="Logo">
		<path
			id="logomark"
			d="M257.51,4147.61v17.45h-75.13c-22.54-47.99-27.99-60.71-47.14-94.16-14.91-26.3-25.93-34.78-49.2-36.48v82.77c0,22.9,6.79,30.05,30.54,30.54v17.45H0v-17.45c25.45-.48,31.39-6.79,31.39-30.9v-196.19c0-24.24-5.94-31.02-31.39-31.39v-17.81h121.3c61.92,0,105.18,22.05,105.18,82.28,0,50.05-37.32,73.8-85.67,75.5v1.7c20.84,5.57,35.63,16.6,44.96,29.33,11.03,14.78,22.54,35.63,37.32,62.77,8.48,15.75,13.57,23.75,34.29,24.6h.12ZM115.36,3897.25h-29.33v114.15h27.99c34.42,0,54.29-12.72,54.29-57.68s-15.75-56.47-53.08-56.47h.12ZM448.73,4122.16l9.33,16.12c-21.69,19.51-48.35,31.75-82.28,31.75-63.62,0-100.94-41.2-100.94-112.46s40.35-111.12,97.19-111.12c60.71,0,89.92,38.17,89.92,103.12v14.78h-131.97c1.21,54.29,19.99,73.8,62.41,73.8,17.81,0,39.5-6.42,56.47-16.12l-.12.12ZM330.34,4039.4h78.89c0-51.38-10.66-69.19-37.32-69.19-24.96,0-38.66,16.12-41.56,69.19ZM571.85,4134.77c0-19.51-15.27-35.14-35.26-35.14s-35.26,15.15-35.26,35.14,15.27,36.11,35.26,36.11,35.26-16.6,35.26-36.11Z"
			stroke-width="0"
		/>
	</g>
	<g id="ocean_bg">
		<path
			id="bg_smooth"
			bind:this={ocean}
			d="M4323.49,2084.66c-5.94-61.18-34.89-119.4-69.15-169.56-17.44-23.25-33-46.95-50.76-69.7-25.03-32.51-59.8-56.37-87.08-86.59-12.45-13.75-25.61-26.65-32.98-43.77-5-11.58-7.08-24.17-9.43-36.58-2.26-12.94-4.51-25.89-7.44-38.85-9.29-39.93-29.75-85.35-58.34-116.64-26.07-29.4-56.88-49.74-82.66-78.58-23.37-26.94-41.01-57.64-59.05-88.91-21.96-39.69-44.83-77.35-70.08-114.22-12.2-18.22-23.77-37.16-37.1-54.98-23.55-30.18-54.98-56.89-78.45-87.84-13.94-18.03-26.78-37.29-37.41-56.52-5.97-11.02-11.21-21.91-14.79-33.78-5.39-16.97-6.19-34.77-8.15-52.33-3.75-29.55-12.74-55.59-23.63-83-4.82-12.02-9.48-24.69-13.94-36.96-5.65-15.83-12.46-31.91-16.83-48.26-7.23-25.86-6.74-53.41-7.39-80.19-.74-35.56-1.43-71.36-21.7-101.13-7.05-10.85-17.34-18.59-28.06-26.59-10.79-7.79-21.85-15.5-32.86-23.18-13.75-9.31-26.81-19.18-40.38-28.67-9.7-6.78-19.75-13.08-29.46-19.82-17.3-12.24-35.28-26.78-41.12-47.8-4.01-16.13-1.68-33.04.23-49.45,2.88-25.03,11.01-50.76,12.05-75.38,2.13-37.43-7.71-73.95-14.73-110.51-4.81-26.73-9.81-53.81-14.6-80.82-14.77-82.49-43.14-155-143.31-142.69-26.93,3.28-51.64,15.59-76.94,24.05-15.29,5.29-30.77,10.47-43.88,20-15.73,10.63-28.26,26.5-35.23,44.48-8.59,24.09-9.27,49-11.8,74.98-1.22,13.22-2.7,26.45-3.87,39.65-1.57,19.4-2.41,37.91-4.69,57.44-2.67,26.03-8.06,52.5-9.38,78.81-2.49,35.66-.5,71.19-1.03,106.75-.45,22.81-1.94,44.52-.72,66.85,1.62,28.64,2.92,56.81,1.86,85.28-2.25,51-11.89,89.29-54.1,121.15-14.38,10.85-30.61,17.62-47.99,23.92-21.12,7.7-42.44,14.91-63.32,22.15-15,4.21-42.79,17.24-55.94,9.48-8.24-5.17-9.79-15.52-13.23-24.09-8.58-24.92-23.4-48.58-45.02-64.59-28.7-21.63-65.78-31.11-94.43-52.63-29.81-22.14-36.92-46.09-25.84-81.28,6.3-20.79,14.39-43.08,17.79-65.1,5.14-33.93,4.31-69.05-2.78-102.24-2.66-12.15-5.69-22.76-10.48-33.84-7.77-17.52-19.33-31.87-34.02-44.11-19.28-15.53-40.78-25.52-62.85-38.61-43.9-25.18-91.36-44.19-140.42-54.28-22.61-5.29-45.12-10.2-67.33-16.25-15.06-4.26-27.48-10.46-40.85-17.01-13.37-6.76-26.25-14.4-39.9-20.66-38.35-18.81-77.34-15.58-118.91-15.73-29.4-.61-58.28-2.14-87.43-3.65-38.33-2.23-77.52-7.18-115.3-4.76-12.42.94-24.71,3.19-36.86,5.81-27.84,5.52-54.17,13.41-77.96,28.44-21.1,13.32-36.52,34.05-42.27,58.55-3.82,19.36-7.74,36.69-11.46,56.43-2.03,11.73-4.52,23.17-8.16,34.57-6.45,21.22-16.03,41.02-27.32,60.43-17.84,29.84-45.81,54.31-76.11,71.3-18.36,9.91-39.43,16.75-58.78,22.1-19.25,5.52-38.26,8.39-57.98,9.47-32.57,1.67-64.97,1.63-97.54,9.33-78.26,18.09-139.99,66.1-194.18,123.44-35.94,37.41-63.94,82.92-102.87,116.91-25.98,22.59-56.83,37.91-87.79,52.59-27.36,12.8-55.05,26.38-77.27,47.17-26.09,23.69-45.67,55.71-60.29,87.03-8.09,16.9-13.55,33.03-17.27,50.46-3.9,18.28-5.22,37.06-16.12,52.73-5.34,8.87-13.73,18-20.47,26.46-13.37,16.68-26.74,35.15-38.15,53.35-13.24,19.67-23.07,41.72-38.52,59.9-32.52,35.88-76.03,62.42-119.15,85.6-27.51,14.06-57.17,24.2-87.27,31.33-27.33,6.39-57.03,10.57-83.14,18.86-18.76,6-36.71,14.46-53.11,25.37-23.62,15.67-45.28,34.12-68.64,50.21-16.11,11.66-33.55,21.83-50.31,31.96-17.73,10.6-35.62,21.87-53.13,32.26-19.91,11.98-39.42,23.02-58.27,36.13-12.41,8.65-23.18,19.29-35.1,28.36-10.11,7.81-21.03,14.59-30.62,23.09-12.62,10.54-21.76,24.14-35.01,33.55-7.56,5.22-16.38,8.28-24.85,11.65-12.75,5.02-24.43,12.96-32.76,23.99-24.6,31.8-16.14,80.55-8.87,117.4,3.35,18.2,7.69,37.83,9.77,55.4,1.26,12.79,1.92,26.32,1.99,38.77.17,11.5,1.03,22.34.56,33.6-.79,23.33-6.2,45.89-7.63,69.33-2.56,26.26-4.48,53.93-.76,80.71,1.53,9.84,3.65,19.61,5.84,29.32,3.59,14.74,7.27,29.47,10.23,44.29,3.36,16.23,8.45,31.57,12.04,47.5,5.52,24.22,5.82,50.29,12.76,74.49,7.64,26.84,20.29,54.1,33.91,78.95,10.49,20.88,22.85,43.17,37.45,60.63,17.78,22.07,38.61,42.07,54.49,65.53,9.35,13.61,16.76,28.2,23.54,43.31,5.63,12.34,11.3,24.54,15.83,37.41,11.17,32.19,16.78,66.62,27.39,99.04,5.29,16.26,13.24,31.63,20.53,47.04,10.93,22.88,19.39,46.43,31.4,68.63,26.42,46.11,37.57,72.25,39.54,126.07,1.15,33.85-7.05,69.34-9.19,103.5-5.3,64.92,10,122.27,52.24,172.96,20.88,25.08,49.56,42.64,78.34,57.58,46.49,24.02,92.56,48.39,141.31,70.02,39.68,17.75,83.93,34.99,127.6,34.62,29.81-.46,59.4-6.78,86.43-18.75,25.76-11.94,48.87-28.7,69.96-47.04,12.25-11.11,24.27-22.15,37.06-32.64,13.9-11.7,28.49-24.33,45.04-32.69,33.96-16.33,72.79-25.8,107.62-39.36,22.15-8.6,42.69-18.12,64.39-27.73,17.69-8.01,35.52-16.15,54.28-22.42,32.99-11.02,66.95-21.53,96.46-40.65,55.89-34.87,108.88-75.09,168.06-103.95,31.36-15.88,64.9-23.27,98.11-32.83,12.59-3.52,25.29-6.63,37.69-10.83,14.54-4.78,28.32-10.58,42.77-16.5,16.74-6.67,32.71-15.12,48.76-23.37,46.18-22.55,95.36-42.86,145.3-55.63,36.69-9.58,71.13-9.55,98.8,18.65,7.39,7.34.6,18,3.73,26.85,3.1,11.33,13.78,19.09,24.28,24.65,49.98,27.94,101.1,21.54,155.84,20.74,23.73-.45,47.27,1.46,69.16,10.21,51.55,19.28,84.37,66.01,108.84,113.58,20.21,37.63,37.39,76.28,60.16,112.12,18.73,28.65,39.4,56.75,62.93,81.83,12.59,13.3,26.88,25.6,43.51,32.73,13.47,6.14,26.24,8.14,40.76,8.6,13.55.52,27.38,0,40.76,2.82,20.01,3.37,35.88,17.98,49.04,33.04,12.32,14.17,23.9,29.22,32.86,45.68,9.87,17.79,15.5,37.37,23.65,55.76,7.69,16.88,17.88,32.63,29,47.91,13.55,18.9,29.59,40.42,49.4,55.69,22.35,17.68,47.67,34.65,72.61,46.93,10.85,4.73,19.3,6.74,29.51,8.64,10.21,1.74,20.12,3.4,29.12,8.61,37.46,20.17,68.33,50.27,103.85,73.98,24.87,17.26,53.92,29.67,76.59,49.62,5.53,4.83,11.77,10.94,16.08,16.11,1.89,2.27,3.67,4.42,5.07,6.79,2.1,3.49,2.87,6.98.5,10.23-2.83,3.58-6.79,6.51-9.84,10.05-6.69,6.79-11.72,15.93-13.63,25.66-4.57,21.39-5.28,52.08-2.29,74.86,3.19,29.34,9.23,58.12,12.22,87.49,2.59,22.16,6.25,41.95,13.64,64.57,7.69,23.84,17.34,49.61,31.48,71.14,15.78,25.14,37.52,46,59.37,64.94,24.79,21.49,50.3,42.77,75.35,63.09,18.52,15.64,38.56,30.43,61.98,38.09,13.76,4.72,28.43,6.55,42.95,5.32,18.51-1.42,36.15-7.99,52.81-15.76,33.14-15.35,62.57-42.51,73.95-77.21,7.16-19.57,12.06-38.56,18.08-57.91,2.43-8.94,4.5-17.63,8.51-25.87,8.17-18.28,25.69-29.42,38.44-44.58,14.82-16.52,26.12-38.6,25.92-61.21-.81-17.86-5.5-35.21-7.36-52.91-2.89-19.17-2.38-38.92,3.13-58.73,4.94-20.34,9.2-41.56,10.46-62.34.61-13.52-.09-25.44-.68-37.92-.6-11.64-1.71-23.37-4.38-34.72-1.99-8.63-4.45-16.8-7.55-24.84-5.16-13.02-11.09-27.09-9.49-41.23,3.51-31.04,69.03-52.44,95.79-66.59,17.94-8.84,35.59-18.47,51.78-29.91,14.1-9.96,22.79-18.98,33.16-30.57,9.06-10.19,17.8-20.46,25.24-32.27,21.31-33.58,45.13-67.02,63.46-102.72,10.25-19.39,19.51-39.4,30.87-58.18,12.54-21.48,28.3-40.9,41.55-62.1,10.64-16.86,21.23-33.19,31.74-50,12.19-19.93,22.7-40.35,34.4-60.84,29.05-54.52,73.39-104.44,96.76-162.63,11.83-28.02,19.83-53.81,28.66-81.5,5.52-17.34,10.65-34.48,17.82-51.15,5.77-13.76,13.23-26.37,21.23-39.33,24.56-38,52.75-75.36,77.59-113.38,10.95-16.32,21.82-32.77,31.06-50.12,10.84-20.43,19.26-42.34,25.32-64.76,17.44-60.59,12.04-124.82,20.21-186.69,4.54-31.46,9.26-59.33,17.79-87.81,4.56-14.63,10.56-28.68,15.86-43.03,12.86-35.78,16.93-73.14,13.72-111.46v-.14Z"
			fill="#206685"
			stroke="#2b5c78"
		/>
	</g>
	<g id="australia">
		<image
			id="ocean"
			width="17929"
			height="17356"
			transform="translate(25.13 2.29) scale(.24)"
			xlink:href={homeOcean}
		/>
		<image
			id="continent"
			width="16567"
			height="15642"
			transform="translate(200.57 190.97) scale(.24)"
			xlink:href={homeContinent}
		/>
	</g>
	<g id="icons">
		<g
			id="yawuru"
			bind:this={icons[0]}
			on:click={() => goto(`${base}/yawuru/`)}
			on:keydown={() => goto(`${base}/yawuru/`)}
			role="button"
			tabindex="0"
		>
			<path
				id="circle"
				d="M990.35,1055.1c-38.1,1.93-69.07,32.89-71,71-2.25,44.5,34.3,81.06,78.8,78.8,38.1-1.93,69.07-32.89,71-71,2.26-44.5-34.3-81.06-78.8-78.81Z"
				fill="#919191"
				stroke-width="0"
			/>
			<path
				id="marker"
				bind:this={markers[0]}
				d="M994.26,980c-82.84,0-150,67.16-150,150,0,58.25,74.17,206.8,118.2,289.85,13.53,25.52,50.08,25.52,63.6,0,44.03-83.05,118.2-231.59,118.2-289.85,0-82.84-67.16-150-150-150ZM1069.16,1133.91c-1.93,38.1-32.89,69.07-71,71-44.5,2.25-81.06-34.3-78.8-78.8,1.93-38.1,32.89-69.07,71-71,44.5-2.26,81.06,34.3,78.8,78.81Z"
				fill="#000"
				stroke-width="0"
			/>
			<rect
				x="620"
				y="1500"
				width="740"
				height={rectHeight}
				rx={rectCorner}
				ry={rectCorner}
				fill={rectColor}
				filter="url(#glass)"
			/>
			<text x="980" y="1670" class="marker-title">Yawuru</text>
		</g>
		<g
			id="woddordda-ngarinyin"
			bind:this={icons[1]}
			on:click={() => goto(`${base}/woddordda-ngarinyin-intro/`)}
			on:keydown={() => goto(`${base}/woddordda-ngarinyin-intro/`)}
			role="button"
			tabindex="0"
		>
			<path
				id="circle-2"
				data-name="circle"
				d="M1236.98,809.89c-38.1,1.93-69.07,32.89-71,71-2.25,44.5,34.3,81.06,78.8,78.8,38.1-1.93,69.07-32.89,71-71,2.26-44.5-34.3-81.06-78.8-78.81Z"
				fill="#919191"
				stroke-width="0"
			/>
			<path
				id="marker-2"
				bind:this={markers[1]}
				data-name="marker"
				d="M1240.88,734.79c-82.84,0-150,67.16-150,150,0,58.25,74.17,206.8,118.2,289.85,13.53,25.52,50.08,25.52,63.6,0,44.03-83.05,118.2-231.59,118.2-289.85,0-82.84-67.16-150-150-150ZM1315.79,888.69c-1.93,38.1-32.89,69.07-71,71-44.5,2.25-81.06-34.3-78.8-78.8,1.93-38.1,32.89-69.07,71-71,44.5-2.26,81.06,34.3,78.8,78.81Z"
				fill="#000"
				stroke-width="0"
			/>
			<rect
				x="1140"
				y="1255"
				width="1160"
				height={rectHeight}
				rx={rectCorner}
				ry={rectCorner}
				fill={rectColor}
				filter="url(#glass)"
			/>
			<text x="1720" y="1430" class="marker-title"> Wurdu/Wudoo</text>
		</g>
		<g
			id="willandra"
			bind:this={icons[2]}
			on:click={() => goto(`${base}/willandra-lakes/`)}
			on:keydown={() => goto(`${base}/willandra-lakes/`)}
			role="button"
			tabindex="0"
		>
			<path
				id="circle-3"
				data-name="circle"
				d="M3041.35,2516.22c-38.1,1.93-69.07,32.89-71,71-2.25,44.5,34.3,81.06,78.8,78.8,38.1-1.93,69.07-32.89,71-71,2.26-44.5-34.3-81.06-78.8-78.81Z"
				fill="#919191"
				stroke-width="0"
			/>
			<path
				id="marker-3"
				bind:this={markers[2]}
				data-name="marker"
				d="M3045.26,2441.12c-82.84,0-150,67.16-150,150,0,58.25,74.17,206.8,118.2,289.85,13.53,25.52,50.08,25.52,63.6,0,44.03-83.05,118.2-231.59,118.2-289.85,0-82.84-67.16-150-150-150ZM3120.16,2595.03c-1.93,38.1-32.89,69.07-71,71-44.5,2.25-81.06-34.3-78.8-78.8,1.93-38.1,32.89-69.07,71-71,44.5-2.26,81.06,34.3,78.8,78.81Z"
				fill="#000"
				stroke-width="0"
			/>
			<rect
				x="2590"
				y="2960"
				width="920"
				height={rectHeight}
				rx={rectCorner}
				ry={rectCorner}
				fill={rectColor}
				filter="url(#glass)"
			/>
			<text x="3060" y="3140" class="marker-title"> Willandra</text>
		</g>
		<g
			id="quinkan"
			bind:this={icons[3]}
			on:click={() => goto(`${base}/western-yalanji/`)}
			on:keydown={() => goto(`${base}/western-yalanji/`)}
			role="button"
			tabindex="0"
		>
			<path
				id="circle-4"
				data-name="circle"
				d="M3340.12,492.26c-38.1,1.93-69.07,32.89-71,71-2.25,44.5,34.3,81.06,78.8,78.8,38.1-1.93,69.07-32.89,71-71,2.26-44.5-34.3-81.06-78.8-78.81Z"
				fill="#919191"
				stroke-width="0"
			/>
			<path
				id="marker-4"
				bind:this={markers[3]}
				data-name="marker"
				d="M3344.02,417.16c-82.84,0-150,67.16-150,150,0,58.25,74.17,206.8,118.2,289.85,13.53,25.52,50.08,25.52,63.6,0,44.03-83.05,118.2-231.59,118.2-289.85,0-82.84-67.16-150-150-150ZM3418.92,571.07c-1.93,38.1-32.89,69.07-71,71-44.5,2.25-81.06-34.3-78.8-78.8,1.93-38.1,32.89-69.07,71-71,44.5-2.26,81.06,34.3,78.8,78.81Z"
				fill="#000"
				stroke-width="0"
			/>
			<rect
				x="2850"
				y="950"
				width="920"
				height={rectHeight}
				rx={rectCorner}
				ry={rectCorner}
				fill={rectColor}
				filter="url(#glass)"
			/>
			<text x="3300" y="1120" class="marker-title"> W. Yalanji</text>
		</g>
		<g
			id="carnarvon"
			bind:this={icons[4]}
			on:click={() => goto(`${base}/carnarvon-gorge/`)}
			on:keydown={() => goto(`${base}/carnarvon-gorge/`)}
			role="button"
			tabindex="0"
		>
			<path
				id="circle-5"
				data-name="circle"
				d="M3671.02,1797.31c-38.1,1.93-69.07,32.89-71,71-2.25,44.5,34.3,81.06,78.8,78.8,38.1-1.93,69.07-32.89,71-71,2.26-44.5-34.3-81.06-78.8-78.81Z"
				fill="#919191"
				stroke-width="0"
			/>
			<path
				id="marker-5"
				bind:this={markers[4]}
				data-name="marker"
				d="M3674.93,1722.22c-82.84,0-150,67.16-150,150,0,58.25,74.17,206.8,118.2,289.85,13.53,25.52,50.08,25.52,63.6,0,44.03-83.05,118.2-231.59,118.2-289.85,0-82.84-67.16-150-150-150ZM3749.83,1876.12c-1.93,38.1-32.89,69.07-71,71-44.5,2.25-81.06-34.3-78.8-78.8,1.93-38.1,32.89-69.07,71-71,44.5-2.26,81.06,34.3,78.8,78.81Z"
				fill="#000"
				stroke-width="0"
			/>
			<rect
				x="3200"
				y="2250"
				width="920"
				height={rectHeight}
				rx={rectCorner}
				ry={rectCorner}
				fill={rectColor}
				filter="url(#glass)"
			/>
			<text x="3670" y="2420" class="marker-title"> Carnarvon</text>
		</g>
		<circle
			id="dhrg"
			cx="3875.99"
			cy="2781.61"
			r="80"
			fill="#ffd400"
			stroke-width="0"
			on:click={() => (window.location.href = 'https://dhrg.uws.edu.au/at-the-heart-of-it/')}
			on:keydown={() => (window.location.href = 'https://dhrg.uws.edu.au/at-the-heart-of-it/')}
			role="button"
			tabindex="0"
		/>
	</g>
</svg>

<style>
	svg {
		max-height: 80vh;
		margin: 0 auto;
		overflow: visible;
		pointer-events: visiblePainted;
	}

	#logomark {
		fill: var(--clr-text);
	}

	circle {
		fill: #dd762c;
	}

	circle:hover {
		fill: #945b15;
		stroke: #f7ca92;
		stroke-width: 20;
		cursor: pointer;
	}

	text,
	rect {
		visibility: hidden;
		opacity: 0;
		transform: translateY(-100px);
		transition:
			opacity 0.4s ease-in-out,
			transform 0.4s ease-out;
	}

	text {
		font-size: 160px;
		text-anchor: middle;
		fill: rgba(235, 217, 220, 0.788);
	}

	#icons path:last-of-type {
		fill: #872a20;
	}

	#icons path:first-of-type {
		fill: rgb(70, 28, 25);
	}

	#icons:hover {
		cursor: pointer;
	}

	#icons g:hover rect,
	#icons g:hover text {
		transform: translateX(2rem);
		transform: translateY(2rem);
	}

	#icons g:hover path:nth-child(1) {
		fill: rgba(168, 72, 72, 0.91);
		transform: translateX(2rem);
		transform: translateY(2rem);
	}

	#icons g:hover path:nth-child(2) {
		fill: rgba(214, 90, 90, 0.91);
		transform: translateX(2rem);
		transform: translateY(2rem);
		stroke-width: 18 !important;
		stroke-opacity: 1 !important;
		stroke: rgb(233, 139, 139) !important;
	}

	#continent {
		animation: fadeInAnimation ease 2s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (min-width: 600px) {
		#icons g:hover rect,
		#icons g:hover text {
			visibility: visible;
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

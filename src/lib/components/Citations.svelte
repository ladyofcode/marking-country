<script>
	export let citations, location, page;

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { killScrollTriggers } from '$lib/utils';

	let triggers = [];

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const today = new Date();
	const month = months[today.getMonth()];
	const year = today.getFullYear();
	const day = today.getDate();

	const date = `${day} ${month} ${year}`;

	let selected = 0;
	let buttonText = 'Copy';
	let copyCitation;

	let container;

	onMount(() => {
		copyCitation = () => {
			let text = document.getElementById('citation');
			try {
				text.focus();
				document.execCommand('selectAll');
				document.execCommand('copy');
				buttonText = `Copied!`;
				setTimeout(() => (buttonText = 'Copy'), [1000]);
			} catch {
				buttonText = `Failed to copy!`;
				setTimeout(() => (buttonText = 'Copy'), [1000]);
			}
		};

		const fadeIn = gsap.from(container, {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		triggers.push(fadeIn);
	});

	onDestroy(() => {
		killScrollTriggers(triggers);
	});
</script>

<div class="wrapper">
	<div class="container" bind:this={container}>
		<h2>Citations</h2>

		<div class="options">
			{#each citations as item, i}
				<label for={i} class="custom-radio">
					<input
						type="radio"
						id={i}
						value={i}
						name="citation"
						checked={i === 0 ? true : false}
						bind:group={selected}
					/>
					To cite {item.insert}
					<span class="checkmark" />
				</label>
			{/each}
		</div>

		<div id="citation-box" class="text">
			<p id="citation" contentEditable="true" suppressContentEditableWarning={true}>
				{citations[selected].authors}, '{page}', <em>Marking Country</em>, Research Centre for Deep
				History, Australian National University, {location}, accessed online {date}.
			</p>

			<div>
				<button on:click={copyCitation}
					>{buttonText}
					<svg
						version="1.1"
						height="20px"
						width="16px"
						x="0px"
						y="0px"
						viewBox="0 0 111.26 122.88"
						xmlSpace="preserve"
						><g
							><path
								d="M21.78,62.8c-1.61,0-2.91-1.43-2.91-3.19c0-1.76,1.3-3.19,2.91-3.19h24.91c1.61,0,2.91,1.43,2.91,3.19 c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,62.8z M93.37,19.34h10.43c2.05,0,3.92,0.84,5.27,2.19c1.35,1.35,2.19,3.22,2.19,5.27v88.62 c0,2.06-0.84,3.92-2.19,5.27c-1.35,1.35-3.22,2.19-5.27,2.19H25.35c-2.05,0-3.92-0.84-5.27-2.19c-1.35-1.35-2.19-3.21-2.19-5.27 v-11.88H7.46c-2.05,0-3.92-0.84-5.27-2.19C0.84,100,0,98.13,0,96.08V7.46C0,5.4,0.84,3.54,2.19,2.19C3.54,0.84,5.4,0,7.46,0h78.45 c2.05,0,3.92,0.84,5.27,2.19c1.35,1.35,2.19,3.22,2.19,5.27V19.34L93.37,19.34z M24.28,103.54v11.88c0,0.29,0.12,0.56,0.32,0.75 c0.2,0.2,0.46,0.32,0.75,0.32h78.45c0.29,0,0.56-0.12,0.75-0.32c0.2-0.2,0.32-0.46,0.32-0.75V26.8c0-0.29-0.12-0.56-0.32-0.75 c-0.2-0.2-0.46-0.32-0.75-0.32H93.37v70.34c0,2.05-0.84,3.92-2.19,5.27c-1.35,1.35-3.22,2.19-5.27,2.19H24.28L24.28,103.54z M85.91,6.39H7.46c-0.29,0-0.56,0.12-0.75,0.32c-0.2,0.2-0.32,0.46-0.32,0.75v88.62c0,0.29,0.12,0.56,0.32,0.75 c0.2,0.2,0.46,0.32,0.75,0.32h78.45c0.29,0,0.56-0.12,0.75-0.32c0.2-0.2,0.32-0.46,0.32-0.75V7.46c0-0.29-0.12-0.56-0.32-0.75 C86.47,6.51,86.2,6.39,85.91,6.39L85.91,6.39z M21.78,28.64c-1.61,0-2.91-1.43-2.91-3.19c0-1.76,1.3-3.19,2.91-3.19h49.81 c1.61,0,2.91,1.43,2.91,3.19c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,28.64z M21.78,45.72c-1.61,0-2.91-1.43-2.91-3.19 c0-1.76,1.3-3.19,2.91-3.19h49.81c1.61,0,2.91,1.43,2.91,3.19c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,45.72z"
							/></g
						></svg
					></button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		max-width: var(--width-site);
		padding: var(--space-lg);
		min-height: 100vh;
		margin: var(--space-lg) auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		max-width: var(--width-content);
	}
	.options {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.2rem;
	}

	.options label {
		color: var(--clr-text);
	}

	.options label:hover {
		cursor: pointer;
	}

	.text {
		padding: 1.2rem 1.6rem;
		background-color: var(--clr-text);
		border-radius: var(--radius-corner);
	}
	.text div {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.text div button {
		color: var(--clr-terracotta);
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: var(--font-family-body);
		padding: 0.4rem 0.8rem;
		background-color: transparent;
		border: 1px solid var(--clr-terracotta);
		border-radius: var(--radius-corner);
	}
	.text div button:hover,
	.text div button:hover svg {
		cursor: pointer;
		background-color: var(--clr-terracotta);
		color: #fff;
		fill: #fff;
	}
	.text div button svg {
		margin-left: 1.2rem;
		fill: var(--clr-terracotta);
	}

	#citation-box {
		background-color: var(--clr-light-contrast);
	}

	.custom-radio {
		position: relative;
		display: block;
		padding-left: var(--space-xl);
		margin-bottom: var(--space-sm);
		cursor: pointer;
		user-select: none;
	}

	.custom-radio input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.checkmark {
		position: absolute;
		top: 4px;
		left: 0;
		height: 20px;
		width: 20px;
		background-color: var(--clr-light-contrast);
		border-radius: 50%;
	}

	.custom-radio:hover input ~ .checkmark {
		background-color: #ccc;
	}

	.custom-radio input:checked ~ .checkmark {
		background-color: var(--clr-terracotta);
	}

	/* Indicator */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	.custom-radio input:checked ~ .checkmark:after {
		display: block;
	}

	.custom-radio .checkmark:after {
		top: 6px;
		left: 6px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--clr-clay);
	}

	@media (min-width: 900px) {
		.wrapper {
			margin: var(--space-xxxl) auto;
		}
	}
</style>

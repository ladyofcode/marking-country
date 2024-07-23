<script>
	export let name = '',
		label = '',
		checked = false;

	import { onMount, tick } from 'svelte';
	import { gsap } from 'gsap';

	let container;

	async function toggleCollapsible() {
		await tick();
		if (!checked) {
			gsap.to(container, { height: 0, duration: 0.5 });
		} else {
			gsap.fromTo(container, { height: 0 }, { height: 'auto', duration: 0.5 });
		}
	}

	onMount(() => {
		toggleCollapsible(); // Initial check
	});

	$: checked, toggleCollapsible();
</script>

<div class="wrap-collapsible">
	<input bind:checked id={name} class="toggle" type="checkbox" />
	<label for={name} class="label-toggle">
		{label}
	</label>

	<div class="collapsible-container" class:max-height={checked} bind:this={container}>
		<div class="collapsible-content">
			<div class="content">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	input[type='checkbox'] {
		display: none;
	}

	.wrap-collapsible {
		margin: var(--space-xxxxl) auto;
		padding: 0 var(--space-md);
		max-width: var(--width-site);
	}

	.wrap-collapsible :global(img),
	.wrap-collapsible :global(video),
	.wrap-collapsible :global(iframe) {
		max-width: 100%;
	}

	.wrap-collapsible :global(iframe) {
		width: 100%;
		height: 480px;
	}

	.label-toggle {
		display: block;
		font-family: var(--font-serif);
		font-weight: 600;
		font-size: 1.2rem;
		text-align: center;
		padding: 1rem;
		color: var(--clr-clay);
		background: var(--clr-grey);
		cursor: pointer;
		border-radius: 7px;
		transition: all 0.25s ease-out;
	}

	.label-toggle:hover {
		color: var(--clr-clay);
	}

	.label-toggle::before {
		content: ' ';
		display: inline-block;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid currentColor;
		vertical-align: middle;
		margin-right: 0.7rem;
		transform: translateY(-2px);
		transition: transform 0.2s ease-out;
	}

	.toggle:checked + .label-toggle::before {
		transform: rotate(90deg) translateX(-3px);
	}

	.collapsible-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content {
		height: 100%;
		width: 100%;
		max-width: var(--width-content);
	}

	.collapsible-content :global(p),
	.collapsible-content :global(h2),
	.collapsible-content :global(h3),
	.collapsible-content :global(ul),
	.collapsible-content :global(li),
	.collapsible-content :global(figcaption) {
		color: var(--clr-text);
	}

	.collapsible-content :global(ul) {
		padding-left: var(--space-md);
	}

	.collapsible-container {
		overflow: hidden;
	}

	.label-toggle {
		cursor: pointer;
	}

	.toggle {
		display: none;
	}

	.toggle:checked + .label-toggle + .collapsible-container {
		max-height: 100%;
	}

	.toggle:checked + .label-toggle {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.collapsible-container .collapsible-content {
		background-color: var(--clr-light-contrast);
		border-bottom: 1px solid var(--clr-clay);
		border-bottom-left-radius: 7px;
		border-bottom-right-radius: 7px;
		padding: 2rem;
	}

	.collapsible-container.max-height {
		height: 100%;
	}

	@media (min-width: 900px) {
		.label-toggle {
			margin: auto 0px auto 0px;
		}
	}

	@media (min-width: 1024px) {
		.wrap-collapsible {
			padding: var(--space-xl) 0;
		}
	}
</style>

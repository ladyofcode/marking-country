<script>
	export let name = '';
	export let label = '';
	export let checked;
</script>

<div class="wrap-collapsible">
	<input checked={checked ? true : null} id={name} class="toggle" type="checkbox" />
	<label for={name} class="label-toggle">
		{label}
	</label>

	<div class="collapsible-container">
		<div class="collapsible-content"><slot /></div>
	</div>
</div>

<style>
	input[type='checkbox'] {
		display: none;
	}
	.wrap-collapsible {
		margin: 0 auto;
		margin-bottom: 1.2rem;
		max-width: 800px;
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
		margin: 2rem 24px auto 24px;
		font-family: 'Work Sans', Arial, Helvetica, sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
		text-align: center;
		padding: 1rem;
		color: #fff;
		background: var(--color-fg-dark);
		cursor: pointer;
		border-radius: 7px;
		transition: all 0.25s ease-out;
	}

	.label-toggle:hover {
		color: var(--color-bg-light);
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

	.collapsible-container {
		max-height: 0px;
		overflow: hidden;
		transition: max-height 0.25s ease-in-out;
		margin: auto 24px auto 24px;
	}

	.collapsible-content :global(p),
	.collapsible-content :global(h2),
	.collapsible-content :global(h3),
	.collapsible-content :global(ul),
	.collapsible-content :global(li),
	.collapsible-content :global(figcaption) {
		color: var(--color-dark-charcoal);
	}

	.toggle:checked + .label-toggle + .collapsible-container {
		max-height: 100%;
	}

	.toggle:checked + .label-toggle {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.collapsible-container .collapsible-content {
		background-color: var(--color-bg-light);
		border-bottom: 1px solid rgba(250, 224, 66, 0.45);
		border-bottom-left-radius: 7px;
		border-bottom-right-radius: 7px;
		padding: 2rem;
	}

	@media (min-width: 900px) {
		.label-toggle {
			margin: 4rem 0px auto 0px;
		}

        .collapsible-container {
            margin: 0 auto;

        }
/* 
		.collapsible-content {
		} */
	}
</style>

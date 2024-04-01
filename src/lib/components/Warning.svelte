<div class="warning-container">
    <div>
		<slot />
    </div>
</div>

<style>
    .warning-container {
        height: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 20;
    }

    .warning-container div {
        width: 100%;
        max-width: var(--width-content);
        text-align: center;
        padding: 0 var(--space-xl);
    }

    .warning-container div :global(p){
        font-family: var(--font-serif);
        /* font-weight: 700; */
        font-size: var(--font-size-heading);
    }

    @media (min-width: 900px) {

    }
</style>

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
        z-index: 50;
    }

    .warning-container div {
        width: 100%;
        max-width: 800px;
        text-align: center;
    }
</style>

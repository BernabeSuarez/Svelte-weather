<div class="container">
	<h1>Svelte Weather App</h1>
	<slot />
</div>

<style>
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		color: rgb(202, 115, 0);
		font-size: 3rem;
	}
</style>

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
		color: rgb(255, 1, 1);
		font-size: 3rem;
	}
	@media (max-width: 425px) {
		h1 {
			font-size: 1.8rem;
			margin-bottom: 25%;
		}
	}
</style>

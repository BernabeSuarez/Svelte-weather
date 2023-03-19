<div class="container">
	<h1>Svelte Weather App</h1>
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
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
		font-family: 'Inter', sans-serif;
		background: #ffffff;
		background: repeating-linear-gradient(to right, #fffefe 0%, #ff0000 50%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media (max-width: 425px) {
		h1 {
			font-size: 1.8rem;
			margin-bottom: 25%;
		}
	}
</style>

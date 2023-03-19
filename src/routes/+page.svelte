<script>
	import { weatherData } from '../services/weather';
	let value = 'Buenos aires';
	let weatherPromise = {};
	const handleInput = (e) => (value = e.target.value);

	function renderData() {
		let ciudad = value;
		weatherPromise = weatherData(ciudad);
	}
</script>

<div class="container">
	<input placeholder="Buscar ciudad" on:change={handleInput} />
	<button on:click={renderData}>Buscar</button>
	{#if value.length < 2}
		<h2>Escoja una ciudad</h2>
	{:else}
		{#await weatherPromise}
			<h2 class="loader">Leyendo Datos...</h2>
		{:then weather}
			<section>
				<div class="place">
					<h5>{weather.ciudad}</h5>
					<h6>{weather.region}, {weather.country}</h6>
				</div>
				<div class="data">
					<div class="temp">
						<h2>{weather.temperatura}°</h2>
						<h4>Sensacion Termica</h4>
						<h4>{weather.sensacion}°</h4>
					</div>

					<div class="icon">
						<h3>{weather.text}</h3>
						<img src={weather.src} alt="Icono" />
					</div>
				</div>
			</section>
		{/await}
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	button {
		margin-bottom: 1rem;
		width: 6rem;
		height: 2rem;
		border-radius: 20px;
	}
	input {
		margin-bottom: 1rem;
		width: 30%;
		height: 1rem;
		padding: 1%;
		border: 2px solid black;
		border-radius: 20px;
	}
	section {
		max-width: 600px;
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		align-items: center;
		border: 2px solid black;
		border-radius: 20px;
		background: rgba(38, 58, 236, 0.356);
		background: linear-gradient(
			180deg,
			rgba(38, 58, 236, 0.45) 0%,
			rgba(101, 114, 251, 0.45) 47%,
			rgba(0, 251, 248, 0.45) 100%
		);
	}
	.loader {
		font-size: 2rem;
		color: black;
	}
	.data {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.place {
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		background-color: rgba(0, 0, 0, 0.322);
		margin-bottom: 5%;
	}
	.temp {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		font-size: 6rem;
		color: antiquewhite;
		margin-top: 0%;
		margin-bottom: 0%;
	}

	h3 {
		font-style: oblique;
	}
	.icon {
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon img {
		width: 200px;
	}
	h4 {
		margin: 0% 5%;
	}
	h5 {
		margin: 0% 10%;
		padding: 5%;
		color: antiquewhite;
	}
	h6 {
		margin: 0 10%;
		color: antiquewhite;
	}
</style>

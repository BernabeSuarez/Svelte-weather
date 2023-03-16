<script>
	import { weatherData } from '../services/weather.js';
	const weatherPromise = weatherData();
</script>

{#await weatherPromise then weather}
	<section>
		<h1>{weather.ciudad}</h1>
		<div class="temp">
			<h4>Temperatura</h4>
			<h2>{weather.temperatura}</h2>
			<h4>Sensacion Termica</h4>
			<h2>{weather.sensacion}°</h2>
		</div>
		<img src={weather.src} alt="Icono" />
	</section>
{/await}

<style>
	section {
		max-width: 600px;
		width: 80%;
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		border-radius: 20px;
		background: rgb(38, 58, 236);
		background: linear-gradient(
			180deg,
			rgba(38, 58, 236, 1) 0%,
			rgba(101, 114, 251, 1) 47%,
			rgba(0, 251, 248, 1) 100%
		);
	}
	.temp {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	h2 {
		margin: 0 5%;
	}
	h4 {
		margin: 0 5%;
	}
</style>

<script>
	import { weatherData } from '../services/weather.js';
	const weatherPromise = weatherData();
</script>

{#await weatherPromise then weather}
	<h1>{weather.ciudad}</h1>
	<h4>Temperatura</h4>
	<h2>{weather.temperatura}</h2>
	<h4>Sensacion Termica</h4>
	<h2>{weather.sensacion}°</h2>
	<img src={weather.src} alt="Icono" />
{/await}

<script>
	import { weatherData } from '../services/weather.js';
	export let value = 'Junin';
	export let ciudad = value;
	const weatherPromise = weatherData(ciudad);
	const handleInput = (e) => (value = e.target.value);
	$: {
		ciudad = value;
	}
</script>

{#await weatherPromise then weather}
	<section>
		<div class="place">
			<h1>{weather.ciudad}</h1>
			<h6>{weather.region}, {weather.country}</h6>
		</div>

		<div class="temp">
			<h4>Temperatura</h4>
			<h2>{weather.temperatura}</h2>
			<h4>Sensacion Termica</h4>
			<h2>{weather.sensacion}°</h2>
		</div>
		<div class="icon">
			<h3>{weather.text}</h3>
			<img src={weather.src} alt="Icono" />
		</div>
	</section>
{/await}

<h1>Ingrese Su Ciudad</h1>
<div class="search">
	<input placeholder="Ingresa una ciudad" {value} on:input={handleInput} />
</div>

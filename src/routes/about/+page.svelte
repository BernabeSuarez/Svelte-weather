<script>
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b171dc23b4mshd740ca65483359ap15397djsn0b06ab55b310',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	let value = '';
	let weatherPromise = {};
	const handleInput = (e) => (value = e.target.value);

	function renderData() {
		let ciudad = value;

		async function weatherData(ciudad) {
			const response = await fetch(
				`https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudad}`,
				options
			);

			const data = await response.json();
			console.log(data);
			const { location, current } = data;
			const { condition, feelslike_c, temp_c } = current;
			const { name, region, country } = location;
			const { icon, text } = condition;
			return {
				src: icon,
				temperatura: temp_c,
				sensacion: feelslike_c,
				ciudad: name,
				region: region,
				country: country,
				text: text
			};
		}
		weatherPromise = weatherData(ciudad);
	}
</script>

<div class="container">
	<input placeholder="Ciudad" on:change={handleInput} />
	<button on:click={renderData}>Buscar</button>
	{#if value.length < 2}
		<h2>Escoja una ciudad</h2>
	{:else}
		{#await weatherPromise}
			<h2>Leyendo Datos...</h2>
		{:then weather}
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
	}
	input {
		margin-bottom: 1rem;
	}
	section {
		max-width: 600px;
		width: 80%;
		margin: auto;
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
	.place {
		display: flex;
		align-items: center;
		flex-direction: column;
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
	h3 {
		font-style: oblique;
	}
	.icon {
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h1 {
		margin-bottom: 1%;
	}
	h6 {
		margin-top: 1%;
	}
</style>

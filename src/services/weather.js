const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b171dc23b4mshd740ca65483359ap15397djsn0b06ab55b310',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};


export async function weatherData(ciudad) {
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudad}`,
        options
    );

    const data = await response.json();
    console.log(data);
    const { location, current } = data;
    const { condition, feelslike_c, temp_c, humidity } = current;
    const { name, region, country } = location;
    const { icon, text } = condition;
    return {
        src: icon,
        temperatura: temp_c,
        sensacion: feelslike_c,
        humedad: humidity,
        ciudad: name,
        region: region,
        country: country,
        text: text
    };
}
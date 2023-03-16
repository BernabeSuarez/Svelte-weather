const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b171dc23b4mshd740ca65483359ap15397djsn0b06ab55b310',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function weatherData() {
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Vedia%2C%20buenos%20aires', options)

    const data = await response.json()
    console.log(data)
    const { location, current } = data
    const { condition, feelslike_c, temp_c
    } = current
    const { name } = location
    const { icon } = condition
    return {
        src: icon,
        temperatura: temp_c,
        sensacion: feelslike_c,
        ciudad: name
    }
}
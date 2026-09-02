// EJERCICIO DONDE SE PRACTICARÁ ASYNC/AWAIT MEDIANTE UNA API GRATUITA DE CLIMA. LA FUNCIÓN DEBE RECIBIR UNA CIUDAD Y ENTREGAR LA TEMPERATURA DE LA MISMA.

async function climaActual(ciudad) {
    if (typeof ciudad !== "string") return "Ingrese una ciudad válida.";
    try {
        const urlGeo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`);

        const data = await urlGeo.json()

        const { latitude, longitude } = data.results[0];

        const url = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&models=best_match&current=temperature_2m&forecast_days=1`);

        const urlData = await url.json();

        const temp = urlData.current.temperature_2m;
        console.log(`La temperatura actual de ${ciudad} es de ${temp}°C`)
        //return `La temperatura actual de ${ciudad} es de ${temp}°C`
    } catch {

        throw console.error("Algo va mal");

    }




}

console.log(climaActual("temuco"));
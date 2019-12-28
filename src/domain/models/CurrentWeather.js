export default function(data) {
    return {
        'pressure': data.main.pressure,
        'temperature': data.main.temp,
        'temperatureMin': data.main.temp_min,
        'temperatureMax': data.main.temp_max,
        'state': data.weather[0].main,
        'stateDescription': data.weather[0].description,
        'windSpeed': data.wind.speed,
        'windAngle': data.wind.deg
    };
}

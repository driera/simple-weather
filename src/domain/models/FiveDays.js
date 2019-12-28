export default function(data) {
    return data.list.map(element => ({
        'pressure': element.main.pressure,
        'temperature': element.main.temp,
        'temperatureMin': element.main.temp_min,
        'temperatureMax': element.main.temp_max,
        'state': element.weather[0].main,
        'stateDescription': element.weather[0].description,
        'windSpeed': element.wind.speed,
        'windAngle': element.wind.deg,
        'time': element.dt_txt,
        'id': element.dt
    }));
}

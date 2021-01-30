import Client from '@/repositories/Clients/axiosClient';
import fallbackWeather from '@/data/valenciaCurrentWeather.json';
import Weather from '@/domain/models/CurrentWeather';
const API_KEY = process.env.VUE_APP_WEATHER_API;
const PATH = `/weather?id={id}&units=metric&lang=es&APPID=${API_KEY}`;

/* OpenWeather documentation
 * https://openweathermap.org/current
 */

export default {
    get(id: string) {
        const URL = PATH.replace('{id}', id);

        return Client.get(URL)
            .then(response => Weather(response.data))
            .catch(error => {
                console.log(`${error}. Loading fallback`);
                return Weather(fallbackWeather);
            });
    }
};

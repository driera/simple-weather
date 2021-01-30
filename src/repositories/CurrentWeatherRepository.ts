import Client from '@/repositories/Clients/axiosClient';
import fallbackWeather from '@/data/valenciaCurrentWeather.json';
import Weather from '@/domain/models/CurrentWeather';
const api_key = process.env.VUE_APP_WEATHER_API;
const PATH = `/weather?id={id}&units=metric&lang=es&APPID=${api_key}`;

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

import Client from '@/repositories/Clients/axiosClient';
import fallbackWeather from '@/data/valenciaFiveDays.json';
import Weather from '@/domain/models/FiveDays';
const api_key = process.env.VUE_APP_WEATHER_API;
const PATH = `/forecast?id={id}&units=metric&lang=es&cnt={count}&APPID=${api_key}`;

/* OpenWeather documentation
 * https://openweathermap.org/forecast5
 */

export default {
    get(id: string, count: string) {
        const URL = PATH
            .replace('{id}', id)
            .replace('{count}', count);

        return Client.get(URL)
            .then(response => Weather(response.data))
            .catch(error => {
                console.log(`${error}. Loading fallback`);
                return Weather(fallbackWeather);
            });
    }
}

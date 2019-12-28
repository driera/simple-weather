import Client from '@/repositories/Clients/axiosClient';
import fallbackWeather from '@/data/valenciaFiveDays.json';
const api_key = process.env.VUE_APP_WEATHER_API;
const PATH = `/forecast?id={id}&units=metric&lang=es&cnt={count}&APPID=${api_key}`;

/* OpenWeather documentation
 * https://openweathermap.org/forecast5
 */

export default {
    get(id, count) {
        const URL = PATH
            .replace('{id}', id)
            .replace('{count}', count);

        return Client.get(URL)
            .then(response => response.data)
            .catch(error => {
                console.log(`${error}. Loading fallback`);
                return fallbackWeather;
            });
    }
};

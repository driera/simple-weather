import Client from './Clients/axiosClient';
const LANG = 'es';

/* OpenWeather documentation
 * https://openweathermap.org/current
 */

export default {
    get(id, api_key) {
        return Client.get(`/weather?id=${id}&units=metric&lang=${LANG}&APPID=${api_key}`);
    }
};

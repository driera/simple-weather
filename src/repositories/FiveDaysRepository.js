import Client from './Clients/axiosClient';
const lang = 'es';

/* OpenWeather documentation
 * https://openweathermap.org/forecast5
 */

export default {
    get(id, count, api_key) {
        return Client.get(`/forecast?id=${id}&cnt=${count}&units=metric&lang=${lang}&APPID=${api_key}`);
    }
};

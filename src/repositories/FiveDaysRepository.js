import Client from './Clients/axiosClient';
const LANG = 'es';

/* OpenWeather documentation
 * https://openweathermap.org/forecast5
 */

export default {
    get(id, count, api_key) {
        return Client.get(`/forecast?id=${id}&lang=${LANG}&cnt=${count}&units=metric&APPID=${api_key}`);
    }
};

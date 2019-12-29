import moment from 'moment';
import getDirection from '@/services/getDirection';

export default function(data) {
    return {
        'pressure': data.main.pressure,
        'temperature': data.main.temp,
        'temperatureMin': data.main.temp_min,
        'temperatureMax': data.main.temp_max,
        'humidity': data.main.humidity,
        'state': data.weather[0].main,
        'stateDescription': data.weather[0].description,
        'windSpeed': data.wind.speed,
        'windAngle': getDirection(data.wind.deg),
        'clouds': data.clouds.all,
        'hour': `${moment().format('HH:mm')}h`,
        'date': `${moment().format(`dddd, DD MMM 'YY`)}`,
        'sunrise': `${moment.unix(data.sys.sunrise).format('HH:mm')}h`,
        'sunset': `${moment.unix(data.sys.sunset).format('HH:mm')}h`
    };
}

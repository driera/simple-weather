import moment from 'moment';
import getDirection from '@/services/getDirection';
import getIcon from '@/services/getIcon';

export type CurrentWeatherData = {
    city: string;
    clouds: number;
    date: string;
    hour: string;
    humidity: number;
    pressure: number;
    state: string;
    stateDescription: string;
    stateIcon: string;
    sunrise: string;
    sunset: string;
    temperature: number;
    temperatureMax: number;
    temperatureMin: number;
    windAngle: string;
    windSpeed: number;
}

moment.locale('es');

const CurrentWeather = (data: any): CurrentWeatherData => {
    return {
        pressure: data.main.pressure,
        temperature: data.main.temp,
        temperatureMin: data.main.temp_min,
        temperatureMax: data.main.temp_max,
        humidity: data.main.humidity,
        state: data.weather[0].main,
        stateDescription: data.weather[0].description,
        stateIcon: `icon-${getIcon(data.weather[0].icon)}`,
        windSpeed: data.wind.speed,
        windAngle: getDirection(data.wind.deg),
        clouds: data.clouds.all,
        hour: `${moment().format('HH:mm')}h`,
        date: `${moment().format(`dddd, DD MMM 'YY`)}`,
        sunrise: `${moment.unix(data.sys.sunrise).format('HH:mm')}h`,
        sunset: `${moment.unix(data.sys.sunset).format('HH:mm')}h`,
        city: data.name
    };
}

export default CurrentWeather;

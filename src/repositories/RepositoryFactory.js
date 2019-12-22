import FiveDaysRepository from './FiveDaysRepository';
import CurrentWeatherRepository from './CurrentWeatherRepository';

const repositories = {
    'fiveDays': FiveDaysRepository,
    'currentWeather': CurrentWeatherRepository
};

export default {
    get: name => repositories[name]
};

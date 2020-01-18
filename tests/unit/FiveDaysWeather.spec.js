import {shallowMount} from '@vue/test-utils';
import FiveDaysWeather from '@/components/FiveDaysWeather/FiveDaysWeather';
import fiveDaysFixture from './fixtures/fiveDaysFixture';

describe('FiveDaysWeather', () => {
    let props;
    let weatherData = {
        '2020-01-18': [
            {
                'pressure': 1028,
                'temperature': 14.94,
                'temperatureMin': 14.94,
                'temperatureMax': 15.96,
                'state': 'Clouds',
                'stateDescription': 'nubes',
                'windSpeed': 6.73,
                'windAngle': 264,
                'time': '12:00:00',
                'id': 1579348800
            }
        ]
    };

    beforeEach(() => {
        props = {
            weatherData
        };
    });

    const build = () => {
        const wrapper = shallowMount(FiveDaysWeather, {
            propsData: props
        });

        return {
            wrapper
        };
    };

    it('is a Vue instance', () => {
        const {wrapper} = build();

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('renders the component', () => {
        const {wrapper} = build();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders right', () => {
        const {wrapper} = build();
        expect(wrapper.contains('span')).toBe(true);
        expect(wrapper.find('span').text()).toBe(weatherData['2020-01-18'][0].time);
    });
});

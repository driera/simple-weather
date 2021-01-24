import {shallowMount} from '@vue/test-utils';
import FiveDaysWeather from '../FiveDaysWeather';

describe('FiveDaysWeather', () => {
    let props;
    let weatherData = {
        '2021-01-18': [
            {
                pressure: 1028,
                temperature: 14.94,
                temperatureMin: 14.94,
                temperatureMax: 15.96,
                state: 'Clouds',
                stateDescription: 'nubes',
                windSpeed: 6.73,
                windAngle: 264,
                time: '12:00:00',
                id: 1579348800
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

    it('renders the component', () => {
        const {wrapper} = build();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correct time', () => {
        const time = '12:00:00';

        const {wrapper} = build();

        expect(wrapper.find('span').text()).toBe(time);
    });

    it('renders correct state', () => {
        const state = 'Clouds';

        const {wrapper} = build();

        expect(
            wrapper
                .findAll('span')
                .at(1)
                .text()
        ).toBe(state);
    });
});

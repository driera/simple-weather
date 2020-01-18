import {shallowMount} from '@vue/test-utils';
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import currentFixture from './fixtures/currentFixture';

describe('CurrentWeather', () => {
    let props;
    let weatherData = currentFixture;

    beforeEach(() => {
        props = {
            weatherData
        };
    });

    const build = () => {
        const wrapper = shallowMount(CurrentWeather, {
            propsData: props,
            stubs: {
                'icon-cloud': true,
                'icon-rain': true,
                'icon-wind': true,
                'icon-raindrop': true,
                'icon-pressure': true,
                'icon-sunrise': true,
                'icon-sunset': true
            }
        });

        return {
            wrapper
        };

    };

    it('is a Vue instance', () => {
        let {wrapper} = build();
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('renders the component', () => {
        let {wrapper} = build();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders right', () => {
        let {wrapper} = build();

        expect(wrapper.find('.current-main--location').text()).toBe(currentFixture.city);
        expect(wrapper.find('.current-main--time').text()).toBe(`${currentFixture.hour} — ${currentFixture.date}`);
        expect(wrapper.find('.current-main--temp-text').text()).toBe(`${Math.round(currentFixture.temperature)}`);
        expect(wrapper.find('.current-main--conditions-text').text()).toBe(currentFixture.stateDescription);
        expect(wrapper.find('.current-details--sub').text()).toBe(currentFixture.windAngle);
    });

});

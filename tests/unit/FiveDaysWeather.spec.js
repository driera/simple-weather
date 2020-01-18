import {shallowMount} from '@vue/test-utils';
import FiveDaysWeather from '@/components/FiveDaysWeather/FiveDaysWeather';
import fiveDaysFixture from './fixtures/fiveDaysFixture';
import flushPromises from 'flush-promises';

describe('FiveDaysWeather', () => {
    const build = () => {
        const wrapper = shallowMount(FiveDaysWeather);

        wrapper.setData({info: fiveDaysFixture});

        return {
            wrapper
        };
    };

    it('is a Vue instance', () => {
        const {wrapper} = build();

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('renders right', async () => {
        const {wrapper} = build();
        await flushPromises();
        expect(wrapper).toMatchSnapshot();
    });
});

import { shallowMount } from "@vue/test-utils";
import CurrentWeather from "../CurrentWeather";

describe("CurrentWeather", () => {
  let props;
  let weatherData = {
    pressure: 1029,
    temperature: 13.79,
    temperatureMin: 12,
    temperatureMax: 16.11,
    humidity: 62,
    state: "Rain",
    stateDescription: "Lluvia suave",
    stateIcon: "icon-rain",
    windSpeed: 2.1,
    windAngle: "O",
    clouds: 40,
    hour: "13:06h",
    date: "sábado, 18 ene. '20",
    sunrise: "08:19h",
    sunset: "18:04h",
    city: "Barcelona",
  };

  beforeEach(() => {
    props = {
      weatherData,
    };
  });

  const build = () => {
    const wrapper = shallowMount(CurrentWeather, {
      propsData: props,
      stubs: {
        "icon-cloud": true,
        "icon-rain": true,
        "icon-wind": true,
        "icon-raindrop": true,
        "icon-pressure": true,
        "icon-sunrise": true,
        "icon-sunset": true,
      },
    });

    return {
      wrapper,
    };
  };

  it("renders the component", () => {
    let { wrapper } = build();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders right", () => {
    let { wrapper } = build();

    expect(wrapper.find(".current-main--location").text()).toBe(
      weatherData.city
    );
    expect(wrapper.find(".current-main--time").text()).toBe(
      `${weatherData.hour} — ${weatherData.date}`
    );
    expect(wrapper.find(".current-main--temp-text").text()).toBe(
      `${Math.round(weatherData.temperature)}`
    );
    expect(wrapper.find(".current-main--conditions-text").text()).toBe(
      weatherData.stateDescription
    );
    expect(wrapper.find(".current-details--sub").text()).toBe(
      weatherData.windAngle
    );
  });
});

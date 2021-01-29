import { mount } from "@vue/test-utils";
import Current from "./Current";

describe("Current", () => {
  it("renders the component", () => {
    let wrapper = build();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders right", () => {
    let city = "Barcelona";
    let time = "13:06h — sábado, 18 ene. '20";
    let temperature = "14 º";
    let description = "Lluvia suave";
    let windAngle = "O";

    let wrapper = build();

    expect(wrapper.find(".location").text()).toBe(city);
    expect(wrapper.find(".time").text()).toBe(time);
    expect(wrapper.find(".temp").text()).toBe(temperature);
    expect(wrapper.find(".conditions").text()).toBe(description);
    expect(wrapper.find(".sub").text()).toBe(windAngle);
  });

  let props = {
    weatherData: {
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
    },
  };

  const build = (newProps) => {
    return mount(Current, {
      propsData: newProps || props,
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
  };
});

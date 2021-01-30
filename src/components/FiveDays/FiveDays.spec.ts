import { mount } from "@vue/test-utils";
import FiveDays from "./FiveDays.vue";

describe("FiveDays", () => {
  const props = {
    weatherData: {
      "2021-01-18": [
        {
          pressure: 1028,
          temperature: 14.94,
          temperatureMin: 14.94,
          temperatureMax: 15.96,
          state: "Clouds",
          stateDescription: "nubes",
          windSpeed: 6.73,
          windAngle: 264,
          time: "12:00:00",
          id: 1579348800,
        },
      ],
    },
  };

  const renderComponent = (newProps?: {}) => {
    return mount(FiveDays, {
      propsData: newProps || props,
    });
  };
  
  it("renders the component", () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correct info", () => {
    const time = "12:00:00";
    const state = "nubes";

    const wrapper = renderComponent();

    expect(
      wrapper
        .findAll(".weather-item span")
        .at(0)
        .text()
    ).toBe(time);
    expect(
      wrapper
        .findAll(".weather-item span")
        .at(1)
        .text()
    ).toBe(state);
  });
});

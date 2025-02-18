import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter } from "react-router";
import { fetchMock } from "./repositories/__test_helpers__/fetch-mock";
import {
  currentWeatherDataSample,
  fiveDaysForecastDataSample
} from "./repositories/__test_helpers__/data-samples";

const navigationGeolocationImplementation = navigator.geolocation;

describe("App Navigation", () => {
  beforeEach(() => {
    fetchMock({ json: currentWeatherDataSample });

    Object.defineProperty(navigator, "geolocation", {
      writable: true,
      value: {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
        clearWatch: jest.fn()
      }
    });
  });

  afterEach(() => {
    Object.defineProperty(navigator, "geolocation", {
      value: navigationGeolocationImplementation
    });
  });

  it("Displays current weather by default", async () => {
    fetchMock({ json: currentWeatherDataSample });

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const currentWeather = await screen.findByText(/Current Weather/i);
    expect(currentWeather).toBeInTheDocument();
  });

  it("navigates to five days page", async () => {
    fetchMock({ json: fiveDaysForecastDataSample });

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByRole("link", { name: /Five Days/i }));

    const fiveDays = await screen.findByText(/Five Days Forecast/i);
    expect(fiveDays).toBeInTheDocument();
  });
});

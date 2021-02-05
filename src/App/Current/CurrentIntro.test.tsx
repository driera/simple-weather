import React from "react";
import { render, screen } from "@testing-library/react";
import { CurrentIntro, CurrentIntroType } from "./CurrentIntro";

describe("CurrentIntro", () => {
  it("shows correct location", () => {
    const location = "Barcelona";

    render(currentIntroComponent({ location }));

    expect(screen.getByText(/barcelona/i)).toBeInTheDocument();
  });

  it("shows correct time", () => {
    const time = new Date(2021, 1, 5, 20, 45);

    render(currentIntroComponent({ time }));

    expect(screen.getByText(/20:45 – 05\/02\/2021/i)).toBeInTheDocument();
  });

  it("shows correct time", () => {
    const details = {
      temperature: 10,
      conditions: "Very cold"
    };

    render(currentIntroComponent({ details }));

    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/very cold/i)).toBeInTheDocument();
  });

  const currentIntroComponent = ({
    location = "Valencia",
    time = new Date(2021, 0, 1, 6, 0),
    details = {
      temperature: 20,
      conditions: "nice weather"
    }
  }: Partial<CurrentIntroType>): JSX.Element => {
    return <CurrentIntro location={location} time={time} details={details} />;
  };
});

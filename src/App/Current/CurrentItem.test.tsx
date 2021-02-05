import React from "react";
import { render, screen } from "@testing-library/react";
import { CurrentItem, CurrentItemType } from "./CurrentItem";

describe("CurrentItem", () => {
  it("shows correct title and content", () => {
    const value = "Nubes";
    const content = "75";

    render(currentItemComponent({ value, content }));

    expect(screen.getByText(/nubes/i)).toBeInTheDocument();
    expect(screen.getByText(/75/i)).toBeInTheDocument();
  });

  it("shows value direction in letters", () => {
    const directionAngle = 180;

    render(currentItemComponent({ sub: directionAngle }));

    expect(screen.getByTestId("direction").innerHTML).toBe("S");
  });

  const currentItemComponent = ({
    value = "viento",
    sub = 100,
    content = "20",
    icon = "wind"
  }: Partial<CurrentItemType>): JSX.Element => {
    return (
      <CurrentItem value={value} sub={sub} content={content} icon={icon} />
    );
  };
});

import { render, screen, waitFor } from "@testing-library/react";
import React, { ReactNode } from "react";
import { CurrentItem, CurrentItemType } from "./CurrentItem";

describe("CurrentItem", () => {
  it("shows correct title and content", () => {
    const content = "75";
    const value = "Nubes";

    render(currentItemComponent({ value, content }));

    waitFor(() => expect(screen.getByText(/nubes/i)).toBeInTheDocument());
    expect(screen.getByText(/75/i)).toBeInTheDocument();
  });

  const currentItemComponent = ({
    value = "viento",
    sub = "NO",
    content = "20",
    icon = "wind"
  }: Partial<CurrentItemType>): ReactNode => (
    <CurrentItem content={content} icon={icon} sub={sub} value={value} />
  );
});

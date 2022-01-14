import { render, screen } from "@testing-library/react";

import CountryList from "./CountryList";

describe("when passed a countries array", () => {
  it("should display the countries and capital cities", () => {
    const mockCountries = [
      { name: "United Kingdom", capital: "London" },
      { name: "France", capital: "Paris" },
    ];
    render(<CountryList countries={mockCountries} />);

    expect(screen.getByText("United Kingdom")).toBeTruthy();
    expect(screen.getByText("London")).toBeTruthy();
    expect(screen.getByText("France")).toBeTruthy();
    expect(screen.getByText("Paris")).toBeTruthy();
  });
});

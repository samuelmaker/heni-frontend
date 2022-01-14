import { render, screen, fireEvent } from "@testing-library/react";

import Pagination from "./Pagination";

describe("when a page is pressed", () => {
  it("should call the `onChange` callback with correct page number", () => {
    const onChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={10}
        itemsPerPage={2}
        currentPage={1}
        onChange={onChangeMock}
      />
    );

    fireEvent.click(screen.getByLabelText("Go to page 2"));
    expect(onChangeMock).toHaveBeenCalledWith(2);
  });
});

describe("when passed total items and items per page", () => {
  it("should display the correct number of pages", () => {
    const onChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={10}
        itemsPerPage={2}
        currentPage={1}
        onChange={onChangeMock}
      />
    );

    // expecting 5 pages total
    expect(screen.queryByLabelText("Go to page 5")).toBeTruthy();
    expect(screen.queryByLabelText("Go to page 6")).toBeFalsy();
  });

  it("should display the correct number of pages when given 1 item", () => {
    const onChangeMock = jest.fn();
    render(
      <Pagination
        totalItems={1}
        itemsPerPage={5}
        currentPage={1}
        onChange={onChangeMock}
      />
    );

    // expecting 1 page total
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByRole("button", { current: true })).toHaveTextContent(
      "1"
    );
    expect(screen.queryByLabelText("Go to page 2")).toBeFalsy();
  });
});

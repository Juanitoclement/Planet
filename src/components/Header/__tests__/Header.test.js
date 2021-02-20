import { fireEvent, render } from "@testing-library/react";
import Header from "../../Header";

describe("Header", () => {
  test("Should Render Header", () => {
    const { container, getByPlaceholderText } = render(<Header />);

    const inputSearch = getByPlaceholderText("Search");

    fireEvent.click(inputSearch);

    fireEvent.change(inputSearch, {
      target: { value: "planet" },
    });

    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import HideOnScroll from "../../HideOnScroll";

describe("HideOnScroll", () => {
  test("Should Render HideOnScroll", () => {
    const { container } = render(
      <HideOnScroll window={jest.fn()}>
        <div>Hide On Scroll</div>
      </HideOnScroll>
    );

    expect(container).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "./store/configureStore";

const store = configureStore();

test("renders learn react link", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container).toBeTruthy();
});

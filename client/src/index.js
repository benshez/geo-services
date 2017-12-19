import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store, configureFakeBackend } from "./common/_helpers";
import { App } from "./common/_components/AppRender";

// setup fake backend
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);

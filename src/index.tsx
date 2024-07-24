import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import "@splidejs/react-splide/css";
import GlobalMainProvider from "./contexts/globalMainContext";
import GlobalGenerateProvider from "./contexts/generateContext";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  document.getElementById("root")
);

root.render(
  <Provider store={store}>
    <GlobalMainProvider>
      <GlobalGenerateProvider>
        <App />
      </GlobalGenerateProvider>
    </GlobalMainProvider>
  </Provider>
);

reportWebVitals();

import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import "./index.css";
import store from "./Redux/Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
// axios.defaults.baseURL = "https://api.spotify.com/v1";
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NewsProvider } from "./context/newsContext";
import { initialState, news_reducer } from "./reducer/newsReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NewsProvider initialState={initialState} reducer={news_reducer}>
      <App />
    </NewsProvider>
  </React.StrictMode>
);

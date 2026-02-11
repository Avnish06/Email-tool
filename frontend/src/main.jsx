import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CampaignProvider } from "./Context/CampaignContext";
import { UserContextProvider } from "./Context/userContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CampaignProvider>
          <App />
        </CampaignProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

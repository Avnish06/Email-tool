import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails.jsx";
import Campaign from "./pages/Campaign";
import CampaignDashboard from "./pages/CampaignDashboard";
import CampaignName from "./pages/CampaignName";
import ImportContacts from "./pages/ImportContacts";
import SelectType from "./pages/SelectType";
import WriteMail from "./pages/WriteMail";
import Editor from "./pages/Editor";
import Preview from "./pages/Preview";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Template from "./pages/Template.jsx";
import PromoDiscount from "./Templates/PromoDiscount.jsx";


/* Layout */
import Header from "./pages/Header";
import Footer from "./pages/Footer";

/* Context */
import { CampaignProvider } from "./Context/CampaignContext";

/* Toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* API URL */
export const AppUrl = "http://localhost:8001/api/v1";

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTEXT PROVIDER */}
      <CampaignProvider>

        {/* TOAST */}
        <ToastContainer position="top-right" autoClose={3000} />

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/template" element={<PromoDiscount />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/campaign" element={<Campaign />} />

          <Route path="/campaigns" element={<CampaignDashboard />} />

          <Route path="/campaign/new" element={<CampaignName />} />

          <Route path="/campaign/contacts" element={<ImportContacts />} />

          <Route path="/campaign/type" element={<SelectType />} />

          <Route path="/campaign/write" element={<WriteMail />} />

          <Route path="/campaign/editor" element={<Editor />} />

          <Route path="/campaign/preview" element={<Preview />} />

          <Route path="/userdetails" element={<UserDetails />} />
          {/* 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-32 text-2xl font-bold">
                404 - Page Not Found
              </h1>
            }
          />

        </Routes>

      </CampaignProvider>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;

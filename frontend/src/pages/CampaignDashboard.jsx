import { useNavigate } from "react-router-dom";
import React from "react";


const CampaignDashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="pt-28 min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">

      <h1 className="text-3xl font-bold mb-4">
        Campaign Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Create and manage your email campaigns easily.
      </p>

      {/* Create Campaign */}
      <button
        onClick={() => navigate("/campaign/new")}
        className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
      >
        + Create Campaign
      </button>

      {/* Track Campaign */}
      <button
        onClick={() => navigate("/campaigns")}
        className="border border-teal-500 text-teal-500 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
      >
        📊 Track Campaigns
      </button>

    </div>
  );
};

export default CampaignDashboard;

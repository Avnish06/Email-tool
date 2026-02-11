import React from "react";
import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import CampaignLayout from "../layouts/CampaignLayout.jsx";
import { useState } from "react";

const CampaignName = () => {
  const { campaign, setCampaign, setSteps } = useCampaign();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const next = () => {
    if (!campaign.name.trim()) {
      setError("Please enter a campaign name");
      return;
    }
    setError("");
    // ✅ STEP 3: Mark this step complete
    setSteps((prev) => ({
      ...prev,
      name: true,
    }));
    // ✅ Go to next step
    navigate("/campaign/contacts");
  };
  return (
    <CampaignLayout>

      <div className="pt-28 min-h-screen flex items-center justify-center bg-gray-50">

        <div className="bg-white p-8 rounded-xl shadow max-w-md w-full space-y-5">

          <h2 className="text-2xl font-bold text-center">
            Create New Campaign
          </h2>

          <p className="text-sm text-gray-500 text-center">
            Give your campaign a meaningful name
          </p>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter Campaign Name"
            value={campaign.name}
            onChange={(e) =>
              setCampaign({
                ...campaign,
                name: e.target.value,
              })
            }
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            onClick={next}
            className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition"
          >
            Next →
          </button>

        </div>

      </div>

    </CampaignLayout>
  );
};
export default CampaignName;


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
      <div className="pt-28 min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
        
        <div className="bg-card border border-white/5 p-10 rounded-2xl shadow-2xl max-w-md w-full space-y-6 relative z-10 backdrop-blur-sm">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">
              Create New Campaign
            </h2>
            <p className="text-sm text-muted-foreground">
              Give your campaign a meaningful name
            </p>
          </div>

          <div className="space-y-4">
            {/* Input */}
            <input
              type="text"
              placeholder="e.g. Summer Newsletter 2024"
              value={campaign.name}
              onChange={(e) =>
                setCampaign({
                  ...campaign,
                  name: e.target.value,
                })
              }
              className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-all shadow-inner"
            />

            {/* Error */}
            {error && (
              <p className="text-destructive text-xs font-medium pl-1 animate-pulse">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              onClick={next}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Continue
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};
export default CampaignName;

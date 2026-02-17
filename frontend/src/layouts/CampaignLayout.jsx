import CampaignSteps from "../components/CampaignSteps";
import React from "react";
const CampaignLayout = ({ children }) => {
  return (
    <div className="pt-24 flex min-h-screen bg-background text-foreground">

      {/* LEFT SIDEBAR */}
      <CampaignSteps />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {children}
      </div>

    </div>
  );
};

export default CampaignLayout;

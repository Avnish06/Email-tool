import { useNavigate } from "react-router-dom";
import React from "react";
import { Zap, Inbox, Plus, BarChart2 } from "lucide-react";

const CampaignDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-root min-h-screen flex flex-col pt-16 relative overflow-hidden bg-background text-foreground list-none">
      {/* Background Effects */}
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      
      <main className="main-area flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="center-panel-wrapper w-full max-w-[640px] flex flex-col items-center text-center gap-6">
          <div className="panel-card bg-card border border-border rounded-2xl p-10 w-full max-w-[520px] shadow-2xl backdrop-blur-sm flex flex-col items-center gap-6">
            <div className="panel-icon w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Inbox size={24} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Campaign Dashboard
              </h2>
              <p className="text-sm text-muted-foreground max-w-[400px]">
                Create and manage your email campaigns easily. Get started by
                creating a new campaign or tracking existing ones.
              </p>
            </div>

            <div className="action-row flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/campaign/new")}
                className="btn-primary flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                <Plus size={18} />
                Create Campaign
              </button>
              <button
                onClick={() => navigate("/campaigns")}
                className="btn-secondary-outline border border-border px-8 py-3 rounded-full text-foreground font-semibold hover:bg-muted transition-all"
              >
                <BarChart2 size={18} className="mr-2 inline" />
                Track Campaigns
              </button>
            </div>

            <p className="text-xs text-muted-foreground/60">
              You'll see your performance metrics and recent activity here once
              you start sending campaigns.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampaignDashboard;

import React from "react";
import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import CampaignLayout from "../layouts/CampaignLayout.jsx";
import { useState } from "react";
import { ArrowRight, Sparkles, PenTool, Zap } from "lucide-react";

/**
 * THEME-CONSISTENT EXTREME REDESIGN: CampaignName
 * Focus: Adaptive glassmorphism, dynamic tokens, and visual stability across Light/Dark modes.
 */
const CampaignName = () => {
  const { campaign, setCampaign, setSteps } = useCampaign();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const next = () => {
    if (!campaign.name.trim()) {
      setError("Please enter a campaign name");
      return;
    }
    setError("");
    setSteps((prev) => ({
      ...prev,
      name: true,
    }));
    navigate("/campaign/contacts");
  };

  return (
    <CampaignLayout>
      <div className="page-root min-h-full flex items-center justify-center relative overflow-hidden bg-background text-foreground font-sans w-full p-4 md:p-8 transition-colors duration-500">
        
        {/* EXTREME BACKGROUND: Adaptive Volumetric Light Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Primary Glow - Adaptive Opacity */}
          <div className="absolute top-[-10%] left-[20%] w-[60%] h-[70%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          {/* Subtle Accent for Depth */}
          <div className="absolute bottom-[-20%] right-[10%] w-[50%] h-[60%] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full" />
          
          {/* Theme-Aware Grid */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* FLOATING GLASS CARD: Theme-Adaptive */}
        <div className="relative z-10 w-full max-w-[600px] group">
          <div className={`relative bg-background/40 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-[40px] p-12 md:p-20 flex flex-col items-center text-center gap-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-[32px] transition-all duration-500 ${isFocused ? 'border-primary/40 shadow-[0_0_80px_-20px_rgba(6,200,180,0.2)]' : ''}`}>
            
            {/* Pulsing Border Glow */}
            <div className="absolute inset-0 rounded-[40px] border border-primary/20 animate-pulse pointer-events-none opacity-50" />

            {/* Top Shine Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-white/20" />

            {/* HEADER AREA: Theme-Aware Typography */}
            <div className="space-y-6">
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-[28px] bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-transparent border border-primary/20 shadow-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 animate-pulse" />
                <Sparkles size={36} className="text-primary relative z-10 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Campaign Identity
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-[400px] mx-auto font-medium">
                  Craft a name that stands out in every inbox.
                </p>
              </div>
            </div>

            {/* PREMIUM FORM AREA: Theme-Aware Inputs */}
            <div className="w-full space-y-8">
              <div className="relative group/input">
                <div className={`absolute inset-0 bg-primary/5 blur-2xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className={`relative flex items-center bg-background/80 dark:bg-[#0a0a0a]/80 border-b-2 transition-all duration-500 overflow-hidden ${isFocused ? 'border-primary' : 'border-border'}`}>
                  <PenTool className={`ml-4 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-muted-foreground/30'}`} size={24} />
                  <input
                    type="text"
                    placeholder="Campaign Name..."
                    value={campaign.name}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                    className="w-full bg-transparent p-6 text-2xl font-bold text-foreground placeholder:text-muted-foreground/20 focus:outline-none"
                  />
                  {campaign.name && (
                    <Zap className="mr-6 text-primary animate-pulse" size={20} />
                  )}
                </div>

                {error && (
                  <p className="absolute -bottom-7 left-0 text-destructive text-sm font-bold flex items-center gap-2 animate-in slide-in-from-left-2">
                    <span className="w-1 h-1 rounded-full bg-destructive animate-ping" />
                    {error}
                  </p>
                )}
              </div>

              {/* ACTION BUTTON: Unified Premium Feel */}
              <button
                onClick={next}
                className="relative w-full h-16 group/btn mt-4 active:scale-[0.98] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary rounded-2xl shadow-[0_8px_20px_-4px_rgba(6,200,180,0.5)] group-hover/btn:shadow-[0_12px_32px_-4px_rgba(6,200,180,0.6)] transition-all" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative flex items-center justify-center gap-3 text-xl font-black text-primary-foreground uppercase tracking-wider">
                  Next Step
                  <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Subtle Footer Note: High Contrast for Light/Dark */}
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/30 mt-4">
              Step 01 of 06 — Global Standards
            </p>
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

export default CampaignName;

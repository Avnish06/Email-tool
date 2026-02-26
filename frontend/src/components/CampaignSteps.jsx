import { useLocation, useNavigate } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import Logo from "../components/Logo";

/**
 * THEME-CONSISTENT EXTREME REDESIGN: CampaignSteps Sidebar
 * Focus: Transparency, adaptive glow indicators, and unified theme hierarchy.
 */
const steps = [
  { label: "Campaign Name", path: "/campaign/new" },
  { label: "Import Contacts", path: "/campaign/contacts" },
  { label: "Select Type", path: "/campaign/type" },
  { label: "Write Mail", path: "/campaign/write" },
  { label: "Editor", path: "/campaign/editor" },
  { label: "Preview & Send", path: "/campaign/preview" },
];

const CampaignSteps = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-80 bg-background/40 dark:bg-black/40 backdrop-blur-3xl border-r border-border/50 min-h-screen px-8 py-12 relative overflow-hidden flex flex-col gap-12 transition-colors duration-500">
      
      {/* Sidebar adaptive background glow */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-primary/5 dark:bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex items-center gap-3">
        <Logo className="h-6" showText={false} />
        <h2 className="text-xl font-black uppercase tracking-[0.1em] text-foreground/90">
          Campaign <span className="text-primary">Flow</span>
        </h2>
      </div>

      <nav className="relative z-10 space-y-4">
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;
          
          return (
            <div
              key={index}
              onClick={() => navigate(step.path)}
              className={`group relative cursor-pointer flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? "bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
                  : "hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent"
              }`}
            >
              {/* Active Link Glow Pill */}
              {isActive && (
                <div className="absolute left-[-32px] w-1.5 h-10 bg-primary rounded-r-full shadow-[0_0_20px_var(--primary)] animate-in slide-in-from-left-2 duration-500" />
              )}

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-500 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(6,200,180,0.4)] rotate-[360deg]"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                }`}
              >
                {isActive ? <Check size={18} strokeWidth={3} /> : `0${index + 1}`}
              </div>

              <div className="flex-1">
                <p className={`text-base font-bold transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                }`}>
                  {step.label}
                </p>
                <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground/30">
                  Step Phase 0{index + 1}
                </p>
              </div>

              {isActive && (
                <ChevronRight size={18} className="text-primary animate-in fade-in slide-in-from-left-1" />
              )}
            </div>
          );
        })}
      </nav>

      {/* Progress Footer: Adaptive */}
      <div className="mt-auto relative z-10 p-6 rounded-3xl bg-gradient-to-br from-primary/5 dark:from-white/5 to-transparent border border-primary/10 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        <p className="text-xs font-bold text-muted-foreground/50 mb-3 uppercase tracking-widest">Global Progress</p>
        <div className="w-full h-1.5 bg-muted dark:bg-white/5 rounded-full overflow-hidden">
          <div className="w-[16.6%] h-full bg-primary shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </aside>
  );
};

export default CampaignSteps;

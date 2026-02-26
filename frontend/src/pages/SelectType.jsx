import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import CampaignLayout from "../layouts/CampaignLayout";
import { 
  LibraryBig, 
  Palette, 
  Layers, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  Target
} from "lucide-react";

/**
 * THEME-CONSISTENT EXTREME REDESIGN: SelectType
 * Focus: Modernized iconography, adaptive selection, and volumetric hierarchy.
 */
const SelectType = () => {
  const navigate = useNavigate();
  const { campaign, setCampaign } = useCampaign();

  const handleMethodSelect = (method) => {
    if (!campaign.type) {
      alert("Please select campaign type first");
      return;
    }

    setCampaign({
      ...campaign,
      creationMethod: method,
    });

    if (method === "template") {
      navigate("/campaign/templates");
    } else {
      navigate("/campaign/write");
    }
  };

  return (
    <CampaignLayout>
      <div className="page-root min-h-full flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground font-sans w-full p-6 md:p-12 transition-colors duration-500 pt-24">
        
        {/* EXTREME BACKGROUND: Volumetric Light Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[30%] w-[60%] h-[70%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-15%] right-[20%] w-[50%] h-[60%] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 w-full max-w-[900px] space-y-12">
          {/* Header Area */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">
              <Target size={14} />
              Step 03 — Objective Focus
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Select Your <span className="text-primary text-gradient">Weapon</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-[500px] mx-auto">
              Define the nature of your message and choose how you want to build it.
            </p>
          </div>

          {/* MAIN GLASS CONTAINER */}
          <div className="bg-background/40 dark:bg-black/40 border border-border/50 rounded-[40px] p-8 md:p-16 space-y-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-[32px] relative overflow-hidden transition-all duration-500 h-fit">
            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* TYPE SELECTION Area */}
            <div className="space-y-6">
              <label className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">
                Objective Category
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary/40 group-focus-within:text-primary transition-colors">
                  <Layers size={22} />
                </div>
                <select
                  value={campaign.type || ""}
                  onChange={(e) =>
                    setCampaign({
                      ...campaign,
                      type: e.target.value,
                    })
                  }
                  className="w-full bg-background/50 dark:bg-black/50 border border-border/60 p-5 pl-14 pr-12 rounded-[24px] text-xl font-bold text-foreground focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                >
                  <option value="">-- Choose Campaign Type --</option>
                  <option value="Marketing">Marketing Campaign</option>
                  <option value="Newsletter">Weekly Newsletter</option>
                  <option value="Promotional Emails">Promotional Blast</option>
                  <option value="Welcome Emails">User Onboarding</option>
                  <option value="Transactional Emails">Transactional Updates</option>
                </select>
                <ChevronDown className="absolute inset-y-0 right-5 h-full flex items-center pointer-events-none text-muted-foreground/30" size={24} />
              </div>
            </div>

            {/* METHOD OPTIONS: Premium Cards */}
            {campaign.type && (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* TEMPLATE PATH */}
                <div
                  onClick={() => handleMethodSelect("template")}
                  className="group relative h-full flex flex-col items-center text-center gap-6 p-10 rounded-[32px] border border-border/60 hover:border-primary/40 bg-background/20 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 cursor-pointer overflow-hidden active:scale-95 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(6,200,180,0.15)]"
                >
                  <div className="relative w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <LibraryBig size={40} className="relative z-10" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-foreground">
                      Use Blueprint
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      Deploy professional layouts from our curated high-conversion library.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Browse Gallery <ArrowRight size={14} />
                  </div>
                </div>

                {/* CUSTOM PATH */}
                <div
                  onClick={() => handleMethodSelect("custom")}
                  className="group relative h-full flex flex-col items-center text-center gap-6 p-10 rounded-[32px] border border-border/60 hover:border-primary/40 bg-background/20 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 cursor-pointer overflow-hidden active:scale-95 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(6,200,180,0.15)]"
                >
                  <div className="relative w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Palette size={40} className="relative z-10" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-foreground">
                      Forge Custom
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      Start from absolute zero and handcraft a unique brand experience.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Open Forge <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            )}

            {!campaign.type && (
              <div className="flex flex-col items-center justify-center py-10 opacity-30 select-none">
                <Sparkles size={48} className="text-muted-foreground mb-4 animate-slow-spin" />
                <p className="font-black uppercase tracking-[0.3em] text-[10px]">Awaiting Core Strategy</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

export default SelectType;

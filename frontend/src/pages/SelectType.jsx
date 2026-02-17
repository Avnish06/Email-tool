import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import CampaignLayout from "../layouts/CampaignLayout";

const SelectType = () => {

  const navigate = useNavigate();
  const { campaign, setCampaign } = useCampaign();

  /* ================= HANDLE METHOD SELECT ================= */

  const handleMethodSelect = (method) => {

    if (!campaign.type) {
      alert("Please select email type first");
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

  /* ================= UI ================= */

  return (
    <CampaignLayout>
      <div className="pt-28 min-h-screen flex justify-center bg-background px-6 relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
        
        <div className="bg-card max-w-3xl w-full p-10 rounded-2xl border border-border shadow-2xl space-y-8 relative z-10 backdrop-blur-sm h-fit">
          <h2 className="text-2xl font-bold text-center text-foreground">
            Select Email Type 📧
          </h2>

          {/* EMAIL TYPE DROPDOWN */}
          <select
            value={campaign.type || ""}
            onChange={(e) =>
              setCampaign({
                ...campaign,
                type: e.target.value,
              })
            }
            className="w-full bg-background border border-border p-4 rounded-xl text-foreground focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">-- Select Type --</option>
            <option value="Marketing" className="bg-background text-foreground">Marketing</option>
            <option value="Newsletter" className="bg-background text-foreground">Newsletter</option>
            <option value="Promotional Emails" className="bg-background text-foreground">Promotional Emails</option>
            <option value="Welcome Emails" className="bg-background text-foreground">Welcome Emails</option>
            <option value="Transactional Emails" className="bg-background text-foreground">Transactional Emails</option>
          </select>

          {/* SHOW OPTIONS ONLY AFTER TYPE IS SELECTED */}
          {campaign.type && (
            <div className="grid md:grid-cols-2 gap-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">

              {/* TEMPLATE LIBRARY */}
              <div
                onClick={() => handleMethodSelect("template")}
                className="group border border-white/5 rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">📚</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  Select Template
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose from our professional library
                </p>
              </div>

              {/* BUILD OWN */}
              <div
                onClick={() => handleMethodSelect("custom")}
                className="group border border-white/5 rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">🎨</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  Build Custom
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start from scratch and design manually
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </CampaignLayout>
  );
};

export default SelectType;

import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CampaignLayout from "../layouts/CampaignLayout";

const WriteMail = () => {
  const navigate = useNavigate();

  const { campaign, setCampaign } = useCampaign();

  /* ================= NEXT ================= */

  const goToEditor = () => {
    if (!campaign.subject.trim()) {
      toast.error("Please enter subject");
      return;
    }

    if (!campaign.content.trim()) {
      toast.error("Please write message");
      return;
    }

    // Save content before moving
    setCampaign({
      ...campaign,
      subject: campaign.subject,
      content: campaign.content,
    });

    navigate("/campaign/editor");
  };

  /* ================= UI ================= */

  return (
    <CampaignLayout>
      <div className="min-h-screen pt-28 flex justify-center bg-background px-4 relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

        <div className="bg-card w-full max-w-2xl p-8 rounded-xl border border-border shadow-2xl space-y-5 relative z-10 backdrop-blur-sm h-fit">

          <h2 className="text-2xl font-bold text-center mb-4 text-foreground">
            Write Your Email ✍️
          </h2>

          {/* SUBJECT */}
          <div>
            <label className="block text-sm font-medium mb-1 text-muted-foreground">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter email subject"
              value={campaign.subject}
              onChange={(e) =>
                setCampaign({
                  ...campaign,
                  subject: e.target.value,
                })
              }
              className="w-full p-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium mb-1 text-muted-foreground">
              Message
            </label>

            <textarea
              placeholder="Write your email content here..."
              value={campaign.content}
              onChange={(e) =>
                setCampaign({
                  ...campaign,
                  content: e.target.value,
                })
              }
              rows={8}
              className="w-full p-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={goToEditor}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Design Email ✨
          </button>

        </div>

      </div>
    </CampaignLayout>
  );
};

export default WriteMail;

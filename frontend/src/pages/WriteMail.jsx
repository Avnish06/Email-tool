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
      <div className="min-h-screen pt-28 flex justify-center bg-gray-50 px-4">

        <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow space-y-5">

          <h2 className="text-2xl font-bold text-center mb-4">
            Write Your Email ✍️
          </h2>

          {/* SUBJECT */}
          <div>
            <label className="block text-sm font-medium mb-1">
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium mb-1">
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={goToEditor}
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Design Email ✨
          </button>

        </div>

      </div>
    </CampaignLayout>
  );
};

export default WriteMail;

import { useCampaign } from "../Context/CampaignContext";
import { useNavigate } from "react-router-dom";
import CampaignLayout from "../layouts/CampaignLayout";

const SelectType = () => {

  const navigate = useNavigate();

  const { campaign, setCampaign } = useCampaign();

  /* ================= NEXT ================= */

  const handleNext = () => {

    if (!campaign.type) {
      alert("Please select email type");
      return;
    }

    navigate("/campaign/write");
  };

  /* ================= UI ================= */

  return (
    <CampaignLayout>
    <div className="pt-28 min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full space-y-5">

        <h2 className="text-xl font-bold text-center">
          Select Email Type 📧
        </h2>

        <select
          value={campaign.type}
          onChange={(e) =>
            setCampaign({
              ...campaign,
              type: e.target.value,
            })
          }
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">-- Select Type --</option>

          <option value="Marketing">Marketing</option>

          <option value="Warning">Warning</option>

          <option value="Newsletter">Newsletter</option>

          <option value="Survey & Feedback Emails">Survey & Feedback Emails</option>

          <option value="Promotional Emails">Promotional Emails</option>

          <option value="Welcome Emails">Welcome Emails</option>

          <option value="Onboarding Emails">Onboarding Emails</option>

          <option value="Transactional Emails">Transactional Emails</option>

          <option value="Re-engagement Emails">Re-engagement Emails</option>

          <option value="Confirmation Emails">Confirmation Emails</option>

          <option value="Lead Nurturing Emails">Lead Nurturing Emails</option>

          <option value="Event Emails">Event Emails</option>
         
          <option value="Educational Emails">Educational Emails</option>

          <option value="Announcement Emails">Announcement Emails</option>

          <option value="Reminder Emails">Reminder Emails</option>

          <option value="Referral Emails">Referral Emails</option>

        </select>

        <button
          onClick={handleNext}
          disabled={!campaign.type}
          className="w-full bg-indigo-600 text-white py-3 rounded font-semibold
                     hover:bg-indigo-700 transition disabled:opacity-50"
        >
          Next →
        </button>

      </div>

    </div>
    </CampaignLayout>
  );
};

export default SelectType;

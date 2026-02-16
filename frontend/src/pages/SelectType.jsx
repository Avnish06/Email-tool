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
      <div className="pt-28 min-h-screen flex justify-center bg-gray-50 px-6">

        <div className="bg-white max-w-3xl w-full p-10 rounded-xl shadow space-y-8">

          <h2 className="text-2xl font-bold text-center">
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
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Select Type --</option>

            <option value="Marketing">Marketing</option>
            <option value="Newsletter">Newsletter</option>
            <option value="Promotional Emails">Promotional Emails</option>
            <option value="Welcome Emails">Welcome Emails</option>
            <option value="Transactional Emails">Transactional Emails</option>
          </select>

          {/* SHOW OPTIONS ONLY AFTER TYPE IS SELECTED */}
          {campaign.type && (
            <div className="grid md:grid-cols-2 gap-6 pt-4">

              {/* TEMPLATE LIBRARY */}
              <div
                onClick={() => handleMethodSelect("template")}
                className="border rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition hover:border-teal-500"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">
                  Select Template From Library
                </h3>
                <p className="text-sm text-gray-500">
                  Choose a ready-made template
                </p>
              </div>

              {/* BUILD OWN */}
              <div
                onClick={() => handleMethodSelect("custom")}
                className="border rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition hover:border-teal-500"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2">
                  Build Your Own Email
                </h3>
                <p className="text-sm text-gray-500">
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

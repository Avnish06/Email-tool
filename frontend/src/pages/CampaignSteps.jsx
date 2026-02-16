import { useNavigate, useLocation } from "react-router-dom";
import { useCampaign } from "../Context/CampaignContext";

const stepsList = [
  { key: "name", label: "Campaign Name", path: "/campaign/new" },
  { key: "contacts", label: "Import Contacts", path: "/campaign/contacts" },
  { key: "type", label: "Select Type", path: "/campaign/type" },
  { key: "write", label: "Write Mail", path: "/campaign/write" },
  { key: "editor", label: "Design Email", path: "/campaign/editor" },
  { key: "preview", label: "Preview & Send", path: "/campaign/preview" },
];

const CampaignSteps = () => {
  const { steps } = useCampaign();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-72 bg-white border-r px-6 py-8">
      <h2 className="text-xl font-bold mb-8 text-teal-500">
        Campaign Progress
      </h2>

      <div className="space-y-6">
        {stepsList.map((step, index) => {
          const isCompleted = steps[step.key];
          const isActive = location.pathname === step.path;

          const isUnlocked =
            index === 0 || steps[stepsList[index - 1].key];

          return (
            <div key={step.key} className="flex items-start gap-3">
              {/* LINE */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-teal-500 text-white"
                      : isUnlocked
                      ? "bg-gray-300"
                      : "bg-gray-100"
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>

                {index !== stepsList.length - 1 && (
                  <div
                    className={`w-[2px] h-8 ${
                      isCompleted
                        ? "bg-green-400"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </div>

              {/* LABEL */}
              <button
                disabled={!isUnlocked}
                onClick={() => navigate(step.path)}
                className={`text-left flex-1 font-medium
                ${
                  isActive
                    ? "text-teal-500"
                    : isUnlocked
                    ? "text-gray-700 hover:text-teal-500"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                {step.label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignSteps;

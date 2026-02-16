import { useLocation, useNavigate } from "react-router-dom";

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
    <aside className="w-64 bg-white border-r min-h-screen px-5 py-6">
      <h2 className="text-lg font-bold mb-6">
        Campaign Progress
      </h2>

      <ul className="space-y-4">
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;

          return (
            <li
              key={index}
              onClick={() => navigate(step.path)}
              className={`cursor-pointer flex items-center gap-3 p-2 rounded transition
                ${
                  isActive
                    ? "bg-teal-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold
                  ${
                    isActive
                      ? "bg-white text-teal-500"
                      : "bg-gray-300 text-gray-700"
                  }`}
              >
                {index + 1}
              </span>

              <span>{step.label}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CampaignSteps;

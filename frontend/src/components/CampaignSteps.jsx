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
    <aside className="w-64 bg-card border-r border-border min-h-screen px-5 py-6 shadow-sm">
      <h2 className="text-lg font-bold mb-8 text-foreground tracking-tight">
        Campaign Progress
      </h2>

      <ul className="space-y-3">
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;

          return (
            <li
              key={index}
              onClick={() => navigate(step.path)}
              className={`cursor-pointer group flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                }`}
            >
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold transition-colors
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  }`}
              >
                {index + 1}
              </span>

              <span className="font-medium text-sm">{step.label}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CampaignSteps;

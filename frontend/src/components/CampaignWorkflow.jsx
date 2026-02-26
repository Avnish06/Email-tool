import React from "react";
import { 
  Tag, 
  Users, 
  MousePointerClick, 
  Mail, 
  Palette, 
  Send,
  Check
} from "lucide-react";

/**
 * CampaignWorkflow Component
 * A vertical timeline for the campaign creation process.
 */
const CampaignWorkflow = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Campaign Name",
      desc: "Start by defining your campaign identity. Set internal names and goals to keep your marketing efforts organized.",
      icon: Tag,
      active: false,
    },
    {
      step: "Step 02",
      title: "Import Contacts",
      desc: "Upload your audience list seamlessly. Support for CSV imports or direct integration with your existing CRM tools.",
      icon: Users,
      active: false,
    },
    {
      step: "Step 03",
      title: "Select Type",
      desc: "Choose the perfect format for your message. From regular newsletters to automated drip sequences or A/B tests.",
      icon: MousePointerClick,
      active: true, // Example state from screenshot
    },
    {
      step: "Step 04",
      title: "Write Mail",
      desc: "Draft compelling subject lines and preview text. Ensure your message grabs attention right from the inbox.",
      icon: Mail,
      active: false,
    },
    {
      step: "Step 05",
      title: "Editor",
      desc: "Drag and drop components to create stunning emails in minutes without writing a single line of code.",
      icon: Palette,
      active: false,
    },
    {
      step: "Step 06",
      title: "Preview & Send",
      desc: "Test across devices, review your checklist, and schedule your campaign for the perfect delivery time.",
      icon: Send,
      active: false,
    },
  ];

  return (
    <section id="workflow" className="campaign-workflow-section relative py-24 px-6 bg-secondary/5 dark:bg-card/20 text-foreground overflow-hidden">
      {/* Background patterns for consistency with top section */}
      <div className="bg-pattern absolute inset-0 opacity-[0.1] dark:opacity-30 pointer-events-none z-0"></div>
      <div className="glow-bg absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-[720px] mb-20 flex flex-col items-center">
          <div className="badge-top inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               Campaign Builder
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
            Campaign Workflow
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create stunning email campaigns in minutes with our intuitive step-by-step process.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full max-w-[800px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent opacity-20 z-0"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex items-start group">
                {/* Timeline Node */}
                <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 
                  ${step.active 
                    ? "bg-primary border-primary shadow-[0_0_20px_var(--primary)] scale-110" 
                    : "bg-card border-border group-hover:border-primary"}`}>
                  <step.icon size={24} className={step.active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"} />
                </div>

                {/* Step Content Card */}
                <div className={`ml-10 flex-1 p-6 rounded-2xl border transition-all duration-500 
                  ${step.active 
                    ? "bg-primary/[0.03] dark:bg-primary/[0.05] border-primary/20 shadow-[0_0_40px_rgba(45,212,191,0.05)] backdrop-blur-xl" 
                    : "bg-card border-border hover:border-primary/20"}`}>
                  <div className="flex flex-col gap-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${step.active ? "text-primary" : "text-muted-foreground"}`}>
                      {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .campaign-workflow-section {
          --font-family-body: 'DM Sans', 'Inter', sans-serif;
        }
        .bg-pattern {
          background-image: radial-gradient(var(--muted-foreground) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center 30%, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center 30%, black, transparent 80%);
        }
        .glow-bg {
          background: 
            radial-gradient(ellipse at 50% 20%, rgba(13, 148, 136, 0.08), transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(45, 212, 191, 0.05), transparent 50%);
        }
        
        @media (max-width: 640px) {
          .ml-10 {
            margin-left: 1.5rem;
          }
           .absolute.left-\[28px\] {
             left: 20px;
           }
        }
      `}</style>
    </section>
  );
};

export default CampaignWorkflow;

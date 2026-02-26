import React from "react";
import { 
  Palette, 
  GitPullRequestDraft, 
  Users, 
  BarChart2, 
  Zap, 
  Plug, 
  Check 
} from "lucide-react";

/**
 * ProductJourney Component
 * A continuous journey timeline for product features.
 * Updated to match the original Teal theme for consistency.
 */
const ProductJourney = () => {
  const steps = [
    {
      id: 1,
      label: "Start",
      title: "Visual Builder",
      desc: "Drag and drop components to create stunning emails in minutes without writing code.",
      icon: Palette,
      colorClass: "color-teal-1",
    },
    {
      id: 2,
      label: "Flows",
      title: "Automation",
      desc: "Set up complex workflows triggered by user behavior to send the right message at the right time.",
      icon: GitPullRequestDraft,
      colorClass: "color-teal-1",
    },
    {
      id: 3,
      label: "Audience",
      title: "Segmentation",
      desc: "Target specific groups of users based on their attributes, activity, and purchase history.",
      icon: Users,
      colorClass: "color-teal-2",
    },
    {
      id: 4,
      label: "Insights",
      title: "Analytics",
      desc: "Track opens, clicks, and revenue attribution in real-time with our advanced dashboard.",
      icon: BarChart2,
      colorClass: "color-teal-2",
    },
    {
      id: 5,
      label: "Send",
      title: "Delivery",
      desc: "Ensure your emails land in the inbox, not the spam folder, with our optimized infrastructure.",
      icon: Zap,
      colorClass: "color-teal-3",
    },
    {
      id: 6,
      label: "Ecosystem",
      title: "Integrations",
      desc: "Connect with your favorite tools including CRM, CMS, and e-commerce platforms seamlessly.",
      icon: Plug,
      colorClass: "color-teal-3",
    },
  ];

  return (
    <section id="features" className="product-journey-section relative py-24 px-6 overflow-hidden bg-background text-foreground">
      {/* Background patterns */}
      <div className="bg-pattern absolute inset-0 opacity-40 pointer-events-none z-0"></div>
      <div className="glow-bg absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="header-content text-center max-w-[720px] mb-20 flex flex-col items-center">
          <div className="badge-top inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Product Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1]">
            Everything you need to scale
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            All six features arranged as one continuous journey, from design to delivery.
          </p>
        </div>

        {/* Timeline Diagram */}
        <div className="diagram-wrapper relative w-full max-w-[960px] mx-auto pt-6">
          {/* Central Vertical Line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_12px_var(--primary)]"></div>
          </div>

          {/* Journey Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={step.id} className={`timeline-row flex items-center justify-between relative w-full ${step.colorClass}`}>
                  {/* Left Side (Text if odd, Spacer if even) */}
                  <div className={`timeline-half w-[calc(50%-48px)] ${isEven ? "" : "text-right"}`}>
                    {!isEven && (
                      <div className="content-box">
                        <div className="label text-xs font-bold uppercase tracking-[0.12em] text-[var(--label-color)] mb-2.5">
                          {step.label}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Connecting Line (Left or Right) */}
                  <div className={`conn-line absolute top-1/2 h-[1px] border-t border-dashed border-[var(--conn-color)] opacity-60 z-10 
                    ${isEven ? "left-[calc(50%+28px)] w-[36px]" : "right-[calc(50%+28px)] w-[36px]"}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--conn-color)] shadow-[0_0_8px_var(--conn-color)] 
                      ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}></div>
                  </div>

                  {/* Center Icon */}
                  <div className="timeline-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--bg-color)] border border-[var(--border-color)] shadow-[0_0_24px_var(--shadow-color)] backdrop-blur-md transition-transform hover:scale-110">
                      <step.icon size={28} className="text-[var(--icon-color)]" />
                    </div>
                  </div>

                  {/* Right Side (Spacer if odd, Text if even) */}
                  <div className={`timeline-half w-[calc(50%-48px)] ${isEven ? "text-left" : ""}`}>
                    {isEven && (
                      <div className="content-box">
                        <div className="label text-xs font-bold uppercase tracking-[0.12em] text-[var(--label-color)] mb-2.5">
                          {step.label}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* End Badge */}
          <div className="timeline-end flex justify-center mt-16 relative z-10">
            <div className="end-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/30 dark:bg-secondary/80 border border-border backdrop-blur-xl shadow-lg">
              <div className="end-badge-icon flex items-center justify-center w-6 h-6 rounded-full bg-primary/20">
                <Check size={14} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Every feature connects into one path — from first draft to inbox and beyond.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-journey-section {
          --font-family-body: 'DM Sans', 'Inter', sans-serif;
        }
        .bg-pattern {
          background-image: radial-gradient(var(--muted-foreground) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center 30%, black, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center 30%, black, transparent 70%);
        }
        .glow-bg {
          background: 
            radial-gradient(ellipse at 50% 20%, rgba(13, 148, 136, 0.05), transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(45, 212, 191, 0.05), transparent 50%);
        }
        .color-teal-1 {
          --bg-color: rgba(13, 148, 136, 0.04);
          --border-color: rgba(13, 148, 136, 0.2);
          --shadow-color: rgba(13, 148, 136, 0.1);
          --conn-color: #0d9488;
          --icon-color: #0d9488;
          --label-color: #0d9488;
        }
        .dark .color-teal-1 {
          --bg-color: rgba(13, 148, 136, 0.08);
          --border-color: rgba(13, 148, 136, 0.25);
        }
        .color-teal-2 {
          --bg-color: rgba(45, 212, 191, 0.04);
          --border-color: rgba(45, 212, 191, 0.2);
          --shadow-color: rgba(45, 212, 191, 0.1);
          --conn-color: #2dd4bf;
          --icon-color: #2dd4bf;
          --label-color: #2dd4bf;
        }
        .dark .color-teal-2 {
          --bg-color: rgba(45, 212, 191, 0.08);
          --border-color: rgba(45, 212, 191, 0.25);
        }
        .color-teal-3 {
          --bg-color: rgba(20, 184, 166, 0.04);
          --border-color: rgba(20, 184, 166, 0.2);
          --shadow-color: rgba(20, 184, 166, 0.1);
          --conn-color: #14b8a6;
          --icon-color: #14b8a6;
          --label-color: #14b8a6;
        }
        .dark .color-teal-3 {
          --bg-color: rgba(20, 184, 166, 0.08);
          --border-color: rgba(20, 184, 166, 0.25);
        }

        @media (max-width: 768px) {
          .timeline-half {
            width: 100%;
          }
          .timeline-line {
            left: 28px;
            transform: none;
          }
          .timeline-center {
            left: 28px;
            transform: translate(-50%, -50%);
          }
          .timeline-row {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 80px;
          }
          .timeline-row.timeline-row {
             text-align: left;
            margin-bottom: 48px;
          }
          .timeline-half.text-right {
            text-align: left;
          }
          .conn-line {
             display: none;
          }
          .timeline-half {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductJourney;

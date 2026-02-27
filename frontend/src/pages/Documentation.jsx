import React, { useState } from "react";
import { 
  Book, 
  ChevronRight, 
  Search, 
  Zap, 
  Mail, 
  Users, 
  BarChart2, 
  Shield, 
  Code,
  ArrowUpRight
} from "lucide-react";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("Introduction");

  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", icon: Book },
        { name: "Quick Start Guide", icon: Zap },
        { name: "API Authentication", icon: Shield },
      ],
    },
    {
      title: "Core Features",
      items: [
        { name: "Campaign Management", icon: Mail },
        { name: "Audience Segmentation", icon: Users },
        { name: "Analytics & Reports", icon: BarChart2 },
      ],
    },
    {
      title: "Advanced",
      items: [
        { name: "Webhook Integration", icon: Code },
        { name: "Template Customization", icon: ArrowUpRight },
      ],
    },
  ];

  const content = {
    Introduction: {
      title: "Introduction",
      description: "Welcome to the Hatbaliya Documentation. Hatbaliya is a powerful email and WhatsApp marketing platform designed to help you scale your communications with precision and ease.",
      steps: [
        "Create stunning campaigns using our visual builder.",
        "Automate workflows based on user behavior.",
        "Analyze performance with real-time revenue attribution."
      ]
    },
    "Quick Start Guide": {
      title: "Quick Start Guide",
      description: "Jumpstart your marketing journey in less than 5 minutes. Follow these simple steps to launch your first campaign.",
      steps: [
        "Login or Sign up to your account.",
        "Navigate to 'Campaigns' and click 'New Campaign'.",
        "Select a template and customize your message.",
        "Import your contacts and hit send!"
      ]
    },
    "API Authentication": {
      title: "API Authentication",
      description: "Secure your integration using our robust API authentication system. We use standard Bearer token authentication.",
      code: `const response = await fetch('https://api.hatbaliya.io/v1/auth', {
  headers: {
    'Authorization': 'Bearer YOUR_SECRET_KEY'
  }
});`
    }
  };

  const activeContent = content[activeSection] || content["Introduction"];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-border h-screen sticky top-16 hidden lg:block overflow-y-auto pt-8 px-6">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search docs..." 
            className="w-full pl-10 pr-4 py-2 bg-secondary/20 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {sections.map((category) => (
          <div key={category.title} className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              {category.title}
            </h4>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveSection(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === item.name 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </div>
                    {activeSection === item.name && <ChevronRight className="w-3 h-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase">
              Documentation
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              {activeContent.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {activeContent.description}
            </p>
          </div>

          {activeContent.steps && (
            <div className="grid gap-4 mt-8">
              {activeContent.steps.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          )}

          {activeContent.code && (
            <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-xl">
              <div className="bg-muted px-4 py-2 border-b border-border flex justify-between items-center">
                <span className="text-xs font-mono text-muted-foreground">javascript</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50"></div>
                </div>
              </div>
              <pre className="p-6 bg-[#0d1117] text-gray-300 font-mono text-sm overflow-x-auto">
                <code>{activeContent.code}</code>
              </pre>
            </div>
          )}

          <div className="pt-12 border-t border-border flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-medium">Was this page helpful?</p>
              <div className="flex gap-4">
                <button className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">Yes, thanks!</button>
                <button className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:underline">Not really</button>
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Edit this page on GitHub <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;

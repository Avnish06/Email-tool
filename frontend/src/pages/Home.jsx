import React from "react";
import { useNavigate } from "react-router-dom";


import {
  Zap,
  ArrowRight,
  Play,
  Palette,
  GitBranch,
  Users,
  BarChart2,
  Plug,
  Hexagon,
  Triangle,
  Circle,
  Box,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Visual Builder",
    icon: Palette,
    desc: "Drag and drop components to create stunning emails in minutes without writing code.",
  },
  {
    title: "Automation",
    icon: GitBranch,
    desc: "Set up complex workflows triggered by user behavior to send the right message at the right time.",
  },
  {
    title: "Segmentation",
    icon: Users,
    desc: "Target specific groups of users based on their attributes, activity, and purchase history.",
  },
  {
    title: "Analytics",
    icon: BarChart2,
    desc: "Track opens, clicks, and revenue attribution in real-time with our advanced dashboard.",
  },
  {
    title: "Delivery",
    icon: Zap,
    desc: "Ensure your emails land in the inbox, not the spam folder, with our optimized infrastructure.",
  },
  {
    title: "Integrations",
    icon: Plug,
    desc: "Connect with your favorite tools including CRM, CMS, and e-commerce platforms seamlessly.",
  },
];

const logos = [
  { icon: Hexagon, name: "Acme" },
  { icon: Triangle, name: "Vercel" },
  { icon: Circle, name: "Circle" },
  { icon: Box, name: "Dropbox" },
  { icon: Layers, name: "Layers" },
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.3)]">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(14,165,233,0.06),transparent_40%)]" />

    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-secondary-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const Home = () => {



  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full h-[72px] z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Zap size={20} />
            </div>
            <span className="font-bold text-lg">EmailSpark</span>
          </div>

          <div className="hidden md:flex gap-8">
            {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-secondary-foreground hover:text-foreground transition"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <li  className="text-sm text-secondary-foreground hover:text-foreground" onClick={()=>navigate("/signup")}>
              Sign in
            </li>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>e

      {/* ===== HERO ===== */}
      <section className="relative pt-[160px] pb-24 overflow-hidden">
        {/* ✅ FIXED GRID BACKGROUND */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundSize: "48px 48px",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />

        {/* glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <h1 className="text-[64px] leading-[1.1] font-bold tracking-[-1.5px] mb-6">
            The Email Platform <br />
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Built for Modern Growth
            </span>
          </h1>

          <p className="text-lg text-secondary-foreground max-w-[540px] mx-auto mb-12">
            Create stunning campaigns, automate workflows, and track real revenue attribution.
          </p>

          <div className="flex gap-4 justify-center mb-20">
            <button href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:bg-primary/90 transition" onClick={()=>navigate("campaign/new")}>
              Start Free Trial <ArrowRight size={16} />
            </button>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition">
              <Play size={14} /> Watch Demo
            </a>
          </div>

          <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-6">
            TRUSTED BY 10,000+ TEAMS
          </p>

          <div className="flex justify-center gap-10 opacity-40 grayscale">
            {logos.map(({ icon: Icon, name }) => (
              <div key={name} className="flex items-center gap-2 text-xl font-bold">
                <Icon size={20} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 border-t border-white/[0.03] bg-gradient-to-b from-background to-[hsl(220,40%,10%)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-lg text-secondary-foreground">
              Powerful features designed for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative bg-primary rounded-3xl px-6 py-16 text-center shadow-[0_20px_60px_-10px_rgba(14,165,233,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />
            <h2 className="relative z-10 text-[40px] font-bold text-white mb-4">
              Ready to grow your audience?
            </h2>
            <p className="relative z-10 text-lg text-white/90 max-w-[500px] mx-auto mb-8">
              Join thousands of businesses already growing with EmailSpark.
            </p>
            <button className="relative z-10 inline-flex items-center px-10 py-4 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition" >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t border-white/5">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 opacity-80">
            <Zap size={16} />
            <span className="font-semibold">EmailSpark</span>
          </div>

          <div className="flex gap-8 mb-8">
            {["Privacy", "Terms", "Twitter", "GitHub"].map((link) => (
              <a key={link} href="#" className="text-sm text-secondary-foreground hover:text-foreground">
                {link}
              </a>
            ))}
          </div>

          <div className="text-secondary-foreground opacity-50 text-sm">
            © 2024 EmailSpark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

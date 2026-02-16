import React, { useEffect, useRef } from "react";
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

const FeatureCard = ({ icon: Icon, title, desc }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="feature-card-modern group"
    >
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white overflow-x-hidden selection:bg-primary/30">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full h-[72px] z-50 border-b border-white/5 backdrop-blur-xl bg-[#0b1121]/80">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white">
              <Zap size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight">EmailSpark</span>
          </div>

          <div className="hidden md:flex gap-8">
            {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                onClick={(e) => {
                  if (link === "Templates") {
                    e.preventDefault();
                    navigate("/campaign/templates");
                  }
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <button
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
            <button
              className="btn-primary-glow btn-sm"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-[160px] pb-24 overflow-hidden">
        <div className="grid-bg"></div>
        <div className="glow-spot"></div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-accent text-[13px] font-medium">v2.0 is now available</span>
          </div>

          <h1 className="text-[64px] leading-[1.1] font-bold tracking-[-1.5px] mb-6">
            The Email Platform <br />
            <span className="text-gradient">Built for Modern Growth</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-[540px] mx-auto mb-12 leading-relaxed">
            Create stunning campaigns, automate workflows, and track real
            revenue attribution with the world's most powerful engine.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <button
              className="btn-primary-glow flex items-center gap-2 group"
              onClick={() => navigate("/campaign/new")}
            >
              Start Free Trial
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-outline flex items-center gap-2">
              <Play size={14} /> Watch Demo
            </button>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[1px] text-[#475569] mb-6">
              TRUSTED BY 10,000+ TEAMS
            </p>
            <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {logos.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-2 text-xl font-bold">
                  <Icon size={20} /> {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-24 border-t border-white/[0.03] bg-gradient-to-b from-background to-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed for growth. Built for speed, reliability, and ease of use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative rounded-[24px] px-6 py-20 text-center overflow-hidden bg-primary shadow-[0_20px_60px_-10px_rgba(14,165,233,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />
            <h2 className="relative z-10 text-[40px] font-bold text-white mb-4">
              Ready to grow your audience?
            </h2>
            <p className="relative z-10 text-lg text-white/90 max-w-[500px] mx-auto mb-10">
              Join thousands of businesses who are already growing with EmailSpark.
            </p>
            <button
              className="relative z-10 inline-flex items-center px-10 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-all hover:shadow-lg"
              onClick={() => navigate("/signup")}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t border-white/5 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 opacity-80">
            <div className="w-6 h-6 rounded-md flex items-center justify-center bg-muted-foreground text-background">
              <Zap size={14} />
            </div>
            <span className="font-semibold text-muted-foreground">EmailSpark</span>
          </div>

          <div className="flex gap-8 mb-8">
            {["Privacy", "Terms", "Twitter", "GitHub"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="text-muted-foreground/50 text-sm">
            © 2024 EmailSpark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

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
  Tag,
  MousePointerClick,
  Mail,
  Send,
  ChevronRight,
  Layout,
  MessageSquare,
  PenTool,
  Shield,
} from "lucide-react";
import brightPathImg from "../assets/templates/brightpath.png";
import colabImg from "../assets/templates/colab.png";
import finbankImg from "../assets/templates/finbank.png";

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

const workflowSteps = [
  {
    step: "Step 01",
    title: "Campaign Name",
    desc: "Start by defining your campaign identity. Set internal names and goals to keep your marketing efforts organized.",
    icon: Tag,
  },
  {
    step: "Step 02",
    title: "Import Contacts",
    desc: "Upload your audience list seamlessly. Support for CSV imports or direct integration with your existing CRM tools.",
    icon: Users,
  },
  {
    step: "Step 03",
    title: "Select Type",
    desc: "Choose the perfect format for your message. From regular newsletters to automated drip sequences or A/B tests.",
    icon: MousePointerClick,
  },
  {
    step: "Step 04",
    title: "Write Mail",
    desc: "Draft compelling subject lines and preview text. Ensure your message grabs attention right from the inbox.",
    icon: Mail,
  },
  {
    step: "Step 05",
    title: "Editor",
    desc: "Drag and drop components to create stunning emails in minutes without writing a single line of code.",
    icon: Palette,
  },
  {
    step: "Step 06",
    title: "Preview & Send",
    desc: "Test across devices, review your checklist, and schedule your campaign for the perfect delivery time.",
    icon: Send,
  },
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
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full h-[72px] z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-primary-foreground">
              <Zap size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">EmailSpark</span>
          </div>

          <div className="hidden md:flex gap-8">
            {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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

          <h1 className="text-[64px] leading-[1.1] font-bold tracking-[-1.5px] mb-6 text-foreground">
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
            <p className="text-[12px] font-semibold tracking-[1px] text-muted-foreground mb-6">
              TRUSTED BY 10,000+ TEAMS
            </p>
            <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-foreground">
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
      <section id="features" className="py-24 border-t border-border bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Everything you need to scale</h2>
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

      {/* ===== WORKFLOW ===== */}
      <section id="workflow" className="py-24 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Campaign Workflow</h2>
            <p className="text-lg text-muted-foreground">
              Create stunning email campaigns in minutes with our intuitive step-by-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((s) => (
              <div key={s.title} className="card p-8 border border-border bg-card group hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <s.icon size={32} />
                </div>
                <div className="space-y-4">
                  <span className="text-[12px] uppercase tracking-wider font-bold text-primary">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEMPLATES COLLAGE (PREMIUM REDESIGN) ===== */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden relative border-y border-white/5">
        {/* Intense background "Shade" glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/20 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="text-[40px] md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready-to-use <span className="text-primary italic">Templates</span>
            </h2>
            <p className="text-lg text-gray-400">
              Launch your campaigns in minutes with our high-converting designs. 
              Optimized for all devices and tested for maximum engagement.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8 pb-12">
            
            {/* Left Template: BrightPath */}
            <div className="w-full max-w-[320px] transition-all duration-500 hover:-translate-y-4 hover:rotate-0 group order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#161616] md:-rotate-3 group-hover:border-primary/30 transition-all duration-500">
                <img 
                  src={brightPathImg} 
                  alt="BrightPath Template" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="p-5 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
                  <p className="font-bold text-white text-lg">BrightPath</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1">Non-profit</p>
                </div>
              </div>
            </div>

            {/* Center Template: Co-Lab (Featured Focus) */}
            <div className="w-full max-w-[360px] relative z-20 transition-all duration-500 hover:-translate-y-6 group order-1 md:order-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-1.5 z-30">
                <Zap size={10} fill="currentColor" />
                Most Popular
              </div>
              
              <div className="overflow-hidden rounded-2xl shadow-[0_40px_100px_-15px_rgba(0,181,173,0.3)] border-2 border-primary/50 bg-[#1a1a1a] scale-100 md:scale-110 group-hover:border-primary transition-all duration-700">
                <img 
                  src={colabImg} 
                  alt="Co-Lab Template" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
                  <p className="font-bold text-white text-xl">Co-Lab</p>
                  <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-black mt-1">Modern Agency</p>
                </div>
              </div>
            </div>

            {/* Right Template: FinBank */}
            <div className="w-full max-w-[320px] transition-all duration-500 hover:-translate-y-4 hover:rotate-0 group order-3">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#161616] md:rotate-3 group-hover:border-primary/30 transition-all duration-500">
                <img 
                  src={finbankImg} 
                  alt="FinBank Template" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="p-5 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
                  <p className="font-bold text-white text-lg">FinBank</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1">Corporate Banking</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-white/5 active:scale-95">
              Explore All 100+ Templates
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative rounded-[24px] px-6 py-20 text-center overflow-hidden bg-primary shadow-[0_20px_60px_-10px_rgba(14,165,233,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />
            <h2 className="relative z-10 text-[40px] font-bold text-primary-foreground mb-4">
              Ready to grow your audience?
            </h2>
            <p className="relative z-10 text-lg text-primary-foreground/90 max-w-[500px] mx-auto mb-10">
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
      <footer className="py-16 border-t border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 opacity-80">
            <div className="w-6 h-6 rounded-md flex items-center justify-center bg-muted-foreground text-background">
              <Zap size={14} />
            </div>
            <span className="font-semibold text-muted-foreground">EmailSpark</span>
          </div>

          <div className="flex gap-8 mb-8">
            {["Privacy", "Terms", "Twitter", "GitHub"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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

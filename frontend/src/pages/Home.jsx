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
  Sparkles,
} from "lucide-react";
import brightPathImg from "../assets/templates/brightpath.png";
import colabImg from "../assets/templates/colab.png";
import finbankImg from "../assets/templates/finbank.png";

import ProductJourney from "../components/ProductJourney";
import Logo from "../components/Logo";

const logos = [
  { icon: Hexagon, name: "Acme" },
  { icon: Triangle, name: "Vercel" },
  { icon: Circle, name: "Circle" },
  { icon: Box, name: "Dropbox" },
  { icon: Layers, name: "Layers" },
];

import CampaignWorkflow from "../components/CampaignWorkflow";
import Pricing from "../components/Pricing";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full h-[72px] z-50 backdrop-blur-xl bg-background/80">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <Logo />
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

          <h1 className="text-5xl md:text-[72px] leading-[1.05] font-bold tracking-[-0.04em] mb-8 text-foreground">
            The Email Platform <br />
            <span className="text-gradient">Built for Modern Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[580px] mx-auto mb-12 leading-relaxed font-medium">
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
            {/* Scrolling Logo Container */}
            <div className="relative overflow-hidden">
              <div className="flex gap-10 animate-scroll-logos">
                {/* First set of logos */}
                {logos.map(({ icon: Icon, name }, idx) => (
                  <div key={`${name}-1-${idx}`} className="flex items-center gap-3 text-lg font-bold text-foreground/40 hover:text-foreground/80 transition-all duration-300 grayscale hover:grayscale-0 whitespace-nowrap px-4">
                    <Icon size={24} strokeWidth={2.5} /> {name}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map(({ icon: Icon, name }, idx) => (
                  <div key={`${name}-2-${idx}`} className="flex items-center gap-3 text-lg font-bold text-foreground/40 hover:text-foreground/80 transition-all duration-300 grayscale hover:grayscale-0 whitespace-nowrap px-4">
                    <Icon size={24} strokeWidth={2.5} /> {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES (PRODUCT JOURNEY) ===== */}
      <ProductJourney />

      {/* ===== WORKFLOW (CAMPAIGN WORKFLOW) ===== */}
      <CampaignWorkflow />

      {/* ===== TEMPLATES COLLAGE (PREMIUM REDESIGN) ===== */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden relative">
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

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 lg:gap-6 pb-12">
            
            {/* Left Template: BrightPath */}
            <div className="w-full max-w-[240px] transition-all duration-500 hover:-translate-y-4 hover:rotate-0 group order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#161616] md:-rotate-3 group-hover:border-primary/30 transition-all duration-500">
                <div className="h-[320px] overflow-hidden">
                  <img 
                    src={brightPathImg} 
                    alt="BrightPath Template" 
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-4 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
                  <p className="font-bold text-white text-base">BrightPath</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1">Non-profit</p>
                </div>
              </div>
            </div>

            {/* Center Template: Co-Lab (Featured Focus) */}
            <div className="w-full max-w-[260px] relative z-20 transition-all duration-500 hover:-translate-y-6 group order-1 md:order-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-1.5 z-30">
                <Zap size={10} fill="currentColor" />
                Most Popular
              </div>
              
              <div className="overflow-hidden rounded-2xl shadow-[0_40px_100px_-15px_rgba(0,181,173,0.3)] border-2 border-primary/50 bg-[#1a1a1a] scale-100 md:scale-105 group-hover:border-primary transition-all duration-700">
                <div className="h-[360px] overflow-hidden">
                  <img 
                    src={colabImg} 
                    alt="Co-Lab Template" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
                  <p className="font-bold text-white text-lg">Co-Lab</p>
                  <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-black mt-1">Modern Agency</p>
                </div>
              </div>
            </div>

            {/* Right Template: FinBank */}
            <div className="w-full max-w-[240px] transition-all duration-500 hover:-translate-y-4 hover:rotate-0 group order-3">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#161616] md:rotate-3 group-hover:border-primary/30 transition-all duration-500">
                <div className="h-[320px] overflow-hidden">
                  <img 
                    src={finbankImg} 
                    alt="FinBank Template" 
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-4 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
                  <p className="font-bold text-white text-base">FinBank</p>
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

      {/* ===== PRICING ===== */}
      <Pricing />

      {/* ===== EXTREME CTA REDESIGN: Abstract Polish ===== */}
      <section className="relative py-32 overflow-hidden bg-background">
        {/* Deep section-level volumetric atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 dark:bg-primary/20 blur-[140px] rounded-full pointer-events-none opacity-40 select-none animate-pulse" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="relative group overflow-hidden rounded-[56px] border border-border/40 bg-background/30 dark:bg-black/40 backdrop-blur-[42px] px-8 py-24 md:py-36 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] transition-all duration-1000 hover:border-primary/40">
            
            {/* ABSTRACT AESTHETICS: Modern Tech Layer */}
            <div className="absolute inset-0 pointer-events-none select-none">
              {/* Atmospheric Beams */}
              <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[140%] bg-gradient-to-b from-primary/5 via-transparent to-transparent rotate-[35deg] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[140%] bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent rotate-[35deg] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Floating Orbs (Classy) */}
              <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 blur-[60px] rounded-full animate-float opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full animate-float-delayed opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Star-field (Micro-sparkles) */}
              <Sparkles size={8} className="absolute top-20 right-[15%] text-primary/40 animate-pulse" />
              <Sparkles size={12} className="absolute top-[40%] left-[10%] text-primary/30 animate-pulse delay-700" />
              <Sparkles size={6} className="absolute bottom-24 right-[25%] text-primary/20 animate-pulse delay-1000" />
              <Sparkles size={10} className="absolute bottom-[40%] right-[10%] text-primary/30 animate-pulse delay-300" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                Limited Access Invitation
              </div>

              <h2 className="text-4xl md:text-[80px] font-black text-foreground tracking-[-0.03em] leading-[0.95]">
                Ready to Grow <br /> 
                <span className="text-primary italic text-gradient tracking-[-0.01em]">Your Audience?</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] mx-auto leading-relaxed font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                Join the elite league of businesses scaling their reach with the cinematic precision of ReachMail.
              </p>

              <div className="pt-8">
                <button
                  className="relative px-14 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl shadow-[0_24px_48px_-12px_rgba(6,200,180,0.5)] hover:shadow-[0_32px_64px_-16px_rgba(6,200,180,0.7)] hover:-translate-y-1.5 active:scale-95 transition-all group/btn overflow-hidden"
                  onClick={() => navigate("/signup")}
                >
                  {/* Button Shine Effect (Sweeping) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative z-10 flex items-center gap-3 tracking-tight">
                    Get Started Free <ArrowRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Minimal Trust Badge */}
              <div className="flex items-center justify-center gap-6 pt-12 opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
                <div className="h-px w-12 bg-muted-foreground/30" />
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-muted-foreground">
                  Secure Onboarding • No Card Required
                </p>
                <div className="h-px w-12 bg-muted-foreground/30" />
              </div>
            </div>

            {/* Classy Corner Gradients */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


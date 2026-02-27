import React from "react";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Activity,
  Server,
  Cloud
} from "lucide-react";

const Services = () => {
  const serviceHighlights = [
    {
      title: "WhatsApp Marketing",
      desc: "Connect directly with your customers on the world's most popular messaging app.",
      icon: Smartphone,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Email Automation",
      desc: "Scale your reach with smart drip campaigns and behavioral triggers.",
      icon: Zap,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "API Services",
      desc: "Seamlessly integrate our messaging engine into your existing infrastructure.",
      icon: Server,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    }
  ];

  const reportMetrics = [
    { label: "Service Uptime", value: "99.98%", trend: "+0.02%", status: "Healthy" },
    { label: "Delivery Success", value: "98.4%", trend: "+1.2%", status: "Optimal" },
    { label: "API Latency", value: "42ms", trend: "-5ms", status: "Fast" },
    { label: "Security Scans", value: "Pass", trend: "Daily", status: "Secure" }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6 lg:px-12 max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          Our Services
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-foreground">
          Premium Solutions for <span className="text-primary italic">Modern Teams</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From high-speed WhatsApp delivery to complex email automation, 
          Hatbaliya provides the infrastructure you need to win.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {serviceHighlights.map((svc) => (
          <div key={svc.title} className="group p-8 rounded-[32px] bg-card border border-border hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2">
            <div className={`w-14 h-14 ${svc.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <svc.icon className={`w-7 h-7 ${svc.color}`} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
            <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Required Report Section */}
      <div className="relative group overflow-hidden rounded-[48px] border border-border bg-card/50 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Activity size={200} className="text-primary" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight">Service Delivery <span className="text-primary">Report</span></h2>
            <p className="text-muted-foreground font-medium">Real-time status and performance overview of your active services.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
            <Download size={18} /> Export Full Report
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportMetrics.map((m) => (
            <div key={m.label} className="p-6 rounded-3xl bg-background border border-border hover:border-primary/20 transition-colors shadow-inner">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{m.label}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black">{m.value}</span>
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded bg-primary/10 ${m.trend.startsWith('+') ? 'text-emerald-500' : 'text-primary'}`}>
                  {m.trend}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${m.status === 'Healthy' || m.status === 'Optimal' || m.status === 'Secure' ? 'bg-emerald-500' : 'bg-primary'} animate-pulse`}></div>
                <span className="text-[10px] font-bold text-muted-foreground">{m.status}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Placeholder Chart UI */}
        <div className="relative z-10 mt-12 p-8 rounded-3xl bg-[#0d1117] border border-white/5 overflow-hidden">
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <BarChart3 className="text-primary w-5 h-5" />
                    <span className="text-sm font-bold text-white uppercase tracking-widest">Network Throughput</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <div className="w-2 h-2 bg-primary rounded-full"></div> Incoming
                    </div>
                </div>
             </div>
             <div className="flex items-end gap-2 lg:gap-4 h-32">
                {[40, 60, 45, 80, 50, 90, 70, 85, 95, 60, 75, 55, 40, 80, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group/bar overflow-hidden">
                        <div 
                           className="absolute bottom-0 left-0 right-0 bg-primary/80 transition-all duration-700 delay-[i*50ms]" 
                           style={{ height: `${h}%` }}
                        ></div>
                    </div>
                ))}
             </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-20 text-center space-y-6">
        <h3 className="text-2xl font-bold text-foreground">Need a custom enterprise solution?</h3>
        <button className="px-10 py-4 bg-foreground text-background font-black rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl active:scale-95">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;

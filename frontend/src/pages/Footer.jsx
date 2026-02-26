import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, MessageSquare, Box, Users } from 'lucide-react';

function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer className="pt-24 pb-12 bg-secondary/10 dark:bg-card/30 relative overflow-hidden">
      {/* Subtle top shade for separation instead of border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Zap size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-foreground">Hatbaliya</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
              The ultimate WhatsApp marketing engine for modern businesses. Build, automate, and grow with speed.
            </p>
            <div className="flex gap-4">
              {[
                { icon: MessageSquare, label: "Twitter" },
                { icon: Box, label: "GitHub" },
                { icon: Users, label: "LinkedIn" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Platform</h4>
            <ul className="space-y-4">
              {["Dashboard", "Campaigns", "Analytics", "Contacts", "Integrations"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Resources</h4>
            <ul className="space-y-4">
              {["Documentation", "API Reference", "Blog", "System Status", "Trust & Safety"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the latest news and updates directly in your inbox. No spam, we promise.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-card border border-border rounded-full py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all pr-[120px]"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Hatbaliya Technology. Crafted with precision for the modern web.
          </p>
          <div className="flex gap-8">
            {["Terms of Service", "Privacy Policy", "Cookie Settings"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

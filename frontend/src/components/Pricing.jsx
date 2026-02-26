import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      subtitle: "Perfect for testing the waters",
      price: "0",
      duration: "/ 3 days",
      features: [
        "3-day full access trial",
        "Create up to 2 campaigns",
        "Import 100 contacts",
        "Basic analytics",
        "Standard support",
        "No credit card required",
        "Access to basic templates",
        "Secure data encryption"
      ],
      cta: "Start Free Trial",
      featured: false
    },
    {
      name: "Monthly Plan",
      subtitle: "Full access to all tools with flexible monthly billing",
      price: "499",
      duration: "/ mo",
      features: [
        "All core tools included",
        "Unlimited campaigns",
        "Up to 5,000 contacts",
        "Advanced automation",
        "Real-time analytics",
        "Professional templates",
        "Priority email support",
        "Integrations & API access"
      ],
      cta: "Get Started",
      featured: true
    },
    {
      name: "Yearly Plan",
      subtitle: "Best value — get 2 months free with yearly billing",
      price: "4,990",
      duration: "/ yr",
      pricePerMonth: "₹415 per month",
      savings: "Save 17%",
      features: [
        "Everything in Monthly Plan",
        "2 months free every year",
        "Priority customer support",
        "Early access to new features",
        "Advanced business analytics",
        "Unlimited team members",
        "Custom domain support",
        "Dedicated Account Manager"
      ],
      cta: "Get Started",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <h2 className="text-[40px] md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Simple, <span className="text-primary italic">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Lock in founding member rates during early access. 
            Choose the plan that fits your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 group
                ${plan.featured 
                  ? 'bg-card border-2 border-primary shadow-[0_20px_50px_-12px_rgba(13,148,136,0.3)]' 
                  : 'bg-secondary/5 border border-border hover:border-primary/30'}`}
            >
              {plan.savings && (
                <div className="absolute -top-4 right-6 bg-primary text-primary-foreground text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg">
                  {plan.savings}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed h-10">{plan.subtitle}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                <span className="text-muted-foreground text-sm font-medium">{plan.duration}</span>
              </div>

              {plan.pricePerMonth && (
                <p className="text-xs text-primary font-semibold mb-6 -mt-6">
                  {plan.pricePerMonth}
                </p>
              )}

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2
                  ${plan.featured 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40' 
                    : 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-xl shadow-black/5'}`}
              >
                {plan.featured && <Zap size={16} fill="currentColor" />}
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

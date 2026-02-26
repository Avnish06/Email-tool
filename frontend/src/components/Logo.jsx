import React from "react";

/**
 * PREMIUM BM LOGO COMPONENT
 * Recreates the serif "BM" mark with elegant sparkle accents.
 */
const Logo = ({ className = "h-8", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* The "BM" Mark Container */}
        <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-white/5 rounded-xl border border-primary/20 dark:border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          
          {/* Logo SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-7 h-7 text-primary transition-colors duration-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Serif B */}
            <path d="M25 20h20c10 0 15 5 15 12.5s-5 12.5-12.5 12.5c7.5 0 12.5 5 12.5 12.5S55 70 45 70H25V20zm8 8v16h12c5 0 8-3 8-8s-3-8-8-8H33zm0 24v16h12c5 0 8-3 8-8s-3-8-8-8H33z" />
            {/* Serif M */}
            <path d="M60 70V20h8l10 25 10-25h8v50h-8V35L78 60 68 35v35h-8z" />
          </svg>

          {/* Sparkle Accents (Positioned like the image) */}
          <svg
            viewBox="0 0 24 24"
            className="absolute top-1 left-1.5 w-3 h-3 text-primary animate-pulse"
            fill="currentColor"
          >
            <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="absolute bottom-2 right-1.5 w-3 h-3 text-primary animate-pulse"
            style={{ animationDelay: '0.5s' }}
            fill="currentColor"
          >
            <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-foreground leading-none">
            Reach<span className="text-primary">Mail</span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
            Premium Suite
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

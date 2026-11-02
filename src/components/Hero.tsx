import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Navigation, ChevronDown, Sparkles } from 'lucide-react';
import { QUICK_STEPS } from '../data/mockData';

interface HeroProps {
  onOpenCallModal: () => void;
  onVisitOffices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallModal, onVisitOffices }) => {
  return (
    <section className="relative overflow-hidden bg-[#090e1a] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, CTAs, and Stats */}
          <div className="lg:col-span-7 space-y-7">
            {/* Trust Partner Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Official inDrive Registration Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold tracking-tight leading-[1.12]">
              Official inDrive <br />
              <span className="text-amber-400">Registration Office</span> <br />
              <span className="text-white">Khanna Pul, Islamabad</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Fast-track your inDrive driver registration and profile management at our Khanna Pul office & branch locations.
              Expert assistance, same-day processing, and guaranteed driver account approval.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onVisitOffices}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 flex items-center gap-2 group transition-all transform active:scale-95"
              >
                <Navigation className="w-4 h-4 text-slate-950 group-hover:rotate-45 transition-transform" />
                <span>Visit Our Offices</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCallModal}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us Now</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    2,500+
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Drivers Registered
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    3
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Office Locations
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    98%
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Success Rate
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    4.9
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Quick Registration" Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#12192a] border border-slate-700/70 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              {/* Header inside card */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-400/20 shrink-0">
                  <Sparkles className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Quick Registration
                  </h3>
                  <p className="text-xs text-slate-400">
                    Same-day processing available
                  </p>
                </div>
              </div>

              {/* 4 Steps */}
              <div className="space-y-3">
                {QUICK_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-center justify-between gap-3 bg-slate-900/60 hover:bg-slate-800/70 border border-slate-800 hover:border-slate-700 rounded-xl px-4 py-3.5 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-amber-400 font-extrabold text-sm tracking-wider font-mono">
                        {step.number}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {step.text}
                      </span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 stroke-[2]" />
                  </div>
                ))}
              </div>

              {/* Walk-in notice banner */}
              <div className="mt-5 bg-slate-900/90 border border-amber-400/25 rounded-xl py-3 px-4 text-center">
                <p className="text-xs sm:text-sm font-semibold text-amber-300">
                  Walk-in welcome — No appointment required
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#services"
            className="text-slate-500 hover:text-amber-400 transition-colors p-2 animate-bounce"
            aria-label="Scroll down to services"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

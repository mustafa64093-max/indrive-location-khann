import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Navigation, ChevronDown, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { QUICK_STEPS } from '../data/mockData';

interface HeroProps {
  onOpenCallModal: () => void;
  onVisitOffices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallModal, onVisitOffices }) => {
  return (
    <section className="relative overflow-hidden bg-[#090e1a] text-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[300px] sm:h-[400px] bg-amber-500/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, CTAs, and Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center sm:text-left">
            {/* Trust Partner Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Official inDrive Registration Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.15] text-balance">
              Official inDrive <br className="hidden sm:inline" />
              <span className="text-amber-400">Registration Office</span> <br />
              <span className="text-white">Khanna Pul, Islamabad</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mx-auto sm:mx-0 leading-relaxed">
              Fast-track your inDrive driver registration and profile management at our Khanna Pul office & branch locations.
              Expert assistance, same-day processing, and guaranteed driver account approval.
            </p>

            {/* CTAs with mobile responsive layout */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onVisitOffices}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 group transition-all"
              >
                <Navigation className="w-4 h-4 text-slate-950 group-hover:rotate-45 transition-transform" />
                <span>Visit Our Offices</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCallModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 active:scale-98 border border-slate-700 rounded-xl flex items-center justify-center gap-2.5 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us Now</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
                <div className="p-3 bg-slate-900/40 rounded-xl sm:bg-transparent sm:p-0 border border-slate-800/50 sm:border-0">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    2,500+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Drivers Registered
                  </div>
                </div>

                <div className="p-3 bg-slate-900/40 rounded-xl sm:bg-transparent sm:p-0 border border-slate-800/50 sm:border-0">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    3
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Office Locations
                  </div>
                </div>

                <div className="p-3 bg-slate-900/40 rounded-xl sm:bg-transparent sm:p-0 border border-slate-800/50 sm:border-0">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    98%
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Success Rate
                  </div>
                </div>

                <div className="p-3 bg-slate-900/40 rounded-xl sm:bg-transparent sm:p-0 border border-slate-800/50 sm:border-0">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    4.9
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Premium Quick Registration" Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative p-0.5 sm:p-1 rounded-3xl bg-linear-to-b from-amber-400/40 via-amber-500/15 to-transparent shadow-2xl shadow-amber-950/30">
              <div className="bg-[#101828]/95 backdrop-blur-xl border border-slate-700/60 rounded-[22px] p-5 sm:p-7 relative overflow-hidden">
                
                {/* Decorative Top Accent Tag */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/90">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-400/30 shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          Quick Registration
                        </h3>
                        <span className="text-[9px] font-extrabold tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full uppercase">
                          VIP Pass
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Same-day processing available
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Steps */}
                <div className="space-y-2.5 sm:space-y-3">
                  {QUICK_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="group flex items-center justify-between gap-3 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/30 rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-6 h-6 rounded-lg bg-amber-400/10 text-amber-400 font-extrabold text-xs flex items-center justify-center font-mono border border-amber-400/30 shrink-0">
                          {step.number}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                          {step.text}
                        </span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 stroke-[2.5]" />
                    </div>
                  ))}
                </div>

                {/* Premium Perks Strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-3 gap-1 text-center text-[10px] sm:text-xs text-slate-400 font-medium">
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Free Setup</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 border-x border-slate-800">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Instant Biometric</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Same-Day Earning</span>
                  </div>
                </div>

                {/* Walk-in notice banner */}
                <div className="mt-4 bg-linear-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 border border-amber-400/30 rounded-xl py-3 px-4 text-center">
                  <p className="text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>Walk-in welcome — No appointment required</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-10 sm:mt-16">
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

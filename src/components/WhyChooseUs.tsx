import React from 'react';
import { Clock, Shield, MapPin, Award, Star, Headphones } from 'lucide-react';
import { FEATURES, TESTIMONIALS } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'map-pin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'star':
        return <Star className="w-5 h-5 text-amber-400" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-24 bg-[#0a0f1d] text-white scroll-mt-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-400 uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 mb-4">
            The Trusted Choice for Drivers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We've helped thousands of drivers across Islamabad and Rawalpindi join inDrive and start earning.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#12192a] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                {getFeatureIcon(feature.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Strip (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#101726] border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & City */}
              <div className="border-t border-slate-800/80 pt-4">
                <div className="font-bold text-sm text-white">{t.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { UserPlus, ShieldCheck, FileCheck, BookOpen, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-plus':
        return <UserPlus className="w-6 h-6 text-white group-hover:text-slate-950 transition-colors" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-white group-hover:text-slate-950 transition-colors" />;
      case 'file-badge':
        return <FileCheck className="w-6 h-6 text-white group-hover:text-slate-950 transition-colors" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6 text-white group-hover:text-slate-950 transition-colors" />;
      default:
        return <UserPlus className="w-6 h-6 text-white group-hover:text-slate-950 transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-600 uppercase">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Everything you need to start and manage your inDrive driver journey — handled by our certified team at our physical offices.
          </p>
        </div>

        {/* 2x2 Services Grid with Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0; // New Driver Registration

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className={`group relative bg-white rounded-2xl p-6 sm:p-9 border transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-99 hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-amber-400/90 shadow-md shadow-amber-500/10 hover:shadow-xl ring-1 ring-amber-400/30'
                    : 'border-slate-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Featured Badge for New Driver Registration */}
                {isFeatured && (
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-amber-400 text-slate-950 shadow-xs">
                      <Sparkles className="w-3 h-3 fill-slate-950" />
                      <span>MOST REQUESTED</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon Circle */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 transition-all duration-300 group-hover:scale-105">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subdued CTA prompt */}
                <div className="mt-6 pt-4 text-xs sm:text-sm font-bold text-amber-600 flex items-center justify-between border-t border-slate-50">
                  <span>Inquire about this service</span>
                  <span className="w-7 h-7 rounded-full bg-amber-50 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { UserPlus, ShieldCheck, FileCheck, BookOpen, Check } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-plus':
        return <UserPlus className="w-6 h-6 text-white" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'file-badge':
        return <FileCheck className="w-6 h-6 text-white" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6 text-white" />;
      default:
        return <UserPlus className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-600 uppercase">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to start and manage your inDrive driver journey — handled by our certified team at our physical offices.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="group bg-white rounded-2xl p-8 sm:p-9 border border-slate-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-slate-950 flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <div className="group-hover:text-slate-950 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
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
              <div className="mt-6 pt-4 text-xs font-semibold text-amber-600 opacity-90 group-hover:opacity-100 flex items-center gap-1">
                <span>Inquire about this service</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

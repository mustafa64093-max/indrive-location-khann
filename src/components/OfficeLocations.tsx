import React from 'react';
import { MapPin, Phone, Clock, Navigation, ArrowRight, ImageIcon, ExternalLink, Mail, Footprints } from 'lucide-react';
import { Office } from '../types';

interface OfficeLocationsProps {
  offices: Office[];
  onSelectOffice: (office: Office) => void;
  onOpenPhoto: (photoUrl: string, caption: string) => void;
}

export const OfficeLocations: React.FC<OfficeLocationsProps> = ({
  offices,
  onSelectOffice,
  onOpenPhoto
}) => {
  const getGoogleMapsUrl = (office: Office) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      office.fullAddress
    )}`;
  };

  return (
    <section id="locations" className="py-20 lg:py-24 bg-[#f8fafc] text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-600 uppercase">
            FIND US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4">
            Our Office Locations
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Three strategically located offices to serve drivers across Islamabad and Rawalpindi.
          </p>
        </div>

        {/* 3 Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {offices.map((office) => {
            return (
              <div
                key={office.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Map Header Card */}
                  <div className="relative h-44 bg-slate-200 overflow-hidden border-b border-slate-200">
                    {/* Simulated Map Visual */}
                    <div className="absolute inset-0 bg-[#e5e3df] flex flex-col justify-between p-3">
                      {/* Roads / map graphic representation */}
                      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-20,30 Q120,90 280,40 T500,120" fill="none" stroke="#ffffff" strokeWidth="12" />
                        <path d="M-20,30 Q120,90 280,40 T500,120" fill="none" stroke="#fcd34d" strokeWidth="4" />
                        <path d="M100,-20 L160,200" fill="none" stroke="#ffffff" strokeWidth="8" />
                        <path d="M100,-20 L160,200" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                        <path d="M220,-20 L190,200" fill="none" stroke="#ffffff" strokeWidth="10" />
                        <path d="M-10,120 L350,110" fill="none" stroke="#ffffff" strokeWidth="6" />
                      </svg>

                      {/* Map Location Badge */}
                      <div className="relative z-10 self-start bg-slate-950/85 backdrop-blur-xs text-white px-3 py-1 rounded-md text-xs font-bold tracking-tight shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{office.name}</span>
                      </div>

                      {/* Central Pin */}
                      <div className="relative z-10 self-center my-auto flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-white animate-pulse">
                          <MapPin className="w-4 h-4 fill-white text-red-600" />
                        </div>
                        <span className="mt-1 text-[10px] font-bold bg-white/90 text-slate-800 px-2 py-0.5 rounded shadow-xs">
                          {office.area}
                        </span>
                      </div>

                      {/* Google Map Watermark Style */}
                      <div className="relative z-10 flex justify-between items-end text-[9px] text-slate-500 font-sans">
                        <span>Keyboard shortcuts</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">Google</span>
                          <span>Report a map error</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Info Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{office.name}</span>
                      </h3>
                      {office.id === 'khanna-pul' && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shrink-0 shadow-xs">
                          Main Office
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 pl-7 leading-relaxed">
                      {office.fullAddress}
                    </p>

                    <div className="space-y-2 mb-6 pl-7 text-xs sm:text-sm">
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-amber-500" />
                        <span>{office.phone}</span>
                      </a>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{office.hours}</span>
                      </div>
                    </div>

                    {/* Gallery Subsection */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>OFFICE GALLERY</span>
                      </div>

                      {office.gallery && office.gallery.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {office.gallery.map((img) => (
                            <button
                              key={img.id}
                              onClick={() => onOpenPhoto(img.url, `${office.name} - ${img.caption}`)}
                              className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200 hover:border-amber-400 focus:outline-hidden"
                            >
                              <img
                                src={img.url}
                                alt={img.caption}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ExternalLink className="w-3.5 h-3.5 text-white drop-shadow-md" />
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-slate-50 rounded-xl border border-dashed border-slate-200 py-7 px-4 text-center">
                          <ImageIcon className="w-6 h-6 text-slate-400 mx-auto mb-1.5 opacity-60" />
                          <p className="text-xs font-semibold text-slate-700">No photos yet</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Photos of {office.name} will appear here
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3 mt-4">
                  <a
                    href={getGoogleMapsUrl(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>Directions</span>
                  </a>

                  <button
                    onClick={() => onSelectOffice(office)}
                    className="py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-1 transition-colors shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Strip: Office Hours, Walk-in, Email */}
        <div className="bg-[#0b1220] text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Hours */}
            <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:pr-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Office Hours
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Monday – Saturday: 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            {/* Walk-In */}
            <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Footprints className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Walk-In Welcome
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  No appointment needed
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email Us
                </div>
                <a
                  href="mailto:info@cabservicehub.com"
                  className="text-sm font-semibold text-amber-400 hover:underline mt-0.5 block"
                >
                  info@cabservicehub.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

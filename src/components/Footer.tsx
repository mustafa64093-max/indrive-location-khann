import React from 'react';
import { Car, Mail, Phone, UploadCloud } from 'lucide-react';
import { Office } from '../types';

interface FooterProps {
  offices: Office[];
  onSelectOffice: (office: Office) => void;
  onOpenAdminUpload: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  offices,
  onSelectOffice,
  onOpenAdminUpload,
  onSelectService
}) => {
  return (
    <footer className="bg-[#070b14] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3 group focus:outline-hidden">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
                <Car className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                  inDrive Registration Office
                </span>
                <span className="text-[10px] font-extrabold tracking-wider text-amber-400 uppercase">
                  Khanna Pul — Islamabad
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Official inDrive registration office at Khanna Pul, Islamabad.
              Helping drivers get on the road since 2022.
            </p>

            <div>
              <a
                href="mailto:info@cabservicehub.com"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@cabservicehub.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {offices.map((office) => (
                <li key={office.id}>
                  <button
                    onClick={() => onSelectOffice(office)}
                    className="hover:text-amber-400 transition-colors text-left focus:outline-hidden"
                  >
                    {office.name}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={onOpenAdminUpload}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors focus:outline-hidden"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Admin: Upload Gallery</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'New Driver Registration',
                'Account Troubleshooting & Support',
                'Document Verification Services',
                'Driver Training & Guidance'
              ].map((serviceTitle) => (
                <li key={serviceTitle}>
                  <button
                    onClick={() => {
                      onSelectService(serviceTitle);
                      const contactEl = document.getElementById('contact');
                      contactEl?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors text-left focus:outline-hidden"
                  >
                    {serviceTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Offices
            </h4>

            <div className="space-y-4 text-xs">
              {/* Khanna Pul */}
              <div>
                <div className="font-bold text-amber-400 uppercase tracking-wide">
                  ISLAMABAD — KHANNA PUL
                </div>
                <p className="text-slate-400 mt-0.5 leading-snug">
                  Office No. 14, 1st Floor, Tech Tower, Lehtrar Road, Khanna Pul, Islamabad
                </p>
                <a
                  href="tel:+923334447112"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 font-semibold mt-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+92 333 4447112</span>
                </a>
              </div>

              {/* G-11 */}
              <div>
                <div className="font-bold text-amber-400 uppercase tracking-wide">
                  ISLAMABAD — G-11
                </div>
                <p className="text-slate-400 mt-0.5 leading-snug">
                  Office No. 09, 1st Floor, Madina Market, Near Ghazali Road, G-11 Service Road, Islamabad
                </p>
                <a
                  href="tel:+923710918881"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 font-semibold mt-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+92 371 0918881</span>
                </a>
              </div>

              {/* Tench Road */}
              <div>
                <div className="font-bold text-amber-400 uppercase tracking-wide">
                  RAWALPINDI — TENCH ROAD
                </div>
                <p className="text-slate-400 mt-0.5 leading-snug">
                  Office No. 8, Basement, Anarkali Plaza, Tench Road, Near 22 Number Chowk, Cantt, Rawalpindi
                </p>
                <a
                  href="tel:+923710918880"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 font-semibold mt-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+92 371 0918880</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 inDrive Registration Office Khanna Pul. All rights reserved.
          </div>

          <div className="text-center lg:text-right leading-relaxed max-w-3xl text-[11px] text-slate-500">
            Islamabad: Office No. 14, Tech Tower, Lehtrar Road, Khanna Pul &nbsp;|&nbsp; Islamabad: Office No. 09, Madina Market, G-11 Service Road &nbsp;|&nbsp; Rawalpindi: Office No. 8, Anarkali Plaza, Tench Road, Cantt
          </div>
        </div>

      </div>
    </footer>
  );
};

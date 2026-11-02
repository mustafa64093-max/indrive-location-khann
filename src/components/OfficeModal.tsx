import React from 'react';
import { X, MapPin, Phone, Clock, MessageSquare, Navigation, ExternalLink, ImageIcon } from 'lucide-react';
import { Office } from '../types';

interface OfficeModalProps {
  office: Office | null;
  onClose: () => void;
  onOpenPhoto: (url: string, caption: string) => void;
}

export const OfficeModal: React.FC<OfficeModalProps> = ({ office, onClose, onOpenPhoto }) => {
  if (!office) return null;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.fullAddress
  )}`;

  const whatsappUrl = `https://wa.me/${office.whatsapp}?text=${encodeURIComponent(
    `Hello Cab Service Hub, I want to inquire about inDrive registration at ${office.name}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">{office.name}</h3>
              <p className="text-xs text-amber-400 font-semibold">{office.city} Official Registration Center</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Address & Timings */}
          <div className="space-y-3.5 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exact Address</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">{office.fullAddress}</div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-slate-200/80">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Timings</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">{office.hours} (No Appointment Required)</div>
              </div>
            </div>
          </div>

          {/* Contact & Navigation Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={`tel:${office.phone.replace(/\s+/g, '')}`}
              className="p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Office</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Gallery View */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-amber-500" />
              <span>Office Photos</span>
            </h4>

            {office.gallery && office.gallery.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {office.gallery.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => onOpenPhoto(photo.url, `${office.name} - ${photo.caption}`)}
                    className="group relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-amber-400 focus:outline-hidden"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium p-2 text-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center">
                <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-semibold text-slate-700">No photos uploaded yet</p>
                <p className="text-xs text-slate-500 mt-1">
                  You can use "Admin: Upload Gallery" in the footer to add photos to this branch.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

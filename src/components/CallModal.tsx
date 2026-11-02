import React from 'react';
import { X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { Office } from '../types';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  offices: Office[];
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose, offices }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
      >
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">inDrive Registration Office</h3>
              <p className="text-xs text-amber-400">Khanna Pul & Regional Support Team</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of 3 Offices with Direct Call */}
        <div className="p-6 space-y-3.5">
          {offices.map((office) => (
            <div
              key={office.id}
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50 transition-all flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{office.name}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5 truncate">{office.fullAddress}</div>
                <div className="text-xs font-bold text-slate-800 mt-1">{office.phone}</div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${office.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call</span>
                </a>

                <a
                  href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(
                    `Hello Cab Service Hub, I want to inquire about inDrive registration at ${office.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          Timings: Monday – Saturday: 9:00 AM – 6:00 PM
        </div>
      </div>
    </div>
  );
};

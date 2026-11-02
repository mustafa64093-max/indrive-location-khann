import React from 'react';
import { X } from 'lucide-react';

interface GalleryModalProps {
  photo: { url: string; caption: string } | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 text-white hover:bg-slate-800 flex items-center justify-center transition-colors focus:outline-hidden"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.url}
            alt={photo.caption}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-4 bg-slate-900 border-t border-slate-800">
          <p className="text-sm font-medium text-slate-200 text-center">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, UploadCloud, Trash2, Check, Plus, ImageIcon } from 'lucide-react';
import { Office } from '../types';

interface AdminUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  offices: Office[];
  onAddPhoto: (officeId: string, photo: { id: string; url: string; caption: string }) => void;
  onRemovePhoto: (officeId: string, photoId: string) => void;
}

const PRESET_SAMPLE_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    caption: 'Consultation & Registration Counter'
  },
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    caption: 'Driver Waiting Lounge & Training Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
    caption: 'Customer Service & Account Verification Desk'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    caption: 'Commercial Plaza Entrance & Parking'
  }
];

export const AdminUploadModal: React.FC<AdminUploadModalProps> = ({
  isOpen,
  onClose,
  offices,
  onAddPhoto,
  onRemovePhoto
}) => {
  if (!isOpen) return null;

  const [selectedOfficeId, setSelectedOfficeId] = useState(offices[0]?.id || '');
  const [photoUrl, setPhotoUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [successNotice, setSuccessNotice] = useState('');

  const currentOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0];

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoUrl.trim() || !caption.trim()) return;

    onAddPhoto(selectedOfficeId, {
      id: `photo-${Date.now()}`,
      url: photoUrl.trim(),
      caption: caption.trim()
    });

    setPhotoUrl('');
    setCaption('');
    setSuccessNotice('Photo added to gallery successfully!');
    setTimeout(() => setSuccessNotice(''), 3000);
  };

  const handleAddPreset = (preset: { url: string; caption: string }) => {
    onAddPhoto(selectedOfficeId, {
      id: `preset-${Date.now()}-${Math.random()}`,
      url: preset.url,
      caption: preset.caption
    });
    setSuccessNotice(`Added "${preset.caption}"!`);
    setTimeout(() => setSuccessNotice(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Admin: Upload Office Gallery</h3>
              <p className="text-xs text-slate-400">Manage photos displayed across office branches</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Success Banner */}
          {successNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{successNotice}</span>
            </div>
          )}

          {/* Branch Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Office Branch
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                    selectedOfficeId === office.id
                      ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold">{office.area}</div>
                  <div className="text-[10px] text-slate-500 truncate">{office.city}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Current Gallery for Branch */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Current Photos ({currentOffice.gallery?.length || 0})
              </h4>
            </div>

            {currentOffice.gallery && currentOffice.gallery.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentOffice.gallery.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <p className="text-[10px] text-white line-clamp-2 leading-tight">
                        {photo.caption}
                      </p>
                      <button
                        onClick={() => onRemovePhoto(currentOffice.id, photo.id)}
                        className="self-end p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center text-xs text-slate-500">
                No photos in this branch yet. Add one below!
              </div>
            )}
          </div>

          {/* Quick Preset Photos Adder */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Add Verified Office Preset Photos
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PRESET_SAMPLE_PHOTOS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAddPreset(preset)}
                  className="group relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 hover:border-amber-400 text-left bg-slate-100 focus:outline-hidden"
                >
                  <img
                    src={preset.url}
                    alt={preset.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 bg-amber-400 text-slate-950 rounded text-[10px] font-bold flex items-center gap-1 shadow-md">
                      <Plus className="w-3 h-3" /> Add
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom URL Form */}
          <form onSubmit={handleAddCustom} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-amber-500" />
              <span>Or Add by Image URL</span>
            </h4>

            <div>
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <div>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption (e.g., Driver Consultation Desk)"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={!photoUrl.trim() || !caption.trim()}
              className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors"
            >
              Add Photo to {currentOffice.area}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

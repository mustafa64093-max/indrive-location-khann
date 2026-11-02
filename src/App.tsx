/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OfficeLocations } from './components/OfficeLocations';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OfficeModal } from './components/OfficeModal';
import { GalleryModal } from './components/GalleryModal';
import { AdminUploadModal } from './components/AdminUploadModal';
import { CallModal } from './components/CallModal';
import { INITIAL_OFFICES } from './data/mockData';
import { Office } from './types';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  // Offices state with localStorage persistence for admin gallery updates
  const [offices, setOffices] = useState<Office[]>(() => {
    try {
      const saved = localStorage.getItem('cab_service_hub_offices');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_OFFICES;
  });

  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; caption: string } | null>(null);
  const [isAdminUploadOpen, setIsAdminUploadOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cab_service_hub_offices', JSON.stringify(offices));
    } catch {
      // ignore
    }
  }, [offices]);

  const handleAddPhoto = (officeId: string, photo: { id: string; url: string; caption: string }) => {
    setOffices((prev) =>
      prev.map((off) => {
        if (off.id === officeId) {
          return {
            ...off,
            gallery: [...(off.gallery || []), photo]
          };
        }
        return off;
      })
    );
  };

  const handleRemovePhoto = (officeId: string, photoId: string) => {
    setOffices((prev) =>
      prev.map((off) => {
        if (off.id === officeId) {
          return {
            ...off,
            gallery: (off.gallery || []).filter((p) => p.id !== photoId)
          };
        }
        return off;
      })
    );
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitOffices = () => {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090e1a] text-slate-100 font-sans selection:bg-amber-400 selection:text-black pb-16 sm:pb-0">
      {/* Navigation */}
      <Navbar
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onGetStarted={handleGetStarted}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onVisitOffices={handleVisitOffices}
        />

        {/* 2. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. Office Locations Section */}
        <OfficeLocations
          offices={offices}
          onSelectOffice={(office) => setSelectedOffice(office)}
          onOpenPhoto={(url, caption) => setLightboxPhoto({ url, caption })}
        />

        {/* 5. Contact / Registration Form Section */}
        <ContactSection
          offices={offices}
          selectedServicePreset={selectedServicePreset}
          onSelectOffice={(office) => setSelectedOffice(office)}
        />
      </main>

      {/* 6. Footer Section */}
      <Footer
        offices={offices}
        onSelectOffice={(office) => setSelectedOffice(office)}
        onOpenAdminUpload={() => setIsAdminUploadOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Desktop/Tablet Floating Action Buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-30 flex-col gap-3">
        <button
          onClick={() => setIsCallModalOpen(true)}
          className="w-13 h-13 rounded-full bg-slate-900 border border-slate-700 text-amber-400 shadow-xl shadow-black/40 flex items-center justify-center hover:scale-105 transition-transform"
          title="Call office"
        >
          <Phone className="w-5 h-5" />
        </button>

        <a
          href="https://wa.me/923334447112?text=Hello%20inDrive%20Registration%20Office%20Khanna%20Pul,%20I%20want%20to%20register%20as%20a%20driver."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/25 flex items-center justify-center hover:scale-105 transition-transform"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar (Finger Friendly <= 10% viewport height) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#070b14]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+923334447112"
          className="flex-1 min-h-[46px] py-2.5 px-3 bg-slate-900 border border-slate-700 active:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Khanna Pul</span>
        </a>

        <a
          href="https://wa.me/923334447112?text=Hello%20inDrive%20Registration%20Office%20Khanna%20Pul,%20I%20want%20to%20register%20as%20a%20driver."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[46px] py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Modals */}
      <OfficeModal
        office={selectedOffice}
        onClose={() => setSelectedOffice(null)}
        onOpenPhoto={(url, caption) => setLightboxPhoto({ url, caption })}
      />

      <GalleryModal
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
      />

      <AdminUploadModal
        isOpen={isAdminUploadOpen}
        onClose={() => setIsAdminUploadOpen(false)}
        offices={offices}
        onAddPhoto={handleAddPhoto}
        onRemovePhoto={handleRemovePhoto}
      />

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        offices={offices}
      />
    </div>
  );
}

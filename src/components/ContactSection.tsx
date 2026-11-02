import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Office } from '../types';

interface ContactSectionProps {
  offices: Office[];
  selectedServicePreset?: string;
  onSelectOffice: (office: Office) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  offices,
  selectedServicePreset,
  onSelectOffice
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedServicePreset || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update service if preset changed externally
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.service) {
      setErrorMessage('Please fill in your name, phone number, and select a service.');
      return;
    }

    setLoading(true);

    // Simulate fast submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Office Contacts and Info */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-600 uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4">
                Ready to Register?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Fill out the form and our team will get back to you within hours. Or simply walk into any of our three offices — no appointment needed.
              </p>
            </div>

            {/* 3 Clickable Office Quick Cards */}
            <div className="space-y-3.5">
              {offices.map((office) => (
                <div
                  key={office.id}
                  onClick={() => onSelectOffice(office)}
                  className="group bg-slate-50 hover:bg-amber-50/50 border border-slate-200/90 hover:border-amber-400/80 rounded-2xl p-4 sm:p-5 transition-all cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                        {office.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {office.fullAddress}
                      </p>
                      <div className="text-xs font-semibold text-slate-700 mt-1 flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-amber-500" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 group-hover:border-amber-400 flex items-center justify-center text-slate-400 group-hover:text-amber-600 shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: "Send Us a Message" Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-9 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our driver support specialist will call you at <strong>{formData.phone}</strong> shortly to complete your request.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="New Driver Registration">New Driver Registration</option>
                      <option value="Account Troubleshooting & Support">Account Troubleshooting & Support</option>
                      <option value="Document Verification Services">Document Verification Services</option>
                      <option value="Driver Training & Guidance">Driver Training & Guidance</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your query..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 disabled:opacity-60 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 text-amber-400" />
                      </>
                    )}
                  </button>

                  {/* Subtext */}
                  <div className="text-center pt-2">
                    <p className="text-xs text-slate-500">
                      Or email us at{' '}
                      <a
                        href="mailto:info@cabservicehub.com"
                        className="text-amber-600 hover:text-amber-700 font-semibold"
                      >
                        info@cabservicehub.com
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

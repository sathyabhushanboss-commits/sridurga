"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    pickup: '',
    destination: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Format message for WhatsApp
      const message = `*🆕 New Enquiry from Sri Durga Website*%0A%0A` +
        `*👤 Name:* ${formData.name}%0A` +
        `*📱 Phone:* ${formData.phone}%0A` +
        `*📋 Service:* ${formData.service}%0A` +
        `*📍 Pickup:* ${formData.pickup || 'N/A'}%0A` +
        `*🎯 Destination:* ${formData.destination || 'N/A'}%0A` +
        `*📝 Details:* ${formData.details || 'N/A'}%0A%0A` +
        `*⏰ Time:* ${new Date().toLocaleString()}`;

      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/919980807508?text=${message}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          service: '',
          pickup: '',
          destination: '',
          details: '',
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Send Enquiry
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill the form and we'll get back to you via WhatsApp within 30 minutes.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-green-700 text-sm font-medium">Enquiry sent successfully! We'll contact you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm font-medium">Failed to send. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm appearance-none bg-white"
            required
          >
            <option value="">Select a service</option>
            <option value="Airport Transfer">Airport Transfer</option>
            <option value="Outstation Trip">Outstation Trip</option>
            <option value="Corporate Travel">Corporate Travel</option>
            <option value="Holiday Package">Holiday Package</option>
            <option value="Tempo Traveller Rental">Tempo Traveller Rental</option>
            <option value="Property Rental">Property Rental</option>
            <option value="Property Sale">Property Sale</option>
            <option value="Property Lease">Property Lease</option>
            <option value="Site & Land Sale">Site & Land Sale</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Pickup / Location
            </label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Destination (if travel)
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Travel / Property Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your travel or property requirement..."
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors resize-none text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] text-sm shadow-lg shadow-green-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400 mt-2">
          We'll respond via WhatsApp within 30 minutes
        </p>
      </form>
    </div>
  );
}
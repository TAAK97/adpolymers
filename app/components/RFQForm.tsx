'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  materialRequirements: string;
  estimatedVolume: string;
  additionalNotes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
}

export default function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [cadFile, setCadFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    materialRequirements: '',
    estimatedVolume: '',
    additionalNotes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCadFile(e.target.files[0]);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.company.trim()) newErrors.company = 'Company Name is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Use Multipart FormData to transmit text + CAD file
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val);
      });

      if (cadFile) {
        data.append('cadFile', cadFile);
      }

      const response = await fetch('/api/rfq', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong submitting your request.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  const inputBaseStyle = `
    mt-2 block w-full rounded-lg border px-4 py-3 text-base sm:text-sm font-normal
    bg-slate-900 text-white placeholder-slate-400
    border-slate-700 focus:border-blue-500 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20
    transition-colors duration-150
  `;

  return (
    <div className="mx-auto max-w-4xl p-2 sm:p-6">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-10 text-slate-100">
        
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Request Submitted
            </h2>
            
            <p className="mt-3 max-w-md text-sm text-slate-300 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. 
              Our technical engineering team at <span className="font-semibold text-white">AD</span> will review your details and CAD files and respond shortly.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setCadFile(null);
                setFormData({
                  fullName: '',
                  email: '',
                  company: '',
                  phone: '',
                  materialRequirements: '',
                  estimatedVolume: '',
                  additionalNotes: '',
                });
              }}
              className="mt-8 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            
            {/* Header */}
            <div className="border-b border-slate-800 pb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Request For Quote
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                Submit your technical specs and CAD files below for engineering review and quotation.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                01. Contact Information
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className={`${inputBaseStyle} ${
                      errors.fullName ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`${inputBaseStyle} ${
                      errors.email ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Company Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className={`${inputBaseStyle} ${
                      errors.company ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Direct Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputBaseStyle}
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-5 pt-2 border-t border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                02. Project & CAD Specifications
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="materialRequirements" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Polymer / Material Grade
                  </label>
                  <input
                    type="text"
                    id="materialRequirements"
                    name="materialRequirements"
                    value={formData.materialRequirements}
                    onChange={handleChange}
                    placeholder="e.g. Polypropylene, HDPE, Custom Compound"
                    className={inputBaseStyle}
                  />
                </div>

                <div>
                  <label htmlFor="estimatedVolume" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Estimated Production Volume
                  </label>
                  <input
                    type="text"
                    id="estimatedVolume"
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                    placeholder="e.g. 50,000 units/yr"
                    className={inputBaseStyle}
                  />
                </div>
              </div>

              {/* CAD Upload Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Upload CAD / Drawing File (.step, .stp, .iges, .stl, .dwg, .pdf)
                </label>
                <div className="mt-2 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-700 bg-slate-950/50 p-6 transition-colors hover:border-blue-500">
                  <div className="text-center">
                    <svg className="mx-auto h-10 w-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div className="mt-3 flex text-sm text-slate-300">
                      <label htmlFor="cadFile" className="relative cursor-pointer rounded-md font-semibold text-blue-400 focus-within:outline-none hover:text-blue-300">
                        <span>Click to upload CAD file</span>
                        <input
                          id="cadFile"
                          name="cadFile"
                          type="file"
                          accept=".step,.stp,.iges,.igs,.stl,.dwg,.dxf,.pdf,.zip"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-slate-400">or drag and drop</p>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Supports STEP, IGES, STL, DWG, PDF, or ZIP (Max 25MB)
                    </p>
                    {cadFile && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                        <span>📎 {cadFile.name} ({(cadFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                        <button
                          type="button"
                          onClick={() => setCadFile(null)}
                          className="text-slate-400 hover:text-rose-400"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Engineering Notes & Specifications
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Detail specific physical properties, UV/thermal resistance, molding constraints..."
                  className={inputBaseStyle}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-60"
              >
                {loading ? 'Uploading & Submitting...' : 'Submit Request For Quote'}
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
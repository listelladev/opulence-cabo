"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLang } from "@/components/LangContext";

const experienceOptions = [
  "Private Villas",
  "Yachting",
  "Fine Dining",
  "Private Aviation",
  "Entertainment",
  "Full-Service Group Package",
  "Other",
];

export default function ContactPage() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("sent");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", experience: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border border-white/15 px-4 py-3.5 text-sm text-white font-light placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen page-transition">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/experiences-collection-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-10 text-center">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("contact.getInTouch")}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
              {t("contact.title")}
            </h1>
          </div>
        </div>

        {/* Contact Content */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20">
              {/* Left — Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight mb-10">
                  Opulence Cabo
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+17604852386"
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="text-base text-white/70 font-light group-hover:text-white transition-colors duration-300">
                      +1 (760) 485-2386
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:opulencecabo@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-base text-white/70 font-light group-hover:text-white transition-colors duration-300">
                      opulencecabo@gmail.com
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/opulencecabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="text-base text-white/70 font-light group-hover:text-white transition-colors duration-300">
                      @opulencecabo
                    </span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                    <span className="text-base text-white/70 font-light">
                      {t("contact.location")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div>
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                  {t("contact.sendMessage")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t("contact.firstName")}
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t("contact.lastName")}
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contact.email")}
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("contact.phone")}
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`${inputClass} ${!formData.experience ? "text-white/30" : ""}`}
                  >
                    <option value="" disabled>
                      {t("contact.inquiry")}
                    </option>
                    {experienceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-dark text-white">
                        {opt}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    placeholder={t("contact.message")}
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent" : t("contact.send")}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400 mt-2">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

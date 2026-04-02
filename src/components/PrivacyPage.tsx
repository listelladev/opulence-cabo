"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLang } from "@/components/LangContext";

export default function PrivacyPage() {
  const { t } = useLang();

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen page-transition">
        {/* Header */}
        <div className="pt-40 pb-16 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("footer.company")}
            </h2>
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight">
              {t("footer.privacy")}
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="px-6 md:px-10">
          <div className="max-w-3xl mx-auto border-t border-white/10" />
        </div>

        {/* Content */}
        <section className="px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-12 text-white/70 font-light leading-relaxed">

            <div>
              <p className="text-sm text-white/40 mb-6">Last updated: January 2025</p>
              <p className="text-base leading-relaxed">
                Opulence Cabo (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard information
                when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Information We Collect
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We may collect the following types of information when you interact with us:
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span><strong className="text-white/90 font-normal">Contact information</strong> — your name, email address, and phone number when you fill out our contact form or make an inquiry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span><strong className="text-white/90 font-normal">Inquiry details</strong> — information about the services or experiences you are interested in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span><strong className="text-white/90 font-normal">Usage data</strong> — general information about how you use our website, such as pages visited and time spent, collected through standard analytics tools.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                The information we collect is used solely to provide and improve our services:
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span>To respond to your inquiries and process reservation requests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span>To communicate information about our villas, experiences, and services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span>To improve our website and the quality of our offerings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 flex-shrink-0">—</span>
                  <span>To comply with applicable legal obligations.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Information Sharing
              </h2>
              <p className="text-base leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as necessary to provide the services you have requested
                (such as coordinating with villa owners, service providers, or transportation partners)
                or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Data Security
              </h2>
              <p className="text-base leading-relaxed">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the internet is 100% secure. While we strive
                to use commercially acceptable means to protect your information, we cannot guarantee
                its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Cookies
              </h2>
              <p className="text-base leading-relaxed">
                Our website may use cookies to enhance your browsing experience. Cookies are small
                files stored on your device that help us understand how visitors use our site.
                You can choose to disable cookies through your browser settings, though this may
                affect certain features of the website.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Third-Party Links
              </h2>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices of those sites and encourage you to review their respective
                privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Your Rights
              </h2>
              <p className="text-base leading-relaxed">
                You have the right to request access to, correction of, or deletion of any personal
                information we hold about you. To exercise these rights, please contact us directly.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data,
                please reach out to us:
              </p>
              <div className="space-y-2 text-base">
                <p>
                  <span className="text-white/40">Email: </span>
                  <a href="mailto:opulencecabo@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                    opulencecabo@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-white/40">Phone: </span>
                  <a href="tel:+17604852386" className="hover:text-white transition-colors">
                    +1 (760) 485-2386
                  </a>
                </p>
                <p>
                  <span className="text-white/40">Location: </span>
                  Cabo San Lucas, Mexico
                </p>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

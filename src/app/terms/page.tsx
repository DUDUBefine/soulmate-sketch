import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Soulmate Sketch. Entertainment-only AI-generated soulmate portraits.",
  alternates: { canonical: "https://soulmatesketch.art/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-white/40 text-sm mb-8">
        Last updated: May 27, 2026
      </p>

      <div className="space-y-6 text-white/70 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By using Soulmate Sketch, you agree to these terms. If you do not
            agree, please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            2. Entertainment Purposes Only
          </h2>
          <p>
            Soulmate Sketch is provided for entertainment purposes only. The
            generated sketches are artistic interpretations based on your
            preferences and should not be considered predictions, psychic
            readings, or factual representations of any person.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            3. User Conduct
          </h2>
          <p>
            You agree to use the service responsibly and not to misuse the
            generated content, including but not limited to harassment,
            impersonation, or fraudulent activities.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            4. Intellectual Property
          </h2>
          <p>
            Generated sketches are provided for personal use. You may download
            and share your own sketches. Commercial use of generated images
            requires written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The service is provided &ldquo;as is&rdquo; without warranties of
            any kind. We do not guarantee the accuracy, quality, or reliability
            of generated sketches.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            Soulmate Sketch shall not be liable for any damages arising from the
            use of the service, including but not limited to emotional distress,
            financial loss, or any other consequences.
          </p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Soulmate Sketch. Learn how we handle your data, questionnaire responses, and generated images.",
  alternates: { canonical: "https://soulmate-sketch-zeta.vercel.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-white/40 text-sm mb-8">
        Last updated: May 27, 2026
      </p>

      <div className="space-y-6 text-white/70 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p>
            When you use Soulmate Sketch, we collect the information you provide
            in our questionnaire (personality type, preferences) solely to
            generate your sketch. We may optionally collect your email address if
            you choose to provide it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            Your questionnaire responses are used exclusively to generate your
            soulmate sketch. We do not sell, share, or distribute your personal
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            3. Generated Images
          </h2>
          <p>
            Generated sketches are stored temporarily to allow you to view and
            download them. We do not use your generated images for marketing or
            any other purpose without your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            4. Cookies & Analytics
          </h2>
          <p>
            We may use basic analytics to understand site usage and improve the
            experience. No personally identifiable information is collected
            through analytics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            5. Third-Party Services
          </h2>
          <p>
            We use Replicate for image generation via the FLUX model. Your
            prompt data is sent to their API to generate the sketch. Please
            refer to Replicate&apos;s privacy policy for details on how they
            handle data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            6. Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
}

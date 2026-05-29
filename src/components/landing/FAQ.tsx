import type { FAQItem } from "@/types";

const faqs: FAQItem[] = [
  {
    question: "What is a Soulmate Sketch?",
    answer:
      "A Soulmate Sketch is an AI-generated pencil portrait of your destined romantic partner. Based on your personality traits and preferences, our AI creates a unique artistic rendering of what your soulmate might look like.",
  },
  {
    question: "How does the AI generate my soulmate's portrait?",
    answer:
      "Our AI analyzes your personality type, romantic preferences, and the physical traits you're naturally drawn to. Using advanced image generation technology, it creates a detailed pencil sketch that reflects your unique soulmate profile.",
  },
  {
    question: "Is the Soulmate Sketch free?",
    answer:
      "Yes! You can generate your first Soulmate Sketch completely free. It's a fun, entertaining experience that gives you a beautiful piece of personalized art.",
  },
  {
    question: "How accurate is the sketch?",
    answer:
      "Soulmate Sketch is designed for entertainment purposes. While many users report uncanny resemblances, the sketch is an artistic interpretation based on your preferences. Think of it as a beautiful reflection of what your heart desires.",
  },
  {
    question: "Can I download my soulmate sketch?",
    answer:
      "Absolutely! Once your sketch is generated, you can download it as a high-quality image to keep, share on social media, or even print and frame.",
  },
  {
    question: "How long does it take to generate a sketch?",
    answer:
      "The AI typically generates your soulmate sketch in under 30 seconds. The entire process — from questionnaire to final portrait — takes about 2-3 minutes.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "We take privacy seriously. Your questionnaire responses are used solely to generate your sketch and are never shared with third parties. We don't store personal data beyond what's needed to deliver your sketch.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/20 transition-all"
            >
              <summary className="cursor-pointer font-medium text-sm sm:text-base flex items-center justify-between list-none">
                {faq.question}
                <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl shrink-0">
                  +
                </span>
              </summary>
              <p className="text-white/50 text-sm leading-relaxed mt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 animate-shimmer" />

          <div className="relative z-10">
            <span className="text-5xl mb-6 block">✦</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to See Your Soulmate?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Take our 2-minute questionnaire and let our AI reveal the face of
              your destined partner. It&apos;s free, fun, and might just change
              your life.
            </p>
            <Link
              href="/sketch"
              className="inline-block bg-accent text-primary-dark font-bold px-10 py-4 rounded-full text-lg hover:bg-accent-light transition-all hover:scale-105"
            >
              Get Your Free Soulmate Sketch
            </Link>
            <p className="text-white/30 text-xs mt-4">
              No sign-up required. Results in under 30 seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

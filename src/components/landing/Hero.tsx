import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-8">
          <span>✦</span>
          <span>AI-Powered Soulmate Discovery</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Discover What Your{" "}
          <span className="text-accent italic">Soulmate</span>{" "}
          Looks Like
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Our AI analyzes your personality and preferences to generate a unique
          pencil sketch of your destined partner. Over 50,000 sketches created.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/sketch"
            className="bg-accent text-primary-dark font-bold px-8 py-4 rounded-full text-lg hover:bg-accent-light transition-all hover:scale-105 animate-pulse-glow"
          >
            Reveal Your Soulmate
          </Link>
          <Link
            href="/#how-it-works"
            className="border border-white/20 text-white/70 px-8 py-4 rounded-full text-lg hover:border-accent/50 hover:text-accent transition-all"
          >
            See How It Works
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent">★★★★★</span>
            <span>4.8/5 Rating</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span>50,000+ Sketches</span>
          <div className="w-px h-4 bg-white/20" />
          <span>Free to Try</span>
        </div>
      </div>
    </section>
  );
}

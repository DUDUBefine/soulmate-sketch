import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-primary-dark/80 border-b border-accent/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">✦</span>
          <span className="font-heading text-xl font-bold text-accent">
            Soulmate Sketch
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm">
          <Link
            href="/#how-it-works"
            className="text-white/70 hover:text-accent transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/blog"
            className="text-white/70 hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white/70 hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="/sketch"
            className="bg-accent text-primary-dark font-semibold px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Get Your Sketch
          </Link>
        </div>

        <Link
          href="/sketch"
          className="sm:hidden bg-accent text-primary-dark font-semibold px-4 py-2 rounded-full text-sm"
        >
          Get Your Sketch
        </Link>
      </nav>
    </header>
  );
}

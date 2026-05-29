import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-accent/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✦</span>
              <span className="font-heading text-lg font-bold text-accent">
                Soulmate Sketch
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Discover what your soulmate looks like with our AI-powered pencil
              sketch generator. Based on your unique personality and preferences.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-accent font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sketch"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  Get Your Sketch
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-accent font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/50 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Soulmate Sketch. All rights
          reserved. For entertainment purposes only.
        </div>
      </div>
    </footer>
  );
}

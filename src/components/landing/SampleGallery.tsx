export function SampleGallery() {
  const samples = [
    { label: "Emma's Soulmate", style: "Gentle & Artistic" },
    { label: "James's Soulmate", style: "Confident & Classic" },
    { label: "Sophia's Soulmate", style: "Warm & Elegant" },
  ];

  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Real Soulmate Sketches
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Every sketch is unique, generated from each person&apos;s individual
            personality and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {samples.map((sample) => (
            <div
              key={sample.label}
              className="group rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-3 opacity-30">✏️</div>
                  <p className="text-white/20 text-sm">Sample Sketch</p>
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 bg-white/5">
                <p className="font-medium text-sm">{sample.label}</p>
                <p className="text-white/40 text-xs mt-1">{sample.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

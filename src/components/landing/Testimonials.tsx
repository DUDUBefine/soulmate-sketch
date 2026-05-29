export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "New York, USA",
      text: "I couldn't believe it when I saw the sketch — it looked exactly like someone I met three months later. This is honestly mind-blowing.",
      rating: 5,
    },
    {
      name: "David L.",
      location: "London, UK",
      text: "I tried it just for fun, but the detail in the sketch was incredible. The reading that came with it was surprisingly accurate too.",
      rating: 5,
    },
    {
      name: "Priya K.",
      location: "Toronto, Canada",
      text: "The whole experience felt magical. The sketch now hangs on my wall as a beautiful piece of art, regardless of whether it's prophetic.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            What People Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/20 transition-all"
            >
              <div className="text-accent text-sm mb-4">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

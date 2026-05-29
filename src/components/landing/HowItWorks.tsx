export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Personality",
      description:
        "Answer a few questions about your personality traits, romantic style, and what you value most in a partner.",
      icon: "💭",
    },
    {
      number: "02",
      title: "Describe Your Ideal Match",
      description:
        "Tell us about your preferences — from physical features to the vibe and energy you're drawn to.",
      icon: "✨",
    },
    {
      number: "03",
      title: "AI Generates Your Sketch",
      description:
        "Our advanced AI creates a unique pencil sketch portrait based on your unique combination of traits and desires.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Meet Your Soulmate",
      description:
        "View your soulmate's portrait, read your compatibility reading, and download your sketch to keep forever.",
      icon: "💌",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            How Your Soulmate Sketch Comes to Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <span className="text-accent/50 text-sm font-mono">
                Step {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

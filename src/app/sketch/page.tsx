"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Personality, SoulmatePreferences, GenerateRequest } from "@/types";

const STEP_PERSONALITY = 0;
const STEP_PREFERENCES = 1;
const STEP_GENERATING = 2;

const personalityOptions: { value: Personality; label: string; desc: string }[] = [
  { value: "introverted", label: "Introverted", desc: "Deep thinker, values quiet moments" },
  { value: "extroverted", label: "Extroverted", desc: "Social butterfly, loves adventure" },
  { value: "ambivert", label: "Ambivert", desc: "Best of both worlds" },
];

const romanticTraits = [
  "Loyalty & trust",
  "Sense of humor",
  "Intellectual connection",
  "Adventure & spontaneity",
  "Emotional depth",
  "Shared values",
  "Physical chemistry",
  "Creative spirit",
];

const defaultPreferences: SoulmatePreferences = {
  hairColor: "brunette",
  hairStyle: "medium",
  faceShape: "oval",
  style: "elegant",
  ageRange: "young",
  gender: "female",
};

export default function SketchPage() {
  const router = useRouter();
  const [step, setStep] = useState(STEP_PERSONALITY);
  const [personality, setPersonality] = useState<Personality>("ambivert");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<SoulmatePreferences>(defaultPreferences);
  const [error, setError] = useState("");

  function toggleTrait(trait: string) {
    setSelectedTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]
    );
  }

  async function handleGenerate() {
    if (selectedTraits.length === 0) {
      setError("Please select at least one trait you value.");
      return;
    }
    setError("");
    setStep(STEP_GENERATING);

    const payload: GenerateRequest = {
      personality,
      romanticTrait: selectedTraits.join(", "),
      preference: preferences,
    };

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Generation failed");
      }

      const data = await res.json();
      router.push(`/result/${data.id}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setStep(STEP_PERSONALITY);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">
        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full transition-colors ${step >= STEP_PERSONALITY ? "bg-accent" : "bg-white/10"}`} />
          <div className={`h-1 flex-1 rounded-full transition-colors ${step >= STEP_PREFERENCES ? "bg-accent" : "bg-white/10"}`} />
          <div className={`h-1 flex-1 rounded-full transition-colors ${step >= STEP_GENERATING ? "bg-accent" : "bg-white/10"}`} />
        </div>

        <AnimatePresence mode="wait">
          {step === STEP_PERSONALITY && (
            <motion.div
              key="personality"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  Tell Us About Yourself
                </h1>
                <p className="text-white/50">Step 1 of 2 — Your personality</p>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-3 block">
                  What best describes your personality?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {personalityOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPersonality(opt.value)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        personality === opt.value
                          ? "border-accent bg-accent/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <p className="font-medium text-sm">{opt.label}</p>
                      <p className="text-white/40 text-xs mt-1">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-3 block">
                  What do you value most in a partner? (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {romanticTraits.map((trait) => (
                    <button
                      key={trait}
                      onClick={() => toggleTrait(trait)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        selectedTraits.includes(trait)
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-white/10 text-white/50 hover:border-white/20"
                      }`}
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                onClick={() => {
                  if (selectedTraits.length === 0) {
                    setError("Please select at least one trait.");
                    return;
                  }
                  setError("");
                  setStep(STEP_PREFERENCES);
                }}
                className="w-full bg-accent text-primary-dark font-bold py-4 rounded-full hover:bg-accent-light transition-colors"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === STEP_PREFERENCES && (
            <motion.div
              key="preferences"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  Describe Your Ideal Soulmate
                </h1>
                <p className="text-white/50">Step 2 of 2 — Preferences</p>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-2 block">Gender</label>
                <div className="flex gap-3">
                  {(["male", "female", "non-binary"] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setPreferences({ ...preferences, gender: g })}
                      className={`flex-1 py-3 rounded-xl border text-sm capitalize transition-all ${
                        preferences.gender === g
                          ? "border-accent bg-accent/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <SelectField
                label="Hair Color"
                value={preferences.hairColor}
                options={["blonde", "brunette", "black", "red", "auburn", "gray"]}
                onChange={(v) => setPreferences({ ...preferences, hairColor: v as SoulmatePreferences["hairColor"] })}
              />

              <SelectField
                label="Hair Style"
                value={preferences.hairStyle}
                options={["short", "medium", "long", "curly", "wavy"]}
                onChange={(v) => setPreferences({ ...preferences, hairStyle: v as SoulmatePreferences["hairStyle"] })}
              />

              <SelectField
                label="Face Shape"
                value={preferences.faceShape}
                options={["oval", "round", "square", "heart", "diamond"]}
                onChange={(v) => setPreferences({ ...preferences, faceShape: v as SoulmatePreferences["faceShape"] })}
              />

              <SelectField
                label="Style"
                value={preferences.style}
                options={["elegant", "casual", "artistic", "bohemian", "classic"]}
                onChange={(v) => setPreferences({ ...preferences, style: v as SoulmatePreferences["style"] })}
              />

              <SelectField
                label="Age Range"
                value={preferences.ageRange}
                options={["young", "middle", "mature"]}
                onChange={(v) => setPreferences({ ...preferences, ageRange: v as SoulmatePreferences["ageRange"] })}
              />

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(STEP_PERSONALITY)}
                  className="flex-1 border border-white/20 py-4 rounded-full text-white/60 hover:text-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleGenerate}
                  className="flex-1 bg-accent text-primary-dark font-bold py-4 rounded-full hover:bg-accent-light transition-colors"
                >
                  Generate My Sketch
                </button>
              </div>
            </motion.div>
          )}

          {step === STEP_GENERATING && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border-2 border-accent/50 animate-spin" style={{ animationDuration: "3s" }} />
                <div className="absolute inset-0 flex items-center justify-center text-5xl animate-float">
                  ✦
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                Sketching Your Soulmate...
              </h2>
              <p className="text-white/50">
                Our AI is carefully crafting your unique portrait. This usually
                takes about 15-30 seconds.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-white/60 mb-2 block">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-full text-sm border capitalize transition-all ${
              value === opt
                ? "border-accent bg-accent/10 text-accent"
                : "border-white/10 text-white/50 hover:border-white/20"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

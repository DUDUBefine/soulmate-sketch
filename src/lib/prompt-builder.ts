import type { GenerateRequest, Personality, SoulmatePreferences } from "@/types";

const HAIR_COLOR_MAP: Record<string, string> = {
  blonde: "blonde",
  brunette: "brown",
  black: "black",
  red: "red",
  auburn: "auburn",
  gray: "gray",
};

const HAIR_STYLE_MAP: Record<string, string> = {
  short: "short",
  medium: "medium length",
  long: "long flowing",
  curly: "curly",
  wavy: "wavy",
};

const FACE_SHAPE_MAP: Record<string, string> = {
  oval: "oval",
  round: "round",
  square: "strong jawline",
  heart: "heart-shaped",
  diamond: "angular",
};

const STYLE_MAP: Record<string, string> = {
  elegant: "elegant formal",
  casual: "casual relaxed",
  artistic: "artistic creative",
  bohemian: "bohemian free-spirited",
  classic: "classic timeless",
};

const GENDER_MAP: Record<string, string> = {
  male: "man",
  female: "woman",
  "non-binary": "person",
};

const PERSONALITY_MAP: Record<Personality, string> = {
  introverted: "gentle contemplative",
  extroverted: "confident radiant",
  ambivert: "warm balanced",
};

export function buildSketchPrompt(request: GenerateRequest): {
  prompt: string;
  negativePrompt: string;
} {
  const { personality, preference } = request;
  const gender = GENDER_MAP[preference.gender];
  const hairColor = HAIR_COLOR_MAP[preference.hairColor];
  const hairStyle = HAIR_STYLE_MAP[preference.hairStyle];
  const faceShape = FACE_SHAPE_MAP[preference.faceShape];
  const style = STYLE_MAP[preference.style];
  const expression = PERSONALITY_MAP[personality];

  const prompt = [
    `pencil sketch portrait of an attractive ${gender},`,
    `${hairColor} ${hairStyle} hair,`,
    `${faceShape} face,`,
    `${expression} expression,`,
    `wearing ${style} clothing,`,
    "soft romantic lighting,",
    "detailed graphite drawing on white paper,",
    "fine art portrait sketch,",
    "highly detailed, realistic proportions,",
    "beautiful soulmate portrait,",
    "artistic hand-drawn quality",
  ].join(" ");

  const negativePrompt = [
    "blurry, low quality, deformed, ugly, bad anatomy,",
    "extra limbs, poorly drawn face, mutation, extra fingers,",
    "watermark, text, signature, frame, border,",
    "color, painting, oil, digital art, 3d render,",
    "cartoon, anime, manga, unrealistic proportions",
  ].join(" ");

  return { prompt, negativePrompt };
}

export function generateReading(preference: SoulmatePreferences, personality: Personality): string {
  const readings: Record<Personality, string[]> = {
    introverted: [
      "Your soulmate has a quiet depth that mirrors your own introspective nature.",
      "They carry wisdom in their eyes and a gentle smile that speaks volumes without words.",
    ],
    extroverted: [
      "Your soulmate radiates the same vibrant energy you bring to the world.",
      "Their magnetic personality draws people in, yet their heart beats only for you.",
    ],
    ambivert: [
      "Your soulmate embodies the perfect balance between adventure and tranquility.",
      "They know when to light up a room and when to cherish a quiet moment with you.",
    ],
  };

  const traitReadings: Record<string, string> = {
    elegant: "Their refined taste and elegance hint at a life filled with beautiful experiences.",
    casual: "Their relaxed demeanor shows they value authenticity over appearances.",
    artistic: "Their creative soul resonates with beauty in everything around them.",
    bohemian: "Their free spirit promises a life of adventure and unconventional love.",
    classic: "Their timeless charm speaks of enduring values and steadfast devotion.",
  };

  const selected = readings[personality];
  const line1 = selected[Math.floor(Math.random() * selected.length)];
  const line2 = traitReadings[preference.style];

  return `${line1} ${line2} Together, you will share a connection that transcends the ordinary.`;
}

export type Personality = "introverted" | "extroverted" | "ambivert";

export type HairColor = "blonde" | "brunette" | "black" | "red" | "auburn" | "gray";
export type HairStyle = "short" | "medium" | "long" | "curly" | "wavy";
export type FaceShape = "oval" | "round" | "square" | "heart" | "diamond";
export type Style = "elegant" | "casual" | "artistic" | "bohemian" | "classic";
export type AgeRange = "young" | "mature" | "middle";

export interface SoulmatePreferences {
  hairColor: HairColor;
  hairStyle: HairStyle;
  faceShape: FaceShape;
  style: Style;
  ageRange: AgeRange;
  gender: "male" | "female" | "non-binary";
}

export interface SketchQuestionnaire {
  personality: Personality;
  romanticTrait: string;
  preference: SoulmatePreferences;
  email?: string;
}

export interface GenerateRequest {
  personality: Personality;
  romanticTrait: string;
  preference: SoulmatePreferences;
  email?: string;
}

export interface GenerateResponse {
  id: string;
  status: "generating" | "completed";
  imageUrl: string;
  reading: string;
}

export interface SketchResult {
  id: string;
  imageUrl: string;
  reading: string;
  createdAt: string;
  preferences: SoulmatePreferences;
  contentType?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

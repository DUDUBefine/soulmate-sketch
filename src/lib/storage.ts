import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import type { SketchResult } from "@/types";

// In-memory store for sketches (works in serverless)
const sketchStore = new Map<string, { meta: SketchResult; image: Buffer }>();

function getExt(contentType: string): string {
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  return "png";
}

export async function saveSketch(
  id: string,
  imageBase64: string,
  result: Omit<SketchResult, "id" | "createdAt">,
  contentType: string = "image/png"
): Promise<SketchResult> {
  const imageBuffer = Buffer.from(imageBase64, "base64");

  const sketchResult: SketchResult = {
    id,
    imageUrl: `/api/result/${id}/image`,
    reading: result.reading,
    createdAt: new Date().toISOString(),
    preferences: result.preferences,
    contentType,
  };

  // Store in memory
  sketchStore.set(id, { meta: sketchResult, image: imageBuffer });

  // Also try to persist to disk (works locally, ignored if read-only)
  try {
    const dataDir = join(process.cwd(), "data", "sketches");
    await mkdir(dataDir, { recursive: true });
    const ext = getExt(contentType);
    await writeFile(join(dataDir, `${id}.${ext}`), imageBuffer);
    await writeFile(join(dataDir, `${id}.json`), JSON.stringify(sketchResult, null, 2));
  } catch {
    // Read-only filesystem (Vercel), memory store is sufficient
  }

  return sketchResult;
}

export async function getSketch(id: string): Promise<SketchResult | null> {
  // Check memory first
  const cached = sketchStore.get(id);
  if (cached) return cached.meta;

  // Fallback to disk (local dev)
  try {
    const dataDir = join(process.cwd(), "data", "sketches");
    const content = await readFile(join(dataDir, `${id}.json`), "utf-8");
    return JSON.parse(content) as SketchResult;
  } catch {
    return null;
  }
}

export async function getSketchImage(
  id: string,
  contentType: string = "image/png"
): Promise<Buffer | null> {
  // Check memory first
  const cached = sketchStore.get(id);
  if (cached) return cached.image;

  // Fallback to disk (local dev)
  try {
    const dataDir = join(process.cwd(), "data", "sketches");
    const ext = getExt(contentType);
    return await readFile(join(dataDir, `${id}.${ext}`));
  } catch {
    return null;
  }
}

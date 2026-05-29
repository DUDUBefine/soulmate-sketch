import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import type { SketchResult } from "@/types";

const DATA_DIR = join(process.cwd(), "data", "sketches");

async function ensureDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

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
  await ensureDir();

  const ext = getExt(contentType);
  const imageBuffer = Buffer.from(imageBase64, "base64");
  const imagePath = join(DATA_DIR, `${id}.${ext}`);
  await writeFile(imagePath, imageBuffer);

  const sketchResult: SketchResult = {
    id,
    imageUrl: `/api/result/${id}/image`,
    reading: result.reading,
    createdAt: new Date().toISOString(),
    preferences: result.preferences,
    contentType,
  };

  const metaPath = join(DATA_DIR, `${id}.json`);
  await writeFile(metaPath, JSON.stringify(sketchResult, null, 2));

  return sketchResult;
}

export async function getSketch(id: string): Promise<SketchResult | null> {
  const metaPath = join(DATA_DIR, `${id}.json`);
  try {
    const content = await readFile(metaPath, "utf-8");
    return JSON.parse(content) as SketchResult;
  } catch {
    return null;
  }
}

export async function getSketchImage(
  id: string,
  contentType: string = "image/png"
): Promise<Buffer | null> {
  const ext = getExt(contentType);
  const imagePath = join(DATA_DIR, `${id}.${ext}`);
  try {
    return await readFile(imagePath);
  } catch {
    return null;
  }
}

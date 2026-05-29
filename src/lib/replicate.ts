import Replicate from "replicate";
import type { GenerateRequest } from "@/types";
import { buildSketchPrompt } from "./prompt-builder";

interface ReplicateResponse {
  id: string;
  image: string;
  contentType: string;
}

export async function generateSketch(request: GenerateRequest): Promise<ReplicateResponse> {
  const apiToken = process.env.REPLICATE_API_TOKEN;
  if (!apiToken) {
    throw new Error("REPLICATE_API_TOKEN is not configured");
  }

  const replicate = new Replicate({ auth: apiToken });

  const { prompt, negativePrompt } = buildSketchPrompt(request);
  const fullPrompt = `${prompt}. Avoid: ${negativePrompt}`;

  console.log("[replicate] Prompt:", fullPrompt.slice(0, 150) + "...");

  // Step 1: Create prediction
  let prediction = await replicate.predictions.create({
    model: "black-forest-labs/flux-1.1-pro",
    input: {
      prompt: fullPrompt,
    },
  });

  console.log("[replicate] Created:", prediction.id, prediction.status);

  // Step 2: Poll until complete
  while (prediction.status !== "succeeded" && prediction.status !== "failed" && prediction.status !== "canceled") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    prediction = await replicate.predictions.get(prediction.id);
    console.log("[replicate] Status:", prediction.status);
  }

  if (prediction.status === "failed") {
    throw new Error(`Generation failed: ${prediction.error}`);
  }

  console.log("[replicate] Output:", JSON.stringify(prediction.output));

  // Step 3: Extract image URL from output
  const output = prediction.output;
  let imageUrl: string | undefined;

  if (typeof output === "string") {
    imageUrl = output;
  } else if (Array.isArray(output)) {
    imageUrl = output.find((item) => typeof item === "string");
  } else if (output && typeof output === "object") {
    // Some models return { image: "url" } or similar
    const obj = output as Record<string, unknown>;
    imageUrl = (typeof obj.image === "string") ? obj.image
      : (typeof obj.url === "string") ? obj.url
      : undefined;
  }

  if (!imageUrl) {
    throw new Error(`No image URL in output: ${JSON.stringify(output)?.slice(0, 300)}`);
  }

  console.log("[replicate] Downloading image...");

  // Step 4: Download and convert to base64
  const imageRes = await fetch(imageUrl);
  if (!imageRes.ok) {
    throw new Error(`Download failed: ${imageRes.status}`);
  }
  const contentType = imageRes.headers.get("content-type") || "image/png";
  const imageBuffer = Buffer.from(await imageRes.arrayBuffer());

  return {
    id: `sketch_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    image: imageBuffer.toString("base64"),
    contentType,
  };
}

import { NextRequest, NextResponse } from "next/server";
import { generateSketch } from "@/lib/replicate";
import { saveSketch } from "@/lib/storage";
import { generateReading } from "@/lib/prompt-builder";
import type { GenerateRequest } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();

    if (!body.personality || !body.preference) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await generateSketch(body);
    const reading = generateReading(body.preference, body.personality);

    const saved = await saveSketch(result.id, result.image, {
      imageUrl: "",
      reading,
      preferences: body.preference,
    }, result.contentType);

    return NextResponse.json({
      id: saved.id,
      status: "completed",
      imageUrl: saved.imageUrl,
      reading: saved.reading,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

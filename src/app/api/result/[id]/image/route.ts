import { NextRequest, NextResponse } from "next/server";
import { getSketch, getSketchImage } from "@/lib/storage";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const sketch = await getSketch(id);
  if (!sketch) {
    return NextResponse.json({ error: "Sketch not found" }, { status: 404 });
  }

  const contentType = sketch.contentType || "image/png";
  const imageBuffer = await getSketchImage(id, contentType);
  if (!imageBuffer) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(imageBuffer), {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

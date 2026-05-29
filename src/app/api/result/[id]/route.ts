import { NextRequest, NextResponse } from "next/server";
import { getSketch } from "@/lib/storage";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const sketch = await getSketch(id);
  if (!sketch) {
    return NextResponse.json({ error: "Sketch not found" }, { status: 404 });
  }

  return NextResponse.json(sketch);
}

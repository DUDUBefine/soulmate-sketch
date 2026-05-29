import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function GET() {
  const apiToken = process.env.REPLICATE_API_TOKEN;

  if (!apiToken) {
    return NextResponse.json({ error: "REPLICATE_API_TOKEN not set" });
  }

  try {
    const replicate = new Replicate({ auth: apiToken });

    // Step 1: Create a minimal prediction
    console.log("[test] Creating prediction...");
    const prediction = await replicate.predictions.create({
      model: "black-forest-labs/flux-1.1-pro",
      input: {
        prompt: "a simple pencil sketch of a cat, graphite on white paper",
      },
    });

    console.log("[test] Created:", prediction.id, prediction.status);

    // Step 2: Poll
    let result = prediction;
    let attempts = 0;
    while (result.status !== "succeeded" && result.status !== "failed" && result.status !== "canceled") {
      attempts++;
      if (attempts > 60) {
        return NextResponse.json({ error: "Timeout", lastStatus: result.status });
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      result = await replicate.predictions.get(result.id);
      console.log("[test] Poll", attempts, result.status);
    }

    return NextResponse.json({
      status: result.status,
      outputType: typeof result.output,
      output: result.output,
      error: result.error,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

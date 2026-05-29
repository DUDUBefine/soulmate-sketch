"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { SketchResult } from "@/types";

export default function ResultPage() {
  const params = useParams();
  const id = params.id as string;
  const [result, setResult] = useState<SketchResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch(`/api/result/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setResult(data);
      } catch {
        setError("Sketch not found or still generating.");
      } finally {
        setLoading(false);
      }
    }
    fetchResult();
  }, [id]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "I just discovered what my soulmate looks like! See yours 👇";

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl animate-float mb-6">✦</div>
          <p className="text-white/50">Loading your soulmate sketch...</p>
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Oops!</h1>
          <p className="text-white/50 mb-6">{error}</p>
          <Link
            href="/sketch"
            className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-full"
          >
            Try Again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <span className="text-accent text-sm uppercase tracking-wider">
            Your Soulmate Sketch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Here They Are
          </h1>
        </div>

        {/* Sketch Image */}
        <div className="rounded-2xl overflow-hidden border border-accent/20 bg-white/5 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.imageUrl}
            alt="Your soulmate sketch"
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* Reading */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <h2 className="font-heading text-accent text-lg mb-3">
            Your Soulmate Reading
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            {result.reading}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <a
            href={result.imageUrl}
            download={`soulmate-sketch-${id}.png`}
            className="block w-full text-center bg-accent text-primary-dark font-bold py-4 rounded-full hover:bg-accent-light transition-colors"
          >
            Download Sketch
          </a>

          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full border border-white/10 text-white/50 text-sm hover:border-accent/30 hover:text-accent transition-all text-center"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full border border-white/10 text-white/50 text-sm hover:border-accent/30 hover:text-accent transition-all text-center"
            >
              Facebook
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full border border-white/10 text-white/50 text-sm hover:border-accent/30 hover:text-accent transition-all text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/sketch"
            className="text-white/30 text-sm hover:text-accent transition-colors"
          >
            Generate another sketch
          </Link>
        </div>
      </div>
    </div>
  );
}

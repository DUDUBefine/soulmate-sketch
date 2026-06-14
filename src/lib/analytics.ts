import { sendGAEvent } from "@next/third-parties/google";

/**
 * GA4 事件追踪
 *
 * 事件漏斗：visit → questionnaire_started → questionnaire_completed →
 *           sketch_generated → sketch_viewed → sketch_downloaded / sketch_shared
 */

type EventName =
  | "questionnaire_started"
  | "questionnaire_step2"
  | "sketch_generated"
  | "sketch_viewed"
  | "sketch_downloaded"
  | "sketch_shared"
  | "regenerate_clicked";

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * 发送 GA4 事件。在开发环境会打印到控制台方便调试。
 */
export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof window === "undefined") return;

  // 开发环境打印，方便调试
  if (process.env.NODE_ENV === "development") {
    console.log("[GA4 event]", name, params ?? {});
  }

  sendGAEvent({ event: name, ...params });
}

/** 追踪社交分享渠道 */
export function trackShare(platform: string): void {
  trackEvent("sketch_shared", { platform });
}

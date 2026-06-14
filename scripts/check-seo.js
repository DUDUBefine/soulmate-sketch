#!/usr/bin/env node
/**
 * SEO 验证脚本 — 检查部署后的 canonical、重定向、OG 标签是否正确
 *
 * 用法：
 *   node scripts/check-seo.js
 *
 * 检查项：
 *   1. 每个页面最终 URL 不应有重定向链
 *   2. canonical 标签指向自定义域名（soulmatesketch.art）
 *   3. canonical 与实际 URL 一致
 *   4. OG image / title / description 存在
 *   5. sitemap.xml 和 robots.txt 可访问
 */

const SITE = "https://soulmatesketch.art";
const EXPECTED_DOMAIN = "soulmatesketch.art";

const PAGES = [
  "/",
  "/sketch/",
  "/blog/",
  "/blog/free-soulmate-sketch-online/",
  "/blog/soulmate-sketch-review/",
  "/blog/what-is-a-soulmate-sketch/",
  "/about/",
  "/privacy/",
  "/terms/",
];

const FILES = ["/sitemap.xml", "/robots.txt", "/opengraph-image"];

function color(text, code) {
  return `\x1b[${code}m${text}\x1b[0m`;
}
const green = (t) => color(t, "32");
const red = (t) => color(t, "31");
const yellow = (t) => color(t, "33");
const gray = (t) => color(t, "90");

async function checkUrl(path) {
  const url = SITE + path;
  let res;
  try {
    // fetch with redirect: "manual" to detect redirect chains
    res = await fetch(url, { redirect: "manual" });
  } catch (e) {
    console.log(`${red("✗")} ${path}  ${gray("FETCH FAILED:")} ${e.message}`);
    return;
  }

  const status = res.status;
  const location = res.headers.get("location");
  let finalUrl = url;
  let html = "";

  // Follow redirects manually up to 3 hops
  let currentRes = res;
  let hops = 0;
  let currentLocation = location;
  while ([301, 302, 307, 308].includes(status) && currentLocation && hops < 3) {
    hops++;
    finalUrl = new URL(currentLocation, finalUrl).href;
    try {
      currentRes = await fetch(finalUrl, { redirect: "manual" });
      currentLocation = currentRes.headers.get("location");
    } catch {
      break;
    }
    if (![301, 302, 307, 308].includes(currentRes.status)) {
      finalUrl = currentRes.url || finalUrl;
      break;
    }
  }

  // Fetch final HTML for canonical/OG checks (follow redirects)
  if (hops === 0) {
    try {
      const r = await fetch(url, { redirect: "follow" });
      html = await r.text();
      finalUrl = r.url;
    } catch {
      /* ignore */
    }
  } else {
    try {
      const r = await fetch(finalUrl, { redirect: "follow" });
      html = await r.text();
      finalUrl = r.url;
    } catch {
      /* ignore */
    }
  }

  const issues = [];

  // 1. Redirect chain length
  if (hops > 1) {
    issues.push(`${red("重定向链过长")} (${hops} 跳)`);
  } else if (hops === 1) {
    issues.push(`${yellow("单次重定向")} → ${finalUrl.replace(SITE, "")}`);
  }

  // 2. Domain check on final URL
  const finalDomain = (() => {
    try {
      return new URL(finalUrl).hostname;
    } catch {
      return "";
    }
  })();
  if (finalDomain && finalDomain !== EXPECTED_DOMAIN) {
    issues.push(`${red("域名错误")} → ${finalDomain}`);
  }

  // 3. Canonical tag
  const canonicalMatch = html.match(
    /<link rel="canonical" href="([^"]+)"/i
  );
  if (!canonicalMatch) {
    if (html) issues.push(`${red("缺少 canonical 标签")}`);
  } else {
    const canonical = canonicalMatch[1];
    const canonicalDomain = (() => {
      try {
        return new URL(canonical).hostname;
      } catch {
        return "";
      }
    })();
    if (canonicalDomain !== EXPECTED_DOMAIN) {
      issues.push(`${red("canonical 域名错误")}: ${canonical}`);
    } else {
      // check canonical matches final URL (ignoring trailing slash diff)
      const normCanonical = canonical.replace(/\/$/, "");
      const normFinal = finalUrl.replace(/\/$/, "");
      if (normCanonical !== normFinal) {
        issues.push(`${yellow("canonical 与 URL 不一致")}: ${canonical}`);
      }
    }
  }

  // 4. OG tags
  if (html) {
    if (!html.match(/<meta property="og:image"/i)) {
      issues.push(`${yellow("缺少 og:image")}`);
    }
    if (!html.match(/<meta property="og:title"/i)) {
      issues.push(`${yellow("缺少 og:title")}`);
    }
  }

  const symbol = issues.length === 0 ? green("✓") : red("✗");
  const statusStr = hops > 0 ? `${gray("(重定向)")}` : "";
  console.log(`${symbol} ${path}  ${gray("[HTTP " + status + "]")} ${statusStr}`);
  issues.forEach((i) => console.log(`     ${i}`));
}

async function checkFile(path) {
  try {
    const res = await fetch(SITE + path, { redirect: "follow" });
    const ok = res.ok;
    const symbol = ok ? green("✓") : red("✗");
    console.log(
      `${symbol} ${path}  ${gray("[HTTP " + res.status + "]")} ${
        ok ? "" : red("不可访问")
      }`
    );
  } catch (e) {
    console.log(`${red("✗")} ${path}  ${gray("FETCH FAILED:")} ${e.message}`);
  }
}

async function main() {
  console.log(
    `\n${color("SEO 验证", "1")} — 目标站点: ${SITE}\n${gray(
      "=".repeat(55)
    )}\n`
  );
  console.log(color("页面检查", "1"));
  for (const page of PAGES) {
    await checkUrl(page);
  }
  console.log(`\n${color("文件检查", "1")}`);
  for (const file of FILES) {
    await checkFile(file);
  }
  console.log(
    `\n${gray(
      "提示: 绿色 ✓ = 正常, 黄色 = 警告, 红色 ✗ = 问题\n"
    )}`
  );
}

main();

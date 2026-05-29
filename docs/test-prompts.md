# Soulmate Sketch — API Prompt 测试集

以下 prompt 可用于在不同 AI 图像生成平台测试效果（Replicate / DALL-E / Midjourney 等）。

---

## 测试 1: 基础款 — 年轻女性素描

**目标**: 验证基础铅笔素描风格是否正确

```
pencil sketch portrait of an attractive young woman, brown long flowing hair, oval face, warm balanced expression, wearing elegant formal clothing, soft romantic lighting, detailed graphite drawing on white paper, fine art portrait sketch, highly detailed, realistic proportions, beautiful soulmate portrait, artistic hand-drawn quality
```

**Negative Prompt:**
```
blurry, low quality, deformed, ugly, bad anatomy, extra limbs, poorly drawn face, mutation, extra fingers, watermark, text, signature, frame, border, color, painting, oil, digital art, 3d render, cartoon, anime, manga, unrealistic proportions
```

---

## 测试 2: 男性 — 短发干练型

**目标**: 验证男性画像生成质量

```
pencil sketch portrait of an attractive young man, black short hair, strong jawline face, confident radiant expression, wearing casual relaxed clothing, soft romantic lighting, detailed graphite drawing on white paper, fine art portrait sketch, highly detailed, realistic proportions, beautiful soulmate portrait, artistic hand-drawn quality
```

**Negative Prompt:**
```
blurry, low quality, deformed, ugly, bad anatomy, extra limbs, poorly drawn face, mutation, extra fingers, watermark, text, signature, frame, border, color, painting, oil, digital art, 3d render, cartoon, anime, manga, unrealistic proportions
```

---

## 测试 3: 成熟女性 — 金发波浪卷

**目标**: 验证不同发色/发型/年龄组合

```
pencil sketch portrait of an attractive mature woman, blonde wavy hair, heart-shaped face, gentle contemplative expression, wearing classic timeless clothing, soft romantic lighting, detailed graphite drawing on white paper, fine art portrait sketch, highly detailed, realistic proportions, beautiful soulmate portrait, artistic hand-drawn quality
```

**Negative Prompt:**
```
blurry, low quality, deformed, ugly, bad anatomy, extra limbs, poorly drawn face, mutation, extra fingers, watermark, text, signature, frame, border, color, painting, oil, digital art, 3d render, cartoon, anime, manga, unrealistic proportions
```

---

## 测试 4: 艺术风格 — 卷发波西米亚

**目标**: 验证艺术/自由风格的素描表现力

```
pencil sketch portrait of an attractive person, red curly hair, round face, warm balanced expression, wearing bohemian free-spirited clothing, soft romantic lighting, detailed graphite drawing on white paper, fine art portrait sketch, highly detailed, realistic proportions, beautiful soulmate portrait, artistic hand-drawn quality
```

**Negative Prompt:**
```
blurry, low quality, deformed, ugly, bad anatomy, extra limbs, poorly drawn face, mutation, extra fingers, watermark, text, signature, frame, border, color, painting, oil, digital art, 3d render, cartoon, anime, manga, unrealistic proportions
```

---

## 测试 5: 极简对比 — 无风格词

**目标**: 对比有/无风格描述词的效果差异

```
pencil sketch portrait of an attractive young woman, brown hair, oval face, soft romantic lighting, detailed graphite drawing on white paper, fine art portrait sketch, highly detailed, realistic proportions, artistic hand-drawn quality
```

---

## 测试 6: 强化素描风格

**目标**: 测试更强的素描约束是否提升效果

```
charcoal pencil sketch portrait of a beautiful woman, medium length auburn hair, diamond face, warm gentle expression, soft diffused lighting, cross-hatching shading technique, detailed graphite drawing on cream paper, traditional fine art portrait, black and white only, museum quality sketch, realistic human proportions, no color
```

**Negative Prompt:**
```
color, painting, digital art, photorealistic, 3d render, cartoon, anime, blurry, low quality, deformed, watermark, text, frame, border, multiple people, background scenery
```

---

## 测试 7: Midjourney 专用格式

**目标**: 适配 Midjourney 的 prompt 语法

```
pencil sketch portrait of a beautiful soulmate, young woman with flowing brown hair, oval face, warm expression, elegant dress, soft romantic lighting, graphite drawing on white paper, fine art portrait --ar 1:1 --style raw --s 250 --v 6
```

---

## 测试 8: DALL-E 专用格式

**目标**: 适配 DALL-E 的自然语言描述风格

```
A detailed pencil sketch portrait on white paper of an attractive young woman with long flowing brown hair, an oval face, and a warm gentle expression. She is wearing elegant clothing. The drawing uses graphite pencil with soft shading and romantic lighting. Fine art quality, realistic proportions, hand-drawn appearance. No color, no background, no text or watermarks.
```

---

## 各平台推荐参数

| 平台 | 推荐参数 |
|---|---|
| **Replicate (flux-1.1-pro)** | Aspect: `1:1`, Format: `png`, Quality: 100 |
| **Midjourney** | `--ar 1:1 --style raw --s 250 --v 6` |
| **DALL-E 3** | 直接使用自然语言描述（测试 8） |
| **Flux** | Steps: 30, Guidance: 3.5, Size: 1024x1024 |

## 效果评估标准

| 指标 | 合格标准 |
|---|---|
| 素描风格 | 明确的铅笔/炭笔质感，非照片、非彩画 |
| 面部完整度 | 五官清晰、比例正常、无变形 |
| 白纸背景 | 干净的浅色背景，无杂乱元素 |
| 浪漫氛围 | 柔和光影，温暖表情 |
| 细节质量 | 发丝、阴影、衣褶有细节 |
| 无瑕疵 | 无多余肢体、无水印文字、无色块 |

export type AnimationType =
  | "spinner"
  | "dots"
  | "pulse"
  | "bars"
  | "morph"
  | "orbit"
  | "ripple"

export interface AnimationPreset {
  id: string
  name: string
  type: AnimationType
  description: string
  tags: string[]
}

export const ANIMATION_PRESETS: AnimationPreset[] = [
  {
    id: "spinner",
    name: "Neon Spinner",
    type: "spinner",
    description: "A glowing ring that spins smoothly",
    tags: ["CSS", "Minimal"],
  },
  {
    id: "dots",
    name: "Bounce Dots",
    type: "dots",
    description: "Three dots that bounce in sequence",
    tags: ["CSS", "Minimal"],
  },
  {
    id: "pulse",
    name: "Pulse Blob",
    type: "pulse",
    description: "A soft circle that pulses gently",
    tags: ["CSS", "Bold"],
  },
  {
    id: "bars",
    name: "Wave Bars",
    type: "bars",
    description: "Equalizer-style bars that wave",
    tags: ["CSS", "Minimal"],
  },
  {
    id: "morph",
    name: "Morph Blob",
    type: "morph",
    description: "An organic shape that morphs endlessly",
    tags: ["SVG", "Bold"],
  },
  {
    id: "orbit",
    name: "Orbit Ring",
    type: "orbit",
    description: "A dot orbiting around a center point",
    tags: ["CSS", "Minimal"],
  },
  {
    id: "ripple",
    name: "Ripple Wave",
    type: "ripple",
    description: "Expanding ripple rings that fade out",
    tags: ["CSS", "Bold"],
  },
]

export const COLOR_SWATCHES = [
  "#b4ff39",
  "#22d3ee",
  "#a78bfa",
  "#f97316",
  "#ec4899",
  "#facc15",
  "#e5e5e5",
]

export const EASING_OPTIONS = ["ease", "linear", "spring", "bounce"] as const
export const LOOP_OPTIONS = ["Loop", "Alternate", "Once"] as const
export const BG_OPTIONS = ["Dark", "White", "Gray", "Custom"] as const

export function getCodeForAnimation(
  type: AnimationType,
  tab: "css" | "react" | "svg",
  color: string
): string {
  const codes: Record<AnimationType, Record<string, string>> = {
    spinner: {
      css: `@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid transparent;
  border-top-color: ${color};
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`,
      react: `export function Spinner() {
  return (
    <div
      className="spinner"
      style={{
        width: 48,
        height: 48,
        border: '3px solid transparent',
        borderTopColor: '${color}',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
  );
}`,
      svg: `<svg width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="20"
    fill="none" stroke="${color}"
    stroke-width="3" stroke-dasharray="80 40"
    stroke-linecap="round">
    <animateTransform
      attributeName="transform"
      type="rotate" dur="1s"
      from="0 24 24" to="360 24 24"
      repeatCount="indefinite"/>
  </circle>
</svg>`,
    },
    dots: {
      css: `@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.dot { 
  width: 12px; height: 12px;
  background: ${color};
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }`,
      react: `export function BounceDots() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          width: 12, height: 12,
          background: '${color}',
          borderRadius: '50%',
          animation: 'bounce 1.4s ease-in-out infinite',
          animationDelay: \`\${-0.32 + i * 0.16}s\`,
        }} />
      ))}
    </div>
  );
}`,
      svg: `<svg width="64" height="16" viewBox="0 0 64 16">
  <circle cx="8" cy="8" r="6" fill="${color}">
    <animate attributeName="r" values="6;2;6"
      dur="1.4s" begin="-0.32s" repeatCount="indefinite"/>
  </circle>
  <circle cx="32" cy="8" r="6" fill="${color}">
    <animate attributeName="r" values="6;2;6"
      dur="1.4s" begin="-0.16s" repeatCount="indefinite"/>
  </circle>
  <circle cx="56" cy="8" r="6" fill="${color}">
    <animate attributeName="r" values="6;2;6"
      dur="1.4s" repeatCount="indefinite"/>
  </circle>
</svg>`,
    },
    pulse: {
      css: `@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
}

.pulse-blob {
  width: 48px; height: 48px;
  background: ${color};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}`,
      react: `export function PulseBlob() {
  return (
    <div style={{
      width: 48, height: 48,
      background: '${color}',
      borderRadius: '50%',
      animation: 'pulse 2s ease-in-out infinite',
    }} />
  );
}`,
      svg: `<svg width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="20" fill="${color}">
    <animate attributeName="r" values="20;26;20"
      dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.6;1"
      dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>`,
    },
    bars: {
      css: `@keyframes wave {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

.bar {
  width: 4px; height: 32px;
  background: ${color};
  animation: wave 1.2s ease-in-out infinite;
}
.bar:nth-child(2) { animation-delay: -1.1s; }
.bar:nth-child(3) { animation-delay: -1.0s; }
.bar:nth-child(4) { animation-delay: -0.9s; }
.bar:nth-child(5) { animation-delay: -0.8s; }`,
      react: `export function WaveBars() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{
          width: 4, height: 32,
          background: '${color}',
          animation: 'wave 1.2s ease-in-out infinite',
          animationDelay: \`\${-1.2 + i * 0.1}s\`,
        }} />
      ))}
    </div>
  );
}`,
      svg: `<svg width="32" height="32" viewBox="0 0 32 32">
  ${[0, 1, 2, 3, 4].map((i) => `<rect x="${i * 7}" y="4" width="4" height="24" fill="${color}" rx="2">
    <animate attributeName="height" values="8;24;8" dur="1.2s" begin="${i * 0.1}s" repeatCount="indefinite"/>
  </rect>`).join("\n  ")}
</svg>`,
    },
    morph: {
      css: `@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

.morph-blob {
  width: 56px; height: 56px;
  background: ${color};
  animation: morph 4s ease-in-out infinite;
}`,
      react: `export function MorphBlob() {
  return (
    <div style={{
      width: 56, height: 56,
      background: '${color}',
      animation: 'morph 4s ease-in-out infinite',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    }} />
  );
}`,
      svg: `<svg width="56" height="56" viewBox="0 0 56 56">
  <path fill="${color}">
    <animate attributeName="d" dur="4s" repeatCount="indefinite"
      values="M28,4 C44,4 52,12 52,28 C52,44 44,52 28,52 C12,52 4,44 4,28 C4,12 12,4 28,4 Z;
              M28,8 C40,2 54,14 50,28 C46,42 38,54 28,48 C18,42 2,40 6,28 C10,16 16,14 28,8 Z;
              M28,4 C44,4 52,12 52,28 C52,44 44,52 28,52 C12,52 4,44 4,28 C4,12 12,4 28,4 Z"/>
  </path>
</svg>`,
    },
    orbit: {
      css: `@keyframes orbit {
  to { transform: rotate(360deg); }
}

.orbit-container {
  width: 48px; height: 48px;
  position: relative;
  animation: orbit 1.5s linear infinite;
}
.orbit-dot {
  width: 10px; height: 10px;
  background: ${color};
  border-radius: 50%;
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
}`,
      react: `export function OrbitRing() {
  return (
    <div style={{
      width: 48, height: 48,
      position: 'relative',
      animation: 'orbit 1.5s linear infinite',
    }}>
      <div style={{
        width: 10, height: 10,
        background: '${color}',
        borderRadius: '50%',
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
      }} />
    </div>
  );
}`,
      svg: `<svg width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="20"
    fill="none" stroke="${color}" stroke-width="1" opacity="0.3"/>
  <circle cx="24" cy="4" r="5" fill="${color}">
    <animateTransform attributeName="transform"
      type="rotate" dur="1.5s"
      from="0 24 24" to="360 24 24"
      repeatCount="indefinite"/>
  </circle>
</svg>`,
    },
    ripple: {
      css: `@keyframes ripple {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
}

.ripple {
  width: 40px; height: 40px;
  border: 3px solid ${color};
  border-radius: 50%;
  animation: ripple 1.5s ease-out infinite;
}`,
      react: `export function RippleWave() {
  return (
    <div style={{ position: 'relative', width: 40, height: 40 }}>
      {[0, 0.5].map((delay, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          border: '3px solid ${color}',
          borderRadius: '50%',
          animation: 'ripple 1.5s ease-out infinite',
          animationDelay: \`\${delay}s\`,
        }} />
      ))}
    </div>
  );
}`,
      svg: `<svg width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="16"
    fill="none" stroke="${color}" stroke-width="2">
    <animate attributeName="r" values="8;22" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="24" cy="24" r="16"
    fill="none" stroke="${color}" stroke-width="2">
    <animate attributeName="r" values="8;22" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
</svg>`,
    },
  }

  return codes[type]?.[tab] ?? "// No code available"
}

"use client"

import type { AnimationType } from "@/lib/animations"

interface AnimatedLoaderProps {
  type: AnimationType
  color?: string
  size?: number
  speed?: number
  paused?: boolean
}

export function AnimatedLoader({
  type,
  color = "#b4ff39",
  size = 48,
  speed = 1,
  paused = false,
}: AnimatedLoaderProps) {
  const animationState = paused ? "paused" : "running"
  const scale = size / 48

  return (
    <div
      className="flex items-center justify-center"
      style={{ transform: `scale(${scale})` }}
    >
      {type === "spinner" && (
        <div
          style={{
            width: 48,
            height: 48,
            border: "3px solid transparent",
            borderTopColor: color,
            borderRadius: "50%",
            animation: `spin-loader ${1 / speed}s linear infinite`,
            animationPlayState: animationState,
          }}
        />
      )}

      {type === "dots" && (
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                backgroundColor: color,
                borderRadius: "50%",
                animation: `bounce-dots ${1.4 / speed}s ease-in-out infinite`,
                animationDelay: `${(-0.32 + i * 0.16) / speed}s`,
                animationPlayState: animationState,
              }}
            />
          ))}
        </div>
      )}

      {type === "pulse" && (
        <div
          style={{
            width: 48,
            height: 48,
            backgroundColor: color,
            borderRadius: "50%",
            animation: `pulse-blob ${2 / speed}s ease-in-out infinite`,
            animationPlayState: animationState,
          }}
        />
      )}

      {type === "bars" && (
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: 32,
                backgroundColor: color,
                borderRadius: 2,
                animation: `wave-bars ${1.2 / speed}s ease-in-out infinite`,
                animationDelay: `${(-1.2 + i * 0.1) / speed}s`,
                animationPlayState: animationState,
              }}
            />
          ))}
        </div>
      )}

      {type === "morph" && (
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: color,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: `morph-blob ${4 / speed}s ease-in-out infinite`,
            animationPlayState: animationState,
          }}
        />
      )}

      {type === "orbit" && (
        <div
          style={{
            width: 48,
            height: 48,
            position: "relative",
            animation: `orbit ${1.5 / speed}s linear infinite`,
            animationPlayState: animationState,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: color,
              borderRadius: "50%",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 4,
              border: `1px solid ${color}`,
              borderRadius: "50%",
              opacity: 0.2,
            }}
          />
        </div>
      )}

      {type === "ripple" && (
        <div style={{ position: "relative", width: 48, height: 48 }}>
          {[0, 0.5].map((delay, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 4,
                border: `3px solid ${color}`,
                borderRadius: "50%",
                animation: `ripple ${1.5 / speed}s ease-out infinite`,
                animationDelay: `${delay / speed}s`,
                animationPlayState: animationState,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

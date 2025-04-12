"use client"

import { useEffect, useState } from "react"

// Lotus Flower SVG Component
export const LotusSVG = ({ className = "", size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill={color}>
    <path d="M50,20 C60,35 80,35 90,30 C85,45 70,55 50,55 C30,55 15,45 10,30 C20,35 40,35 50,20 Z" />
    <path d="M50,20 C40,35 20,35 10,30 C15,45 30,55 50,55 C70,55 85,45 90,30 C80,35 60,35 50,20 Z" />
    <circle cx="50" cy="35" r="10" />
  </svg>
)

// Om Symbol SVG Component
export const OmSVG = ({ className = "", size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill={color}>
    <path d="M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10 Z M50,20 C35,20 25,30 25,45 C25,60 35,70 50,70 C65,70 75,60 75,45 C75,30 65,20 50,20 Z" />
    <path d="M50,20 C60,20 65,30 65,40 C65,50 60,55 50,55 C40,55 35,50 35,40 C35,30 40,20 50,20 Z" />
    <path d="M50,55 C45,55 40,60 40,65 C40,70 45,75 50,75 C55,75 60,70 60,65 C60,60 55,55 50,55 Z" />
    <path d="M60,65 C60,70 65,75 70,75 C75,75 80,70 80,65 C80,60 75,55 70,55 C65,55 60,60 60,65 Z" />
    <path d="M70,75 L85,90" />
  </svg>
)

// Mandala Pattern SVG Component
export const MandalaSVG = ({ className = "", size = 80, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke={color}
    strokeWidth="1"
  >
    <circle cx="50" cy="50" r="40" />
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="20" />
    <circle cx="50" cy="50" r="10" />
    <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" />
    <path d="M50,10 C70,30 70,70 50,90 M50,10 C30,30 30,70 50,90" />
    <path d="M10,50 C30,30 70,30 90,50 M10,50 C30,70 70,70 90,50" />
  </svg>
)

// Decorative Corner SVG Component
export const CornerSVG = ({ className = "", size = 60, color = "currentColor", position = "top-left" }) => {
  let transform = ""

  switch (position) {
    case "top-right":
      transform = "rotate(90deg)"
      break
    case "bottom-right":
      transform = "rotate(180deg)"
      break
    case "bottom-left":
      transform = "rotate(270deg)"
      break
    default:
      transform = "rotate(0deg)"
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill={color} style={{ transform }}>
      <path d="M0,0 L40,0 C20,0 0,20 0,40 L0,0 Z" />
      <path d="M0,0 L0,20 C0,10 10,0 20,0 L0,0 Z" />
      <circle cx="30" cy="30" r="5" />
      <circle cx="50" cy="10" r="3" />
      <circle cx="10" cy="50" r="3" />
      <path d="M40,0 L60,0 L50,10 L40,0 Z" />
      <path d="M0,40 L0,60 L10,50 L0,40 Z" />
    </svg>
  )
}

// Floating Decorative Elements Component
export const FloatingElements = ({ count = 10, color = "rgba(255, 119, 34, 0.1)" }) => {
  const [elements, setElements] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number; type: string }>
  >([])

  useEffect(() => {
    const newElements = []
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 40,
        delay: Math.random() * 5,
        type: ["lotus", "om", "circle", "dot"][Math.floor(Math.random() * 4)],
      })
    }
    setElements(newElements)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute floating-element"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            animationDelay: `${el.delay}s`,
            opacity: 0.1,
          }}
        >
          {el.type === "lotus" && <LotusSVG size={el.size} color={color} />}
          {el.type === "om" && <OmSVG size={el.size} color={color} />}
          {el.type === "circle" && (
            <div
              style={{
                width: el.size,
                height: el.size,
                borderRadius: "50%",
                border: `1px solid ${color}`,
              }}
            />
          )}
          {el.type === "dot" && (
            <div
              style={{
                width: el.size / 4,
                height: el.size / 4,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// Decorative Corners Component
export const DecorativeCorners = ({ color = "rgba(255, 119, 34, 0.2)", size = 60 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0">
        <CornerSVG position="top-left" size={size} color={color} />
      </div>
      <div className="absolute top-0 right-0">
        <CornerSVG position="top-right" size={size} color={color} />
      </div>
      <div className="absolute bottom-0 right-0">
        <CornerSVG position="bottom-right" size={size} color={color} />
      </div>
      <div className="absolute bottom-0 left-0">
        <CornerSVG position="bottom-left" size={size} color={color} />
      </div>
    </div>
  )
}

// Saffron Divider Component
export const SaffronDivider = () => {
  return (
    <div className="saffron-divider">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LotusSVG size={20} color="var(--saffron)" className="spinning-element" />
      </div>
    </div>
  )
}

// Background Pattern Component
export const BackgroundPattern = ({ opacity = 0.05 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 119, 34, 0.1) 0%, transparent 8%),
          radial-gradient(circle at 80% 40%, rgba(255, 119, 34, 0.1) 0%, transparent 8%),
          radial-gradient(circle at 40% 60%, rgba(255, 119, 34, 0.1) 0%, transparent 8%),
          radial-gradient(circle at 70% 90%, rgba(255, 119, 34, 0.1) 0%, transparent 8%)
        `,
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  )
}

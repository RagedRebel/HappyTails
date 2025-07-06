import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "slideUp" | "slideLeft" | "slideRight"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case "fadeUp":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "fadeLeft":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "fadeRight":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "scale":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        case "slideUp":
          return `${baseClasses} ${durationClass} translate-y-12`
        case "slideLeft":
          return `${baseClasses} ${durationClass} -translate-x-12`
        case "slideRight":
          return `${baseClasses} ${durationClass} translate-x-12`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

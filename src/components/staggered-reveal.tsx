import type { ReactNode } from "react"
import { ScrollReveal } from "./scroll-reveal"

interface StaggeredRevealProps {
  children: ReactNode[]
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "slideUp" | "slideLeft" | "slideRight"
  staggerDelay?: number
  className?: string
}

export function StaggeredReveal({
  children,
  animation = "fadeUp",
  staggerDelay = 100,
  className = "",
}: StaggeredRevealProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal key={index} animation={animation} delay={index * staggerDelay} className={className}>
          {child}
        </ScrollReveal>
      ))}
    </>
  )
}

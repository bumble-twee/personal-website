"use client"

import { useEffect, useRef } from "react"

type PortraitParallaxProps = {
  src: string
  alt: string
}

export function PortraitParallax({ src, alt }: PortraitParallaxProps) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const hero = document.getElementById("top")
    const img = imgRef.current
    if (!hero || !img) return

    let rafId = 0

    const update = () => {
      rafId = 0
      const rect = hero.getBoundingClientRect()
      const scrollMax = window.scrollY + rect.bottom
      const progress =
        scrollMax <= 0 ? 1 : Math.min(Math.max(window.scrollY / scrollMax, 0), 1)
      img.style.transform = `translateY(${progress * -23}%)`
    }

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="aspect-[4/5] w-full overflow-hidden border border-border">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover object-[left_30%]"
      />
    </div>
  )
}

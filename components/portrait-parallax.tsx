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

    const mql = window.matchMedia("(min-width: 768px)")
    let rafId = 0
    let scrollListenerAttached = false

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

    const syncToViewport = () => {
      if (mql.matches) {
        if (!scrollListenerAttached) {
          window.addEventListener("scroll", onScroll, { passive: true })
          scrollListenerAttached = true
        }
        update()
      } else {
        if (scrollListenerAttached) {
          window.removeEventListener("scroll", onScroll)
          scrollListenerAttached = false
        }
        if (rafId) {
          window.cancelAnimationFrame(rafId)
          rafId = 0
        }
        img.style.transform = ""
      }
    }

    syncToViewport()
    mql.addEventListener("change", syncToViewport)

    return () => {
      mql.removeEventListener("change", syncToViewport)
      if (scrollListenerAttached) window.removeEventListener("scroll", onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="aspect-[4/5] w-full overflow-hidden border border-border">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-[center_20%] md:h-[120%] md:object-[left_30%]"
      />
    </div>
  )
}

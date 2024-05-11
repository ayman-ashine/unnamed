"use client"

import { useEffect, useRef } from "react"
import sketch from "@/sketch"

export default function Home() {

  const refSketch = useRef(null)

  useEffect(() => {
    if (refSketch.current)
      refSketch.current = sketch
    return () => {
      refSketch.current.remove()
    }
  }, [sketch])

  return (
    <main
      ref={refSketch}
      className="main"
    >
    </main>
  )

}
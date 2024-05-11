"use client"

import p5 from "p5"
import { useEffect, useRef } from "react"
import sketch from "@/sketch"

export default function Home() {

  const refSketch = useRef(null)

  useEffect(() => {
    refSketch.current = new p5(sketch)
    return () => {
      refSketch.current.remove()
    }
  }, [sketch])

  return (
    <main
      ref={refSketch}
      className="main"
    >
      <header className="header">
        m57
      </header>
    </main>
  )

}
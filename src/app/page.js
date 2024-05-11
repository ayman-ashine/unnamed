"use client"

import { useEffect, useRef } from "react"
import setup_sketch from "@/sketch"

export default function Home() {

  const refSketch = useRef(null)

  useEffect(() => {
    refSketch.current = setup_sketch()
    return () => {
      refSketch.current.remove()
    }
  }, [setup_sketch])

  return (
    <main
      ref={refSketch}
      className="main"
    >
      Home
    </main>
  )

}
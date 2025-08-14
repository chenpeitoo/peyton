"use client";
import React, { useRef, useEffect } from "react";
import type p5Types from "p5";

export type Sketch = (p: p5Types) => void;

export default function P5Canva({ sketch }: { sketch: Sketch }) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: p5Types;
    import("p5").then((p5Module) => {
      p5Instance = new p5Module.default(sketch, canvasRef.current!);
    });
    return () => p5Instance?.remove();
  }, [sketch]);

  return <div ref={canvasRef}></div>;
}

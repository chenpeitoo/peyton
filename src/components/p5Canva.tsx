// src/components/P5Canvas.tsx
"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";

// 定義 p5 sketch 的型別，確保型別安全
export type Sketch = (p: p5) => void;

interface P5CanvasProps {
  sketch: Sketch;
}

const P5Canvas: React.FC<P5CanvasProps> = ({ sketch }) => {
  // 使用 useRef 來引用 DOM 元素，作為 p5 畫布的容器
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 確保只在客戶端（瀏覽器）運行
    // 這對於 Next.js 的伺服器端渲染（SSR）非常重要
    if (typeof window !== "undefined" && sketchRef.current) {
      // 實例化 p5 物件，並傳入你的 sketch 函式和容器
      const p5Instance = new p5(sketch, sketchRef.current);

      // 清理函式：當元件卸載時，移除 p5 畫布
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]); // 依賴 `sketch`，當其變動時會重新初始化

  return <div ref={sketchRef} />;
};

export default P5Canvas;

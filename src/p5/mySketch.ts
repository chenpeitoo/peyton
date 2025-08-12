// src/p5-examples/mySketch.ts
"use client";
import type p5 from "p5";

// 這是你的 p5 程式碼，它將被傳遞給 React 元件
export const mySketch = (p: p5) => {
  p.setup = () => {
    // p5.createCanvas() 會自動將畫布附加到我們指定的容器中
    p.createCanvas(1920, 400);
    p.background(220);
  };

  p.draw = () => {
    p.fill(30, 208, 235);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

"use client";
import Image from "next/image";
import Link from "next/link";
import P5Canvas from "@/components/p5Canva";
import { mySketch } from "@/p5/mySketch";

export default function Home() {
  return (
    <div>
      <div className="font-bold">peyton chen</div>
      <div>actively seeking new opportunities</div>
      <Link
        href={"https://github.com/chenpeitoo"}
        target="_blank"
        rel="noopener noreferer"
        className="block"
      >
        github
      </Link>
      <Link
        href={"https://www.cake.me/peytonchen"}
        target="_blank"
        rel="noopener noreferer"
        className="block"
      >
        resume
      </Link>
      <Link
        href={"https://www.threads.com/@peytonotyep"}
        target="_blank"
        rel="noopener noreferer"
        className="block"
      >
        a glimpse of my daily
      </Link>
      <div>
        <P5Canvas sketch={mySketch} />
      </div>
    </div>
  );
}

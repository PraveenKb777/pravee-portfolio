"use client"
import React from "react";

interface PHoverColorChange {
  label: string;
  url?: string
}
export default function HoverColorChange({ label, url }: PHoverColorChange) {



  return (
    <div onClick={() => {
      window.open(url)

    }} className="text-white text- hover:text-green-500 cursor-pointer underline hover:decoration-green-500">
      {label}
    </div>
  );
}

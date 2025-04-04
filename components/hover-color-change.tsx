"use client";
import React from "react";

interface PHoverColorChange {
  label: string;
  url?: string;
}
export default function HoverColorChange({ label }: { label: string }) {
  return (
    <div className="text-white hover:text-green-500 cursor-pointer underline hover:decoration-green-500">
      {label}
    </div>
  );
}

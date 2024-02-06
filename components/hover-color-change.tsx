import React from "react";

interface PHoverColorChange {
  label: string;
}
export default function HoverColorChange({ label }: PHoverColorChange) {
  return (
    <div className="text-white text- hover:text-green-500 cursor-pointer underline hover:decoration-green-500">
      {label}
    </div>
  );
}

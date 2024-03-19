import React from "react";
import RandomLetters from "./random-letters";

export default function AvailableWork() {
  return (
    <div className="p-3 border-[1px] border-green-400 border-opacity-[.4] my-12 flex items-center max-w-[max-content]">
      <span className="h-2 w-2 bg-red-400 inline-block mx-3 animate-ping rounded-full" />
      <RandomLetters text="Working at revature" />
    </div>
  );
}

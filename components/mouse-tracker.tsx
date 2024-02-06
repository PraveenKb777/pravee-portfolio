"use client";
import React, { useEffect, useState } from "react";

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [grid, setGrid] = useState<number[][]>();
  useEffect(() => {
    document.addEventListener("mousemove", (e): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    const generateRandomGrid = () => {
      const newGrid = Array.from({ length: 30 }, () =>
        Array.from({ length: 50 }, () => Math.round(Math.random()))
      );
      setGrid(newGrid);
    };

    generateRandomGrid();
    let i = setInterval(() => {
      generateRandomGrid();
    }, 2000);

    return () => {
      clearInterval(i);
      removeEventListener("mousemove", (e) => console.log("removed"));
    };
  }, []);

  return (
    <div
      className="fixed movement-div"
      style={{
        position: "fixed",
        left: `calc(${mousePosition.x}px - 250px)`,
        top: `calc(${mousePosition.y}px - 250px)`,
      }}
    >
      <div
        className="sub-div"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${500}, 1fr)`,
        }}
      >
        {grid?.map((row, rowIndex) => (
          <div className="ml-2 text-green-700 text-2xl" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div className="mix-blend-color" key={colIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

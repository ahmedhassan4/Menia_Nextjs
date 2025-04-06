"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className=" p-4 bg-teal-700 text-white"
      >
        Count: {count}
      </button>
    </div>
  );
}

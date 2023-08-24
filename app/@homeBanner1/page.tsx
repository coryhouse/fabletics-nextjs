"use client";

import { useState } from "react";

export default function HomeBanner1() {
  const [showError, setShowError] = useState(false);

  if (showError) throw new Error("Home banner 1 failed to load.");

  return (
    <div style={{ width: "100%", backgroundColor: "blue" }}>
      <h1>Home Banner 1</h1>
      <button onClick={() => setShowError(true)}>Throw error</button>
    </div>
  );
}

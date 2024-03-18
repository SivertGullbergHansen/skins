"use client";

import Image from "next/image";
import { useSteam } from "./hooks/useSteam";
export default function Home() {
  const { steam } = useSteam();

  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      {!steam && <h1 className="font-medium">Sign in to customize skins</h1>}
    </main>
  );
}

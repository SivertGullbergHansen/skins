"use client";

import { SkinEditor } from "@/components/SkinEditor";
import { useSteam } from "../hooks/useSteam";
export default function Home() {
  const { steam } = useSteam();

  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      {steam === null && (
        <h1 className="font-medium">Sign in to customize skins</h1>
      )}
      {steam === undefined && <button className="btn loading"></button>}
      {steam && <SkinEditor />}
    </main>
  );
}

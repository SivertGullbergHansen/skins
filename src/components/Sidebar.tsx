"use client";

import { useSteam } from "@/hooks/useSteam";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import { FaSteam } from "react-icons/fa6";

export function Sidebar() {
  const { steam } = useSteam();

  return (
    <div className="h-full w-[450px] bg-base-200 p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Sivert.io</h1>
      {steam === undefined && <button className="btn loading"></button>}
      {steam === null && (
        <button
          onClick={() => signIn("steam")}
          className="btn btn-primary flex items-center justify-center gap-1"
        >
          <FaSteam className="w-5 h-5" /> Sign in with{" "}
          <span className="font-bold">steam</span>
        </button>
      )}
      {steam && (
        <button
          onClick={() => signOut()}
          className="btn btn-primary flex items-center justify-center gap-1"
        >
          Sign out
        </button>
      )}
    </div>
  );
}
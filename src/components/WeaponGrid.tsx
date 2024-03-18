import React from "react";

export function WeaponGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full grid grid-cols-4 gap-2 justify-start">
      {children}
    </div>
  );
}

import React from "react";

export function WeaponGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 pr-4 gap-2 justify-items-center w-full max-w-[1200px]">
      {children}
    </div>
  );
}

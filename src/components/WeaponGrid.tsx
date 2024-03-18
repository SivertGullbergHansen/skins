import React from "react";

export function WeaponGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-2 justify-items-center">
      {children}
    </div>
  );
}

import React from "react";

export function Card({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => any;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary/10 relative border-2 min-w-[273px] border-secondary/25 rounded-lg p-2 hover:border-secondary scale-[99%] hover:scale-100 transition"
    >
      {children}
    </button>
  );
}

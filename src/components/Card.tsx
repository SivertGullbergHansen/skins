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
      className="bg-primary/10 relative border-2 border-primary/25 rounded-lg p-2 hover:border-primary scale-[99%] hover:scale-100 transition"
    >
      {children}
    </button>
  );
}

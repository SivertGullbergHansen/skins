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
      className="bg-primary/10 relative border-2 w-[256px] h-[320px] border-primary/25 rounded-lg p-2"
    >
      {children}
    </button>
  );
}

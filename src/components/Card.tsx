import React from "react";

export function Card({
  children,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  onClick?: () => any;
  isActive?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-secondary/10 hover:cursor-pointer relative w-full h-full border-secondary/25 border-2 rounded-lg p-2 scale-[99%] hover:scale-100 transition ${
        isActive ? "border-success" : "hover:border-secondary"
      }`}
    >
      {children}
    </div>
  );
}

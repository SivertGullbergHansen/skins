import React from "react";

export function Legend() {
  return (
    <div className="flex flex-col gap-2 absolute -top-4 h-0 justify-end">
      <div className="flex gap-2 items-center font-medium">
        <span className="w-4 h-4 rounded border-2 border-success" /> Equipped
      </div>
      <div className="flex gap-2 items-center font-medium">
        <span className="w-4 h-4 rounded border-2 border-secondary/25" />{" "}
        Unequipped
      </div>
    </div>
  );
}

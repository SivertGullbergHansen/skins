import React from "react";
import { Card } from "./Card";
import { FaPlus } from "react-icons/fa6";

export function AddCard({ onClick }: { onClick: () => any }) {
  return (
    <Card onClick={onClick}>
      <div className="w-full h-full flex flex-col items-center min-h-[234px] justify-center">
        <FaPlus size={64} />
        <h1>Add weapon</h1>
      </div>
    </Card>
  );
}

import React from "react";
import { Card } from "./Card";
import { FaPlus } from "react-icons/fa6";

export function AddCard({ onClick }: { onClick: () => any }) {
  return (
    <Card onClick={onClick}>
      <div className="min-w-[185px] w-full min-h-[234px] h-full flex flex-col items-center justify-center">
        <FaPlus size={64} />
        <h1>Add weapon</h1>
      </div>
    </Card>
  );
}

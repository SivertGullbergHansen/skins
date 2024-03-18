import Image from "next/image";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Card } from "./Card";
import { ItemCardType } from "@/types/ItemCard";

export function ItemCard({ image, onClick, name, weaponName }: ItemCardType) {
  return (
    <Card onClick={onClick}>
      <div className="flex flex-col h-full w-full">
        <div className="releative flex items-center justify-center w-full h-2/3">
          <Image
            src={image}
            alt=""
            width={256}
            height={256}
            className="w-full h-full"
          />
        </div>
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-xs">{weaponName}</h2>
        <div className="p-4">
          <button className="btn btn-circle btn-sm btn-outline">
            <FaRegTrashAlt size={12} />
          </button>
        </div>
      </div>
    </Card>
  );
}

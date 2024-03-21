import Image from "next/image";
import React from "react";
import { FaEdit, FaRegEdit, FaRegTrashAlt, FaUserEdit } from "react-icons/fa";
import { Card } from "./Card";
import { ItemCardType } from "@/types/ItemCardType";
import { FaHandDots, FaPalette } from "react-icons/fa6";

export function ItemCard({
  image,
  onClick,
  name,
  weaponName,
  canDelete,
  onDelete,
  onEdit,
  isActive,
}: ItemCardType) {
  return (
    <Card onClick={onClick} isActive={isActive}>
      <div className="flex flex-col h-full w-full">
        <div className="releative flex items-center justify-center">
          <Image
            src={image}
            alt=""
            width={256}
            height={192}
            className="h-auto w-auto object-contain"
          />
        </div>
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-xs">{weaponName}</h2>
        {canDelete && (
          <div className="p-3 flex gap-2 justify-center">
            <button
              onClick={onEdit}
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaPalette size={12} />
            </button>
            <button
              onClick={onDelete}
              className="btn btn-circle btn-sm btn-outline hover:bg-error hover:border-error"
            >
              <FaRegTrashAlt size={12} />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}

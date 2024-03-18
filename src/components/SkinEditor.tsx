"use client";

import { useSteam } from "@/hooks/useSteam";
import React, { useState } from "react";
import { ItemCard } from "./ItemCard";
import { AddCard } from "./AddCard";
import { ItemCardType } from "@/types/ItemCard";

const dummyData: ItemCardType[] = [
  {
    image:
      "https://raw.githubusercontent.com/ByMykel/CSGO-API/1675e7262bd51fdba1d74664fd4b4fc06a50bb12/public/images/econ/default_generated/weapon_awp_cu_medusa_awp_light.png",
    name: "Medusa",
    weaponName: "AWP",
    weaponType: 1,
  },
];

export function SkinEditor() {
  const [isAddingNewWeapon, setIsAddingNewWeapon] = useState(false);

  const { steam } = useSteam();

  function editSkin() {}

  return (
    <div className=" w-full grid grid-cols-4">
      {!isAddingNewWeapon && (
        <>
          {dummyData.map((card, index) => (
            <ItemCard key={index} {...card} onClick={() => {}} />
          ))}
          <AddCard onClick={() => {}} />
        </>
      )}
    </div>
  );
}

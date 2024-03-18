"use client";

import { useSteam } from "@/hooks/useSteam";
import React, { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import { AddCard } from "./AddCard";
import { ItemCardType } from "@/types/ItemCard";
import { AllWeapons } from "./AllWeapons";
import { FaArrowLeft } from "react-icons/fa6";
import { WeaponGrid } from "./WeaponGrid";

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
  const [excludedWeapons, setExcludedWeapons] = useState<string[]>([]);
  const [editingSkin, setEditingSkin] = useState<undefined | string>(undefined);

  useEffect(() => {
    setExcludedWeapons(dummyData.map((skin) => skin.weaponName));
  }, []);

  const { steam } = useSteam();

  function editSkin(weaponType: string) {
    setEditingSkin(weaponType);
  }

  return (
    <>
      {!isAddingNewWeapon && (
        <div>
          <h1 className="font-bold text-xl">Your skins</h1>
          <WeaponGrid>
            {dummyData.map((card, index) => (
              <ItemCard key={index} {...card} canDelete onClick={() => {}} />
            ))}
            <AddCard
              onClick={() => {
                setIsAddingNewWeapon(true);
              }}
            />
          </WeaponGrid>
        </div>
      )}

      {isAddingNewWeapon && (
        <div className="w-full h-full flex flex-col">
          <div className="flex items-center justify-start p-4 gap-4">
            <button
              onClick={() => setIsAddingNewWeapon(false)}
              className="btn btn-secondary flex items-center justify-center gap-2"
            >
              <FaArrowLeft size={16} />
              Back
            </button>
            <h1 className="font-bold text-xl">Add weapon</h1>
          </div>
          <AllWeapons editWeapon={editSkin} excluded={excludedWeapons} />
        </div>
      )}
    </>
  );
}

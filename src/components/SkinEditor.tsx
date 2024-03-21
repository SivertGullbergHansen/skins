"use client";
import React, { useState } from "react";
import { ItemCard } from "./ItemCard";
import { AddCard } from "./AddCard";
import { SkinType } from "@/types/ItemCardType";
import { AllWeapons } from "./AllWeapons";
import { FaArrowLeft } from "react-icons/fa6";
import { WeaponGrid } from "./WeaponGrid";
import { Legend } from "./Legend";

export function SkinEditor() {
  const [isAddingNewWeapon, setIsAddingNewWeapon] = useState(false);
  const [editingSkin, setEditingSkin] = useState<undefined | string>(undefined);
  const [equippedSkins, setEquippedSkins] = useState<number[]>([]);
  const [skins, setSkins] = useState<SkinType[]>([
    {
      id: 0,
      image:
        "https://raw.githubusercontent.com/ByMykel/CSGO-API/1675e7262bd51fdba1d74664fd4b4fc06a50bb12/public/images/econ/default_generated/weapon_awp_cu_medusa_awp_light.png",
      name: "Medusa",
      type: "Rifle",
      weaponName: "AWP",
    },
  ]);

  function editSkin(weaponType: string) {
    setEditingSkin(weaponType);
  }

  function deleteSkin(skin: SkinType) {
    setSkins((old) => old.filter((skin) => skin.id !== skin.id));
  }

  return (
    <>
      {!isAddingNewWeapon && (
        <div className="relative">
          <Legend />
          <h1 className="font-bold text-xl">Your skins</h1>
          <WeaponGrid>
            {skins.map((skinData, index) => (
              <ItemCard
                key={index}
                {...skinData}
                isActive={equippedSkins.includes(skinData.id)}
                canDelete
                onDelete={() => deleteSkin(skinData)}
                onClick={() => {
                  const exists = equippedSkins.findIndex(
                    (value) => value === skinData.id
                  );
                  if (exists > -1) {
                    setEquippedSkins(
                      equippedSkins.filter((skinId) => skinId !== skinData.id)
                    );
                  } else {
                    setEquippedSkins((old) => [...old, skinData.id]);
                  }
                }}
              />
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
          <AllWeapons editWeapon={editSkin} />
        </div>
      )}
    </>
  );
}

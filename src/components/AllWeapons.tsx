import React, { useState } from "react";
import baseKnives from "@/data/weapons/base_knives.json";
import baseRifles from "@/data/weapons/base_rifles.json";
import basePistols from "@/data/weapons/base_pistols.json";
import { ItemCard } from "./ItemCard";
import { WeaponGrid } from "./WeaponGrid";
import { SkinType } from "@/types/ItemCardType";
import toast from "react-hot-toast";

const mappedWeapons: {
  [type: string]: { name: string; url: string; type: string }[];
} = {};
mappedWeapons[baseKnives[0].type] = baseKnives;
mappedWeapons[baseRifles[0].type] = baseRifles;
mappedWeapons[basePistols[0].type] = basePistols;

export function AllWeapons({
  goBack,
  setSkins,
}: {
  goBack: () => any;
  setSkins: (newSkins: SkinType[]) => any;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full flex flex-col gap-12 h-full overflow-auto">
      {isLoading ? (
        <div className="w-full h-full grid place-items-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        Object.keys(mappedWeapons).map((type) => (
          <div
            key={type}
            className="flex flex-col gap-2 items-start justify-center"
          >
            <h1 className="font-bold text-lg">{type}</h1>
            <WeaponGrid>
              {mappedWeapons[type].map((weapon) => (
                <ItemCard
                  weaponName=""
                  id={0}
                  type={weapon.type}
                  onClick={() => {
                    // Here we should fetch the API and have it add our weapon to the database of saved skins.
                    // Then when we receive an OK we close the component using the goBack function.
                    setIsLoading(true);

                    fetch(`/api/skin/add`, {
                      cache: "no-store",
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: weapon.name,
                      }),
                    }).then((response) => {
                      if (response.ok) goBack();
                      else {
                        toast.error(`Failed to add ${weapon.name}`);
                        setIsLoading(false);
                      }
                    });
                  }}
                  image={weapon.url}
                  name={weapon.name}
                  key={weapon.name}
                />
              ))}
            </WeaponGrid>
          </div>
        ))
      )}
    </div>
  );
}

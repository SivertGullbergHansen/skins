import React from "react";
import baseKnives from "@/data/weapons/base_knives.json";
import baseRifles from "@/data/weapons/base_rifles.json";
import basePistols from "@/data/weapons/base_pistols.json";
import { ItemCard } from "./ItemCard";
import { WeaponGrid } from "./WeaponGrid";

const mappedWeapons: {
  [type: string]: { name: string; url: string; type: string }[];
} = {};
mappedWeapons[baseKnives[0].type] = baseKnives;
mappedWeapons[baseRifles[0].type] = baseRifles;
mappedWeapons[basePistols[0].type] = basePistols;

export function AllWeapons({
  editWeapon,
}: {
  editWeapon: (name: string) => any;
}) {
  return (
    <div className="w-full flex flex-col gap-12 h-full overflow-auto">
      {Object.keys(mappedWeapons).map((type) => (
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
                onClick={() => editWeapon(weapon.name)}
                image={weapon.url}
                name={weapon.name}
                key={weapon.name}
              />
            ))}
          </WeaponGrid>
        </div>
      ))}
    </div>
  );
}

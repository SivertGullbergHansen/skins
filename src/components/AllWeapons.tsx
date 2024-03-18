import React from "react";
import baseWeapons from "@/data/base.json";
import { ItemCard } from "./ItemCard";
import { WeaponGrid } from "./WeaponGrid";

const mappedWeapons: { [type: string]: { name: string; url: string }[] } = {};
baseWeapons.forEach((weapon) => {
  if (!mappedWeapons[weapon.type]) mappedWeapons[weapon.type] = [];
  mappedWeapons[weapon.type].push(weapon);
});

export function AllWeapons({ excluded }: { excluded: string[] }) {
  return (
    <div className="w-full flex flex-col gap-12 h-full overflow-auto">
      {Object.keys(mappedWeapons).map((type) => (
        <div key={type} className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-lg">{type}</h1>
          <WeaponGrid>
            {mappedWeapons[type].map(
              (weapon) =>
                !excluded.includes(weapon.name) && (
                  <ItemCard
                    image={weapon.url}
                    name={weapon.name}
                    weaponName=""
                    weaponType={0}
                    key={weapon.name}
                  />
                )
            )}
          </WeaponGrid>
        </div>
      ))}
    </div>
  );
}

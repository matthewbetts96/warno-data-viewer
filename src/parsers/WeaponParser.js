import { AmmunitionParser } from "./AmmunitionParser";
const fs = window.require("fs");

export const WeaponParser = () => {
  const ammo = AmmunitionParser();
  try {
    var file = fs.readFileSync(
      "C:/SteamLibrary/steamapps/common/WARNO/Mods/NoActivationPointsMod/GameData/Generated/Gameplay/Gfx/WeaponDescriptor.ndf",
      "utf8"
    );

    const data = Object.assign(
      {},
      ...file
        .toString()
        .split("export")
        .slice(1)
        .map((unit, idx) => {
          if (idx < 0) {
            return {};
          }
          const name = unit
            .split("is TWeaponManagerModuleDescriptor")[0]
            .trim();

          const weaponData = unit.replace(/ {2,}/g, "\n").split(/[\n=]+/);

          return {
            [name]: weaponData
              .map((item, idx) => {
                if (item.includes("Ammunition")) {
                  const weaponName = weaponData[idx + 1].replace(/ ~\//gi, "");
                  return {
                    weaponName: weaponName,
                    weaponCount: weaponData[idx + 25].replace(" ", ""),
                    weaponStats: ammo[weaponName],
                  };
                }
                return undefined;
              })
              .filter((x) => !!x),
          };
        })
    );
    return {
      ammunition: ammo,
      weapons: data,
    };
  } catch (e) {
    console.log("Error:", e.stack);
  }
};

export default WeaponParser;

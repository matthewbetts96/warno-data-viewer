const fs = window.require("fs");

const genericClean = (i) => {
  return i.replace(/[ =']*/g, "");
};

const removeAllBarNumbers = (i) => {
  if (i === undefined) {
    return undefined;
  }
  return i.replace(/[^0-9.]*/g, "");
};

const traitsTokenFormatter = (i) => {
  return i
    .replace(/[,[\] ]/g, "")
    .split("'")
    .filter((x) => !!x)
    .join(" | ");
};

const removeAllExceptBool = (i) => {
  //naive approach, regex didn't want to play ball
  if (i.toLowerCase().includes("true")) {
    return true;
  }

  if (i.toLowerCase().includes("false")) {
    return false;
  }

  return undefined;
};

export const AmmunitionParser = () => {
  try {
    var data = fs.readFileSync(
      "C:/SteamLibrary/steamapps/common/WARNO/Mods/NoActivationPointsMod/GameData/Generated/Gameplay/Gfx/Ammunition.ndf",
      "utf8"
    );

    const ammoData = Object.assign(
      {},
      ...data
        .toString()
        .split("export")
        .slice(1)
        .map((unit) => {
          const name = unit.split("is TAmmunitionDescriptor")[0].trim();
          const unitData = unit
            .split("is TAmmunitionDescriptor")[1]
            .replace(/ {2,}/g, "\n")
            .split(/[\n=]+/)
            .filter((item) => {
              if (
                item === "" ||
                item.includes("//") ||
                item === ")" ||
                item === "("
              ) {
                return false;
              }

              return true;
            });

          const valuesToFind = [
            {
              name: "Name",
              formatter: genericClean,
            },
            {
              name: "TypeName",
              formatter: genericClean,
            },
            {
              name: "Caliber",
              formatter: genericClean,
            },
            {
              name: "TraitsToken",
              formatter: traitsTokenFormatter,
            },
            {
              name: "Level",
              formatter: genericClean,
            },
            {
              name: "Puissance",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxTirs",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxTirs_Min",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxTirs_Max",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxFx",
              formatter: genericClean,
            },
            {
              name: "PorteeMaximale",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PorteeMinimale",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PorteeMinimaleTBA",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PorteeMaximaleTBA",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PorteeMinimaleHA",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PorteeMaximaleHA",
              formatter: removeAllBarNumbers,
            },
            {
              name: "AltitudeAPorteeMinimale",
              formatter: removeAllBarNumbers,
            },
            {
              name: "AltitudeAPorteeMaximale",
              formatter: removeAllBarNumbers,
            },
            {
              name: "AffecteParNombre",
              formatter: genericClean,
            },
            {
              name: "AngleDispersion",
              formatter: genericClean,
            },
            {
              name: "DispersionAtMaxRange",
              formatter: removeAllBarNumbers,
            },
            {
              name: "DispersionAtMinRange",
              formatter: removeAllBarNumbers,
            },
            {
              name: "CorrectedShotAimtimeMultiplier",
              formatter: genericClean,
            },
            {
              name: "RadiusSplashPhysicalDamages",
              formatter: removeAllBarNumbers,
            },
            {
              name: "PhysicalDamages",
              formatter: removeAllBarNumbers,
            },
            {
              name: "RadiusSplashSuppressDamages",
              formatter: removeAllBarNumbers,
            },
            {
              name: "SuppressDamages",
              formatter: removeAllBarNumbers,
            },
            {
              name: "RayonPinned",
              formatter: removeAllBarNumbers,
            },
            {
              name: "AllowSuppressDamageWhenNoImpact",
              formatter: removeAllExceptBool,
            },
            {
              name: "DisplaySalveAccuracy",
              formatter: removeAllExceptBool,
            },
            {
              name: "TirIndirect",
              formatter: removeAllExceptBool,
            },
            {
              name: "TirReflexe",
              formatter: removeAllExceptBool,
            },
            {
              name: "InterdireTirReflexe",
              formatter: removeAllExceptBool,
            },
            {
              name: "TempsAnimation",
              formatter: genericClean,
            },
            {
              name: "NoiseDissimulationMalus",
              formatter: genericClean,
            },
            {
              name: "ShotsBeforeMaxNoise",
              formatter: genericClean,
            },
            {
              name: "TargetsDistricts",
              formatter: removeAllExceptBool,
            },
            {
              name: "TempsDeVisee",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxSalves",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxSalves_Min",
              formatter: genericClean,
            },
            {
              name: "TempsEntreDeuxSalves_Max",
              formatter: genericClean,
            },
            {
              name: "SupplyCost",
              formatter: genericClean,
            },
            {
              name: "NbSalvosShootOnPosition",
              formatter: genericClean,
            },
            {
              name: "CanShootOnPosition",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanShootWhileMoving",
              formatter: removeAllExceptBool,
            },
            {
              name: "NbrProjectilesSimultanes",
              formatter: genericClean,
            },
            {
              name: "AffichageMunitionParSalve",
              formatter: genericClean,
            },
            {
              name: "SmokeDescriptor",
              formatter: genericClean,
            },
            {
              name: "TargetUnitCenter",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanHarmInfantry",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanHarmVehicles",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanHarmHelicopters",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanHarmAirplanes",
              formatter: removeAllExceptBool,
            },
            {
              name: "CanHarmGuidedMissiles",
              formatter: removeAllExceptBool,
            },
            {
              name: "IsHarmlessForAllies",
              formatter: removeAllExceptBool,
            },
            {
              name: "PiercingWeapon",
              formatter: removeAllExceptBool,
            },
            {
              name: "FlightTimeForSpeed",
              formatter: genericClean,
            },
            {
              name: "DistanceForSpeed",
              formatter: removeAllBarNumbers,
            },
          ];

          return {
            [name]: valuesToFind.map(
              ({
                name,
                formatter = (i) => i,
                indexOffset = 1,
                overrideName,
              }) => {
                const idx = unitData.findIndex((i) => i.includes(name));
                const key = overrideName || name;
                if (idx === -1) {
                  return {
                    [key]: null,
                  };
                }

                return {
                  [key]: formatter(unitData[idx + indexOffset]),
                };
              }
            ),
          };
        })
    );

    return ammoData;
  } catch (e) {
    console.log("Error:", e.stack);
  }
};

export default AmmunitionParser;

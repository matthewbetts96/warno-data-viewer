import { WeaponParser } from "./WeaponParser";
const fs = window.require("fs");

const genericClean = (i) => {
  return i.replace(/[ =']*/g, "");
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

const removeAllBarNumbers = (i) => {
  if (i === undefined) {
    return undefined;
  }
  return i.replace(/[^0-9.]*/g, "");
};

const weaponManagerFormatter = (i) => {
  return i.split("/")[3];
};

export const UnitParser = () => {
  const { weapons, ammunition } = WeaponParser();
  try {
    var data = fs.readFileSync(
      "C:/SteamLibrary/steamapps/common/WARNO/Mods/NoActivationPointsMod/GameData/Generated/Gameplay/Gfx/UniteDescriptor.ndf",
      "utf8"
    );

    const allData = data.toString().split("export").slice(1);
    const unitData = allData
      .map((foo) => {
        const other = foo
          .split("is TEntityDescriptor")[1]
          .replace(/ {2,}/g, "\n")
          .split(/[\n=]+/);
        const cleanedData = other.filter((item) => {
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

        // console.log(cleanedData);

        const valuesToFind = [
          { name: "TypeUnitValue", formatter: genericClean },
          { name: "ClassNameForDebug", formatter: genericClean },
          { name: "Nationalite", formatter: genericClean },
          { name: "AcknowUnitType", formatter: genericClean },
          { name: "MotherCountry", formatter: genericClean },
          { name: "TypeUnitFormation", formatter: genericClean },
          { name: "UseFollowCam", formatter: removeAllExceptBool },
          { name: "StickToGround", formatter: removeAllExceptBool },
          { name: "InGeoDb", formatter: removeAllExceptBool },
          { name: "PorteurMustBeVisible", formatter: removeAllExceptBool },
          { name: "ClampInWorld", formatter: removeAllExceptBool },
          { name: "ClampOutMap", formatter: removeAllExceptBool },
          { name: "HasNearlyNullBBox", formatter: removeAllExceptBool },
          { name: "Radius", formatter: removeAllBarNumbers },
          { name: "RelativeScanningPosition", formatter: genericClean },
          { name: "LowAltitudeFlyingAltitude", formatter: removeAllBarNumbers },
          { name: "NearGroundFlyingAltitude", formatter: removeAllBarNumbers },
          {
            name: "CanWinExperience",
            formatter: removeAllExceptBool,
          },
          {
            name: "UnitConcealmentBonus",
            formatter: genericClean,
          },
          {
            name: "VisionUnitType",
            formatter: genericClean,
          },
          {
            name: "AlwaysComputeLoS",
            formatter: removeAllExceptBool,
          },
          {
            name: "UnitIsStealth",
            formatter: removeAllExceptBool,
          },
          {
            name: "VisionObstructionType",
            formatter: genericClean,
          },
          {
            name: "GroundDissimulationModifierType",
            formatter: genericClean,
          },
          {
            name: "AutoCoverRange",
            formatter: removeAllBarNumbers,
          },
          {
            name: "UseTerrainsForEscape",
            formatter: removeAllExceptBool,
          },
          {
            name: "StunFreezesUnits",
            formatter: removeAllExceptBool,
          },
          {
            name: "ArmorDescriptorFront",
            formatter: removeAllBarNumbers,
          },
          {
            name: "ArmorDescriptorSides",
            formatter: removeAllBarNumbers,
          },
          {
            name: "ArmorDescriptorRear",
            formatter: removeAllBarNumbers,
          },
          {
            name: "ArmorDescriptorTop",
            formatter: removeAllBarNumbers,
          },
          {
            name: "MaxDamages",
            formatter: genericClean,
          },
          {
            name: "HitRollSize",
            formatter: genericClean,
          },
          {
            name: "HitRollECM",
            formatter: genericClean,
          },
          {
            name: "AutoOrientation",
            formatter: removeAllExceptBool,
          },
          {
            name: "IsTargetableAsBoat",
            formatter: removeAllExceptBool,
          },
          {
            name: "Dangerousness",
            formatter: genericClean,
            indexOffset: 2,
          },
          {
            name: "MaxSpeed",
            formatter: removeAllBarNumbers,
          },
          {
            name: "UnitMovingType",
            formatter: genericClean,
          },
          {
            name: "VitesseCombat",
            formatter: removeAllBarNumbers,
          },
          {
            name: "SpeedBonusOnRoad",
            formatter: genericClean,
          },
          {
            name: "MaxAcceleration",
            formatter: removeAllBarNumbers,
            indexOffset: 1,
          },
          {
            name: "MaxDeceleration",
            formatter: removeAllBarNumbers,
            indexOffset: 1,
          },
          {
            name: "TempsDemiTour",
            formatter: genericClean,
          },
          {
            name: "StartTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "StopTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "RotationStartTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "RotationStopTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "FuelCapacity",
            formatter: genericClean,
          },
          {
            name: "FuelMoveDuration",
            formatter: genericClean,
          },
          {
            name: "OpticalStrength",
            formatter: removeAllBarNumbers,
          },
          {
            name: "OpticalStrengthAltitude",
            formatter: removeAllBarNumbers,
          },
          {
            name: "NbSeatsOccupied",
            formatter: genericClean,
          },
          {
            name: "TimeToLoad",
            formatter: genericClean,
          },
          {
            name: "IsTowable",
            formatter: removeAllExceptBool,
          },
          {
            //todo do we need this?
            name: "MissileCarriage",
            formatter: genericClean,
          },
          {
            name: "Factory",
            formatter: genericClean,
          },
          {
            name: "ProductionYear",
            formatter: removeAllBarNumbers,
          },
          {
            name: "ProductionTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "Resource_CommandPoints",
            formatter: removeAllBarNumbers,
            indexOffset: 0,
          },
          {
            name: "WeaponManager",
            indexOffset: 3,
            formatter: weaponManagerFormatter,
          },
          {
            name: "NbSoldatInGroupeCombat",
            formatter: genericClean,
          },
          {
            name: "UpwardSpeed",
            formatter: removeAllBarNumbers,
          },
          {
            name: "LateralSpeed",
            formatter: removeAllBarNumbers,
          },
          {
            name: "TorqueManoeuvrability",
            formatter: genericClean,
          },
          {
            name: "CyclicManoeuvrability",
            formatter: genericClean,
          },
          {
            name: "MaxInclination",
            formatter: genericClean,
          },
          {
            name: "GFactorLimit",
            formatter: genericClean,
          },
          {
            name: "RotorArea",
            formatter: genericClean,
          },
          {
            name: "Mass",
            formatter: genericClean,
          },
          {
            name: "EvacuationTime",
            formatter: removeAllBarNumbers,
          },
          {
            name: "TravelDuration",
            formatter: removeAllBarNumbers,
          },
          {
            name: "TAirplaneMovementModuleDescriptor",
            overrideName: "Altitude",
            indexOffset: 2,
            formatter: removeAllBarNumbers,
          },
          {
            name: "AltitudeMin",
            formatter: removeAllBarNumbers,
          },
          {
            name: "Speed",
            formatter: removeAllBarNumbers,
          },
          {
            name: "AgilityRadius",
            formatter: removeAllBarNumbers,
          },
          {
            name: "PitchAngle",
            formatter: removeAllBarNumbers,
          },
          {
            name: "RollAngle",
            formatter: removeAllBarNumbers,
          },
          {
            name: "TAirplaneMovementModuleDescriptor",
            overrideName: "RollSpeed",
            indexOffset: 22,
            formatter: removeAllBarNumbers,
          },
          {
            name: "EvacAngle",
            formatter: removeAllBarNumbers,
          },
          {
            name: "IdentifyBaseProbability",
            formatter: removeAllBarNumbers,
          },
          {
            name: "TimeBetweenEachIdentifyRoll",
            formatter: removeAllBarNumbers,
          },
          {
            name: "DetectionTBA",
            formatter: removeAllBarNumbers,
          },
        ];

        return valuesToFind.map(
          ({ name, formatter = (i) => i, indexOffset = 1, overrideName }) => {
            const idx = cleanedData.findIndex((i) => i.includes(name));
            const key = overrideName || name;

            if (key === "WeaponManager") {
              const weaponName = cleanedData[idx + indexOffset]
                .split("/")
                .at(-1);
              return {
                weapons: weapons[weaponName],
              };
            }

            if (idx === -1) {
              return {
                [key]: null,
              };
            }

            return {
              [key]: formatter(cleanedData[idx + indexOffset]),
            };
          }
        );
      })
      .map((i) => {
        const obj = Object.assign({}, ...i);
        const name = obj.ClassNameForDebug;
        return { [name]: obj };
      });

    const units = Object.assign({}, ...unitData);
    return { units, ammunition, weapons };
  } catch (e) {
    console.log("Error:", e.stack);
  }
};

export default UnitParser;

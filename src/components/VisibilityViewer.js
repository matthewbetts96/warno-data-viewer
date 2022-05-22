import React from "react";
import Card from "@mui/material/Card";
import SingleDataPoint from "./SingleDataPoint";
import get from "lodash/get";

export const VisibilityViewer = ({ unit }) => {
  const items = [
    {
      title: "Optical Strength (Ground)",
      value: get(unit, "OpticalStrength"),
      tooltip:
        "Optics for ground units. Values are 40 (Bad), 60 (Mediocre), 80 (Normal), 120 (Good), 170 (Very Good) or 220 (Exceptional) ",
    },
    {
      title: "Optical Strength (Air)",
      value: get(unit, "OpticalStrengthAltitude"),
      tooltip: "Optics for air units. Not shown in the ingame UI currently.",
    },
    {
      title: "Stealth",
      value: get(unit, "UnitConcealmentBonus"),
      tooltip:
        "Stealth value. Can either be 1.0 (Bad), 1.5 (Mediocre), 2.0 (Good) or 2.5 (Exceptional)",
    },
    {
      title: "Identify Probability",
      value: get(unit, "IdentifyBaseProbability"),
      tooltip: "",
    },
    {
      title: "Time Between Identify Roll",
      value: get(unit, "TimeBetweenEachIdentifyRoll"),
      tooltip: "",
    },
    //todo fix the value of these being -0.1 instead of 10%
    {
      title: "ECM",
      value: get(unit, "HitRollECM"),
      tooltip: "ECM value of the unit.",
    },
    {
      title: "DetectionTBA",
      value: get(unit, "DetectionTBA"),
      tooltip:
        "Maximum range at which a unit can see an unidentified helicopter.",
    },
  ];

  return (
    <Card
      sx={{
        width: 400,
        textAlign: "center",
        padding: "10px",
      }}
    >
      {items.map(({ title, value, tooltip }) => {
        return (
          <SingleDataPoint
            key={title}
            title={title}
            value={value}
            tooltip={tooltip}
          />
        );
      })}
    </Card>
  );
};

export default VisibilityViewer;

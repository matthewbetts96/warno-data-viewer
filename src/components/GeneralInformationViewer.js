import React from "react";
import Card from "@mui/material/Card";
import SingleDataPoint from "./SingleDataPoint";
import get from "lodash/get";

export const GeneralInformationViewer = ({ unit }) => {
  const items = [
    {
      title: "Name",
      value: get(unit, "ClassNameForDebug"),
      tooltip: "Name of the unit in the files.",
    },
    {
      title: "Mother Country",
      value: get(unit, "MotherCountry"),
      tooltip: "Country of origin.",
    },
    {
      title: "Quality",
      value: "TODO",
      tooltip: "",
    },
    {
      title: "Specialties",
      value: "TODO",
      tooltip: "",
    },
    {
      title: "Cost",
      value: get(unit, "Resource_CommandPoints"),
      tooltip: "Cost to buy the unit.",
    },
    {
      title: "Production Time",
      value: get(unit, "ProductionTime"),
      tooltip: "Time for the unit to arrive on the battlefield.",
    },
    {
      title: "DeploymentShift",
      value: "todo",
      tooltip: "",
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

export default GeneralInformationViewer;

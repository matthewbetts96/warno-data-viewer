import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { getArmourValues } from "../selectors";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";
import SingleDataPoint from "./SingleDataPoint";
import get from "lodash/get";

export const ArmourFuelViewer = ({ unit }) => {
  const { front, rear, sides, top } = getArmourValues(unit);
  const items = [
    {
      title: "Fuel Capacity",
      value: get(unit, "FuelCapacity"),
      tooltip: "Fuel Capacity in the vehicle",
    },
    {
      title: "FuelMoveDuration",
      value: get(unit, "FuelMoveDuration"),
      tooltip: "Duration that the vehicle can move for.",
    },
  ];

  return (
    <Card
      sx={{
        width: 400,
        textAlign: "center",
      }}
    >
      <CardContent>
        <div>
          <Tooltip title="Top Armour">
            <div>Top: {top}</div>
          </Tooltip>
          <StyledDiv>
            <Tooltip title="Rear Armour">
              <div>Rear: {rear}</div>
            </Tooltip>
            <div>
              <img src={require("../images/tank.svg").default} alt="tankSvg" />
            </div>
            <Tooltip title="Front Armour">
              <div>Front: {front}</div>
            </Tooltip>
          </StyledDiv>
          <Tooltip title="Side Armour">
            <div>Side: {sides}</div>
          </Tooltip>
        </div>
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
      </CardContent>
    </Card>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 100%;
  }
`;

export default ArmourFuelViewer;

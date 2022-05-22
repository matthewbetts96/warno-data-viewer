import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { getArmourValues } from "../selectors";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

export const ArmourViewer = ({ unit }) => {
  const { front, rear, sides, top } = getArmourValues(unit);

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

export default ArmourViewer;

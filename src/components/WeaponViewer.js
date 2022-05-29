import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const WeaponViewer = ({ weapons }) => {
  return (
    <Wrapper>
      <Typography>Weapons</Typography>
      {weapons.map(({ weaponName, weaponCount, weaponStats }) => {
        const { TraitsToken } = Object.assign({}, ...weaponStats);
        console.log(TraitsToken);
        return (
          <Accordion key={weaponName}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {`${weaponName} [ ${TraitsToken} ] (${weaponCount})`}
              </Typography>
            </AccordionSummary>
          </Accordion>
        );
      })}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
`;

export default WeaponViewer;

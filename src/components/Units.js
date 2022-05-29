import React from "react";
import Search from "./Search";
import ArmourFuelViewer from "./ArmourFuelViewer";
import GeneralInformationViewer from "./GeneralInformationViewer";
import VisibilityViewer from "./VisibilityViewer";
import WeaponViewer from "./WeaponViewer";
import styled from "styled-components";
import Button from "@mui/material/Button";
import get from "lodash/get";

export const Units = ({
  unitNameList = [],
  selectedUnits,
  selectedUnitsData,
  idx,
  handleSearchBoxChange,
  removeUnitComparision,
}) => {
  // debugger;
  const currentUnit = selectedUnitsData[idx];
  const weapons = get(currentUnit, "weapons");

  return (
    <OuterWrapper>
      <span>
        <Search
          unitNameList={unitNameList}
          selectedUnits={selectedUnits}
          handleSearchBoxChange={handleSearchBoxChange}
          idx={idx}
        />
        <span>
          <Button
            variant="contained"
            onClick={() => {
              removeUnitComparision(idx);
            }}
          >
            Remove
          </Button>
        </span>
      </span>
      <DetailsWrapper>
        <GeneralInformationViewer unit={currentUnit} />
        <ArmourFuelViewer unit={currentUnit} />
        <VisibilityViewer unit={currentUnit} />
        <WeaponViewer weapons={weapons} />
      </DetailsWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
  > span {
    display: flex;
    > div {
      width: 100%;
    }
    > span {
      align-self: center;
      padding-left: 5px;
    }
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  > div {
    margin: 10px;
  }
`;

export default Units;

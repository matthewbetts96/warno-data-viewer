import React from "react";
import Search from "./Search";
import ArmourViewer from "./ArmourViewer";
import GeneralInformationViewer from "./GeneralInformationViewer";
import VisibilityViewer from "./VisibilityViewer";
import styled from "styled-components";

export const Units = ({
  unitNameList = [],
  selectedUnit,
  setSelectedUnit,
  selectedUnitData,
}) => {
  if (!selectedUnitData || !selectedUnitData.weapons) {
    return;
  }
  console.log(selectedUnitData);
  return (
    <div style={{ width: "100%" }}>
      <Search
        unitNameList={unitNameList}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
      />
      <DetailsWrapper>
        <GeneralInformationViewer unit={selectedUnitData} />
        <ArmourViewer unit={selectedUnitData} />
        <VisibilityViewer unit={selectedUnitData} />
      </DetailsWrapper>
    </div>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 10px;
  }
`;

export default Units;

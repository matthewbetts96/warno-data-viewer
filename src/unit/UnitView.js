import React from "react";
import UnitSelector from "./UnitSelector";
import ArmourRadar from "../charts/ArmourRadar";
import styled from "styled-components";

export const UnitView = ({ allData, nameList: { units } }) => {
  const [selectedUnits, setSelectedUnits] = React.useState([]);

  const selectedUnitsData = selectedUnits.map((i) => {
    return allData.units[i];
  });

  //   console.log(selectedUnits);
  return (
    <div>
      <UnitSelector
        nameList={units}
        selectedUnits={selectedUnits}
        setSelectedUnits={setSelectedUnits}
      />
      <Wrapper>
        <ArmourRadar units={selectedUnitsData} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
  height: 400px;
`;

export default UnitView;

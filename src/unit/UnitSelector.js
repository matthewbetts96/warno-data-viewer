import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import get from "lodash/get";
import Chip from "@mui/material/Chip";

export const UnitSelector = ({ nameList, selectedUnits, setSelectedUnits }) => {
  const handleDelete = (i) => {
    setSelectedUnits(
      selectedUnits.filter((e) => {
        return e !== i;
      })
    );
  };

  //todo move magic number to config
  const warning =
    selectedUnits.length < 10 ? (
      <div />
    ) : (
      <div>max number of units selected</div>
    );

  return (
    <Wrapper>
      {warning}
      <Search
        nameList={nameList}
        handleSearchBoxChange={(i) => {
          //todo move magic number to config
          if (
            selectedUnits.length < 10 &&
            !selectedUnits.includes(get(i, "label")) &&
            i !== null
          ) {
            setSelectedUnits([...selectedUnits, i.label]);
          }
        }}
      />
      {selectedUnits.map((item) => {
        return (
          <Chip
            key={item}
            label={item}
            onDelete={(_) => {
              //this is hacky scoping
              handleDelete(item);
            }}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

export default UnitSelector;

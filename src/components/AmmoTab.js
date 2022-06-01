import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";

//todo change idx for map
export const AmmoTab = ({ nameList, allData }) => {
  //which item are currently selected
  const [selectedAmmo, setSelectedAmmo] = useState([]);
  //the data of the selected item
  const [selectedAmmoData, setSelectedUnitsData] = useState([]);

  useEffect(() => {
    const { ammunition } = allData;
    const { ammoLabels } = nameList;
    // console.log(ammunition, ammoLabels);

    setSelectedAmmo([allData[0]]);
    setSelectedUnitsData([ammunition[ammoLabels[0].label]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(selectedAmmo);
  // console.log(selectedAmmoData);
  return (
    <div>
      {/* {selectedAmmo.map((_, idx) => {})} */}
      {/* <Search
        nameList={unitNameList}
        selectedItems={selectedUnits}
        handleSearchBoxChange={handleSearchBoxChange}
        idx={idx}
      /> */}
    </div>
  );
};

export default AmmoTab;

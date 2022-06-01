import React, { useState, useEffect } from "react";
import { UnitParser } from "./parsers/UnitParser";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UnitView from "./unit/UnitView";

function App() {
  //what tab the user is on
  const [tabValue, setTabValue] = React.useState("1");
  //all data
  const [allData, setAllData] = useState({
    units: {},
    weapons: {},
    ammunition: {},
  });

  //name lists for
  const [nameList, setNameList] = useState({
    units: [],
    weapons: [],
    ammo: [],
  });

  //inital run to parse and store the data and set inital values
  useEffect(() => {
    const { units, weapons, ammunition } = UnitParser();

    const unitLabels = Object.keys(units).map((i) => {
      return { label: i };
    });
    const weaponLabels = Object.keys(weapons).map((i) => {
      return { label: i };
    });
    const ammoLabels = Object.keys(ammunition).map((i) => {
      return { label: i };
    });

    setAllData({
      units: units,
      weapons: weapons,
      ammunition: ammunition,
    });
    setNameList({
      units: unitLabels,
      weapons: weaponLabels,
      ammunition: ammoLabels,
    });
  }, []);

  //handle search boxes and data changing dynamically
  const handleSearchBoxChange = ({ newValue, idx, selected, data }) => {
    // if (!newValue) {
    //   return;
    // }
    // let temp = selectedUnits;
    // temp[idx] = newValue;
    // setSelectedUnits([...temp]);
    // const label = newValue.label;
    // const data = unitData[label];
    // let tempSelectedUnitsData = selectedUnitsData;
    // tempSelectedUnitsData[idx] = data;
    // setSelectedUnitsData([...tempSelectedUnitsData]);
  };

  // //handle when a new unit gets added
  // const addNewUnitToCompare = () => {
  //   let tempSelectedUnits = selectedUnits;
  //   tempSelectedUnits.push(unitNameList[0]);
  //   setSelectedUnits([...tempSelectedUnits]);

  //   let tempSelectedUnitsData = selectedUnitsData;
  //   console.log(tempSelectedUnitsData);
  //   tempSelectedUnitsData.push(
  //     unitData[selectedUnits[selectedUnits.length - 1].label]
  //   );
  //   setSelectedUnitsData([...tempSelectedUnitsData]);
  // };

  // //handle removal of a unit from pos idx
  // const removeUnitComparision = (idx) => {
  //   let tempSelectedUnits = selectedUnits;
  //   tempSelectedUnits.splice(idx, 1);
  //   setSelectedUnits([...tempSelectedUnits]);

  //   let tempSelectedUnitsData = selectedUnitsData;
  //   tempSelectedUnitsData.splice(idx, 1);
  //   setSelectedUnitsData([...tempSelectedUnitsData]);
  // };

  //handle tab changes
  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  // console.log(data);
  // console.log(nameList);

  return (
    <div className="App">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Units" value="1" />
              <Tab label="Weapons" value="2" disabled />
              <Tab label="Ammunition" value="3" disabled />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UnitView nameList={nameList} allData={allData} />
            {/* <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              {/* {selectedUnits.map((_, idx) => {
                return (
                  <Units
                    unitNameList={unitNameList}
                    selectedUnits={selectedUnits}
                    setSelectedUnits={setSelectedUnits}
                    selectedUnitsData={selectedUnitsData}
                    handleSearchBoxChange={handleSearchBoxChange}
                    removeUnitComparision={removeUnitComparision}
                    idx={idx}
                    key={idx}
                  />
                );
              })} */}
            {/* </div> */}
          </TabPanel>
          <TabPanel value="2">hello</TabPanel>
          <TabPanel value="3">
            hello
            {/* <AmmoTab nameList={nameList} allData={data} /> */}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;

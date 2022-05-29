import React, { useState, useEffect } from "react";
import { UnitParser } from "./parsers/UnitParser";
import { Units } from "./components/Units";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";

function App() {
  //what tab the user is on
  const [tabValue, setTabValue] = React.useState("1");
  //all data of the units
  const [unitData, setUnitData] = useState({});
  //list of all the names of the units (for the search bar)
  const [unitNameList, setUnitNameList] = useState([]);
  //which units are currently selected
  const [selectedUnits, setSelectedUnits] = useState([]);
  //the data of the selected units
  const [selectedUnitsData, setSelectedUnitsData] = useState([]);

  //inital run to parse and store the data and set inital values
  useEffect(() => {
    const units = UnitParser();
    const modifiedUnits = Object.keys(units).map((i) => {
      return { label: i };
    });
    setUnitData(units);
    setUnitNameList(modifiedUnits);
    setSelectedUnits([modifiedUnits[0]]);
    setSelectedUnitsData([units[modifiedUnits[0].label]]);
  }, []);

  //handle search boxes and data changing dynamically
  const handleSearchBoxChange = (newValue, idx) => {
    console.log(newValue);
    if (!newValue) {
      return;
    }
    let tempSelectedUnits = selectedUnits;
    tempSelectedUnits[idx] = newValue;
    setSelectedUnits([...tempSelectedUnits]);

    const label = newValue.label;
    const data = unitData[label];
    let tempSelectedUnitsData = selectedUnitsData;
    tempSelectedUnitsData[idx] = data;
    setSelectedUnitsData([...tempSelectedUnitsData]);
  };

  const addNewUnitToCompare = () => {
    // debugger;
    let tempSelectedUnits = selectedUnits;
    tempSelectedUnits.push(unitNameList[0]);
    setSelectedUnits([...tempSelectedUnits]);

    let tempSelectedUnitsData = selectedUnitsData;
    console.log(tempSelectedUnitsData);
    tempSelectedUnitsData.push(
      unitData[selectedUnits[selectedUnits.length - 1].label]
    );
    console.log(tempSelectedUnitsData);
    console.log();
    setSelectedUnitsData([...tempSelectedUnitsData]);
  };

  const removeUnitComparision = (idx) => {
    let tempSelectedUnits = selectedUnits;
    tempSelectedUnits.splice(idx, 1);
    setSelectedUnits([...tempSelectedUnits]);

    let tempSelectedUnitsData = selectedUnitsData;
    tempSelectedUnitsData.splice(idx, 1);
    setSelectedUnitsData([...tempSelectedUnitsData]);
  };

  //handle tab changes
  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

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
              <Tab label="Weapons" value="2" />
              <Tab label="Ammunition" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Button variant="contained" onClick={() => addNewUnitToCompare()}>
              Add new unit
            </Button>
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              {selectedUnits.map((_, idx) => {
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
              })}

              {/* //todo unit comparision */}
              {/* <Units
                unitNameList={unitNameList}
                selectedUnit={selectedUnit}
                setSelectedUnit={setSelectedUnit}
                selectedUnitData={selectedUnitData}
              /> */}
              {/* <Button variant="contained">Contained</Button> */}
            </div>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;

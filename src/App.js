import React, { useState, useEffect } from "react";
import { UnitParser } from "./parsers/UnitParser";
import { Units } from "./components/Units";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function App() {
  const [unitData, setUnitData] = useState({});
  const [unitNameList, setUnitNameList] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState({ label: "" });
  const [selectedUnitData, setSelectedUnitData] = useState({});

  useEffect(() => {
    const units = UnitParser();
    const modifiedUnits = Object.keys(units).map((i) => {
      return { label: i };
    });
    setUnitData(units);
    setUnitNameList(modifiedUnits);
    setSelectedUnit(modifiedUnits[0]);
  }, []);

  //Update data when value in autocomplete changes
  useEffect(() => {
    //handle when the box is cleared fully
    if (!selectedUnit) {
      return;
    }
    setSelectedUnitData(unitData[selectedUnit.label]);
  }, [selectedUnit, unitData]);

  const [tabValue, setTabValue] = React.useState("1");

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
            <div style={{ display: "flex", width: "100%" }}>
              <Units
                unitNameList={unitNameList}
                selectedUnit={selectedUnit}
                setSelectedUnit={setSelectedUnit}
                selectedUnitData={selectedUnitData}
              />
              {/* //todo unit comparision */}
              {/* <Units
                unitNameList={unitNameList}
                selectedUnit={selectedUnit}
                setSelectedUnit={setSelectedUnit}
                selectedUnitData={selectedUnitData}
              /> */}
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

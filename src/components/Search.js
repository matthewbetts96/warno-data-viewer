import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({
  unitNameList = [],
  selectedUnit,
  setSelectedUnit,
}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(_, newValue) => setSelectedUnit(newValue)}
      options={unitNameList}
      value={selectedUnit}
      sx={{ minWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Units" />}
    />
  );
}

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({
  unitNameList = [],
  selectedUnits,
  handleSearchBoxChange,
  idx,
}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(_, newValue) => {
        handleSearchBoxChange(newValue, idx);
      }}
      options={unitNameList}
      value={selectedUnits[idx]}
      sx={{ minWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Units" />}
    />
  );
}

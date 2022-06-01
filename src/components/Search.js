import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({ nameList = [], handleSearchBoxChange }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(_, newValue) => {
        handleSearchBoxChange(newValue);
      }}
      options={nameList}
      sx={{ minWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Units" />}
    />
  );
}

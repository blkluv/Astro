import React from "react";
import TextField from "@mui/material/TextField";

export default function BirthDateInput(props: any) {
  function handleBirthDate(event: any) {
    props.setBirthDate(event.target.value);
  }
  return (
    <TextField
      id="date"
      label="Date of birth"
      type="date"
      sx={{ width: "100%" }}
      onChange={handleBirthDate}
      required
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

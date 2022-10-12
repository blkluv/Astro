import React from "react";
import TextField from "@mui/material/TextField";

export default function BirthTimeInput(props: any) {
  function handleBirthTime(event: any) {
    props.setBirthTime(event.target.value);
  }
  return (
    <TextField
      id="time"
      label="Time of birth (Optional)"
      type="time"
      sx={{ width: "100%" }}
      onChange={handleBirthTime}
      size={"small"}
      inputProps={{
        step: 300, // 5 min
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

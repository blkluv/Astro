import React, { useState, useEffect } from "react";
import { formatTimeOffset } from "src/utilities/formatTimeOffset";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CitySearchInput(props: any) {
  var cityTimezones = require("city-timezones");

  const [cityQuery, setCityQuery] = useState("");
  const [cityQueryResults, setCityQueryResults] = useState<{}[]>([]);
  function handleCitySearch(e: React.ChangeEvent<HTMLInputElement>) {
    setCityQuery(e.target.value);
  }
  function handleCitySelect(e: any, value: any): void {
    if (value) {
      props.setTimeZone({
        utcOffset: formatTimeOffset(value.timezone),
        lat: value.lat,
        lng: value.lng,
      });
    }
  }
  function getCityQueryResults() {
    const rawResultData = cityTimezones.lookupViaCity(cityQuery);
    let parsedCityList: {}[] = [];

    rawResultData.map((result: any) => {
      let province: string = result.province
        ? result.province !== result.city
          ? result.province
          : result.country
        : result.country;
      parsedCityList.push({
        label: result.city + ", " + province,
        lat: result.lat,
        lng: result.lng,
        timezone: result.timezone,
      });
      return null;
    });
    setCityQueryResults(parsedCityList);
    return parsedCityList;
  }

  useEffect(() => {
    getCityQueryResults();
    // eslint-disable-next-line
  }, [cityQuery]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={handleCitySelect}
      options={cityQueryResults}
      sx={{ width: "100%" }}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={handleCitySearch}
          required
          label="Place of birth"
          placeholder="Search for city..."
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
}

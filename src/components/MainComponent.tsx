import React, { useState, useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { getHoroscopeData } from "../utilities/getHoroscopeData";
import CitySearchInput from "./CitySearchInput";
import BirthDateInput from "./BirthDateInput";
import BirthTimeInput from "./BirthTimeInput";
import NatalHoroscope from "./NatalHoroscope";
import { TimeZoneData } from "../objectTypes/TimeZoneData";

// import HomePage from "./HomePage";

export default function MainComponent() {
  const [timeZone, setTimeZone] = useState<TimeZoneData>({
    utcOffset: "+00:00",
    lat: 0,
    lng: 0,
  });
  const [birthDate, setBirthDate] = useState<string>("");
  const [birthTime, setBirthTime] = useState<string>("");
  // const [isLoading, setIsLoading] = useState(false);
  const dateTime = `${birthDate}T${birthTime ? birthTime : "12:00"}:00.000${
    timeZone.utcOffset
  }`;

  const [planetData, setPlanetData] = useState<any>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    const horoscopeQuery: any = getHoroscopeData(dateTime, timeZone);
    if (timeZone.utcOffset && birthDate) {
      setPlanetData([
        horoscopeQuery.data.planet_position[0],
        horoscopeQuery.data.planet_position[1],
        horoscopeQuery.data.planet_position[2],
        horoscopeQuery.data.planet_position[3],
        horoscopeQuery.data.planet_position[4],
        horoscopeQuery.data.planet_position[5],
        horoscopeQuery.data.planet_position[6],
        horoscopeQuery.data.planet_position[7],
        horoscopeQuery.data.planet_position[8],
        horoscopeQuery.data.planet_position[9],
      ]);
    }
  }, [timeZone, birthDate, birthTime, dateTime]);

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

  return (
    <div className="Main">
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
          },
          components: {
            MuiOutlinedInput: {
              styleOverrides: {
                root: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.5) !important",
                  },
                },
              },
            },
          },
        })}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundImage: "none", backgroundColor: "#000" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              style={{ marginRight: 30, cursor: "default" }}
              component={"span"}
            >
              Natal Astrology
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" style={{ marginTop: 80 }}>
          <Grid container spacing={1}>
            <Paper
              sx={{
                padding: "16px",
                textAlign: "center",
                backgroundImage: "none",
                backgroundColor: "rgba(0,0,0,0.3)",
                fontSize: 12,
                width: "100%",
              }}
              elevation={3}
            >
              <div
                style={{
                  width: "calc(100% -32px)",
                }}
              >
                <CitySearchInput setTimeZone={setTimeZone} />
              </div>
              <div style={{ display: "flex", marginTop: "16px" }}>
                <div
                  style={{
                    width: "40%",
                    marginRight: "16px",
                  }}
                >
                  <BirthDateInput setBirthDate={setBirthDate} />
                </div>
                <div
                  style={{
                    flexGrow: 1,
                  }}
                >
                  <BirthTimeInput setBirthTime={setBirthTime} />
                </div>
              </div>
            </Paper>
          </Grid>
        </Container>

        <NatalHoroscope planetData={planetData} isLoading={false} />
      </ThemeProvider>
    </div>
  );
}

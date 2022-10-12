import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";

import PlanetPanel from "./PlanetPanel";
import FooterText from "./FooterText";

export default function NatalHoroscope(props: any) {
  const planetData = props.planetData;

  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const handleChangeIndex = (index: number) => {
    setTabIndex(index);
  };

  const handleChangeArrow = (newIndex: number) => {
    setTabIndex(newIndex);
  };

  function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "16px" }}>
      <Grid container spacing={1}>
        <Paper
          sx={{
            textAlign: "center",
            backgroundImage: "none",
            backgroundColor: "rgba(0,0,0,0.3)",
            fontSize: 12,
            width: "100%",
          }}
          elevation={3}
        >
          <AppBar
            position="static"
            color="default"
            sx={{
              backgroundImage: "none",
              backgroundColor: "#000",
            }}
          >
            <Tabs
              value={tabIndex}
              onChange={handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Q" {...a11yProps(0)} />
              <Tab label="R" {...a11yProps(1)} />
              <Tab label="S" {...a11yProps(2)} />
              <Tab label="T" {...a11yProps(3)} />
              <Tab label="U" {...a11yProps(4)} />
              <Tab label="V" {...a11yProps(5)} />
              <Tab label="W" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={"x"}
            index={tabIndex}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={tabIndex} index={0}>
              <PlanetPanel
                planet="Sun"
                sign={planetData[0].sign ? planetData[0].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <PlanetPanel
                planet="Moon"
                sign={planetData[1].sign ? planetData[1].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <PlanetPanel
                planet="Mercury"
                sign={planetData[2].sign ? planetData[2].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
              <PlanetPanel
                planet="Venus"
                sign={planetData[3].sign ? planetData[3].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={4}>
              <PlanetPanel
                planet="Mars"
                sign={planetData[4].sign ? planetData[4].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={5}>
              <PlanetPanel
                planet="Jupiter"
                sign={planetData[5].sign ? planetData[5].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
            <TabPanel value={tabIndex} index={6}>
              <PlanetPanel
                planet="Saturn"
                sign={planetData[6].sign ? planetData[6].sign.name : ""}
                currenttab={tabIndex}
                onChange={handleChangeArrow}
                planetData={planetData}
                isLoading={props.isLoading}
              />
            </TabPanel>
          </SwipeableViews>
          <FooterText />
        </Paper>
      </Grid>
    </Container>
  );
}

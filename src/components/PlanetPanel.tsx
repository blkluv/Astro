import React from "react";
import { planetData } from "../private/planetData";

import Skeleton from "@mui/material/Skeleton";

import getPlanetAspects from "../utilities/getPlanetAspects";

function PlanetPanel(props: any) {
  const planet: string = props.planet;
  const sign: string = props.sign;

  const signNumber = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const planetImage = "planets/" + planet.toLowerCase() + ".png";

  const constelationImages = [
    { backgroundImage: 'url("signs/aries.jpg")' },
    { backgroundImage: 'url("signs/taurus.jpg")' },
    { backgroundImage: 'url("signs/gemini.jpg")' },
    { backgroundImage: 'url("signs/cancer.jpg")' },
    { backgroundImage: 'url("signs/leo.jpg")' },
    { backgroundImage: 'url("signs/virgo.jpg")' },
    { backgroundImage: 'url("signs/libra.jpg")' },
    { backgroundImage: 'url("signs/scorpio.jpg")' },
    { backgroundImage: 'url("signs/sagittarius.jpg")' },
    { backgroundImage: 'url("signs/capricorn.jpg")' },
    { backgroundImage: 'url("signs/aquarius.jpg")' },
    { backgroundImage: 'url("signs/pisces.jpg")' },
  ];

  const constelationClass = [
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
  ];

  // data and methods for constelation image
  const panelsignClass = () =>
    !sign ? "panelsign empty" : constelationClass[signNumber.indexOf(sign)];
  const rightarrowClass = () =>
    props.currenttab <= 5 ? "rightarrow" : "rightarrow disabled";
  const leftarrowClass = () =>
    props.currenttab >= 1 ? "leftarrow" : "leftarrow disabled";
  function handleChangeRight() {
    if (props.currenttab <= 5) {
      return props.onChange(props.currenttab + 1);
    } else {
      return null;
    }
  }
  function handleChangeLeft() {
    if (props.currenttab >= 1) {
      return props.onChange(props.currenttab - 1);
    } else {
      return null;
    }
  }

  // data and methods for planet and sign descriptions
  const panelTitle = () => (!sign ? planet : "Natal " + planet + " in " + sign);
  const planetDescription = () => {
    let message: any;
    if (props.isLoading) {
      message = "Loading data...";
    } else {
      !sign
        ? (message = "Please enter a birth place and date")
        : (message = planetData[signNumber.indexOf(sign)][planet]);
    }
    return message;
  };
  const paneldescriptionClass = () =>
    !sign ? "paneldescription emptier" : "paneldescription dropcap";

  // data and methods for planet aspects
  const aspectList = getPlanetAspects(props.planetData, planet);
  function RenderAspects(props: any) {
    return (
      <div>
        <div className={"aspecttitle " + props.aspect[3].toLowerCase()}>
          {props.aspect[0]}
        </div>
        <div className="aspectcontent">
          <p>
            {props.aspect[2]} {props.aspect[1]}
          </p>
        </div>
      </div>
    );
  }

  function RenderLoader() {
    if (props.isLoading) {
      return (
        <Skeleton
          variant="circular"
          animation="wave"
          width={185}
          height={185}
        />
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <div className="panelsigncontainer">
        <div
          className={panelsignClass()}
          style={constelationImages[signNumber.indexOf(sign)]}
        >
          <RenderLoader />
        </div>
        <img
          src={planetImage}
          alt={props.planet ? props.planet : "planet"}
          className="panelplanet"
        />
        <img
          src="leftarrow.png"
          alt={"left-arrow"}
          className={leftarrowClass()}
          onClick={handleChangeLeft}
        />
        <img
          src="rightarrow.png"
          alt={"right-arrow"}
          className={rightarrowClass()}
          onClick={handleChangeRight}
        />
      </div>

      <div className="paneltitle">{panelTitle()}</div>
      <div className={paneldescriptionClass()}>
        <p>
          {planetDescription()
            .split("<br /><br />")
            .map((paragraph: string, index: string) => {
              return (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              );
            })}
        </p>
      </div>
      {sign
        ? aspectList.map((aspect: any, index: any) => {
            return <RenderAspects key={index} aspect={aspect} />;
          })
        : null}
    </div>
  );
}

export default PlanetPanel;

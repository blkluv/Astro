import { degreeToDecimal } from "./degreeToDecimal";
import { positionFromLongitude } from "./positionFromLongitude";

export function getHoroscopeData(dateTime: string): {} {
  const ephemeris = require("ephemeris");
  const dateObj: Date = new Date(dateTime);
  const ephemerisData = ephemeris.getAllPlanets(dateObj, 10.0014, 53.5653, 0);
  const retroCompare = ephemeris.getAllPlanets(
    new Date(dateObj.getTime() + 3600000),
    10.0014,
    53.5653,
    0
  );

  const signs: string[] = [
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

  const planets: string[] = [
    "Sun",
    "Moon",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];

  const signRulers: string[] = [
    "Mars",
    "Venus",
    "Mercury",
    "Moon",
    "Sun",
    "Mercury",
    "Venus",
    "Pluto",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  let planetArray: {}[] = [];
  for (let i: number = 0; i < planets.length; i++) {
    const signName =
      signs[
        positionFromLongitude(
          ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDd
        ) - 1
      ];

    planetArray.push({
      degree: degreeToDecimal(
        ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDms30
      ),
      id: i,
      is_retrograde:
        ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDd >
        retroCompare.observed[planets[i].toLowerCase()].apparentLongitudeDd,
      longitude:
        ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDd,
      name: planets[i],
      position: positionFromLongitude(
        ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDd
      ),
      sign: {
        id:
          positionFromLongitude(
            ephemerisData.observed[planets[i].toLowerCase()].apparentLongitudeDd
          ) - 1,
        ruler: {
          id: planets.indexOf(signRulers[signs.indexOf(signName)]),
          name: signRulers[signs.indexOf(signName)],
        },
        name: signName,
      },
    });
  }

  const constructedData = {
    status: "ok",
    data: {
      planet_position: planetArray,
    },
  };

  return constructedData;
}

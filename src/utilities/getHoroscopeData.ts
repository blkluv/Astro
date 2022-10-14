import { positionFromLongitude } from "./positionFromLongitude";
import { Origin, Horoscope } from "circular-natal-horoscope-js";
import { TimeZoneData } from "../objectTypes/TimeZoneData";

export function getHoroscopeData(dateTime: string, timeZone: TimeZoneData): {} {
  const dateEntered = dateTime.substring(0, 1) !== "T";
  const year = dateEntered ? Number(dateTime.substring(0, 4)) : 2020;
  const month = dateEntered ? Number(dateTime.substring(5, 7)) - 1 : 11;
  const day = dateEntered ? Number(dateTime.substring(8, 10)) : 5;
  const hour = dateEntered ? Number(dateTime.substring(11, 13)) : 15;
  const minute = dateEntered ? Number(dateTime.substring(14, 16)) : 30;

  const origin = new Origin({
    year: year,
    month: month, // 0 = January, 11 = December!
    date: day,
    hour: hour,
    minute: minute,
    latitude: timeZone.lat,
    longitude: timeZone.lng,
  });

  const customOrbs = {
    conjunction: 8,
    opposition: 8,
    trine: 8,
    square: 7,
    sextile: 6,
    quincunx: 5,
    quintile: 1,
    septile: 1,
    "semi-square": 1,
    "semi-sextile": 1,
  };

  const horoscope = new Horoscope({
    origin: origin,
    houseSystem: "whole-sign",
    zodiac: "tropical",
    aspectPoints: ["bodies", "points", "angles"],
    aspectWithPoints: ["bodies", "points", "angles"],
    aspectTypes: ["major", "minor"],
    customOrbs: customOrbs,
    language: "en",
  });

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
      horoscope._celestialBodies[planets[i].toLowerCase()].Sign.label;
    const degree =
      horoscope._celestialBodies[planets[i].toLowerCase()].ChartPosition
        .Ecliptic.DecimalDegrees -
      horoscope._celestialBodies[planets[i].toLowerCase()].Sign.zodiacStart;
    const is_retrograde =
      horoscope._celestialBodies[planets[i].toLowerCase()].isRetrograde ===
      true;
    const longitude =
      horoscope._celestialBodies[planets[i].toLowerCase()].ChartPosition
        .Ecliptic.DecimalDegrees;
    const planetName = planets[i];

    planetArray.push({
      degree: degree,
      id: i,
      is_retrograde: is_retrograde,
      longitude: longitude,
      name: planetName,
      position: positionFromLongitude(longitude),
      sign: {
        id: positionFromLongitude(longitude) - 1,
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

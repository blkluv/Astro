import { aspectData } from "../private/aspectData";

function getPlanetAspects(planetdata: any, planetName: string) {
  const planetIndex = (planetName: string): any =>
    ({
      Sun: 0,
      Moon: 1,
      Mercury: 2,
      Venus: 3,
      Mars: 4,
      Jupiter: 5,
      Saturn: 6,
      Uranus: 7,
      Neptune: 8,
      Pluto: 9,
    }[planetName]);

  const SkyLocation = (planet: string) =>
    ({
      Sun: planetdata[0].longitude,
      Moon: planetdata[1].longitude,
      Mercury: planetdata[2].longitude,
      Venus: planetdata[3].longitude,
      Mars: planetdata[4].longitude,
      Jupiter: planetdata[5].longitude,
      Saturn: planetdata[6].longitude,
      Uranus: planetdata[7].longitude,
      Neptune: planetdata[8].longitude,
      Pluto: planetdata[9].longitude,
    }[planet]);
  function GetAspect(degree: number) {
    if (degree === undefined) {
      return "None";
    } else if (degree >= 0 && degree <= 8) {
      return "Conjunct";
    } else if (degree >= 52 && degree <= 68) {
      return "Sextile";
    } else if (degree >= 112 && degree <= 128) {
      return "Trine";
    } else if (degree >= 82 && degree <= 98) {
      return "Square";
    } else if (degree >= 172 && degree <= 188) {
      return "Opposition";
    } else {
      return "None";
    }
  }
  const totalAspectlist = [
    [
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Moon")))),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Mercury")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Venus")))
      ),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Mars")))),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Jupiter")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Pluto")))
      ),
    ],
    [
      "None",
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Mercury")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Venus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Mars")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Jupiter")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Pluto")))
      ),
    ],
    [
      "None",
      "None",
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Venus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Mars")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Jupiter")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Pluto")))
      ),
    ],
    [
      "None",
      "None",
      "None",
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Mars")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Jupiter")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Pluto")))
      ),
    ],
    [
      "None",
      "None",
      "None",
      "None",
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Jupiter")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Pluto")))
      ),
    ],
    [
      "None",
      "None",
      "None",
      "None",
      "None",
      GetAspect(
        Math.round(Math.abs(SkyLocation("Jupiter") - SkyLocation("Saturn")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Jupiter") - SkyLocation("Uranus")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Jupiter") - SkyLocation("Neptune")))
      ),
      GetAspect(
        Math.round(Math.abs(SkyLocation("Jupiter") - SkyLocation("Pluto")))
      ),
    ],
    ["None", "None", "None", "None", "None", "None", "None", "None", "None"],
  ];
  function getTitles() {
    const aspectExplanation = (aspect: string): any =>
      ({
        Conjunct:
          "In relation to the Earth, these two celestial bodies were aligned at the time of your birth.",
        Sextile:
          "In relation to the Earth, these two celestial bodies formed a 60-degree angle at the time of your birth.",
        Trine:
          "In relation to the Earth, these two celestial bodies formed a 120-degree angle at the time of your birth.",
        Square:
          "In relation to the Earth, these two celestial bodies formed a 90-degree angle at the time of your birth.",
        Opposition:
          "In relation to the Earth, these two celestial bodies formed a 180-degree angle at the time of your birth.",
      }[aspect]);

    let descriptionarray: any = [];
    function PushAspect(aspect: string, index: any) {
      if (aspect === "None") {
        return null;
      } else if (
        aspect === "Conjunct" ||
        aspect === "Sextile" ||
        aspect === "Trine" ||
        aspect === "Square" ||
        aspect === "Opposition"
      ) {
        descriptionarray.push([
          aspectData[planetIndex(planetName)][aspect][index][0],
          aspectData[planetIndex(planetName)][aspect][index][1],
          aspectExplanation(aspect),
          aspect,
        ]);
      }
    }
    for (let i = 0; i <= 8; i++) {
      PushAspect(totalAspectlist[planetIndex(planetName)][i], [i]);
    }

    return descriptionarray;
  }
  return getTitles();
}

export default getPlanetAspects;

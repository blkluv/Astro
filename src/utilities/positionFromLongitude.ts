export function positionFromLongitude(degree: number): number {
  const naturalHousePositions = [
    0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
  ];
  let signNumber: number = 0;
  for (let i: number = 0; degree >= naturalHousePositions[i]; i++) {
    signNumber = signNumber + 1;
  }
  return signNumber;
}

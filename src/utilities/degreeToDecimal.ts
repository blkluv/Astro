export function degreeToDecimal(degree: string): number {
  const absDegree: number = Number(degree.split("°")[0]);
  const minutes: number = Number(degree.split("°")[1].split("'")[0]) / 60;
  const seconds: number =
    Number(degree.split("°")[1].split("'")[1].split('"')[0]) / 3600;
  const convertedNumber: number = absDegree + minutes + seconds;

  return convertedNumber;
}

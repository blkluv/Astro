export function formatTimeOffset(offset: string): string {
  var tzOffset = require("tz-offset");
  const offsetAmount: number = Math.abs(tzOffset.offsetOf(offset)) / 60;
  const isSingleDigit: boolean = offsetAmount.toString().length === 1;
  const isNegative: boolean = tzOffset.offsetOf(offset) > 0;
  const convertedOffset: string = `${isNegative ? "-" : "+"}${
    isSingleDigit ? "0" : ""
  }${offsetAmount}:00`;
  return convertedOffset;
}

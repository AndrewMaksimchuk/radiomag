const space = [32, 32];
const cyrillic = [1024, 1279];
const latine = [
  [65, 90],
  [97, 122],
];
const ranges = [space, cyrillic, ...latine];

const inRange = (value: string, [start, end]: number[]) => {
  const code = value.charCodeAt(0);
  return code >= start && code <= end;
};

const checkRange = (ranges: number[][], symbol: string) => {
  return ranges.map((range) => inRange(symbol, range));
};

const checkSymbol = (symbol: string) => {
  return checkRange(ranges, symbol).some((value) => value === true);
};

const checkSymbols = (symbols: string[]) => {
  return symbols.map(checkSymbol);
};

export const customAlpha = (value: string) => {
  const symbols = value.split("");
  return checkSymbols(symbols).some((value) => value === false) ? false : true;
};

export const isBright = (hexColor: string) => {
  const [r, g, b] = [0, 2, 4].map((p) => Number.parseInt(hexColor.slice(1).substr(p, 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 >= 128;
};

export const invertHex = (hexColor: string) =>
  // eslint-disable-next-line no-bitwise
  (Number(`0x1${hexColor.slice(1)}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();

export const themeModifier = (themeProp: string, modifier: number = 1) => {
  const regex = /^(^-?\d+(?:\.\d+)?)(.*)$/;
  const match = themeProp.match(regex);
  if (!match) return themeProp;

  const [, prop, unit] = match;
  const convertedProp = parseFloat(prop);

  if (!convertedProp || !unit) return themeProp;
  return `${convertedProp * modifier}${unit}`;
};

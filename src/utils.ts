export const getRandomObjectProperty = (obj: any) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

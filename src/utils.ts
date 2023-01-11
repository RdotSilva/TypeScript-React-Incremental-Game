/**
 * Get a random value from an enum
 * @param enumeration The enum to get the value from
 * @returns Random value
 */
export const getRandomEnumValue = (enumeration: any): any => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};

import { getRandomEnumValue, getRandomObjectProperty } from "./utils";

global.Math.random = () => 0.5;

describe("src/utils.ts", () => {
  describe("getRandomEnumValue", () => {
    it.todo("should return a random value from an Enum");
  });

  describe("getRandomObjectProperty", () => {
    it("should return a random property from an object", () => {
      const object = {
        One: 2,
        Two: 4,
        Three: 8,
        Four: 16,
      };

      const randomProperty = getRandomObjectProperty(object);

      console.log(randomProperty);
    });
  });
});

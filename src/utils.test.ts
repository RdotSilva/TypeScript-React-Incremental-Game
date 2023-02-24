import { getRandomObjectProperty } from "./utils";

describe("src/utils.ts", () => {
  beforeAll(() => {
    global.Math.random = () => 0.5;
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
      expect(randomProperty).toBe(8);
    });
  });
});

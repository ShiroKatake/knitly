import { findLargerFactor } from "./findLargerFactor";

describe("Find Larger Factor", () => {
  it("should return the larger factor as the first value and the smaller factor as the second value", () => {
    expect(findLargerFactor(1, 2)).toEqual({ largerFactor: 2, smallerFactor: 1 });
    expect(findLargerFactor(2, 1)).toEqual({ largerFactor: 2, smallerFactor: 1 });
  });
});

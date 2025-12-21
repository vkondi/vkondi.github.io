import { describe, it, expect } from "vitest";
import { getYearsAndMonthsDifference } from "./utility";

describe("utility functions", () => {
  describe("getYearsAndMonthsDifference", () => {
    it("returns correct years and months for large differences", () => {
      const start = new Date(2020, 0, 1);
      const end = new Date(2022, 5, 1);
      expect(getYearsAndMonthsDifference(start, end)).toBe("2 yrs 5 mos");
    });

    it("returns only years when months is 0", () => {
      const start = new Date(2020, 0, 1);
      const end = new Date(2022, 0, 1);
      expect(getYearsAndMonthsDifference(start, end)).toBe("2 yrs");
    });

    it("returns only months when years is 0", () => {
      const start = new Date(2020, 0, 1);
      const end = new Date(2020, 5, 1);
      expect(getYearsAndMonthsDifference(start, end)).toBe("5 mos");
    });

    it("returns singular yr/mo when count is 1", () => {
      const start = new Date(2020, 0, 1);
      const end = new Date(2021, 1, 1);
      expect(getYearsAndMonthsDifference(start, end)).toBe("1 yr 1 mo");
    });

    it("returns 'Less than a month' when difference is 0", () => {
      const start = new Date(2020, 0, 1);
      const end = new Date(2020, 0, 15);
      expect(getYearsAndMonthsDifference(start, end)).toBe("Less than a month");
    });
  });
});

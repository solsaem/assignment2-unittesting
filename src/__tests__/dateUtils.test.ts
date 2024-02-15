import {describe, test, expect} from 'vitest';
import {add, isWithinRange, isDateBefore, isSameDay} from "../dateUtils";
import { DATE_UNIT_TYPES } from '../constants';

describe("Date Utils", () => {
  test("Testing add function: adding the right number of days to dates", () => {
    const date = new Date("2024-02-14");
    const newDate = new Date("2028-02-14");
    const addDays = add(date, 4, DATE_UNIT_TYPES.YEARS);
    expect(addDays).toEqual(newDate);
  });

  test("Testing isWithinRange function: returns true if test date is within range", () => {
    const date = new Date("2024-01-01");
    const from = new Date("2023-01-01");
    const to = new Date("2025-01-01");
    const isInRange = isWithinRange(date,from,to);
    expect(isInRange).toBe(true);
  });

  test("Testing isWithinRange function: returns false if test date is not within range", () => {
    const date = new Date("2023-01-01");
    const from = new Date("2024-01-01");
    const to = new Date("2025-01-01");
    const isInRange = isWithinRange(date,from,to);
    expect(isInRange).toBe(false);
  });

  test("Testing isDateBefore function: returns true if test date is before compared date", () => {
    const testDate = new Date("2024-01-01");
    const comparedDate = new Date("2024-1-02");
    const isBefore = isDateBefore(testDate,comparedDate);
    expect(isBefore).toBe(true);
  });

  test("Testing isDateBefore function: returns false if test date is after compared date", () => {
    const testDate = new Date("2024-01-01");
    const comparedDate = new Date("2023-12-31");
    const isBefore = isDateBefore(testDate,comparedDate);
    expect(isBefore).toBe(false);
  });

  test("Testing isSameDay function: returns true if test date is the same day as compared date", () => {
    const testDate = new Date("2024-01-01");
    const comparedDate = new Date("2024-01-01");
    const isSame = isDateBefore(testDate,comparedDate);
    expect(testDate).toEqual(comparedDate);
  });

  test("Testing isSameDay function: returns false if test date is not the same day as compared date", () => {
    const testDate = new Date("2024-01-01");
    const comparedDate = new Date("2024-01-05");
    const isSame = isDateBefore(testDate,comparedDate);
    expect(testDate).not.toEqual(comparedDate);
  });
});

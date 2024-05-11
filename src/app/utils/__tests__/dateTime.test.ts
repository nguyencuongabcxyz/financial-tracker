import { DateTimeUtils } from '@/app/utils';


describe("DateTimeUtils.getPrettyDateTimeFormat function", () => {
  it("should return a formatted date and time string", () => {
    const date = new Date("2022-01-01T12:34:56Z");
    const result = DateTimeUtils.getPrettyDateTimeFormat(date);
    expect(result).toBe("Saturday, 1 January 2022 at 19:34");
  });

  it("should return an empty string if the date is invalid", () => {
    const date = new Date("invalid-date");
    expect(() => { DateTimeUtils.getPrettyDateTimeFormat(date) }).toThrow();
  });
});

describe("DateTimeUtils.getPrettyDateFormat function", () => {
  it("should return a formatted date and time string", () => {
    const date = new Date("2022-01-01T12:34:56Z");
    const result = DateTimeUtils.getPrettyDateFormat(date);
    expect(result).toBe("Saturday, 1 January 2022");
  });

  it("should return an empty string if the date is invalid", () => {
    const date = new Date("invalid-date");
    expect(() => { DateTimeUtils.getPrettyDateTimeFormat(date) }).toThrow();
  });
});
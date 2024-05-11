const getPrettyDateTimeFormat = (date: Date): string => {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date)
}

const getPrettyDateFormat = (date: Date): string => {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date)
}

export const DateTimeUtils = {
  getPrettyDateTimeFormat,
  getPrettyDateFormat
}
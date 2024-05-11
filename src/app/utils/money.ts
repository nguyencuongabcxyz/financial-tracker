const getNormalFormat = (amount: number): string => {
  return amount.toLocaleString() + " VND";
}

const getFluctuatedFormat = (amount: number): string => {
  return amount > 0 ? `+${amount.toLocaleString()} VND` : `${amount.toLocaleString()} VND`;
}

const getFluctuatedPercentageFormat = (percentage: number): string => {
  return percentage > 0 ? `+${percentage.toLocaleString()}%` : `${percentage.toLocaleString()}%`;
}

export const MoneyUtils = {
  getNormalFormat,
  getFluctuatedFormat,
  getFluctuatedPercentageFormat
}
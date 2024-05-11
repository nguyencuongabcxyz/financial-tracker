import React from "react";
import { getByTestId, render } from "@testing-library/react";
import MoneySummaryCard from "../MoneySummaryCard";
import { MoneyUtils } from "@/app/utils";

describe("MoneySummaryCard component", () => {
  it("renders the title correctly", () => {
    const title = "Total Balance";
    const { getByText } = render(
      <MoneySummaryCard title={title} amount={1000} fluctuationPercentage={0} />
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the amount with correct format", () => {
    const amount = 1000;
    const { getByText } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={amount}
        fluctuationPercentage={0}
      />
    );
    expect(getByText(MoneyUtils.getNormalFormat(amount))).toBeInTheDocument();
  });

  it("renders the correct format of positive fluctuation percentage", () => {
    const percentage = 10;
    const { getByTestId } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={1000}
        fluctuationPercentage={percentage}
      />
    );
    expect(getByTestId("positiveValue")).toHaveTextContent(
      MoneyUtils.getFluctuatedPercentageFormat(percentage)
    );
  });

  it("renders the correct format negative fluctuation percentage", () => {
    const percentage = -10;
    const { getByTestId } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={1000}
        fluctuationPercentage={percentage}
      />
    );
    expect(getByTestId("negativeValue")).toHaveTextContent(
      MoneyUtils.getFluctuatedPercentageFormat(percentage)
    );
  });

  it("applies custom className when it is provided", () => {
    const { getByTestId } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={1000}
        fluctuationPercentage={-10}
        className="bg-red-100"
      />
    );
    expect(getByTestId("moneyCard")).toHaveClass("bg-red-100");
  });
});

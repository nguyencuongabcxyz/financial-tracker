import React from "react";
import { getByTestId, render } from "@testing-library/react";
import MoneySummaryCard from "../MoneySummaryCard";

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
    expect(getByText(amount.toLocaleString() + " VND")).toBeInTheDocument();
  });

  it("renders the correct chip color for positive fluctuation percentage", () => {
    const { getByTestId } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={1000}
        fluctuationPercentage={10}
      />
    );
    expect(getByTestId("positiveValue")).toHaveTextContent("+10%");
  });

  it("renders the correct chip color for negative fluctuation percentage", () => {
    const { getByTestId } = render(
      <MoneySummaryCard
        title="Total Balance"
        amount={1000}
        fluctuationPercentage={-10}
      />
    );
    expect(getByTestId("negativeValue")).toHaveTextContent("-10%");
  });

  it("applies custom className with it is provided", () => {
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

import React from "react";
import { render } from "@testing-library/react";
import TransactionGroup from "../TransactionGroup";
import { DateTimeUtils } from "@/app/utils";

describe("TransactionGroup", () => {
  const transactions = [
    {
      id: 1,
      title: "Test Transaction",
      description: "This is a test transaction",
      amount: 100,
      category: "Test Category",
      categoryIcon: "/test-icon.png",
      date: new Date(),
    },
    {
      id: 2,
      title: "Test Transaction",
      description: "This is a test transaction",
      amount: 100,
      category: "Test Category",
      categoryIcon: "/test-icon.png",
      date: new Date(),
    },
    {
      id: 3,
      title: "Test Transaction",
      description: "This is a test transaction",
      amount: 100,
      category: "Test Category",
      categoryIcon: "/test-icon.png",
      date: new Date(),
    },
  ];
  const date = new Date("2022-01-01");

  it("renders the date correctly", () => {
    const { getByText } = render(
      <TransactionGroup transactions={transactions} date={date} />
    );
    const dateElement = getByText(DateTimeUtils.getPrettyDateFormat(date));
    expect(dateElement).toBeInTheDocument();
  });

  it("renders the transactions correctly", () => {
    const { getAllByRole } = render(
      <TransactionGroup transactions={transactions} date={date} />
    );
    const transactionItems = getAllByRole("listitem");
    expect(transactionItems.length).toBe(transactions.length);
  });
});

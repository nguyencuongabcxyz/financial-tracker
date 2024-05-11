import { fireEvent, render, screen } from "@testing-library/react";
import TransactionItem, { Transaction } from "../TransactionItem";
import { DateTimeUtils, MoneyUtils } from "@/app/utils";

const mockTransaction: Transaction = {
  id: 1,
  title: "Test Transaction",
  description: "This is a test transaction",
  amount: 100,
  category: "Test Category",
  categoryIcon: "/test-icon.png",
  date: new Date(),
};

const { title, amount, category, categoryIcon, date } = mockTransaction;

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("TransactionItem component", () => {
  it("renders transaction details correctly", () => {
    render(<TransactionItem transaction={mockTransaction} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", categoryIcon);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(
      screen.getByText(DateTimeUtils.getPrettyDateTimeFormat(date))
    ).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(
      screen.getByText(MoneyUtils.getFluctuatedFormat(amount))
    ).toBeInTheDocument();
  });

  it("displays positive amount with success color", () => {
    render(<TransactionItem transaction={mockTransaction} />);

    const amountElement = screen.getByText(
      MoneyUtils.getFluctuatedFormat(amount)
    );
    expect(amountElement).toHaveClass("text-success");
  });

  it("displays negative amount with danger color", () => {
    const negativeTransaction: Transaction = {
      ...mockTransaction,
      amount: -100,
    };
    render(<TransactionItem transaction={negativeTransaction} />);

    const amountElement = screen.getByText(
      MoneyUtils.getFluctuatedFormat(negativeTransaction.amount)
    );
    expect(amountElement).toHaveClass("text-danger");
  });

  it("opens a modal when the information icon is clicked", async () => {
    render(<TransactionItem transaction={mockTransaction} />);

    fireEvent.click(screen.getByTestId("transactionInfoButton"));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});

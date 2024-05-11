import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TransactionItemModal from "../TransactionItemModal";
import { Transaction } from "../TransactionItem";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("TransactionItemModal component", () => {
  const mockTransaction: Transaction = {
    id: 1,
    title: "Test Transaction",
    description: "This is a test transaction",
    descriptionImage: "/test-image.png",
    amount: 100,
    category: "Test Category",
    categoryIcon: "/test-icon.png",
    date: new Date(),
  };

  it("renders a modal with correct information", () => {
    const isOpen = true;
    const onOpenChange = jest.fn();

    render(
      <TransactionItemModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        transaction={mockTransaction}
      />
    );

    expect(screen.getByText(mockTransaction.title)).toBeInTheDocument();
    expect(screen.getByText(mockTransaction.description!)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockTransaction.descriptionImage
    );
  });

  it("calls onOpenChange when modal is closed", () => {
    const isOpen = true;
    const onOpenChange = jest.fn();

    render(
      <TransactionItemModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        transaction={mockTransaction}
      />
    );

    fireEvent.click(screen.getByText("Close"));

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

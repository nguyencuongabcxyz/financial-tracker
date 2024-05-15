import React from "react";
import BudgetItem from "./BudgetItem";

interface BudgetSummaryProps {
  // Define your component props here
}

const BudgetSummary: React.FC<BudgetSummaryProps> = () => {
  // Component logic goes here

  return (
    // JSX markup goes here
    <div>
      <h1 className="text-lg font-bold">Budget Summary</h1>
      <BudgetItem
        budget={{
          id: 1,
          name: "Budget 1",
          totalAmount: 534000,
          spentAmount: 200000,
          icon: "/fast-food.png",
        }}
      />
      <BudgetItem
        budget={{
          id: 2,
          name: "Budget 1",
          totalAmount: 534000,
          spentAmount: 200000,
          icon: "/fast-food.png",
        }}
      />
      <BudgetItem
        budget={{
          id: 3,
          name: "Budget 1",
          totalAmount: 534000,
          spentAmount: 200000,
          icon: "/fast-food.png",
        }}
      />
    </div>
  );
};

export default BudgetSummary;

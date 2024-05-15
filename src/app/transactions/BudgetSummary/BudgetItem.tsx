import { MoneyUtils } from "@/app/utils";
import { Progress } from "@nextui-org/react";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface BudgetItemProps {
  budget: Budget;
}

const BudgetItem: React.FC<BudgetItemProps> = ({ budget }) => {
  const { id, name, totalAmount, spentAmount, icon } = budget;
  const overBudget = spentAmount > totalAmount;

  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <Image
          width={20}
          height={20}
          src={icon}
          alt="icon"
          className="rounded-full"
        />
        <h2 className="text-md font-bold">{name}</h2>
      </div>
      <Progress
        label={
          <span>
            <span className="text-md font-bold">
              {MoneyUtils.getNormalFormat(spentAmount)}
            </span>
            <span className="text-zinc-400 text-sm">
              {" "}
              of {MoneyUtils.getNormalFormat(totalAmount)}{" "}
            </span>
          </span>
        }
        size="md"
        value={spentAmount}
        maxValue={totalAmount}
        color="warning"
        showValueLabel={true}
        classNames={{
          indicator: overBudget ? "bg-danger" : "bg-success",
          value: "text-sm",
          base: "gap-1",
        }}
      />
      <p
        className={classNames({
          "text-sm text-end": true,
          "text-danger": overBudget,
          "text-success": !overBudget,
        })}
      >
        {MoneyUtils.getNormalFormat(totalAmount - spentAmount)}
      </p>
    </div>
  );
};

export default BudgetItem;

export interface Budget {
  id: number;
  name: string;
  icon: string;
  totalAmount: number;
  spentAmount: number;
}

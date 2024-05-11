import React from "react";
import classNames from "classnames";
import { Chip } from "@nextui-org/chip";
import { MoneyUtils } from "@/app/utils";

interface MoneySummaryCardProps {
  title: string;
  amount: number;
  fluctuationPercentage: number;
  className?: string;
}

const MoneySummaryCard: React.FC<MoneySummaryCardProps> = ({
  title,
  amount,
  fluctuationPercentage,
  className,
}) => {
  return (
    <div
      className={classNames({
        "p-4 bg-teal-100 rounded-md shadow-md flex flex-col gap-1": true,
        [className || ""]: className !== undefined,
      })}
      data-testid="moneyCard"
    >
      <h1 className="text-zinc-500 font-semibold text-sm">{title}</h1>
      <div className="flex items-center gap-3">
        <p className="font-bold text-lg">
          {MoneyUtils.getNormalFormat(amount)}
        </p>
        <Chip
          data-testid={
            fluctuationPercentage >= 0 ? "positiveValue" : "negativeValue"
          }
          variant="flat"
          size="sm"
          color={fluctuationPercentage >= 0 ? "success" : "danger"}
        >
          {MoneyUtils.getFluctuatedPercentageFormat(fluctuationPercentage)}
        </Chip>
      </div>
    </div>
  );
};

export default MoneySummaryCard;

import React from "react";
import classNames from "classnames";
import { Chip } from "@nextui-org/chip";

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
        <p className="font-bold text-lg">{amount.toLocaleString()} VND</p>
        {fluctuationPercentage > 0 ? (
          <Chip
            data-testid="positiveValue"
            variant="flat"
            size="sm"
            color="success"
          >
            +{fluctuationPercentage}%
          </Chip>
        ) : (
          <Chip
            data-testid="negativeValue"
            variant="flat"
            size="sm"
            color="danger"
          >
            {fluctuationPercentage}%
          </Chip>
        )}
      </div>
    </div>
  );
};

export default MoneySummaryCard;

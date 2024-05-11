import React from "react";
import TransactionItem, { Transaction } from "./TransactionItem";
import { DateTimeUtils } from "@/app/utils";
import classNames from "classnames";

interface TransactionGroupProps {
  date: Date;
  transactions: Transaction[];
}

const TransactionGroup: React.FC<TransactionGroupProps> = ({
  transactions,
  date,
}) => {
  return (
    <ul>
      <h1 className="text-zinc-500 mb-3">
        {DateTimeUtils.getPrettyDateFormat(date)}
      </h1>
      {transactions.map((transaction, index) => (
        <li
          className={classNames({
            "bg-zinc-50": index % 2 !== 0,
          })}
          key={transaction.id}
        >
          <TransactionItem transaction={transaction} />
        </li>
      ))}
    </ul>
  );
};

export default TransactionGroup;

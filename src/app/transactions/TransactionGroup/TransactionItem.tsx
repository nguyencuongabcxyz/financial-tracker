"use client";

import Image from "next/image";
import React from "react";
import { Chip } from "@nextui-org/react";
import classNames from "classnames";
import { Button, useDisclosure } from "@nextui-org/react";
import { GoInfo } from "react-icons/go";
import { DateTimeUtils, MoneyUtils } from "@/app/utils";
import TransactionItemModal from "./TransactionItemModal";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { title, description, amount, category, categoryIcon, date } =
    transaction;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const positiveAmount = amount > 0;

  return (
    <>
      <div className="grid grid-cols-12 justify-between items-center p-2 hover:bg-zinc-100">
        <div className="col-span-6 flex items-center gap-2">
          <Image
            width={30}
            height={30}
            className="rounded-md"
            src={categoryIcon}
            alt="transactionIcon"
          />
          <div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm text-zinc-400">
              {DateTimeUtils.getPrettyDateTimeFormat(date)}
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <Chip
            size="sm"
            className="rounded-lg"
            color={positiveAmount ? "success" : "danger"}
            variant="dot"
          >
            {category}
          </Chip>
        </div>
        <div className="col-span-3 flex items-center justify-end gap-3">
          <p
            className={classNames({
              "text-sm": true,
              "text-success": positiveAmount,
              "text-danger": !positiveAmount,
            })}
          >
            {MoneyUtils.getFluctuatedFormat(amount)}
          </p>
          <Button
            onPress={onOpen}
            isIconOnly
            data-testid="transactionInfoButton"
            size="sm"
            variant="light"
            color="default"
            aria-label="Like"
          >
            <GoInfo size={16} />
          </Button>
        </div>
      </div>
      <TransactionItemModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        transaction={transaction}
      />
    </>
  );
};

export interface Transaction {
  id: number;
  title: string;
  description?: string;
  descriptionImage?: string;
  amount: number;
  category: string;
  categoryIcon: string;
  date: Date;
}

export default TransactionItem;

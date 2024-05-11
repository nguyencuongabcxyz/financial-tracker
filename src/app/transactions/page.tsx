import React from "react";
import TransactionGroup from "./TransactionGroup/TransactionGroup";
import TransactionActionBar from "./TransactionActionBar/TransactionActionBar";
import { Transaction } from "./TransactionGroup/TransactionItem";
import TransactionStatistics from "./TransactionStatistics/TransactionStatistics";

const Page: React.FC = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="flex flex-col col-span-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Transactions</h1>
          <div>
            <TransactionActionBar />
          </div>
        </div>
        <ul className="grow h-[1px] overflow-y-auto">
          {mockTransactionGroups.map((transactionGroup) => (
            <li key={transactionGroup.date.toString()}>
              <TransactionGroup
                date={transactionGroup.date}
                transactions={transactionGroup.transactions}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4">
        <div className="w-full h-[400px]">
          <TransactionStatistics />
        </div>
        <div></div>
      </div>
    </div>
  );
};

interface TransactionGroupData {
  date: Date;
  transactions: Transaction[];
}

const mockTransactionGroups: TransactionGroupData[] = [
  {
    date: new Date(),
    transactions: [
      {
        id: 1,
        title: "Transaction 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        amount: -1000000,
        category: "Food",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
      {
        id: 2,
        title: "Transaction 1",
        description: "This is transaction 1",
        amount: 100,
        category: "Food",
        descriptionImage: "/descriptionImage.png",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
    ],
  },
  {
    date: new Date(),
    transactions: [
      {
        id: 1,
        title: "Transaction 145",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        amount: -1000000,
        category: "Food",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
      {
        id: 2,
        title: "Transaction 13434",
        description: "This is transaction 1",
        amount: 100,
        category: "Food",
        descriptionImage: "/descriptionImage.png",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
    ],
  },
  {
    date: new Date(),
    transactions: [
      {
        id: 1,
        title: "Transaction 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        amount: -1000000,
        category: "Food",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
      {
        id: 2,
        title: "Transaction 1",
        description: "This is transaction 1",
        amount: 100,
        category: "Food",
        descriptionImage: "/descriptionImage.png",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
    ],
  },
  {
    date: new Date(),
    transactions: [
      {
        id: 1,
        title: "Transaction 145",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        amount: -1000000,
        category: "Food",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
      {
        id: 2,
        title: "Transaction 13434",
        description: "This is transaction 1",
        amount: 100,
        category: "Food",
        descriptionImage: "/descriptionImage.png",
        categoryIcon: "/fast-food.png",
        date: new Date(),
      },
    ],
  },
];

export default Page;

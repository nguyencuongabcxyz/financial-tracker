"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import BarChart from "./BarChart";

function TransactionStatistics() {
  return (
    <div>
      <h1 className="font-bold text-lg mb-2">Transaction Statistics</h1>
      <Tabs className="w-full justify-center" size="sm" aria-label="Options">
        <Tab key="income" title="Income">
          <div className="h-[300px]">
            <BarChart />
          </div>
        </Tab>
        <Tab key="expense" title="Expense">
          <div className="h-[300px]">
            <BarChart />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TransactionStatistics;

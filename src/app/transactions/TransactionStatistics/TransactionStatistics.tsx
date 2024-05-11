"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import BarChart from "./BarChart";

function TransactionStatistics() {
  return (
    <div>
      <h1>Transaction Statistics</h1>
      <Tabs size="sm" aria-label="Options">
        <Tab key="income" title="Income">
          <BarChart />
        </Tab>
        <Tab key="expense" title="Expense">
          <BarChart />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TransactionStatistics;

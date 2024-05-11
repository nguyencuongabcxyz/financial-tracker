import React from "react";
import { DateRangePicker } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CiFilter } from "react-icons/ci";

const TransactionActionBar: React.FC = () => {
  return (
    <div className="flex gap-3 items-center">
      <DateRangePicker size="sm" label="Duration" className="max-w-xs" />
      <Button
        color="default"
        size="sm"
        variant="bordered"
        startContent={<CiFilter size={30} />}
      >
        Filter
      </Button>
    </div>
  );
};

export default TransactionActionBar;

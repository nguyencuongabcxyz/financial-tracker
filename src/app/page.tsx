import { Button } from "@nextui-org/button";
import MoneySummaryCard from "./components/MoneySummaryCard/MoneySummaryCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <MoneySummaryCard
        title="Income This Month"
        amount={32500000}
        fluctuationPercentage={-20}
        className="bg-indigo-100"
      />
      <Button size="sm" radius="none">
        Click Me
      </Button>
    </main>
  );
}

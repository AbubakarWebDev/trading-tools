import { PositionSizeCalculator } from "@/features/position-size-calculator";
import { ExplanationCard } from "@/features/position-size-calculator/explanation-card";
import { CalculationExampleCard } from "@/features/position-size-calculator/calculation-example-card";

export default function Home() {
  return (
    <div className="mx-auto max-w-11/12 py-8 space-y-6">
      <PositionSizeCalculator />
      <ExplanationCard />
      <CalculationExampleCard />
    </div>
  );
}

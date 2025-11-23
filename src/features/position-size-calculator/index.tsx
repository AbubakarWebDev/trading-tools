"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

import { FieldGroup, FieldSeparator } from "@/components/ui/field";
import {
  positionSizeCalculatorFormSchema,
  PositionSizeCalculatorFormValues,
} from "./schema";
import { performCalculations } from "./utils";
import { FormField } from "./form-field";
import { OutputField } from "./output-field";

const DEFAULT_FORM_VALUES: PositionSizeCalculatorFormValues = {
  accountBalance: "10000",
  riskPercent: "0.35",
  entryPoint: "24968",
  stopLoss: "25269",
  pipSize: "0.1",
  pipValue: "0.1",
  riskReward: "1",
};

export function PositionSizeCalculator() {
  const form = useForm<PositionSizeCalculatorFormValues>({
    resolver: zodResolver(positionSizeCalculatorFormSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const values = form.watch();
  const calculations = useMemo(() => performCalculations(values), [values]);

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Universal Position Size Calculator
        </h1>
      </div>

      <form id="position-size-form">
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <FieldGroup>
            <h2 className="text-xl font-semibold mb-4">Input Parameters</h2>

            <FormField
              name="accountBalance"
              control={form.control}
              label="Account Balance"
              id="account-balance"
            />
            <FormField
              name="riskPercent"
              control={form.control}
              label="Risk (in %)"
              id="risk-percent"
            />
            <FormField
              name="entryPoint"
              control={form.control}
              label="Entry Point"
              id="entry-point"
            />
            <FormField
              name="stopLoss"
              control={form.control}
              label="Stop Loss"
              id="stop-loss"
            />
            <FormField
              name="pipSize"
              control={form.control}
              label="Pip Size"
              id="pip-size"
            />
            <FormField
              name="pipValue"
              control={form.control}
              label="Pip Value"
              id="pip-value"
            />
            <FormField
              name="riskReward"
              control={form.control}
              label="Risk:Reward"
              id="risk-reward"
            />
          </FieldGroup>
        </div>

        <FieldSeparator className="my-8" />

        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <FieldGroup>
            <h2 className="text-xl font-semibold mb-4">Calculated Outputs</h2>

            <OutputField
              label="Position Size"
              value={calculations.positionSize}
            />
            <OutputField
              label="Take Profit 1"
              value={calculations.takeProfit1}
            />
            <OutputField
              label="Take Profit 2"
              value={calculations.takeProfit2}
            />
            <OutputField
              label="Take Profit 3"
              value={calculations.takeProfit3}
            />
          </FieldGroup>
        </div>
      </form>
    </div>
  );
}

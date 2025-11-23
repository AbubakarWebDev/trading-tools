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
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mb-10 text-center sm:mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Position Size Calculator
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Calculate optimal position sizes and take profit levels
        </p>
      </div>

      <form id="position-size-form" className="space-y-8">
        <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-foreground sm:text-xl">
                Input Parameters
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter your trading parameters to calculate position size
              </p>
            </div>

            <FieldGroup className="gap-6 sm:gap-7">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <FormField
                  name="accountBalance"
                  control={form.control}
                  label="Account Balance"
                  id="account-balance"
                />
                <FormField
                  name="riskPercent"
                  control={form.control}
                  label="Risk (%)"
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
              </div>
            </FieldGroup>
          </div>
        </div>

        <FieldSeparator className="my-8" />

        <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-foreground sm:text-xl">
                Calculated Results
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your calculated position size and take profit levels
              </p>
            </div>

            <FieldGroup className="gap-6 sm:gap-7">
              <div className="grid gap-6 sm:grid-cols-2">
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
              </div>
            </FieldGroup>
          </div>
        </div>
      </form>
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

import { FieldGroup } from "@/components/ui/field";
import {
  positionSizeCalculatorFormSchema,
  PositionSizeCalculatorFormValues,
} from "./schema";
import { performCalculations } from "./utils";
import { FormField } from "./form-field";
import { OutputField } from "./output-field";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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
    <>
      <div className="mb-10 text-center sm:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Position Size Calculator
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Calculate optimal position sizes and take profit levels
        </p>
      </div>

      <form className="flex lg:flex-row flex-col gap-6 w-full mb-10">
        <Card className="transition-all duration-200 hover:shadow-md lg:w-1/2 w-full">
          <CardHeader>
            <CardTitle>Input Parameters</CardTitle>
            <CardDescription>
              Enter your trading parameters to calculate position size
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md lg:w-1/2 w-full">
          <CardHeader>
            <CardTitle>Calculated Results</CardTitle>
            <CardDescription>
              Your calculated position size and take profit levels
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </form>
    </>
  );
}

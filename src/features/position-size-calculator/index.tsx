"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { Settings, TrendingUp, Calculator } from "lucide-react";

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
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-3 rounded-xl bg-primary/10">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary text-left sm:text-4xl">
            Position Size Calculator
          </h1>
        </div>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Calculate optimal position sizes and take profit levels
        </p>
      </div>

      <form className="flex lg:flex-row flex-col gap-6 w-full mb-10">
        <Card className="transition-all duration-200 hover:shadow-md lg:w-1/2 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Input Parameters
            </CardTitle>
            <CardDescription>
              Enter your trading parameters to calculate position size
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup className="gap-6 sm:gap-7">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="accountBalance"
                    control={form.control}
                    label="Account Balance"
                    id="account-balance"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="riskPercent"
                    control={form.control}
                    label="Risk (%)"
                    id="risk-percent"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="entryPoint"
                    control={form.control}
                    label="Entry Point"
                    id="entry-point"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="stopLoss"
                    control={form.control}
                    label="Stop Loss"
                    id="stop-loss"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="pipSize"
                    control={form.control}
                    label="Pip Size"
                    id="pip-size"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <FormField
                    name="pipValue"
                    control={form.control}
                    label="Pip Value"
                    id="pip-value"
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors sm:col-span-2 lg:col-span-3">
                  <FormField
                    name="riskReward"
                    control={form.control}
                    label="Risk:Reward"
                    id="risk-reward"
                  />
                </div>
              </div>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md lg:w-1/2 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Calculated Results
            </CardTitle>
            <CardDescription>
              Your calculated position size and take profit levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup className="gap-6 sm:gap-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-5 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <OutputField
                    label="Position Size"
                    value={calculations.positionSize}
                  />
                </div>
                <div className="p-5 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <OutputField
                    label="Take Profit 1"
                    value={calculations.takeProfit1}
                  />
                </div>
                <div className="p-5 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <OutputField
                    label="Take Profit 2"
                    value={calculations.takeProfit2}
                  />
                </div>
                <div className="p-5 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <OutputField
                    label="Take Profit 3"
                    value={calculations.takeProfit3}
                  />
                </div>
              </div>
            </FieldGroup>
          </CardContent>
        </Card>
      </form>
    </>
  );
}

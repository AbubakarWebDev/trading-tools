import z from "zod";

export const positionSizeCalculatorFormSchema = z.object({
  accountBalance: z
    .string()
    .min(1, "Account balance is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Account balance must be a positive number",
    }),
  riskPercent: z
    .string()
    .min(1, "Risk percentage is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) <= 100,
      {
        message: "Risk must be between 0 and 100",
      }
    ),
  entryPoint: z
    .string()
    .min(1, "Entry point is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Entry point must be a positive number",
    }),
  stopLoss: z
    .string()
    .min(1, "Stop loss is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Stop loss must be a positive number",
    }),
  pipSize: z
    .string()
    .min(1, "Pip size is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Pip size must be a positive number",
    }),
  pipValue: z
    .string()
    .min(1, "Pip value is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Pip value must be a positive number",
    }),
  riskReward: z
    .string()
    .min(1, "Risk:Reward is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Risk:Reward must be a positive number",
    }),
});

export type PositionSizeCalculatorFormValues = z.infer<
  typeof positionSizeCalculatorFormSchema
>;

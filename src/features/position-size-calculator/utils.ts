import type { PositionSizeCalculatorFormValues } from "./schema";

interface CalculationResult {
  positionSize: number;
  takeProfit1: number;
  takeProfit2: number;
  takeProfit3: number;
}

const EMPTY_CALCULATION: CalculationResult = {
  positionSize: 0,
  takeProfit1: 0,
  takeProfit2: 0,
  takeProfit3: 0,
};

export function performCalculations(
  values: PositionSizeCalculatorFormValues
): CalculationResult {
  const parsed = parseFormValues(values);

  if (!areAllValuesValid(parsed)) {
    return EMPTY_CALCULATION;
  }

  const riskAmount = calculateRiskAmount(
    parsed.accountBalance,
    parsed.riskPercent
  );
  const pipsDifference = calculatePipsDifference(
    parsed.entryPoint,
    parsed.stopLoss,
    parsed.pipSize
  );
  const positionSize = calculatePositionSize(
    riskAmount,
    pipsDifference,
    parsed.pipValue
  );
  const [takeProfit1, takeProfit2, takeProfit3] = calculateTakeProfitLevels(
    parsed.entryPoint,
    parsed.stopLoss,
    parsed.riskReward
  );

  return {
    positionSize,
    takeProfit1,
    takeProfit2,
    takeProfit3,
  };
}

function calculateRiskAmount(
  accountBalance: number,
  riskPercent: number
): number {
  return (accountBalance * riskPercent) / 100;
}

function calculatePipsDifference(
  entryPoint: number,
  stopLoss: number,
  pipSize: number
): number {
  return Math.abs(entryPoint - stopLoss) / pipSize;
}

function calculatePositionSize(
  riskAmount: number,
  pipsDifference: number,
  pipValue: number
): number {
  return Math.max(0, riskAmount / (pipsDifference * pipValue));
}

const TAKE_PROFIT_SEGMENTS = 3;

function calculateTakeProfitLevels(
  entryPoint: number,
  stopLoss: number,
  riskReward: number
): [number, number, number] {
  // Determine if it's a long or short position
  const isLong = stopLoss < entryPoint;
  const riskDistance = Math.abs(entryPoint - stopLoss);

  // Split the reward into segments
  const segment = riskReward / TAKE_PROFIT_SEGMENTS;

  let takeProfit1: number;
  let takeProfit2: number;
  let takeProfit3: number;

  if (isLong) {
    // Long position: take profit above entry
    takeProfit1 = entryPoint + riskDistance * segment;
    takeProfit2 = entryPoint + riskDistance * (segment * 2);
    takeProfit3 = entryPoint + riskDistance * (segment * 3);
  } else {
    // Short position: take profit below entry
    takeProfit1 = entryPoint - riskDistance * segment;
    takeProfit2 = entryPoint - riskDistance * (segment * 2);
    takeProfit3 = entryPoint - riskDistance * (segment * 3);
  }

  return [takeProfit1, takeProfit2, takeProfit3];
}

type ParsedFormValues = {
  [K in keyof PositionSizeCalculatorFormValues]: number;
};

function parseFormValues(
  values: PositionSizeCalculatorFormValues
): ParsedFormValues {
  return {
    accountBalance: Number(values.accountBalance) || 0,
    riskPercent: Number(values.riskPercent) || 0,
    entryPoint: Number(values.entryPoint) || 0,
    stopLoss: Number(values.stopLoss) || 0,
    pipSize: Number(values.pipSize) || 0,
    pipValue: Number(values.pipValue) || 0,
    riskReward: Number(values.riskReward) || 0,
  };
}

function areAllValuesValid(parsed: ParsedFormValues): boolean {
  return Object.values(parsed).every((value) => value > 0);
}

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Calculator,
  DollarSign,
  TrendingDown,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const CalculationExampleCard = () => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Step-by-Step Calculation Example
        </CardTitle>
        <CardDescription>
          Learn how to calculate position size using a real-world gold trading
          example
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Initial Parameters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                Initial Parameters
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Account Balance
                </div>
                <div className="text-lg font-semibold text-foreground">
                  $5,000
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Risk
                </div>
                <div className="text-lg font-semibold text-foreground">
                  1% = $50
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Entry Price
                </div>
                <div className="text-lg font-semibold text-foreground font-mono">
                  2400.00
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Stop Loss Price
                </div>
                <div className="text-lg font-semibold text-foreground font-mono">
                  2397.50
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: SL Distance Calculation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div className="flex items-center gap-2 flex-1">
                <TrendingDown className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">
                  Calculate Stop Loss Distance
                </h3>
              </div>
            </div>

            <div className="ml-11 space-y-4">
              <div className="p-4 rounded-lg border-l-4 border-l-primary bg-primary/5">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  SL Distance (in price units)
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                    Entry Price - Stop Loss Price
                  </code>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                    2400.00 - 2397.50
                  </code>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono text-primary font-semibold">
                    2.50
                  </code>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Pip Definition for Gold
                </div>
                <div className="text-sm text-foreground">
                  For gold, <span className="font-semibold">1 pip = 0.01</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border-l-4 border-l-primary bg-primary/5">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  SL Distance (in Pips)
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                    2.50 ÷ 0.01
                  </code>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono text-primary font-semibold">
                    250 pips
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Pip Value Explanation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div className="flex items-center gap-2 flex-1">
                <DollarSign className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">
                  How much is 1 pip worth?
                </h3>
              </div>
            </div>

            <div className="ml-11 space-y-3">
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Standard Broker Criteria
                </div>
                <div className="text-sm text-foreground">
                  <span className="font-semibold">
                    1 standard lot of gold = 100 ounces
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Opening 1 full lot means controlling 100 ounces of gold.
                </div>
              </div>

              <div className="p-4 rounded-lg border-l-4 border-l-primary bg-primary/5">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Value Change Calculation
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-muted-foreground">
                      If gold price moves $0.01 (1 pip) while trading 1 full
                      lot:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mt-2">
                    <span className="text-muted-foreground">
                      Each ounce changes by $0.01
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Total for 100 ounces:
                    </span>
                    <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                      100 × 0.01 = $1
                    </code>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-primary/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Conclusion
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-mono font-semibold text-primary">
                        1 pip = $1 per standard lot for XAUUSD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Formula to find lot size */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div className="flex items-center gap-2 flex-1">
                <Calculator className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">
                  Formula to Find the Correct Lot Size
                </h3>
              </div>
            </div>

            <div className="ml-11 space-y-4">
              <div className="p-5 rounded-lg border-2 border-primary/20 bg-primary/5">
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  Formula
                </div>
                <div className="text-center mb-4">
                  <code className="text-lg font-mono font-semibold text-foreground">
                    Lots = Risk Amount ÷ (Stop Loss Pips × Pip Value per
                    Standard Lot)
                  </code>
                </div>
                <div className="space-y-3 pt-3 border-t border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">
                    Plug in values:
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                        Lots = 50 ÷ (250 × 1)
                      </code>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                        Lots = 50 ÷ 250
                      </code>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="px-3 py-1.5 rounded bg-background border font-mono text-primary font-semibold text-base">
                        Lots = 0.20 standard lots
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Risk Verification */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                4
              </div>
              <div className="flex items-center gap-2 flex-1">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">
                  Risk Verification
                </h3>
              </div>
            </div>

            <div className="ml-11 space-y-3">
              <div className="p-4 rounded-lg border bg-muted/30">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      SL (Stop Loss) in pips
                    </div>
                    <div className="text-sm font-semibold text-foreground font-mono">
                      250 pips
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      Value of each pip for calculated lot size
                    </div>
                    <div className="text-sm font-semibold text-foreground font-mono">
                      $1 × 0.20 = $0.2 per pip
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border-l-4 border-l-primary bg-primary/5">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Total Risk
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono">
                    250 pips × $0.2 per pip
                  </code>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <code className="px-3 py-1.5 rounded bg-background border text-sm font-mono text-primary font-semibold">
                    $50
                  </code>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-green-500/10 border-green-500/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Verification Complete
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hence proved risk is the same as what our 1% risk allows.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

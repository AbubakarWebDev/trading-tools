import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Info, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

export const ExplanationCard = () => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          Understanding Pip Size & Pip Value
        </CardTitle>
        <CardDescription>
          Learn how pip size and pip value work in trading calculations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Pip Size Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Pip Size
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pip size means the smallest price movement an asset can make.
                  The pip size always depends on how many decimals the broker
                  uses to display price.
                </p>
              </div>
            </div>

            {/* Examples Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-4">
              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Gold (XAUUSD)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-foreground">
                    0.01
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    2350.00 → 2350.01
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  EUR/USD
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-foreground">
                    0.0001
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    1.1000 → 1.1001
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Apple (AAPL)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-foreground">
                    0.01
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    170.00 → 170.01
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  ELDE/USDT
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-foreground">
                    0.000001
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    0.006366 → 0.006367
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Pip Value Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Pip Value
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pip value means how much money you gain or lose when the price
                  moves by one pip. It depends on your lot size and the pip
                  size.
                </p>
              </div>
            </div>

            {/* Examples Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  1 Standard Lot Gold
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $1
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.01 move = $1
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  1 Standard Lot EUR/USD
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $10
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.0001 move = $10
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  1 Share Apple
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $0.01
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.01 move = $0.01
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  100 Shares Apple
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $1
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.01 move = $1
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  1 ELDE Coin
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $0.000001
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.000001 move = $0.000001
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  10,000 ELDE Coins
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      $0.01
                    </span>
                    <span className="text-xs text-muted-foreground">
                      per pip
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Each 0.000001 move = $0.01
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resource */}
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              For calculating the pip value of currency pairs:{" "}
              <a
                href="https://www.myfxbook.com/forex-calculators/pip-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                myfxbook.com/forex-calculators/pip-calculator
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/utils/classname";

interface OutputFieldProps {
  label: string;
  value: number;
}

export function OutputField({ label, value }: OutputFieldProps) {
  return (
    <Field>
      <FieldLabel className="text-xs font-medium text-muted-foreground mb-2">
        {label}
      </FieldLabel>
      <div
        className={cn(
          "relative h-12 w-full rounded-lg border border-border bg-background px-4 py-3",
          "flex items-center text-lg font-semibold text-foreground font-mono",
          "transition-all duration-200",
          "sm:text-base",
          "shadow-sm"
        )}
        role="textbox"
        aria-label={`${label}: ${value.toFixed(2)}`}
        tabIndex={0}
      >
        <span className="select-all">{value.toFixed(2)}</span>
      </div>
    </Field>
  );
}

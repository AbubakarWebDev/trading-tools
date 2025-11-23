import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/utils/classname";

interface OutputFieldProps {
  label: string;
  value: number;
}

export function OutputField({ label, value }: OutputFieldProps) {
  return (
    <Field>
      <FieldLabel className="text-sm font-medium text-foreground">
        {label}
      </FieldLabel>
      <div
        className={cn(
          "relative h-11 w-full rounded-md border border-border bg-muted/50 px-4 py-2.5",
          "flex items-center text-base font-medium text-foreground",
          "transition-all duration-200",
          "sm:text-sm",
          "focus-within:border-ring/50 focus-within:bg-muted/70"
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

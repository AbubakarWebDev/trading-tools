import { Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/utils/classname";

interface OutputFieldProps {
  label: string;
  value: number;
}

export function OutputField({ label, value }: OutputFieldProps) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <div
        className={cn(
          "h-9 w-full rounded-md border bg-muted px-3 py-1 text-base flex items-center",
          "md:text-sm"
        )}
      >
        {value.toFixed(2)}
      </div>
    </Field>
  );
}

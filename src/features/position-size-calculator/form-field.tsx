import { Control, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { PositionSizeCalculatorFormValues } from "./schema";

interface FormFieldProps {
  id: string;
  label: string;
  name: keyof PositionSizeCalculatorFormValues;
  control: Control<PositionSizeCalculatorFormValues>;
}

export function FormField({ name, control, label, id }: FormFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <Input
            {...field}
            id={id}
            step="0.01"
            type="number"
            autoComplete="off"
            className="text-base"
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

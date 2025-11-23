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
        <Field
          data-invalid={fieldState.invalid}
          className="transition-all duration-200"
        >
          <FieldLabel
            htmlFor={id}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </FieldLabel>
          <Input
            {...field}
            id={id}
            step="0.01"
            type="number"
            autoComplete="off"
            className="h-11 text-base transition-all duration-200 sm:text-sm"
            aria-invalid={fieldState.invalid}
            aria-describedby={fieldState.invalid ? `${id}-error` : undefined}
          />
          {fieldState.invalid && (
            <FieldError
              id={`${id}-error`}
              errors={[fieldState.error]}
              className="mt-1.5"
            />
          )}
        </Field>
      )}
    />
  );
}

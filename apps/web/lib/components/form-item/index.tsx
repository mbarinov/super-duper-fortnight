import Input from "../input";

interface FieldState {
  value: string | undefined;
  meta: {
    errors: Array<string | undefined>;
    isTouched?: boolean;
    isValidating?: boolean;
  };
}

interface FieldApi {
  name: string;
  state: FieldState;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

interface FormItemProps {
  label: string;
  id: string;
  field?: FieldApi;
  type?: string;
  placeholder?: string;
}

function FormItem({
  label,
  id,
  field,
  type = "text",
  placeholder,
}: FormItemProps) {
  if (field) {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <Input
          id={id}
          name={field.name}
          value={field.state.value || ""}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          type={type}
          placeholder={placeholder}
        />
        {field.state.meta.errors.length > 0 &&
          field.state.meta.errors.some(Boolean) && (
            <p className="text-sm text-red-500">
              {field.state.meta.errors.filter(Boolean).join(", ")}
            </p>
          )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

export default FormItem;

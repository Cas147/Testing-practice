import { TextField, Typography } from "@mui/material";
import { InputProps } from "../pages/Login/types";

const formValidation = (
  errors: Record<string, any>,
  errorKey: string
): JSX.Element | null => {
  return (
    errors[errorKey] ? (
      <Typography color="red">{errors[errorKey]?.message}</Typography>
    ) : null
  );
};

export const CustomImput = ({
  name = "",
  label = "",
  type = "text",
  disabled = false,
  required = false,
  register,
  errors,
  placeholder = ""
}: InputProps): JSX.Element => {
  return (
    <>
      <TextField
        required={required}
        disabled={disabled}
        type={type}
        label={label}
        error={errors && !!errors[name]}
        id={name}
        variant="outlined"
        placeholder={placeholder}
        {...register(name)}
      />
      {errors && formValidation(errors, name)}
    </>
  );
};

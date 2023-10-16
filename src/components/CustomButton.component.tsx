import { Button } from "@mui/material";

type CustomButtonProps = {
  isDirty: boolean;
  isValid: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  dataTestid?: string;
};

export const CustomButton = ({
  isDirty,
  isValid,
  children,
  type,
  dataTestid
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      type={type}
      fullWidth
      variant="contained"
      disabled={!isDirty || !isValid}
      data-testid={dataTestid}
    >
      {children}
    </Button>
  );
};

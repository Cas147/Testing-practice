import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormSchema } from "./schema/login-form-schema";

import { LoginFormValues } from "./types";

import { CustomButton, CustomImput } from "../../components";
import { DisplayFormValues } from "./components";
import { callEndpoint } from "./services";

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const usernameWatch = watch("username");
  const passwordWatch = watch("password");

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const result = await callEndpoint();
      console.log("data", data);
      console.log("result", result);
      reset()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "grey.300",
        borderRadius: "30px",
        p: "50px",
        width: "50%",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <CustomImput
            name="username"
            label="Username"
            required
            register={register}
            errors={errors}
            placeholder="Jhon Doe"
          />
          <CustomImput
            name="password"
            label="Password"
            required
            register={register}
            errors={errors}
            type="password"
            placeholder="MyPassword"
          />
          <CustomButton isDirty={isDirty} isValid={isValid} type="submit" dataTestid="loginButton">
            Login
          </CustomButton>
        </Box>
      </form>
      <DisplayFormValues
        isDirty={isDirty}
        isValid={isValid}
        values={{ username: usernameWatch, password: passwordWatch }}
      />
    </Box>
  );
};

export default LoginForm;

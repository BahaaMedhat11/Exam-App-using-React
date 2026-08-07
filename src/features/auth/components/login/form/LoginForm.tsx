import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type { LoginFormValues } from "../../../types/login";
import { loginSchema } from "../../../schemas/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../../../../components/ui/field";
import { Input } from "../../../../../components/ui/input";
import { Link } from "react-router";
import { Button } from "../../../../../components/ui/button/Button";

function LoginForm() {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (values) => {
    console.log(values);
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full max-h-101.5 w-full flex-col gap-4"
      >
        {/* username */}
        <Field aria-invalid={!!form.formState.errors.username}>
          {/* label */}
          <FieldLabel htmlFor="username">User Name</FieldLabel>
          {/* field */}
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...form.register("username")}
          />
          {/* error */}
          {form.formState.errors.username && (
            <FieldError>{form.formState.errors.username?.message}</FieldError>
          )}
        </Field>

        {/* password */}
        <Field aria-invalid={!!form.formState.errors.username}>
          {/* label */}
          <FieldLabel htmlFor="password">Password</FieldLabel>
          {/* field */}
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...form.register("password")}
          />
          {/* error */}
          {form.formState.errors.password && (
            <FieldError>{form.formState.errors.password?.message}</FieldError>
          )}
          {/* description */}
          <FieldDescription>
            <Button
              nativeButton={false}
              render={<Link to="/forget-password">Forget your passowrd?</Link>}
              variant="link"
              className="w-full justify-end"
            />
          </FieldDescription>
        </Field>
        <Button type="submit" className="mt-2 w-full self-end">
          Login
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;

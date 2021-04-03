import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoginForm } from "../components/login-form";

export const AuthPage: FC<RouteComponentProps<{ type: string }>> = ({
  match: {
    params: { type },
  },
}) => {
  return (
    <main>{type === "login" ? <LoginForm /> : <div>Signup Form</div>}</main>
  );
};

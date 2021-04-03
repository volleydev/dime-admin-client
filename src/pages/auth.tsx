import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { LogIn } from "../components/login-form";
import {SignUp} from "../components/signup-form"

export const AuthPage: FC<RouteComponentProps<{ type: string }>> = ({
  match: {
    params: { type },
  },
}) => {
  return (
    <main>{type === "login" ? <LogIn /> : <SignUp/>}</main>
  );
};

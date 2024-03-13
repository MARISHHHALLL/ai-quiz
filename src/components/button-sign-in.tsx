"use client";
import React, { FC } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface ButtonSignInProps {
  title: string;
}

const ButtonSignIn: FC<ButtonSignInProps> = ({ title }) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch((error) => console.log(error));
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonSignIn;

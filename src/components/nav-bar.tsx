import Link from "next/link";
import React, { FC } from "react";
import ButtonSignIn from "./button-sign-in";
import { getAuthSession } from "@/lib/nextauth";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 w-full border-b border-zinc-300 py-2 bg-background inset-x-0 h-fit">
      <div className="flex items-center justify-between h-full gap-2 px-8 max-auto max-w-7xl">
        <Link href="/">
          <p className="rounded-lg border-2 border-black border-r-4 border-b-4 px-2 py-1 font-bold text-xl md:block dark:border-white dark:text-white hover:-translate-y-1 transition-all duration-300">
            Ai Quiz
          </p>
        </Link>
        <div>
          {session?.user ? (
            <p>hello world</p>
          ) : (
            <ButtonSignIn title="Sign in" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

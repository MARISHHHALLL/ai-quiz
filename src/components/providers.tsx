import { SessionProvider } from "next-auth/react";
import React, { FC, PropsWithChildren } from "react";

interface ProvidersProps {}

const Providers: FC<ProvidersProps> = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;

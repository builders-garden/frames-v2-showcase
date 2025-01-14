"use client";

import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const WagmiProvider = dynamic(
  () => import("@/components/providers/wagmi-provider"),
  {
    ssr: false,
  },
);

export function Providers({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session}>
      <WagmiProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}

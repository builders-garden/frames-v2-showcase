"use client";

import { Provider as ChakraProvider } from "@/components/ui/provider";
import dynamic from "next/dynamic";

const WagmiProvider = dynamic(
  () => import("@/components/providers/WagmiProvider"),
  {
    ssr: false,
  },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </WagmiProvider>
  );
}

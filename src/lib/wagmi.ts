import { createConfig, http } from "@wagmi/core";
import { base } from "@wagmi/core/chains";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(`https://mainnet.base.org`),
  },
  connectors: [farcasterFrame()],
});

export { config };

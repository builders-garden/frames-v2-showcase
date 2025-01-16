import Image from "next/image";
import { VStack, Text, HStack } from "@chakra-ui/react";
import { Subtitle } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Alert } from "@/components/ui/alert";

export const SupportedWallets = () => {
  const supportedWallets = [
    { name: "Coinbase Wallet", icon: <CoinbaseWallet /> },
    {
      name: "Rainbow Wallet",
      icon: <RainbowWallet />,
    },
  ];
  return (
    <VStack width="100%" alignItems="flex-start" gap="1.5rem">
      <VStack width="100%" alignItems="flex-start">
        <Subtitle>Supported Wallets</Subtitle>
        <Paragraph>Warpcast supports the following wallets:</Paragraph>
        <HStack gap="1rem">
          {supportedWallets.map((wallet) => (
            <HStack key={wallet.name}>
              {wallet.icon}
              <Text key={wallet.name}>{wallet.name}</Text>
            </HStack>
          ))}
        </HStack>
      </VStack>
      <Alert title={`Warning`} status="warning">
        Currently, Warpcast doesn't support Rainbow Wallet for operations on
        Base Sepolia.
      </Alert>
    </VStack>
  );
};

const CoinbaseWallet = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Coinbase Wallet Logo"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      className="isxjajm"
      fill="none"
    >
      <title>Coinbase Wallet Logo</title>
      <path
        d="M0 16C0 24.8356 7.16444 32 16 32C24.8356 32 32 24.8356 32 16C32 7.16444 24.8356 0 16 0C7.16444 0 0 7.16444 0 16ZM11.9111 10.8444C11.32 10.8444 10.8444 11.32 10.8444 11.9111V20.0889C10.8444 20.68 11.32 21.1556 11.9111 21.1556H20.0889C20.68 21.1556 21.1556 20.68 21.1556 20.0889V11.9111C21.1556 11.32 20.68 10.8444 20.0889 10.8444H11.9111Z"
        fill="#578BFA"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const RainbowWallet = () => {
  return (
    <Image
      src="/rainbow-wallet.png"
      alt="Rainbow Wallet"
      width={32}
      height={32}
    />
  );
};

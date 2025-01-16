"use client";

import { useCallback, useState } from "react";

import { VStack } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { PrimaryButton } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import CodeBlock from "@/components/ui/code-block";

import { useChainId, useSendTransaction, useSwitchChain } from "wagmi";
import { FarcasterLink } from "@/components/farcaster-link";
import { base } from "viem/chains";
import { useFrameContext } from "@/hooks/frame-context";
import { Alert } from "@/components/ui/alert";

const codeBlock = `
  const sendTx = useCallback(() => {
    sendTransaction(
      {
        // call yoink() on Yoink contract
        to: "0x4bBFD120d9f352A0BEd7a014bd67913a2007a878",
        data: "0x9846cd9efc000023c0",
      },
      {
        onSuccess: (hash) => {
          setTxHash(hash);
        },
      }
    );
  }, [sendTransaction]);
  `;

export function SendTransaction() {
  const [txHash, setTxHash] = useState<string | null>(null);
  const { context } = useFrameContext();

  const chainId = useChainId();

  const { switchChain, isPending: isSwitchChainPending } = useSwitchChain();
  const { sendTransaction } = useSendTransaction();

  const handleSwitchChain = useCallback(async () => {
    await switchChain({ chainId: base.id });
  }, [switchChain]);

  const sendTx = useCallback(async () => {
    try {
      if (chainId !== base.id) {
        throw new Error("Switch to Base first");
      }
      sendTransaction(
        {
          // call yoink() on Yoink contract
          to: "0x4bBFD120d9f352A0BEd7a014bd67913a2007a878",
          data: "0x9846cd9efc000023c0",
        },
        {
          onSuccess: (hash: string) => {
            setTxHash(hash);
            toaster.success({
              title: "Transaction sent",
              description: `Yoinked successfully, tx hash: ${hash}`,
            });
          },
        },
      );
    } catch (error) {
      toaster.error({
        title: "Transaction not sent, unknown error",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, []);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        After performing signatures, you can also send transactions using the
        user connected wallet.
      </Paragraph>

      {context ? (
        <>
          <PrimaryButton onClick={sendTx} disabled={chainId !== base.id}>
            Fire Transaction (Yoink)
          </PrimaryButton>
          {chainId !== base.id ? (
            <PrimaryButton
              onClick={handleSwitchChain}
              loading={isSwitchChainPending}
            >
              Switch to Base
            </PrimaryButton>
          ) : null}
          {txHash ? (
            <FarcasterLink
              link={`https://base.blockscout.com/tx/${txHash}`}
              text="View on Basescan"
            />
          ) : null}
        </>
      ) : (
        <Alert
          title="Bruh, again from browser? FIRE FROM FRAME 🔥"
          status="info"
        >
          If you load this site like a frames V2, you can fire transactions for
          real.
        </Alert>
      )}

      <CodeBlock
        language="typescript"
        code={codeBlock}
        title="Send Transaction"
      />

      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/getting-started#wallet-interactions"
        text="Learn more about wallet interactions and transactions here"
        fontSize="xs"
      />
    </VStack>
  );
}

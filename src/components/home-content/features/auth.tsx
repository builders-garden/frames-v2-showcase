"use client";

import { useCallback, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import { Code, VStack } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { PrimaryButton } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import { useFrameContext } from "@/hooks/frame-context";
import CodeBlock from "@/components/ui/code-block";
import { FarcasterLink } from "@/components/farcaster-link";

export const MESSAGE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours

export type SignInResult = {
  signature: string;
  message: string;
};

export function FeatureAuth() {
  const { context, isSDKLoaded } = useFrameContext();
  const [signInResult, setSignInResult] = useState<SignInResult | null>(null);

  const handleSignIn = useCallback(async () => {
    try {
      const result = await sdk.actions.signIn({
        nonce: Math.random().toString(36).substring(2),
        notBefore: new Date().toISOString(),
        expirationTime: new Date(
          Date.now() + MESSAGE_EXPIRATION_TIME,
        ).toISOString(),
      });
      setSignInResult(result);
    } catch (error) {
      toaster.error({
        title: "Profile not found, unknown error",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, []);

  if (!isSDKLoaded) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        Using the <Code>sdk.action.signIn</Code> action you can initiate a Sign
        In with Farcaster flow for the user. When you validate the returned
        message, you must check the domain.
      </Paragraph>
      <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
      {signInResult !== null && (
        <CodeBlock
          language="json"
          code={JSON.stringify(signInResult, null, 2)}
          title="signIn result"
        />
      )}
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/spec#feature-auth"
        text="Learn more about the Auth feature here"
        fontSize="xs"
      />
    </VStack>
  );
}

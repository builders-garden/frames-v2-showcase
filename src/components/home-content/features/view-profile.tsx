"use client";

import { useCallback } from "react";
import sdk from "@farcaster/frame-sdk";
import { VStack } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { PrimaryButton } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import CodeBlock from "@/components/ui/code-block";

const codeBlock = `
  import { useCallback } from "react";
  import sdk, { AddFrame } from "@farcaster/frame-sdk";

  const ViewProfileComponent = () => {
    // ... load sdk.context
    const fid = context?.user?.fid || 2;

    const viewProfile = useCallback(async () => {
      try {  
        await sdk.actions.viewProfile({ fid });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
      }
    }, []);

    return (
      <button onClick={viewProfile}>
        View profile
      </button>
    );
  }
  `;

export function ViewProfile({ fid }: { fid: number }) {
  const viewProfile = useCallback(async () => {
    try {
      await sdk.actions.viewProfile({ fid });
    } catch (error) {
      toaster.error({
        title: "Profile not found, unknown error",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, []);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        You can view the profile of a user by passing in their Farcaster ID.
        <br />
        This will trigger a dialog on farcaster native client.
      </Paragraph>
      <PrimaryButton onClick={viewProfile}>View your profile</PrimaryButton>
      <CodeBlock
        language="typescript"
        title="ViewProfile.tsx"
        code={codeBlock}
      />
    </VStack>
  );
}

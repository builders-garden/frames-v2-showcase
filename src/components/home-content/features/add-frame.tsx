"use client";

import { useCallback } from "react";
import sdk, { AddFrame as AddFrameType } from "@farcaster/frame-sdk";
import { VStack } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { PrimaryButton } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import CodeBlock from "@/components/ui/code-block";
import { FarcasterLink } from "@/components/farcaster-link";
import { useFrameContext } from "@/hooks/frame-context";
import { Alert } from "@/components/ui/alert";

const codeBlock = `
  import { useCallback } from "react";
  import sdk, { AddFrame } from "@farcaster/frame-sdk";

  const AddFrameComponent = () => {
    const addFrame = useCallback(async () => {
      try {  
        const result = await sdk.actions.addFrame();
        console.log("notification token", result.notificationDetails?.token);
        console.log("notification url", result.notificationDetails?.url);
      } catch (error) {
        if (error instanceof AddFrame.RejectedByUser) {
        throw new Error(error.message);
        } else if (error instanceof AddFrame.InvalidDomainManifest) {
          throw new Error(error.message);
        } else {
          throw new Error(error instanceof Error ? error.message : "Unknown error");
        }
      }
    }, []);

    return (
      <button onClick={addFrame}>
        Add this frame
      </button>
    );
  }
  `;

export function AddFrame() {
  const { context } = useFrameContext();

  const addFrame = useCallback(async () => {
    try {
      const result = await sdk.actions.addFrame();

      toaster.success({
        title: "Frame added",
        description: result.notificationDetails
          ? `Added, got notificaton token ${result.notificationDetails.token} and url ${result.notificationDetails.url}`
          : "Added, got no notification details",
      });
    } catch (error) {
      if (error instanceof AddFrameType.RejectedByUser) {
        toaster.error({
          title: "Frame not added, rejected by user",
          description: error.message,
        });
      } else if (error instanceof AddFrameType.InvalidDomainManifest) {
        toaster.error({
          title: "Frame not added, invalid domain manifest",
          description: error.message,
        });
      } else {
        toaster.error({
          title: "Frame not added, unknown error",
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  }, []);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        When your frame loads, the parent Farcaster app provides it with context
        information, including the current user. Let's take a look at it.
      </Paragraph>
      <Paragraph>
        The user can add a frame to their Farcaster app, either through an SDK
        action or directly (e.g. from a deep link). This will add the frame to
        the user's Frame Explorer section and will allow to accept notifications
        from the frame.
      </Paragraph>
      {context ? (
        <PrimaryButton onClick={addFrame}>Add this frame</PrimaryButton>
      ) : (
        <Alert
          title="Do you like this? Add me to your Farcaster app 👀"
          status="info"
        >
          If you load this site like a frame V2, you can try the Add Frame
          feature directly and retrieve me from the Frame Explorer section.
        </Alert>
      )}
      <CodeBlock title="AddFrame.tsx" language="typescript" code={codeBlock} />
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/spec#feature-add-frame"
        text="Learn more about the add frame action here"
        fontSize="xs"
      />
    </VStack>
  );
}

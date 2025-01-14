"use client";

import { useCallback } from "react";
import sdk, { AddFrame as AddFrameType } from "@farcaster/frame-sdk";

import { VStack } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import CodeBlock from "@/components/ui/code-block";

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
      <Button onClick={addFrame}>Add this frame</Button>
      <CodeBlock language="typescript" code={codeBlock} />
    </VStack>
  );
}

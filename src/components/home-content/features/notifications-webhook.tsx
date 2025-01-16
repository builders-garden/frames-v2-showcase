"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import { useFrameContext } from "@/hooks/frame-context";
import { useUser } from "@/hooks/use-user";
import { Code, VStack, Separator } from "@chakra-ui/react";
import { FrameNotificationDetails } from "@farcaster/frame-sdk";
import { useCallback, useState } from "react";

const exampleContext = {
  user: {
    fid: 262800,
    username: "itsmide.eth",
    displayName: "Fraye",
    pfpUrl:
      "https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/bc698287-5adc-4cc5-a503-de16963ed900/anim=false,fit=contain,f=auto,w=336",
  },
  client: {
    clientFid: "number",
    added: "boolean",
    safeAreaInsets: "SafeAreaInsets",
    notificationDetails: "FrameNotificationDetails",
  },
  location: null,
};

export function NotificationsWebhook() {
  const [notificationDetails, setNotificationDetails] =
    useState<FrameNotificationDetails | null>(null);
  const [sendNotificationResult, setSendNotificationResult] = useState("");
  const [isSendingNotification, setIsSendingNotification] = useState(false);

  const { context, isSDKLoaded } = useFrameContext();
  const { user, isLoading } = useUser(
    context?.user.fid || exampleContext.user.fid,
  );

  const sendNotification = useCallback(async () => {
    setSendNotificationResult("Checking...");
    setIsSendingNotification(true);
    if (!user || !user.token || !context) {
      setSendNotificationResult("No user or token");
      setIsSendingNotification(false);
      return;
    }
    setSendNotificationResult("Sending...");

    try {
      const response = await fetch("/api/send-notification", {
        method: "POST",
        mode: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fid: context.user.fid,
          title: "Gm from Farcaster FramesV2 Showcase team",
          text:
            "This is a test notification for you " + context.user.displayName,
        }),
      });

      if (response.status === 200) {
        setSendNotificationResult("Success");
        setIsSendingNotification(false);
        return;
      } else if (response.status === 429) {
        setSendNotificationResult("Rate limited");
        setIsSendingNotification(false);
        return;
      }

      const data = await response.text();
      setSendNotificationResult(`Error: ${data}`);
      setIsSendingNotification(false);
    } catch (error) {
      setSendNotificationResult(`Error: ${error}`);
    }
  }, [context, notificationDetails, isSDKLoaded]);

  console.log({
    user: user,
    context: context,
    isLoading: isLoading,
  });

  if (!isSDKLoaded) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        Frames v2 allow developers to send notifications to users who have
        "added" the frame to their Farcaster client and enabled notifications.
      </Paragraph>

      {context?.client && (
        <Alert
          title={`hey ${context.user.displayName}, check this out!`}
          status="info"
        >
          Looking at the context object we can see that you have added the frame
          to the <Code>client {context?.client.clientFid}</Code>
        </Alert>
      )}

      <Paragraph>
        In Warpcast, these are in-app notifications that trigger the red dot on
        the notifications tab.
      </Paragraph>

      <Separator />

      <Paragraph fontWeight="bold">Let's try it out!</Paragraph>

      <Paragraph>
        Now it&apos;s your turn to send a notification to yourself!
      </Paragraph>

      {!user || !user.token || !context || !isSDKLoaded ? (
        <Alert title="Wait!" status="error">
          You need to view this page as a FrameV2 in order to try this feature.
        </Alert>
      ) : (
        <>
          <Paragraph>
            Click the button below to send a test notification.
          </Paragraph>
          {sendNotificationResult && (
            <div className="mb-2 text-sm">
              Send notification result: {sendNotificationResult}
            </div>
          )}
          <div className="mb-4 w-full">
            <Button
              loadingText="Sending..."
              onClick={sendNotification}
              disabled={!user || !user.token || !context || !isSDKLoaded}
              loading={isSendingNotification}
              className="w-full"
            >
              Send notification
            </Button>
          </div>
        </>
      )}
    </VStack>
  );
}

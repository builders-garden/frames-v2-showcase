"use client";

import { FarcasterLink } from "@/components/farcaster-link";
import { Alert } from "@/components/ui/alert";
import { PrimaryButton } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Paragraph } from "@/components/ui/paragraph";
import { useFrameContext } from "@/hooks/frame-context";
import { useUser } from "@/hooks/use-user";
import { Code, VStack, Separator, Input, Textarea } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export function NotificationsWebhook() {
  const [sendNotificationResult, setSendNotificationResult] = useState("");
  const [isSendingNotification, setIsSendingNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const { context, isSDKLoaded } = useFrameContext();
  const { user, isLoading } = useUser(context?.user.fid);

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
          title: "Farcaster FramesV2 Showcase",
          text:
            notificationText.length > 0
              ? notificationText
              : `gm ${context.user.displayName}, it's me from the FramesV2 Showcase and this is a test notification for myself`,
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
  }, [context, isSDKLoaded, user, user?.token]);

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

      <Paragraph fontWeight="bold">Let's try it out!</Paragraph>

      {!user || !user.token || !context || !isSDKLoaded ? (
        <Alert title="Wait!" status="error">
          Whooooops! It seems like you aren't viewing this from a frames V2 or
          you haven&apos;t added the frame to your Farcaster app yet. If you
          want to try this feature, please open this page in a frames V2 and add
          the frame to your Farcaster app.
        </Alert>
      ) : (
        <>
          <Paragraph>
            Type what ever you want to tell to yourself and click the button
            below to send a test notification.
          </Paragraph>
          <Field label="Your message">
            <Textarea
              outline="none"
              resize="none"
              placeholder={`gm ${context.user.displayName}, it's me from the FramesV2 Showcase and this is a test notification for myself`}
              value={notificationText}
              onChange={(e) => setNotificationText(e.target.value)}
              borderColor="border.emphasized"
            />
          </Field>
          <div className="mb-4 w-full">
            {sendNotificationResult && (
              <div className="mb-2 text-sm">
                Send notification result: {sendNotificationResult}
              </div>
            )}
            <PrimaryButton
              loadingText="Sending..."
              onClick={sendNotification}
              disabled={!user || !user.token || !context || !isSDKLoaded}
              loading={isSendingNotification}
              className="w-full"
            >
              Send notification
            </PrimaryButton>
          </div>
        </>
      )}
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/notifications_webhooks"
        text="Learn more about the Notifications & Webhook feature here"
        fontSize="xs"
      />
    </VStack>
  );
}

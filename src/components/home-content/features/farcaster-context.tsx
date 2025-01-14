import { Alert } from "@/components/ui/alert";
import CodeBlock from "@/components/ui/code-block";
import { Paragraph } from "@/components/ui/paragraph";
import { Code, VStack } from "@chakra-ui/react";
import { Context } from "@farcaster/frame-sdk";
import { LuBadgeAlert } from "react-icons/lu";

interface FarcasterContextProps {
  context: Context.FrameContext | null;
  isSDKLoaded: boolean;
}

const exampleContext = {
  user: {
    fid: 3,
    username: "dwr.eth",
    displayName: "Dan Romero",
    pfpUrl:
      "https://pbs.twimg.com/profile_images/1440899720624421890/5zXvP7Yi_400x400.jpg",
  },
  client: {
    clientFid: "number",
    added: "boolean",
    safeAreaInsets: "SafeAreaInsets",
    notificationDetails: "FrameNotificationDetails",
  },
  location: null,
};

export default function FarcasterContext({
  context,
  isSDKLoaded,
}: FarcasterContextProps) {
  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        When your frame loads, the parent Farcaster app provides it with context
        information, including the current user. Let's take a look at it.
      </Paragraph>
      <Paragraph>
        We can access the context data at{" "}
        <Code variant="solid">sdk.context</Code> to see information about the
        current user.
      </Paragraph>
      <CodeBlock
        code={
          context
            ? JSON.stringify(context, null, 2)
            : JSON.stringify(exampleContext, null, 2)
        }
        language="json"
      />
      <Paragraph>
        If you load this site like a frames V2, you should see your own
        Farcaster user profile:
      </Paragraph>
      <Alert title="Warning" icon={<LuBadgeAlert />}>
        Keep in mind that the context data is unauthenticated as it is, assume
        it is spoofable and don't use it to grant privileged access to the user!
      </Alert>
    </VStack>
  );
}

import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import CodeBlock from "@/components/ui/code-block";
import { Paragraph } from "@/components/ui/paragraph";
import { Code, HStack, Stack, VStack, Text } from "@chakra-ui/react";
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

export function FarcasterContext({
  context,
  isSDKLoaded,
}: FarcasterContextProps) {
  const user = context?.user || exampleContext.user;

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
      <HStack key={user.fid} gap="4" my={4}>
        <Avatar name={user.displayName} size="lg" src={user.pfpUrl} />
        <Stack gap="0">
          <Text fontWeight="medium">
            {user.displayName} {`#${user.fid}`}
          </Text>
          <Text color="fg.muted" textStyle="sm">
            {user.username}
          </Text>
        </Stack>
      </HStack>
      <CodeBlock
        code={
          context
            ? JSON.stringify(context, null, 2)
            : JSON.stringify(exampleContext, null, 2)
        }
        title="sdk.context"
        language="json"
      />
      <Paragraph>
        If you load this site like a frames V2, you should see your own
        Farcaster user profile:
      </Paragraph>
      <Alert title="Warning" status="warning" icon={<LuBadgeAlert />}>
        Keep in mind that the context data is unauthenticated as it is, assume
        it is spoofable and don't use it to grant privileged access to the user!
      </Alert>
    </VStack>
  );
}

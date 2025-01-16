import { FarcasterLink } from "@/components/farcaster-link";
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
    fid: 262800,
    username: "itsmide.eth",
    displayName: "mide (aka fraye)",
    pfpUrl: "https://i.imgur.com/96rdcWp.jpg",
    location: {
      placeId: "",
      description: "",
    },
  },
  location: {
    type: "launcher",
  },
  client: {
    clientFid: 9152,
    added: true,
    safeAreaInsets: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 34,
    },
    notificationDetails: {
      token: "<user_token>",
      url: "https://api.warpcast.com/v1/frame-notifications",
    },
  },
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
      {!context && (
        <Alert
          title="Hey fren, have you tried to view this from a Frames V2? 👀"
          status="info"
        >
          If you load this site like a frames V2, you should see your own
          Farcaster user profile and your own context data.
        </Alert>
      )}
      <CodeBlock
        code={
          context
            ? JSON.stringify(context, null, 2)
            : JSON.stringify(exampleContext, null, 2)
        }
        title="sdk.context"
        language="json"
      />
      <Alert title="Warning" status="warning" icon={<LuBadgeAlert />}>
        Keep in mind that the context data is unauthenticated as it is, assume
        it is spoofable and don't use it to grant privileged access to the user!
      </Alert>
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/getting-started#viewing-context"
        text="Learn more about the context here"
        fontSize="xs"
      />
    </VStack>
  );
}

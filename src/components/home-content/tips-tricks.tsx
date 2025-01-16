import { VStack, Heading, Text, Box, Code } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { Subtitle, Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";
import { Separator } from "../ui/separator";
import { Paragraph } from "../ui/paragraph";
import Image from "next/image";
import CodeBlock from "../ui/code-block";

const loadSDKCode = `
...

import sdk, { Context } from "@farcaster/frame-sdk";

...

const load = async () => {
  try {
    const context = await sdk.context;
    if (context) {
      if (context.client?.safeAreaInsets) {
        setSafeAreaInsets(context.client.safeAreaInsets);
      }
      setContext(context);
    } else {
      setError("Failed to load Farcaster context");
    }
    await sdk.actions.ready();
  } catch (err) {
    setError(
      err instanceof Error ? err.message : "Failed to initialize SDK",
    );
    console.error("SDK initialization error:", err);
  }
};
`;

export const TipsAndTricks = () => {
  const tipsAndTricks = [
    {
      id: "use-ngrok",
      title: "Use ngrok to test your frames v2 app on Warpcast",
      text: (
        <VStack gap="1rem" mb={2} py={2} align="left">
          <Paragraph py={2}>
            You can use <Code>ngrok</Code> to test your new frame directly on
            your phone on Warpcast app.
            <br />
            Follow the instructions below to get started.
          </Paragraph>
          <Box
            w="full"
            display="flex"
            justifyContent="center"
            borderRadius="20px"
            minHeight={{ base: "500px" }}
            py={{ base: "5", md: "10" }}
          >
            <video
              width="100%"
              controls
              loop
              muted
              autoPlay
              playsInline
              preload="auto"
              style={{
                maxWidth: "380px",
                maxHeight: "500px",
                minHeight: "500px",
                borderRadius: "20px",
              }}
            >
              <source src="/videos/warpcast-settings.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </VStack>
      ),
      link: {
        title: "Use ngrok to test your frames v2 app on Warpcast",
        link: "https://warpcast.com/~/developers/frames",
      },
    },
    {
      id: "frames-js-debugger",
      title: "Frames.js debugger (just from your localhost)",
      text: (
        <VStack gap="1rem" mb={4} py={2} align="left">
          <Paragraph>
            You can now generate a domain manifest for localhost to use for
            testing frames locally directly from the debugger and you'll be able
            to debug the various Farcaster webhooks as well as notifications.
          </Paragraph>
          <Image
            src={"/screens/debugger-framesjs.png"}
            alt="Frames.js debugger"
            width={300}
            height={200}
          />
        </VStack>
      ),
      link: {
        title: "Frames.js debugger (just from your localhost)",
        link: "https://docs.farcaster.xyz/developers/frames/debugger",
      },
    },
    {
      id: "remember-to-load-context",
      title: "Always remember to load the context!",
      text: (
        <VStack gap="1rem" mb={4} py={2} align="left">
          <Paragraph>
            Are you testing your new frame and the page is blank? Make sure to
            load the context first, as it is required for the frame to work.
          </Paragraph>
          <Image
            src={"/screens/blank_frame.png"}
            alt="Frames.js debugger"
            width={300}
            height={200}
          />
          <Paragraph>
            If you are locked on this screen, you'll see a request to your
            server but nothing will load until we signal to Warpcast that our
            app is <Code>ready()</Code>.
          </Paragraph>
        </VStack>
      ),
      link: {
        title: "Farcaster Frames v2 - Getting Started",
        link: "https://docs.farcaster.xyz/developers/frames/v2/getting-started#calling-ready",
      },
    },
    {
      id: "every-webapp-could-be-a-frame",
      title: "Every Web App can be a frame",
      text: (
        <VStack gap="1rem" mb={4} py={2} align="left">
          <Paragraph>
            For your first frame v2, why not try to convert an existing web app
            into a frame?
          </Paragraph>
          <Paragraph>
            You just need to add the <Code>@farcaster/frame-sdk</Code> and load
            the Farcaster context.
          </Paragraph>
          <CodeBlock
            language="typescript"
            code={loadSDKCode}
            title="All you need to add"
          />
        </VStack>
      ),
    },
  ];
  return (
    <VStack
      justify="center"
      align={{ base: "left", lg: "center" }}
      w="full"
      gap={"1.3rem"}
    >
      <Title id={getTitleId(MenuLink.TipAndTricks)}>Tips & Tricks</Title>

      <Paragraph>
        Here's some tips and tricks to help you build your frames v2 app:
      </Paragraph>

      <VStack
        gap={"1.5rem"}
        align={{ base: "left", lg: "center" }}
        w="full"
        listStyleType="decimal"
      >
        {tipsAndTricks.map((tipAndTrick) => (
          <Box key={tipAndTrick.id}>
            <Subtitle color="primary">{tipAndTrick.title}</Subtitle>
            {tipAndTrick.text}
            {tipAndTrick.link ? (
              <FarcasterLink
                link={tipAndTrick.link.link}
                text={tipAndTrick.link.title}
                fontSize="xs"
              />
            ) : null}
            <Separator mt={4} />
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

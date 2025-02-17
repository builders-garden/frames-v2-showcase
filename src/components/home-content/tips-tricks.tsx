import { VStack, Box, Code, ListItem, ListRoot } from "@chakra-ui/react";

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
      title: "1) Use ngrok to test your frames v2 app on Warpcast",
      text: (
        <VStack gap="1rem" mb={{ base: 2, md: 4 }} py={2} align="left">
          <Paragraph py={2}>
            You can use <Code>ngrok</Code> to test your new frame directly on
            your phone on Warpcast app.
            <br />
            Follow the instructions below to get started.
          </Paragraph>
          <Box
            w={{ base: "full", md: "23%" }}
            display="flex"
            justifyContent="center"
            borderRadius="20px"
            minHeight={{ base: "500px" }}
            py={{ base: "5" }}
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
      title: "2) Frames.js debugger (just from your localhost)",
      text: (
        <VStack
          gap="1rem"
          mb={4}
          py={2}
          align="left"
          lineHeight={{ base: "normal", md: 1.7 }}
        >
          <Paragraph>
            You can now generate a domain manifest for localhost directly from
            the debugger, making it easier to test frames locally.
            <br /> This also allows you to debug various Farcaster webhooks and
            notifications.
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
      title: "3) Always remember to load the context!",
      text: (
        <VStack
          gap="1rem"
          mb={4}
          py={2}
          align="left"
          w={{ base: "100%", md: "70%" }}
          lineHeight={{ base: "normal", md: 1.7 }}
        >
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
      title: "4) Every Web App can be a frame",
      text: (
        <VStack
          gap="1rem"
          align="left"
          w={{ base: "100%", md: "70%" }}
          lineHeight={{ base: "normal", md: 1.7 }}
          mb={4}
        >
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
      link: {
        title: "Convert your Web App into a Frame",
        link: "https://www.youtube.com/watch?v=9Dc64u8JTu0",
      },
    },
    {
      id: "why-is-my-frame-cached",
      title: "5) Why is my frame cached?! by @deodad",
      text: (
        <VStack
          gap="1rem"
          align="left"
          w={{ base: "100%", md: "70%" }}
          lineHeight={{ base: "normal", md: 1.7 }}
          mb={4}
        >
          <ListRoot as="ol" gap={4}>
            <ListItem>
              <b>Manifest</b>
              <ListRoot ml={4}>
                <ListItem>
                  Cached for indefinitely by Warpcast servers, stale after 5
                  minutes and will be refreshed on next read.
                </ListItem>
                <ListItem>
                  Bust it with{" "}
                  <Code>Developers &gt; Domains &gt; Check Domain Status</Code>
                </ListItem>
              </ListRoot>
            </ListItem>
            <ListItem>
              <b>Frame Page</b>
              <ListRoot ml={4}>
                <ListItem>
                  Cached by end users browser based on cache-control policy
                </ListItem>
                <ListItem>
                  Bust by clearing browser cache, on mobile launching it from
                  the <Code>Developers &gt; Frames</Code> will clear WebView
                  cache
                </ListItem>
              </ListRoot>
            </ListItem>
            <ListItem>
              <b>Frame Embed metadata hosted on URL</b>
              <ListRoot ml={4}>
                <ListItem>
                  Cached indefinitely by Warpcast servers after being scraped
                  once.
                </ListItem>
                <ListItem>
                  Bust by resubmitting the URL in the{" "}
                  <Code>Developers &gt; Frames &gt; Frame Embed</Code>
                </ListItem>
              </ListRoot>
            </ListItem>
            <ListItem>
              <b>Frame Embed thats been embedded in a Cast</b>
              <ListRoot ml={4}>
                <ListItem>
                  Cached indefinitely by Warpcast servers as it get's replicated
                  into thousands of feeds.
                </ListItem>
                <ListItem>
                  Bust by resubmitting the URL in the{" "}
                  <Code>Developers &gt; Frames &gt; Frame Embed</Code>
                </ListItem>
              </ListRoot>
            </ListItem>
            <ListItem>
              <b>Frame Image</b>
              <ListRoot ml={4}>
                <ListItem>
                  Cached based on the cache-control header by your browser as
                  well as Warpcast proxy.
                </ListItem>
                <ListItem>Bust it by changing the URL</ListItem>
              </ListRoot>
            </ListItem>
          </ListRoot>
        </VStack>
      ),
      link: {
        title: "Farcaster Frames v2 - Caching",
        link: "https://warpcast.com/deodad/0xdc024835",
      },
    },
  ];
  return (
    <VStack justify="center" align="left" w="full" gap={"1.3rem"}>
      <Title id={getTitleId(MenuLink.TipsAndTricks)}>Tips & Tricks</Title>

      <Paragraph>
        Here's some tips and tricks to help you build your frames v2 app:
      </Paragraph>

      <VStack gap={"1.5rem"} align="left" w="full" listStyleType="decimal">
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
            {tipsAndTricks[tipsAndTricks.length - 1].id !== tipAndTrick.id && (
              <Separator
                mt={{ base: 4, md: "2.5rem" }}
                mb={{ base: 0, md: "1rem" }}
              />
            )}
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

import { VStack, Heading, Text, Box } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";

export const TipsAndTricks = () => {
  const tipsAndTricks = [
    {
      id: "use-ngrok",
      text: "Use ngrok to test your frames v2 app on Warpcast",
      link: {
        title: "Use ngrok to test your frames v2 app on Warpcast",
        link: "https://warpcast.com/~/developers/frames",
      },
    },
    {
      id: "frames-js-debugger",
      text: "Frames.js debugger (just from your localhost)",
      link: {
        title: "Frames.js debugger (just from your localhost)",
        link: "https://docs.farcaster.xyz/developers/frames/debugger",
      },
    },
  ];
  return (
    <VStack
      justify="center"
      align={{ base: "left", lg: "center" }}
      w="full"
      gap={4}
    >
      <Title id={getTitleId(MenuLink.TipAndTricks)}>Tips & Tricks</Title>

      <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
        Here's some tips and tricks to help you build your frames v2 app:
      </Text>

      <VStack
        gap={3}
        align={{ base: "left", lg: "center" }}
        px={{ base: "30px", md: 8 }}
        w="full"
        as="ol"
        listStyleType="decimal"
      >
        {tipsAndTricks.map((tipAndTrick) => (
          <li key={tipAndTrick.id}>
            <Box>
              <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
                {tipAndTrick.text}
              </Text>
              {tipAndTrick.link ? (
                <FarcasterLink
                  link={tipAndTrick.link.link}
                  text={tipAndTrick.link.title}
                />
              ) : null}
            </Box>
          </li>
        ))}
      </VStack>
    </VStack>
  );
};

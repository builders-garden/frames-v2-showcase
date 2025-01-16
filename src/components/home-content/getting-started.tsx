import { VStack, Heading, Text, Box } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";
import { Paragraph } from "../ui/paragraph";

export const GettingStarted = () => {
  return (
    <VStack
      justify="center"
      align={{ base: "left", md: "flex-start" }}
      w="full"
      gap={"3rem"}
    >
      <VStack gap={"1.5rem"} w="full" align="left">
        <Title id={getTitleId(MenuLink.GettingStarted)}>Getting Started</Title>

        <Paragraph textAlign="left">
          Here's a full walkthrough of creating a frames v2 app:
        </Paragraph>

        <FarcasterLink
          link="https://docs.farcaster.xyz/developers/frames/v2/"
          text="Full Getting Started tutorial"
        />
      </VStack>

      <Box
        w={{ base: "full", md: "65%" }}
        minH={{ base: "200px", lg: "40vh" }}
        display="flex"
        justifyContent={{ base: "center" }}
      >
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/5wAbo_YsuC4?si=JS8W58Muvqf0BM4H"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </VStack>
  );
};

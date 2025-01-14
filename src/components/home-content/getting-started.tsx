import { VStack, Heading, Text, Box } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";

export const GettingStarted = () => {
  return (
    <VStack
      justify="center"
      align={{ base: "left", lg: "center" }}
      w="full"
      gap={4}
    >
      <Title id={getTitleId(MenuLink.GettingStarted)}>Getting Started</Title>

      <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
        Here's a full walkthrough of creating a frames v2 app:
      </Text>

      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/"
        text="Full Getting Started tutorial"
      />

      <Box
        w="full"
        minH={{ base: "200px", lg: "50vh" }}
        display="flex"
        justifyContent="center"
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

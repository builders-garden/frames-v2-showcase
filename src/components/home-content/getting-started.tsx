"use client";

import { useState } from "react";
import { VStack, Box, Code, HStack } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { Subtitle, Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";
import { Paragraph } from "../ui/paragraph";
import { Button } from "../ui/button";
import { toaster } from "../ui/toaster";

export const GettingStarted = () => {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = async () => {
    const command = "npx create-neynar-farcaster-frame";
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(command);
      toaster.create({
        title: "Command copied to clipboard",
        description: command,
        type: "success",
      });
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Failed to copy command",
        description: command,
        type: "error",
      });
    } finally {
      setTimeout(() => {
        setIsCopying(false);
      }, 1000);
    }
  };

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
          Just use our official Builders-garden template to get started: ready
          with farcaster auth, neynar apis and more, with continuous updates.
          <FarcasterLink
            link="https://github.com/builders-garden/miniapp-next-template"
            text="Miniapp Next Template"
          />
        </Paragraph>

        <VStack gap="0.5rem" align="left">
          <Paragraph textAlign="left">
            If you prefer another approach just paste this command in your
            terminal to create a new Neynar frames v2 app,
          </Paragraph>
          <HStack gap="0.5rem">
            <Code p="0.5rem" borderRadius="0.5rem" w="fit-content">
              npx create-neynar-farcaster-frame
            </Code>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {isCopying ? "Copying..." : "Copy"}
            </Button>
          </HStack>
          <FarcasterLink
            text="(This starter is made by neynar)"
            link="https://github.com/neynarxyz/create-neynar-farcaster-frame.git"
          />
        </VStack>
      </VStack>

      <VStack gap="1rem" w="full" align="left">
        <Subtitle>Hands-on Tutorial</Subtitle>
        <Paragraph textAlign="left">
          Here's a full walkthrough of creating a frames v2 app:
          <FarcasterLink
            link="https://docs.farcaster.xyz/developers/frames/v2/"
            text="Full Getting Started tutorial"
          />
        </Paragraph>
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
    </VStack>
  );
};

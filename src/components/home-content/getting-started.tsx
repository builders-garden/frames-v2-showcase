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

        <VStack gap="0.5rem" align="left">
          <Subtitle>Our Frame Template</Subtitle>
          <Paragraph textAlign="left">
            Just use our official Builders-garden template to get started: ready
            with farcaster auth, neynar apis and more, with continuous updates.
          </Paragraph>
          <FarcasterLink
            link="https://github.com/builders-garden/miniapp-next-template"
            text="Miniapp Next Template"
          />
        </VStack>

        <VStack gap="1.5rem" align="left" mt="2rem">
          <Subtitle>Other frame templates</Subtitle>
          <VStack gap="0.5rem" align="left">
            <HStack gap="0.5rem">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 386 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M296.117 105.956C296.117 124.397 291.406 141.738 283.122 156.84C251.315 153.193 214.882 146.231 176.708 136.002C157.462 130.845 139.014 125.19 121.687 119.217L121.684 119.211C121.608 119.186 121.532 119.162 121.457 119.137C120.735 118.888 120.015 118.638 119.296 118.388C99.509 111.09 86.699 94.1747 88.0967 77.4086L88.3406 77.474L88.1342 77.2676C100.644 32.6882 141.585 0 190.161 0C248.679 0 296.117 47.4383 296.117 105.956Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M87.8174 133.487C96.3636 127.567 107.762 124.858 119.599 126.513C137.14 132.384 155.625 137.958 174.806 143.098C211.41 152.905 246.608 160.076 278.439 164.576C259.453 193.109 227.003 211.912 190.162 211.912C141.166 211.912 99.9383 178.657 87.8174 133.487Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M332.519 103.755C321.364 97.7279 308.474 91.6405 294.18 85.6757C293.509 82.2142 292.669 78.813 291.67 75.4807C308.512 82.2947 323.635 89.32 336.549 96.2973C352.652 104.998 365.535 113.737 374.032 122.045C382.244 130.074 387.598 138.946 385.287 147.572C382.976 156.197 373.903 161.203 362.776 164.051C351.264 166.997 335.737 168.124 317.441 167.607C305.611 167.273 292.521 166.248 278.462 164.542C280.177 161.963 281.781 159.305 283.27 156.573C295.647 157.983 307.189 158.838 317.681 159.134C335.628 159.641 350.26 158.504 360.675 155.839C371.475 153.075 376.096 149.121 377.099 145.378C378.102 141.635 376.077 135.899 368.106 128.106C360.419 120.59 348.316 112.29 332.519 103.755ZM68.3867 24.4435C83.0172 24.8568 99.5732 26.3267 117.506 28.8333C114.956 31.2364 112.526 33.7646 110.224 36.408C94.9262 34.4396 80.7758 33.2734 68.1474 32.9166C50.1998 32.4096 35.5676 33.5463 25.1532 36.2117C14.3533 38.9758 9.73156 42.93 8.72861 46.6731C7.72565 50.4161 9.75111 56.1514 17.722 63.9451C25.4085 71.4606 37.5119 79.7612 53.3085 88.2959C53.5673 88.4357 53.8269 88.5755 54.0875 88.7153C52.801 89.4638 51.8999 90.4073 51.4199 91.5526C50.7592 93.1292 50.9306 95.0068 51.8566 97.1312C50.988 96.6718 50.1289 96.2125 49.2793 95.7535C33.1759 87.053 20.2927 78.3137 11.796 70.0059C3.5838 61.9763 -1.77034 53.1049 0.540919 44.4792C2.85218 35.8534 11.9247 30.8477 23.0515 27.9999C34.5637 25.0535 50.0906 23.9266 68.3867 24.4435Z"
                  fill="white"
                />
                <ellipse
                  cx="45.9011"
                  cy="88.9788"
                  rx="29.0149"
                  ry="4.44343"
                  transform="rotate(29.2824 45.9011 88.9788)"
                  fill="white"
                />
              </svg>
              <Paragraph fontWeight="bold">Neynar</Paragraph>
            </HStack>
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

          <VStack gap="0.5rem" align="left">
            <HStack gap="0.5rem">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 111 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z"
                  fill="#0052FF"
                />
              </svg>
              <Paragraph fontWeight="bold">Base MiniKit</Paragraph>
            </HStack>
            <Paragraph textAlign="left">
              Or just use this to create a new Base MiniKit frame app,
            </Paragraph>
            <HStack gap="0.5rem">
              <Code p="0.5rem" borderRadius="0.5rem" w="fit-content">
                npm create onchain --mini
              </Code>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {isCopying ? "Copying..." : "Copy"}
              </Button>
            </HStack>
            <FarcasterLink
              text="(This starter is made by Base)"
              link="https://www.base.org/builders/minikit"
            />
          </VStack>
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

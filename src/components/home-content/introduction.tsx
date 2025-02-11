import { VStack, Image, Stack } from "@chakra-ui/react";
import { FarcasterLink } from "@/components/farcaster-link";
import { HighlightedText } from "@/components/highlight-text";
import { Subtitle, Title } from "../ui/title";
import { getTitleId, MenuLink } from "./menu/data";
import { Paragraph } from "../ui/paragraph";

export const Introduction = () => {
  return (
    <VStack justify="center" alignItems="flex-start" w="full" gap={"2rem"}>
      <Title id={getTitleId(MenuLink.Introduction)}>Introduction</Title>

      <Stack
        w="full"
        direction={{ base: "column", md: "row" }}
        gap={{ base: "2rem", md: "5rem" }}
      >
        <VStack
          w={{ base: "100%", md: "30%" }}
          gap="1.5rem"
          alignItems="flex-start"
        >
          <VStack w="fit-content" alignItems="flex-start" gap="0.25rem">
            <Paragraph fontStyle="italic" color="white">
              The beginning
            </Paragraph>
            <Subtitle fontSize="24px">Frames v1</Subtitle>
          </VStack>
          <Paragraph lineHeight={1.7} w={{ base: "100%", md: "100%" }}>
            Launched as a way to build{" "}
            <HighlightedText>interactive apps</HighlightedText> that run
            directly in a{" "}
            <HighlightedText>Farcaster social feed</HighlightedText>.
          </Paragraph>
          <Image
            src="./screens/intro-frames-v1.svg"
            mt={{ base: 0, md: "1.25rem" }}
          />
        </VStack>

        <Image
          src="./assets/curvy-arrow.svg"
          w={{ base: "2rem", md: "2rem" }}
          h="fit-content"
          transform={{ base: "none", md: "rotate(270deg)" }}
          mx={{ base: "auto", md: 0 }}
          mt={{ base: 0 }}
        />

        <VStack
          w={{ base: "100%", md: "30%" }}
          gap="1.5rem"
          alignItems="flex-start"
        >
          <VStack w="100%" alignItems="flex-start" gap="0.25rem">
            <Paragraph fontStyle="italic" color="white">
              While now...
            </Paragraph>
            <Subtitle fontSize="24px">Frames v2</Subtitle>
          </VStack>
          <Paragraph lineHeight={1.7} w={{ base: "100%", md: "100%" }}>
            A <HighlightedText>new frame standard</HighlightedText> to enable
            richer applications
          </Paragraph>
          <FarcasterLink
            link="https://docs.farcaster.xyz/developers/frames/v2/"
            text="Full introduction to Frames v2"
          />
          <Image src="./screens/intro-frames-v2.svg" />
        </VStack>
      </Stack>

      <Image
        src="./assets/curvy-arrow.svg"
        w="2rem"
        mx="auto"
        display={{ base: "block", md: "none" }}
      />

      <VStack
        w="100%"
        gap="1.5rem"
        alignItems="flex-start"
        mt={{ base: "0", md: "2rem" }}
      >
        <VStack w="100%" alignItems="flex-start" gap="0.25rem">
          <Paragraph fontStyle="italic" color="white">
            And beyond...
          </Paragraph>
          <Subtitle fontSize="24px">The future of frames?</Subtitle>
        </VStack>
        <Paragraph lineHeight={1.7}>
          Farcaster has laid the <HighlightedText>Base</HighlightedText>; now
          it's our turn to shape the{" "}
          <HighlightedText>future—empowering the community</HighlightedText>{" "}
          with seamless, on-chain interoperability and{" "}
          <HighlightedText>endless possibilities</HighlightedText> for{" "}
          decentralized social applications.
        </Paragraph>
      </VStack>
    </VStack>
  );
};

{
  /* <video
  width="100%"
  controls
  loop
  muted
  autoPlay
  playsInline
  preload="auto"
  style={{ maxWidth: "600px", borderRadius: "20px" }}
>
  <source
    src="https://docs.farcaster.xyz/assets/frames_v2.BCm5tm4Z.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video> */
}

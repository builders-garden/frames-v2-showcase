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

      <Stack w="full" direction={{ base: "column", md: "row" }} gap="2rem">
        <VStack w="100%" gap="1.5rem" alignItems="flex-start">
          <VStack w="100%" alignItems="flex-start" gap="0.25rem">
            <Paragraph fontStyle="italic" color="white">
              The beginning
            </Paragraph>
            <Subtitle fontSize="24px">Frames v1</Subtitle>
          </VStack>
          <Paragraph lineHeight={1.7}>
            Launched as a way to build{" "}
            <HighlightedText>interactive apps</HighlightedText> that run
            directly in a{" "}
            <HighlightedText>Farcaster social feed</HighlightedText>.
          </Paragraph>
          <Image
            src="./screens/intro-frames-v1.svg"
            w="100%"
            mt={{ base: 0, md: "1.5rem" }}
          />
        </VStack>

        <Image src="./assets/curvy-arrow.svg" w="2rem" mx="auto" />

        <VStack w="100%" gap="1.5rem" alignItems="flex-start">
          <VStack w="100%" alignItems="flex-start" gap="0.25rem">
            <Paragraph fontStyle="italic" color="white">
              While now...
            </Paragraph>
            <Subtitle fontSize="24px">Frames v2</Subtitle>
          </VStack>
          <Paragraph lineHeight={1.7}>
            A <HighlightedText>new frame standard</HighlightedText> to enable
            richer applications
          </Paragraph>
          <FarcasterLink
            link="https://docs.farcaster.xyz/developers/frames/v2/"
            text="Full introduction to Frames v2"
          />
          <Image src="./screens/intro-frames-v2.svg" w="100%" />
        </VStack>
      </Stack>

      <Image src="./assets/curvy-arrow.svg" w="2rem" mx="auto" />

      <VStack w="100%" gap="1.5rem" alignItems="flex-start">
        <VStack w="100%" alignItems="flex-start" gap="0.25rem">
          <Paragraph fontStyle="italic" color="white">
            And beyond...
          </Paragraph>
          <Subtitle fontSize="24px">The future of frames?</Subtitle>
        </VStack>
        <Paragraph lineHeight={1.7}>
          The next steps that frames could unlock are...
        </Paragraph>
      </VStack>

      {/* the future.... */}
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

import { VStack, Heading, Text } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";
import { HighlightedText } from "@/components/highlight-text";

export const Introduction = () => {
  return (
    <VStack
      justify="center"
      align={{ base: "left", lg: "center" }}
      w="full"
      gap={4}
      px={{ base: "30px", md: 8 }}
    >
      <Heading
        as="h1"
        fontSize={{ base: "48px", md: "6xl" }}
        fontWeight="bold"
        textAlign="left"
        lineHeight="shorter"
      >
        Introduction
      </Heading>

      <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
        Frames launched as a way to build{" "}
        <HighlightedText>interactive apps</HighlightedText> that run directly in
        a <HighlightedText>Farcaster social feed</HighlightedText>.
        <br />
        Frames v2 are a new frame standard to enable richer social applications
      </Text>

      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/"
        text="Full introduction to Frames v2"
      />

      <video
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
      </video>
    </VStack>
  );
};

import { VStack, Heading, Text, Box } from "@chakra-ui/react";

import { FarcasterLink } from "@/components/farcaster-link";

export const HowTos = () => {
  const howTos = [
    {
      title: "Frame playground on Warpcast (use ngrok)",
      link: "https://warpcast.com/~/developers/frames",
    },
    {
      title: "Frames.js debugger (just from your localhost)",
      link: "https://docs.farcaster.xyz/developers/frames/debugger",
    },
  ];
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
        How to
      </Heading>

      <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
        Here's some guides on how to:
      </Text>

      <VStack
        gap={3}
        align={{ base: "left", lg: "center" }}
        px={{ base: "30px", md: 8 }}
        w="full"
        as="ul"
        listStyleType="circle"
      >
        {howTos.map((howTo) => (
          <li key={howTo.title}>
            <FarcasterLink link={howTo.link} text={howTo.title} />
          </li>
        ))}
      </VStack>

      <Box
        w="full"
        minH={{ base: "200px", lg: "50vh" }}
        display="flex"
        justifyContent="center"
      >
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/9Dc64u8JTu0?si=bCBB8SdHSB34eu7b"
          title="Convert your webapp to a Frame"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </VStack>
  );
};

import Image from "next/image";

import { Box, VStack, Heading, Text, Stack, HStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Stack
      as="section"
      w="full"
      display="flex"
      bgImage="linear-gradient(#6944BA8F, #160A2FB2)"
      borderBottom="2px solid #6944BA"
    >
      <Stack
        w="full"
        display="flex"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        bgImage="radial-gradient(circle at 50% 0%, #8653F5 0%, #4E308F00 40%)"
      >
        <VStack
          w="full"
          justify="center"
          align={{ base: "left", lg: "center" }}
          gap={4}
          px={{ base: "30px", md: 8 }}
          py={{ base: "10", md: "10" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "48px", md: "6xl" }}
            fontWeight="bold"
            textAlign="left"
            lineHeight="shorter"
            w="full"
          >
            Speedrun
            <br />
            Frames V2
          </Heading>

          <Text w="full" fontSize={{ base: "18px", md: "xl" }} textAlign="left">
            A practical guide to understand and start building Frames v2.
          </Text>

          <HStack
            gap="1rem"
            mt={2}
            position="relative"
            justifyContent="flex-start"
            w="full"
          >
            <Image
              src="/logo-builders-garden.png"
              alt="Builders Garden Logo"
              width={94}
              height={30}
              style={{ objectFit: "contain" }}
            />
            <Text fontSize="2xl">X</Text>
            <Image
              src="/logo-hackathon.png"
              alt="$HACKATHON Logo"
              width={118}
              height={30}
              style={{ objectFit: "contain" }}
            />
          </HStack>
        </VStack>
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          borderRadius="10px"
          minHeight={{ base: "500px" }}
          py={{ base: "10", md: "10" }}
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
              maxWidth: "280px",
              maxHeight: "500px",
              minHeight: "500px",
              borderRadius: "20px",
            }}
          >
            <source
              src="https://docs.farcaster.xyz/assets/frames_v2.BCm5tm4Z.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Stack>
    </Stack>
  );
};

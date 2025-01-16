import Image from "next/image";

import { Box, VStack, Heading, Text, Stack, HStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Stack
      as="section"
      w="full"
      display="flex"
      bgImage="linear-gradient(#6944BA8F, #160A2FB2)"
      border={{
        base: "none",
        md: "1px solid #6944BA",
      }}
      borderBottom="1px solid #6944BA"
      borderRadius={{
        base: "none",
        md: "2.5rem",
      }}
    >
      <Stack
        w="full"
        display="flex"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        bgImage="radial-gradient(circle at 50% 0%, #8653F5 0%, #4E308F00 40%)"
        gap={{
          base: "2.5rem",
          md: "0",
        }}
        px="30px"
        pt={{ base: "3rem", md: "0" }}
      >
        <VStack
          w={"full"}
          justify="center"
          align={{ base: "left", lg: "center" }}
          gap={{ base: 4, md: "4rem" }}
          justifyContent={{ base: "center", md: "space-between" }}
          py={{
            base: "0",
            md: "8rem",
          }}
        >
          <VStack w="full" alignItems="flex-start">
            <Heading
              as="h1"
              fontSize={{ base: "48px", md: "5xl" }}
              fontWeight="bold"
              textAlign="left"
              lineHeight="shorter"
              w="full"
            >
              Speedrun Frames V2
            </Heading>
            <Text
              w={{ base: "full", md: "80%" }}
              fontSize={{ base: "18px", md: "xl" }}
              textAlign="left"
            >
              A practical guide to understand and start building Frames v2.
            </Text>
          </VStack>

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
          w={{ base: "full", md: "50%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          borderRadius="10px"
          minHeight={{ base: "500px" }}
          pb={{ base: "4rem", md: "2rem" }}
          pt={{
            base: "0",
            md: "2rem",
          }}
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

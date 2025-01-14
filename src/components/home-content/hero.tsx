import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box
      as="section"
      display="flex"
      w="full"
      minH="70vh"
      bgImage="linear-gradient(#6944BA8F, #160A2FB2)"
      borderBottom="2px solid #6944BA"
    >
      <VStack
        justify="center"
        align={{ base: "left", lg: "center" }}
        w="full"
        gap={4}
        px={{ base: "30px", md: 8 }}
        bgImage="radial-gradient(circle at 50% 0%, #8653F5 0%, #4E308F00 40%)"
      >
        <Heading
          as="h1"
          fontSize={{ base: "48px", md: "6xl" }}
          fontWeight="bold"
          textAlign="left"
          lineHeight="shorter"
        >
          Farcaster
          <br />
          Frames V2
          <br />
          showcase
        </Heading>

        <Text fontSize={{ base: "18px", md: "xl" }} textAlign="left">
          A practical guide to understand and start building Frames v2
        </Text>

        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="primary"
          mt={2}
          textAlign="left"
          marginTop="3rem"
        >
          By @builders.garden X $Hackathon
        </Text>
      </VStack>
    </Box>
  );
};

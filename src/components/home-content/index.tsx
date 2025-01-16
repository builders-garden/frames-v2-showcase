import { Box, Stack, VStack } from "@chakra-ui/react";

import { Hero } from "@/components/home-content/hero";
import { Introduction } from "@/components/home-content/introduction";
import { GettingStarted } from "@/components/home-content/getting-started";
import { TipsAndTricks } from "@/components/home-content/tips-tricks";
import { Resources } from "@/components/home-content/resources";
import { Features } from "@/components/home-content/features";
import { HomeMenu } from "./menu";
import { MenuDesktop } from "./menu/desktop-version";

export default function HomeContent() {
  return (
    <Stack
      gap="6.25rem"
      p={{ base: "none", md: "1.5rem" }}
      pb={{ base: "4rem", md: "6rem" }}
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "flex-start", md: "center" }}
      maxW="1440px"
      margin="auto"
    >
      <MenuDesktop />
      <HomeMenu />
      <VStack w="full" gap="6rem">
        <Hero />
        <VStack
          justify="center"
          align="left"
          w="full"
          gap="6rem"
          px={{ base: "30px", md: 0 }}
        >
          <Introduction />
          <GettingStarted />
          <Features />
          <TipsAndTricks />
          <Resources />
        </VStack>
      </VStack>
    </Stack>
  );
}

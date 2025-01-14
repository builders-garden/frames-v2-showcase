import { VStack } from "@chakra-ui/react";

import { Hero } from "@/components/home-content/hero";
import { Introduction } from "@/components/home-content/introduction";
import { GettingStarted } from "@/components/home-content/getting-started";
import { TipsAndTricks } from "@/components/home-content/tips-tricks";
import { HowTos } from "@/components/home-content/how-tos";
import { Resources } from "@/components/home-content/resources";
import { Features } from "@/components/home-content/features";

export default function HomeContent() {
  return (
    <VStack gap="2rem">
      <Hero />
      <VStack
        justify="center"
        align={{ base: "left", lg: "center" }}
        w="full"
        gap="2rem"
        px={{ base: "30px", md: 8 }}
      >
        <Introduction />
        <GettingStarted />
        <Features />
        <TipsAndTricks />
        <HowTos />
        <Resources />
      </VStack>
    </VStack>
  );
}

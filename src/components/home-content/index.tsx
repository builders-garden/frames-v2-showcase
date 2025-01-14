import { VStack } from "@chakra-ui/react";

import { Hero } from "@/components/home-content/hero";
import { Introduction } from "@/components/home-content/introduction";
import { GettingStarted } from "@/components/home-content/getting-started";
import { TipsAndTricks } from "@/components/home-content/tips-tricks";
import { HowTos } from "@/components/home-content/how-tos";
import { Resources } from "@/components/home-content/resources";

export default function HomeContent() {
  return (
    <VStack gap="2rem">
      <Hero />
      <Introduction />
      <GettingStarted />
      <TipsAndTricks />
      <HowTos />
      <Resources />
    </VStack>
  );
}

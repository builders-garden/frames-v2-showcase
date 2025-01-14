import { useFrameContext } from "@/hooks/frame-context";

import { HStack, VStack, Input, Text, Image } from "@chakra-ui/react";

import {
  PopoverRoot,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link, LinkBox } from "@/components/ui/link";
import { Header, Subtitle, Title } from "@/components/ui/title";
import { Paragraph, ParagraphBig } from "@/components/ui/paragraph";
import { Separator } from "@/components/ui/separator";

import { Hero } from "@/components/home-content/hero";
import { Introduction } from "@/components/home-content/introduction";
import { GettingStarted } from "@/components/home-content/getting-started";
import { TipsAndTricks } from "@/components/home-content/tips-tricks";
import { HowTos } from "@/components/home-content/how-tos";
import { Resources } from "./resources";

export default function HomeContent() {
  const { context } = useFrameContext();

  return (
    <VStack gap="2rem">
      <Hero />
      <Introduction />
      <GettingStarted />
      <TipsAndTricks />
      <HowTos />

      <VStack gap="2rem" mx="auto" px="2rem">
        <HStack w="fit-content" mx="auto" mt="4rem">
          <Button size="xs">Click me</Button>
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button size="sm" variant="outline">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle>
                <Text my="4">
                  Naruto is a Japanese manga series written and illustrated by
                  Masashi Kishimoto.
                </Text>
                <Input placeholder="Your fav. character" size="sm" />
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </HStack>
        <Link href="/about">About</Link>
        <Header>Heading 1</Header>
        <Title>Heading 2</Title>
        <Subtitle>Heading 3</Subtitle>
        <ParagraphBig>Paragraph Big</ParagraphBig>
        <Paragraph>Paragraph</Paragraph>
        <Paragraph color="primary" fontWeight="semibold">
          interactive apps
        </Paragraph>
        <Separator />
        <Subtitle color="primary">Farcaster Context</Subtitle>
        <LinkBox
          imgSrc="./links/github.svg"
          title="Frames v2 Demo"
          subtitle="Forkable NextJS example app"
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        />
      </VStack>
      <Resources />
    </VStack>
  );
}

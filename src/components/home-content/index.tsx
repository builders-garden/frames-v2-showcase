import { HStack, VStack, Input, Text, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  PopoverRoot,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFrameContext } from "@/hooks/frame-context";
import { Link, LinkBox } from "../ui/link";
import { Header, Subtitle, Title } from "../ui/title";
import { Paragraph, ParagraphBig } from "../ui/paragraph";
import { Separator } from "../ui/separator";
import { Resources } from "./resources";

export default function HomeContent() {
  const { context } = useFrameContext();

  return (
    <VStack gap="2rem" maxW="md" mx="auto" px="2rem">
      <HStack w="full" justifyContent="space-between" alignItems="center">
        <Text my="4">Logo</Text>
        <HStack alignItems="center">
          <Image
            src={context?.user.pfpUrl}
            alt={`${context?.user.username} avatar`}
            width={10}
            height={10}
            borderRadius="full"
          />
          <Text my="4">{context?.user.username}</Text>
        </HStack>
      </HStack>
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
      <Resources />
    </VStack>
  );
}

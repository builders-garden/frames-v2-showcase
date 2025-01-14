import { VStack, Text, Stack } from "@chakra-ui/react";
import { useFrameContext } from "@/hooks/frame-context";
import { Subtitle, Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

import { FarcasterContext } from "./farcaster-context";
import { AddFrame } from "./add-frame";

export function Features() {
  const { context, isSDKLoaded } = useFrameContext();

  if (!isSDKLoaded) {
    return <Paragraph>Loading...</Paragraph>;
  }

  const items = [
    {
      id: "farcaster-context",
      value: "a",
      title: "Farcaster Context",
      Subtitle:
        "The Farcaster app provides the context information (including the current user).",
      text: <FarcasterContext context={context} isSDKLoaded />,
    },
    {
      id: "add-frame",
      value: "c",
      title: "Add Frame",
      Subtitle: "Add a frame to the client (warpcast)",
      text: <AddFrame />,
    },
  ];

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Title>Features</Title>
      <Paragraph>
        Try these interactive features to experience frames v2 potential
      </Paragraph>
      <AccordionRoot collapsible>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.value}>
            <AccordionItemTrigger>
              <Stack gap="1">
                <Subtitle color="primary">{item.title}</Subtitle>
                <Text fontSize="sm" color="fg.muted">
                  {item.Subtitle}
                </Text>
              </Stack>
            </AccordionItemTrigger>
            <AccordionItemContent>{item.text}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </VStack>
  );
}

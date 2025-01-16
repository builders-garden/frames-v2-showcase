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
import { getTitleId, MenuLink } from "../menu/data";
import { ViewProfile } from "./view-profile";

export function Features() {
  const { context, isSDKLoaded } = useFrameContext();
  const fid: number = context?.user?.fid || 2;

  if (!isSDKLoaded) {
    return <Paragraph>Loading...</Paragraph>;
  }

  const items = [
    {
      id: MenuLink.FarcasterContext,
      value: "a",
      title: "Farcaster Context",
      Subtitle:
        "The Farcaster app provides the context information (including the current user).",
      text: <FarcasterContext context={context} isSDKLoaded />,
    },
    {
      id: MenuLink.AddFrame,
      value: "b",
      title: "Add Frame",
      Subtitle: "Add a frame to the client (warpcast)",
      text: <AddFrame />,
    },
    {
      id: MenuLink.ViewProfile,
      value: "c",
      title: "View Profile",
      Subtitle: "View the profile of a user",
      text: <ViewProfile fid={fid} />,
    },
  ];

  return (
    <VStack gap="1.5rem" width="100%" alignItems="flex-start">
      <Title id={getTitleId(MenuLink.Features)}>Features</Title>
      <Paragraph>
        Try these interactive features to experience frames v2 potential
      </Paragraph>
      <AccordionRoot collapsible multiple>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.value}>
            <AccordionItemTrigger>
              <Stack gap="1">
                <Subtitle color="primary" id={getTitleId(item.id)}>
                  {item.title}
                </Subtitle>
                <Text fontSize="sm" color="fg.muted">
                  {item.Subtitle}
                </Text>
              </Stack>
            </AccordionItemTrigger>
            <AccordionItemContent bg="#202020" p="1rem">
              {item.text}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </VStack>
  );
}

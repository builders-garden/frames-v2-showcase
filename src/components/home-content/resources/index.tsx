import { LinkBox } from "@/components/ui/link";
import { Subtitle, Title } from "@/components/ui/title";
import { VStack } from "@chakra-ui/react";
import { resourcesData } from "./data";
import { getTitleId, MenuLink } from "../menu/data";

export const Resources = () => {
  return (
    <VStack
      justify="center"
      align="left"
      w={{ base: "full", md: "50%" }}
      gap="3rem"
    >
      <Title id={getTitleId(MenuLink.Resources)}>Resources</Title>
      {resourcesData.map((resource) => (
        <VStack
          key={resource.category}
          gap="1.125rem"
          w="100%"
          alignItems="flex-start"
          id={getTitleId(resource.id)}
        >
          <Subtitle fontSize={{ base: "18px", md: "xl" }} textAlign="left">
            {resource.category}
          </Subtitle>
          {resource.links.map((link, index) => (
            <LinkBox
              key={index}
              imgSrc={link.imgSrc}
              title={link.title}
              subtitle={link.subtitle}
              href={link.href}
              imgProps={link.imgProps}
            />
          ))}
        </VStack>
      ))}
    </VStack>
  );
};

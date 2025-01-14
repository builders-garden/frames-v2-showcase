import { LinkBox } from "@/components/ui/link";
import { Subtitle, Title } from "@/components/ui/title";
import { VStack } from "@chakra-ui/react";
import { resourcesData } from "./data";

export const Resources = () => {
  return (
    <VStack w="100%" alignItems="flex-start" gap="1.5rem">
      <Title>Resources</Title>
      {resourcesData.map((resource) => (
        <VStack
          key={resource.category}
          gap="1.125rem"
          w="100%"
          alignItems="flex-start"
        >
          <Subtitle>{resource.category}</Subtitle>
          {resource.links.map((link, index) => (
            <LinkBox
              key={index}
              imgSrc={link.imgSrc}
              title={link.title}
              subtitle={link.subtitle}
              href={link.href}
            />
          ))}
        </VStack>
      ))}
    </VStack>
  );
};

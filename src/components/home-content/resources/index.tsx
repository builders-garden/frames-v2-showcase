import { LinkBox } from "@/components/ui/link";
import { Subtitle } from "@/components/ui/title";
import { Heading, VStack } from "@chakra-ui/react";
import { resourcesData } from "./data";

export const Resources = () => {
  return (
    <VStack
      justify="center"
      align={{ base: "left", lg: "center" }}
      w="full"
      gap="1.5rem"
      px={{ base: "30px", md: 8 }}
    >
      <Heading
        as="h1"
        fontSize={{ base: "48px", md: "6xl" }}
        fontWeight="bold"
        textAlign="left"
        lineHeight="shorter"
      >
        Resources
      </Heading>
      {resourcesData.map((resource) => (
        <VStack
          key={resource.category}
          gap="1.125rem"
          w="100%"
          alignItems="flex-start"
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
            />
          ))}
        </VStack>
      ))}
    </VStack>
  );
};

import {
  Link as ChakraLink,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import * as React from "react";

export const Link = React.forwardRef<HTMLAnchorElement, ChakraLinkProps>(
  function Link(props, ref) {
    return (
      <ChakraLink
        color="link"
        textDecoration="underline"
        ref={ref}
        {...props}
      />
    );
  },
);

interface LinkBoxProps extends ChakraLinkProps {
  imgSrc: string;
  title: string;
  subtitle: string;
}

export const LinkBox = React.forwardRef<HTMLDivElement, LinkBoxProps>(
  function LinkBox({ imgSrc, title, subtitle, ...props }, ref) {
    return (
      <Link {...props} textDecor={"none"} target="_blank" asChild>
        <HStack
          w="100%"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.3)"
          p={4}
          borderRadius="10px"
          ref={ref}
          gap="1rem"
        >
          <Image src={imgSrc} alt={title} w="30px" h="30px" />
          <VStack align="start" gap="0.25rem">
            <Text fontWeight="semibold" fontSize="14px" color="white">
              {title}
            </Text>
            <Text fontWeight="regular" fontSize="13px" color="paragraph">
              {subtitle}
            </Text>
          </VStack>
        </HStack>
      </Link>
    );
  },
);

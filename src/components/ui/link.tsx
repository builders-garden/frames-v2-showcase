import {
  Link as ChakraLink,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import type {
  LinkProps as ChakraLinkProps,
  ImageProps,
} from "@chakra-ui/react";
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

export interface LinkBoxProps extends ChakraLinkProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  imgProps?: ImageProps;
}

export const LinkBox = React.forwardRef<HTMLDivElement, LinkBoxProps>(
  function LinkBox({ imgSrc, title, subtitle, imgProps, ...props }, ref) {
    return (
      <Link
        textDecor={"none"}
        target="_blank"
        w="100%"
        outline="none"
        _hover={{
          bg: "rgba(255, 255, 255, 0.05)",
        }}
        transition="background 0.1s ease-in-out"
        {...props}
      >
        <HStack
          w="100%"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.3)"
          px={4}
          py={2.5}
          borderRadius="10px"
          ref={ref}
          gap={4}
        >
          <Image src={imgSrc} alt={title} w="30px" h="auto" {...imgProps} />
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

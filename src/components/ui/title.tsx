import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import * as React from "react";

export const Header = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  function Text(props, ref) {
    return (
      <ChakraHeading
        ref={ref}
        as={"h1"}
        fontSize={"48px"}
        fontWeight="bold"
        {...props}
      />
    );
  },
);

export const Title = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  function Text(props, ref) {
    return (
      <ChakraHeading
        ref={ref}
        as={"h2"}
        fontSize={"34px"}
        fontWeight="bold"
        {...props}
      />
    );
  },
);

export const Subtitle = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  function Text(props, ref) {
    return (
      <ChakraHeading
        ref={ref}
        as={"h3"}
        fontSize={"18px"}
        fontWeight="semibold"
        color="white"
        {...props}
      />
    );
  },
);

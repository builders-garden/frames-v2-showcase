import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import * as React from "react";

export const ParagraphBig = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    return (
      <ChakraText ref={ref} fontSize={"18px"} color="paragraph" {...props} />
    );
  },
);

export const Paragraph = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    return (
      <ChakraText ref={ref} fontSize={"16px"} color="paragraph" {...props} />
    );
  },
);

import { Separator as ChakraSeparator, SeparatorProps } from "@chakra-ui/react";
import * as React from "react";

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  function Separator(props, ref) {
    return (
      <ChakraSeparator
        borderColor="#FFFFFF"
        opacity={"20%"}
        ref={ref}
        {...props}
      />
    );
  },
);

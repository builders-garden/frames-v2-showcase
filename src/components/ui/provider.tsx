"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#B898FF" },
        link: { value: "#8A63D2" },
        paragraph: { value: "#ABABAB" },
        heading: { value: "#FFFFFF" },
      },
      fontWeights: {
        bold: { value: 700 },
        semibold: { value: 600 },
        regular: { value: 400 },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

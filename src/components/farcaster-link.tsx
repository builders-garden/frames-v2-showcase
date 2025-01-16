"use client";

import { useCallback } from "react";

import { Link } from "@/components/ui/link";
import { Box, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import { useFrameContext } from "@/hooks/frame-context";
import sdk from "@farcaster/frame-sdk";

export const FarcasterLink = ({
  link,
  text,
  target = "_blank",
  textAlign = "left",
  fontSize = "14px",
  color = "primary",
  cursor = "pointer",
  mt = "0",
}: {
  link: string;
  text: string;
  target?: string;
  textAlign?: string;
  fontSize?: string;
  color?: string;
  cursor?: string;
  mt?: string;
}) => {
  const { context } = useFrameContext();

  const openWarpcastUrl = useCallback(() => {
    sdk.actions.openUrl("https://docs.farcaster.xyz/developers/frames/v2/");
  }, []);

  return (
    <Box
      w="full"
      display="flex"
      justifyContent={{ base: "left", md: "center" }}
    >
      {context ? (
        <Text
          fontSize={{ base: fontSize, lg: "lg" }}
          textAlign={textAlign}
          onClick={openWarpcastUrl}
          color={color}
          textDecoration="underline"
          cursor={cursor}
          display="flex"
          alignItems="center"
          gap={1}
          mt={mt}
        >
          {text}
          <FiExternalLink />
        </Text>
      ) : (
        <Link
          href={link}
          target={target}
          fontSize={{ base: fontSize, lg: "lg" }}
          textAlign="left"
          color={color}
          textDecoration="underline"
          cursor={cursor}
          display="flex"
          alignItems="center"
          gap={1}
          mt={mt}
        >
          {text}
          <FiExternalLink />
        </Link>
      )}
    </Box>
  );
};

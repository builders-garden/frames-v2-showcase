import { Text } from "@chakra-ui/react";

export const HighlightedText = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Text as="span" fontWeight="bold" color="primary">
      {children}
    </Text>
  );
};

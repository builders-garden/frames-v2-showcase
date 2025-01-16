import { TextProps } from "@chakra-ui/react";
import { Subtitle } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";

export const MenuItem: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Subtitle
      lineHeight={1.2}
      p="0"
      py="0.5rem"
      bg="transparent"
      _hover={{ bg: "transparent", cursor: "pointer", opacity: 0.6 }}
      transition="all 0.2s ease"
      {...props}
    >
      {children}
    </Subtitle>
  );
};

export const MenuSubItem: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Paragraph
      lineHeight={1.2}
      p="0"
      py="0.45rem"
      ml="1.25rem"
      color="paragraph"
      bg="transparent"
      _hover={{ bg: "transparent", cursor: "pointer", opacity: 0.6 }}
      transition="all 0.2s ease"
      {...props}
    >
      {children}
    </Paragraph>
  );
};

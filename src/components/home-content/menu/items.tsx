import { MenuItemProps } from "@chakra-ui/react";
import { MenuItem as ChakraMenuItem } from "@/components/ui/menu";
import { Subtitle } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  return (
    <ChakraMenuItem
      p="0"
      py="0.5rem"
      bg="transparent"
      _hover={{ bg: "transparent", cursor: "pointer", opacity: 0.6 }}
      transition="all 0.2s ease"
      {...props}
    >
      <Subtitle lineHeight={1.2}>{children}</Subtitle>
    </ChakraMenuItem>
  );
};

export const MenuSubItem: React.FC<MenuItemProps> = ({
  children,
  ...props
}) => {
  return (
    <ChakraMenuItem
      p="0"
      py="0.45rem"
      ml="1.25rem"
      color="paragraph"
      bg="transparent"
      _hover={{ bg: "transparent", cursor: "pointer", opacity: 0.6 }}
      transition="all 0.2s ease"
      {...props}
    >
      <Paragraph lineHeight={1.2}>{children}</Paragraph>
    </ChakraMenuItem>
  );
};

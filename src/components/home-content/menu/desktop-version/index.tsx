import { Box } from "@chakra-ui/react";
import { menuItems } from "../data";
import { MenuItem, MenuSubItem } from "../items";

export const MenuDesktop = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      w="25%"
      maxW="290px"
      border="1px solid #363D56"
      p="1.25rem 1.5rem"
      h="fit-content"
      borderRadius="0.75rem"
      position="sticky"
      top={0}
    >
      {menuItems.map((item, index) => (
        <Box key={index} mb={item.subitems ? "0.5rem" : "0"}>
          {/* <ChakraMenuItem
              id={`${item.value}-item`}
              value={getTitleId(item.value)}
              asChild
            > */}
          <MenuItem>{item.text}</MenuItem>
          {/* </ChakraMenuItem> */}
          {item.subitems && (
            <Box>
              {item.subitems.map((subitem, subIndex) => (
                // <ChakraMenuItem
                //   asChild
                //   key={subIndex}
                //   id={`${subitem.value}-item`}
                //   value={`${subitem.value}-link`}
                // >
                <MenuSubItem>{subitem.text}</MenuSubItem>
                // </ChakraMenuItem>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

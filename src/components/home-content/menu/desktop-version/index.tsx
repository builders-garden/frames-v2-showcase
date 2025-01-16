import { Box } from "@chakra-ui/react";
import { getTitleId, menuItems } from "../data";
import { MenuItem, MenuSubItem } from "../items";
import { scrollToSection } from "..";

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
          <MenuItem onClick={() => scrollToSection(getTitleId(item.value))}>
            {item.text}
          </MenuItem>
          {item.subitems && (
            <Box>
              {item.subitems.map((subitem, subIndex) => (
                <MenuSubItem
                  key={`${subIndex}-${subitem.value}`}
                  onClick={() => scrollToSection(getTitleId(subitem.value))}
                >
                  {subitem.text}
                </MenuSubItem>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

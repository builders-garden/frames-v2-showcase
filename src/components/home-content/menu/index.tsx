import { Button } from "@/components/ui/button";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MenuItem, MenuSubItem } from "./items";
import { getTitleId, menuItems } from "./data";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log("section", section);
  if (section) {
    const yOffset = -35;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const HomeMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex={100}
      display={{ base: "block", md: "none" }}
    >
      <MenuRoot
        positioning={{ placement: "top-start" }}
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        onSelect={(e) => {
          console.log("clicked", e.value);
          scrollToSection(e.value);
        }}
      >
        <MenuTrigger asChild>
          <Button
            variant="outline"
            size="xl"
            h="auto"
            w="auto"
            minW="0"
            p="0.5rem"
            css={{
              "& svg": {
                width: "40px",
                height: "40px",
              },
            }}
            outline="none"
            bg="#1A1D2A"
            border="1px solid #363D56"
            borderRadius="7px"
          >
            {!open && <IoIosMenu />}
            {open && <IoClose />}
          </Button>
        </MenuTrigger>
        <MenuContent
          bg="#1A1D2A"
          border="1px solid #363D56"
          py="1rem"
          px="1.25rem"
          pr="3rem"
          borderRadius="7px"
        >
          {menuItems.map((item, index) => (
            <Box key={index} mb={item.subitems ? "0.5rem" : "0"}>
              <MenuItem
                id={`${item.value}-item`}
                value={getTitleId(item.value)}
              >
                {item.text}
              </MenuItem>
              {item.subitems && (
                <Box>
                  {item.subitems.map((subitem, subIndex) => (
                    <MenuSubItem
                      key={subIndex}
                      id={`${subitem.value}-item`}
                      value={`${subitem.value}-link`}
                    >
                      {subitem.text}
                    </MenuSubItem>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

import styles from "./page.module.css";
import { HStack, Input, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  PopoverRoot,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  return (
    <div className={styles.page}>
      <HStack>
        <Button size="xs">Click me</Button>
        <PopoverRoot>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              Click me
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle>
              <Text my="4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </Text>
              <Input placeholder="Your fav. character" size="sm" />
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      </HStack>
    </div>
  );
}

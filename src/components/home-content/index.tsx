import { HStack, VStack, Input, Text, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  PopoverRoot,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFrameContext } from "@/hooks/frame-context";

export default function HomeContent() {
  const { context } = useFrameContext();
  return (
    <VStack w="full" h="full" px="4" py="2">
      <HStack w="full" justifyContent="space-between" alignItems="center">
        <Text my="4">Logo</Text>
        <HStack alignItems="center">
          <Image
            src={context?.user.pfpUrl}
            alt={`${context?.user.username} avatar`}
            width={10}
            height={10}
            borderRadius="full"
          />
          <Text my="4">{context?.user.username}</Text>
        </HStack>
      </HStack>
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
    </VStack>
  );
}

import { Box, Flex } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ClipboardButton, ClipboardRoot } from "./clipboard";

interface CodeBlockProps {
  code: string;
  language: string;
  title: string;
}

const CodeBlock = ({ code, language, title }: CodeBlockProps) => {
  return (
    <Box
      position="relative"
      rounded="md"
      overflow="hidden"
      border="1px"
      borderColor="gray.200"
      bg="gray.800"
      width="100%"
    >
      <Flex justify="space-between" align="center" px={4} py={2} bg="gray.700">
        <Box color="white" fontSize="sm" fontWeight="bold">
          {title}
        </Box>
        <ClipboardRoot value={code}>
          <ClipboardButton variant="ghost" />
        </ClipboardRoot>
      </Flex>
      <Box as="pre" p={0} fontSize="xs" bg="gray.800">
        <SyntaxHighlighter language={language} style={darcula}>
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeBlock;

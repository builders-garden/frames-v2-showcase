import { PrimaryButton } from "@/components/ui/button";
import CodeBlock from "@/components/ui/code-block";
import { Field } from "@/components/ui/field";
import { Textarea, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSignMessage } from "wagmi";

const codeBlock = `
  import { useSignMessage } from "wagmi";
  ...

  export const SignAMessage = () => {
    const [message, setMessage] = useState("your message");

    const { signMessage, data } = useSignMessage();

    return (
      ...
      <button
        onClick={() => signMessage({ message })}
      >
        Sign Message
      </button>
      ...
    );
  }
`;

interface SignAMessageProps {
  open: boolean;
}

export const SignAMessage: React.FC<SignAMessageProps> = ({ open }) => {
  const [message, setMessage] = useState("");

  const { signMessage, data, reset } = useSignMessage();

  useEffect(() => {
    if (!open) {
      setMessage("");
      reset();
    }
  }, [open]);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Field label="Your message">
        <Textarea
          outline="none"
          resize="none"
          placeholder="Dope message here :3..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          borderColor="border.emphasized"
        />
      </Field>
      <PrimaryButton
        bg="primary"
        disabled={!message}
        onClick={() => signMessage({ message })}
      >
        Sign Message
      </PrimaryButton>
      {data && (
        <Field label="Signature">
          <Textarea
            readOnly
            resize="none"
            value={data}
            h="8rem"
            borderColor="border.emphasized"
          />
        </Field>
      )}
      <CodeBlock
        language="typescript"
        title="SignAMessage.tsx"
        code={codeBlock}
      />
    </VStack>
  );
};

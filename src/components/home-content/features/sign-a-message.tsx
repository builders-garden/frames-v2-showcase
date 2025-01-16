import { FarcasterLink } from "@/components/farcaster-link";
import { Alert } from "@/components/ui/alert";
import { PrimaryButton } from "@/components/ui/button";
import CodeBlock from "@/components/ui/code-block";
import { Field } from "@/components/ui/field";
import { Paragraph } from "@/components/ui/paragraph";
import { useFrameContext } from "@/hooks/frame-context";
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
  const { context } = useFrameContext();

  useEffect(() => {
    if (!open) {
      setMessage("");
      reset();
    }
  }, [open]);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        Obviously you can sign a message with your wallet. Here's how you can do
        it.
      </Paragraph>
      {context ? (
        <>
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
        </>
      ) : (
        <Alert
          title="Bruh, viewing this from a browser is not fun 👀"
          status="info"
        >
          If you load this site like a frames V2, you can try the Sign Message
          feature directly.
        </Alert>
      )}
      <CodeBlock
        language="typescript"
        title="SignAMessage.tsx"
        code={codeBlock}
      />
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/getting-started#signatures"
        text="Learn more about how signatures work here"
        fontSize="xs"
      />
    </VStack>
  );
};

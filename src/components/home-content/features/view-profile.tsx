"use client";

import { useCallback, useState } from "react";
import sdk from "@farcaster/frame-sdk";

import { toaster } from "@/components/ui/toaster";
import { HStack, Input, VStack, createListCollection } from "@chakra-ui/react";

import { PrimaryButton } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Paragraph } from "@/components/ui/paragraph";
import CodeBlock from "@/components/ui/code-block";
import { FarcasterUserBulkResponse, NeynarUser } from "@/lib/types";
import { FarcasterLink } from "@/components/farcaster-link";
import { useFrameContext } from "@/hooks/frame-context";
import { Alert } from "@/components/ui/alert";

const codeBlock = `
  import { useCallback } from "react";
  import sdk, { AddFrame } from "@farcaster/frame-sdk";

  const ViewProfileComponent = () => {
    // ... load sdk.context
    const fid = context?.user?.fid || 2;

    const viewProfile = useCallback(async () => {
      try {  
        await sdk.actions.viewProfile({ fid });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
      }
    }, []);

    return (
      <button onClick={viewProfile}>
        Show profile
      </button>
    );
  }
  `;

interface FarcasterSelectProps {
  users: NeynarUser[];
  onSelectUser: (fid: number) => void;
}

const SelectValueItem = () => (
  <SelectValueText placeholder="Select user">
    {(items: Array<NeynarUser>) => {
      const { display_name, pfp_url } = items[0];
      return (
        <HStack>
          <Avatar name={display_name} size="xs" src={pfp_url} />
          {display_name}
        </HStack>
      );
    }}
  </SelectValueText>
);

const FarcasterSelect = ({ users, onSelectUser }: FarcasterSelectProps) => {
  const handleSelect = useCallback(
    (details: { value: string[] }) => {
      const selectedUser = users.find(
        (user) => user.fid.toString() === details.value[0],
      );
      if (selectedUser) {
        onSelectUser(selectedUser.fid);
      }
    },
    [users, onSelectUser],
  );

  const collection = createListCollection({
    items: users,
    itemToString: (item) => item.display_name,
    itemToValue: (item) => item.fid.toString(),
  });

  return (
    <SelectRoot
      collection={collection}
      size="sm"
      positioning={{ sameWidth: true }}
      onValueChange={handleSelect}
    >
      <SelectLabel>Select Farcaster user</SelectLabel>
      <SelectTrigger>
        <SelectValueItem />
      </SelectTrigger>
      <SelectContent portalled={false}>
        {users.map((user) => (
          <SelectItem item={user} key={user.fid} justifyContent="flex-start">
            <Avatar name={user.display_name} src={user.pfp_url} size="xs" />
            {user.display_name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export function ViewProfile({ userFid }: { userFid: number }) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [farcasterUsers, setFarcasterUsers] = useState<NeynarUser[]>([]);

  const { context } = useFrameContext();

  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const farcasterApiResult = await fetch(
        `/api/farcaster/search?q=${searchInput}&viewer_fid=${userFid ?? 2}&limit=10`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (farcasterApiResult.ok) {
        const farcasterData: FarcasterUserBulkResponse =
          await farcasterApiResult.json();
        setFarcasterUsers(farcasterData.data.users);
      } else {
        console.error("Failed to get users from farcaster");
      }
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const viewProfile = useCallback(async (fid: number) => {
    try {
      await sdk.actions.viewProfile({ fid });
    } catch (error) {
      toaster.error({
        title: "Profile not found, unknown error",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, []);

  return (
    <VStack gap="1rem" width="100%" alignItems="flex-start">
      <Paragraph>
        You can view the profile of a user by passing in their Farcaster ID.
        <br />
        This will trigger a dialog on farcaster native client.
      </Paragraph>

      {context ? (
        <>
          <PrimaryButton onClick={() => viewProfile(userFid)}>
            View your profile
          </PrimaryButton>
          <VStack gap="0.5rem" w={{ base: "full", md: "50%", lg: "30%" }}>
            <HStack w="full">
              <Input
                w="full"
                placeholder="Search Farcaster users"
                variant="subtle"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <PrimaryButton
                onClick={handleSearch}
                loading={isSearching}
                w="25%"
                size="sm"
              >
                {isSearching ? "Searching..." : "Search"}
              </PrimaryButton>
            </HStack>
            {farcasterUsers.length > 0 && (
              <FarcasterSelect
                users={farcasterUsers}
                onSelectUser={viewProfile}
              />
            )}
          </VStack>
        </>
      ) : (
        <Alert
          title="gm gm, you could view some cool profiles from the frame 👀"
          status="info"
        >
          If you load this site like a frames V2, you could search for a user by
          his username and view his profile preview.
        </Alert>
      )}

      <CodeBlock language="typescript" title="View Profile" code={codeBlock} />
      <FarcasterLink
        link="https://docs.farcaster.xyz/developers/frames/v2/spec#feature-social"
        text="Learn more about the view profile here"
        fontSize="xs"
      />
    </VStack>
  );
}

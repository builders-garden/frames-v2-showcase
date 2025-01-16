import { DbUser } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useUser(fid?: number) {
  const { data, isLoading, refetch } = useQuery<DbUser>({
    queryKey: ["user", fid],
    queryFn: async () => {
      const userResult = await fetch(`/api/user?fid=${fid}`);
      const { user } = await userResult.json();
      return user ?? null;
    },
    enabled: !!fid,
  });

  return { user: data, isLoading, refetch };
}

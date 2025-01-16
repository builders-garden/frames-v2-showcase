export interface DbUser {
  fid: number;
  token: string | null;
  createdAt: string;
  updatedAt: string;
}

export type NeynarUser = {
  object: string;
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string;
  custody_address: string;
  profile: {
    bio: {
      text: string;
    };
    location: {
      latitude: number;
      longitude: number;
      address: {
        city: string;
        state: string;
        state_code: string;
        country: string;
        country_code: string;
      };
    };
  };
  follower_count: number;
  following_count: number;
  verifications: string[];
  verified_addresses: {
    eth_addresses: string[];
    sol_addresses: string[];
  };
  verified_accounts: {
    platform: string;
    username: string;
  }[];
  power_badge: boolean;
  viewer_context: {
    following: boolean;
    followed_by: boolean;
    blocking: boolean;
    blocked_by: boolean;
  };
};

export type FarcasterUserBulkResponse = {
  status: string;
  data: {
    users: NeynarUser[];
  };
};

import packageInfo from "../../package.json";
import { env } from "@/lib/env";

export const AppInfo = {
  APP_NAME: "Speedrun frames v2",
  APP_DESCRIPTION:
    "Speedrun frames v2, we help u build your own frames, faster ⚡",
  PRODUCTION: process.env.NODE_ENV === "production",
  VERSION: packageInfo.version,
} as const;

export const FRAME_METADATA = {
  version: "next",
  imageUrl: `${env.NEXT_PUBLIC_URL}/opengraph-image`,
  button: {
    title: "Speedrun frames v2 ✨",
    action: {
      type: "launch_frame",
      name: AppInfo.APP_NAME,
      url: env.NEXT_PUBLIC_URL,
      splashImageUrl: `${env.NEXT_PUBLIC_URL}/splash.png`,
      splashBackgroundColor: "#402e75",
    },
  },
};

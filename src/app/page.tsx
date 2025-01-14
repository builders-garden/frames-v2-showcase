import { Metadata } from "next";
import { AppInfo, FRAME_METADATA } from "@/lib/constants";
import HomePage from "@/components/pages/home";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: AppInfo.APP_NAME,
    openGraph: {
      title: AppInfo.APP_NAME,
      description: AppInfo.APP_DESCRIPTION,
    },
    other: {
      "fc:frame": JSON.stringify(FRAME_METADATA),
    },
  };
}

export default function Home() {
  return <HomePage />;
}

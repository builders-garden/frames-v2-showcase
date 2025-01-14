import "./globals.css";
import type { Metadata } from "next";
import { getSession } from "next-auth/react";
import { AppInfo } from "@/lib/constants";
import { Providers } from "@/components/providers";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: AppInfo.APP_NAME,
  description: AppInfo.APP_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased size-full min-h-screen`}
      >
        <Providers session={session}>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

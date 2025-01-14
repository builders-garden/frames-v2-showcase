import "./globals.css";

import type { Metadata } from "next";
import { getSession } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";

import { AppInfo } from "@/lib/constants";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased size-full min-h-screen`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}

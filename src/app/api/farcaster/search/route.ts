import { NextRequest, NextResponse } from "next/server";

import { env } from "@/lib/env";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  try {
    if (!searchParams.has("q")) {
      return NextResponse.json(
        {
          status: "nok",
          error: "query is required. Please specify a query",
        },
        { status: 400 },
      );
    }
    const apiResult = await fetch(
      `${env.NEYNAR_BASE_URL}/farcaster/user/search?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${env.NEYNAR_API_KEY}`,
        },
      },
    );
    if (apiResult.ok) {
      const farcasterData = await apiResult.json();
      return NextResponse.json({
        status: "ok",
        data: {
          users: farcasterData.result.users,
        },
      });
    } else {
      return NextResponse.json(
        {
          status: "nok",
          error: {
            ...(await apiResult.json()),
          },
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "nok", error: error }, { status: 500 });
  }
}

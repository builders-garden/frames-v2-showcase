import { getUserByFid } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fid = searchParams.get("fid");

  if (!fid) {
    return NextResponse.json(
      { status: "nok", error: "Missing fid" },
      { status: 400 },
    );
  }

  try {
    const user = await getUserByFid(parseInt(fid));

    if (!user) {
      return NextResponse.json(
        { status: "ok", error: "User not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ status: "ok", user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "nok", error: error }, { status: 500 });
  }
}

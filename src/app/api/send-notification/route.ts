import { z } from "zod";
import { NextRequest } from "next/server";

import { sendFrameNotification } from "@/lib/notifications";

const requestSchema = z.object({
  fid: z.number(),
  title: z.string(),
  text: z.string(),
});

export async function POST(request: NextRequest) {
  const requestJson = await request.json();
  const requestBody = requestSchema.safeParse(requestJson);

  if (requestBody.success === false) {
    return Response.json(
      { success: false, errors: requestBody.error.errors },
      { status: 400 },
    );
  }

  console.log(
    `[api/send-notification|${new Date().toUTCString()}] Sending notification to fid ${requestBody.data.fid}`,
  );
  const sendResult = await sendFrameNotification({
    fid: requestBody.data.fid,
    title: requestBody.data.title,
    body: requestBody.data.text,
  });
  console.log(
    `[api/send-notification|${new Date().toUTCString()}] Send result: ${JSON.stringify(sendResult)}`,
  );

  if (sendResult.state === "error") {
    return Response.json(
      { success: false, error: sendResult.error },
      { status: 500 },
    );
  } else if (sendResult.state === "rate_limit") {
    return Response.json(
      { success: false, error: "Rate limited" },
      { status: 429 },
    );
  }

  return Response.json({ success: true });
}

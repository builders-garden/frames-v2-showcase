import { createUser, getUserByFid, updateUserByFid } from "@/lib/db";
import { sendFrameNotification } from "@/lib/notifications";
import {
  ParseWebhookEvent,
  parseWebhookEvent,
  verifyAppKeyWithNeynar,
} from "@farcaster/frame-node";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const requestJson = await request.json();

  console.log(
    `[webhook|${new Date().toUTCString()}] requestJson: ${JSON.stringify(requestJson)}`,
  );

  let data;
  try {
    data = await parseWebhookEvent(requestJson, verifyAppKeyWithNeynar);
  } catch (e: unknown) {
    const error = e as ParseWebhookEvent.ErrorType;

    switch (error.name) {
      case "VerifyJsonFarcasterSignature.InvalidDataError":
      case "VerifyJsonFarcasterSignature.InvalidEventDataError":
        // The request data is invalid
        return Response.json(
          { success: false, error: error.message },
          { status: 400 },
        );
      case "VerifyJsonFarcasterSignature.InvalidAppKeyError":
        // The app key is invalid
        return Response.json(
          { success: false, error: error.message },
          { status: 401 },
        );
      case "VerifyJsonFarcasterSignature.VerifyAppKeyError":
        // Internal error verifying the app key (caller may want to try again)
        return Response.json(
          { success: false, error: error.message },
          { status: 500 },
        );
    }
  }

  const fid = data.fid;
  const event = data.event;

  console.log(
    `[webhook|${new Date().toUTCString()}] fid: ${fid}, event: ${JSON.stringify(event)}`,
  );

  switch (event.event) {
    case "frame_added":
      if (event.notificationDetails) {
        const user = await getUserByFid(fid);
        if (!user) {
          await createUser({
            fid,
            token: event.notificationDetails.token,
          });
        } else {
          await updateUserByFid(fid, {
            token: event.notificationDetails.token,
          });
        }
        await sendFrameNotification({
          fid,
          title: "Speedrun frames v2 added 💜",
          body: "You will receive notifications when the docs will be updated",
        });
      } else {
        await updateUserByFid(fid, {
          token: null,
        });
      }
      break;
    case "frame_removed":
      await updateUserByFid(fid, {
        token: null,
      });
      break;
    case "notifications_enabled":
      await updateUserByFid(fid, {
        token: event.notificationDetails.token,
      });
      await sendFrameNotification({
        fid,
        title: "gm Farcaster Fren 💜",
        body: "Notifications for Speedrun frames v2 are now enabled",
      });
      break;
    case "notifications_disabled":
      await updateUserByFid(fid, {
        token: null,
      });
      break;
  }

  return Response.json({ success: true });
}

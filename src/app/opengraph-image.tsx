import { ImageResponse } from "next/og";

import { loadGoogleFont } from "@/lib/google-font";
import { AppInfo } from "@/lib/constants";

export const dynamic = "force-dynamic";
export const contentType = "image/png";

export const alt = AppInfo.APP_NAME;

export const size = {
  width: 600,
  height: 400,
};

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div tw="h-full w-full flex flex-col justify-center items-center relative bg-white">
          <div tw="flex flex-col">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
            >
              <h1 tw="text-2xl">{AppInfo.APP_NAME}</h1>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Geist",
            data: await loadGoogleFont("Geist"),
            style: "normal",
          },
        ],
      },
    );
  } catch (e) {
    console.log(`Failed to generate image`, e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}

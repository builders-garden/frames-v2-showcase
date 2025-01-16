export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL || "https://frames-v2.builders.garden";

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjI2MjgwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEwN2IyYzM1MEEzRDMxZDUzYTFGNzY1ODU0NUU4ZEIxNTBEMGQ5RTQifQ",
      payload: "eyJkb21haW4iOiJmcmFtZXMtdjIuYnVpbGRlcnMuZ2FyZGVuIn0",
      signature:
        "MHhlZDc5N2QxNDdiNDFkMGJkNDJkOTc2NDkxODUyYjhmMmNmNTQ4ZGIwZGRiZDc0YmIyOTc5ZTQzN2E2YzcwNzg4NDY1YzU0NGU0OTc1NWVmN2Y4YzYyODIzODliMGNjNTM3NzAwMTVlMDgxMGRjNzgwNDM1ZTA0ZmI2MzY2N2ZjZTFi",
    },
    frame: {
      version: "1",
      name: "Speedrun frames v2",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: `${appUrl}`,
      imageUrl: `${appUrl}/splash.png`,
      buttonTitle: `Speedrun frames v2`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: `#402e75`,
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}

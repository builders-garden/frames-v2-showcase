export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjI2MjgwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDEwN2IyYzM1MEEzRDMxZDUzYTFGNzY1ODU0NUU4ZEIxNTBEMGQ5RTQifQ",
      payload:
        "eyJkb21haW4iOiJzZXR0bGVkLWFsaXZlLWthdHlkaWQubmdyb2stZnJlZS5hcHAifQ",
      signature:
        "MHgxYWY1NDY5ODBhNTAxNzFkOTZlYTE0NDhkY2Q2ZDBlNGM5Zjg0NDU2NjczZmI2MzQ1NmYwOWU0ODQxMzkxNzdmNmRiYjMxNjhhZDFmMDM5MzUwYzcwMmE3ODA2ZjkxNGNjZmM1ZTAyNWE1NDA5ZDFiYWZkMmEwZWViOWUzY2NhNzFi",
    },
    frame: {
      version: "1",
      name: "Farcaster FramesV2 Showcase",
      iconUrl: "https://settled-alive-katydid.ngrok-free.app/splash.png",
      homeUrl: "https://settled-alive-katydid.ngrok-free.app",
      imageUrl: "https://settled-alive-katydid.ngrok-free.app/splash.png",
      buttonTitle: "FramesV2 Showcase",
      splashImageUrl: "https://settled-alive-katydid.ngrok-free.app/splash.png",
      splashBackgroundColor: "#eeccff",
      webhookUrl: "https://settled-alive-katydid.ngrok-free.app/api/webhook",
    },
  };

  return Response.json(config);
}

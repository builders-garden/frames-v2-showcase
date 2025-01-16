export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjU2OTgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg5Qzk1QjM1M2MxMDM5RTQzNUM5MTE1NzM3MjBhNGU2MmY4ZTBhYmNhIn0",
      payload: "eyJkb21haW4iOiI5Y2JlLTIxMy0xODctMjMtMTQubmdyb2stZnJlZS5hcHAifQ",
      signature:
        "MHhhOTA0YjBkNWZlOThhODExYjkxMzQwNDNlMzBkZmMyNjE2NzM2YzZkNGQ0Yzc3MzFiMTY5NGE0NDExODQ2YWJjNWZiM2Y1MjBmZDdhNTI0YTcxZWE2OGI2NTM5OTI4Yzg0OGRhNjNkYzViNDlhZmI1YmJiODI4MjJjM2U1ZjRkMzFj",
    },
    frame: {
      version: "1",
      name: "Farcaster FramesV2 Showcase",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: `${appUrl}`,
      imageUrl: `${appUrl}/image.png`,
      buttonTitle: `FramesV2 Showcase`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: `#eeccff`,
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}

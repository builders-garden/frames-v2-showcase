export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL || "https://frames-v2.builders.garden";

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjU5MjY3NywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweEYzOWJDMDViODhmRDdEMjUzZWVhNmUyQ0Q2ZUVFOEExNDk1RjgwRDgifQ",
      payload: "eyJkb21haW4iOiJmcmFtZXMtdjIuYnVpbGRlcnMuZ2FyZGVuIn0",
      signature:
        "MHg0YjViNDM3ZmM0ZjNhZWUyMjAzNzdlMWMzNDQwYWEwNzJiNWM2NWZjN2Y1ZGJhN2Q4ZGJhYzMyNzE3OWM3ZjEyN2UzYTliNmM5N2Q1ZTU1OTEyNjYzMzRjZTg0ZTcwNmUwNGFlZTc0NTU4ZmFhNjI5YjFkMDU5YzlmMjBkM2FhNjFi",
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

export const getTitleId = (menuLink: MenuLink) => {
  return `${menuLink}-link`;
};

export enum MenuLink {
  Introduction = "introduction",
  GettingStarted = "getting-started",
  Features = "features",
  FarcasterContext = "farcaster-context",
  Auth = "auth",
  AddFrame = "add-frame",
  ShowFarcasterProfile = "show-farcaster-profile",
  SendTransaction = "send-transaction",
  NotificationsAndWebhook = "notifications-&-webhook",
  Signature = "signature",
  SupportedWallets = "supported-wallets",
  TipAndTricks = "tip-&-tricks",
  HowTo = "how-to",
  Debug = "debug",
  ConvertExistingProjects = "convert-existing-projects",
  Resources = "resources",
}

export const menuItems = [
  { text: "Introduction", value: MenuLink.Introduction },
  { text: "Getting Started", value: MenuLink.GettingStarted },
  {
    text: "Features",
    value: MenuLink.Features,
    subitems: [
      { text: "Supported Wallets", value: MenuLink.SupportedWallets },
      { text: "Farcaster Context", value: MenuLink.FarcasterContext },
      { text: "Auth", value: MenuLink.Auth },
      { text: "Add frame", value: MenuLink.AddFrame },
      {
        text: "Notifications & Webhook",
        value: MenuLink.NotificationsAndWebhook,
      },
      { text: "Show Farcaster profile", value: MenuLink.ShowFarcasterProfile },
      { text: "Signature", value: MenuLink.Signature },
      { text: "Send Transaction", value: MenuLink.SendTransaction },
    ],
  },
  { text: "Tip & Tricks", value: MenuLink.TipAndTricks },
  {
    text: "How to",
    value: MenuLink.HowTo,
    subitems: [
      {
        text: "Debug",
        value: MenuLink.Debug,
      },
      {
        text: "Convert existing projects",
        value: MenuLink.ConvertExistingProjects,
      },
    ],
  },
  { text: "Resources", value: MenuLink.Resources },
];

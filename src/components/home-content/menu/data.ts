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
  TipsAndTricks = "tips-&-tricks",
  TipsAndTricksLocalFramesDebugger = "tips-&-tricks-local-frames-debugger",
  TipsAndTricksNgrok = "tips-&-tricks-ngrok",
  TipsAndTricksRememberToLoadContext = "tips-&-tricks-remember-to-load-context",
  TipsAndTricksEveryWebAppCanBeAFrame = "tips-&-tricks-every-web-app-can-be-a-frame",
  TipsAndTricksWhyIsMyFrameCached = "tips-&-tricks-why-is-my-frame-cached",
  Resources = "resources",
  LiveFrames = "live-frames",
  ExampleProjects = "example-projects",
  Videos = "videos",
  Reference = "reference",
  Tools = "tools",
  Learning = "learning",
}

export const menuItems = [
  { text: "Introduction", value: MenuLink.Introduction },
  { text: "Getting Started", value: MenuLink.GettingStarted },
  {
    text: "Features",
    value: MenuLink.Features,
    subitems: [
      { text: "Farcaster Context", value: MenuLink.FarcasterContext },
      { text: "Auth (SIWF)", value: MenuLink.Auth },
      { text: "Add Frame", value: MenuLink.AddFrame },
      {
        text: "Notifications & Webhook",
        value: MenuLink.NotificationsAndWebhook,
      },
      { text: "Show Farcaster profile", value: MenuLink.ShowFarcasterProfile },
      { text: "Sign Message", value: MenuLink.Signature },
      { text: "Send Transaction", value: MenuLink.SendTransaction },
    ],
  },
  {
    text: "Tips & Tricks",
    value: MenuLink.TipsAndTricks,
    subitems: [
      {
        text: "Local Frames.js debugger",
        value: MenuLink.TipsAndTricksLocalFramesDebugger,
      },
      { text: "Ngrok", value: MenuLink.TipsAndTricksNgrok },
      {
        text: "Remember to load the context",
        value: MenuLink.TipsAndTricksRememberToLoadContext,
      },
      {
        text: "Every web app can be a frame",
        value: MenuLink.TipsAndTricksEveryWebAppCanBeAFrame,
      },
      {
        text: "Why is my frame cached!?",
        value: MenuLink.TipsAndTricksWhyIsMyFrameCached,
      },
    ],
  },
  {
    text: "Resources",
    value: MenuLink.Resources,
    subitems: [
      { text: "Live Frames", value: MenuLink.LiveFrames },
      { text: "Example Projects", value: MenuLink.ExampleProjects },
      { text: "Videos", value: MenuLink.Videos },
      { text: "Reference", value: MenuLink.Reference },
      { text: "Tools", value: MenuLink.Tools },
      { text: "Learning", value: MenuLink.Learning },
    ],
  },
];

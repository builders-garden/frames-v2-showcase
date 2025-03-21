import { LinkBoxProps } from "@/components/ui/link";
import { MenuLink } from "../menu/data";

interface Resource {
  category: string;
  links: LinkBoxProps[];
  id: MenuLink;
}

const borderRadiusFramesLogos = "0.25rem";

export const resourcesData: Resource[] = [
  {
    category: "Live Frames",
    id: MenuLink.LiveFrames,
    links: [
      {
        imgSrc: "./links/farville.png",
        title: "FarVille",
        subtitle: "Plant, grow and harvest crop with frens",
        href: "https://farville.farm",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
      {
        imgSrc: "./links/betttr.png",
        title: "Betttr",
        subtitle: "Sport Betting on Farcaster, powered by Azuro",
        href: "https://betttr.xyz",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
      {
        imgSrc: "./links/yoink.avif",
        title: "Yoink",
        subtitle: "Click to yoink the flag!",
        href: "https://yoink.party/framesV2",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
      {
        imgSrc: "./links/framedl.png",
        title: "Framedl",
        subtitle: "Wordle in a frame",
        href: "https://framedl.xyz",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
      {
        imgSrc: "./links/farcaster-royale.jpg",
        title: "Farcaster Royale",
        subtitle: "Battle royale game on Farcaster",
        href: "https://fc-battles.vercel.app",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
      {
        imgSrc: "./links/bracket.avif",
        title: "Bracket",
        subtitle: "Sports betting platform",
        href: "https://f.bracket.game",
        imgProps: {
          borderRadius: borderRadiusFramesLogos,
        },
      },
    ],
  },
  {
    category: "Example projects",
    id: MenuLink.ExampleProjects,
    links: [
      {
        imgSrc: "./links/github.svg",
        title: "Frames v2 Demo",
        subtitle: "Forkable NextJS example app",
        href: "https://github.com/farcasterxyz/frames-v2-demo",
      },
      {
        imgSrc: "./links/github.svg",
        title: "Frames v2 Starter (by limone.eth)",
        subtitle: "A simple starter to kickstart your project",
        href: "https://github.com/builders-garden/frames-v2-starter",
      },
      {
        imgSrc: "./links/github.svg",
        title: "Frames v2 Starter (by stephancill)",
        subtitle: "A simple starter to kickstart your project",
        href: "https://github.com/stephancill/frames-v2-template",
      },
      {
        imgSrc: "./links/github.svg",
        title: "Swap Demo",
        subtitle: "A simple token swap frame",
        href: "https://github.com/horsefacts/frames-v2-swap-demo",
      },
      {
        imgSrc: "./links/github.svg",
        title: "Yoink",
        subtitle: "Onchain capture the flag",
        href: "https://github.com/horsefacts/yoink-devcon/tree/main/app",
      },
    ],
  },
  {
    category: "Videos",
    id: MenuLink.Videos,
    links: [
      {
        imgSrc: "./links/youtube.svg",
        title: "Frames v2 Demo",
        subtitle: "Forkable NextJS example app",
        href: "https://www.youtube.com/watch?v=5wAbo_YsuC4",
      },
      {
        imgSrc: "./links/youtube.svg",
        title: "Frames manifest/embeds",
        subtitle: "Warpcast dev tools, manifest format, embeds",
        href: "https://www.youtube.com/watch?v=S1KuwHYPtxU",
      },
      {
        imgSrc: "./links/youtube.svg",
        title: "Frames v2 FAQ",
        subtitle: "Solving some doubts abount Frames v2",
        href: "https://www.youtube.com/watch?v=sr5uuIz4jG0",
      },
    ],
  },
  {
    category: "Reference",
    id: MenuLink.Reference,
    links: [
      {
        imgSrc: "./links/farcaster.svg",
        title: "Frames v2 Spec",
        subtitle: "Formal v2 spec",
        href: "https://docs.farcaster.xyz/developers/frames/v2/spec",
      },
    ],
  },
  {
    category: "Tools",
    id: MenuLink.Tools,
    links: [
      {
        imgSrc: "./links/warpcast.svg",
        title: "Frame Playground",
        subtitle: "Warpcast Frame developer tools",
        href: "https://warpcast.com/~/developers/frames",
      },
      {
        imgSrc: "./links/github.svg",
        title: "Frame SDK",
        subtitle: "Frame SDK JavaScript library",
        href: "https://github.com/farcasterxyz/frames/",
      },
    ],
  },
  {
    category: "Learning",
    id: MenuLink.Learning,
    links: [
      {
        imgSrc: "./links/warpcast.svg",
        title: "/frames-v2",
        subtitle: "Frames v2 news and developer channel",
        href: "https://warpcast.com/~/channel/frames-v2",
      },
    ],
  },
];

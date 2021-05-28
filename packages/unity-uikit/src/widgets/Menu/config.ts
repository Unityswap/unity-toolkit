import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.unity-swap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.unity-swap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/unity",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://unityswap.info",
      },
      {
        label: "Tokens",
        href: "https://unityswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://unityswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://unityswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.unity-swap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/unityswap",
      },
      {
        label: "Docs",
        href: "https://docs.unity-swap.finance",
      },
      {
        label: "Blog",
        href: "https://unityswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/unityswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/UnitySwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/UnitySwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/UnitySwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/unityswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/unityswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/unityswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/UnitySwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/UnityswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/unityswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/unityswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/UnitySwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/UnitySwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/unityswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;

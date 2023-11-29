import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ScanReach Docs",
  description: "ScanReach Documentation and user manuals",

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logomark.svg",
    externalLinkIcon: true,
    outline: "deep",
    search: {
      provider: "local",
      options: {},
    },
    nav: nav(),

    sidebar: {
      "/documentation/": {
        base: "/documentation/",
        items: sidebar(),
      },
    },

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
      // TODO: Add links to home page or something
    ],

    footer: {
      message: "Enabling wireless connectivity for the maritime industry",
      copyright: "© Scandinavian Reach Technologies AS",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Home", link: "/" },
    {
      text: "Documentation",
      link: "/documentation/introduction",
      activeMatch: "/documentation/",
    },
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      link: "introduction",
    },
    {
      text: "OWC",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/OWC/introduction" },
        // { text: "Runtime API Examples", link: "/api-examples" },
        {
          text: "API",
          items: [
            {
              text: "API Getting Started",
              link: "/OWC/api/api-getting-started",
            },
          ],
        },
      ],
    },
    {
      text: "ConnectPOB",
      collapsed: false,
      docFooterText: "ConnectPOB",
      items: [
        { text: "Introduction", link: "/ConnectPOB/introduction" },
        {
          text: "Handling of information",
          link: "/ConnectPOB/handling-of-information",
        },
        // { text: "Runtime API Examples", link: "/api-examples" },
      ],
    },
    {
      text: "ConnectFleet",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/ConnectFleet/introduction" },
        // { text: "Runtime API Examples", link: "/api-examples" },
      ],
    },
  ];
}

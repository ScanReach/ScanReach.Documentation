import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ScanReach Docs",
  description: "ScanReach documentation and user manual",
  base: "/ScanReach.Documentation/", // TODO: Change to proper base URL once deployed

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

    sidebar: sidebar(),

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
      text: "Docs",
      link: "/docs/introduction",
      activeMatch: "/docs/",
    },
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ScanReach Introduction",
      link: "/docs/introduction",
    },
    {
      text: "OWC",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/docs/OWC/introduction" },
        // { text: "Runtime API Examples", link: "/docs/api-examples" },
        {
          text: "API",
          items: [
            {
              text: "API Getting Started",
              link: "/docs/OWC/api/api-getting-started",
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
        {
          text: "ConnectPOB Introduction",
          link: "/docs/ConnectPOB/introduction",
        },
        {
          text: "Handling of information",
          link: "/docs/ConnectPOB/handling-of-information",
        },
        {
          text: "Personnel administration",
          link: "/docs/ConnectPOB/personnel-administration",
        },
        {
          text: "Mustering",
          link: "/docs/ConnectPOB/mustering",
        },
        {
          text: "Manage Nodes",
          link: "/docs/ConnectPOB/manage-nodes",
        },
        // { text: "Runtime API Examples", link: "/docs/api-examples" },
      ],
    },
    {
      text: "ConnectFleet",
      collapsed: false,
      items: [
        {
          text: "ConnectFleet Introduction",
          link: "/docs/ConnectFleet/introduction",
        },
        // { text: "Runtime API Examples", link: "/docs/api-examples" },
      ],
    },
    {
      text: "How to guides",
      collapsed: false,
      items: [
        {
          text: "Introduction",
          link: "/docs/How-to-guides/introduction",
        },
        {
          text: "Generic dashboard setup",
          link: "/docs/How-to-guides/generic-dashboard",
        },
        // { text: "Runtime API Examples", link: "/docs/api-examples" },
      ],
    },
  ];
}

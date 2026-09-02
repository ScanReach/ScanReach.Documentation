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
        {
          text: "Installation",
          items: [
            {
              text: "Installation Overview",
              link: "/docs/OWC/installation/installation-overview",
            },
            {
              text: "Installation Guide",
              link: "/docs/OWC/installation/installation-guide",
            },
            {
              text: "Installation Checklist",
              link: "/docs/OWC/installation/installation-checklist",
            },
          ],
        },
        {
          text: "Configuration",
          items: [
            {
              text: "Configuration Overview",
              link: "/docs/OWC/configuration/configuration-overview",
            },
            {
              text: "Configuration Guide",
              items: [
                {
                  text: "User Configuration",
                  link: "/docs/OWC/configuration/user-configuration",
                },
                {
                  text: "Node Configuration",
                  link: "/docs/OWC/configuration/node-configuration",
                },
                {
                  text: "Gangway Configuration",
                  link: "/docs/OWC/configuration/gangway-configuration",
                },
                {
                  text: "Bunk Setup",
                  link: "/docs/OWC/configuration/bunk-setup",
                },
                {
                  text: "Wearable Assignment",
                  link: "/docs/OWC/configuration/wearable-assignment",
                },
                {
                  text: "Sensor Configuration",
                  link: "/docs/OWC/configuration/sensor-configuration",
                },
                {
                  text: "Alarm Configuration",
                  link: "/docs/OWC/configuration/alarm-configuration",
                },
                {
                  text: "Dashboard Configuration",
                  link: "/docs/OWC/configuration/dashboard-configuration",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "ConnectPOB",
      collapsed: true,
      docFooterText: "ConnectPOB",
      items: [
        {
          text: "Introduction",
          items: [
            {
              text: "Intro",
              link: "/docs/ConnectPOB/introduction/connectPOB-introduction",
            },
            {
              text: "For The User",
              link: "/docs/ConnectPOB/introduction/for-the-user",
            },
          ],
        },
        {
          text: "Pages",
          items: [
            {
              text: "Safety Page",
              link: "/docs/ConnectPOB/pages/safety-page",
            },
            {
              text: "System Status Page",
              link: "/docs/ConnectPOB/pages/system-status-page",
            },
            {
              text: "People Admin Page",
              link: "/docs/ConnectPOB/pages/people-admin-page",
            },
            {
              text: "Gangway Page",
              link: "/docs/ConnectPOB/pages/gangway-page",
            },
            {
              text: "Bunk Admin Page",
              link: "/docs/ConnectPOB/pages/bunk-admin-page",
            },
            {
              text: "Wearables Admin Page",
              link: "/docs/ConnectPOB/pages/wearables-admin-page",
            },
            {
              text: "Node Admin Page",
              link: "/docs/ConnectPOB/pages/node-admin-page",
            },
            {
              text: "User Admin Page",
              link: "/docs/ConnectPOB/pages/user-admin-page",
            },
          ],
        },
      ],
    },
    {
      text: "ConnectFleet",
      collapsed: true,
      items: [
        {
          text: "ConnectFleet Introduction",
          link: "/docs/ConnectFleet/introduction",
        },
      ],
    },
    {
      text: "ConnectFuel",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          items: [
            {
              text: "ConnectFuel Introduction",
              link: "/docs/ConnectFuel/Introduction/connectFuel-introduction",
            },
            {
              text: "For The User",
              link: "/docs/ConnectFuel/Introduction/for-the-user",
            },
            {
              text: "How ConnectFuel Works",
              link: "/docs/ConnectFuel/Introduction/how-connectFuel-works",
            },
            {
              text: "Data Security",
              link: "/docs/ConnectFuel/Introduction/data-security-and-integrity",
            },
            {
              text: "Integration",
              link: "/docs/ConnectFuel/Introduction/Integration-with-vessel-operations",
            },
          ],
        },
      ],
    },
    {
      text: "ConnectCCM",
      collapsed: true,
      items: [
        {
          text: "ConnectCCM Introduction",
          link: "/docs/ConnectCCM/introduction",
        },
      ],
    },
    {
      text: "ConnectData",
      collapsed: true,
      items: [
        {
          text: "ConnectData Introduction",
          link: "/docs/ConnectData/connectdata-introduction",
        },
        {
          text: "ConnectData API",
          items: [
            {
              text: "API Getting Started",
              link: "/docs/ConnectData/api/api-getting-started",
            },
            {
              text: "API Reference",
              link: "/docs/ConnectData/api/api-reference",
            },
            {
              text: "API Examples",
              link: "/docs/ConnectData/api/api-examples",
            },
          ],
        },
      ],
    },
    {
      text: "How to guides",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/docs/How-to-guides/introduction",
        },
        {
          text: "Generic dashboard setup",
          link: "/docs/How-to-guides/generic-dashboard",
        },
      ],
    },
    {
      text: "Release Notes",
      collapsed: true,
      items: [
        {
          text: "Notes",
          link: "/docs/Release-notes/release-notes",
        },
      ],
    },
    {
      text: "FAQ",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/docs/Faq/faq-introduction",
        },
        {
          text: "Frequently Asked Questions",
          items: [
            {
              text: "General",
              link: "/docs/Faq/faqs/general-faq",
            },
            {
              text: "System Administration",
              link: "/docs/Faq/faqs/system-administration-faq",
            },
            {
              text: "Product Usage and Operations",
              link: "/docs/Faq/faqs/product-usage-and-operations-faq",
            },
            {
              text: "Data and Monitoring",
              link: "/docs/Faq/faqs/data-and-monitoring-faq",
            },
            {
              text: "Hardware",
              link: "/docs/Faq/faqs/hardware-faq",
            },
            {
              text: "Support and Maintenance",
              link: "/docs/Faq/faqs/support-and-maintenance-faq",
            },
          ],
        },
        {
          text: "Troubleshooting",
          items: [
            {
              text: "ConnectPOB",
              link: "/docs/Faq/troubleshooting/connectPOB-troubleshooting-faq",
            },
          ],
        },
      ],
    },
  ];
}

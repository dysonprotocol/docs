// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dyson Protocol Docs",
  tagline: "Distributed Web Apps",
  url: "https://dysonprotocol.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  //
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/dysonproject/docs/-/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/dysonproject/docs/-/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Dyson Protocol",
        logo: {
          alt: "Dyson Protocol Logo",
          src: "img/logo-inverted.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            to: "blog",
            position: "left",
            label: "Blog",
          },
          {
            href: "https://dys.dysonprotocol.com/",
            label: "Mainnet",
            position: "right",
          },
          {
            href: "https://dys-testnet.dysonvalidator.com/",
            label: "Testnet",
            position: "right",
          },
          {
            href: "https://explorer.dys.dysonprotocol.com/",
            label: "Explorer",
            position: "right",
          },
          {
            label: "API",
            href: "https://dys-api.dysonprotocol.com/",
            position: "right",
          },
          {
            label: "Discord",
            href: "https://discord.gg/BNHRHGdeNj",
            position: "right",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/DysonProtocol",
            position: "right",
          },
          {
            label: "GitLab",
            href: "https://gitlab.com/dysonproject/dyson",
            position: "right",
          },
          {
            label: "GitHub",
            href: "https://github.com/orgs/dysonprotocol/",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Except where otherwise noted, content on this site is licensed <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 Public Domain</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

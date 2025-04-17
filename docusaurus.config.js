// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "eGrocer Documentation",
  tagline:
    "Online Multi Vendor Grocery Store, eCommerce Marketplace Flutter Full App with Admin Panel",
  favicon: "img/app_icon.webp",

  // Set the production url of your site here
  url: "https://wrteamdev.github.io",
  baseUrl: "/egrocer-documentation/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WRTeam-in", // Usually your GitHub org/user name.
  projectName: "egrocer-documentation", // Usually your repo name.
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("@easyops-cn/docusaurus-search-local")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          routeBasePath: "docs",
          // Add all relevant sidebars here
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          breadcrumbs: true,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/app_icon.webp",
      // Set dark mode as default
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "eGrocer",
        logo: {
          alt: "eGrocer Logo",
          src: "img/app_icon.webp",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            type: "search",
            position: "right",
            className: "custom-search-button",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} WRTeam. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

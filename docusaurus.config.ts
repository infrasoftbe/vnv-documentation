import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import webpack from 'webpack';

import { createProxyMiddleware } from 'http-proxy-middleware';

const config: Config = {
  title: 'VnV Tools',
  tagline: 'Infrasoft vnv tools',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infrasoftbe.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vnv-documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'infrasoftbe', // Usually your GitHub org/user name.
  projectName: 'vnv-documentation', // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: "classic",
        config : {
          restDatabase : {
            specPath: 'openapi/database/swagger.json',
            outputDir: "docs/rest/database",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          restManagement : {
            specPath: 'openapi/management/swagger.json',
            outputDir: "docs/rest/management",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          restMicrosoft : {
            specPath: 'openapi/infrasoft-pnp-rest/swagger.json',
            outputDir: "docs/rest/microsoft",
            sidebarOptions: {
              groupPathsBy: "tagGroup",
            },
          },
          restSession : {
            version : "3",
            proxy : "https://google.com",
            baseUrl : "https://google.com",
            specPath: 'openapi/session/swagger.json',
            outputDir: "docs/rest/session",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          }
        }
      }
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'VnV Tools',
      logo: {
        alt: 'infrasoft logo',
        src: 'img/infrasoft-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'packagesSidebar',
          position: 'left',
          label: 'Packages',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'restapiSidebar',
          position: 'left',
          label: 'REST',
        },
        {
          label: 'REST 2',
          position: 'left',
          items: [
            {
              to: '/docs/rest/overview',
              label: 'Vnv-Session',
            },
            {
              to: '/docs/rest/endpoints',
              label: 'Vnv-Database',
            },
            {
              to: '/docs/rest/examples',
              label: 'Vnv-Management',
            },
            {
              label: 'Vnv-User',
              to: '/docs/rest/users'
            },
            {
              label: 'Ms-Sharepoint',
              to: '/docs/rest/microsoft/express-pnp'
            },
            {
              label: 'Ms-Graph365',
              to: '/docs/rest/ms-g365'
            },
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/infrasoftbe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Components',
              to: '/docs/api',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
            {
              label: 'REST',
              to: '/docs/openapi',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    }

  } satisfies Preset.ThemeConfig,

  stylesheets : [
    {
      href: 'vnv-documentation/css/base.css',
      type: 'text/css'
    }
  ],

  markdown: {
    mermaid: true,
  },
  
  themes: ['@docusaurus/theme-mermaid' , 'docusaurus-theme-openapi-docs'],
  
};

export default config;

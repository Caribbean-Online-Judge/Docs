// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const redocusaurus = require('./redocusaurus.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Caribbean Online Judge',
  tagline: 'Thing better!',
  url: 'https://docs.caribbeanonlinejudge.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Caribbean-Online-Judge', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  presets: [
    // @ts-ignore
    redocusaurus,
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Caribbean-Online-Judge/COJ.Docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Caribbean Online Judge',
        logo: {
          alt: 'Caribbean Online Judge',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Getting started',
          },
          {
            label: 'REST API',
            position: 'left',
            items: [
              // {
              //   label: 'Production',
              //   to: '/api-doc/production/',
              // },
              {
                label: 'Staging',
                to: '/api-doc/staging/',
              },
            ],
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Caribbean-Online-Judge',
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
                label: 'Getting started',
                to: '/docs/getting-started',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Caribbean-Online-Judge',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Caribbean Online Judge, Org. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
        plugins: ["line-numbers"],
      },
    }),
};

module.exports = config;

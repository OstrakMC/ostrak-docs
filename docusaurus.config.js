// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ostrak',
  tagline: 'Цифровые документы и идентификация для RP-серверов Minecraft',
  favicon: 'img/favicon-32.png',

  future: {
    v4: true,
  },

  url: 'https://docs.ostrak.benovich.cc',
  baseUrl: '/',

  organizationName: 'OstrakMC',
  projectName: 'ostrak-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: {label: 'Русский'},
      en: {label: 'English'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/OstrakMC/ostrak-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ostrak-icon-512.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Ostrak',
        logo: {
          alt: 'Ostrak',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://modrinth.com',
            label: 'Modrinth',
            position: 'right',
          },
          {
            href: 'https://github.com/OstrakMC',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {label: 'Установка', to: '/installation'},
              {label: 'Команды и права', to: '/commands-and-permissions'},
              {label: 'Настройка', to: '/configuration'},
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {label: 'GitHub', href: 'https://github.com/OstrakMC'},
              {label: 'Modrinth', href: 'https://modrinth.com'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Ostrak`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;

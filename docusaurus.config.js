// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FreeDumb\'s Site',
  tagline: 'Everything that I Learned',
  url: 'https://ryuch91.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ryuch91', // Usually your GitHub org/user name.
  projectName: 'til-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: 'Korean',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ryuch91/til-blog/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ryuch91/til-blog/tree/master/',
          blogSidebarCount: 10,
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // HTML <head>에 <link> 태그로 css source가 추가됨
  stylesheets: [
    //String format
    //e.g 'https://docusaurus.io/style.css',
    //Object format
    //e.g.
    //{
    //  href: 'http://mydomain.com/style.css',
    //}
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        switchConfig: {
          darkIcon: '\u{1F47F}', //unicode icon (devil)
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIcon: '\u{1F47C}', //unicode icon (angel)
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      image: 'img/docusaurus.png', // default image for meta tag (like og:image / twitter:image)
      navbar: {
        title: 'FreeDumb\'s Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        // item별로 navbar에 링크 생성
        items: [
          {
            type: 'doc',
            docId: 'system/intro',
            position: 'left',
            label: 'Doc-System',
          },
          {
            type: 'doc',
            docId: 'code/intro',
            position: 'left',
            label: 'Doc-Code',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Doc-Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ryuch91',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Docusaurus default logo',
          src: 'img/logo.svg',
          href: 'https://github.com/ryuch91',
          width: 75,
          height: 75,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'System',
                to: '/docs/system/intro',
              },
              {
                label: 'Code',
                to: '/docs/code/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/8970273/freedumb?tab=profile',
              },
              {
                label: 'Github',
                href: 'https://github.com/ryuch91',
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      //화면 상단에 위치하는 알림바
      announcementBar: {
        id: 'welcome',
        content: 'Welcome, recently I opened this site! Please visit and enjoy it!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      //TOC에 보여질 heading level 설정 (2~6)
      // min default = 2, max default = 3
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      }
    }),
};

module.exports = config;

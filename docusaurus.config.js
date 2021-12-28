// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require("remark-math");
const katex = require("rehype-katex");

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryuch91/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/ryuch91",
  },
  stackoverflow: {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/8970273/freedumb?tab=profile",
  },
  email: {
    label: "Email",
    href: "mailto:ryuch91@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "/blog",
  },
  docsSystem: {
    label: "Docs-System",
    to: "/docs/system/intro",
  },
  docsCode: {
    label: "Docs-Code",
    to: "/docs/code/intro",
  },
  docsTutorial: {
    label: "Docs-Tutorial",
    to: "/docs/tutorial/intro",
  },
  projects: {
    label: "Projects",
    to: "/projects",
  },
  about: {
    label: "About",
    to: "/about",
  },
  resume: {
    label: "Resume",
    to: "/about",
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FreeDumb',
  tagline: 'I am a SW Developer and like to learn and record.',
  url: 'https://ryuch91.github.io',
  baseUrl: '/til-blog/', //Github에서 호스팅하는 프로젝트
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ryuch91', // Usually your GitHub org/user name.
  projectName: 'til-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ryuch91/til-blog/tree/master/',
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
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
      image: 'img/logo.svg', // default image for meta tag (like og:image / twitter:image)
      navbar: {
        title: 'FreeDumb',
        hideOnScroll: true,
        logo: {
          alt: 'FreeDumb',
          src: 'img/logo.svg',
        },
        // item별로 navbar에 링크 생성
        items: [
          { to : "/blog", label: "Blog", position: "left" },
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
          {to: '/projects', label: 'Projects', position: 'right'},
          {to: '/about', label: 'About', position: 'right' },
        ],
      },
      footer: {
        logo: {
          alt: 'FreeDumb',
          src: 'img/logo.svg',
          href: 'https://github.com/ryuch91',
          width: 75,
          height: 75,
        },
        links: [
          {
            title: 'Docs',
            items: [
              internetProfiles.docsCode,
              internetProfiles.docsSystem,
              internetProfiles.docsTutorial,
            ],
          },
          {
            title: 'Community',
            items: [
              internetProfiles.github,
              internetProfiles.linkedin,
              internetProfiles.stackoverflow,
              internetProfiles.email,
            ],
          },
          {
            title: 'More',
            items: [
              internetProfiles.blog,
              internetProfiles.about,
              internetProfiles.projects,
            ],
          },
        ],
        copyright: `Last updated on ${new Date().toDateString()}. Built with Docusaurus(@EvanTay Theme).`
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

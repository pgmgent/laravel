const twemoji = require("twemoji");
const settings = require("../../settings");

module.exports = {
  base: settings.BASIC.base,
  description: settings.BASIC.description,
  dest: "docs",
  head: [
    [
      "link",
      {
        href: "https://www.gdm.gent/vuepress-theme-artevelde/favicon.svg",
        rel: "icon",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    [
      "meta",
      {
        name: "robots",
        content: "noindex",
      },
    ],
  ],
  locales: {
    "/": {
      lang: settings.BASIC.lang || "nl-BE",
      title: settings.BASIC.title,
      description: settings.BASIC.description,
    },
    "/en/": {
      lang: "en-GB",
      title: settings.BASIC.title,
      description: settings.BASIC.description,
    },
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3, 4],
    },
    typographer: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-abbr"));
      md.use(require("markdown-it-deflist"));
      md.use(require("markdown-it-emoji"));
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-ins"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-sup"));
      md.renderer.rules.emoji = function (token, idx) {
        return twemoji.parse(token[idx].content, {
          ext: ".svg",
          size: "svg",
        });
      };
    },
  },
  title: settings.BASIC.title,
  theme: "@artevelde/vuepress-theme-artevelde",
  themeConfig: {
    canvas: settings.DATA.canvas,
    data: settings.DATA,
    docsBranch: "master",
    docsDir: "docs",
    docsRepo: settings.DATA.repo,
    editLinks: settings.DATA.editLinks,
    editLinkText: "Edit",
    locales: {
      "/": {
        and: "en",
        label: settings.BASIC.label || "Nederlands",
        lastUpdated: "Laatst bijgewerkt",
        nav: settings.NAVBAR,
        organisation: {
          departments: {
            cmd: {
              name: "Communicatie, Media en Design",
            },
          },
          programmes: {
            gdm: {
              name: "Bachelor Grafische en Digitale Media",
              url: "https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media",
            },
            pgm: {
              name: "Graduaat Programmeren",
              url: "https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren",
            },
          },
          school: {
            name: "Arteveldehogeschool",
            logo: "https://www.gdm.gent/vuepress-theme-artevelde/artevelde__logo--nl.svg",
            url: "https://www.arteveldehogeschool.be/",
          },
          teacher: ["Docent & Onderzoeker", "Docenten & Onderzoekers"],
        },
        selectText: settings.BASIC.selectText || "Taal",
        sidebar: settings.SIDEBAR,
      },
      "/en/": {
        and: "and",
        label: "English",
        lastUpdated: "Last updated",
        organisation: {
          departments: {
            cmd: {
              name: "Communication, Media, and Design",
            },
          },
          programmes: {
            gdm: {
              name: "Bachelor of Graphic and Digital Media",
              url: "https://www.artevelde-uas.be/programmes/bachelor/graphic-and-digital-media-dutch",
            },
            pgm: {
              name: "Associate Degree in Computer Programming",
              url: "https://www.artevelde-uas.be/programmes/associate-degree/computer-programming",
            },
          },
          school: {
            name: "Artevelde University of Applied Sciences",
            logo: "https://www.gdm.gent/vuepress-theme-artevelde/artevelde__logo--en.svg",
            url: "https://www.artevelde-uas.be/",
          },
          teacher: ["Lecturer & Researcher", "Lecturers & Researchers"],
        },
        selectText: "Language",
      },
    },
    repo: settings.DATA.repo,
    repoLabel: "GitHub",
  },
};

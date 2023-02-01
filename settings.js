module.exports = Object.freeze({
  BASIC: {
    base: "/laravel/",
    description: "Advanced Development with PHP & MVC with Laravel",
    lang: "nl-BE",
    title: "Framework Development & Laravel",
  },
  DATA: {
    academicYear: "2022-23",
    authors: ["Frederick Roegiers", "Dieter De Weirdt"],
    canvas: null,
    department: "cmd",
    editLinks: false,
    programme: "gdm",
    repo: "gdmgent/laravel",
    short_title: "laravel",
  },
  NAVBAR: [
    {
      text: "Principes",
      link: "/principles/",
    },
    {
      text: "Laravel",
      link: "/laravel/",
    },
    {
      text: "Mailing",
      link: "/mailing/",
    },
    {
      text: "Deployment",
      link: "/deployment/",
    },
  ],
  SIDEBAR: {
    "/principles/": [
      {
        title: "Basisprincipes",
        path: "/principles/",
        collapsable: false,
        sidebarDepth: 1,
        children: ["composer", "server", "htaccess", "routing"],
      },
    ],
    "/laravel/": [
      {
        title: "Laravel MVC Framework",
        path: "/laravel/",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "01-frameworks",
          "02-installation",
          "03-mvc",
          "04-asset-linking",
          "05-database-migrations",
          "06-relations",
          "07-storage",
          "08-authentication",
          "09-eloquent",
          "10-forms-validation",
          "11-localization",
          "12-api",
          "13-cheatsheet",
        ],
      },
    ],
    "/mailing/": [
      {
        title: "Mailing",
        path: "/mailing/",
        collapsable: false,
        sidebarDepth: 1,
        children: ["mailhog", "mailtrap"],
      },
    ],
    "/deployment/": [
      {
        title: "Deployment",
        path: "/deployment/",
        collapsable: false,
        sidebarDepth: 1,
        children: [],
      },
    ],
  },
});

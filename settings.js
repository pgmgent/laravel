module.exports = Object.freeze({
  BASIC: {
    base: "/laravel/",
    description: "Advanced Development with PHP & MVC with Laravel",
    lang: "nl-BE",
    title: "Advanced Development & Laravel",
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
      text: "Basisconcepten",
      link: "/concepts/",
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
    "/concepts/": [
      {
        title: "Basis concepten",
        path: "/concepts/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: "HTTP",
            path: "/concepts/http/",
            children: [
              "/concepts/http/headers",
              "/concepts/http/methods",
              "/concepts/http/statuscodes",
            ],
          },
          {
            title: "Servers",
            path: "/concepts/servers/",
            children: [
              "/concepts/servers/htaccess",
              "/concepts/servers/routing",
            ],
          },
          {
            title: "Beveiliging",
            path: "/concepts/security/",
            children: [
              "/concepts/security/csrf",
              "/concepts/security/xss",
              "/concepts/security/sql-injection",
            ],
          },
          {
            title: "Composer",
            path: "/concepts/composer/",
            children: [
              "/concepts/composer/installation",
              "/concepts/composer/getting-started",
            ],
          },
        ],
      },
    ],
    "/laravel/": [
      {
        title: "Laravel MVC Framework",
        path: "/laravel/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: "De basis",
            path: "/laravel/basics/",
            children: [
              "/laravel/basics/installation",
              "/laravel/basics/mvc",
              "/laravel/basics/routing",
              "/laravel/basics/mvc-views",
              "/laravel/basics/mvc-layouts",
              "/laravel/basics/mvc-controller",
              "/laravel/basics/mvc-models",
              "/laravel/basics/forms-validation",
              "/laravel/basics/assets",
            ],
          },
          {
            title: "Werken met een database",
            path: "/laravel/databases/",
            children: [
              "/laravel/databases/connecting",
              "/laravel/databases/migrations",
              "/laravel/databases/eloquent",
              "/laravel/databases/relations",
            ],
          },
          {
            title: "Dieper in op Laravel",
            path: "/laravel/advanced/",
            children: [
              "/laravel/advanced/authentication",
              "/laravel/advanced/file-storage",
              "/laravel/advanced/localization",
            ],
          },
          {
            title: "How to",
            path: "/laravel/how-to/",
            children: ["/laravel/how-to/build-an-api"],
          },
          // {
          //   title: "Cheat Sheet",
          //   path: "/laravel/cheatsheet/",
          // },
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

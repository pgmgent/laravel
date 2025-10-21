module.exports = Object.freeze({
  BASIC: {
    base: "/laravel/",
    description: "Advanced Development with PHP & MVC with Laravel",
    lang: "nl-BE",
    title: "Advanced Development & Laravel",
  },
  DATA: {
    academicYear: "2024-25",
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
        title: "Laravel",
        path: "/laravel/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: "Laravel MVC",
            path: "/laravel/basics/",
            children: [
              "/laravel/basics/installation",
              "/laravel/basics/mvc",
              "/laravel/basics/routing",
              "/laravel/basics/mvc-views",
              "/laravel/basics/mvc-layouts",
              "/laravel/basics/components",
              "/laravel/basics/mvc-controller",
              "/laravel/basics/mvc-models",
              "/laravel/basics/relations",
              "/laravel/basics/pagination",
              "/laravel/basics/assets",
              "/laravel/basics/file-storage",
              "/laravel/basics/image-manipulation",
              "/laravel/basics/forms-validation",
              "/laravel/basics/localization",
            ],
          },
          {
            title: "Database",
            path: "/laravel/databases/",
            children: [
              "/laravel/databases/connecting",
              "/laravel/databases/migrations",
              "/laravel/databases/seeding",
              "/laravel/databases/eloquent",
              "/laravel/databases/relations",
              "/laravel/databases/soft_delete",
              "/laravel/databases/filament",
            ],
          },
          {
            title: "How to",
            path: "/laravel/how-to/",
            children: [
              "/laravel/how-to/artisan",
              "/laravel/how-to/seo",
              "/laravel/how-to/build-an-api",
              "/laravel/how-to/authentication",


            ],
          },
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

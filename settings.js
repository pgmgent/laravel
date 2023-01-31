module.exports = Object.freeze({
  BASIC: {
    base: "/laravel/",
    description: "Advanced Development with PHP & MVC with Laravel",
    lang: "nl-BE",
    title: "Advanced Development with PHP & MVC with Laravel",
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
      text: "Composer",
      link: "/composer/",
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
    "/composer/": [
      {
        title: "Composer",
        path: "/composer/",
        collapsable: false,
        sidebarDepth: 1,
        children: [],
      },
    ],
    "/laravel/": [
      {
        title: "Laravel MVC Framework",
        path: "/laravel/",
        collapsable: false,
        sidebarDepth: 1,
        children: [],
      },
    ],
    "/mailing/": [
      {
        title: "Mailing",
        path: "/mailing/",
        collapsable: false,
        sidebarDepth: 1,
        children: [],
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

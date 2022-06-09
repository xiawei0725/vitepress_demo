import { defineConfig } from "vitepress";
export default defineConfig({
  title: "夜空中最亮的星",
  description: "夜空中最亮的星的前端博客 vuejs react webpack 前端工程化",
  themeConfig: {
    logo: "",
    nav: [
      { text: "首页", link: "/blog/vuejs" },
      { text: "组件", link: "/components/index" },
      { text: "关于我", link: "/about" },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "vuejs",
          items: [
            {
              text: "abc",
              link: "/blog/vuejs/abc",
            },
          ],
          collapsible: true,
        },
        {
          text: "webpack",
          items: [],
        },
        {
          text: "react",
          items: [],
        },
      ],
      "/components/": [
        {
          text: "组件说明",
          items: [
            {
              text: "按钮组件",
              link: "/components/按钮组件",
            },
          ],
          collapsible: true,
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});

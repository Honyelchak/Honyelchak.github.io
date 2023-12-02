import { navbar } from "vuepress-theme-hope";

export default navbar([
  
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "Java学习",
    icon: "pen-to-square",
    link: "/interview",
  },
  {
    text: "算法学习",
    icon: "pen-to-square",
    link: "/algorithm",
  },
  {
    text: "课程学习",
    icon: "pen-to-square",
    link: "/course",
  },
  {
    text: "项目",
    icon: "circle-info",
    prefix: "/zh/",
    children: [
      {
        text: "教程",
        icon: "signs-post",
        prefix: "cookbook/",
        children: ["markdown/", "vuepress/"],
      },
      {
        text: "项目",
        children: ["changelog", "migration/", "related", "contribution"],
      },
    ],
  },
  {
    text: "关于我",
    icon: "book",
    link: "/project",
  },
]);

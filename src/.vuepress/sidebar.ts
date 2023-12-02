import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slides",
  // ],
  "/interview/": [
    {
      text: "操作系统",
      icon: "laptop-code",
      link: "A1-操作系统/",
      children: "structure",
    },
    {
      text: "计算机网络",
      icon: "book",
      prefix: "A2-计算机网络/",
      children: "structure",
    }
  ],
  "/algorithm/": [
    {
      text: "动态规划",
      icon: "laptop-code",
      prefix: "动态规划/",
      link: "动态规划/",
      children: "structure",
    },
    {
      text: "基础算法",
      icon: "book",
      prefix: "基础算法/",
      children: "structure",
    }
  ],
  "/course/": "structure"
});

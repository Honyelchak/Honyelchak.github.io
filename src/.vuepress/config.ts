import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin  } from "@vuepress/plugin-shiki";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Honyelchak's Blog",
  description: "Honyelchak 的博客",
  theme,
  plugins:[
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
    // shikiPlugin({
    //   // 你的选项
    //   theme: "one-dark-pro",
    //   // langs: ["c++", "java", "javascript", "html", "yaml", "yml", "c", "bat", "bash", "shell", "css", "javascript"]
    // }),
  ], 
  // Enable it with pwa
  shouldPrefetch: true,
});

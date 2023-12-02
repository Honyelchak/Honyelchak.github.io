const e=JSON.parse(`{"key":"v-548905f5","path":"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/LIS.html","title":"LIS(Longest Increasing Sequence)","lang":"zh-CN","frontmatter":{"description":"LIS(Longest Increasing Sequence) 朴素做法O(n^2) 状态表示：f[i]表示以a[i]结尾的IS的长度的最大值，或者说是(a[0]~a[i])这一段序列的LIS。 状态表示f[i] **集合：**以a[i]结尾的递增子序列 **属性：**长度最大值 状态计算 当a[pre] &lt; a[i]，f[i] = max(f[i], f[pre] + 1)","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/LIS.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"LIS(Longest Increasing Sequence)"}],["meta",{"property":"og:description","content":"LIS(Longest Increasing Sequence) 朴素做法O(n^2) 状态表示：f[i]表示以a[i]结尾的IS的长度的最大值，或者说是(a[0]~a[i])这一段序列的LIS。 状态表示f[i] **集合：**以a[i]结尾的递增子序列 **属性：**长度最大值 状态计算 当a[pre] &lt; a[i]，f[i] = max(f[i], f[pre] + 1)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LIS(Longest Increasing Sequence)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"朴素做法O(n^2)","slug":"朴素做法o-n-2","link":"#朴素做法o-n-2","children":[]},{"level":2,"title":"贪心做法O(nlogn)","slug":"贪心做法o-nlogn","link":"#贪心做法o-nlogn","children":[]},{"level":2,"title":"1、相邻元素差绝对值不超过d的最长子序列问题","slug":"_1、相邻元素差绝对值不超过d的最长子序列问题","link":"#_1、相邻元素差绝对值不超过d的最长子序列问题","children":[]},{"level":2,"title":"2、输出LIS路径","slug":"_2、输出lis路径","link":"#_2、输出lis路径","children":[{"level":3,"title":"3.1 基于朴素做法的LIS路径输出","slug":"_3-1-基于朴素做法的lis路径输出","link":"#_3-1-基于朴素做法的lis路径输出","children":[]},{"level":3,"title":"3.2 输出LIS的最小字典序问题(Ologn)","slug":"_3-2-输出lis的最小字典序问题-ologn","link":"#_3-2-输出lis的最小字典序问题-ologn","children":[]}]},{"level":2,"title":"3、覆盖整个序列的最少的不上升子序列的个数","slug":"_3、覆盖整个序列的最少的不上升子序列的个数","link":"#_3、覆盖整个序列的最少的不上升子序列的个数","children":[]},{"level":2,"title":"4、用二分求出非严格单调递增的LIS","slug":"_4、用二分求出非严格单调递增的lis","link":"#_4、用二分求出非严格单调递增的lis","children":[]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":11.32,"words":3397},"filePathRelative":"algorithm/动态规划/LIS.md","localizedDate":"2023年12月2日","excerpt":"<h1> LIS(Longest Increasing Sequence)</h1>\\n<h2> 朴素做法O(n^2)</h2>\\n<ul>\\n<li>状态表示：<code>f[i]</code>表示以a[i]结尾的IS的长度的最大值，或者说是(a[0]~a[i])这一段序列的<code>LIS</code>。</li>\\n<li><strong>状态表示f[i]</strong>\\n<ul>\\n<li>**集合：**以a[i]结尾的递增子序列</li>\\n<li>**属性：**长度最大值</li>\\n</ul>\\n</li>\\n<li><strong>状态计算</strong>\\n<ul>\\n<li>当<code>a[pre] &lt; a[i]</code>，<code>f[i] = max(f[i], f[pre] + 1)</code></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};

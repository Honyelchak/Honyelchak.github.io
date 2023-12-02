const n=JSON.parse(`{"key":"v-6f40be38","path":"/algorithm/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E8%AF%BE/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"数据结构","lang":"zh-CN","frontmatter":{"description":"数据结构 链表 单链表 静态链表 用数组模拟静态链表不容易超时，动态链表中new一个node花费的时间开销很大，很容易超时。 // 基础元素 int head, e[N], ne[N], idx; // head头指针，指向第一个节点 // e[N],记录第i个节点的值 // ne[N]，记录第i个节点指向的下一个节点的索引 // idx, 全局变量，分配给下一个节点的指针。 // 初始化 void init() { head = -1; //表明链表为空 idx = 0; //从0号位置开始存储 } // 在链表头部加入一个数 void insert(int a) { \\te[idx] = a; ne[idx] = ne[head]; head = idx ++; } // 删除第k个插入的数后面的数 void delete(int k) { ne[k] = ne[ne[k]]; } // 在第k个插入的数后面插入一个数 void insert(int k, int x) { e[idx] = x; ne[idx] = ne[k]; ne[k] = idx ++; } // 输出链表 void print() { for (int i = head; ~i; i = ne[i]) print(\\"%d\\\\n\\", e[i]); }","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/algorithm/%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E8%AF%BE/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"数据结构"}],["meta",{"property":"og:description","content":"数据结构 链表 单链表 静态链表 用数组模拟静态链表不容易超时，动态链表中new一个node花费的时间开销很大，很容易超时。 // 基础元素 int head, e[N], ne[N], idx; // head头指针，指向第一个节点 // e[N],记录第i个节点的值 // ne[N]，记录第i个节点指向的下一个节点的索引 // idx, 全局变量，分配给下一个节点的指针。 // 初始化 void init() { head = -1; //表明链表为空 idx = 0; //从0号位置开始存储 } // 在链表头部加入一个数 void insert(int a) { \\te[idx] = a; ne[idx] = ne[head]; head = idx ++; } // 删除第k个插入的数后面的数 void delete(int k) { ne[k] = ne[ne[k]]; } // 在第k个插入的数后面插入一个数 void insert(int k, int x) { e[idx] = x; ne[idx] = ne[k]; ne[k] = idx ++; } // 输出链表 void print() { for (int i = head; ~i; i = ne[i]) print(\\"%d\\\\n\\", e[i]); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"链表","slug":"链表","link":"#链表","children":[{"level":3,"title":"单链表","slug":"单链表","link":"#单链表","children":[]},{"level":3,"title":"双链表","slug":"双链表","link":"#双链表","children":[]}]},{"level":2,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":2,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":2,"title":"单调栈","slug":"单调栈","link":"#单调栈","children":[]},{"level":2,"title":"单调队列","slug":"单调队列","link":"#单调队列","children":[]},{"level":2,"title":"字符串匹配","slug":"字符串匹配","link":"#字符串匹配","children":[{"level":3,"title":"暴力字符串匹配","slug":"暴力字符串匹配","link":"#暴力字符串匹配","children":[]},{"level":3,"title":"KMP","slug":"kmp","link":"#kmp","children":[]}]},{"level":2,"title":"Trie","slug":"trie","link":"#trie","children":[{"level":3,"title":"基本模板","slug":"基本模板","link":"#基本模板","children":[]}]},{"level":2,"title":"并查集","slug":"并查集","link":"#并查集","children":[{"level":3,"title":"朴素并查集","slug":"朴素并查集","link":"#朴素并查集","children":[]},{"level":3,"title":"维护size的并查集","slug":"维护size的并查集","link":"#维护size的并查集","children":[]},{"level":3,"title":"维护到祖宗节点距离的并查集","slug":"维护到祖宗节点距离的并查集","link":"#维护到祖宗节点距离的并查集","children":[]}]},{"level":2,"title":"堆","slug":"堆","link":"#堆","children":[{"level":3,"title":"普通堆","slug":"普通堆","link":"#普通堆","children":[]},{"level":3,"title":"维护插入次序的堆","slug":"维护插入次序的堆","link":"#维护插入次序的堆","children":[]}]},{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[{"level":3,"title":"模拟哈希表","slug":"模拟哈希表","link":"#模拟哈希表","children":[]},{"level":3,"title":"字符串前缀哈希法","slug":"字符串前缀哈希法","link":"#字符串前缀哈希法","children":[]}]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":10.25,"words":3075},"filePathRelative":"algorithm/算法基础课/数据结构.md","localizedDate":"2023年12月2日","excerpt":"<h1> 数据结构</h1>\\n<h2> 链表</h2>\\n<h3> 单链表</h3>\\n<h4> 静态链表</h4>\\n<blockquote>\\n<p>用数组模拟静态链表不容易超时，动态链表中<code>new</code>一个<code>node</code>花费的时间开销很大，很容易超时。</p>\\n</blockquote>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token comment\\">// 基础元素</span>\\n<span class=\\"token keyword\\">int</span> head<span class=\\"token punctuation\\">,</span> e<span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> ne<span class=\\"token punctuation\\">[</span>N<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> idx<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// head头指针，指向第一个节点</span>\\n<span class=\\"token comment\\">// e[N],记录第i个节点的值</span>\\n<span class=\\"token comment\\">// ne[N]，记录第i个节点指向的下一个节点的索引</span>\\n<span class=\\"token comment\\">// idx, 全局变量，分配给下一个节点的指针。</span>\\n\\n<span class=\\"token comment\\">// 初始化</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    head <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//表明链表为空</span>\\n    idx <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//从0号位置开始存储</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 在链表头部加入一个数</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">insert</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\te<span class=\\"token punctuation\\">[</span>idx<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">;</span>\\n    ne<span class=\\"token punctuation\\">[</span>idx<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> ne<span class=\\"token punctuation\\">[</span>head<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    head <span class=\\"token operator\\">=</span> idx <span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 删除第k个插入的数后面的数</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token keyword\\">delete</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> k<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    ne<span class=\\"token punctuation\\">[</span>k<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> ne<span class=\\"token punctuation\\">[</span>ne<span class=\\"token punctuation\\">[</span>k<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 在第k个插入的数后面插入一个数</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">insert</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> k<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    e<span class=\\"token punctuation\\">[</span>idx<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>\\n    ne<span class=\\"token punctuation\\">[</span>idx<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> ne<span class=\\"token punctuation\\">[</span>k<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    ne<span class=\\"token punctuation\\">[</span>k<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> idx <span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 输出链表</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">~</span>i<span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">=</span> ne<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> e<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

const e=JSON.parse(`{"key":"v-66f4f60a","path":"/interview/A3-%E6%95%B0%E6%8D%AE%E5%BA%93/%E9%94%81.html","title":"锁的种类","lang":"zh-CN","frontmatter":{"description":"锁的种类 在MySQL中，根据加锁的范围，可以分为全局锁、表级锁、行级锁三类。 一、全局锁 如何使用？ 要使用全局锁，则要执行这条命令： flush tables with read lock","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/A3-%E6%95%B0%E6%8D%AE%E5%BA%93/%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"锁的种类"}],["meta",{"property":"og:description","content":"锁的种类 在MySQL中，根据加锁的范围，可以分为全局锁、表级锁、行级锁三类。 一、全局锁 如何使用？ 要使用全局锁，则要执行这条命令： flush tables with read lock"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁的种类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"一、全局锁","slug":"一、全局锁","link":"#一、全局锁","children":[{"level":3,"title":"如何使用？","slug":"如何使用","link":"#如何使用","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"二、表级锁","slug":"二、表级锁","link":"#二、表级锁","children":[{"level":3,"title":"表锁","slug":"表锁","link":"#表锁","children":[]},{"level":3,"title":"元数据锁","slug":"元数据锁","link":"#元数据锁","children":[]},{"level":3,"title":"意向锁","slug":"意向锁","link":"#意向锁","children":[]},{"level":3,"title":"AUTO-INC锁","slug":"auto-inc锁","link":"#auto-inc锁","children":[]}]},{"level":2,"title":"三、行级锁","slug":"三、行级锁","link":"#三、行级锁","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]}]},{"level":2,"title":"1、什么SQL语句会加行级锁？","slug":"_1、什么sql语句会加行级锁","link":"#_1、什么sql语句会加行级锁","children":[]},{"level":2,"title":"2、行级锁有哪些种类？","slug":"_2、行级锁有哪些种类","link":"#_2、行级锁有哪些种类","children":[]},{"level":2,"title":"3、MySQL是怎么加行级锁的？","slug":"_3、mysql是怎么加行级锁的","link":"#_3、mysql是怎么加行级锁的","children":[{"level":3,"title":"1. 唯一索引等值查询","slug":"_1-唯一索引等值查询","link":"#_1-唯一索引等值查询","children":[]},{"level":3,"title":"2. 唯一索引范围查询","slug":"_2-唯一索引范围查询","link":"#_2-唯一索引范围查询","children":[]},{"level":3,"title":"3. 非唯一索引等值查询","slug":"_3-非唯一索引等值查询","link":"#_3-非唯一索引等值查询","children":[]},{"level":3,"title":"4. 非唯一索引范围查询","slug":"_4-非唯一索引范围查询","link":"#_4-非唯一索引范围查询","children":[]},{"level":3,"title":"5. 没有加索引的查询","slug":"_5-没有加索引的查询","link":"#_5-没有加索引的查询","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"4、update没加索引会锁全表？","slug":"_4、update没加索引会锁全表","link":"#_4、update没加索引会锁全表","children":[{"level":3,"title":"如何避免这种情况的发生？","slug":"如何避免这种情况的发生","link":"#如何避免这种情况的发生","children":[]}]},{"level":2,"title":"锁的兼容性","slug":"锁的兼容性","link":"#锁的兼容性","children":[]},{"level":2,"title":"间隙锁的兼容性","slug":"间隙锁的兼容性","link":"#间隙锁的兼容性","children":[]},{"level":2,"title":"插入意向锁","slug":"插入意向锁","link":"#插入意向锁","children":[]},{"level":2,"title":"避免死锁的措施","slug":"避免死锁的措施","link":"#避免死锁的措施","children":[]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":35.71,"words":10714},"filePathRelative":"interview/A3-数据库/锁.md","localizedDate":"2023年12月2日","excerpt":"<h1> 锁的种类</h1>\\n<p>在MySQL中，根据加锁的范围，可以分为<code>全局锁</code>、<code>表级锁</code>、<code>行级锁</code>三类。</p>\\n<h2> 一、全局锁</h2>\\n<h3> 如何使用？</h3>\\n<p>要使用全局锁，则要执行这条命令：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>flush <span class=\\"token keyword\\">tables</span> <span class=\\"token keyword\\">with</span> <span class=\\"token keyword\\">read</span> <span class=\\"token keyword\\">lock</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};

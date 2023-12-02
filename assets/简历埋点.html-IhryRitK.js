const e=JSON.parse(`{"key":"v-1c592496","path":"/interview/%E7%AE%80%E5%8E%86%E5%9F%8B%E7%82%B9.html","title":"三、总结","lang":"zh-CN","frontmatter":{"description":"高并发 在对一些业务日志写入数据库的时候，日期用了sdf的静态变量，有时候会报错或者日期乱掉。 觉得代码没问题，后来在网上查阅资料，包括翻看阿里Java手册 阅读源码学到了什么？ 学习到了很多关于方法命名的技巧 在Spring/JDK源码的阅读中，我发现了实际干活的基本上都是以doXXX开头的，方法的包装一般都是以XXX开头的，比如说doCreateBean、doGetBean 能够把自己学到的基础知识利用上是最令人开心的、令人兴奋的。 阅读JDK源码的时候会发现，在方法中经常会把实例变量赋值给局部变量之后再进行操作， 后来我才知道this.data和data的区别，this.data是可以分为两部的 先将局部变量表的第一个slot(this)放到栈中 然后执行getField ....才能拿到值","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/%E7%AE%80%E5%8E%86%E5%9F%8B%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"三、总结"}],["meta",{"property":"og:description","content":"高并发 在对一些业务日志写入数据库的时候，日期用了sdf的静态变量，有时候会报错或者日期乱掉。 觉得代码没问题，后来在网上查阅资料，包括翻看阿里Java手册 阅读源码学到了什么？ 学习到了很多关于方法命名的技巧 在Spring/JDK源码的阅读中，我发现了实际干活的基本上都是以doXXX开头的，方法的包装一般都是以XXX开头的，比如说doCreateBean、doGetBean 能够把自己学到的基础知识利用上是最令人开心的、令人兴奋的。 阅读JDK源码的时候会发现，在方法中经常会把实例变量赋值给局部变量之后再进行操作， 后来我才知道this.data和data的区别，this.data是可以分为两部的 先将局部变量表的第一个slot(this)放到栈中 然后执行getField ....才能拿到值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"高并发","slug":"高并发","link":"#高并发","children":[]},{"level":2,"title":"阅读源码学到了什么？","slug":"阅读源码学到了什么","link":"#阅读源码学到了什么","children":[{"level":3,"title":"伪共享","slug":"伪共享","link":"#伪共享","children":[]}]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"interview/简历埋点.md","localizedDate":"2023年12月2日","excerpt":"<h2> 高并发</h2>\\n<ol>\\n<li>在对一些业务日志写入数据库的时候，日期用了sdf的静态变量，有时候会报错或者日期乱掉。\\n<ol>\\n<li>觉得代码没问题，后来在网上查阅资料，包括翻看阿里Java手册</li>\\n<li></li>\\n</ol>\\n</li>\\n</ol>\\n<h2> 阅读源码学到了什么？</h2>\\n<ol>\\n<li>学习到了很多关于方法命名的技巧\\n<ol>\\n<li>在Spring/JDK源码的阅读中，我发现了实际干活的基本上都是以<code>doXXX</code>开头的，方法的包装一般都是以<code>XXX</code>开头的，比如说<code>doCreateBean</code>、<code>doGetBean</code></li>\\n</ol>\\n</li>\\n<li>能够把自己学到的基础知识利用上是最令人开心的、令人兴奋的。\\n<ol>\\n<li>阅读JDK源码的时候会发现，在方法中经常会把实例变量赋值给局部变量之后再进行操作，</li>\\n<li>后来我才知道<code>this.data</code>和<code>data</code>的区别，<code>this.data</code>是可以分为两部的\\n<ol>\\n<li>先将局部变量表的第一个slot(this)放到栈中</li>\\n<li>然后执行<code>getField ....</code>才能拿到值</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};

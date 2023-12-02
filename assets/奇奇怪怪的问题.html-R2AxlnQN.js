const l=JSON.parse(`{"key":"v-fdad0166","path":"/interview/%E5%A5%87%E5%A5%87%E6%80%AA%E6%80%AA%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"JAVA","lang":"zh-CN","frontmatter":{"description":"SpringBoot 数据库 1、有一个表里有100个字段，如何设计索引。 确定哪些字段是经常用于查询的，以及哪些查询是最频繁的. 主键自增， 找区分度较大的字段建立索引，或者说列基数较大的字段建立索引。 也可以根据具体查询的情况建立联合索引，建组合索引的时候，区分度最高的在最左边。 能满足索引覆盖就尽量满足，避免回表。 最后根据实际情况，定时查看检查索引，优化索引。 2、Innodb引擎中一张表最多放多少列，","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/%E5%A5%87%E5%A5%87%E6%80%AA%E6%80%AA%E7%9A%84%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"JAVA"}],["meta",{"property":"og:description","content":"SpringBoot 数据库 1、有一个表里有100个字段，如何设计索引。 确定哪些字段是经常用于查询的，以及哪些查询是最频繁的. 主键自增， 找区分度较大的字段建立索引，或者说列基数较大的字段建立索引。 也可以根据具体查询的情况建立联合索引，建组合索引的时候，区分度最高的在最左边。 能满足索引覆盖就尽量满足，避免回表。 最后根据实际情况，定时查看检查索引，优化索引。 2、Innodb引擎中一张表最多放多少列，"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T09:42:10.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T09:42:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JAVA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T09:42:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"SpringBoot","slug":"springboot","link":"#springboot","children":[]},{"level":2,"title":"数据库","slug":"数据库","link":"#数据库","children":[{"level":3,"title":"1、有一个表里有100个字段，如何设计索引。","slug":"_1、有一个表里有100个字段-如何设计索引。","link":"#_1、有一个表里有100个字段-如何设计索引。","children":[]},{"level":3,"title":"2、Innodb引擎中一张表最多放多少列，","slug":"_2、innodb引擎中一张表最多放多少列","link":"#_2、innodb引擎中一张表最多放多少列","children":[]},{"level":3,"title":"3、正排索引和倒排索引","slug":"_3、正排索引和倒排索引","link":"#_3、正排索引和倒排索引","children":[]},{"level":3,"title":"4、隐式类型转换可能不走索引","slug":"_4、隐式类型转换可能不走索引","link":"#_4、隐式类型转换可能不走索引","children":[]},{"level":3,"title":"5、下面这条SQL，该怎么创建联合索引？","slug":"_5、下面这条sql-该怎么创建联合索引","link":"#_5、下面这条sql-该怎么创建联合索引","children":[]},{"level":3,"title":"6、数据库三大范式","slug":"_6、数据库三大范式","link":"#_6、数据库三大范式","children":[]},{"level":3,"title":"7、知道数据库中的哪几种索引，分别讲讲？","slug":"_7、知道数据库中的哪几种索引-分别讲讲","link":"#_7、知道数据库中的哪几种索引-分别讲讲","children":[]},{"level":3,"title":"8、阿里开发手册为什么推荐单表不超过2KW","slug":"_8、阿里开发手册为什么推荐单表不超过2kw","link":"#_8、阿里开发手册为什么推荐单表不超过2kw","children":[]},{"level":3,"title":"9、什么是行溢出？","slug":"_9、什么是行溢出","link":"#_9、什么是行溢出","children":[]},{"level":3,"title":"10、Count(1)、Count(*)、count(列名)哪个性能最好？","slug":"_10、count-1-、count-、count-列名-哪个性能最好","link":"#_10、count-1-、count-、count-列名-哪个性能最好","children":[]},{"level":3,"title":"11、count()的优化","slug":"_11、count-的优化","link":"#_11、count-的优化","children":[]}]},{"level":2,"title":"业务","slug":"业务","link":"#业务","children":[{"level":3,"title":"1、百万数据的导入、导出","slug":"_1、百万数据的导入、导出","link":"#_1、百万数据的导入、导出","children":[]}]},{"level":2,"title":"奇奇怪怪","slug":"奇奇怪怪","link":"#奇奇怪怪","children":[{"level":3,"title":"1、为什么数组下标是从0开始而不是从1开始？","slug":"_1、为什么数组下标是从0开始而不是从1开始","link":"#_1、为什么数组下标是从0开始而不是从1开始","children":[]},{"level":3,"title":"2、现在让你设计一个接口，你会用基本数据类型还是包装数据类型","slug":"_2、现在让你设计一个接口-你会用基本数据类型还是包装数据类型","link":"#_2、现在让你设计一个接口-你会用基本数据类型还是包装数据类型","children":[]},{"level":3,"title":"3、大端序和小端序","slug":"_3、大端序和小端序","link":"#_3、大端序和小端序","children":[]},{"level":3,"title":"4、尾递归","slug":"_4、尾递归","link":"#_4、尾递归","children":[]},{"level":3,"title":"5、ClassNotFoundException Vs NoClassDefFoundError(拼多多二面)","slug":"_5、classnotfoundexception-vs-noclassdeffounderror-拼多多二面","link":"#_5、classnotfoundexception-vs-noclassdeffounderror-拼多多二面","children":[]}]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[{"level":3,"title":"1、Redis和netty的网络模型有什么区别？","slug":"_1、redis和netty的网络模型有什么区别","link":"#_1、redis和netty的网络模型有什么区别","children":[]},{"level":3,"title":"2、Redis6.0 多线程的实现机制","slug":"_2、redis6-0-多线程的实现机制","link":"#_2、redis6-0-多线程的实现机制","children":[]},{"level":3,"title":"3、Redis数据类型","slug":"_3、redis数据类型","link":"#_3、redis数据类型","children":[]},{"level":3,"title":"4、跳表的实现","slug":"_4、跳表的实现","link":"#_4、跳表的实现","children":[]},{"level":3,"title":"5、跳表的随机化访问","slug":"_5、跳表的随机化访问","link":"#_5、跳表的随机化访问","children":[]},{"level":3,"title":"6、为什么用跳表而不用平衡树？","slug":"_6、为什么用跳表而不用平衡树","link":"#_6、为什么用跳表而不用平衡树","children":[]},{"level":3,"title":"7、为什么说Hyperloglog是不精确的？","slug":"_7、为什么说hyperloglog是不精确的","link":"#_7、为什么说hyperloglog是不精确的","children":[]},{"level":3,"title":"8、在redis中，可以直接删除大key集合吗？","slug":"_8、在redis中-可以直接删除大key集合吗","link":"#_8、在redis中-可以直接删除大key集合吗","children":[]}]},{"level":2,"title":"1、栈和堆他们的存储速度上谁快？","slug":"_1、栈和堆他们的存储速度上谁快","link":"#_1、栈和堆他们的存储速度上谁快","children":[]},{"level":2,"title":"2、Java各种权限修饰符和范围","slug":"_2、java各种权限修饰符和范围","link":"#_2、java各种权限修饰符和范围","children":[]},{"level":2,"title":"3、List线程安全的子类有哪些？","slug":"_3、list线程安全的子类有哪些","link":"#_3、list线程安全的子类有哪些","children":[]},{"level":2,"title":"4、双亲委派机制是什么？为什么要这样设计？","slug":"_4、双亲委派机制是什么-为什么要这样设计","link":"#_4、双亲委派机制是什么-为什么要这样设计","children":[]},{"level":2,"title":"5、Java注解@Contented、内存伪共享、false share","slug":"_5、java注解-contented、内存伪共享、false-share","link":"#_5、java注解-contented、内存伪共享、false-share","children":[]},{"level":2,"title":"6、jdk源码中为什么把成员变量赋值给局部变量再操作","slug":"_6、jdk源码中为什么把成员变量赋值给局部变量再操作","link":"#_6、jdk源码中为什么把成员变量赋值给局部变量再操作","children":[]},{"level":2,"title":"7、Java中package下的类无法访问到src下目录的类","slug":"_7、java中package下的类无法访问到src下目录的类","link":"#_7、java中package下的类无法访问到src下目录的类","children":[]},{"level":2,"title":"8、BigDecimal","slug":"_8、bigdecimal","link":"#_8、bigdecimal","children":[]},{"level":2,"title":"9、池化技术","slug":"_9、池化技术","link":"#_9、池化技术","children":[]},{"level":2,"title":"10、GC年龄为什么要设置为15次？","slug":"_10、gc年龄为什么要设置为15次","link":"#_10、gc年龄为什么要设置为15次","children":[]},{"level":2,"title":"11、在Java中，Boolean类型占几个字节？","slug":"_11、在java中-boolean类型占几个字节","link":"#_11、在java中-boolean类型占几个字节","children":[]},{"level":2,"title":"12、匿名内部类字节码的表示","slug":"_12、匿名内部类字节码的表示","link":"#_12、匿名内部类字节码的表示","children":[]},{"level":2,"title":"13、关于泛型数组的创建","slug":"_13、关于泛型数组的创建","link":"#_13、关于泛型数组的创建","children":[]}],"git":{"createdTime":1701499503000,"updatedTime":1701510130000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":2}]},"readingTime":{"minutes":22.17,"words":6651},"filePathRelative":"interview/奇奇怪怪的问题.md","localizedDate":"2023年12月2日","excerpt":"<h2> SpringBoot</h2>\\n<h2> 数据库</h2>\\n<h3> 1、有一个表里有100个字段，如何设计索引。</h3>\\n<ol>\\n<li>确定哪些字段是经常用于查询的，以及哪些查询是最频繁的.</li>\\n<li>主键自增，</li>\\n<li>找区分度较大的字段建立索引，或者说列基数较大的字段建立索引。</li>\\n<li>也可以根据具体查询的情况建立联合索引，建组合索引的时候，区分度最高的在最左边。</li>\\n<li>能满足索引覆盖就尽量满足，避免回表。</li>\\n<li>最后根据实际情况，定时查看检查索引，优化索引。</li>\\n</ol>\\n<h3> 2、Innodb引擎中一张表最多放多少列，</h3>","autoDesc":true}`);export{l as data};

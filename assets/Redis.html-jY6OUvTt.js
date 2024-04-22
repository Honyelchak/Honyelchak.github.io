const e=JSON.parse(`{"key":"v-92365caa","path":"/interview/A3-%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/Redis.html","title":"一、概述","lang":"zh-CN","frontmatter":{"description":"NoSQL：not only SQL，意即“不仅仅是SQL”，泛指非关系型数据库。 这些类型的数据存储不需要固定的格式，无需多余操作就可以横向扩展。 一、概述 Redis(REmote DIctionary Server)是速度非常快的非关系型（NoSQL）内存键值数据库，可以存储键和五种不同类型的值之间的映射。 键的类型只能为字符串，值支持五种数据类型：字符串、列表、集合、散列表、有序集合。 Redis 支持很多特性，例如将内存中的数据持久化到硬盘中，使用复制来扩展读性能，使用分片来扩展写性能。","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/A3-%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/Redis.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"一、概述"}],["meta",{"property":"og:description","content":"NoSQL：not only SQL，意即“不仅仅是SQL”，泛指非关系型数据库。 这些类型的数据存储不需要固定的格式，无需多余操作就可以横向扩展。 一、概述 Redis(REmote DIctionary Server)是速度非常快的非关系型（NoSQL）内存键值数据库，可以存储键和五种不同类型的值之间的映射。 键的类型只能为字符串，值支持五种数据类型：字符串、列表、集合、散列表、有序集合。 Redis 支持很多特性，例如将内存中的数据持久化到硬盘中，使用复制来扩展读性能，使用分片来扩展写性能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"1、redis单线程 vs 多线程","slug":"_1、redis单线程-vs-多线程","link":"#_1、redis单线程-vs-多线程","children":[]},{"level":2,"title":"2、redis6.0如何开启多线程","slug":"_2、redis6-0如何开启多线程","link":"#_2、redis6-0如何开启多线程","children":[]},{"level":2,"title":"1、STRING","slug":"_1、string","link":"#_1、string","children":[]},{"level":2,"title":"2、HASH","slug":"_2、hash","link":"#_2、hash","children":[]},{"level":2,"title":"3、LIST","slug":"_3、list","link":"#_3、list","children":[]},{"level":2,"title":"4、SET","slug":"_4、set","link":"#_4、set","children":[{"level":3,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]}]},{"level":2,"title":"5、ZSET","slug":"_5、zset","link":"#_5、zset","children":[]},{"level":2,"title":"6、bitmap","slug":"_6、bitmap","link":"#_6、bitmap","children":[{"level":3,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":3,"title":"扩容机制","slug":"扩容机制","link":"#扩容机制","children":[]}]},{"level":2,"title":"7、hyperloglog","slug":"_7、hyperloglog","link":"#_7、hyperloglog","children":[{"level":3,"title":"基本操作","slug":"基本操作-1","link":"#基本操作-1","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"8、GEO","slug":"_8、geo","link":"#_8、geo","children":[{"level":3,"title":"基本原理","slug":"基本原理","link":"#基本原理","children":[]},{"level":3,"title":"基本操作","slug":"基本操作-2","link":"#基本操作-2","children":[]}]},{"level":2,"title":"SDS","slug":"sds","link":"#sds","children":[{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":3,"title":"内部编码","slug":"内部编码","link":"#内部编码","children":[]}]},{"level":2,"title":"链表","slug":"链表","link":"#链表","children":[{"level":3,"title":"链表结构设计","slug":"链表结构设计","link":"#链表结构设计","children":[]},{"level":3,"title":"链表的优势与缺陷","slug":"链表的优势与缺陷","link":"#链表的优势与缺陷","children":[]}]},{"level":2,"title":"ZipList(用时间还换空间)","slug":"ziplist-用时间还换空间","link":"#ziplist-用时间还换空间","children":[{"level":3,"title":"结构","slug":"结构-1","link":"#结构-1","children":[]}]},{"level":2,"title":"整数集合(intset)","slug":"整数集合-intset","link":"#整数集合-intset","children":[]},{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"主要操作","slug":"主要操作","link":"#主要操作","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":2,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]},{"level":2,"title":"缓存预热","slug":"缓存预热","link":"#缓存预热","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"方案","slug":"方案","link":"#方案","children":[{"level":3,"title":"setnx + expire","slug":"setnx-expire","link":"#setnx-expire","children":[]},{"level":3,"title":"setnx value为(系统时间 + 过期时间)","slug":"setnx-value为-系统时间-过期时间","link":"#setnx-value为-系统时间-过期时间","children":[]},{"level":3,"title":"Lua脚本(setnx + expire)","slug":"lua脚本-setnx-expire","link":"#lua脚本-setnx-expire","children":[]},{"level":3,"title":"Set的扩展命令(SET EX PX NX)","slug":"set的扩展命令-set-ex-px-nx","link":"#set的扩展命令-set-ex-px-nx","children":[]},{"level":3,"title":"SET NX PX NX + 校验唯一随机值，再删除","slug":"set-nx-px-nx-校验唯一随机值-再删除","link":"#set-nx-px-nx-校验唯一随机值-再删除","children":[]},{"level":3,"title":"Redisson框架","slug":"redisson框架","link":"#redisson框架","children":[]},{"level":3,"title":"多机实现的分布式锁Redlock+Redisson","slug":"多机实现的分布式锁redlock-redisson","link":"#多机实现的分布式锁redlock-redisson","children":[]},{"level":3,"title":"相关面试题","slug":"相关面试题","link":"#相关面试题","children":[]}]},{"level":2,"title":"RDB 持久化","slug":"rdb-持久化","link":"#rdb-持久化","children":[{"level":3,"title":"触发策略","slug":"触发策略","link":"#触发策略","children":[]},{"level":3,"title":"执行快照时，数据能被修改吗？","slug":"执行快照时-数据能被修改吗","link":"#执行快照时-数据能被修改吗","children":[]}]},{"level":2,"title":"AOF 持久化","slug":"aof-持久化","link":"#aof-持久化","children":[{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":3,"title":"日志格式","slug":"日志格式","link":"#日志格式","children":[]},{"level":3,"title":"写回策略","slug":"写回策略","link":"#写回策略","children":[]},{"level":3,"title":"重写机制","slug":"重写机制","link":"#重写机制","children":[]},{"level":3,"title":"AOF修复","slug":"aof修复","link":"#aof修复","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"RDB 和 AOF 合体","slug":"rdb-和-aof-合体","link":"#rdb-和-aof-合体","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"三个阶段","slug":"三个阶段","link":"#三个阶段","children":[]},{"level":2,"title":"四种错误情况","slug":"四种错误情况","link":"#四种错误情况","children":[]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"文件事件","slug":"文件事件","link":"#文件事件","children":[]},{"level":2,"title":"时间事件","slug":"时间事件","link":"#时间事件","children":[]},{"level":2,"title":"事件的调度与执行","slug":"事件的调度与执行","link":"#事件的调度与执行","children":[]},{"level":2,"title":"连接过程","slug":"连接过程","link":"#连接过程","children":[]},{"level":2,"title":"主从链","slug":"主从链","link":"#主从链","children":[]},{"level":2,"title":"常用玩法","slug":"常用玩法","link":"#常用玩法","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[{"level":3,"title":"1、为什么redis集群的最大槽位是16384个？","slug":"_1、为什么redis集群的最大槽位是16384个","link":"#_1、为什么redis集群的最大槽位是16384个","children":[]}]},{"level":2,"title":"玩法","slug":"玩法","link":"#玩法","children":[]},{"level":2,"title":"文章信息","slug":"文章信息","link":"#文章信息","children":[]},{"level":2,"title":"点赞功能","slug":"点赞功能","link":"#点赞功能","children":[]},{"level":2,"title":"对文章进行排序","slug":"对文章进行排序","link":"#对文章进行排序","children":[]},{"level":2,"title":"BASE","slug":"base","link":"#base","children":[]},{"level":2,"title":"Redis部分命令","slug":"redis部分命令","link":"#redis部分命令","children":[{"level":3,"title":"查看redis版本信息","slug":"查看redis版本信息","link":"#查看redis版本信息","children":[]},{"level":3,"title":"数据库命令","slug":"数据库命令","link":"#数据库命令","children":[]},{"level":3,"title":"String类型命令","slug":"string类型命令","link":"#string类型命令","children":[]},{"level":3,"title":"List类型命令","slug":"list类型命令","link":"#list类型命令","children":[]}]},{"level":2,"title":"Docker容器部署Redis","slug":"docker容器部署redis","link":"#docker容器部署redis","children":[]},{"level":2,"title":"1、基本数据类型，你还知道其他redis的类型吗？你是怎么应用这几个数据类型的？","slug":"_1、基本数据类型-你还知道其他redis的类型吗-你是怎么应用这几个数据类型的","link":"#_1、基本数据类型-你还知道其他redis的类型吗-你是怎么应用这几个数据类型的","children":[]},{"level":2,"title":"2、bigkey、hotkey的定义","slug":"_2、bigkey、hotkey的定义","link":"#_2、bigkey、hotkey的定义","children":[{"level":3,"title":"bigkey","slug":"bigkey","link":"#bigkey","children":[]},{"level":3,"title":"hotkeys","slug":"hotkeys","link":"#hotkeys","children":[]}]},{"level":2,"title":"3、如何排查Redis的bigkey、hotkey？","slug":"_3、如何排查redis的bigkey、hotkey","link":"#_3、如何排查redis的bigkey、hotkey","children":[{"level":3,"title":"查找bigkey","slug":"查找bigkey","link":"#查找bigkey","children":[]},{"level":3,"title":"查找HotKey","slug":"查找hotkey","link":"#查找hotkey","children":[]}]},{"level":2,"title":"4、如何解决bigkey以及hotkey问题","slug":"_4、如何解决bigkey以及hotkey问题","link":"#_4、如何解决bigkey以及hotkey问题","children":[{"level":3,"title":"bigkey","slug":"bigkey-1","link":"#bigkey-1","children":[]},{"level":3,"title":"hotkey","slug":"hotkey","link":"#hotkey","children":[]}]},{"level":2,"title":"5、个人觉得Redis中比较惊艳的地方？","slug":"_5、个人觉得redis中比较惊艳的地方","link":"#_5、个人觉得redis中比较惊艳的地方","children":[{"level":3,"title":"SDS会默认会创建 0~10000的共享对象","slug":"sds会默认会创建-0-10000的共享对象","link":"#sds会默认会创建-0-10000的共享对象","children":[]}]},{"level":2,"title":"6、Redis中的各个组成部分的关系","slug":"_6、redis中的各个组成部分的关系","link":"#_6、redis中的各个组成部分的关系","children":[]},{"level":2,"title":"7、Redis中是如何解决hash碰撞的？和HashMap有什么区别？","slug":"_7、redis中是如何解决hash碰撞的-和hashmap有什么区别","link":"#_7、redis中是如何解决hash碰撞的-和hashmap有什么区别","children":[]},{"level":2,"title":"8、渐进式rehash","slug":"_8、渐进式rehash","link":"#_8、渐进式rehash","children":[]},{"level":2,"title":"9、Innodb为什么选择使用B+树而不是跳表，Redis为什么选择调表而不是B+树？","slug":"_9、innodb为什么选择使用b-树而不是跳表-redis为什么选择调表而不是b-树","link":"#_9、innodb为什么选择使用b-树而不是跳表-redis为什么选择调表而不是b-树","children":[{"level":3,"title":"B+树和跳表相同之处","slug":"b-树和跳表相同之处","link":"#b-树和跳表相同之处","children":[]},{"level":3,"title":"不同之处","slug":"不同之处","link":"#不同之处","children":[]}]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":69.32,"words":20795},"filePathRelative":"interview/A3-数据库/Redis/Redis.md","localizedDate":"2023年12月2日","excerpt":"<p><strong>NoSQL</strong>：not only SQL，意即“不仅仅是SQL”，泛指非关系型数据库。</p>\\n<p>这些类型的数据存储不需要固定的格式，无需多余操作就可以横向扩展。</p>\\n<hr>\\n<h1> 一、概述</h1>\\n<p>Redis(REmote DIctionary Server)是速度非常快的非关系型（NoSQL）内存键值数据库，可以存储键和五种不同类型的值之间的映射。</p>\\n<p>键的类型只能为字符串，值支持五种数据类型：字符串、列表、集合、散列表、有序集合。</p>\\n<p>Redis 支持很多特性，例如将内存中的数据持久化到硬盘中，使用复制来扩展读性能，使用分片来扩展写性能。</p>","autoDesc":true}`);export{e as data};
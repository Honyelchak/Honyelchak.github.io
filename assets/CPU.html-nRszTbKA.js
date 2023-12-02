const e=JSON.parse(`{"key":"v-5d4c26d0","path":"/interview/A1-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/CPU.html","title":"","lang":"zh-CN","frontmatter":{"description":"在linux系统中，提供了/proc目录下文件，显示系统的软硬件信息。如果想了解系统中CPU的提供商和相关配置信息，则可以查/proc/cpuinfo。但是此文件输出项较多，不易理解。例如我们想获取，有多少颗物理CPU，每个物理cpu核心数，以及超线程是否开启等信息，下面我们就看来一步一步的去探索。 物理CPU、核数、逻辑cpu数的概念 ①物理CPU数（physical id）：主板上实际插入的cpu数量，可以数不重复的 physical id 有几个 ②CPU核心数（cpu cores）：单块CPU上面能处理数据的芯片组的数量，如双核、四核等","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/A1-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/CPU.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:description","content":"在linux系统中，提供了/proc目录下文件，显示系统的软硬件信息。如果想了解系统中CPU的提供商和相关配置信息，则可以查/proc/cpuinfo。但是此文件输出项较多，不易理解。例如我们想获取，有多少颗物理CPU，每个物理cpu核心数，以及超线程是否开启等信息，下面我们就看来一步一步的去探索。 物理CPU、核数、逻辑cpu数的概念 ①物理CPU数（physical id）：主板上实际插入的cpu数量，可以数不重复的 physical id 有几个 ②CPU核心数（cpu cores）：单块CPU上面能处理数据的芯片组的数量，如双核、四核等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"物理CPU、核数、逻辑cpu数的概念","slug":"物理cpu、核数、逻辑cpu数的概念","link":"#物理cpu、核数、逻辑cpu数的概念","children":[]},{"level":2,"title":"cpuinfo文件内容，涉及的项目解读","slug":"cpuinfo文件内容-涉及的项目解读","link":"#cpuinfo文件内容-涉及的项目解读","children":[]},{"level":2,"title":"快速查询想要获取的信息","slug":"快速查询想要获取的信息","link":"#快速查询想要获取的信息","children":[]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"interview/A1-操作系统/CPU.md","localizedDate":"2023年12月2日","excerpt":"<p>在linux系统中，提供了/proc目录下文件，显示系统的软硬件信息。如果想了解系统中CPU的提供商和相关配置信息，则可以查/proc/cpuinfo。但是此文件输出项较多，不易理解。例如我们想获取，有多少颗物理CPU，每个物理cpu核心数，以及超线程是否开启等信息，下面我们就看来一步一步的去探索。</p>\\n<h2> 物理CPU、核数、逻辑cpu数的概念</h2>\\n<p>①物理CPU数（physical id）：主板上实际插入的cpu数量，可以数不重复的 physical id 有几个</p>\\n<p>②CPU核心数（cpu cores）：单块CPU上面能处理数据的芯片组的数量，如双核、四核等</p>","autoDesc":true}`);export{e as data};

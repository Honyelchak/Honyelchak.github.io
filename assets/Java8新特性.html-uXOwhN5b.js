const n=JSON.parse(`{"key":"v-78c90fa7","path":"/interview/A4-Java/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html","title":"面试题","lang":"zh-CN","frontmatter":{"description":"1、Java8 Lambda表达式 Lambda表达式也称为闭包，它允许我们把函数当作参数一样传递给某个方法，或者把代码本身当作数据处理。 早期Java开发者只能使用匿名内部类来实现Lambda表达式。 最简单的可以由逗号分隔的参数列表、-&gt;符号、语句块三部分组成。 例如： // 例子1 // 参数e的类型是编译器推理出来的 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).forEach( e -&gt; System.out.println( e ) ); // 例子2 // 当然也可以将执行参数的类型写上 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).forEach((String e)-&gt; System.out.println( e ) ); // 例子3 // 当有多个参数时 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).sort((e1,e2)-&gt; e1.compareTo(e2)); // 例子4 // 当Lambda的语句块只有一行时，可以不使用return语句。 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).sort((e1,e2)-&gt; e1.compareTo(e2));","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/A4-Java/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:title","content":"面试题"}],["meta",{"property":"og:description","content":"1、Java8 Lambda表达式 Lambda表达式也称为闭包，它允许我们把函数当作参数一样传递给某个方法，或者把代码本身当作数据处理。 早期Java开发者只能使用匿名内部类来实现Lambda表达式。 最简单的可以由逗号分隔的参数列表、-&gt;符号、语句块三部分组成。 例如： // 例子1 // 参数e的类型是编译器推理出来的 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).forEach( e -&gt; System.out.println( e ) ); // 例子2 // 当然也可以将执行参数的类型写上 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).forEach((String e)-&gt; System.out.println( e ) ); // 例子3 // 当有多个参数时 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).sort((e1,e2)-&gt; e1.compareTo(e2)); // 例子4 // 当Lambda的语句块只有一行时，可以不使用return语句。 Arrays.asList( \\"a\\", \\"b\\", \\"d\\" ).sort((e1,e2)-&gt; e1.compareTo(e2));"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面试题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[{"level":2,"title":"1、Java8 Lambda表达式","slug":"_1、java8-lambda表达式","link":"#_1、java8-lambda表达式","children":[]},{"level":2,"title":"2、 函数式接口","slug":"_2、-函数式接口","link":"#_2、-函数式接口","children":[]},{"level":2,"title":"3、接口的默认方法和静态方法","slug":"_3、接口的默认方法和静态方法","link":"#_3、接口的默认方法和静态方法","children":[]},{"level":2,"title":"4、方法引用","slug":"_4、方法引用","link":"#_4、方法引用","children":[]},{"level":2,"title":"5、Optional","slug":"_5、optional","link":"#_5、optional","children":[]},{"level":2,"title":"6、Streams","slug":"_6、streams","link":"#_6、streams","children":[{"level":3,"title":"1、是什么？","slug":"_1、是什么","link":"#_1、是什么","children":[]},{"level":3,"title":"2、 好处？","slug":"_2、-好处","link":"#_2、-好处","children":[]},{"level":3,"title":"3、如何使用？","slug":"_3、如何使用","link":"#_3、如何使用","children":[]},{"level":3,"title":"4、Streams原理","slug":"_4、streams原理","link":"#_4、streams原理","children":[]},{"level":3,"title":"StreamSupport","slug":"streamsupport","link":"#streamsupport","children":[]}]},{"level":2,"title":"7、时间类","slug":"_7、时间类","link":"#_7、时间类","children":[]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[{"level":3,"title":"1、parallel()流有什么缺点？","slug":"_1、parallel-流有什么缺点","link":"#_1、parallel-流有什么缺点","children":[]},{"level":3,"title":"2、Arrays.Stream()不支持boolean数组(只支持int、long、double)","slug":"_2、arrays-stream-不支持boolean数组-只支持int、long、double","link":"#_2、arrays-stream-不支持boolean数组-只支持int、long、double","children":[]}]}],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":12.26,"words":3679},"filePathRelative":"interview/A4-Java/Java8新特性.md","localizedDate":"2023年12月2日","excerpt":"<h2> 1、Java8 Lambda表达式</h2>\\n<hr>\\n<p>Lambda表达式也称为<strong>闭包</strong>，它允许我们把函数当作参数一样传递给某个方法，或者把代码本身当作数据处理。</p>\\n<p>早期Java开发者只能使用<strong>匿名内部类</strong>来实现Lambda表达式。</p>\\n<p>最简单的可以由<strong>逗号分隔的参数列表</strong>、<strong><code>-&gt;</code>符号</strong>、<strong>语句块</strong>三部分组成。</p>\\n<p>例如：</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-ext=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">// 例子1</span>\\n<span class=\\"token comment\\">// 参数e的类型是编译器推理出来的</span>\\nArrays<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"d\\"</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span> e <span class=\\"token operator\\">-&gt;</span> System<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">out</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span> e <span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 例子2</span>\\n<span class=\\"token comment\\">// 当然也可以将执行参数的类型写上</span>\\nArrays<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"d\\"</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> e<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span> System<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">out</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span> e <span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 例子3</span>\\n<span class=\\"token comment\\">// 当有多个参数时</span>\\nArrays<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"d\\"</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>e1<span class=\\"token punctuation\\">,</span>e2<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span> e1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">compareTo</span><span class=\\"token punctuation\\">(</span>e2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 例子4</span>\\n<span class=\\"token comment\\">// 当Lambda的语句块只有一行时，可以不使用return语句。</span>\\nArrays<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"d\\"</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>e1<span class=\\"token punctuation\\">,</span>e2<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span> e1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">compareTo</span><span class=\\"token punctuation\\">(</span>e2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

const e=JSON.parse(`{"key":"v-dab56e7e","path":"/interview/%E6%96%97%E6%99%BA%E6%96%97%E5%8B%87.html","title":"","lang":"zh-CN","frontmatter":{"description":"一直以来，我都十分推崇把看到的理论知识与实际相结合。 在今天排查服务器的过程中，顺便扩展的了解了一些东西，现在把他总结成一篇文章记录一下。 每一个进程都有一个文件描述符表(通过lsof -p 进程号)，文件描述表是操作系统内核为每个进程维护的数据结构，用于跟踪和管理进程所打开的文件和其他I/O资源。 image-20231010185012508 每个进程在/proc/目录下都有一个以该进程ID为名的文件夹，存放了处于该进程的相关信息。可以通过/proc/进程id/fd找到该进程对应所有的文件描述符。在fd目录下中，每个文件描述符对应一个符号链接，每一个符号链接指向该进程打开的文件、套接字、管道。个人觉得在文件系统中他的呈现就是一个符号链接，可以通过该符号链接获取进程打开的文件或I/O资源的相关信息。 image-20231010202131460 image-20231010202158260 引申一下：/proc/ 目录下存放了关于正在运行的进程和系统状态的虚拟文件系统 包括进程、CPU信息、内存、文件系统、网络、内核等信息 FD具体有哪些类型？ image-20231010183101587 上图是我在服务器上查到的病毒程序，为了彻底把他干掉，同时满足自己的好奇心，我没有直接把干掉。用lsof查看该进程和哪些文件有关，加深对FD的理解。 FD常见的类型如下，我按照在lsof中的输出是否为整数来进行分类： 不为整数 cwd：当前进程的工作目录，表示当前进程的工作目录。它是进程执行命令时所在的目录。 如上图中的/tmp/.X2zz-unix/.rsync/c，知道这个就知道病毒进程的老家在哪了？ rtd：（Root Directory）表示根目录。它是文件系统的最顶层目录。rtd文件描述符指向根目录。 txt（Text File）表示可执行文件或共享库文件。txt文件描述符指向该可执行文件或共享库文件。 一般情况下都是指进程对应的可执行程序本身，如上图中的/tmp/.X2zz-unix/.rsync/c/blitz64 mem（Memory-mapped File）表示内存映射文件。内存映射文件是一种将文件内容映射到进程的虚拟内存空间的机制，允许对文件进行像访问内存一样的操作。mem文件描述符指向内存映射文件。 为整数(从0开始描述) sock（Socket）：表示套接字文件描述符，用于进程之间的通信。 pipe（Pipe）：表示管道文件描述符，用于进程间的无名管道通信。 event（Event）：表示事件文件描述符，用于异步事件通知。 inotify（Inotify）：表示inotify文件描述符，用于监视文件系统事件。 timer（Timer）：表示定时器文件描述符，用于定时器事件。 **补充：**对FD列中的0r、1r、2u进行说明： 0、1、2三个文件描述符是每个运行着的进程都会自动打开的，具有固定含义： 0：代表标准输入，通常是键盘输入。 1：代表标准输出，通常是屏幕输出。 2：代表标准错误输出。 r、u、w等标识了文件描述符对应文件的打开模式。 r：表示文件以r(表示读取)的状态打开的，获取的是读取访问权限，即进程当前正从该文件读取数据。 u：表示文件以u(表示使用)的状态打开的，获取的是读写访问权限。 w：表示文件以w(表示写入)的状态打开的，获取的是写入访问权限，即进程当前正向该文件写入数据。 读取FD描述符对应的文件，这里我以病毒进程为例： 通过lsof -p 进程id找到目标进程打开的文件： image-20231010191142087 通过cat &lt; /proc/3232977/fd/2读取文件内容：","head":[["meta",{"property":"og:url","content":"https://yuejinzhao.cn/interview/%E6%96%97%E6%99%BA%E6%96%97%E5%8B%87.html"}],["meta",{"property":"og:site_name","content":"Honyelchak's Blog"}],["meta",{"property":"og:description","content":"一直以来，我都十分推崇把看到的理论知识与实际相结合。 在今天排查服务器的过程中，顺便扩展的了解了一些东西，现在把他总结成一篇文章记录一下。 每一个进程都有一个文件描述符表(通过lsof -p 进程号)，文件描述表是操作系统内核为每个进程维护的数据结构，用于跟踪和管理进程所打开的文件和其他I/O资源。 image-20231010185012508 每个进程在/proc/目录下都有一个以该进程ID为名的文件夹，存放了处于该进程的相关信息。可以通过/proc/进程id/fd找到该进程对应所有的文件描述符。在fd目录下中，每个文件描述符对应一个符号链接，每一个符号链接指向该进程打开的文件、套接字、管道。个人觉得在文件系统中他的呈现就是一个符号链接，可以通过该符号链接获取进程打开的文件或I/O资源的相关信息。 image-20231010202131460 image-20231010202158260 引申一下：/proc/ 目录下存放了关于正在运行的进程和系统状态的虚拟文件系统 包括进程、CPU信息、内存、文件系统、网络、内核等信息 FD具体有哪些类型？ image-20231010183101587 上图是我在服务器上查到的病毒程序，为了彻底把他干掉，同时满足自己的好奇心，我没有直接把干掉。用lsof查看该进程和哪些文件有关，加深对FD的理解。 FD常见的类型如下，我按照在lsof中的输出是否为整数来进行分类： 不为整数 cwd：当前进程的工作目录，表示当前进程的工作目录。它是进程执行命令时所在的目录。 如上图中的/tmp/.X2zz-unix/.rsync/c，知道这个就知道病毒进程的老家在哪了？ rtd：（Root Directory）表示根目录。它是文件系统的最顶层目录。rtd文件描述符指向根目录。 txt（Text File）表示可执行文件或共享库文件。txt文件描述符指向该可执行文件或共享库文件。 一般情况下都是指进程对应的可执行程序本身，如上图中的/tmp/.X2zz-unix/.rsync/c/blitz64 mem（Memory-mapped File）表示内存映射文件。内存映射文件是一种将文件内容映射到进程的虚拟内存空间的机制，允许对文件进行像访问内存一样的操作。mem文件描述符指向内存映射文件。 为整数(从0开始描述) sock（Socket）：表示套接字文件描述符，用于进程之间的通信。 pipe（Pipe）：表示管道文件描述符，用于进程间的无名管道通信。 event（Event）：表示事件文件描述符，用于异步事件通知。 inotify（Inotify）：表示inotify文件描述符，用于监视文件系统事件。 timer（Timer）：表示定时器文件描述符，用于定时器事件。 **补充：**对FD列中的0r、1r、2u进行说明： 0、1、2三个文件描述符是每个运行着的进程都会自动打开的，具有固定含义： 0：代表标准输入，通常是键盘输入。 1：代表标准输出，通常是屏幕输出。 2：代表标准错误输出。 r、u、w等标识了文件描述符对应文件的打开模式。 r：表示文件以r(表示读取)的状态打开的，获取的是读取访问权限，即进程当前正从该文件读取数据。 u：表示文件以u(表示使用)的状态打开的，获取的是读写访问权限。 w：表示文件以w(表示写入)的状态打开的，获取的是写入访问权限，即进程当前正向该文件写入数据。 读取FD描述符对应的文件，这里我以病毒进程为例： 通过lsof -p 进程id找到目标进程打开的文件： image-20231010191142087 通过cat &lt; /proc/3232977/fd/2读取文件内容："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-02T06:45:03.000Z"}],["meta",{"property":"article:author","content":"Honyelchak"}],["meta",{"property":"article:modified_time","content":"2023-12-02T06:45:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-02T06:45:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Honyelchak\\",\\"url\\":\\"https://yuejinzhao.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1701499503000,"updatedTime":1701499503000,"contributors":[{"name":"honyelchak","email":"554417388@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"interview/斗智斗勇.md","localizedDate":"2023年12月2日","excerpt":"<p>一直以来，我都十分推崇把看到的理论知识与实际相结合。</p>\\n<p>在今天排查服务器的过程中，顺便扩展的了解了一些东西，现在把他总结成一篇文章记录一下。</p>\\n<ol>\\n<li>\\n<p>每一个进程都有一个文件描述符表(通过<code>lsof -p 进程号</code>)，文件描述表是操作系统内核为每个进程维护的数据结构，用于跟踪和管理进程<code>所打开的文件和其他I/O资源</code>。</p>\\n<ol>\\n<li><figcaption>image-20231010185012508</figcaption></li>\\n</ol>\\n</li>\\n<li>\\n<p>每个进程在<code>/proc/</code>目录下都有一个以该<code>进程ID</code>为名的文件夹，存放了处于该进程的相关信息。可以通过<code>/proc/进程id/fd</code>找到该进程对应所有的文件描述符。在<code>fd</code>目录下中，每个文件描述符对应一个符号链接，每一个符号链接指向该进程打开的文件、套接字、管道。个人觉得在文件系统中他的呈现就是一个符号链接，可以通过该符号链接获取进程打开的文件或<code>I/O</code>资源的相关信息。</p>\\n<ol>\\n<li><figcaption>image-20231010202131460</figcaption></li>\\n<li><figcaption>image-20231010202158260</figcaption></li>\\n</ol>\\n<blockquote>\\n<p>引申一下：<code>/proc/</code> 目录下存放了关于正在运行的进程和系统状态的虚拟文件系统</p>\\n<ol>\\n<li>包括进程、CPU信息、内存、文件系统、网络、内核等信息</li>\\n</ol>\\n</blockquote>\\n</li>\\n<li>\\n<p>FD具体有哪些类型？</p>\\n<ol>\\n<li>\\n<figure><figcaption>image-20231010183101587</figcaption></figure>\\n</li>\\n<li>\\n<p>上图是我在服务器上查到的病毒程序，为了彻底把他干掉，同时满足自己的好奇心，我没有直接把干掉。用<code>lsof</code>查看该进程和哪些文件有关，加深对FD的理解。</p>\\n<blockquote>\\n<p><strong>FD常见的类型如下，我按照在lsof中的输出是否为整数来进行分类：</strong></p>\\n<ol>\\n<li>\\n<p>不为整数</p>\\n<ul>\\n<li>\\n<p><code>cwd</code>：当前进程的工作目录，表示当前进程的工作目录。它是进程执行命令时所在的目录。</p>\\n<ul>\\n<li>如上图中的<code>/tmp/.X2zz-unix/.rsync/c</code>，知道这个就知道病毒进程的老家在哪了？</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>rtd</code>：（Root Directory）表示根目录。它是文件系统的最顶层目录。rtd文件描述符指向根目录。</p>\\n<ul>\\n<li><code>txt</code>（Text File）表示可执行文件或共享库文件。txt文件描述符指向该可执行文件或共享库文件。\\n<ul>\\n<li>一般情况下都是指<strong>进程对应的可执行程序本身</strong>，如上图中的<code>/tmp/.X2zz-unix/.rsync/c/blitz64</code></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>mem</code>（Memory-mapped File）表示内存映射文件。内存映射文件是一种将文件内容映射到进程的虚拟内存空间的机制，允许对文件进行像访问内存一样的操作。mem文件描述符指向内存映射文件。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>为整数(从0开始描述)</p>\\n<ul>\\n<li><code>sock</code>（Socket）：表示套接字文件描述符，用于进程之间的通信。</li>\\n<li><code>pipe</code>（Pipe）：表示管道文件描述符，用于进程间的无名管道通信。</li>\\n<li><code>event</code>（Event）：表示事件文件描述符，用于异步事件通知。</li>\\n<li><code>inotify</code>（Inotify）：表示inotify文件描述符，用于监视文件系统事件。</li>\\n<li><code>timer</code>（Timer）：表示定时器文件描述符，用于定时器事件。</li>\\n</ul>\\n</li>\\n</ol>\\n<p>**补充：**对FD列中的<code>0r</code>、<code>1r</code>、<code>2u</code>进行说明：</p>\\n<ol>\\n<li><code>0</code>、<code>1</code>、<code>2</code>三个文件描述符是每个运行着的进程都会自动打开的，具有固定含义：\\n<ol>\\n<li><code>0</code>：代表标准输入，通常是键盘输入。</li>\\n<li><code>1</code>：代表标准输出，通常是屏幕输出。</li>\\n<li><code>2</code>：代表标准错误输出。</li>\\n</ol>\\n</li>\\n<li><code>r</code>、<code>u</code>、<code>w</code>等标识了文件描述符对应文件的打开模式。\\n<ol>\\n<li><code>r</code>：表示文件以<code>r</code>(表示读取)的状态打开的，获取的是读取访问权限，即进程当前正从该文件读取数据。</li>\\n<li><code>u</code>：表示文件以<code>u</code>(表示使用)的状态打开的，获取的是读写访问权限。</li>\\n<li><code>w</code>：表示文件以<code>w</code>(表示写入)的状态打开的，获取的是写入访问权限，即进程当前正向该文件写入数据。</li>\\n</ol>\\n</li>\\n</ol>\\n</blockquote>\\n</li>\\n</ol>\\n</li>\\n<li>\\n<p>读取<code>FD</code>描述符对应的文件，这里我以病毒进程为例：</p>\\n<ol>\\n<li>\\n<p>通过<code>lsof -p 进程id</code>找到目标进程打开的文件：</p>\\n<figure><figcaption>image-20231010191142087</figcaption></figure>\\n</li>\\n<li>\\n<p>通过<code>cat &lt; /proc/3232977/fd/2</code>读取文件内容：</p>\\n</li>\\n</ol>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};

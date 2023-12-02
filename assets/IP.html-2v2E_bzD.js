import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as e,f as t}from"./app-_dQeDwys.js";const a="/assets/31-Bk7sqBNp.jpg",p="/assets/5-N2jwVdp4.jpg",n="/assets/7-sxUplKHY.jpg",r="/assets/8-o7rhIjbR.jpg",c="/assets/12-mWFajb92.jpg",g="/assets/11-JB5zkSmH.jpg",s="/assets/13-FNcJM7hx.jpg",l="/assets/14-hyDYeScT.jpg",d="/assets/15-Fry3i-zW.jpg",P="/assets/16-vgfubYE3.jpg",I="/assets/17-REA4pqeT.jpg",u="/assets/18-1b430lj8.jpg",h="/assets/19--s52hZRj.jpg",f="/assets/20-eq5axO9I.jpg",C="/assets/21-jdnfqVLW.jpg",m="/assets/22-ntGL7o7o.jpg",b="/assets/23-apeIaq_v.jpg",D="/assets/25-_ChWz_Yk.jpg",A="/assets/32-W_aYsF4b.jpg",x="/assets/33-ZSROGgZp.jpg",T="/assets/5-1691541463605-1-aeTjUQwT.jpg",M="/assets/6-SoXTmh10.jpg",_="/assets/13-1691542240538-11-hitocv0j.jpg",N="/assets/14-1691542348328-14-rLIVfl-I.jpg",R="/assets/16-1691542993046-17-PGfnT2nf.jpg",q="/assets/17-3YVFSv0m.png",H={},k=t('<h1 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> IP</h1><p>IP在TCP/IP参考模型中处于第三层，也就是<code> 网络层</code>。</p><blockquote><p>网络层与数据链路层的关系与区别：</p><ul><li>网络层(IP)：实现主机与主机之间的通信，也叫点对点通信。负责在<code>没有直连</code>的网络之间的进行通信传输。</li><li>数据链路层(MAC)：实现<code>直连</code>的两个设备之间的通信。</li></ul></blockquote><figure><img src="'+a+'" alt="IPv4 首部与 IPv6 首部的差异" tabindex="0" loading="lazy"><figcaption>IPv4 首部与 IPv6 首部的差异</figcaption></figure><h2 id="ip地址基础知识" tabindex="-1"><a class="header-anchor" href="#ip地址基础知识" aria-hidden="true">#</a> IP地址基础知识</h2><p>在TCP/IP网络通信时，为了保证能正常通信，每个设备都需要配置正确的IP地址，否则无法实现正常的通信。</p><ul><li><p>IPv4地址由<code>32</code>位二进制来表示</p></li><li><p>IPv6地址由<code>128</code>位二进制来表示</p></li></ul><blockquote><ul><li><p>IPv4：采用了<code>点分十进制</code>的标记方式，将32位IP地址以每8位为一组，共分为4组，每组以<code>.</code>隔开，再将每组转换成十进制。</p></li><li><p>IPv6：将128位IP地址以每 16 位作为一组，每组用冒号 「:」 隔开。如果出现连续的 0 时还可以将这些 0 省略，并用两个冒号 「::」隔开。但是，一个 IP 地址中只允许出现一次两个连续的冒号。</p></li></ul></blockquote><p>那么，IP 地址最大值也就是</p><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>也就说，最大允许 43 亿台计算机连接到网络。</p><p>实际上，IP 地址并不是根据主机台数来配置的，而是以网卡。像服务器、路由器等设备都是有 2 个以上的网卡，也就是它们会有 2 个以上的 IP 地址。</p><h2 id="两种分类方式" tabindex="-1"><a class="header-anchor" href="#两种分类方式" aria-hidden="true">#</a> 两种分类方式</h2><h3 id="ip-地址的分类" tabindex="-1"><a class="header-anchor" href="#ip-地址的分类" aria-hidden="true">#</a> IP 地址的分类</h3><p>互联网诞生之初，IP 地址分类成了 5 种类型，分别是 A 类、B 类、C 类、D 类、E 类。</p><figure><img src="'+n+'" alt="IP 地址分类" tabindex="0" loading="lazy"><figcaption>IP 地址分类</figcaption></figure><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>每一类下边的最大主机数是如何计算的？</p><ul><li>拿A类举例，<code>最大主机数 = 2^24 - 2 = 16777214</code></li><li>减去了两个比较特殊的IP <ul><li>主机号全为1：指定某个网络下的所有主机，用于广播</li><li>主机号全为0：指定某个网络</li></ul></li></ul></blockquote><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>而D类和E类地址都是没有主机号的，所以不可用于主机IP。</p><ul><li>D类常用于多播，其前四位是 <code>1110</code> 就表示是多播地址，而剩下的 28 位是多播的组编号。 <ul><li>从 224.0.0.0 ~ 239.255.255.255 都是多播的可用范围，其划分为以下三类： <ul><li>224.0.0.0 ~ 224.0.0.255 为预留的组播地址，只能在局域网中，路由器是不会进行转发的。</li><li>224.0.1.0 ~ 238.255.255.255 为用户可用的组播地址，可以用于 Internet 上。</li><li>239.0.0.0 ~ 239.255.255.255 为本地管理组播地址，可供内部网在内部使用，仅在特定的本地范围内有效。</li></ul></li></ul></li><li>E类是预留的分类，暂时未使用。</li></ul><h4 id="广播地址用于干什么" tabindex="-1"><a class="header-anchor" href="#广播地址用于干什么" aria-hidden="true">#</a> 广播地址用于干什么？</h4><ul><li>用于在<code>同一个链路中相互连接的主机之间发送数据包</code>。</li><li>主机号全为1。</li></ul><p>广播地址可以分为本地广播和直接广播两种。</p><ul><li><strong>在本网络内广播的叫做本地广播</strong>。例如网络地址为 192.168.0.0/24 的情况下，广播地址是 192.168.0.255 。因为这个广播地址的 IP 包会被路由器屏蔽，所以不会到达 192.168.0.0/24 以外的其他链路上。</li><li><strong>在不同网络之间的广播叫做直接广播</strong>。例如网络地址为 192.168.0.0/24 的主机向 192.168.1.255/24 的目标地址发送 IP 包。收到这个包的路由器，将数据转发给 192.168.1.0/24，从而使得所有 192.168.1.1~192.168.1.254 的主机都能收到这个包（由于直接广播有一定的安全问题，多数情况下会在路由器上设置为不转发。） 。</li></ul><figure><img src="'+g+'" alt="本地广播与直接广播" tabindex="0" loading="lazy"><figcaption>本地广播与直接广播</figcaption></figure><h4 id="多播地址的作用" tabindex="-1"><a class="header-anchor" href="#多播地址的作用" aria-hidden="true">#</a> 多播地址的作用</h4><p>多播用于<strong>将包发送给特定组内的所有主机。</strong></p><p>由于广播无法穿透路由，若想给其他网段发送同样的包，就可以使用可以穿透路由的多播。</p><figure><img src="'+s+'" alt="单播、广播、多播通信" tabindex="0" loading="lazy"><figcaption>单播、广播、多播通信</figcaption></figure><h4 id="ip分类的优点" tabindex="-1"><a class="header-anchor" href="#ip分类的优点" aria-hidden="true">#</a> IP分类的优点</h4><p>不管是路由器还是主机解析到一个 IP 地址时候，我们判断<code>其 IP 地址的首位是否为 0，为 0 则为 A 类地址</code>，那么就能很快的找出网络地址和主机地址。</p><figure><img src="'+l+'" alt="IP 分类判断" tabindex="0" loading="lazy"><figcaption>IP 分类判断</figcaption></figure><h4 id="ip分类的缺点" tabindex="-1"><a class="header-anchor" href="#ip分类的缺点" aria-hidden="true">#</a> IP分类的缺点</h4><p><em>缺点一</em></p><p><strong>同一网络下没有地址层次</strong>，比如一个公司里用了 B 类地址，但是可能需要根据生产环境、测试环境、开发环境来划分地址层次，而这种 IP 分类是没有地址层次划分的功能，所以这就<strong>缺少地址的灵活性</strong>。</p><p><em>缺点二</em></p><p>A、B、C类有个尴尬处境，就是<strong>不能很好的与现实网络匹配</strong>。</p><ul><li>C 类地址能包含的最大主机数量实在太少了，只有 254 个，估计一个网吧都不够用。</li><li>而 B 类地址能包含的最大主机数量又太多了，6 万多台机器放在一个网络下面，一般的企业基本达不到这个规模，闲着的地址就是浪费。</li></ul><p>这两个缺点，都可以在 <code>CIDR</code> 无分类地址解决。</p><h3 id="无分类地址cidr" tabindex="-1"><a class="header-anchor" href="#无分类地址cidr" aria-hidden="true">#</a> 无分类地址CIDR</h3><p>这种方式不再有分类地址的概念，32 比特的 IP 地址被划分为两部分，前面是<strong>网络号</strong>，后面是<strong>主机号</strong>。</p><blockquote><p>怎么划分网络号和主机号的呢？</p></blockquote><p>表示形式 <code>a.b.c.d/x</code>，其中 <code>/x</code> 表示前 x 位属于<strong>网络号</strong>， x 的范围是 <code>0 ~ 32</code>，这就使得 IP 地址更加具有灵活性。</p><p>比如 10.100.122.2/24，这种地址表示形式就是 CIDR，/24 表示前 24 位是网络号，剩余的 8 位是主机号。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>还有另一种划分网络号与主机号形式，那就是<strong>子网掩码</strong>，掩码的意思就是掩盖掉主机号，剩余的就是网络号。</p><figure><img src="'+P+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>为什么要分离网络号和主机号？</p></blockquote><p>因为两台计算机要通讯，首先要判断是否处于同一个广播域内，即网络地址是否相同。如果网络地址相同，表明接受方在本网络上，那么可以把数据包直接发送到目标主机。</p><p>路由器寻址工作中，也就是通过这样的方式来找到对应的网络号的，进而把数据包转发给对应的网络内。</p><figure><img src="'+I+'" alt="IP地址的网络号" tabindex="0" loading="lazy"><figcaption>IP地址的网络号</figcaption></figure><blockquote><p>怎么进行子网划分？</p></blockquote><p>在上面我们知道可以通过子网掩码划分出网络号和主机号，那实际上子网掩码还有一个作用，那就是<strong>划分子网</strong>。</p><p><strong>子网划分实际上是将主机地址分为两个部分：子网网络地址和子网主机地址</strong>。形式如下：</p><figure><img src="'+u+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>未做子网划分的 ip 地址：网络地址＋主机地址</li><li>做子网划分后的 ip 地址：网络地址＋（子网网络地址＋子网主机地址）</li></ul><p>假设对 C 类地址进行子网划分，网络地址 192.168.1.0，使用子网掩码 255.255.255.192 对其进行子网划分。</p><p>C 类地址中前 24 位是网络号，最后 8 位是主机号，根据子网掩码可知<strong>从 8 位主机号中借用 2 位作为子网号</strong>。</p><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由于子网网络地址被划分成 2 位，那么子网地址就有 4 个，分别是 00、01、10、11，具体划分如下图：</p><figure><img src="'+f+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>划分后的 4 个子网如下表格：</p><figure><img src="'+C+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="两种分类的区别" tabindex="-1"><a class="header-anchor" href="#两种分类的区别" aria-hidden="true">#</a> 两种分类的区别</h3><p>IP分类（Classful IP addressing）和无分类CIDR（Classless Inter-Domain Routing）是两种不同的方法来管理和分配IP地址，尽管它们在某些方面可以结合使用。</p><ol><li><strong>IP分类（Classful IP addressing）</strong>： IP地址最初被分为五个主要类别：A、B、C、D和E类。每个类别有不同的地址范围和默认子网掩码。这种方法在早期的互联网中使用，但它浪费了大量IP地址并且难以管理。</li><li><strong>无分类CIDR（Classless Inter-Domain Routing）</strong>： 为了更有效地使用IP地址和更灵活地分配网络，CIDR被引入。<code>CIDR允许将IP地址划分为更小的子网，使网络管理员能够更精细地分配IP地址，并且不受固定的类别限制。</code>CIDR引入了CIDR表示法，例如，&quot;192.168.1.0/24&quot;表示一个以192.168.1.0开头的24位子网。</li></ol><p><strong>结合使用</strong>： 尽管IP分类和无分类CIDR是不同的概念，但它们可以结合使用。在网络规划中，你可能会根据你的需求选择不同的子网划分，使用CIDR表示法进行配置。这意味着你可以根据实际情况，灵活地定义子网大小，而不受传统的IP分类限制。</p><p><strong>现代实践</strong>： 在现代网络中，CIDR已成为主流方法。因为互联网的持续增长和IP地址的稀缺性，无分类CIDR的灵活性和效率更适合满足各种网络规模的需求。IP分类方法已经过时，而CIDR被广泛使用。</p><p>因此，你的感觉是正确的：IP分类和无分类CIDR在一定程度上结合使用，但现代网络主要采用无分类CIDR来更有效地管理IP地址。</p><h2 id="公有-ip-地址与私有-ip-地址" tabindex="-1"><a class="header-anchor" href="#公有-ip-地址与私有-ip-地址" aria-hidden="true">#</a> 公有 IP 地址与私有 IP 地址</h2><p>在 A、B、C 分类地址，实际上有分公有 IP 地址和私有 IP 地址。</p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>平时我们办公室、家里、学校用的 IP 地址，一般都是私有 IP 地址。因为这些地址允许组织内部的 IT 人员自己管理、自己分配，而且可以重复。因此，你学校的某个私有 IP 地址和我学校的可以是一样的。</p><figure><img src="'+b+'" alt="公有 IP 地址与私有 IP 地址" tabindex="0" loading="lazy"><figcaption>公有 IP 地址与私有 IP 地址</figcaption></figure><h2 id="ip-地址与路由控制" tabindex="-1"><a class="header-anchor" href="#ip-地址与路由控制" aria-hidden="true">#</a> IP 地址与路由控制</h2><p>IP地址的<strong>网络地址</strong>部分是<code>用于进行路由控制</code>。</p><ul><li>路由控制表中记录着网络地址与下一跳的地址(下一步应该发送至路由器的地址)。</li><li>在主机和路由器上<strong>都会有各自的路由器控制表</strong>。</li></ul><p>在发送 IP 包时，首先要确定 IP 包首部中的目标地址，再从路由控制表中找到与该地址具有<strong>相同网络地址</strong>的记录，根据该记录将 IP 包转发给相应的下一个路由器。如果路由控制表中存在多条相同网络地址的记录，就<code>选择相同位数最多的网络地址</code>，也就是最长匹配。</p><p>下面以下图的网络链路作为例子说明：</p><figure><img src="'+D+'" alt="IP 地址与路由控制" tabindex="0" loading="lazy"><figcaption>IP 地址与路由控制</figcaption></figure><ol><li>主机 A 要发送一个 IP 包，其源地址是 <code>10.1.1.30</code> 和目标地址是 <code>10.1.2.10</code>，由于没有在主机 A 的路由表找到与目标地址 <code>10.1.2.10</code> 相同的网络地址，于是包被转发到默认路由（路由器 <code>1</code> ）</li><li>路由器 <code>1</code> 收到 IP 包后，也在路由器 <code>1</code> 的路由表匹配与目标地址相同的网络地址记录，发现匹配到了，于是就把 IP 数据包转发到了 <code>10.1.0.2</code> 这台路由器 <code>2</code></li><li>路由器 <code>2</code> 收到后，同样对比自身的路由表，发现匹配到了，于是把 IP 包从路由器 <code>2</code> 的 <code>10.1.2.1</code> 这个接口出去，最终经过交换机把 IP 数据包转发到了目标主机</li></ol><blockquote><p>环回地址是不会流向网络</p></blockquote><p>环回地址是在同一台计算机上的程序之间进行网络通信时所使用的一个默认地址。</p><p>计算机使用一个特殊的 IP 地址 <strong>127.0.0.1 作为环回地址</strong>。与该地址具有相同意义的是一个叫做 <code>localhost</code> 的主机名。使用这个 IP 或主机名时，数据包不会流向网络。</p><p>换句话说，环回地址不会<strong>流向路由器</strong>。</p><h2 id="ip-分片与重组" tabindex="-1"><a class="header-anchor" href="#ip-分片与重组" aria-hidden="true">#</a> IP 分片与重组</h2><p>每种数据链路的最大传输单元 <code>MTU</code> 都是不相同的，如 FDDI 数据链路 MTU 4352、以太网的 MTU 是 1500 字节等。</p><p>每种数据链路的 MTU 之所以不同，是因为每个不同类型的数据链路的使用目的不同。使用目的不同，可承载的 MTU 也就不同。</p><p>其中，我们最常见数据链路是以太网，它的 MTU 是 <code>1500</code> 字节。</p><p><strong>那么当 IP 数据包的大小大于 MTU 时， IP 数据包就会被分片。</strong></p><p>经过分片之后的 IP 数据报在被重组的时候，<code>只能由目标主机进行，路由器是不会进行重组的</code>。</p><p>假设发送方发送一个 4000 字节的大数据报，若要传输在以太网链路，则需要把数据报分片成 3 个小数据报进行传输，再交由接收方重组成大数据报。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/26.jpg" alt="分片与重组" tabindex="0" loading="lazy"><figcaption>分片与重组</figcaption></figure><p>在分片传输中，一旦某个分片丢失，则会造成整个 IP 数据报作废，所以 TCP 引入了 <code>MSS</code> 也就是在 TCP 层进行分片不由 IP 层分片，那么对于 UDP 我们尽量不要发送一个大于 <code>MTU</code> 的数据报文。</p><h1 id="ip协议相关技术" tabindex="-1"><a class="header-anchor" href="#ip协议相关技术" aria-hidden="true">#</a> IP协议相关技术</h1><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><p>DNS 中的域名都是用<strong>句点</strong>来分隔的，比如 <code>www.server.com</code>，这里的句点代表了不同层次之间的<strong>界限</strong>。</p><p>在域名中，<strong>越靠右</strong>的位置表示其层级<strong>越高</strong>。</p><blockquote><p>毕竟域名是外国人发明，所以思维和中国人相反，比如说一个城市地点的时候，外国喜欢从小到大的方式顺序说起（如 XX 街道 XX 区 XX 市 XX 省），而中国则喜欢从大到小的顺序（如 XX 省 XX 市 XX 区 XX 街道）。</p></blockquote><p>根域是在最顶层，它的下一层就是 com 顶级域，再下面是 server.com。</p><p>所以域名的层级关系类似一个树状结构：</p><ul><li>根 DNS 服务器</li><li>顶级域 DNS 服务器（com）</li><li>权威 DNS 服务器（server.com）</li></ul><figure><img src="'+A+'" alt="DNS 树状结构" tabindex="0" loading="lazy"><figcaption>DNS 树状结构</figcaption></figure><blockquote><p>域名解析的工作流程</p></blockquote><p>浏览器首先看一下自己的缓存里有没有，如果没有就向操作系统的缓存要，还没有就检查本机域名解析文件 <code>hosts</code>，如果还是没有，就会 DNS 服务器进行查询，查询的过程如下：</p><ol><li>客户端首先会发出一个 DNS 请求，问 www.server.com 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。</li><li>本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 www.server.com，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：<code>“老大， 能告诉我 www.server.com 的 IP 地址吗？”</code> 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。</li><li>根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“www.server.com 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”</li><li>本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 www.server.com 的 IP 地址吗？”</li><li>顶级域名服务器说：“我给你负责 www.server.com 区域的权威 DNS 服务器的地址，你去问它应该能问到”。</li><li>本地 DNS 于是转向问权威 DNS 服务器：“老三，www.server.com对应的IP是啥呀？” server.com 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。</li><li>权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。</li><li>本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。</li></ol><figure><img src="'+x+'" alt="域名解析的工作流程" tabindex="0" loading="lazy"><figcaption>域名解析的工作流程</figcaption></figure><h2 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> ARP</h2><p>在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。</p><p>由于主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 <strong>ARP 协议</strong>，求得下一跳的 MAC 地址。</p><blockquote><p>那么 ARP 又是如何知道对方 MAC 地址的呢？</p></blockquote><p>简单地说，ARP 是借助 <strong>ARP 请求与 ARP 响应</strong>两种类型的包确定 MAC 地址的。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/34.jpg" alt="ARP 广播" tabindex="0" loading="lazy"><figcaption>ARP 广播</figcaption></figure><ul><li>主机会通过<strong>广播发送 ARP 请求</strong>，这个包中包含了想要知道的 MAC 地址的主机 IP 地址。</li><li>当同个链路中的所有设备收到 ARP 请求时，会去拆开 ARP 请求包里的内容，如果 ARP 请求包中的目标 IP 地址与自己的 IP 地址一致，那么这个设备就将自己的 MAC 地址塞入 <strong>ARP 响应包</strong>返回给主机。</li><li>操作系统通常会把第一次通过 ARP 获取的 MAC 地址缓存起来，以便下次直接从缓存中找到对应 IP 地址的 MAC 地址。 <ul><li>不过，MAC 地址的缓存是有一定期限的，超过这个期限，缓存的内容将被清除。</li></ul></li></ul><p>**Ps：**这个地方再补充几点：</p><ol><li>ARP请求包括<code>源IP地址、源MAC地址、目标IP地址、目标MAC地址</code>，一般目标MAC地址为<code>FF:FF:FF:FF:FF:FF</code>，通常只有在目标MAC地址是广播地址（FF:FF:FF:FF:FF:FF）时，所有设备才会接收到数据包。</li><li>普通的请求中，为什么能够保证A到B的数据包，不会被C看到，是因为有交换机(网桥)的作用，帮助数据进行流转。</li></ol><blockquote><p>RARP 协议你知道是什么吗？</p></blockquote><p>ARP 协议是已知 IP 地址求 MAC 地址，那 RARP 协议正好相反，它是<strong>已知 MAC 地址求 IP 地址</strong>。例如将打印机服务器等小型嵌入式设备接入到网络时就经常会用得到。</p><p>通常这需要架设一台 <code>RARP</code> 服务器，在这个服务器上注册设备的 MAC 地址及其 IP 地址。然后再将这个设备接入到网络，接着：</p><ul><li>该设备会发送一条「我的 MAC 地址是XXXX，请告诉我，我的IP地址应该是什么」的请求信息。</li><li>RARP 服务器接到这个消息后返回「MAC地址为 XXXX 的设备，IP地址为 XXXX」的信息给这个设备。</li></ul><p>最后，设备就根据从 RARP 服务器所收到的应答信息设置自己的 IP 地址。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/35.jpg" alt="RARP" tabindex="0" loading="lazy"><figcaption>RARP</figcaption></figure><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h3><p>DHCP 在生活中我们是很常见的了，电脑通常都是<code>通过 DHCP 动态获取 IP 地址，大大省去了配 IP 信息繁琐的过程</code>。</p><p>过程如下：</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/36.jpg" alt="DHCP 工作流程" tabindex="0" loading="lazy"><figcaption>DHCP 工作流程</figcaption></figure><p>先说明一点，DHCP 客户端进程监听的是 68 端口号，DHCP 服务端进程监听的是 67 端口号。</p><p>这 4 个步骤：</p><ul><li>客户端首先发起 <strong>DHCP 发现报文（DHCP DISCOVER）</strong> 的 IP 数据报，由于客户端没有 IP 地址，也不知道 DHCP 服务器的地址，所以使用的是 <code>UDP **广播**通信</code>，其使用的广播目的地址是 255.255.255.255（端口 67） 并且使用 0.0.0.0（端口 68） 作为源 IP 地址。DHCP 客户端将该 IP 数据报传递给链路层，链路层然后将帧广播到所有的网络中设备。</li><li>DHCP 服务器收到 DHCP 发现报文时，用 <strong>DHCP 提供报文（DHCP OFFER）</strong> 向客户端做出响应。该报文仍然使用 IP 广播地址 255.255.255.255，该报文信息携带服务器提供可租约的 IP 地址、子网掩码、默认网关、DNS 服务器以及 <strong>IP 地址租用期</strong>。</li><li>客户端收到一个或多个服务器的 DHCP 提供报文后，从中选择一个服务器，并向选中的服务器发送 <strong>DHCP 请求报文（DHCP REQUEST</strong>进行响应，回显配置的参数。</li><li>最后，服务端用 <strong>DHCP ACK 报文</strong>对 DHCP 请求报文进行响应，应答所要求的参数。</li></ul><p>一旦客户端收到 DHCP ACK 后，交互便完成了，并且客户端能够在租用期内使用 DHCP 服务器分配的 IP 地址。</p><p>如果租约的 DHCP IP 地址快期后，客户端会向服务器发送 DHCP 请求报文：</p><ul><li>服务器如果同意继续租用，则用 DHCP ACK 报文进行应答，客户端就会延长租期。</li><li>服务器如果不同意继续租用，则用 DHCP NACK 报文，客户端就要停止使用租约的 IP 地址。</li></ul><p>可以发现，DHCP 交互中，<strong>全程都是使用 UDP 广播通信</strong>。</p><blockquote><p>咦，用的是广播，那如果 DHCP 服务器和客户端不是在同一个局域网内，路由器又不会转发广播包，那不是每个网络都要配一个 DHCP 服务器？</p></blockquote><p>所以，为了解决这一问题，就出现了 <strong>DHCP 中继代理</strong>。有了 DHCP 中继代理以后，<strong>对不同网段的 IP 地址分配也可以由一个 DHCP 服务器统一进行管理。</strong></p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/37.jpg" alt=" DHCP 中继代理" tabindex="0" loading="lazy"><figcaption> DHCP 中继代理</figcaption></figure><ul><li>DHCP 客户端会向 DHCP 中继代理发送 DHCP 请求包，而 DHCP 中继代理在收到这个广播包以后，再以<strong>单播</strong>的形式发给 DHCP 服务器。</li><li>服务器端收到该包以后再向 DHCP 中继代理返回应答，并由 DHCP 中继代理将此包广播给 DHCP 客户端 。</li></ul><p>因此，DHCP 服务器即使不在同一个链路上也可以实现统一分配和管理IP地址。</p><h3 id="nat" tabindex="-1"><a class="header-anchor" href="#nat" aria-hidden="true">#</a> NAT</h3><p>IPv4 的地址是非常紧缺的，互联网的用户增速是非常惊人的，所以 IPv4 地址依然有被耗尽的危险。</p><p>于是，提出了一种<strong>网络地址转换 NAT</strong> 的方法，再次缓解了 IPv4 地址耗尽的问题。</p><p>简单的来说 NAT 就是同个公司、家庭、教室内的主机对外部通信时，<code>把私有 IP 地址转换成公有 IP 地址</code>。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/38.jpg" alt="NAT" tabindex="0" loading="lazy"><figcaption>NAT</figcaption></figure><blockquote><p>那不是 N 个私有 IP 地址，你就要 N 个公有 IP 地址？这怎么就缓解了 IPv4 地址耗尽的问题？这不瞎扯吗？</p></blockquote><p>确实是，普通的 NAT 转换没什么意义。</p><p>由于绝大多数的网络应用都是使用传输层协议 TCP 或 UDP 来传输数据的。</p><p>因此，可以把 IP 地址 + 端口号一起进行转换。</p><p>这样，就用一个全球 IP 地址就可以了，这种转换技术就叫<strong>网络地址与端口转换 NAPT。</strong></p><p>很抽象？来，看下面的图解就能瞬间明白了。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/IP/39.jpg" alt="NAPT" tabindex="0" loading="lazy"><figcaption>NAPT</figcaption></figure><p>图中有两个客户端 192.168.1.10 和 192.168.1.11 同时与服务器 183.232.231.172 进行通信，并且这两个客户端的本地端口都是 1025。</p><p>此时，<strong>两个私有 IP 地址都转换 IP 地址为公有地址 120.229.175.121，但是以不同的端口号作为区分。</strong></p><p>于是，生成一个 NAPT 路由器的转换表，就可以正确地转换地址跟端口的组合，令客户端 A、B 能同时与服务器之间进行通信。</p><p>这种转换表在 NAT 路由器上自动生成。例如，<strong>在 TCP 的情况下，建立 TCP 连接首次握手时的 SYN 包一经发出，就会生成这个表。而后又随着收到关闭连接时发出 FIN 包的确认应答从表中被删除。</strong></p><blockquote><p>NAT 那么牛逼，难道就没缺点了吗？</p></blockquote><p>当然有缺陷，肯定没有十全十美的方案。</p><p>由于 NAT/NAPT 都依赖于自己的转换表，因此会有以下的问题：</p><ul><li>外部无法主动与 NAT 内部服务器建立连接，因为 NAPT 转换表没有转换记录。</li><li>转换表的生成与转换操作都会产生性能开销。</li><li>通信过程中，如果 NAT 路由器重启了，所有的 TCP 连接都将被重置。</li></ul><blockquote><p>如何解决 NAT 潜在的问题呢？</p></blockquote><p>解决的方法主要有两种方法。</p><p><em>第一种就是改用 IPv6</em></p><p>IPv6 可用范围非常大，以至于每台设备都可以配置一个公有 IP 地址，就不搞那么多花里胡哨的地址转换了，但是 IPv6 普及速度还需要一些时间。</p><p><em>第二种 NAT 穿透技术</em></p><p>NAT 穿越技术拥有这样的功能，它能够让网络应用程序主动发现自己位于 NAT 设备之后，并且会主动获得 NAT 设备的公有 IP，并为自己建立端口映射条目，注意这些都是 NAT设备后的应用程序自动完成的。</p><p>也就是说，在 NAT 穿透技术中，NAT设备后的应用程序处于主动地位，它已经明确地知道 NAT 设备要修改它外发的数据包，于是它主动配合 NAT 设备的操作，主动地建立好映射，这样就不像以前由 NAT 设备来建立映射了。</p><p>说人话，就是客户端主动从 NAT 设备获取公有 IP 地址，然后自己建立端口映射条目，然后用这个条目对外通信，就不需要 NAT 设备来进行转换了。</p><h2 id="icmp-网络层" tabindex="-1"><a class="header-anchor" href="#icmp-网络层" aria-hidden="true">#</a> ICMP(网络层)</h2><p>全名<code>互联网控制报文协议</code>，网络包在复杂的网络传输环境里，常常会遇到各种问题。当遇到问题的时候，总不能死的不明不白，没头没脑的作风不是计算机网络的风格。所以需要传出消息，报告遇到了什么问题，这样才可以调整传输策略，以此来控制整个局面。</p><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3><p><code>ICMP</code> 主要的功能包括：<strong>确认 IP 包是否成功送达目标地址、报告发送过程中 IP 包被废弃的原因和改善网络设置等。</strong></p><p>在 <code>IP</code> 通信中如果某个 <code>IP</code> 包因为某种原因未能达到目标地址，那么这个具体的原因将<strong>由 ICMP 负责通知</strong>。</p><h3 id="icmp包格式" tabindex="-1"><a class="header-anchor" href="#icmp包格式" aria-hidden="true">#</a> ICMP包格式</h3><p>ICMP 报文是<code>封装在 IP 包里面</code>，它工作在网络层，是 IP 协议的助手。</p><figure><img src="'+T+'" alt="ICMP 报文" tabindex="0" loading="lazy"><figcaption>ICMP 报文</figcaption></figure><p>ICMP包头的类型字段，大致可以分为两大类：</p><ul><li>一类是用于诊断的查询消息，也就是「<strong>查询报文类型</strong>」</li><li>另一类是通知出错原因的错误消息，也就是「<strong>差错报文类型</strong>」</li></ul><figure><img src="'+M+'" alt="常见的 ICMP 类型" tabindex="0" loading="lazy"><figcaption>常见的 ICMP 类型</figcaption></figure><blockquote><p>针对TCP协议，如果端口不可达，是回复 RST 报文 针对 UDP协议，如果端口不可达，是回复 ICMP 报文 这个是对的吗？ 请帮我详细梳理一下 TCP、UDP、ICMP三者的关系？</p></blockquote><p>你的理解是正确的。</p><p>TCP和UDP都是应用层(上层)协议,用于应用之间的数据传输。TCP提供可靠传输,UDP提供非连接式传输。</p><p>而ICMP是网络层(下层)协议,用于管理IP网络,用于报告IP组件的故障、错误和其他信息。</p><p>针对TCP协议:</p><ul><li>TCP连接建立时,需要3次握手。如果对方端口不可达,会发送一个RST(Reset)报文来重置TCP连接。</li><li>TCP连接释放需要4次挥手。</li></ul><p>针对UDP协议:</p><ul><li>UDP是无连接的,不需要建立连接。发送方直接就可以发送UDP数据报文。</li><li>如果对方的UDP端口不可达,会收到来自目标IP地址的ICMP目的不可达(destination unreachable) 报文。</li></ul><p>总的来说:</p><ul><li>TCP使用RST报文来通知连接建立失败。</li><li>UDP使用ICMP目的不可达报文来通知。</li><li>这二者的差别来自于TCP有连接和状态,而UDP没有连接和状态。</li></ul><p>所以你的理解是正确的。 简单总结:</p><p>TCP与UDP:</p><ul><li>用于应用层数据传输</li><li>TCP提供可靠传输,UDP提供非连接传输</li></ul><p>ICMP:</p><ul><li>用于网络层管理和报告信息</li><li>当UDP端口不可达时,使用ICMP报文通知发送端</li></ul><p>希望能为你解惑。如果还有疑问,欢迎随时向我提问!</p><h1 id="ping的工作原理" tabindex="-1"><a class="header-anchor" href="#ping的工作原理" aria-hidden="true">#</a> ping的工作原理</h1><p>ping是基于<code>ICMP协议</code>。</p><p>说了这么多，可以看出 ping 这个程序是<strong>使用了 ICMP 里面的 ECHO REQUEST（类型为 8 ） 和 ECHO REPLY （类型为 0）</strong>。</p><h2 id="局域网内主机a-ping-主机b" tabindex="-1"><a class="header-anchor" href="#局域网内主机a-ping-主机b" aria-hidden="true">#</a> 局域网内主机A ping 主机B</h2><p>在同一个子网下的主机A和主机B，主机A执行<code>ping</code>主机B后，我们来看看期间发送了什么？</p><ol><li><p>ping命令执行的时候，源主机会首先构建一个<code>ICMP回送请求消息</code>数据包。</p><blockquote><p>ICMP数据包内包含多个字段，最重要的是两个：</p><ol><li>第一个是<code>类型</code>，对于回送请求消息而言该字段为8</li><li>另外一个是<code>序号</code>，主要用于区分连续ping的时候发出的多个数据包。</li><li><img src="'+_+'" alt="主机 A 的 ICMP 回送请求报文" tabindex="0" loading="lazy"><figcaption>主机 A 的 ICMP 回送请求报文</figcaption></li></ol></blockquote></li><li><p>ICMP协议将这个数据包连同地址<code>192.168.1.2</code>一起交给IP层，IP 层将以 192.168.1.2 作为<strong>目的地址</strong>，本机 IP 地址作为<strong>源地址</strong>，<strong>协议</strong>字段设置为 <code>1</code> 表示是 <code>ICMP</code> 协议，再加上一些其他控制信息，构建一个 <code>IP</code> 数据包。</p><blockquote><figure><img src="'+N+'" alt="主机 A 的 IP 层数据包" tabindex="0" loading="lazy"><figcaption>主机 A 的 IP 层数据包</figcaption></figure></blockquote></li><li><p>通过缓存/ARP找到下一跳(目标机器)的MAC地址，在数据链路层构建一个数据帧，依据以太网的介质访问规则，将它们传送出去。</p></li><li><p>主机B收到该数据包之后，接收后检查该数据帧，将 IP 数据包从帧中提取出来，交给本机的 IP 层。同样，IP 层检查后，将有用的信息提取后交给 ICMP 协议。</p></li><li><p>主机 <code>B</code> 会构建一个 <strong>ICMP 回送响应消息</strong>数据包，回送响应数据包的<strong>类型</strong>字段为 <code>0</code>，<strong>序号</strong>为接收到的请求数据包中的序号，然后再发送出去给主机 A。</p><figure><img src="'+R+'" alt="主机 B 的 ICMP 回送响应报文" tabindex="0" loading="lazy"><figcaption>主机 B 的 ICMP 回送响应报文</figcaption></figure><p>在规定的时候间内，源主机如果没有接到 ICMP 的应答包，则说明目标主机不可达；如果接收到了 ICMP 回送响应消息，则说明目标主机可达。</p><p>此时，源主机会检查，用当前时刻减去该数据包最初从源主机上发出的时刻，就是 ICMP 数据包的时间延迟。</p></li></ol><p>总结来说如图所示：</p><figure><img src="'+q+`" alt="主机 A ping 主机 B 期间发送的事情" tabindex="0" loading="lazy"><figcaption>主机 A ping 主机 B 期间发送的事情</figcaption></figure><h2 id="traceroute-——-差错报文类型的使用" tabindex="-1"><a class="header-anchor" href="#traceroute-——-差错报文类型的使用" aria-hidden="true">#</a> traceroute —— 差错报文类型的使用</h2><p>有一款充分利用 ICMP <strong>差错报文类型</strong>的应用叫做 <code>traceroute</code>（在UNIX、MacOS中是这个命令，而在Windows中对等的命令叫做 tracert ）。</p><p><em>1. traceroute 作用一</em></p><p>traceroute 的第一个作用就是<strong>故意设置特殊的 TTL，来追踪去往目的地时沿途经过的路由器。</strong></p><p>traceroute 的参数指向某个<strong>目的 IP 地址</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">traceroute</span> <span class="token number">192.168</span>.1.100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>这个作用是如何工作的呢？</p></blockquote><p>它的原理就是利用 IP 包的<strong>生存期限</strong> 从 <code>1</code> 开始按照顺序递增的同时发送 <strong>UDP 包</strong>，强制接收 <strong>ICMP 超时消息</strong>的一种方法。</p><p>比如，将 TTL 设置 为 <code>1</code>，则遇到第一个路由器，就牺牲了，接着返回 ICMP 差错报文网络包，类型是<strong>时间超时</strong>。</p><p>接下来将 TTL 设置为 <code>2</code>，第一个路由器过了，遇到第二个路由器也牺牲了，也同时返回了 ICMP 差错报文数据包，如此往复，直到到达目的主机。</p><p>这样的过程，traceroute 就可以拿到了所有的路由器 IP。</p><p>当然有的路由器根本就不会返回这个 ICMP，所以对于有的公网地址，是看不到中间经过的路由的。</p><blockquote><p>发送方如何知道发出的 UDP 包是否到达了目的主机呢？</p></blockquote><p>traceroute 在发送 <code>UDP</code> 包时，会填入一个<strong>不可能的端口号</strong>值作为 UDP 目标端口号：33434。然后对于每个下一个探针，它都会增加一个，这些端口都是通常认为不会被使用，不过，没有人知道当某些应用程序监听此类端口时会发生什么。</p><p>当目的主机，收到 UDP 包后，会返回 ICMP 差错报文消息，但这个差错报文消息的类型是「<strong>端口不可达</strong>」。</p><p>所以，<strong>当差错报文类型是端口不可达时，说明发送方发出的 UDP 包到达了目的主机。</strong></p><p><em>2. traceroute 作用二</em></p><p>traceroute 还有一个作用是<strong>故意设置不分片，从而确定路径的 MTU</strong>。</p><blockquote><p>这么做是为了什么？</p></blockquote><p>这样做的目的是为了<strong>路径MTU发现</strong>。</p><p>因为有的时候我们并不知道路由器的 <code>MTU</code> 大小，以太网的数据链路上的 <code>MTU</code> 通常是 <code>1500</code> 字节，但是非以太网的 <code>MTU</code> 值就不一样了，所以我们要知道 <code>MTU</code> 的大小，从而控制发送的包大小。</p><figure><img src="https://cdn.xiaolincoding.com/gh/xiaolincoder/ImageHost/计算机网络/ping/18.jpg" alt="MTU 路径发现（UDP的情况下）" tabindex="0" loading="lazy"><figcaption>MTU 路径发现（UDP的情况下）</figcaption></figure><p>它的工作原理如下：</p><p>首先在发送端主机发送 <code>IP</code> 数据报时，将 <code>IP</code> 包首部的<strong>分片禁止标志位设置为 1</strong>。根据这个标志位，途中的路由器不会对大数据包进行分片，而是将包丢弃。</p><p>随后，通过一个 ICMP 的不可达消息将<strong>数据链路上 MTU 的值</strong>一起给发送主机，不可达消息的类型为「<strong>需要进行分片但设置了不分片位</strong>」。</p><p>发送主机端每次收到 ICMP 差错报文时就<strong>减少</strong>包的大小，以此来定位一个合适的 <code>MTU</code> 值，以便能到达目标主机。</p><h1 id="断网了-还能ping通127-0-0-1吗" tabindex="-1"><a class="header-anchor" href="#断网了-还能ping通127-0-0-1吗" aria-hidden="true">#</a> 断网了，还能ping通127.0.0.1吗？</h1><h2 id="什么是127-0-0-1" tabindex="-1"><a class="header-anchor" href="#什么是127-0-0-1" aria-hidden="true">#</a> 什么是127.0.0.1</h2><p>其中<strong>127 开头的都属于回环地址</strong>，也是 <code>IPV4</code> 的特殊地址。</p><p>而<code>127.0.0.1</code>是<strong>众多</strong>回环地址中的一个。之所以不是 <code>127.0.0.2</code> ，而是 <code>127.0.0.1</code>。</p><h2 id="为什么断网了还能ping通127-0-0-1" tabindex="-1"><a class="header-anchor" href="#为什么断网了还能ping通127-0-0-1" aria-hidden="true">#</a> 为什么断网了还能ping通127.0.0.1</h2><figure><img src="https://cdn.xiaolincoding.com//mysql/other/c1019a8be584b27c4fc8b8abda9d3cf1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>从应用层到传输层再到网络层。这段路径跟ping外网的时候是几乎是一样的。到了网络层，系统会根据目的IP，在路由表中获取对应的<strong>路由信息</strong>，而这其中就包含选择<strong>哪个网卡</strong>把消息发出。</p><p>当发现<strong>目标IP是外网IP</strong>时，会从&quot;真网卡&quot;发出。</p><p>当发现<strong>目标IP是回环地址</strong>时，就会选择<strong>本地网卡</strong>。</p><p>本地网卡，其实就是个**&quot;假网卡&quot;<strong>，它不像&quot;真网卡&quot;那样有个<code>ring buffer</code>什么的，&quot;假网卡&quot;会把数据推到一个叫 <code>input_pkt_queue</code> 的 *<em>链表*</em> 中。这个链表，其实是所有网卡共享的，上面挂着发给本机的各种消息。消息被发送到这个链表后，会再触发一个</strong>软中断**。</p>`,238),U=[k];function j(S,v){return o(),e("div",null,U)}const X=i(H,[["render",j],["__file","IP.html.vue"]]);export{X as default};
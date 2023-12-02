import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c,a as n,b as s,e as t,f as a}from"./app-_dQeDwys.js";const l={},r=a(`<h1 id="位运算总结" tabindex="-1"><a class="header-anchor" href="#位运算总结" aria-hidden="true">#</a> 位运算总结</h1><h2 id="经典理论" tabindex="-1"><a class="header-anchor" href="#经典理论" aria-hidden="true">#</a> 经典理论</h2><h3 id="异或" tabindex="-1"><a class="header-anchor" href="#异或" aria-hidden="true">#</a> 异或</h3><p>异或，可以理解为<mark>不进位加法</mark>（相同则0，不同则1）</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>x^x = 0;
x^0 = x;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>交换律：a ^ b ^ c &lt;=&gt; a ^ c ^ b</p></li><li><p>任何数于0异或为任何数 0 ^ n =&gt; n</p></li><li><p>相同的数异或为0: n ^ n =&gt; 0</p><blockquote><p>自反性：连续和同一个因子做异或运算，最终结果为自己。</p></blockquote></li></ol><hr><h3 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h3><p><strong>&gt;&gt;&gt;表示无符号右移，也叫<mark>逻辑右移</mark>，即若该数为正，则高位补0，而若该数为负数，则右移后高位同样补0</strong></p><p><strong>&gt;&gt;表示右移，如果该数为正，则高位补0，若为负数，则高位补1</strong></p><p><strong>&lt;&lt;表示左移移，不分正负数，低位补0；</strong></p><hr><h2 id="一、位运算的奇巧淫记" tabindex="-1"><a class="header-anchor" href="#一、位运算的奇巧淫记" aria-hidden="true">#</a> 一、位运算的奇巧淫记</h2><h4 id="_1、判断奇偶数-获取二进制位是1还是0" tabindex="-1"><a class="header-anchor" href="#_1、判断奇偶数-获取二进制位是1还是0" aria-hidden="true">#</a> 1、判断奇偶数 | <strong>获取二进制位是1还是0</strong></h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>x&amp;1
//为1就是奇数，为0就是偶数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="交换两个整数变量的值" tabindex="-1"><a class="header-anchor" href="#交换两个整数变量的值" aria-hidden="true">#</a> 交换两个整数变量的值</h4><h4 id="不用判断语句-求整数的绝对值" tabindex="-1"><a class="header-anchor" href="#不用判断语句-求整数的绝对值" aria-hidden="true">#</a> 不用判断语句，求整数的绝对值</h4><hr><h4 id="去掉最右边的一个1" tabindex="-1"><a class="header-anchor" href="#去掉最右边的一个1" aria-hidden="true">#</a> 去掉最右边的一个1</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>x <span class="token operator">&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="求一个数最低位为1的值" tabindex="-1"><a class="header-anchor" href="#求一个数最低位为1的值" aria-hidden="true">#</a> 求一个数最低位为1的值</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>x <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">~</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="求一个数的二进制数中1的个数-三种解法" tabindex="-1"><a class="header-anchor" href="#求一个数的二进制数中1的个数-三种解法" aria-hidden="true">#</a> 求一个数的二进制数中1的个数(三种解法)</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>//第一种
//while(n){
//		if(n&amp;1){
//			sum++;
//		}
//		n &gt;&gt;= 1;
//	}
//第二种
	for (int i = 0; i &lt; 32; i++) {
		if((n&amp;(1&lt;&lt;i))==(1&lt;&lt;i)){
			sum++;
		}
	}
//第三种
while(n){
		n = (n-1)&amp;n;//得出2^q(q为从右到左第一个1的位置)
		sum++;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断是否为2的幂" tabindex="-1"><a class="header-anchor" href="#判断是否为2的幂" aria-hidden="true">#</a> 判断是否为2的幂</h4><p><strong>核心</strong>：该数二进制只有一个<code>1</code>.</p><p>多种方法；</p><ul><li><p><code>return (n&gt;0) &amp;&amp; (1&lt;&lt;30) % n == 0;</code></p></li><li><p><code>return (n &gt; 0) &amp;&amp; (n &amp; -n) == n;</code></p></li><li></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>if(0 == (n-1)&amp;n){
    //...Yes;
} else {	
    //...No;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 从低到高找到第一个1的位置，然后看结果是否为0
if (n &lt;= 0)return false;
while(n != 0){
    if ((n &amp; 1 )== 1) {
        n = n &gt;&gt; 1;
        break;
    }
    n = n &gt;&gt; 1;
}
if (n == 0)return true;
return false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>**引申：**判断一个数是否为4的整数次方？</p><p><strong>思路一：</strong></p><p>先判断是否为2的次幂，然后判断二进制中1是否在偶数位上。</p><p>参考代码：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>if (((n &amp; -n) == n) &amp;&amp; ((n &amp; 0x55555555) == n)) return true; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="交换奇偶位" tabindex="-1"><a class="header-anchor" href="#交换奇偶位" aria-hidden="true">#</a> 交换奇偶位</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int ou = n&amp;0xaaaaaaaa;
int ji = n&amp;0x55555555;
printf(&quot;%d\\n&quot;,(ou&gt;&gt;1)^(ji&lt;&lt;1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出现k次与出现一次" tabindex="-1"><a class="header-anchor" href="#出现k次与出现一次" aria-hidden="true">#</a> 出现k次与出现一次</h4><ul><li>位运算 <ul><li>2个相同的2进制数做不进位加法，结果为0。</li><li>10个相同的10进制做不进位加法，结果为0。</li><li>k个相同的k进制做不进位加法，结果为0。</li></ul></li><li>哈希表</li></ul><h4 id="字母大小写转换" tabindex="-1"><a class="header-anchor" href="#字母大小写转换" aria-hidden="true">#</a> 字母大小写转换</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>统一转成大写：ch <span class="token operator">&amp;</span> <span class="token number">0b11011111</span> 简写：ch <span class="token operator">&amp;</span> <span class="token number">0xDF</span>
统一转成小写：ch <span class="token operator">|</span> <span class="token number">0b00100000</span> 简写：ch <span class="token operator">|</span> <span class="token number">0x20</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xDF</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xDF</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**Ps:**比较的时候注意加上小括号哦，因为位运算优先级比较低。</p><h4 id="比较两个整数的符号是否相反" tabindex="-1"><a class="header-anchor" href="#比较两个整数的符号是否相反" aria-hidden="true">#</a> 比较两个整数的符号是否相反</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">;</span>
bool f <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 异号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><hr><h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><h4 id="_1、不得使用-、-、-、-四则运算符号-求两整数之和" tabindex="-1"><a class="header-anchor" href="#_1、不得使用-、-、-、-四则运算符号-求两整数之和" aria-hidden="true">#</a> 1、不得使用+、-、*、/四则运算符号，求两整数之和</h4><ul><li><code>p&amp;q</code>两数相与，并左移一位，求进位。</li><li><code>p^q</code>不进位相加。</li><li><mark>负数同样适用</mark>(处理负数时，需要将int 换成unsigned int)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span><span class="token keyword">int</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> t<span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token operator">&amp;</span>q<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			t <span class="token operator">=</span> <span class="token punctuation">(</span>p<span class="token operator">&amp;</span>q<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
			p <span class="token operator">=</span> p<span class="token operator">^</span>q<span class="token punctuation">;</span>
			q <span class="token operator">=</span> t<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> p<span class="token operator">^</span>q<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">010001</span>
<span class="token number">011001</span>
相加等于<span class="token operator">=</span>
<span class="token number">101010</span> 

<span class="token comment">//利用位运算</span>
<span class="token operator">&amp;</span> 之后<span class="token operator">&lt;&lt;</span> <span class="token operator">=</span>
<span class="token number">100010</span><span class="token comment">//1</span>
<span class="token operator">^</span> <span class="token operator">=</span>
<span class="token number">001000</span><span class="token comment">//2</span>
<span class="token comment">// 1 + 2相加</span>
<span class="token number">100010</span>
<span class="token number">001000</span>
<span class="token operator">=</span>
<span class="token number">101010</span>
    
<span class="token comment">//不具有普适性，需注意1、2相加存在有进位的情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),u={id:"_2、-只出现一次的数字",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#_2、-只出现一次的数字","aria-hidden":"true"},"#",-1),k={href:"https://leetcode-cn.com/problems/single-number/",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">^</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">^=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、汉明距离-异或-求1的个数" tabindex="-1"><a class="header-anchor" href="#_3、汉明距离-异或-求1的个数" aria-hidden="true">#</a> 3、汉明距离(异或+求1的个数)</h4><h5 id="法一" tabindex="-1"><a class="header-anchor" href="#法一" aria-hidden="true">#</a> 法一：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hammingDistance</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> x<span class="token operator">^</span>y<span class="token punctuation">;</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 求二进制中1的个数</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>y<span class="token operator">++</span><span class="token punctuation">;</span>
    x <span class="token operator">=</span> x <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="法二" tabindex="-1"><a class="header-anchor" href="#法二" aria-hidden="true">#</a> 法二：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hammingDistance</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">bitCount</span><span class="token punctuation">(</span>x<span class="token operator">^</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">bitCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// HD, Figure 5-2</span>
    <span class="token comment">// 0x55555555   01010101010101010101010101010101(16对01)</span>
    <span class="token comment">// 保留奇数位，去除偶数位</span>
    i <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0x55555555</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 0x33333333   00110011001100110011001100110011</span>
    i <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">&amp;</span> <span class="token number">0x33333333</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0x33333333</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0x0f0f0f0f</span><span class="token punctuation">;</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> i <span class="token operator">&amp;</span> <span class="token number">0x3f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意此处的bitCount方法</p></blockquote>`,8),m={id:"_4、数字转换为十六进制数",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_4、数字转换为十六进制数","aria-hidden":"true"},"#",-1),h={href:"https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string <span class="token function">toHex</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        string s <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> hex <span class="token operator">=</span> <span class="token string">&quot;0123456789abcdef&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 位移运算并不能保证num==0，需要使用32位int保证（对应16进制小于等于8位）。</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 使用0xf(00...01111b)获取num的低4位。</span>
            s <span class="token operator">=</span> hex<span class="token punctuation">[</span>num <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">;</span>
            <span class="token comment">// &gt;&gt;算数位移，其中正数右移左边补0，负数右移左边补1。</span>
            num <span class="token operator">&gt;&gt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(f,y){const e=i("ExternalLinkIcon");return o(),c("div",null,[r,n("h4",u,[d,s(" 2、"),n("a",k,[s(" 只出现一次的数字"),t(e)])]),v,n("h4",m,[b,s(" 4、"),n("a",h,[s("数字转换为十六进制数"),t(e)])]),g])}const j=p(l,[["render",x],["__file","位运算.html.vue"]]);export{j as default};

import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-_dQeDwys.js";const t={},e=p(`<h1 id="基本问题" tabindex="-1"><a class="header-anchor" href="#基本问题" aria-hidden="true">#</a> 基本问题</h1><h2 id="一维前缀和" tabindex="-1"><a class="header-anchor" href="#一维前缀和" aria-hidden="true">#</a> 一维前缀和</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>a<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>a<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span> <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">-</span> s<span class="token punctuation">[</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
s<span class="token punctuation">[</span>l<span class="token punctuation">,</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">-</span> s<span class="token punctuation">[</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> pre<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// pre存储前缀和</span>
<span class="token keyword">public</span> <span class="token class-name">NumArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pre<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> left <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> pre<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">:</span> pre<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">-</span> pre<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二维前缀和" tabindex="-1"><a class="header-anchor" href="#二维前缀和" aria-hidden="true">#</a> 二维前缀和</h2><blockquote><p>S(O,D)=S(O,C)+S(O,B)−S(O,A)+D</p><figure><img src="https://pic.leetcode-cn.com/1614646493-EriDmE-304.001.jpeg" alt="304.001.jpeg" tabindex="0" loading="lazy"><figcaption>304.001.jpeg</figcaption></figure><p>减去 S(O, A)S(O,A) 的原因是 S(O, C)S(O,C) 和 S(O, B)S(O,B) 中都有 S(O, A)S(O,A)，即加了两次 S(O, A)S(O,A)，所以需要减去一次 S(O, A)S(O,A)。</p><p>如果求 preSum[i][j]preSum[i][j] 表示的话，对应了以下的递推公式：</p><p>$$ preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i][j] $$ 链接：https://leetcode-cn.com/problems/range-sum-query-2d-immutable/solution/ru-he-qiu-er-wei-de-qian-zhui-he-yi-ji-y-6c21/ 来源：力扣（LeetCode） 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pre<span class="token punctuation">;</span>
<span class="token comment">// pre存储前缀和</span>
<span class="token keyword">public</span> <span class="token class-name">NumMatrix</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> row <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">,</span> col <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> pre<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> pre<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumRegion</span><span class="token punctuation">(</span><span class="token keyword">int</span> row1<span class="token punctuation">,</span> <span class="token keyword">int</span> col1<span class="token punctuation">,</span> <span class="token keyword">int</span> row2<span class="token punctuation">,</span> <span class="token keyword">int</span> col2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">[</span>row2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> pre<span class="token punctuation">[</span>row1<span class="token punctuation">]</span><span class="token punctuation">[</span>col2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> pre<span class="token punctuation">[</span>row2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col1<span class="token punctuation">]</span> <span class="token operator">+</span> pre<span class="token punctuation">[</span>row1<span class="token punctuation">]</span><span class="token punctuation">[</span>col1<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="差分" tabindex="-1"><a class="header-anchor" href="#差分" aria-hidden="true">#</a> 差分</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>a[1],a[2],.…a[n]
b[i]=a[i]-a[i-1],b[1]=a[1]

a[i]=b[1]+b[2]+.…+b[i]
    =a[1]+a[2]-a[1]+a[3]-a[2]+.…+a[i]-a[i-1]
    
example:
原始数组：9  3  6  2  6  8
差分数组：9 -6  3 -4  4  2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1><h2 id="数学" tabindex="-1"><a class="header-anchor" href="#数学" aria-hidden="true">#</a> 数学</h2><h3 id="同余定理-前缀和" tabindex="-1"><a class="header-anchor" href="#同余定理-前缀和" aria-hidden="true">#</a> 同余定理 + 前缀和</h3><blockquote><p>https://leetcode-cn.com/problems/continuous-subarray-sum/</p><p>Continuous Subarray Sum</p><p>Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.</p><p>An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.</p><p>本题意思是在给定数组中找到一个和为k倍的子数组，并且要求该子数组长度大于等于2。(<strong>和为0也是k的倍数</strong>)</p></blockquote><p><strong>直接暴力 - &gt;&gt;TLE(93/94)：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">checkSubarraySum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pre<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">+</span> j <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">-</span> pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用<strong>同余定理</strong>和<strong>map存储余数</strong>进行优化！</p><blockquote><p>根据同余定理， 求(a-b)%k == 0可以转化为a%k == b%k</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">checkSubarraySum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">,</span> value<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 存储余数</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 和为0的情况</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pre<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            value <span class="token operator">=</span> pre<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> k<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1><ul><li>https://www.acwing.com/blog/content/112/</li><li></li></ul>`,22),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","前缀和.html.vue"]]);export{r as default};

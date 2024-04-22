import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c,e,w as u,a as n,b as s,f as a}from"./app-XffPLay1.js";const r="/assets/1301_01893de287-LIS-2-f-X6iyAz.jpg",d={},k=a(`<h1 id="lis-longest-increasing-sequence" tabindex="-1"><a class="header-anchor" href="#lis-longest-increasing-sequence" aria-hidden="true">#</a> LIS(Longest Increasing Sequence)</h1><h2 id="朴素做法o-n-2" tabindex="-1"><a class="header-anchor" href="#朴素做法o-n-2" aria-hidden="true">#</a> 朴素做法O(n^2)</h2><ul><li>状态表示：<code>f[i]</code>表示以a[i]结尾的IS的长度的最大值，或者说是(a[0]~a[i])这一段序列的<code>LIS</code>。</li><li><strong>状态表示f[i]</strong><ul><li>**集合：**以a[i]结尾的递增子序列</li><li>**属性：**长度最大值</li></ul></li><li><strong>状态计算</strong><ul><li>当<code>a[pre] &lt; a[i]</code>，<code>f[i] = max(f[i], f[pre] + 1)</code></li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;

using namespace std;

const int N = 1000 + 100;

int a[N], f[N];
int n;

int main()
{
    scanf(&quot;%d&quot;, &amp;n);
    
    for (int i = 1; i &lt;= n; i ++) scanf(&quot;%d&quot;, a + i);
    
    for (int i = 1; i &lt;= n; i ++)
    {
        f[i] = 1;
        for (int j = 1; j &lt; i; j ++)
            if (a[j] &lt; a[i]) f[i] = max(f[i], f[j] + 1);
    }
    
    int res = -1;
    for (int i = 1; i &lt;= n; i ++) res = max(res, f[i]);
    
    printf(&quot;%d\\n&quot;, res);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="贪心做法o-nlogn" tabindex="-1"><a class="header-anchor" href="#贪心做法o-nlogn" aria-hidden="true">#</a> 贪心做法O(nlogn)</h2><p>首先要确定一件事情：最长上升子序列遵循如下的单调性：</p><blockquote><p>即LIS的长度越长，那么对应子序列末尾元素的值应该更大。</p><p>对于一个序列，如果想让上升子序列尽量的长，那么需要让序列上升的尽可能的慢，因为需要每次在上升子序列末尾添加的数字尽可能小。 举例说明：如对序列 <img src="https://www.nowcoder.com/equation?tex=3， 4， 6， 5&amp;preview=true" alt="img" loading="lazy"> 。构建长度为3的上升子序列时，应该选择 <img src="https://www.nowcoder.com/equation?tex=3， 4， 5&amp;preview=true" alt="img" loading="lazy">而不是 <img src="https://www.nowcoder.com/equation?tex=3， 4， 6&amp;preview=true" alt="img" loading="lazy"> .</p><p>**代码实现：**基于上述方法，<strong>可以维护一个数字 <img src="https://www.nowcoder.com/equation?tex=d[i]&amp;preview=true" alt="img" loading="lazy">,表示长度为 <img src="https://www.nowcoder.com/equation?tex=i&amp;preview=true" alt="img" loading="lazy"> 的最长上升子序列的末尾数字的最小值</strong>，同时使用 <img src="https://www.nowcoder.com/equation?tex=len&amp;preview=true" alt="img" loading="lazy"> 记录当前最长上升子序列的长度。由此方法构建的 <img src="https://www.nowcoder.com/equation?tex=d[i]&amp;preview=true" alt="img" loading="lazy"> 数组关于 <img src="https://www.nowcoder.com/equation?tex=i&amp;preview=true" alt="img" loading="lazy"> 单调递增。若不为单调递增，既存在 <img src="https://www.nowcoder.com/equation?tex=d[i] &gt; d[j]&amp;preview=true" alt="img" loading="lazy"> , 且 <img src="https://www.nowcoder.com/equation?tex=i &lt; j&amp;preview=true" alt="img" loading="lazy">,则可以通过从<img src="https://www.nowcoder.com/equation?tex=d[j]&amp;preview=true" alt="img" loading="lazy">尾部删除元素使得两序列长相等，而此时 <img src="https://www.nowcoder.com/equation?tex=d[i]&amp;preview=true" alt="img" loading="lazy"> 仍大于 <img src="https://www.nowcoder.com/equation?tex=d[j]&amp;preview=true" alt="img" loading="lazy">，说明<img src="https://www.nowcoder.com/equation?tex=d[i]&amp;preview=true" alt="img" loading="lazy">不满足最长上升序列的最小值，导出矛盾。 通过遍历数组 <img src="https://www.nowcoder.com/equation?tex=arr&amp;preview=true" alt="img" loading="lazy"> 中的每个元素，并对 <img src="https://www.nowcoder.com/equation?tex=d&amp;preview=true" alt="img" loading="lazy"> 数组和 <img src="https://www.nowcoder.com/equation?tex=len&amp;preview=true" alt="img" loading="lazy"> 的值进行更新。 当 <img src="https://www.nowcoder.com/equation?tex=arr[i] &gt; d[len]&amp;preview=true" alt="img" loading="lazy">时，更新 <img src="https://www.nowcoder.com/equation?tex=len %3D len %2B 1&amp;preview=true" alt="img" loading="lazy">; 否则使用二分法找到满足 <img src="https://www.nowcoder.com/equation?tex=d[i - 1] &lt; arr[j] &lt; d[i]&amp;preview=true" alt="img" loading="lazy">的下标<img src="https://www.nowcoder.com/equation?tex=i&amp;preview=true" alt="img" loading="lazy">进行更新。 由于需要返回该子序列，需要添加一个辅助数组 <img src="https://www.nowcoder.com/equation?tex=p[i]&amp;preview=true" alt="img" loading="lazy">表示当前值对于 <img src="https://www.nowcoder.com/equation?tex=d&amp;preview=true" alt="img" loading="lazy"> 值。最后通过倒序遍历这个数组找出最长递增子序列</p><p>证明：以下图为例，若b &lt; a，那么a元素可以加在长度为4末尾元素为b的子序列后边，最终的LIS长度为5且末尾元素为a。但这明显与图中不符，所以a &gt; b恒成立。</p></blockquote><figure><img src="`+r+'" alt="LIS-2.jpg" tabindex="0" loading="lazy"><figcaption>LIS-2.jpg</figcaption></figure>',8),v=a(`<p>该做法蕴含了一个贪心的思想，对于同样长度的子串，我当然希望它的末端越小越好，这样以后我也有更多机会拓展。</p><p><strong>示例代码1：</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;

using namespace std;

const int N = 1e5 + 100;

int a[N], f[N];
// f[i] 表示长度为i的LIS的末尾元素。
int n;

int main()
{
    scanf(&quot;%d&quot;, &amp;n);
    
    for (int i = 1; i &lt;= n; i ++) scanf(&quot;%d&quot;, a + i);
    // 初始时，长度为1的子序列末尾元素就是a[1]
    f[1] = a[1];
    int cnt = 1;
    // 从第二个元素开始遍历
    for (int i = 2; i &lt;= n; i ++)
    {
        // 若该元素大于最长的子序列末尾元素，就将该元素加入到该序列末尾，
        // 否则，利用二分的方式，从f[]中找到小于该元素的最大值f[j]，将元素a[i]加到a[j]对应的序列的末尾.
        // 注意，加入之后，LIS的长度就发生改变，所以要加入到下一个位置，即f[j + 1] = a[i];
        if (a[i] &gt; f[cnt]) f[++ cnt] = a[i];
        else {
            int l = 1, r = cnt;
            while(l &lt; r)
            {
                int mid = l + r &gt;&gt; 1;
                if (a[i] &gt; f[mid]) l = mid + 1;
                else r = mid;
            }
            f[r] = a[i];
        }
    }
    
    printf(&quot;%d\\n&quot;, cnt);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Y总的简洁代码</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;

using namespace std;

const int N = 100010;

int n;
int a[N];
int q[N];

int main()
{
    scanf(&quot;%d&quot;, &amp;n);
    for (int i = 0; i &lt; n; i ++ ) scanf(&quot;%d&quot;, &amp;a[i]);

    int len = 0;
    for (int i = 0; i &lt; n; i ++ )
    {
        int l = 0, r = len;
        while (l &lt; r)
        {
            int mid = l + r + 1 &gt;&gt; 1;
            if (q[mid] &lt; a[i]) l = mid;
            else r = mid - 1;
        }
        len = max(len, r + 1);
        q[r + 1] = a[i];
    }

    printf(&quot;%d\\n&quot;, len);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分析：</strong></p><p>就是最终栈中的元素可能和最长子序列中的元素是不同的，但是其中包含的元素个数却是相同的。</p><p>最难理解的地方在于栈中序列虽然递增，但是每个元素在原串中对应的位置其实可能是乱的，那为什么这个栈还能用于计算最长子序列长度？ 实际上这个栈【不用于记录最终的最长子序列】，而是【<strong>以stk[i]结尾的子串长度最长为i</strong>】或者说【长度为i的递增子串中，末尾元素最小的是stk[i]】。理解了这个问题以后就知道为什么新进来的元素要不就在末尾增加，要不就替代第一个大于等于它元素的位置。 这里的【替换】就蕴含了一个贪心的思想，对于同样长度的子串，我当然希望它的末端越小越好，这样以后我也有更多机会拓展。</p><h1 id="lis扩展" tabindex="-1"><a class="header-anchor" href="#lis扩展" aria-hidden="true">#</a> LIS扩展</h1><h2 id="_1、相邻元素差绝对值不超过d的最长子序列问题" tabindex="-1"><a class="header-anchor" href="#_1、相邻元素差绝对值不超过d的最长子序列问题" aria-hidden="true">#</a> 1、相邻元素差绝对值不超过d的最长子序列问题</h2><blockquote><p>与此题相同的还有 左右不相邻的最长子序列长度</p></blockquote><p>问题描述：</p><p>输入数组 A[0:n]和正实数 d,试设计一个动态规划算法输出 A[0:n]的一个最长子序列，使得子序列中相继元素之差的绝对值不超过 d。分析算法的时间复杂度。</p><p>这个问题刚开始拿到没啥思路，一直想不到这个问题的最优子结构，后来看到了最长递增子序列问题的解，发现这个问题和最长递增子序列问题的思路类似。</p><p>我们来回忆一下最长递增子序列问题，我们在处理这个问题的时候可以进行一些适当的转换。尽管题目要求求A[0:n]的最长递增子序列，但是因为每个序列都有一个处在最后的元素，因此可以转换为求以某个元素结尾的最长递增子序列问题，最后只要一个O（n）的遍历就能得到最长递增子序列了。这么转换的好处是最优子结构一目了然，比如说我们找到了一个最长递增子序列b1b2...bn,那么显然，b1...bn-1为a0....bn-1的最长递增子序列，因为如果不是，那么将更长的和bn组合起来，就得到了一个比b1...bn还长的序列，这与我们的假设矛盾。在找到了最优子结构以后，很容易的可以写出递归式：</p><p>设list[i]存储的为以A[i]结尾的最长递增子序列，那么list[i]=max{list[j]}+1(其中j&lt;i,且A[i]&gt;A[j]）如果不存在A[j]那么list[i]=1.</p><p>这个算法很简单就能写出来了。</p><p>而回过头看这个题，其实并没有啥区别。一个序列a1a2a3...an的最长这个子序列为b1b2b3...bk，那么显然，b1....bk-1是以bk-1结尾的最长这个子序列，证明方法还是复制剪切法。所以我们很容易的可以得到一个递归式：</p><p>设dis[i]保存的是以A[i]结尾的最长的这个子序列的长度，那么dis[i]=max{dis[j]}+1 其中j&lt;i且要求满足A[j]与A[i]的差的绝对值小于d.</p><p>得到了递归式以后，我们很容易可以得到动态规划算法。</p><figure><img src="https://img-blog.csdn.net/20180609230126635?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3Njk0Mzkw/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>当然，最后还要遍历一下dis数组求出最大值。</p><blockquote><p>原文链接：https://blog.csdn.net/qq_37694390/article/details/80637038</p></blockquote><h2 id="_2、输出lis路径" tabindex="-1"><a class="header-anchor" href="#_2、输出lis路径" aria-hidden="true">#</a> 2、输出LIS路径</h2><h3 id="_3-1-基于朴素做法的lis路径输出" tabindex="-1"><a class="header-anchor" href="#_3-1-基于朴素做法的lis路径输出" aria-hidden="true">#</a> 3.1 基于朴素做法的LIS路径输出</h3>`,25),m={href:"https://leetcode.cn/problems/longest-increasing-subsequence/description/",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLIS</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
            
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-输出lis的最小字典序问题-ologn" tabindex="-1"><a class="header-anchor" href="#_3-2-输出lis的最小字典序问题-ologn" aria-hidden="true">#</a> 3.2 输出LIS的最小字典序问题(Ologn)</h3>`,2),w={href:"https://www.acwing.com/blog/content/5044/",target:"_blank",rel:"noopener noreferrer"},g=a(`<blockquote><p>题目描述 给定数组arr，设长度为n，输出arr的最长递增子序列。（如果有多个答案，请输出其中字典序最小的）</p><p>输入格式 第一行包含整数N。</p><p>第二行包含N个整数，表示完整序列。</p><p>数据范围 1&lt;=N&lt;=105</p><p>1&lt;=数列中的数&lt;=10^9 输入样例： 9 2 1 5 3 6 4 8 9 7 输出样例： 1 3 4 8 9 输入样例： 5 1 2 8 6 4 输出样例： 1 2 4</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * retrun the longest increasing subsequence
     * <span class="token keyword">@param</span> <span class="token parameter">arr</span> int整型一维数组 the array
     * <span class="token keyword">@return</span> int整型一维数组
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">LIS</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">// f[i]记录长度为i的LIS的最小末尾元素</span>
        <span class="token comment">// 也就是说同样都是长度为3的LIS，f记录末尾元素最小的那个LIS的末尾元素。这样才能让这个LIS能够继续扩展。</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> maxLen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 长度为1时，末尾元素就是第一个元素。</span>
        f<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 以元素arr[0]结尾的LIS长度为1</span>
        maxLen<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果arr[i]比前边所有序列末尾元素都大，那就将该元素加到所有序列的末尾。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> f<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                f<span class="token punctuation">[</span><span class="token operator">++</span> len<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                maxLen<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> len<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 让他替换某一个长度序列里的末尾元素，</span>
                <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> len<span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> f<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> r <span class="token operator">=</span> mid<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                f<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                maxLen<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> r<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    	<span class="token comment">// 注意：f数组的长度等同于LIS的长度，但是不代表就是LIS序列。</span>
        <span class="token comment">// 为什么这样输出就是字典序最小的序列？</span>
        <span class="token comment">// 假设maxLen=[1,2,3,1,3]，最终输出结果为res（字典序最小的最长递增子序列），res[末尾]那么到底等于arr1[2]还是等于arr1[4]呢？换句话说，就是res是以arr1[2]结尾的LIS，还是以arr1[4]结尾的LIS。</span>
        <span class="token comment">// 答案显然是以arr1[4]结尾的LIS</span>
        <span class="token comment">// 因为f[3]一定等于arr1[4], 因为i是从0~n开始遍历的。所以刚开始f[3] = arr1[2]，但是发现arr1[4] &lt; arr1[2]，所以将f[3]的值替换为了arr1[4]。否则，arr1[4] == 4,f[4] == arr1[4],f[3] == arr1[2]</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxLen<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ans<span class="token punctuation">[</span><span class="token operator">--</span> len<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、覆盖整个序列的最少的不上升子序列的个数" tabindex="-1"><a class="header-anchor" href="#_3、覆盖整个序列的最少的不上升子序列的个数" aria-hidden="true">#</a> 3、覆盖整个序列的最少的不上升子序列的个数</h2><blockquote><p>另外根据Dilworth定理： 可证明了： “能覆盖整个序列的最少的不上升子序列的个数”等价于“该序列的最长上升子序列长度” 同理即有： “能覆盖整个序列的最少的不下降子序列的个数”等价于“该序列的最长下降子序列长度”</p></blockquote>`,4),h={href:"https://www.acwing.com/activity/content/code/content/2656355/",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="_4、用二分求出非严格单调递增的lis" tabindex="-1"><a class="header-anchor" href="#_4、用二分求出非严格单调递增的lis" aria-hidden="true">#</a> 4、用二分求出非严格单调递增的LIS</h2><blockquote><ol start="1964"><li>找出到每个位置为止最长的有效障碍赛跑路线</li></ol><p>求出以每个位置结束的LIS(非严格单调递增)</p></blockquote><p>注意好好思考<code>f[]</code>数组的含义</p><ul><li>代表的是长度为i + 1的最长子序列中末尾元素最小的数</li><li>显然，在相同长度的非递减子序列中，<strong>结尾元素越小越容易获得一个更长的非递减子序列，贪心具有正确性</strong>，我们只要维护每个长度的非递减序列的最小结尾元素即可，然后对于每个障碍，只要找到它能构成的最长非递减子序列，遍历每个障碍，并更新 dp 数组，做法是找到小于等于该障碍高度和大于的分界线，替换掉大于的那个元素，而被替换的下标就是当前障碍能构成的最长子序列，我们可以用二分快速找到这个位置，需要注意的是，如果所有元素都小于等于当前障碍，我们需要在结尾添加一个元素，因此二分的区间是变化的，我们维护一个最长子序列长度，每次二分都在这个范围内查找，如果添加了元素，那么该长度加一</li></ul>',4);function y(q,x){const p=i("center"),t=i("ExternalLinkIcon");return l(),c("div",null,[k,e(p,null,{default:u(()=>[s("图片来自https://www.acwing.com/user/myspace/index/1301")]),_:1}),v,n("p",null,[n("a",m,[s("300. 最长递增子序列 - 力扣（Leetcode）"),e(t)])]),b,n("p",null,[s("参考连接："),n("a",w,[s("最长上升子序列 求字典序问题 - AcWing"),e(t)])]),g,n("p",null,[n("a",h,[s("AcWing 1010. 拦截导弹 - AcWing"),e(t)])]),f])}const j=o(d,[["render",y],["__file","LIS.html.vue"]]);export{j as default};

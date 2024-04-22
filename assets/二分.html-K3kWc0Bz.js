import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,f as s}from"./app-XffPLay1.js";const l={},d=s(`<h1 id="二分" tabindex="-1"><a class="header-anchor" href="#二分" aria-hidden="true">#</a> 二分</h1><h2 id="使用二分枚举" tabindex="-1"><a class="header-anchor" href="#使用二分枚举" aria-hidden="true">#</a> 使用二分枚举</h2><p>AcWing. 1090 绿色通道</p><p>https://www.acwing.com/activity/content/problem/content/1462/</p><p>另外 Leetcode上有一道题为啥不能用二分做（似乎是因为有负数的存在，不符合单调性）</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;cstdio&gt;
#include&lt;vector&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;

using namespace std;

const int N = 100100;

int q[N];



bool check(int k, vector&lt;int&gt;&amp; nums, int sum)
{
    int hh = 0, tt = -1;
    for (int i = 1; i &lt;= nums.size(); i ++)
    {
        if (hh &lt;= tt &amp;&amp; i - q[hh] &gt; k) hh ++;
        while (hh &lt;= tt &amp;&amp; nums[q[tt]] &gt;= nums[i]) tt --;
        q[++ tt] = i;
        if (i &gt;= k &amp;&amp; sum &lt;= nums[i] - nums[q[hh]]) return true;
    }
    return false;
}

int shortestSubarray(vector&lt;int&gt;&amp; nums, int k) {
    int n = nums.size();
    vector&lt;int&gt; s(n + 1);
    for (int i = 1; i &lt;= nums.size(); i ++) s[i] = s[i - 1] + nums[i - 1];

    if (s[n] &lt; k) return -1;

    int l = 0, r = n;
    while(l &lt; r)
    {
        int mid = l + r &gt;&gt; 1;
        if (check(mid, s, k)) r = mid;
        else l = mid + 1;
    }
    
    return r;
}


int main()
{
    int n, k, t;
    scanf(&quot;%d%d&quot;, &amp;n, &amp;k);
    vector&lt;int&gt; nums;
    
    for (int i = 0; i &lt; n; i ++)
    {
        scanf(&quot;%d&quot;, &amp;t);
        nums.push_back(t);
    }
    
    printf(&quot;%d\\n&quot;, shortestSubarray(nums, k));
    
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[d];function t(r,a){return i(),e("div",null,v)}const m=n(l,[["render",t],["__file","二分.html.vue"]]);export{m as default};

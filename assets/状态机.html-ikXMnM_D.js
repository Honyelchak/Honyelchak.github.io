import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as s}from"./app-_dQeDwys.js";const d={},l=s(`<h1 id="状态机模型" tabindex="-1"><a class="header-anchor" href="#状态机模型" aria-hidden="true">#</a> 状态机模型</h1><h3 id="大盗阿福" tabindex="-1"><a class="header-anchor" href="#大盗阿福" aria-hidden="true">#</a> 大盗阿福</h3><p><strong>状态机解法</strong></p><p>定义两种状态：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;

using namespace std;

const int N = 100100, INF = 0x3f3f3f3f;

int f[N][2], a[N];
int n, t;

int main()
{
    scanf(&quot;%d&quot;, &amp;t);
    
    while(t --)
    {
        scanf(&quot;%d&quot;, &amp;n);
        for (int i = 1; i &lt;= n; i ++) scanf(&quot;%d&quot;, a + i);
        
        f[0][0] = 0, f[0][1] = -INF;
        for (int i = 1; i &lt;= n; i ++)
        {
            f[i][0] = max(f[i - 1][0], f[i - 1][1]);
            f[i][1] = f[i - 1][0] + a[i];
        }
        
        printf(&quot;%d\\n&quot;, max(f[n][0], f[n][1]));
    }
    
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[l];function c(r,v){return n(),e("div",null,a)}const m=i(d,[["render",c],["__file","状态机.html.vue"]]);export{m as default};

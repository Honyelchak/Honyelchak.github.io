import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as d}from"./app-XffPLay1.js";const s={},l=d(`<h1 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs" aria-hidden="true">#</a> BFS</h1><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><ul><li>最核心的特点：&quot;求最小&quot;</li><li>基于迭代，相对于DFS，不会爆栈。</li><li>BFS中使用的队列具有<strong>单调性</strong>和<strong>两段性</strong>。 <ul><li>两段性：即队列中自始至终最多只存在两种类型的元素</li><li>单调性：当求边权相同且大于0 的最短距离时，该队列能保证只含有(x, x, x,....,x +1, x+ 1,....x+1)两种类型。</li></ul></li></ul><h3 id="基本模板" tabindex="-1"><a class="header-anchor" href="#基本模板" aria-hidden="true">#</a> 基本模板</h3><h3 id="flood-fill模型" tabindex="-1"><a class="header-anchor" href="#flood-fill模型" aria-hidden="true">#</a> Flood Fill模型</h3><h3 id="最短路模型" tabindex="-1"><a class="header-anchor" href="#最短路模型" aria-hidden="true">#</a> 最短路模型</h3><h3 id="多源bfs" tabindex="-1"><a class="header-anchor" href="#多源bfs" aria-hidden="true">#</a> 多源BFS</h3><h3 id="最小步数模型" tabindex="-1"><a class="header-anchor" href="#最小步数模型" aria-hidden="true">#</a> 最小步数模型</h3><h3 id="双端队列广搜" tabindex="-1"><a class="header-anchor" href="#双端队列广搜" aria-hidden="true">#</a> 双端队列广搜</h3><h4 id="acwing-175-电路维修" tabindex="-1"><a class="header-anchor" href="#acwing-175-电路维修" aria-hidden="true">#</a> AcWing 175. 电路维修</h4><blockquote><p>因为所有边的权重不同，所以某些点可能需要被扩展多次。这道题目可以看成是特殊的dijkstra算法，在dijkstra算法中，某些点可能会被多次扩展，但第一次从优先队列中弹出的节点的距离一定就是最小值了，所以需要在出队的时候来判重。</p></blockquote><ul><li>最开始使用数组模拟队列，通过率为9/10，然后发现是q[– hh] = {a,b}的问题，当hh = 0时，q数组就越界了。使用数组来模拟双端队列还是挺麻烦的，果断转STL，deque。</li><li>之前的题目都等价于在一张边权均为1的图上执行BFS。在边权均为1的图上执行BFS，队列中的状态的层数都满足两段性和单调性。从而我们知道，每个状态在第一次被访问并入队时，计算出的步数即为所求。</li><li>这道题与之前基本的BFS不同，这是一张边权要么是0、要么是1的无向图。在这样的图上，我们可以通过使用双端队列BFS来计算，算法的整体框架与一般的广搜类似，只是在每个节点上沿分支扩展时稍作改变。</li><li>如果这条分支是边权为0的边，就把沿着该分支到达的新节点从队头入队。反之边权为1，就将其从队尾入队。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;
#include&lt;deque&gt;

#define x first
#define y second

using namespace std;

const int N = 510, M = N * N * 100, INF = 0x3f3f3f3f;

typedef pair&lt;int, int&gt; PII;

int r, c;
char g[N][N];
int dist[N][N];
int dx[] = {-1, -1, 1, 1}, dy[] = {-1, 1, -1, 1};
int ix[] = {-1, -1, 0, 0}, iy[] = {-1, 0, -1, 0};

int bfs()
{
    char s[5] = &quot;\\\\//\\\\&quot;;

    memset(dist, 0x3f, sizeof dist);

    deque&lt;PII&gt; q;
    q.push_back({0, 0});
    dist[0][0] = 0;

    while(q.size())
    {
        PII t = q.front();
        q.pop_front();

        if (t.x == r &amp;&amp; t.y == c) return dist[r][c];

        for (int i = 0; i &lt; 4; i ++)
        {
            int a = t.x + dx[i], b = t.y + dy[i];

            if (a &lt; 0 || a &gt; r || b &lt; 0 || b &gt; c) continue;


            int ga = t.x + ix[i], gb = t.y + iy[i];
            int w = g[ga][gb] == s[i] ? 0 : 1, d = dist[t.x][t.y] + w;

            if (d &lt; dist[a][b])
            {
                dist[a][b] = d;
                if (w) q.push_back({a, b});
                else q.push_front({a, b});
            }
        }
    }
    return dist[r][c];
}

int main()
{
    int t;
    scanf(&quot;%d&quot;, &amp;t);

    while (t --)
    {
        scanf(&quot;%d%d&quot;, &amp;r, &amp;c);
        for (int i = 0; i &lt; r; i ++)
            scanf(&quot;%s&quot;, g[i]);

        int ans = bfs();
        if (ans == INF) printf(&quot;NO SOLUTION\\n&quot;);
        else printf(&quot;%d\\n&quot;, ans);
    }

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="leetcode-1368-使网格图至少有一条有效路径的最小代价" tabindex="-1"><a class="header-anchor" href="#leetcode-1368-使网格图至少有一条有效路径的最小代价" aria-hidden="true">#</a> LeetCode 1368.使网格图至少有一条有效路径的最小代价</h4><blockquote><p>模板题，和AcWing175类似</p></blockquote><h3 id="双向广搜" tabindex="-1"><a class="header-anchor" href="#双向广搜" aria-hidden="true">#</a> 双向广搜</h3><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> A*</h3><blockquote><ol><li>把BFS中的队列换成优先队列</li></ol></blockquote><p><strong>估价函数：</strong></p><p>要保证估价函数&gt;=0，同时小于等于真实值。</p>`,20),a=[l];function r(c,v){return n(),e("div",null,a)}const b=i(s,[["render",r],["__file","BFS.html.vue"]]);export{b as default};

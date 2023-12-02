# BFS

### 简介

- 最核心的特点："求最小"
- 基于迭代，相对于DFS，不会爆栈。
- BFS中使用的队列具有**单调性**和**两段性**。
  - 两段性：即队列中自始至终最多只存在两种类型的元素
  - 单调性：当求边权相同且大于0 的最短距离时，该队列能保证只含有(x, x, x,....,x +1, x+ 1,....x+1)两种类型。






### 基本模板





### Flood Fill模型



### 最短路模型



### 多源BFS



### 最小步数模型



### 双端队列广搜



#### AcWing 175. 电路维修

> 因为所有边的权重不同，所以某些点可能需要被扩展多次。这道题目可以看成是特殊的dijkstra算法，在dijkstra算法中，某些点可能会被多次扩展，但第一次从优先队列中弹出的节点的距离一定就是最小值了，所以需要在出队的时候来判重。

- 最开始使用数组模拟队列，通过率为9/10，然后发现是q[– hh] = {a,b}的问题，当hh = 0时，q数组就越界了。使用数组来模拟双端队列还是挺麻烦的，果断转STL，deque。
- 之前的题目都等价于在一张边权均为1的图上执行BFS。在边权均为1的图上执行BFS，队列中的状态的层数都满足两段性和单调性。从而我们知道，每个状态在第一次被访问并入队时，计算出的步数即为所求。
- 这道题与之前基本的BFS不同，这是一张边权要么是0、要么是1的无向图。在这样的图上，我们可以通过使用双端队列BFS来计算，算法的整体框架与一般的广搜类似，只是在每个节点上沿分支扩展时稍作改变。
- 如果这条分支是边权为0的边，就把沿着该分支到达的新节点从队头入队。反之边权为1，就将其从队尾入队。

```c++
#include<cstdio>
#include<cstring>
#include<algorithm>
#include<deque>

#define x first
#define y second

using namespace std;

const int N = 510, M = N * N * 100, INF = 0x3f3f3f3f;

typedef pair<int, int> PII;

int r, c;
char g[N][N];
int dist[N][N];
int dx[] = {-1, -1, 1, 1}, dy[] = {-1, 1, -1, 1};
int ix[] = {-1, -1, 0, 0}, iy[] = {-1, 0, -1, 0};

int bfs()
{
    char s[5] = "\\//\\";

    memset(dist, 0x3f, sizeof dist);

    deque<PII> q;
    q.push_back({0, 0});
    dist[0][0] = 0;

    while(q.size())
    {
        PII t = q.front();
        q.pop_front();

        if (t.x == r && t.y == c) return dist[r][c];

        for (int i = 0; i < 4; i ++)
        {
            int a = t.x + dx[i], b = t.y + dy[i];

            if (a < 0 || a > r || b < 0 || b > c) continue;


            int ga = t.x + ix[i], gb = t.y + iy[i];
            int w = g[ga][gb] == s[i] ? 0 : 1, d = dist[t.x][t.y] + w;

            if (d < dist[a][b])
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
    scanf("%d", &t);

    while (t --)
    {
        scanf("%d%d", &r, &c);
        for (int i = 0; i < r; i ++)
            scanf("%s", g[i]);

        int ans = bfs();
        if (ans == INF) printf("NO SOLUTION\n");
        else printf("%d\n", ans);
    }

    return 0;
}
```



#### LeetCode 1368.使网格图至少有一条有效路径的最小代价

> 模板题，和AcWing175类似





### 双向广搜





### A*

> 1. 把BFS中的队列换成优先队列

**估价函数：**

要保证估价函数>=0，同时小于等于真实值。

# 2 算法

​        这里只对一些经典的函数进行封装，如有比较复杂的题目则只放出题目链接。遇到不会的题目可以看下面的链接。

+ [第零章、核心框架汇总 :: labuladong的算法小抄 (gitee.io)](https://labuladong.gitee.io/algo/1/)
+ [代码随想录 (programmercarl.com)](https://programmercarl.com/)

+ [Home · SharingSource/LogicStack-LeetCode Wiki (github.com)](https://github.com/SharingSource/LogicStack-LeetCode/wiki)（宫水三叶的模板）



## 2.1 数据结构

### 2.1.1 链表

​        对于链表的题目，笔试的时候可以选择自己拿手的方式去做，但是面试的时候有时候需要你同时写出递归和迭代的算法，这里举几个经典的操作和例题。

- 寻找链表中点

```java
ListNode slow = head;
ListNode fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
}
//slow就是指向中点
```



#### 2.1.1.1 翻转链表

+ 递归翻转链表

  ```java
  ListNode reverse(ListNode head) {
      if( head == null || head.next == null ){
          return head;
      }
      ListNode last = reverse(head.next);
      head.next.next = head;
      head.next = null;
      return last;
  }
  ```

  

+ 迭代翻转

  ```java
  public ListNode reverseList(ListNode head) {
      ListNode pre = null;
      while( head != null ){
          ListNode next =  head.next;
          head.next = pre;
          pre = head;
          head = next;
      }
      return pre;
  }
  ```



+ [206. 反转链表 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-linked-list/)
+ [92. 反转链表 II - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-linked-list-ii/)
+ [25. K 个一组翻转链表 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-nodes-in-k-group/)
+ [234. 回文链表 - 力扣（LeetCode）](https://leetcode.cn/problems/palindrome-linked-list/)



#### 2.1.1.2 双指针

​        双指针一般用快慢指针寻找中点的时候用，或者合并链表的时候用，在剑指offer中经常这些题目，一般要求不能使用额外空间，所以还是需要掌握。

​         快慢指针题目推荐

+ [142. 环形链表 II - 力扣（LeetCode）](https://leetcode.cn/problems/linked-list-cycle-ii/)

+ [160. 相交链表 - 力扣（LeetCode）](https://leetcode.cn/problems/intersection-of-two-linked-lists/)
+ [19. 删除链表的倒数第 N 个结点 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
+ [876. 链表的中间结点 - 力扣（LeetCode）](https://leetcode.cn/problems/middle-of-the-linked-list/)
+ [83. 删除排序链表中的重复元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)



​        合并链表

+ [23. 合并K个升序链表 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-k-sorted-lists/)



### 2.1.2 栈

​        栈的题目一般分为单调栈和普通栈的题目，单调栈就是维护一个单调递增/递减的栈，每次进入元素的时候判断当前是不是单调的，否则更新栈的元素。

#### 2.1.2.1 单调栈

+ [739. 每日温度 - 力扣（LeetCode）](https://leetcode.cn/problems/daily-temperatures/)
+ [503. 下一个更大元素 II - 力扣（LeetCode）](https://leetcode.cn/problems/next-greater-element-ii/)
+ [316. 去除重复字母 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicate-letters/)
+ [42. 接雨水 - 力扣（LeetCode）](https://leetcode.cn/problems/trapping-rain-water/)（用dp做简单）



#### 2.1.2.2 普通栈

​        对于普通栈，常见的就是括号匹配问题，这里放几个难题，掌握了就没问题。

+ [224. 基本计算器 - 力扣（LeetCode）](https://leetcode.cn/problems/basic-calculator/)

+ [1106. 解析布尔表达式 - 力扣（LeetCode）](https://leetcode.cn/problems/parsing-a-boolean-expression/)

+ [32. 最长有效括号 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-valid-parentheses/)

+ [150. 逆波兰表达式求值 - 力扣（LeetCode）](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

+ [678. 有效的括号字符串 - 力扣（LeetCode）](https://leetcode.cn/problems/valid-parenthesis-string/)

  对于栈和队列的转换也是常考问题，需要掌握

+ [232. 用栈实现队列 - 力扣（LeetCode）](https://leetcode.cn/problems/implement-queue-using-stacks/)

+ [225. 用队列实现栈 - 力扣（LeetCode）](https://leetcode.cn/problems/implement-stack-using-queues/)



### 2.1.3 二叉树

​        **快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历**，对于二叉树的各种基本操作都需要掌握，比如求深度，直径，bfs和dfs的遍历，这里直接放题目链接，都需要会做。

​        **前序位置的代码只能从函数参数中获取父节点传递来的数据，而后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据**。**一旦你发现题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码了**。

​        **每一条二叉树的「直径」长度，就是一个节点的左右子树的最大深度之和**。

​        二叉树的层序遍历和递归也都需要掌握。一般如果可以分解问题则可以用递归去写。

​        **1、是否可以通过遍历一遍二叉树得到答案**？如果可以，用一个 `traverse` 函数配合外部变量来实现，这叫「遍历」的思维模式。

​        **2、是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案**？如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值，这叫「分解问题」的思维模式。

​        无论使用哪种思维模式，你都需要思考：**如果单独抽出一个二叉树节点，它需要做什么事情？需要在什么时候（前/中/后序位置）做？**

```java
// 输入一棵二叉树的根节点，层序遍历这棵二叉树
void levelTraverse(TreeNode root) {
    if (root == null) return;
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);
    // 从上到下遍历二叉树的每一层
    while (!q.isEmpty()) {
        int sz = q.size();
        // 从左到右遍历每一层的每个节点
        for (int i = 0; i < sz; i++) {
            TreeNode cur = q.poll();
            // 将下一层节点放入队列
            if (cur.left != null) {
                q.offer(cur.left);
            }
            if (cur.right != null) {
                q.offer(cur.right);
            }
        }
    }
}
```


+ [104. 二叉树的最大深度 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
+ [144. 二叉树的前序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-preorder-traversal/)
+ [107. 二叉树的层序遍历 II - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)
+ [543. 二叉树的直径 - 力扣（LeetCode）](https://leetcode.cn/problems/diameter-of-binary-tree/)
+ [114. 二叉树展开为链表 - 力扣（LeetCode）](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)
+ [116. 填充每个节点的下一个右侧节点指针 - 力扣（LeetCode）](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)
+ [226. 翻转二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/invert-binary-tree/)
+ [101. 对称二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/symmetric-tree/)
+ [222. 完全二叉树的节点个数 - 力扣（LeetCode）](https://leetcode.cn/problems/count-complete-tree-nodes/)（选择题可能考 要记住公式）



​        选择题中经常考构造二叉树，**通过前序中序，或者后序中序遍历结果可以确定唯一一棵原始二叉树，但是通过前序后序遍历结果无法确定唯一的原始二叉树**。

+ [105. 从前序与中序遍历序列构造二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
+ [106. 从中序与后序遍历序列构造二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
+ [654. 最大二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-binary-tree/)
+ [889. 根据前序和后序遍历构造二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
+ [297. 二叉树的序列化与反序列化 - 力扣（LeetCode）](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)



#### 2.1.3.1 二叉搜索树(BST)

​        **BST 的中序遍历结果是有序的（升序）**，这一点很关键。

+ [538. 把二叉搜索树转换为累加树 - 力扣（LeetCode）](https://leetcode.cn/problems/convert-bst-to-greater-tree/)
+ [230. 二叉搜索树中第K小的元素 - 力扣（LeetCode）](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)
+ [701. 二叉搜索树中的插入操作 - 力扣（LeetCode）](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)
+ [450. 删除二叉搜索树中的节点 - 力扣（LeetCode）](https://leetcode.cn/problems/delete-node-in-a-bst/)
+ [98. 验证二叉搜索树 - 力扣（LeetCode）](https://leetcode.cn/problems/validate-binary-search-tree/)
+ [108. 将有序数组转换为二叉搜索树 - 力扣（LeetCode）](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
+ [96. 不同的二叉搜索树 - 力扣（LeetCode）](https://leetcode.cn/problems/unique-binary-search-trees/)
+ [95. 不同的二叉搜索树 II - 力扣（LeetCode）](https://leetcode.cn/problems/unique-binary-search-trees-ii/)

#### 2.1.3.2 公共祖先问题

​        需要掌握普通二叉树和BST的公共祖先问题。

+ [235. 二叉搜索树的最近公共祖先 - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)
+ [236. 二叉树的最近公共祖先 - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)
+ [1676. 二叉树的最近公共祖先 IV - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iv/)
+ [1644. 二叉树的最近公共祖先 II - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii/)
+ [1650. 二叉树的最近公共祖先 III - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii/)



### 2.1.4 图

​        图论比较重要，一般用dfs或者bfs，常见的有拓扑排序、并查集等，下面逐一介绍。图论问题中，路径记录一般有邻接矩阵和邻接表两种方式，少数会用前向星去记录。邻接矩阵空间消耗大，但是可以快速判断两个点是否可以到达，邻接表则与之相反。

#### 2.1.4.1 回溯

​        回溯常用vis数组标记是否出现，后面还有会专门的专题记录非图问题的回溯算法，下面为模板。

```java
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```

+ [797. 所有可能的路径 - 力扣（LeetCode）](https://leetcode.cn/problems/all-paths-from-source-to-target/)



#### 2.1.4.2 拓扑排序

​        拓扑排序常用来判断一个图是不是有向无环图。**看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖**。**发现这幅有向图中存在环，那就说明存在循环依赖**。常见的实现方式有dfs和bfs两种。

​        bfs的思路如下：

1. 构建邻接表，和之前一样，边的方向表示「被依赖」关系。
2. 构建一个 `indegree` 数组记录每个节点的入度，即 `indegree[i]` 记录节点 `i` 的入度。
3. 对 BFS 队列进行初始化，将入度为 0 的节点首先装入队列。
4. **开始执行 BFS 循环，不断弹出队列中的节点，减少相邻节点的入度，并将入度变为 0 的节点加入队列**。
5. **如果最终所有节点都被遍历过（count 等于节点数），则说明不存在环，反之则说明存在环**。(或者存在度大于1的点也证明存在环)。

+ [210. 课程表 II - 力扣（LeetCode）](https://leetcode.cn/problems/course-schedule-ii/)
+ [802. 找到最终的安全状态 - 力扣（LeetCode）](https://leetcode.cn/problems/find-eventual-safe-states/)



#### 2.1.4.3 二分图

​        二分图的顶点集可分割为两个互不相交的子集，图中每条边依附的两个顶点都分属于这两个子集，且两个子集内的顶点不相邻。

​        说的简单一点，就是**给你一幅「图」，请你用两种颜色将图中的所有顶点着色，且使得任意一条边的两个端点的颜色都不相同**。常见的解决办法有染色法（BFS/DFS），或者并查集。并查集放在其他地方写，这里只写bfs和dfs的写法。

```java
//BFS
public boolean isBipartite(int[][] graph) {
	int n = graph.length;
	int[] vis = new int[n]; //0未访问 1 -1为颜色
	Queue<Integer> queue = new LinkedList<>();
	for( int i = 0 ; i < n ; i++ ){
		if( vis[i] != 0 ) continue;//访问过
		queue.offer(i);
		vis[i] = 1;
		while( !queue.isEmpty() ){
			int cur = queue.poll();
			for( int j = 0 ; j < graph[cur].length ; j++ ){
				//下一个颜色和当前相同
 				if( vis[ graph[cur][j] ] == vis[cur] ) return false;
				//下一个点没有被访问过
				if( vis[ graph[cur][j] ] == 0 ){
                    //染上相反的颜色
                    vis[ graph[cur][j] ] = -vis[cur];
					queue.offer( graph[cur][j] );
				}
			}
 		}
 	}
	return true;
}
```

```java
//DFS
int n;
int[] vis;
boolean flag = true;
public boolean isBipartite(int[][] graph) {
	n = graph.length;
	vis = new int[n]; //0未访问 1 -1为颜色
	for( int i = 0 ; i < n ; i++ ){
		if( vis[i] != 0 ) continue;//访问过
        vis[i] = 1;
		dfs(graph , i);
 	}
	return flag;
}
private void dfs(int[][] graph, int v) {
    if( !flag ) return ;
    for( int i = 0 ; i < graph[v].length ; i++ ){
        if( vis[v] == vis[ graph[v][i] ] ){
            flag = false;
            return;
        }
        if( vis[ graph[v][i] ] == 0 ){
            vis[ graph[v][i] ] = -vis[ v ];//先染色
            dfs( graph , graph[v][i] ); 
        }
    }
}
```

+ [785. 判断二分图 - 力扣（LeetCode）](https://leetcode.cn/problems/is-graph-bipartite/)

+ [886. 可能的二分法 - 力扣（LeetCode）](https://leetcode.cn/problems/possible-bipartition/)



#### 2.1.4.4 并查集

​        并查集主要是解决图论中**「动态连通性」**问题的。**如果某两个节点被连通，则让其中的（任意）一个节点的根节点接到另一个节点的根节点上**：**因为如果节点 p 和 q 连通的话，它们一定拥有相同的根节点**。

```java
int count;//连通分量个数
int[] pre = new int[100005];
private void init( int n ){
    count = n;
    for( int i = 0 ; i < n ; i++ ) pre[i] = i;
}
private int find( int n ){    
    return n == pre[n] ? n : ( pre[n] = find(pre[n]) );
}
private void merge( int u , int v ){    
    int x = find(u);    
    int y = find(v);    
    if( x != y ) pre[y] = x;
    count--;//连通分量个数减少
}
public boolean connected( int p , int q ){
    int rootP = find(p);
    int rootQ = find(q);
    return rootP == rootQ;
}
```

+ [547. 省份数量 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-provinces/)

+ [684. 冗余连接 - 力扣（LeetCode）](https://leetcode.cn/problems/redundant-connection/)
+ [323. 无向图中连通分量的数目 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/)



### 2.1.5 最小生成树

​        **先说「树」和「图」的根本区别：树不会包含环，图可以包含环**。**所有可能的生成树中，权重和最小的那棵生成树就叫「最小生成树」**。一般有两种算法，Kruskal 算法和 Prim 算法。

#### 2.1.5.1 Kruskal

​        Kruskal 算法的一个难点是保证生成树的合法性，因为在构造生成树的过程中，你首先得保证生成的是棵树（不包含环），所以需要用到并查集，并查集见1.1.4部分，**对于添加的这条边，如果该边的两个节点本来就在同一连通分量里，那么添加这条边会产生环；反之，如果该边的两个节点不在同一连通分量里，则添加这条边不会产生环**。

​        **将所有边按照权重从小到大排序，从权重最小的边开始遍历，如果这条边和 mst（已经构建的边集合） 中的其它边不会形成环，则这条边是最小生成树的一部分，将它加入 mst 集合；否则，这条边不是最小生成树的一部分，不要把它加入 mst 集合**。

```java
int count;//连通分量个数
int[] pre = new int[100005];
private void init( int n ){
    count = n;
    for( int i = 0 ; i < n ; i++ ) pre[i] = i;
}
private int find( int n ){    
    return n == pre[n] ? n : ( pre[n] = find(pre[n]) );
}
private void merge( int u , int v ){    
    int x = find(u);    
    int y = find(v);    
    if( x != y ) pre[y] = x;
    count--;//连通分量个数减少
}
public boolean connected( int p , int q ){
    int rootP = find(p);
    int rootQ = find(q);
    return rootP == rootQ;
}
public int kruskal( int[][] edges , int n ) {
    //points 为路线 [1 , 2]表示1 和 2连接  w数组为每条边的权重
    init(n);
    int sum = 0;//权值和
    // 根据权值 w 降序
    Arrays.sort(points , (a, b) -> a[2] - b[2]);
    //Kruskal需要对所有的边进行排序，然后从小到大，依次遍历每条边.
    //同时判断每条边是否同源，如果同源，跳过；
    // 如果不同源，将两个连通分量合并，直到所有顶点属于同一个连通分量，算法结束
    for( int[] edge : edges ){
    	int u = edge[0] , v = edge[1] , val = edge[2];
        if( find(u) != find(v) ){
            merge( u , v );
            sum += val;
        }
    }
    //这里的count的数量得看0节点没有用 若没用0 则会有两个连通分量
    if( count != 1 ) return -1;//无法构成最小生成树
    return ans;
}

```



#### 2.1.5.2 Prim

​        **Prim 算法使用 BFS 算法思想 和 visited 布尔数组避免成环**。

```java
public int prim(List<int[]>[] graph , int n) {
    // [起点，终点，权重]
    PriorityQueue<int[]> pq = new PriorityQueue<>((e1, e2)->e1[2]-e2[2]);
    // 为了统一初始操作和其后的操作，预先放入一个值
    pq.offer( new int[]{ -1 , 1 , 0 } );
    // 用布尔数组代替HashSet可以提高50%性能
    boolean[] visited = new boolean[n + 1];
    // 已经访问的节点数量
    int visitedCnt = 0;
    // 总权重
    int costs = 0;
    while( !pq.isEmpty() ){
        int[] edge = pq.poll();
        int next = edge[1];
        // 如果没有访问过
        if( !visited[next] ){
            // 那么把终点加入到以访问清单中，同时累加权重
            visited[next] = true;
            visitedCnt++;
            costs += edge[2];
            // 当全部节点都访问过时结束
            if( visitedCnt == n) break;
            // 把当前节点连向所有其他未访问节点的边加入堆
            for( int i = 0 ; i < graph[next].size() ; i++ ){
                int to = graph[next].get(i)[1];
                if( !visited[to] ){
                    pq.offer(graph[next].get(i));
                }
            }
        }
    }
    //System.out.println(visitedCnt);
    if( visitedCnt != n ) return -1;
    return costs;
}
```



+ [1584. 连接所有点的最小费用 - 力扣（LeetCode）](https://leetcode.cn/problems/min-cost-to-connect-all-points/)
+ [1135. 最低成本联通所有城市 - 力扣（LeetCode）](https://leetcode.cn/problems/connecting-cities-with-minimum-cost/)（无向图）



### 2.1.6 最短路

​        各种算法都可以过下面这题。

+ [743. 网络延迟时间 - 力扣（LeetCode）](https://leetcode.cn/problems/network-delay-time/)

+ [1334. 阈值距离内邻居最少的城市 - 力扣（LeetCode）](https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)（无向图）



#### 2.1.6.1 Floyd

```java
int poiont_num , edg_num ;//点数量 和边数量
int[][] w = new int[105][105]; //邻接矩阵
void init(){//初始化权值  i是本身就是0  不然就初始化为最大
    for( int i = 1 ; i <= poiont_num ; i++ ){
        for( int j = 1 ; j <= poiont_num ; j++ ){
            if( i != j ) w[i][j] = Integer.MAX_VALUE / 2; 
            // 两个int 相加要爆int范围 所以要除以2
        }
    }
}
void floyd(){
    for( int k = 1 ; k <= poiont_num ; k++ ){ // 添加转折点k
        for( int i = 1 ; i <= poiont_num ; i++ ){
            for( int j = 1 ; j <= poiont_num ; j++ ){
                w[i][j] = Math.min( w[i][j] , w[i][k] + w[k][j] );
            }
        }
    }
}
public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    init();
    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        w[u][v] = c;
    }

    floyd();//更新完w数组为最短路
    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , w[k][i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


#### 2.1.6.2 dijkstra

​        有两种版本，一种堆优化版本，一种邻接矩阵版本。**该算法无法处理负权边**。

```java
//O(n^2)  邻接矩阵  朴素版本  常用稠密图  m == n^2
int poiont_num , edg_num ;//点数量 和边数量
int[][] w = new int[1005][1005]; //邻接矩阵 w[a][b] = c   a -> b权重为c
boolean[] vis = new boolean[10005]; // 记录点 是否被更新过
int[] dist = new int[105];// dist[x] = y 表示从起点 到点x 的最短距离为y
void init(){//初始化权值  i是本身就是0  不然就初始化为最大
    for( int i = 1 ; i <= poiont_num ; i++ ){
        for( int j = 1 ; j <= poiont_num ; j++ ){
            if( i != j ) w[i][j] = Integer.MAX_VALUE / 2; 
            // 两个int 相加要爆int范围 所以要除以2
        }
    }
}
void dijkstra( int beg ){//单源起点
    Arrays.fill( vis , false );//刚开始所有的点都没更新过
    Arrays.fill( dist , Integer.MAX_VALUE / 2 );
    dist[beg] = 0; //起点为0        
    for( int k = 1 ; k <= poiont_num ; k++ ){
        int t = -1;//找到  最短距离最小  且没被更新过的点t
        for( int i = 1 ; i <= poiont_num ; i++ ){
            if( !vis[i] && ( t == -1 || dist[i] < dist[t] ) ) t = i;
        }
        vis[t] = true;//点t已经被更新
        //用t当中转点  更新其他点的距离
        for( int i = 1 ; i <= poiont_num ; i++ ){
            dist[i] = Math.min( dist[i] , dist[t] + w[t][i] );
        }
    }
}
public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    init();
    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        w[u][v] = c;
    }

    dijkstra(k);//更新完是dist数组是起点到i的最短路

    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , dist[i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


```java
//堆优化版本  常用稀疏图  m == n
int poiont_num , edg_num ;//点数量 和边数量
boolean[] vis = new boolean[10005]; // 记录点 是否被更新过
int[] dist = new int[10005];// dist[x] = y 表示从起点 到点x 的最短距离为y
void dijkstra( int beg , List<int[]>[] graph ){//单源起点
    Arrays.fill( vis , false );//刚开始所有的点都没更新过
    Arrays.fill( dist , Integer.MAX_VALUE / 2 );
    dist[beg] = 0; //起点为0
    //优先队列存储可以更新的所有点  ( 点编号 , 起点到该点的距离 ) 所以按距离最小建立堆
    PriorityQueue<int[]> queue = new PriorityQueue<>((a , b) -> a[1] - b[1]);
    queue.add(new int[]{beg , 0});//添加起点
    while( !queue.isEmpty() ){
        int[] poll = queue.poll();
        int id = poll[0] , dis = poll[1];
        if( vis[id] ) continue;//这个点被更新过
        vis[id] = true;//开始更新该点            
        for( int[] neighbor : graph[id] ){
            int nextNodeID = neighbor[0];
            int distToNextNode = dist[id] + neighbor[1];
            // 更新 dp table
            if( dist[nextNodeID] > distToNextNode ) {
                dist[nextNodeID] = distToNextNode;
                queue.offer(new int[]{nextNodeID, distToNextNode});
            }
        }
    }
}
public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    List<int[]>[] graph = new LinkedList[n + 1];
    for (int i = 1; i <= n; i++) {
        graph[i] = new LinkedList<>();
    }

    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        graph[u].add(new int[]{v , c});
    }

    dijkstra(k , graph);//更新完是dist数组是起点到i的最短路
    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , dist[i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


​       还有一种链式前向星版本，大数据范围下可以优化。

```java
//O(mlogn+n)  链式前向星  堆优化版本  常用稀疏图  m == n
int poiont_num , edg_num ;//点数量 和边数量
boolean[] vis = new boolean[105]; // 记录点 是否被更新过
int[] dist = new int[105];// dist[x] = y 表示从起点 到点x 的最短距离为y    
int id; //第 id 条边
int[] head = new int[105]; //head[a] = id 起点是a的边的最大编号是 id
int[] to = new int[6005]; // 第 id 条边a -> b 去的终点 to[id] = b;
int[] next = new int[6005]; //next[id] = idx 表示和第 id 条边 起点相同的 下一条边的编号是idx
int[] w = new int[6005]; //权重

void add( int a , int b , int c ){
    next[id] = head[a];
    head[a] = id;
    to[id] = b;
    w[id] = c;
    id++;
}

void dijkstra( int beg ){//单源起点
    Arrays.fill( vis , false );//刚开始所有的点都没更新过
    Arrays.fill( dist , Integer.MAX_VALUE / 2 );
    dist[beg] = 0; //起点为0

    //优先队列存储可以更新的所有点  ( 点编号 , 起点到该点的距离 ) 所以按距离最小建立堆
    PriorityQueue<int[]> queue = new PriorityQueue<>((a , b) -> a[1] - b[1]);
    queue.add(new int[]{beg , 0});//添加起点
    while( !queue.isEmpty() ){
        int[] poll = queue.poll();
        int id = poll[0] , dis = poll[1];
        if( vis[id] ) continue;//这个点被更新过
        vis[id] = true;//开始更新该点

        //head一开始初始化成了 -1
        for( int i = head[id] ; i != -1 ; i = next[i] ){
            int t = to[i]; // 该边要去的点;
            //起点去点t的距离 大于 起点去点id的距离 + 当前id -> t代表的这条边的权重 id -> t = w[i]
            if( dist[t] > dist[id] + w[i] ){
                dist[t] = dist[id] + w[i];
                queue.add(new int[]{ t , dist[t] } );
            }
        }
    }
}
public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    Arrays.fill( head , -1 );//初始化
    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        add( u , v , c );
    }

    dijkstra(k);//更新完是dist数组是起点到i的最短路

    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , dist[i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


#### 2.1.6.3 Spfa和bellman_ford(负权边)



```java
//O(mlogn+n)  链式前向星  堆优化版本  常用稀疏图  m == n
int poiont_num , edg_num ;//点数量 和边数量
boolean[] vis = new boolean[105]; // 记录点 是否在队列中
int[] dist = new int[105];// dist[x] = y 表示从起点 到点x 的最短距离为y    
int id; //第 id 条边
int[] head = new int[105]; //head[a] = id 起点是a的边的最大编号是 id
int[] to = new int[6005]; // 第 id 条边a -> b 去的终点 to[id] = b;
int[] next = new int[6005]; //next[id] = idx 表示和第 id 条边 起点相同的 下一条边的编号是idx
int[] w = new int[6005]; //权重

void add( int a , int b , int c ){
    next[id] = head[a];
    head[a] = id;
    to[id] = b;
    w[id] = c;
    id++;
}
void spfa( int beg ) { // 解决带有 负数权的最短路  优化Bellman Ford
    // 起始先将所有的点标记为「距离为正无穷」
    Arrays.fill(dist, Integer.MAX_VALUE / 2);
    // 只有起点最短距离为 0
    dist[beg] = 0;

    Deque<Integer> deque = new ArrayDeque<>();//存储 点的 编号
    deque.addLast(beg);
    vis[beg] = true;

    while( !deque.isEmpty() ){
        int point_id = deque.pollFirst();
        vis[point_id] = false;//出队了 不在队列

        for( int i = head[point_id] ; i != -1 ; i = next[i] ){
            int t = to[i];
            if( dist[t] > dist[point_id] + w[i] ){
                dist[t] = dist[point_id] + w[i];
                if( vis[t] ) continue; //已经在队列了
                deque.addLast( t );
                vis[t] = true;//入队了
            }
        }

    }
}

public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    Arrays.fill( head , -1 );//初始化
    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        add( u , v , c );
    }

    spfa(k);//更新完是dist数组是起点到i的最短路

    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , dist[i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


```java
//O(mlogn+n)  链式前向星  堆优化版本  常用稀疏图  m == n
int poiont_num , edg_num ;//点数量 和边数量
boolean[] vis = new boolean[105]; // 记录点 是否被更新过
int[] dist = new int[105];// dist[x] = y 表示从起点 到点x 的最短距离为y    
int id; //第 id 条边
int[] head = new int[105]; //head[a] = id 起点是a的边的最大编号是 id
int[] to = new int[6005]; // 第 id 条边a -> b 去的终点 to[id] = b;
int[] next = new int[6005]; //next[id] = idx 表示和第 id 条边 起点相同的 下一条边的编号是idx
int[] w = new int[6005]; //权重

void add( int a , int b , int c ){
    next[id] = head[a];
    head[a] = id;
    to[id] = b;
    w[id] = c;
    id++;
}
void bf( int beg ) { // 解决带有 负数权的最短路
    // 起始先将所有的点标记为「距离为正无穷」
    Arrays.fill(dist, Integer.MAX_VALUE / 2);
    // 只有起点最短距离为 0
    dist[beg] = 0;

    // 迭代 n 次
    for (int k = 1; k <= poiont_num; k++) {
        int[] prev = dist.clone();
        // 每次都使用上一次迭代的结果，执行松弛操作
        for (int a = 1; a <= poiont_num ; a++) {
            for (int i = head[a]; i != -1; i = next[i]) {
                int b = to[i];
                dist[b] = Math.min(dist[b], prev[a] + w[i]);
            }
        }
    }
}

public int cul(int[][] points, int n, int k) {
    poiont_num = n; edg_num = k;
    Arrays.fill( head , -1 );//初始化
    for( int[] point : points ){
        int u = point[0];
        int v = point[1];
        int c = point[2];
        add( u , v , c );
    }

    bf(k);//更新完是dist数组是起点到i的最短路

    int ans = 0;
    for( int i = 1 ; i <= n ; i++ ) ans = Math.max( ans , dist[i] );
    if( ans == Integer.MAX_VALUE / 2 ) return -1;
    return ans;
}
```


### 2.1.7 前缀树

​        这里只给出最简单的实现，复杂的个人觉得可以没必要掌握。常用来匹配字符串的前缀，字符串是否存在等问题。
​    

```java
class Trie {
    boolean val;
    Trie[] children;
    int R = 256;//ASCII的最大为256
    public Trie() {
        val = false;
        children = new Trie[26];
   	}
    public void insert(String word) {
        Trie root = this;
        for( int i = 0 ; i < word.length() ; i++ ){
            int x = word.charAt(i) - 'a'; 
            if( root.children[x] == null ) root.children[x] = new Trie();
            root = root.children[x];
        }
        root.val = true;
    }

    public boolean search(String word) {
        Trie root = this;
        for( int i = 0 ; i < word.length() ; i++ ){
            int x = word.charAt(i) - 'a'; 
            if( root.children[x] == null ) return false;
            root = root.children[x];
        }
        return root.val;

    }
    //求最短前缀
	public String shortestPrefixOf(String query) {
       Trie root = this;
        // 从节点 node 开始搜索 key
        for( int i = 0; i < query.length() ; i++ ){
            if( root == null ){
                // 无法向下搜索
                return "";
            }
            if( root.val == true ){
                // 找到一个键是 query 的前缀
                return query.substring( 0 , i );
            }
            // 向下搜索
            char c = query.charAt(i);
            root = root.children[c - 'a'];
        }

        if( root != null && root.val != false){
            // 如果 query 本身就是一个键
            return query;
        }
        return "";
    }
    public boolean startsWith(String prefix) {
        Trie root = this;
        for( int i = 0 ; i < prefix.length() ; i++ ){
            int x = prefix.charAt(i) - 'a'; 
            if( root.children[x] == null ) return false;
            root = root.children[x];
        }
        return true;

    }
}
```
+ [648. 单词替换 - 力扣（LeetCode）](https://leetcode.cn/problems/replace-words/)
+ [211. 添加与搜索单词 - 数据结构设计 - 力扣（LeetCode）](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)
+ 



### 2.1.8 设计数据结构

​        都是一些设计题，要求实现一个数据结构，实现一些函数，而且空间复杂度和时间复杂度都要最优。很多题目不能使用自带的数据结构，要自己实现，比如实现双向链表等。

+ [146. LRU 缓存 - 力扣（LeetCode）](https://leetcode.cn/problems/lru-cache/)
+ [460. LFU 缓存 - 力扣（LeetCode）](https://leetcode.cn/problems/lfu-cache/)
+ [295. 数据流的中位数 - 力扣（LeetCode）](https://leetcode.cn/problems/find-median-from-data-stream/)
+ [二叉堆详解实现优先级队列 :: labuladong的算法小抄 (gitee.io)](https://labuladong.gitee.io/algo/2/23/65/)
+ [设计朋友圈时间线功能 :: labuladong的算法小抄 (gitee.io)](https://labuladong.gitee.io/algo/2/23/67/)

还包括前面的用队列实现栈，用栈实现队列。



### 2.1.9 队列

#### 2.1.9.1 单调队列

+ [239. 滑动窗口最大值 - 力扣（LeetCode）](https://leetcode.cn/problems/sliding-window-maximum/)



#### 2.1.9.2 优先队列

+ [451. 根据字符出现频率排序 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-characters-by-frequency/)
+ [253. 会议室 II - 力扣（LeetCode）](https://leetcode.cn/problems/meeting-rooms-ii/)
+ [347. 前 K 个高频元素 - 力扣（LeetCode）](https://leetcode.cn/problems/top-k-frequent-elements/)
+ [2402. 会议室 III - 力扣（LeetCode）](https://leetcode.cn/problems/meeting-rooms-iii/)



## 2.2 双指针

​        双指针是一种很常见的算法，可以节约很多时间，也需要掌握。

### 2.2.1 链表

​        详情见1.1.1.2部分

### 2.2.2 数组(或字符串)

+ [167. 两数之和 II - 输入有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)
+ [5. 最长回文子串 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-palindromic-substring/)
+ [344. 反转字符串 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-string/)



### 2.2.3 二分

​        下面是常见的二分，就无需多介绍了，主要在于求左边边界和右边边界的时候。

```java
int binary_search(int[] nums, int target) {
    int left = 0, right = nums.length - 1; 
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1; 
        } else if(nums[mid] == target) {
            // 直接返回
            return mid;
        }
    }
    // 找不到直接返回
    return -1;
}

//找左边边界
int left_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定左侧边界
            right = mid - 1;
        }
    }
    // 判断 target 是否存在于 nums 中
    // 此时 target 比所有数都大，返回 -1
    if (left == nums.length) return -1;
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
}
//找右边边界
int right_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }
    // 此时 left - 1 索引越界
    if (left - 1 < 0) return -1;
    // 判断一下 nums[left] 是不是 target
    return nums[left - 1] == target ? (left - 1) : -1;
}
```

+ [33. 搜索旋转排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
+ [162. 寻找峰值 - 力扣（LeetCode）](https://leetcode.cn/problems/find-peak-element/)

​        找边界，有时候需要转换问题，找到自变量x，用二分求符合条件的x的值，一般此种类型的题目，需要找到符合条件的函数，约束的target，和x的取值范围。

+ [34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
+ [875. 爱吃香蕉的珂珂 - 力扣（LeetCode）](https://leetcode.cn/problems/koko-eating-bananas/)
+ [410. 分割数组的最大值 - 力扣（LeetCode）](https://leetcode.cn/problems/split-array-largest-sum/)

## 2.3 前缀和 差分

​        前缀和和差分在有些求和区间查询问题上十分常见，更难一些的题目是利用前缀和和差分去构建树状数组，但是这里首先需要了解前缀和和差分的做法。

​        下面就是一个前缀和代码，**前缀和主要适用的场景是原始数组不会被修改的情况下，频繁查询某个区间的累加和。**

```java
int[] sum;
public NumArray(int[] nums) {
	int n = nums.length;
	sum = new int[n + 1];
    //计算前缀和
	for( int i = 0 ; i < n ; i++ ) sum[i + 1] = sum[i] + nums[i];
}
//区间求和
public int sumRange(int left, int right) { 
	return sum[right + 1] - sum[left];
}
```

+ [304. 二维区域和检索 - 矩阵不可变 - 力扣（LeetCode）](https://leetcode.cn/problems/range-sum-query-2d-immutable/)
+ [862. 和至少为 K 的最短子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/)



​        **差分数组的主要适用场景是频繁对原始数组的某个区间的元素进行增减**，通过构建差分数组就可以快速的得到所有操作完成后的最终数组。下面就是差分数组对于在[left , rigth]对整个区间增加或减少val的操作。

```java
public void increment(int left , int right , int val){
    diff[left] += val;
    if(right + 1 < dff.length) {
        diff[right + 1] -= val;
    }
}
```

​        而使用如下代码可以得到最终的数组。

```java
for( int i = 1 ; i < length ; i++ ) diff[i] += diff[i - 1];
```



+ [370. 区间加法 - 力扣（LeetCode）](https://leetcode.cn/problems/range-addition/)
+ [1109. 航班预订统计 - 力扣（LeetCode）](https://leetcode.cn/problems/corporate-flight-bookings/)
+ [1094. 拼车 - 力扣（LeetCode）](https://leetcode.cn/problems/car-pooling/)

## 2.4 奇怪的逻辑题(包含螺旋数组)

​        这种题目比较考验你的代码能力，还有思考能力，一般细节比较多，笔试中要是遇到了写不出来可能会花大量时间，得不偿失。

### 2.4.1 代码能力

+ [59. 螺旋矩阵 II - 力扣（LeetCode）](https://leetcode.cn/problems/spiral-matrix-ii/)
+ [54. 螺旋矩阵 - 力扣（LeetCode）](https://leetcode.cn/problems/spiral-matrix/)
+ [48. 旋转图像 - 力扣（LeetCode）](https://leetcode.cn/problems/rotate-image/)
+ [151. 反转字符串中的单词 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-words-in-a-string/)
+ [43. 字符串相乘 - 力扣（LeetCode）](https://leetcode.cn/problems/multiply-strings/)（还有一些高精度的加法等）



### 2.4.2 思维数学递推

​        下面放一些常见的数学或者思维题，还是要掌握的。

```java
public static int gcd( int a , int b ){ // a b 最大公约数
    return b != 0 ? gcd( b ,a % b ) : a;
}
public static int qpower( int a , int b , int mod ){//快速幂取模
    int res = 1;
    a %= mod;
    while( b != 0 ){
        if( (b & 1) != 0 ) res = res * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return res;
}
```
+ [172. 阶乘后的零 - 力扣（LeetCode）](https://leetcode.cn/problems/factorial-trailing-zeroes/)
+ [870. 优势洗牌 - 力扣（LeetCode）](https://leetcode.cn/problems/advantage-shuffle/)（田忌赛马策略）
+ [204. 计数质数 - 力扣（LeetCode）](https://leetcode.cn/problems/count-primes/)

+ [372. 超级次方 - 力扣（LeetCode）](https://leetcode.cn/problems/super-pow/)

+ [319. 灯泡开关 - 力扣（LeetCode）](https://leetcode.cn/problems/bulb-switcher/)
+ [292. Nim 游戏 - 力扣（LeetCode）](https://leetcode.cn/problems/nim-game/)



## 2.5 滑动窗口

​        滑动窗口一般就是维护一个窗口，遍历的时候，不断有新的元素从窗口右边进来，同时为了保持窗口的合法性，要不断从窗口左边去弹出。滑动窗口的框架如下。

```java
void slidingWindow(string s) {
    unordered_map<char, int> window;
	int left = 0, right = 0;
	while (right < s.size()) {
    // c 是将移入窗口的字符
        char c = s[right];
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...
        /*** debug 输出的位置 ***/
        printf("window: [%d, %d)\n", left, right);
        /********************/

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {//保证窗口的合法性
            // d 是将移出窗口的字符
            char d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```
+ [3. 无重复字符的最长子串 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
+ [76. 最小覆盖子串 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-window-substring/)
+ [209. 长度最小的子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-size-subarray-sum/)
+ [239. 滑动窗口最大值 - 力扣（LeetCode）](https://leetcode.cn/problems/sliding-window-maximum/)
+ [713. 乘积小于 K 的子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/subarray-product-less-than-k/)



## 2.6 字符串

### 2.6.1 kmp

​        寻找needle在haystack第一次出现的位置，用kmp算法，构造一个最长公共前后缀，这样就可以不用每次从头开始匹配，节约时间。

```java
public int strStr(String haystack, String needle) {    
	if( needle == null || needle.length() == 0 ) return 0;    
	int[] next = new int[needle.length()];    
	getNext(next , needle);    
	int j = 0;    
	for (int i = 0; i < haystack.length(); i++) {        
		//不相等找前缀表        
		while( j > 0 && needle.charAt(j) != haystack.charAt(i) ) j = next[j - 1];        		 if (needle.charAt(j) == haystack.charAt(i)) j++;        
		if( j == needle.length() ) return i - needle.length() + 1;    
	}    
	return -1;
}
//前缀表 最长公共前后缀
private void getNext(int[] next, String s) {    
	int j = 0;    
	next[0] = 0;    
	for( int i = 1; i < s.length(); i++ ){        
		while( j > 0 && s.charAt(j) != s.charAt(i) ) j = next[j - 1];        
		if( s.charAt(j) == s.charAt(i) ) j++;        
		next[i] = j;    
	}
}
```

+ [28. 找出字符串中第一个匹配项的下标 - 力扣（LeetCode）](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)



### 2.6.2 字符串hash

​        维护一个滑动窗口，在字符串匹配的时候可以节约时间。**也叫Rabin-Karp算法，运用滑动哈希算法一边滑动一边计算窗口中字符串的哈希值，拿这个哈希值去和模式串的哈希值比较，这样就可以避免截取子串，从而把匹配算法降低为 O(N)，这就是 Rabin-Karp 指纹字符串查找算法的核心逻辑**

```java
// 文本串
String txt;
// 模式串
String pat;
// 需要寻找的子串长度为模式串 pat 的长度
int len = pat.length();
// 仅处理 ASCII 码字符串，可以理解为 256 进制的数字
int R = 256;
// 存储 R^(L - 1) 的结果
int RL = (int) Math.pow(R, len - 1);
// 维护滑动窗口中字符串的哈希值
int windowHash = 0;
// 计算模式串的哈希值
long patHash = 0;
for (int i = 0; i < pat.length(); i++) {
    patHash = R * patHash + pat.charAt(i);
}
// 滑动窗口代码框架
int left = 0, right = 0;
while (right < txt.length()) {
    // 扩大窗口，移入字符（在最低位添加数字）
    windowHash = R * windowHash + txt[right];
    right++;
	// 当子串的长度达到要求
    if (right - left == len) {
        // 根据哈希值判断窗口中的子串是否匹配模式串 pat
        if (patHash == windowHash) {
            // 找到模式串
            print("找到模式串，起始索引为", left);
            return left;
        }
        // 缩小窗口，移出字符（删除最高位数字）
        windowHash = windowHash - txt[left] * RL;
        left++;
    }
}
// 没有找到模式串
return -1;
```
+ [187. 重复的DNA序列 - 力扣（LeetCode）](https://leetcode.cn/problems/repeated-dna-sequences/)

## 2.7 随机算法

### 2.7.1 蓄水池抽样

​        总的样本数量未知，从所有样本中抽取若干个，要求每个样本被抽到的概率相等

+ [【宫水三叶】蓄水池抽样运用题 - 链表随机节点 - 力扣（LeetCode）](https://leetcode.cn/problems/linked-list-random-node/solution/gong-shui-san-xie-xu-shui-chi-chou-yang-1lp9d/)
+ [382. 链表随机节点 - 力扣（LeetCode）](https://leetcode.cn/problems/linked-list-random-node/)
+ [398. 随机数索引 - 力扣（LeetCode）](https://leetcode.cn/problems/random-pick-index/)



### 2.7.2 带权重随机

​        带权重的数字可以转换成为前缀和数组，将每个权重转为长度为权重的线段，然后用二分查找优化时间。

```java
	class Solution {
        // 前缀和数组
        private int[] preSum;
        private Random rand = new Random();
        public Solution(int[] w) {
            int n = w.length;
            // 构建前缀和数组，偏移一位留给 preSum[0]
            preSum = new int[n + 1];
            preSum[0] = 0;
            // preSum[i] = sum(w[0..i-1])
            for (int i = 1; i <= n; i++) {
                preSum[i] = preSum[i - 1] + w[i - 1];
            }
        }

        public int pickIndex() {
            int n = preSum.length;
            // 在闭区间 [1, preSum[n - 1]] 中随机选择一个数字
            int target = rand.nextInt(preSum[n - 1]) + 1;
            // 获取 target 在前缀和数组 preSum 中的索引
            // 别忘了前缀和数组 preSum 和原始数组 w 有一位索引偏移
            return left_bound(preSum, target) - 1;
        }

        // 搜索左侧边界的二分搜索
        private int left_bound(int[] nums, int target) {
            int left = 0 , right = nums.length - 1;
            while( left <= right ){
                int mid = left + ( right - left ) / 2;
                if( nums[mid] >= target ) right = mid - 1;
                else left = mid + 1;
            }
            // 判断 target 是否存在于 nums 中
            // 此时 target 比所有数都大，返回 -1
            return left;
        }
    }
```

+ [528. 按权重随机选择 - 力扣（LeetCode）](https://leetcode.cn/problems/random-pick-with-weight/)

### 2.7.3 普通随机(O(1))

​        这类问题需要在常数空间，O(1)时间内解决。

+ [380. O(1) 时间插入、删除和获取随机元素 - 力扣（LeetCode）](https://leetcode.cn/problems/insert-delete-getrandom-o1/)
+ [710. 黑名单中的随机数 - 力扣（LeetCode）](https://leetcode.cn/problems/random-pick-with-blacklist/)



### 2.7.4 洗牌算法

+ [【宫水三叶】洗牌算法模板题 - 打乱数组 - 力扣（LeetCode）](https://leetcode.cn/problems/shuffle-an-array/solution/gong-shui-san-xie-xi-pai-suan-fa-yun-yon-0qmy/)
+ [384. 打乱数组 - 力扣（LeetCode）](https://leetcode.cn/problems/shuffle-an-array/)



## 2.8 排序

​        排序算法很重要，不仅要知道稳定性，还要知道时间复杂度，空间复杂度，对于常见的排序还需要会自己实现。对于这些基础东西直接去看下面的链接。总结的很好。快排、堆排、归并等是重点。

​        对于序列中的相同元素，如果排序之后它们的相对位置没有发生改变，则称该排序算法为「稳定排序」，反之则为「不稳定排序」。

+ [十大经典排序算法总结 | JavaGuide](https://javaguide.cn/cs-basics/algorithms/10-classical-sorting-algorithms.html#简介)

  可以用各种排序代码过下面这个题：

+ [912. 排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/)



### 2.8.1 归并排序

​        归并排序常用来解决**逆序对**问题，常见的计算逆序对的总和，某一点有多少个逆序等等等。先把左半边数组排好序，再把右半边数组排好序，然后把两半数组合并。

+ [315. 计算右侧小于当前元素的个数 - 力扣（LeetCode）](https://leetcode.cn/problems/count-of-smaller-numbers-after-self/)
+ [327. 区间和的个数 - 力扣（LeetCode）](https://leetcode.cn/problems/count-of-range-sum/)
+ [493. 翻转对 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-pairs/)



### 2.8.2 快速排序

​        **快速排序是先将一个元素排好序，然后再将剩下的元素排好序**。**快速排序的过程是一个构造二叉搜索树的过程**。

​        快速选择排序比快排更优，见下题。

+ [215. 数组中的第K个最大元素 - 力扣（LeetCode）](https://leetcode.cn/problems/kth-largest-element-in-an-array/)



## 2.9 动态规划

1. 确定dp数组（dp table）以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组

​        遍历方向要遵循如下要求。

1. **遍历的过程中，所需的状态必须是已经计算出来的**。
2. **遍历结束后，存储结果的那个位置必须已经被计算出来**



### 2.9.1 经典DP

+ [322. 零钱兑换 - 力扣（LeetCode）](https://leetcode.cn/problems/coin-change/)
+ [64. 最小路径和 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-path-sum/)
+ [174. 地下城游戏 - 力扣（LeetCode）](https://leetcode.cn/problems/dungeon-game/)
+ [42. 接雨水 - 力扣（LeetCode）](https://leetcode.cn/problems/trapping-rain-water/)
+ [84. 柱状图中最大的矩形 - 力扣（LeetCode）](https://leetcode.cn/problems/largest-rectangle-in-histogram/)
+ [343. 整数拆分 - 力扣（LeetCode）](https://leetcode.cn/problems/integer-break/)



### 2.9.2 子序列问题

+ [72. 编辑距离 - 力扣（LeetCode）](https://leetcode.cn/problems/edit-distance/)
+ [53. 最大子数组和 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-subarray/)
+ [1143. 最长公共子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-common-subsequence/)
+ [583. 两个字符串的删除操作 - 力扣（LeetCode）](https://leetcode.cn/problems/delete-operation-for-two-strings/)
+ [1312. 让字符串成为回文串的最少插入次数 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
+ [300. 最长递增子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-increasing-subsequence/)
+ [718. 最长重复子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)
+ [392. 判断子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/is-subsequence/)
+ [115. 不同的子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/distinct-subsequences/)



### 2.9.3 背包问题

01 背包

+ [416. 分割等和子集 - 力扣（LeetCode）](https://leetcode.cn/problems/partition-equal-subset-sum/)
+ [1049. 最后一块石头的重量 II - 力扣（LeetCode）](https://leetcode.cn/problems/last-stone-weight-ii/)
+ [494. 目标和 - 力扣（LeetCode）](https://leetcode.cn/problems/target-sum/)
+ [474. 一和零 - 力扣（LeetCode）](https://leetcode.cn/problems/ones-and-zeroes/)



完全背包

+ [518. 零钱兑换 II - 力扣（LeetCode）](https://leetcode.cn/problems/coin-change-ii/)
+ [377. 组合总和 Ⅳ - 力扣（LeetCode）](https://leetcode.cn/problems/combination-sum-iv/)
+ [139. 单词拆分 - 力扣（LeetCode）](https://leetcode.cn/problems/word-break/)



### 2.9.4 打家劫舍问题

​        面试或者笔试常考。

+ [198. 打家劫舍 - 力扣（LeetCode）](https://leetcode.cn/problems/house-robber/)
+ [213. 打家劫舍 II - 力扣（LeetCode）](https://leetcode.cn/problems/house-robber-ii/)
+ [337. 打家劫舍 III - 力扣（LeetCode）](https://leetcode.cn/problems/house-robber-iii/)



### 2.9.5 股票问题

​        面试或者笔试常考。

```java
n 为天数，大 K 为交易数的上限，0 和 1 代表是否持有股票。
base case：
dp[-1][...][0] = dp[...][0][0] = 0
dp[-1][...][1] = dp[...][0][1] = -infinity

状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
```



+ [121. 买卖股票的最佳时机 - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
+ [122. 买卖股票的最佳时机 II - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)
+ [123. 买卖股票的最佳时机 III - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)
+ [188. 买卖股票的最佳时机 IV - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)
+ [309. 最佳买卖股票时机含冷冻期 - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
+ [714. 买卖股票的最佳时机含手续费 - 力扣（LeetCode）](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)



## 2.10 贪心问题

​        贪心问题是步步最优，需要证明最优解。常见的就是区间问题和跳跃问题。

* 将问题分解为若干个子问题

- 找出适合的贪心策略
- 求解每一个子问题的最优解
- 将局部最优解堆叠成全局最优解

​        **贪心没有套路**，推不出来就举反例。

+ [435. 无重叠区间 - 力扣（LeetCode）](https://leetcode.cn/problems/non-overlapping-intervals/)
+ [452. 用最少数量的箭引爆气球 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)
+ [56. 合并区间 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-intervals/)
+ [45. 跳跃游戏 II - 力扣（LeetCode）](https://leetcode.cn/problems/jump-game-ii/)
+ [55. 跳跃游戏 - 力扣（LeetCode）](https://leetcode.cn/problems/jump-game/)
+ [135. 分发糖果 - 力扣（LeetCode）](https://leetcode.cn/problems/candy/)
+ [134. 加油站 - 力扣（LeetCode）](https://leetcode.cn/problems/gas-station/)
+ [11. 盛最多水的容器 - 力扣（LeetCode）](https://leetcode.cn/problems/container-with-most-water/)
+ [986. 区间列表的交集 - 力扣（LeetCode）](https://leetcode.cn/problems/interval-list-intersections/)



## 2.11 BFS

​        BFS其实就是暴力枚举，把每种符合情况的放入队列中。

### 2.11.1 岛屿问题

​        基本都是板子题，个别地方不一样稍微改一下即可通过。下面的板子要根据具体题目和注释改一些if判断。

​        可以题目可以确定起点的则不需要双重循环里面去bfs，直接将起点加入队列然后开始bfs，代码差不多。给出计算岛屿数量的模板，其他题目差不多。

```java
public int numIslands(char[][] grid) {
    Queue<int[]> queue = new LinkedList<>();
    int n = grid.length;
    int m = grid[0].length;
    int[] dx = { 1 , 0 , -1 , 0 };
    int[] dy = { 0 , 1 , 0 , -1 };
    int[][] vis = new int[n][m];
    int ans = 0;
    for( int i = 0 ; i < n ; i++ ){
        for( int j = 0 ; j < m ; j++ ){
            //没有被访问过 且grid的值符合条件的 '1'是可改值
            if( grid[i][j] == '1' && vis[i][j] == 0 ){
                queue.offer(new int[]{i , j});
                vis[i][j] = 1;//标记访问
                while( !queue.isEmpty() ){
                    int x = queue.peek()[0];
                    int y = queue.poll()[1];
                    for( int k = 0 ; k < 4 ; k++ ){
                        int n_x = x + dx[k];
                        int n_y = y + dy[k];
                        if( n_x >= 0 && n_x < n && n_y >= 0 && n_y < m && vis[n_x][n_y] == 0 && grid[n_x][n_y] == '1' ){//符合条件的
                            queue.offer(new int[]{n_x , n_y});
                            vis[n_x][n_y] = 1;//标记访问
                        }
                    }

                }
                ans++;
            }
        }
    }
    return ans;
}
```


+ [695. 岛屿的最大面积 - 力扣（LeetCode）](https://leetcode.cn/problems/max-area-of-island/)
+ [200. 岛屿数量 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-islands/)
+ [1905. 统计子岛屿 - 力扣（LeetCode）](https://leetcode.cn/problems/count-sub-islands/)
+ [827. 最大人工岛 - 力扣（LeetCode）](https://leetcode.cn/problems/making-a-large-island/)



### 2.11.2 双向bfs

​        朴素的 BFS 可能会带来**「搜索空间爆炸」**的情况。有时候可以双向bfs，**同时从两个方向开始搜索，一旦搜索到相同的值，意味着找到了一条联通起点和终点的最短路径。**

​        「双向 BFS」的基本实现思路如下：

1. 创建「两个队列」分别用于两个方向的搜索；
2. 创建「两个哈希表」用于「解决相同节点重复搜索」和「记录转换次数」；
3. 为了尽可能让两个搜索方向“平均”，每次从队列中取值进行扩展时，先判断哪个队列容量较少；
4. 如果在搜索过程中「搜索到对方搜索过的节点」，说明找到了最短路径。

```java
d1、d2 为两个方向的队列
m1、m2 为两个方向的哈希表，记录每个节点距离起点的
// 只有两个队列都不空，才有必要继续往下搜索
// 如果其中一个队列空了，说明从某个方向搜到底都搜不到该方向的目标节点
while(!d1.isEmpty() && !d2.isEmpty()) {
    if (d1.size() < d2.size()) {
        update(d1, m1, m2);
    } else {
        update(d2, m2, m1);
    }
}
// update 为将当前队列 d 中包含的元素取出，进行「一次完整扩展」的逻辑（按层拓展）
void update(Deque d, Map cur, Map other) {}
```

​        直接给出127代码为例。

```java
public class Solution {
        //双向bfs  可以节约时间  一般用两个队列同时搜
    String beg , end;
    Set<String> dict = new HashSet<>();
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        beg = beginWord;
        end = endWord;
        for( String word : wordList ) dict.add( word );
        if( !dict.contains(end) ) return 0;//vis不包含最终的单词则无解
        int ans = bfs();//-1表示不可以到达
        return ans == -1 ? 0 : ans + 1;// + 1是起点的单词数量为1
    }

    public int bfs(){
        Deque<String> deque_beg = new ArrayDeque<>();//从起点开始搜
        Deque<String> deque_end = new ArrayDeque<>();//从终点反向搜
        //map_beg 和 map_end 分别记录两个方向出现的单词是经过多少次转换而来
        //map_beg = {"abc":1} 代表 abc 由 beginWord 替换 1 次字符而来
        //map_end = {"xyz":3} 代表 xyz 由 endWord 替换 3 次字符而来
        Map<String, Integer> map_beg = new HashMap<>() , map_end = new HashMap<>();

        map_beg.put( beg , 0 );
        deque_beg.offerLast(beg);
        map_end.put( end , 0 );
        deque_end.offerLast(end);
        /*
         * 只有两个队列都不空，才有必要继续往下搜索
         * 如果其中一个队列空了，说明从某个方向搜到底都搜不到该方向的目标节点
         * e.g.
         * 例如，如果 d1 为空了，说明从 beginWord 搜索到底都搜索不到 endWord，反向搜索也没必要进行了
         */
        while( !deque_beg.isEmpty() && !deque_end.isEmpty() ){
            int t = -1;
            // 为了让两个方向的搜索尽可能平均，优先拓展队列内元素少的方向
            if( deque_beg.size() <= deque_end.size()) t = update( deque_beg , map_beg , map_end );
            else t = update( deque_end , map_end , map_beg );
            if( t != -1 ) return t;
        }
        return -1;
    }
    // update 代表从 deque 中取出一个单词进行扩展，
    // cur 为当前方向的距离字典；other 为另外一个方向的距离字典
    public int update( Deque<String> deque , Map<String , Integer> cur , Map<String , Integer> other ){
        int m = deque.size();
        //这里只能用m--才可以回到上面去调用新的update 平衡两个队列中的元素大小
        while( m-- > 0 ){
            // 获取当前需要扩展的原字符串
            String curStr = deque.pollFirst();
            char[] ch = curStr.toCharArray();
            for( int i = 0 ; i < curStr.length() ; i++ ){
                char temp = ch[i];//当前i位置的字符
                for( int j = 0 ; j < 26 ; j++ ){
                    ch[i] = (char)('a' + j);//替换 i 位置的字符;
                    String next = String.valueOf(ch);
                    if( !dict.contains(next) ) continue;// 因为转换一个字母后必须出现在单词字典中
                    // 如果该字符串在「当前方向」被记录过（拓展过），跳过即可
                    if( cur.containsKey(next) ) continue;
                    // 如果该字符串在「另一方向」出现过，说明找到了联通两个方向的最短路
                    if( other.containsKey(next) ) return cur.get(curStr) + 1 + other.get(next);
                    else {
                        // 否则加入 deque 队列
                        deque.addLast(next);
                        cur.put(next, cur.get(curStr) + 1);
                    }
                }
                ch[i] = temp;
            }
        }
        return -1;
    }
}
```



+ [127. 单词接龙 - 力扣（LeetCode）](https://leetcode.cn/problems/word-ladder/)
+ [433. 最小基因变化 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-genetic-mutation/)



### 2.11.3 状态压缩BFS

​        遇到了好多题，了解一下。

+ [【宫水三叶】常规「BFS + 状态压缩」运用题 - 获取所有钥匙的最短路径 - 力扣（LeetCode）](https://leetcode.cn/problems/shortest-path-to-get-all-keys/solution/by-ac_oier-5gxc/)
+ [864. 获取所有钥匙的最短路径 - 力扣（LeetCode）](https://leetcode.cn/problems/shortest-path-to-get-all-keys/)



### 2.11.4 其他

+ [752. 打开转盘锁 - 力扣（LeetCode）](https://leetcode.cn/problems/open-the-lock/)
+ [111. 二叉树的最小深度 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)



## 2.12 回溯问题

```java
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```



### 2.12.1 经典回溯

+ [51. N 皇后 - 力扣（LeetCode）](https://leetcode.cn/problems/n-queens/)
+ [37. 解数独 - 力扣（LeetCode）](https://leetcode.cn/problems/sudoku-solver/)

+ [22. 括号生成 - 力扣（LeetCode）](https://leetcode.cn/problems/generate-parentheses/)



​        常见的就是排列组合和子集问题，一般分为可不可以重复选取，涉及到去重问题。

​        在dfs中常用如下代码去重。

```java
if( i >= 1 && x[i] == x[i - 1] && vis.get(x[i]) == null ) continue;
```

​        在dfs中常用控制下标的方式看能不能取到重复值。

```java
for( int i = index ; i < n ;i++ )
for( int i = 0 ; i < n ;i++ )
```



​        **元素无重不可复选，即 nums 中的元素都是唯一的，每个元素最多只能被使用一次**。

```java
/* 组合/子集问题回溯算法框架 */
void backtrack(int[] nums, int start) {
    // 回溯算法标准框架
    for (int i = start; i < nums.length; i++) {
        // 做选择
        track.addLast(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}

/* 排列问题回溯算法框架 */
void backtrack(int[] nums) {
    for( int i = 0; i < nums.length; i++ ){
        // 剪枝逻辑
        if (used[i]) continue;
        // 做选择
        used[i] = true;
        track.addLast(nums[i]);
		backtrack(nums);
    	// 撤销选择
    	track.removeLast();
    	used[i] = false;
	}
}
```
​        **元素可重不可复选，即 nums 中的元素可以存在重复，每个元素最多只能被使用一次**。要先排序。




```java
Arrays.sort(nums);
/* 组合/子集问题回溯算法框架 */
void backtrack(int[] nums, int start) {
    // 回溯算法标准框架
    for (int i = start; i < nums.length; i++) {
        // 剪枝逻辑，跳过值相同的相邻树枝
        if (i > start && nums[i] == nums[i - 1]) {
            continue;
        }
        // 做选择
        track.addLast(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}

Arrays.sort(nums);
/* 排列问题回溯算法框架 */
void backtrack(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 剪枝逻辑，固定相同的元素在排列中的相对位置
        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.addLast(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.removeLast();
        used[i] = false;
    }
}
```


​        **元素无重可复选，即 nums 中的元素都是唯一的，每个元素可以被使用若干次**，只要删掉上面去重逻辑即可。

```java
/* 组合/子集问题回溯算法框架 */
void backtrack(int[] nums, int start) {
    // 回溯算法标准框架
    for (int i = start; i < nums.length; i++) {
        // 做选择
        track.addLast(nums[i]);
        // 注意参数
        backtrack(nums, i);
        // 撤销选择
        track.removeLast();
    }
}

/* 排列问题回溯算法框架 */
void backtrack(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
        // 做选择
        track.addLast(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.removeLast();
    }
}
```



### 2.12.2 子集问题

+ [698. 划分为k个相等的子集 - 力扣（LeetCode）](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/)
+ [78. 子集 - 力扣（LeetCode）](https://leetcode.cn/problems/subsets/)
+ [90. 子集 II - 力扣（LeetCode）](https://leetcode.cn/problems/subsets-ii/)



### 2.12.2 排列问题

+ [46. 全排列 - 力扣（LeetCode）](https://leetcode.cn/problems/permutations/)
+ [47. 全排列 II - 力扣（LeetCode）](https://leetcode.cn/problems/permutations-ii/)



### 2.12.2 组合问题

+ [216. 组合总和 III - 力扣（LeetCode）](https://leetcode.cn/problems/combination-sum-iii/)
+ [39. 组合总和 - 力扣（LeetCode）](https://leetcode.cn/problems/combination-sum/)
+ [40. 组合总和 II - 力扣（LeetCode）](https://leetcode.cn/problems/combination-sum-ii/)
+ [77. 组合 - 力扣（LeetCode）](https://leetcode.cn/problems/combinations/)



## 2.13 位运算

​        都是一些骚操作，要是知道的话可以很快解决一些问题，详情直接见题目然后去看题解的公式和证明。

+ [136. 只出现一次的数字 - 力扣（LeetCode）](https://leetcode.cn/problems/single-number/)
+ [191. 位1的个数 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-1-bits/)
+ [231. 2 的幂 - 力扣（LeetCode）](https://leetcode.cn/problems/power-of-two/)
+ [190. 颠倒二进制位 - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-bits/)
+ [201. 数字范围按位与 - 力扣（LeetCode）](https://leetcode.cn/problems/bitwise-and-of-numbers-range/)
+ [268. 丢失的数字 - 力扣（LeetCode）](https://leetcode.cn/problems/missing-number/)
+ [338. 比特位计数 - 力扣（LeetCode）](https://leetcode.cn/problems/counting-bits/)



















